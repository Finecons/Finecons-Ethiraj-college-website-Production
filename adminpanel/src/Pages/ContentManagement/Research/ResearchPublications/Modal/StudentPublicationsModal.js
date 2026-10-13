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
import { setInitialStateOfgetStudentPublicationById } from "../../../../../ReduxStore/Slices/ContentManagement/Research/getStudentPublicationById";
// import CustomDropsdownMui from "../../../../../Components/CustomDropDown/CustomDropdownMui";
import CustomDropdownMui from "../../../../../Components/CustomDropDown/CustomDropdown";

const StudentPublicationsModal = ({
  open,
  onClose,
  setSubmittedValues,
  submittedValues,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [academics, setAcademics] = useState([]);
  const [academicsRawData, setAcademicsRawData] = useState([]);

  const { getStudentPublicationById } = useSelector(
    (state) => state?.getStudentPublicationById
  );

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
    dispatch(setInitialStateOfgetStudentPublicationById());
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
      student_name: values?.student_name,
      academic_id: values?.academic_id,
      department_id: values?.department_id,
      year: values?.year ? parseInt(values.year) : null,
      isbn: values?.isbn,
    };

    const data1 = {
      data: payload,
      method: getStudentPublicationById?.data?.studentPublications_id ? "put" : "post",
      apiName: getStudentPublicationById?.data?.studentPublications_id
        ? `updateStudentPublication/${getStudentPublicationById?.data?.studentPublications_id}`
        : `addStudentPublication`,
    };

    const responseData = await dispatch(
      getStudentPublicationById?.data?.studentPublications_id
        ? actions.UPDATESTUDENTPUBLICATION(data1)
        : actions.ADDSTUDENTPUBLICATION(data1)
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
    student_name: Yup.string(),
    academic_id: Yup.number().required("Academic is required"),
    department_id: Yup.number().required("Department is required"),
    year: Yup.number().typeError("Year must be a number"),
    isbn: Yup.string().required("ISBN is required"),
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
                {getStudentPublicationById?.data?.studentPublications_id
                  ? "Edit Student Publication"
                  : "Add Student Publication"}
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            title: getStudentPublicationById?.data?.title || "",
            publisher: getStudentPublicationById?.data?.publisher || "",
            description: getStudentPublicationById?.data?.description || "",
            student_name: getStudentPublicationById?.data?.student_name || "",
            academic_id: getStudentPublicationById?.data?.academic_id || "",
            department_id: getStudentPublicationById?.data?.department_id || "",
            year: getStudentPublicationById?.data?.year || "",
            isbn: getStudentPublicationById?.data?.isbn || "",
          }}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, setFieldValue, values, errors, touched }) => {
            const selectedAcademic = academics.find(
              (a) => a.value === Number(values.academic_id)
            );
            const filteredDepartments = selectedAcademic?.departments
              ? selectedAcademic.departments.map((dept) => ({
                  label: dept.department_name,
                  value: dept.department_id,
                }))
              : [];

            return (
            <Form onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12 }}>
                    <CustomInputLogin
                      name="title"
                      label="Title"
                      placeholder="Enter title"
                     
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
                        setFieldValue("academic_id", e.target.value);
                        setFieldValue("department_id", "");
                      }}
                    
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomDropdownMui
                      key={`department-${values?.academic_id}`}
                      name="department_id"
                      label="Department"
                      options={filteredDepartments}
                      value={values?.department_id}
                      onChange={(e) => {
                        setFieldValue("department_id", Number(e.target.value));
                      }}
                      custPlaceholder="Select Department"
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomInputLogin
                      name="student_name"
                      label="Student Name"
                      placeholder="Enter student name"
                      value={values?.student_name}
                      onChange={(e) => setFieldValue("student_name", e.target.value)}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomInputLogin
                      name="year"
                      label="Year"
                      placeholder="Enter year"
                     
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
                    <CustomInputLogin
                      name="isbn"
                      label="ISBN"
                      placeholder="Enter ISBN"
                    />
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

export default StudentPublicationsModal;
