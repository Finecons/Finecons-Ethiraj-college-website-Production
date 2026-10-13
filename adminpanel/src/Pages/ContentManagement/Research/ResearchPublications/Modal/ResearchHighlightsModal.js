import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Button,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MdCancel } from "react-icons/md";
import CustomInputLogin from "../../../../../Components/CustomInputLogin/CustomInputLogin";
import "../../../../../Components/ModalCss/BannerinputGetModal.css";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import actions from "../../../../../ReduxStore/actions";
import { clearCustomerId } from "../../../../../ReduxStore/Slices/Operator/customerSlice";
import { clearTableGetId } from "../../../../../ReduxStore/Slices/TableId/TableIdGetSlice";
import { setInitialStateOfgetResearchHighlightById } from "../../../../../ReduxStore/Slices/ContentManagement/Research/getResearchHighlightById";
// import CustomDropdownMui from "../../../../../Components/CustomDropDown/CustomDropdownMui";
import CustomDropdownMui from "../../../../../Components/CustomDropDown/CustomDropdown";

const ResearchHighlightsModal = ({
  open,
  onClose,
  setSubmittedValues,
  submittedValues,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [academics, setAcademics] = useState([]);
  const [academicsRawData, setAcademicsRawData] = useState([]);

  const { getResearchHighlightById } = useSelector(
    (state) => state?.getResearchHighlightById
  );

console.log(getResearchHighlightById, "getResearchHighlightById");

  useEffect(() => {
    if (!open) return;

    // Fetch academics with nested departments
    const fetchAcademics = async () => {
      const data = {
        data: {},
        method: "get",
        apiName: `getAllAcademics`,
      };
      const response = await dispatch(actions.GETALLACADEMICS(data));
      if (response?.payload?.data) {
        setAcademicsRawData(response.payload.data);
        setAcademics(
          response.payload.data.map((item) => ({
            label: item.academic_name,
            value: item.academic_id,
            departments: item.departments || [],
          }))
        );
      }
    };

    fetchAcademics();
  }, [open, dispatch]);

  const handleClose = () => {
    dispatch(setInitialStateOfgetResearchHighlightById());
    dispatch(clearCustomerId(null));
    dispatch(clearTableGetId(null));
    onClose();
  };

  const handleSubmit = async (values) => {
    setLoading(true);

    const payload = {
      title: values?.title,
      publisher: values?.publisher,
      description: values?.description,
      faculty_name: values?.faculty_name,
      academic_id: values?.academic_id,
      department_id: values?.department_id,
      year: values?.year ? parseInt(values.year) : null,
      ...(values?.is_important && { mark_as_important: true }),
    };

    const data1 = {
      data: payload,
      method: getResearchHighlightById?.data?.researchHighlights_id ? "put" : "post",
      apiName: getResearchHighlightById?.data?.researchHighlights_id
        ? `updateResearchHighlight/${getResearchHighlightById?.data?.researchHighlights_id}`
        : `addResearchHighlight`,
    };

    const responseData = await dispatch(
      getResearchHighlightById?.data?.researchHighlights_id
        ? actions.UPDATERESEARCHHIGHLIGHT(data1)
        : actions.ADDRESEARCHHIGHLIGHT(data1)
    );

    if (responseData?.payload?.Success) {
      setTimeout(() => {
        setLoading(false);
        handleClose();
      }, 1500);

      toast.success(responseData?.payload?.Message);

      dispatch(clearCustomerId(null));
      dispatch(clearTableGetId(null));
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1500);

      toast.error(responseData?.payload?.Message || "Error occurred");
    }
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    publisher: Yup.string(),
    description: Yup.string(),
    faculty_name: Yup.string(),
    academic_id: Yup.number()
      .typeError("Academic is required")
      .required("Academic is required"),
    department_id: Yup.number()
      .typeError("Department is required")
      .required("Department is required"),
    year: Yup.number().typeError("Year must be a number"),
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      className="custom-dialog"
      sx={{
        maxWidth: "700px",
        margin: "auto",
        "& .MuiPaper-root": {
          borderRadius: "14px",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box className="dialog-heading">
          <IconButton
            aria-label="Close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "text.secondary",
            }}
          >
            <MdCancel />
          </IconButton>
          <DialogTitle className="custom-dialog-title">
            <Box>
              <Typography
                className="custom-title-text"
                fontSize="16px"
                color="white"
              >
                {getResearchHighlightById?.data?.researchHighlights_id
                  ? "Edit Research Highlight"
                  : "Add Research Highlight"}
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            title: getResearchHighlightById?.data?.title || "",
            publisher: getResearchHighlightById?.data?.publisher || "",
            description: getResearchHighlightById?.data?.description || "",
            faculty_name: getResearchHighlightById?.data?.faculty_name || "",
            academic_id: Number(getResearchHighlightById?.data?.academic_id) || "",
            department_id: Number(getResearchHighlightById?.data?.department_id) || "",
            year: getResearchHighlightById?.data?.year || "",
            is_important: getResearchHighlightById?.data?.is_important === 1,
          }}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ handleSubmit, setFieldValue, values, errors, touched }) => {
            const getFilteredDepartments = (academicId) => {
              if (!academicId || academicsRawData.length === 0) return [];
              const academic = academicsRawData.find(
                (a) => a.academic_id === Number(academicId)
              );
              if (!academic || !academic.departments) return [];
              return academic.departments.map((dept) => ({
                label: dept.department_name,
                value: dept.department_id,
              }));
            };

            const filteredDepartments = getFilteredDepartments(
              values.academic_id
            );

            return (
            <Form onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12 }}>
                    <CustomInputLogin
                      name="title"
                      label="Title"
                      placeholder="Enter title"
                      value={values?.title}
                      onChange={(e) => setFieldValue("title", e.target.value)}
                      error={touched.title && !!errors.title}
                      helperText={touched.title && errors.title}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomDropdownMui
                      name="academic_id"
                      label="Academic"
                      options={academics}
                      custPlaceholder="Select Academic Division"
                      value={values?.academic_id}
                      onChange={(e) => {
                        setFieldValue("academic_id", Number(e.target.value));
                        setFieldValue("department_id", "");
                      }}
                      error={touched.academic_id && !!errors.academic_id}
                      helperText={touched.academic_id && errors.academic_id}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomDropdownMui
                      key={`department-${values?.academic_id}`}
                      name="department_id"
                      label="Department"
                      options={filteredDepartments}
                      custPlaceholder="Select Department Name"
                      onChange={(e) => {
                        setFieldValue("department_id", Number(e.target.value));
                      }}
                    
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomInputLogin
                      name="faculty_name"
                      label="Faculty Name"
                      placeholder="Enter faculty name"
                     
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomInputLogin
                      name="year"
                      label="Year"
                      placeholder="Enter year"
                      value={values?.year}
                  
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <CustomInputLogin
                      name="publisher"
                      label="Publisher"
                      placeholder="Enter publisher"
                   
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <CustomInputLogin
                      name="description"
                      label="Description"
                      placeholder="Enter description"
 
                      multiline
                      rows={4}
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <input
                        type="checkbox"
                        name="is_important"
                        checked={values?.is_important}
                        onChange={(e) =>
                          setFieldValue("is_important", e.target.checked)
                        }
                      />
                      <Typography>Mark as Important</Typography>
                    </Box>
                  </Grid>

                  <Grid
                    size={{ xs: 12 }}
                    sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}
                  >
                    <Button
                      onClick={handleClose}
                      variant="text"
                      sx={{
                        textTransform: "none",
                    color: "black",
                        fontSize: "16px",
                        mr: "10px",
                        padding: { xs: "0px 20px", md: "0px 40px" },
                        minHeight: "40px",
                        borderRadius: "23px",
                        background: "white",
                        border: "1px solid black",
                        "&:hover": {
                          backgroundColor: "#3B4056",
                          color: "white",
                        },
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={loading}
                      sx={{
                        textTransform: "none",
                        color: "white",
                        fontSize: "16px",
                        padding: { xs: "0px 20px", md: "0px 40px" },
                        minHeight: "40px",
                        borderRadius: "23px",
                        background: "var(--main-color)",
                        "&:hover": {
                          backgroundColor: "#3B4056",
                        },
                      }}
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </Button>
                  </Grid>
                </Grid>
              </DialogContent>
            </Form>
          );
          }}
        </Formik>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Box>
    </Dialog>
  );
};

export default ResearchHighlightsModal;
