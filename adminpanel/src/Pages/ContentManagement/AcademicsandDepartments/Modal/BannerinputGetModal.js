import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { Formik, Form } from "formik";

import { FaPlus } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";

import CustomInputLogin from "../../../../Components/CustomInputLogin/CustomInputLogin";
import "../../../../../Components/ModalCss/BannerinputGetModal.css"; // Import external CSS
import { MdCancel } from "react-icons/md";
import * as Yup from "yup";
import { FiUpload } from "react-icons/fi";
import FileUploadComponent from "../../../../Components/FileUploadComponent/FileUploadComponent";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../../ReduxStore/actions";
import PreviewComponent from "../../PreviewComponent/PreviewComponent";
// import LandingPage from '../../Home/Preview/LandingPage';
import { clearTableGetId } from "../../../../ReduxStore/Slices/TableId/TableIdGetSlice";
import { clearCustomerId } from "../../../../ReduxStore/Slices/Operator/customerSlice";
import { toast } from "react-toastify";
import AboutUsMainPage from "../../AboutUsPreview/Banner/AboutUsMainPage";
// import ReferralsMainPage from '../../ReferralsContentPreview/Banner/ReferralsMainPage';

const BannerinputGetModal = ({
  open,
  onClose,
  setSubmittedValues,
  submittedValues,
  apiBasedName,
}) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const role = sessionStorage.getItem("role");

  //   useEffect(() => {
  //     if (!open) return;
  //     const fetchData = async () => {
  //       const data1 = { data: {}, method: "get", apiName: `getAllRoles` };
  //       await dispatch(actions.GETALLROLES(data1));
  //     };
  //     fetchData();
  //   }, [dispatch, createRoleWithPermissions]);

  const dispatch = useDispatch();
  const { getAboutUsSectionById } = useSelector(
    (state) => state?.getAboutUsSectionById
  );
  const { addAboutUsSection } = useSelector(
    (state) => state?.addAboutUsSection
  );

  const { updateAboutUsSection } = useSelector(
    (state) => state?.updateAboutUsSection
  );

  const { deleteAboutUsSection } = useSelector(
    (state) => state?.deleteAboutUsSection
  );

  const { getAllAboutUsSectionsWithCreatorBySectionName } = useSelector(
    (state) => state?.getAllAboutUsSectionsWithCreatorBySectionName
  );

  const { getAllAboutUsSectionsBySectionNameBasedOnCreator } = useSelector(
    (state) => state?.getAllAboutUsSectionsBySectionNameBasedOnCreator
  );

  const [rowTableData, setRowTableData] = useState([]);
  console.log(rowTableData, "rowTableTAdatatattattat");
  console.log(
    getAllAboutUsSectionsBySectionNameBasedOnCreator,
    "rowTableTAdatatattattat111111"
  );

  const { addAboutUsSectionWithApproval } = useSelector(
    (state) => state?.addAboutUsSectionWithApproval
  );


  const [loading, setLoading] = useState(false);

  const [editResponseData, setEditResponseData] = useState();
  const TableId = useSelector((state) => state.Table.TableId);

  console.log(TableId, "TebleIddddd");

  useEffect(() => {
    console.log(TableId, "TebleIddddd111");

    if (TableId) {
      console.log(TableId, "TebleIddddd222");

      const fetchData = async () => {
        const data1 = {
          data: {},
          method: "get",
          apiName: `getAboutUsSectionById/${TableId}`,
        };
        const response = await dispatch(actions.GETABOUTUSSECTIONBYID(data1));

        console.log(response, "responseresponse");

        if (
          response?.payload?.message ===
          "About Us section retrieved successfully."
        ) {
          console.log("hiiii");

          setEditResponseData(response?.payload?.data);
          setUploadedFile({
            fileUrl: response?.payload?.data.additional_data[0]?.banner,
            type: "img",
            progress: 100,
          });
          // console.log(response?.payload?.data.additional_data[0]?.banner,"yhfuwrfrkjrw")
        }
      };
      fetchData();
    }
  }, [open]);

  const handleSubmit = async (values, resetForm) => {
    setLoading(true);

    if (!TableId) {
      if (role === "superAdmin") {
        const data1 = {
          data: {
            section_name: "banner",
            heading: values.title,
            sub_heading: values.subtitle,
            content: values.content,
            additional_data: [
              {
                banner: values.image,
              },
            ],
          },
          method: "Post",
          apiName: `addAboutUsSectionWithApproval`,
        };
        const responseData = await dispatch(
          actions.ADDABOUTUSSECTIONWITHAPPROVAL(data1)
        );

        if (
          responseData?.payload?.message ===
          "About Us section added and approved successfully. Previous approved section deactivated."
        ) {
          // handlePreviewCloseModal()

          // setTimeout(() => {
          //     setLoading(false)
          //     onClose()

          //     handlePreviewCloseModal()

          //     resetForm()

          //     setUploadedFile(null)

          // }, 2500)

          setTimeout(() => {
            setLoading(false);
            onClose();

            handlePreviewCloseModal();
          }, 1500);

          setTimeout(() => {
            // setLoading(false)
            toast.success("Banner section added successfully!!");

            dispatch(clearCustomerId(null));
            dispatch(clearTableGetId(null));

            resetForm();

            setUploadedFile(null);
          }, 2000);
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 2500);

          toast.error(responseData?.payload?.message);
        }
      } else {
        const data1 = {
          data: {
            section_name: "banner",
            heading: values.title,
            sub_heading: values.subtitle,
            content: values.content,
            additional_data: [
              {
                banner: values.image,
              },
            ],
          },
          method: "Post",
          apiName: `addAboutUsSection`,
        };
        const responseData = await dispatch(actions.ADDABOUTUSSECTION(data1));
        if (
          responseData?.payload?.message ===
          "About Us section added successfully."
        ) {
          // handlePreviewCloseModal()

          // setTimeout(() => {
          //     setLoading(false)
          //     onClose()

          //     handlePreviewCloseModal()

          //     resetForm()

          //     setUploadedFile(null)

          // }, 2500)
          setTimeout(() => {
            setLoading(false);
            onClose();

            handlePreviewCloseModal();
          }, 1500);

          setTimeout(() => {
            // setLoading(false)
            toast.success("Banner section added successfully!!");

            dispatch(clearCustomerId(null));
            dispatch(clearTableGetId(null));

            resetForm();

            setUploadedFile(null);
          }, 2000);
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 2500);

          toast.error(responseData?.payload?.message);
        }
      }
    } else {
      if (role === "superAdmin") {
        const data1 = {
          data: {
            section_name: "banner",
            heading: values.title,
            sub_heading: values.subtitle,
            content: values.content,
            additional_data: [
              {
                banner: values.image,
              },
            ],
          },
          method: "put",
          apiName: `updateAboutUsSection/${TableId}`,
        };
        const responseData = await dispatch(
          actions.UPDATEABOUTUSSECTION(data1)
        );

        if (
          responseData?.payload?.message ===
          "About Us section updated successfully."
        ) {
          // handlePreviewCloseModal()

          // setTimeout(() => {
          //     setLoading(false)
          //     onClose()

          //     handlePreviewCloseModal()

          //     resetForm()

          //     setUploadedFile(null)

          // }, 2500)

          setTimeout(() => {
            setLoading(false);
            onClose();

            handlePreviewCloseModal();
          }, 1500);

          setTimeout(() => {
            // setLoading(false)
            toast.success("Banner section update successfully!!");

            dispatch(clearCustomerId(null));
            dispatch(clearTableGetId(null));

            resetForm();

            setUploadedFile(null);
          }, 2000);
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 2500);

          toast.error(responseData?.payload?.message);
        }
      } else {
        const data1 = {
          data: {
            section_name: "banner",
            heading: values.title,
            sub_heading: values.subtitle,
            content: values.content,
            additional_data: [
              {
                banner: values.image,
              },
            ],
          },
          method: "put",
          apiName: `updateAboutUsSectionForReApproval/${TableId}`,
        };
        const responseData = await dispatch(
          actions.UPDATEABOUTUSSECTIONFORREAPPROVAL(data1)
        );

        if (
          responseData?.payload?.message ===
          "About Us section updated successfully."
        ) {
          // handlePreviewCloseModal()

          setTimeout(() => {
            setLoading(false);
            onClose();

            handlePreviewCloseModal();
          }, 1500);

          setTimeout(() => {
            // setLoading(false)
            toast.success("Benner section added successfully!!");

            dispatch(clearCustomerId(null));
            dispatch(clearTableGetId(null));

            resetForm();

            setUploadedFile(null);
          }, 2000);
          // setTimeout(() => {
          //     setLoading(false)
          //     onClose()

          //     handlePreviewCloseModal()
          //     dispatch(clearCustomerId(null))
          //     dispatch(clearTableGetId(null))

          //     resetForm()

          //     setUploadedFile(null)

          // }, 2500)
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 2500);

          toast.error(responseData?.payload?.message);
        }
      }
    }
  };

  const [isPreviewModalOpen, setPreviewModalOpen] = useState(false);

  const handlePreviewOpenModal = () => {
    setPreviewModalOpen(true);
  };

  const handlePreviewCloseModal = () => {
    setPreviewModalOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      className="custom-dialog"
      sx={{
        // maxWidth: "600px",
        // margin: "auto",
        "& .MuiPaper-root": {
          borderRadius: "14px", // Target the Paper component
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box className="dialog-heading">
          <IconButton
            aria-label="Close"
            // onClick={onClose}
            onClick={() => {
              onClose();
              dispatch(clearTableGetId(null));
              dispatch(clearCustomerId(null));
            }}
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
              <Typography className="custom-title-text">Heading</Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            // title: '',
            // subtitle: '',
            // primary_button_text: '',
            // secondary_button_text: '',
            // content: '',
            // image: null,

            title: editResponseData?.heading || "",
            subtitle: editResponseData?.sub_heading || "",
            content: editResponseData?.content || "",
            // primary_button_text: editResponseData?.additional_data?.[0]?.primary_button_text || '',

            image: editResponseData?.additional_data?.[0]?.banner || null,
          }}
          validationSchema={Yup.object({
            title: Yup.string().required("Title is required"),
            subtitle: Yup.string().required("Subtitle is required"),
            content: Yup.string().required("Content is required"),
            // primary_button_text: Yup.string().required('Primary Button Text is required'),
          })}
          onSubmit={(values, { resetForm }) => {
            // setSubmittedValues([...submittedValues, values]);
            console.log(values, "values");
            // handleSubmit(values, resetForm)
            isPreviewModalOpen
              ? handleSubmit(values, resetForm)
              : handlePreviewOpenModal();

            // handlePreviewCloseModal()

            // handlePreviewOpenModal()
            // resetForm();
          }}
        >
          {({ handleSubmit, setFieldValue, resetForm, values }) => (
            <Form onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  {/* Title and Subtitle on the left, Content on the right */}
                  <Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <CustomInputLogin
                          label="Title"
                          name="title"
                          inputType="text"
                          custPlaceholder="Enter Title"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <CustomInputLogin
                          label="Subtitle"
                          name="subtitle"
                          inputType="text"
                          custPlaceholder="Enter Subtitle"
                        />
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <CustomInputLogin
                          label="Content"
                          name="content"
                          inputType="textarea"
                          custPlaceholder="Enter Content"
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* Other fields in the next row */}

                  <Grid item xs={12} md={4}>
                    {/* <FileUploadComponent name="image" onFileUpload={(file) => setFieldValue('image', file)} /> */}
                    <FileUploadComponent
                      name="image"
                      uploadedFile={uploadedFile}
                      setUploadedFile={setUploadedFile}
                      onFileUpload={(file) => setFieldValue("image", file)}
                    />
                  </Grid>
                </Grid>

                {/* Action Buttons */}
                {/* <DialogActions> */}

                <Grid sx={{ display: "flex", justifyContent: "end", mt: 4 }}>
                  <Grid>
                    <Button
                      onClick={() => {
                        resetForm();
                        setUploadedFile(null);
                      }}
                      variant="text"
                      // className="custom-clear-button"
                      sx={{
                        // backgroundColor: "#C38F51",
                        textTransform: "none",
                        color: "white",
                        fontSize: "16px",
                        mr: "10px",
                        // padding: "0px 40px",
                        padding: { xs: "0px 20px", md: "0px 40px" },

                        minHeight: "40px",
                        borderRadius: "23px",
                        background: "white",
                        boxShadow: "none",
                        color: "black",
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
                      // onClick={handlePreviewOpenModal}
                      variant="contained"
                      // className="custom-ok-button"
                      sx={{
                        // backgroundColor: "#C38F51",
                        textTransform: "none",
                        color: "white",
                        fontSize: "16px",
                        boxShadow: "none",

                        // padding: "0px 40px",
                        padding: { xs: "0px 20px", md: "0px 40px" },

                        minHeight: "40px",
                        borderRadius: "23px",
                        background: "#C38F51 0% 0% no-repeat padding-box",
                        "&:hover": {
                          backgroundColor: "#3B4056",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Preview
                    </Button>
                  </Grid>
                </Grid>
              </DialogContent>

              <PreviewComponent
                showSubmitButton={true}
                open={isPreviewModalOpen}
                ModalPreviewComponent={AboutUsMainPage}
                onClose={handlePreviewCloseModal}
                values={values}
                resetForm={resetForm}
                ParentModalClose={onClose}
                handleSubmit={handleSubmit}
                loading={loading}
                setLoading={setLoading}
              />

              {/* </DialogActions> */}
            </Form>
          )}
        </Formik>
      </Box>
    </Dialog>
  );
};

export default BannerinputGetModal;
