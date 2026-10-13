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
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { MdCancel } from "react-icons/md";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";

import CustomInputLogin from "../../../../Components/CustomInputLogin/CustomInputLogin";
import CustomSingleFileUpload from "../../../../Components/FileUploadComponent/CustomSingleFileUpload";
import CustomDynamicTextArea from "../../../../Components/CustomDynamicTextArea/CustomDynamicTextArea";
import MultiFileUploadComponent from "../../../../Components/FileUploadComponent/MultiFileUploadComponent";

import "../../../../Components/ModalCss/BannerinputGetModal.css";
import actions from "../../../../ReduxStore/actions";
import { useDispatch, useSelector } from "react-redux";
import { clearCustomerId } from "../../../../ReduxStore/Slices/Operator/customerSlice";
import { clearTableGetId } from "../../../../ReduxStore/Slices/TableId/TableIdGetSlice";
import { setInitialStateOfgetAcademicById } from "../../../../ReduxStore/Slices/AcademicDivisions/getAcademicById";
import CustomDropdownMui from "../../../../Components/CustomDropDown/CustomDropdown";
import FileUploadComponent from "../../../../Components/FileUploadComponent/FileUploadComponent";
import { setInitialStateOfgetDepartmentById } from "../../../../ReduxStore/Slices/Department/getDepartmentById";
import { data } from "react-router-dom";
import PdfFileUploadComponent from "../../../../Components/FileUploadComponent/PdfFileUploadComponent";
import CustomDynamicText from "../../../../Components/CustomDynamicTextArea/CustomDynamicText";

const parseAdditionalData = (rawAdditionalData) => {
  if (!rawAdditionalData) {
    return {};
  }

  if (typeof rawAdditionalData === "string") {
    try {
      return JSON.parse(rawAdditionalData);
    } catch (error) {
      return {};
    }
  }

  return rawAdditionalData;
};

const getArrayValue = (...sources) =>
  sources.find((source) => Array.isArray(source) && source.length > 0) || [];

const validationSchema = Yup.object().shape({
  academic_name: Yup.string().required("Academic division is required"),
  department_name: Yup.string().required("Department name is required"),
  // description: Yup.string().required("Description is required"),
  // course_name: Yup.string().required("Course name is required"),
  // course_semesters: Yup.string().required("Semesters are required"),
  // stream: Yup.string().required("Stream is required"),
  // credits: Yup.string().required("Credits are required"),
  // img_url: Yup.mixed().required("Banner image is required"),
  // syllabus_description: Yup.string().required(
  //   "Syllabus description is required",
  // ),
  // syllabus_pdf_url: Yup.mixed().required("Syllabus PDF is required"),
  // programOutcomeDecription: Yup.string().required(
  //   "Program outcome description is required",
  // ),
  // beyond_classroom_description: Yup.string().required(
  //   "Beyond the classroom description is required",
  // ),
  // beyond_classroom_subdescription_cards: Yup.array()
  //   .of(
  //     Yup.object().shape({
  //       title: Yup.string().required("Title is required"),
  //       description: Yup.string().required("Description is required"),
  //     }),
  //   )
  //   .min(1, "At least one card is required"),
  // activityCards: Yup.array().of(
  //   Yup.object().shape({
  //     events: Yup.string().required("Event is required"),
  //     resource_person: Yup.array()
  //       .of(Yup.string().required("Resource person cannot be empty"))
  //       .min(1, "At least one resource person required"),
  //     year: Yup.string().required("Year is required"),
  //     //     year: Yup.number()
  //     // .typeError("Year must be a number")
  //     // .required("Year is required")
  //   }),
  // ),
  // acheivementCards: Yup.array().of(
  //   Yup.object().shape({
  //     acheivement: Yup.string().required("Achievement is required"),
  //     student_details: Yup.string().required("Student details required"),
  //     year: Yup.string().required("Year is required"),
  //   }),
  // ),
  // // researchCards: Yup.array().of(
  // //   Yup.object().shape({
  // //     title: Yup.string().required("Title is required"),
  // //     description: Yup.string().required("Description is required"),
  // //     Date: Yup.string().required("Date is required"),
  // //   })
  // // ),
  // // studentcards: Yup.array().of(
  // //   Yup.object().shape({
  // //     student_name: Yup.string().required("Student name is required"),
  // //     program: Yup.string().required("Program is required"),
  // //     year: Yup.number()
  // //       .typeError("Year must be a number")
  // //       .required("Year is required"),
  // //     description: Yup.string().required("Description required"),
  // //     studentImage_url: Yup.mixed().required("Student image is required"),
  // //   })
  // // ),
});

const FoundationCourseModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { getDepartmentById } = useSelector(
    (state) => state?.getDepartmentById || {},
  );
  const departmentData = getDepartmentById?.data || {};
  const additionalData = parseAdditionalData(departmentData?.additional_data);
  const additionalCards = additionalData?.cards || {};

  const { getAllAcademics } = useSelector(
    (state) => state?.getAllAcademics || {},
  );
  const academicDivisionsOptions =
    getAllAcademics?.data?.map((data) => ({
      value: data?.academic_id,
      label: data?.academic_name,
    })) || [];

  const [uploadedFile, setUploadedFile] = useState(null);
  const [bannerUploadedFile, setBannerUploadedFile] = useState(null);
  const [pdfUploadFile, setPdfUploadFile] = useState(null);
  const [studentUploadFiles, setStudentUploadFiles] = useState([]);
  const [multipleUploadedFile, setMultipleUploadedFile] = useState([]);
  const [administrationFile, setAdministrationFile] = useState(null);

  console.log(studentUploadFiles, "studentUploadFiles");
  const { getAllFundingTypes } = useSelector(
    (state) => state?.getAllFundingTypes || {},
  );
  const streamTypeOptions =
    getAllFundingTypes?.data?.map((d) => ({
      value: d?.funding_type_id,
      label: d?.type_name,
    })) || [];

  // useEffect(() => {
  //   if (!open) return;

  //   // Student card files
  //   const studentCards =
  //     getDepartmentById?.data?.additional_data?.cards?.studentcards || [];
  //   setStudentUploadFiles(studentCards.map((c) =>

  //     fileUrl: response?.payload?.data.additional_data[0]?.banner,
  //                       type: "img",
  //                       progress: 100,
  //     c.studentImage_url
  //   || null));

  //   // Facility images
  //   const facilityImages =
  //     getDepartmentById?.data?.additional_data?.facilityImages || [];
  //   setMultipleUploadedFile(facilityImages);

  //   // Activity banner image
  //   if (getDepartmentById?.data?.image_url) {
  //     setUploadedFile({ileUrl:getDepartmentById.data.image_url ,
  //                       type: "img",
  //                       progress: 100});
  //   }

  //   // PDF file
  //   if (getDepartmentById?.data?.additional_data?.pdf_url) {
  //     setPdfUploadFile(getDepartmentById.data.additional_data.pdf_url);
  //   }
  // }, [open, getDepartmentById]);
  const [annualAssociationFile, setAnnualAssociationFile] = useState(null);

  useEffect(() => {
    if (!open) return;

    const currentDepartmentData = getDepartmentById?.data || {};
    const currentAdditionalData = parseAdditionalData(
      currentDepartmentData?.additional_data,
    );
    const currentAdditionalCards = currentAdditionalData?.cards || {};

    // -----------------------------
    // 1️⃣ Student Cards (Multiple)
    // -----------------------------
    const studentCards = getArrayValue(
      currentAdditionalCards?.studentcards,
      currentAdditionalData?.studentcards,
    );

    setStudentUploadFiles(
      studentCards.map((c) => ({
        fileUrl: c.studentImage_url || null,
        type: "img",
        progress: 100,
      })),
    );

    // -----------------------------
    // 2️⃣ Facility Images (Multiple)
    // -----------------------------
    const facilityImages = getArrayValue(
      currentAdditionalData?.facilityImages,
      currentAdditionalCards?.facilityImages,
    );

    setMultipleUploadedFile(
      facilityImages.map((img) => ({
        fileUrl: img,
        type: "img",
        progress: 100,
      })),
    );

    // -----------------------------
    // 3️⃣ Activity Banner Image (Single)
    // -----------------------------
    if (currentDepartmentData?.image_url) {
      setUploadedFile({
        fileUrl: currentDepartmentData?.image_url,
        type: "img",
        progress: 100,
      });
    }
    if (currentAdditionalData?.annual_associaction_img_url) {
      setAnnualAssociationFile({
        fileUrl: currentAdditionalData?.annual_associaction_img_url,
        type: "img",
        progress: 100,
      });
    }

    // -----------------------------
    // 4️⃣ PDF File
    // -----------------------------
    if (currentAdditionalData?.pdf_url) {
      setPdfUploadFile({
        fileUrl: currentAdditionalData?.pdf_url,
        type: "pdf",
        progress: 100,
      });
    }

    if (currentAdditionalData?.administration_img_url) {
      setAdministrationFile({
        fileUrl: currentAdditionalData?.administration_img_url,
        type: "img",
        progress: 100,
      });
    }
  }, [open, getDepartmentById]);

  // Helpful defaults and limits
  const MAX_CARDS = 3;
  const MAX_RESOURCE_PERSONS = 5;

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: `getAllAcademics`,
      };
      await dispatch(actions.GETALLACADEMICS(data1));
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (!open) return;
    const fetchData = async () => {
      await dispatch(
        actions.GETALLFUNDINGTYPES({
          data: {},
          method: "get",
          apiName: `getAllFundingTypes`,
        }),
      );
      // await dispatch(
      //   actions.GETALLDEPARTMENTS({
      //     data: {},
      //     method: "get",
      //     apiName: `getAllDepartments`,
      //   })
      // );
    };

    fetchData();
  }, [open, dispatch]);

  const handleClose = () => {
    dispatch(setInitialStateOfgetDepartmentById());
    // reset and close
    // resetForm();
    setUploadedFile(null);
    setBannerUploadedFile(null);
    setPdfUploadFile(null);
    setStudentUploadFiles([]);
    setMultipleUploadedFile([]);
    onClose();
    dispatch(clearCustomerId(null));
    dispatch(clearTableGetId(null));
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values, "valuess");

    const data1 = {
      data: {
        academic_id: values?.academic_name,
        image_url: values?.img_url,
          department_name: values?.department_name,

        additional_data: {
          // department_name: values?.department_name,
          description: values?.description,
          course_name: values?.course_name,
          course_semesters: values?.course_semesters,
          stream: values?.stream,
          credits: values?.credits,
          syllabus_description: values?.syllabus_description,
          syllabus_pdf_url: values?.syllabus_pdf_url,
          programOutcomeCards: values?.programOutcomeCards,
          programOutcomeDecription: values?.programOutcomeDecription,
          valueAddedCourseCards: values?.valueAddedCourseCards,
          futureCareerPathsCards: values?.futureCareerPathsCards,
          facultyCards: values?.facultyCards,
          activitiesData: values?.activitiesData,
          annual_associaction_descriptions:
            values?.annual_associaction_descriptions,
          annual_associaction_img_url: values?.annual_associaction_img_url,
          researchCards: values?.researchCards,
          singleLineResearches: values?.singleLineResearches,
          singleLineActivities: values?.singleLineActivities,
          singleLineAchievements: values?.singleLineAchievements,
          acheivementCards: values?.acheivementCards,
          extraAidedEmails: values?.extraAidedEmails?.filter(
            (e) => e.trim() !== "",
          ),
          extraSelfSupportingEmails: values?.extraSelfSupportingEmails?.filter(
            (e) => e.trim() !== "",
          ),
          beyond_classroom_description: values?.beyond_classroom_description,
          beyond_classroom_subdescription_cards:
            values?.beyond_classroom_subdescription_cards,
          administration_img_url: values?.administration_img_url,
        },
      },
      method: getDepartmentById?.data?.department_id ? "put" : "Post",
      apiName: getDepartmentById?.data?.department_id
        ? `updateDepartment/${getDepartmentById?.data?.department_id}`
        : `addDepartment`,
    };

    try {
      const responseData = await dispatch(
        getDepartmentById?.data?.department_id
          ? actions.UPDATEDEPARTMENT(data1)
          : actions.ADDDEPARTMENT(data1),
      );

      const message = responseData?.payload?.message;

      if (message) {
        toast.success(message);

        setTimeout(() => {
          handleClose();
        }, 1500);
      } else {
        throw new Error("Unexpected API response");
      }
    } catch (err) {
      toast.error(err?.message || "Failed to submit");
    }
  };

  return (
    <Dialog
      open={open}
      // onClose={handleClose}
      fullWidth
      maxWidth="md"
      className="custom-dialog"
      sx={{
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
                Foundation Course
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          validationSchema={validationSchema}
          initialValues={{
            academic_name: departmentData?.academic_id || "",
            department_name: departmentData?.department_name || "",
            description: additionalData?.description || "",
            course_name: additionalData?.course_name || "",
            course_semesters: additionalData?.course_semesters || "",
            stream: additionalData?.stream || "",
            credits: additionalData?.credits || "",
            img_url: departmentData?.image_url || null,
            facitltyDescription: additionalData?.facitltyDescription || "",
            facilityImages: getArrayValue(
              additionalData?.facilityImages,
              additionalCards?.facilityImages,
            ),
            pdf_url: additionalData?.pdf_url || null,
           
            activitiesData:
              getArrayValue(
                additionalData?.activitiesData,
                additionalCards?.activitiesData,
              )?.length > 0
                ? getArrayValue(
                    additionalData?.activitiesData,
                    additionalCards?.activitiesData,
                  )
                : [
                    {
                      academic_year: "",
                      activities: [{ title: "", image: null }],
                    },
                  ],

            singleLineActivities: additionalData?.singleLineActivities || [""],

            annual_associaction_descriptions:
              additionalData?.annual_associaction_descriptions || [""],
            annual_associaction_img_url:
              additionalData?.annual_associaction_img_url || null,
            acheivementCards:
              getArrayValue(
                additionalData?.acheivementCards,
                additionalCards?.acheivementCards,
              )?.length > 0
                ? getArrayValue(
                    additionalData?.acheivementCards,
                    additionalCards?.acheivementCards,
                  )
                : [
                    {
                      acheivement: "",
                      student_details: "",
                      
                    },
                  ],
            singleLineAchievements:
              additionalData?.singleLineAchievements || [""],
            researchCards:
              getArrayValue(
                additionalData?.researchCards,
                additionalCards?.researchCards,
              )?.length > 0
                ? getArrayValue(
                    additionalData?.researchCards,
                    additionalCards?.researchCards,
                  )
                : [{ title: "", facultyName: "", publisher: "", Date: "" }],
            singleLineResearches: additionalData?.singleLineResearches || [""],
            studentcards:
              getArrayValue(
                additionalData?.studentcards,
                additionalCards?.studentcards,
              )?.length > 0
                ? getArrayValue(
                    additionalData?.studentcards,
                    additionalCards?.studentcards,
                  )
                : [
                    {
                      student_name: "",
                      program: "",
                      year: "",
                      description: "",
                      studentImage_url: null,
                    },
                  ],
            aidedEmail: additionalData?.aidedEmail || "",
            selfSupportingEmail: additionalData?.selfSupportingEmail || "",

            programOutcomeCards:
              additionalData?.programOutcomeCards?.length > 0
                ? additionalData?.programOutcomeCards
                : [{ title: "", description: "" }],
            programOutcomeDecription:
              additionalData?.programOutcomeDecription || "",

            // Syllabus
            syllabus_description:
              additionalData?.syllabus_description || "",
            syllabus_pdf_url: additionalData?.syllabus_pdf_url || null,

            // Value Added Course
            valueAddedCourseCards:
              additionalData?.valueAddedCourseCards?.length > 0
                ? additionalData?.valueAddedCourseCards
                : [{ title: "", description: "" }],

            // Future Career Path
            futureCareerPathsCards:
              additionalData?.futureCareerPathsCards?.length > 0
                ? additionalData?.futureCareerPathsCards
                : [{ title: "", career_paths: "" }],

            extraAidedEmails: additionalData?.extraAidedEmails || [""],
            extraSelfSupportingEmails:
              additionalData?.extraSelfSupportingEmails || [""],
            beyond_classroom_description:
              additionalData?.beyond_classroom_description || "",
            beyond_classroom_subdescription_cards:
              additionalData?.beyond_classroom_subdescription_cards?.length > 0
                ? additionalData?.beyond_classroom_subdescription_cards
                : [{ title: "", description: "" }],
            administration_img_url: additionalData?.administration_img_url || null,
            facultyCards:
              additionalData?.facultyCards?.length > 0
                ? additionalData?.facultyCards
                : [
                    {
                      name: "",
                      position: "",
                      qualification: "",
                      areaofspecilization: "",
                      profilelink: "",
                      faculty_img_url: null,
                      aided: false,
                      self_supporting: false,
                    },
                  ],
          }}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, setFieldValue, resetForm, values, form }) => (
            <Form onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid item size={{ xs: 12 }}>
                    <CustomDropdownMui
                      label="Academic Division"
                      name="academic_name"
                      options={academicDivisionsOptions}
                      custPlaceholder="Enter Academic Division"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Department Name"
                      name="department_name"
                      inputType="text"
                      custPlaceholder="Enter Department Name"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Description"
                      name="description"
                      inputType="textarea"
                      custPlaceholder="Enter Description"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Course
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Course Name"
                      name="course_name"
                      inputType="text"
                      custPlaceholder="Enter Course Name"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Semesters"
                      name="course_semesters"
                      inputType="text"
                      custPlaceholder="Enter Course Semesters"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomDropdownMui
                      label="Stream"
                      name="stream"
                      options={streamTypeOptions}
                      custPlaceholder="Select Stream Name"
                    />
                  </Grid>

                  {/* Credits */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Credits
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Credits"
                      name="credits"
                      inputType="text"
                      custPlaceholder="Enter Credits"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Banner
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12, md: 6 }}>
                    <FileUploadComponent
                      name="img_url"
                      uploadedFile={uploadedFile}
                      setUploadedFile={(fileObj) => {
                        setUploadedFile(fileObj);
                      }}
                      onFileUpload={(url) => {
                        setFieldValue("img_url", url);
                      }}
                      existingUrl={getDepartmentById?.data?.image_url}
                    />
                  </Grid>
                  {/* Program Outcomes */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Program Outcomes
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="programOutcomeCards">
                      {({ push, remove }) => (
                        <>
                          {values.programOutcomeCards.map((card, index) => (
                            <Grid
                              container
                              spacing={2}
                              key={index}
                              sx={{ mt: index > 0 ? 1 : 0, mb: 2 }}
                            >
                              <Grid item size={{ xs: 12 }}>
                                <Typography
                                  variant="body2"
                                  sx={{ color: "#6B3C58" }}
                                >
                                  Program Outcome {index + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Title"
                                  name={`programOutcomeCards.${index}.title`}
                                  inputType="text"
                                  custPlaceholder="Enter Title"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  form={form}
                                  label="Description"
                                  name={`programOutcomeCards.${index}.description`}
                                  inputType="textarea"
                                />
                              </Grid>

                              {index > 0 && (
                                <Grid item size={{ xs: 12 }}>
                                  <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => remove(index)}
                                    sx={{
                                      textTransform: "none",
                                      color: "white",
                                      fontSize: "16px",
                                      boxShadow: "none",
                                      padding: {
                                        xs: "0px 20px",
                                        md: "0px 40px",
                                      },
                                      minHeight: "40px",
                                      borderRadius: "23px",
                                      background: "#3B4056",
                                      "&:hover": { backgroundColor: "#3B4056" },
                                    }}
                                    type="button"
                                  >
                                    Remove Card
                                  </Button>
                                </Grid>
                              )}
                            </Grid>
                          ))}

                          {values?.programOutcomeCards?.length < 4 && (
                            <Grid
                              item
                              size={{ xs: 12 }}
                              sx={{ display: "flex", justifyContent: "end" }}
                            >
                              <Button
                                variant="outlined"
                                onClick={() =>
                                  push({ title: "", description: "" })
                                }
                                sx={{
                                  textTransform: "none",
                                  color: "#6B3C58",
                                  borderColor: "#6B3C58",
                                  "&:hover": {
                                    backgroundColor: "#6B3C58",
                                    color: "white",
                                  },
                                }}
                                type="button"
                              >
                                Add Card
                              </Button>
                            </Grid>
                          )}
                        </>
                      )}
                    </FieldArray>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      form={form}
                      label="Program Outcome Description"
                      name={`programOutcomeDecription`}
                      inputType="textarea"
                    />
                  </Grid>

                  {/* Syllabus */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Syllabus
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      form={form}
                      label="Description"
                      name="syllabus_description"
                      inputType="textarea"
                      textareaHeight={90}
                    />
                  </Grid>

                  <Grid item size={{ xs: 12, md: 6 }}>
                    <PdfFileUploadComponent
                      name="syllabus_pdf_url"
                      uploadedFile={pdfUploadFile}
                      setUploadedFile={(fileObj) => setPdfUploadFile(fileObj)}
                      onFileUpload={(url) =>
                        setFieldValue("syllabus_pdf_url", url)
                      }
                    />
                  </Grid>

                  {/* Value Added Courses */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Values added Courses
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="valueAddedCourseCards">
                      {({ push, remove }) => (
                        <>
                          {values?.valueAddedCourseCards?.map((card, index) => (
                            <Grid
                              container
                              spacing={2}
                              key={index}
                              sx={{ mt: index > 0 ? 1 : 0, mb: 2 }}
                            >
                              <Grid item size={{ xs: 12 }}>
                                <Typography
                                  variant="body2"
                                  sx={{ color: "#6B3C58" }}
                                >
                                  Value Added Course {index + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Title"
                                  name={`valueAddedCourseCards.${index}.title`}
                                  inputType="text"
                                  custPlaceholder="Enter Title"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  form={form}
                                  label="Description"
                                  name={`valueAddedCourseCards.${index}.description`}
                                  inputType="textarea"
                                />
                              </Grid>

                              {index > 0 && (
                                <Grid item size={{ xs: 12 }}>
                                  <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => remove(index)}
                                    sx={{
                                      textTransform: "none",
                                      color: "white",
                                      fontSize: "16px",
                                      boxShadow: "none",
                                      padding: {
                                        xs: "0px 20px",
                                        md: "0px 40px",
                                      },
                                      minHeight: "40px",
                                      borderRadius: "23px",
                                      background: "#3B4056",
                                      "&:hover": { backgroundColor: "#3B4056" },
                                    }}
                                    type="button"
                                  >
                                    Remove Card
                                  </Button>
                                </Grid>
                              )}
                            </Grid>
                          ))}

                          <Grid
                            item
                            size={{ xs: 12 }}
                            sx={{ display: "flex", justifyContent: "end" }}
                          >
                            <Button
                              variant="outlined"
                              onClick={() =>
                                push({ title: "", description: "" })
                              }
                              sx={{
                                textTransform: "none",
                                color: "#6B3C58",
                                borderColor: "#6B3C58",
                                "&:hover": {
                                  backgroundColor: "#6B3C58",
                                  color: "white",
                                },
                              }}
                              type="button"
                            >
                              Add Card
                            </Button>
                          </Grid>
                        </>
                      )}
                    </FieldArray>
                  </Grid>

                  {/* Future Career Paths */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Future Career Paths
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="futureCareerPathsCards">
                      {({ push, remove }) => (
                        <>
                          {values.futureCareerPathsCards.map((card, index) => (
                            <Grid
                              container
                              spacing={2}
                              key={index}
                              sx={{ mt: index > 0 ? 1 : 0, mb: 2 }}
                            >
                              <Grid item size={{ xs: 12 }}>
                                <Typography
                                  variant="body2"
                                  sx={{ color: "#6B3C58" }}
                                >
                                  Future Career Path {index + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Title"
                                  name={`futureCareerPathsCards.${index}.title`}
                                  inputType="text"
                                  custPlaceholder="Enter Title"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  form={form}
                                  label="Career paths"
                                  name={`futureCareerPathsCards.${index}.career_paths`}
                                  inputType="textarea"
                                />
                              </Grid>

                              {index > 0 && (
                                <Grid item size={{ xs: 12 }}>
                                  <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => remove(index)}
                                    sx={{
                                      textTransform: "none",
                                      color: "white",
                                      fontSize: "16px",
                                      boxShadow: "none",
                                      padding: {
                                        xs: "0px 20px",
                                        md: "0px 40px",
                                      },
                                      minHeight: "40px",
                                      borderRadius: "23px",
                                      background: "#3B4056",
                                      "&:hover": { backgroundColor: "#3B4056" },
                                    }}
                                    type="button"
                                  >
                                    Remove Card
                                  </Button>
                                </Grid>
                              )}
                            </Grid>
                          ))}

                          <Grid
                            item
                            size={{ xs: 12 }}
                            sx={{ display: "flex", justifyContent: "end" }}
                          >
                            <Button
                              variant="outlined"
                              onClick={() =>
                                push({ title: "", career_paths: "" })
                              }
                              sx={{
                                textTransform: "none",
                                color: "#6B3C58",
                                borderColor: "#6B3C58",
                                "&:hover": {
                                  backgroundColor: "#6B3C58",
                                  color: "white",
                                },
                              }}
                              type="button"
                            >
                              Add Card
                            </Button>
                          </Grid>
                        </>
                      )}
                    </FieldArray>
                  </Grid>

                  {/* Faculty */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Faculty
                    </Typography>
                  </Grid>
                  

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="facultyCards">
                      {({ push, remove }) => (
                        <>
                          {values.facultyCards.map((card, index) => (
                            <Grid
                              container
                              spacing={2}
                              key={index}
                              sx={{ mt: index > 0 ? 1 : 0, mb: 2 }}
                            >
                              <Grid item size={{ xs: 12 }}>
                                <Typography
                                  variant="body2"
                                  sx={{ color: "#6B3C58" }}
                                >
                                  Faculty {index + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12, md: 6 }}>
                                <FileUploadComponent
                                  name={`facultyCards.${index}.faculty_img_url`}
                                  uploadedFile={
                                    values?.facultyCards?.[index]?.faculty_img_url
                                      ? typeof values?.facultyCards?.[index]
                                          ?.faculty_img_url === "string"
                                        ? {
                                            fileUrl:
                                              values?.facultyCards?.[index]
                                                ?.faculty_img_url,
                                            type: "image/jpeg",
                                            progress: 100,
                                          }
                                        : values?.facultyCards?.[index]
                                            ?.faculty_img_url
                                      : null
                                  }
                                  setUploadedFile={() => {}}
                                  onFileUpload={(url) =>
                                    setFieldValue(
                                      `facultyCards.${index}.faculty_img_url`,
                                      url,
                                    )
                                  }
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Name"
                                  name={`facultyCards.${index}.name`}
                                  inputType="text"
                                  custPlaceholder="Enter Name"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  form={form}
                                  label="Position"
                                  name={`facultyCards.${index}.position`}
                                  custPlaceholder="Enter Position"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  form={form}
                                  label="Qualification"
                                  name={`facultyCards.${index}.qualification`}
                                  textareaHeight={90}
                                  custPlaceholder="Enter Qualification"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  form={form}
                                  label="Area of specialization"
                                  name={`facultyCards.${index}.areaofspecilization`}
                                  textareaHeight={90}
                                  maxItems={5}
                                  custPlaceholder="Enter Area of specialization"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  form={form}
                                  label="Profile Line"
                                  name={`facultyCards.${index}.profilelink`}
                                  textareaHeight={90}
                                  maxItems={5}
                                  custPlaceholder="Enter  Profile Link"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <Typography
                                  variant="body1"
                                  sx={{  fontSize: "15px", fontWeight: "450" }}
                                >
                                  Stream Type
                                </Typography>

                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={
                                        values?.facultyCards?.[index]?.aided ||
                                        false
                                      }
                                      onChange={(e) =>
                                        setFieldValue(
                                          `facultyCards.${index}.aided`,
                                          e.target.checked,
                                        )
                                      }
                                    />
                                  }
                                  label="Aided"
                                />

                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={
                                        values?.facultyCards?.[index]
                                          ?.self_supporting || false
                                      }
                                      onChange={(e) =>
                                        setFieldValue(
                                          `facultyCards.${index}.self_supporting`,
                                          e.target.checked,
                                        )
                                      }
                                    />
                                  }
                                  label="Self Supporting"
                                />
                              </Grid>

                              {index > 0 && (
                                <Grid item size={{ xs: 12 }}>
                                  <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => remove(index)}
                                    sx={{
                                      textTransform: "none",
                                      color: "white",
                                      fontSize: "16px",
                                      boxShadow: "none",
                                      padding: {
                                        xs: "0px 20px",
                                        md: "0px 40px",
                                      },
                                      minHeight: "40px",
                                      borderRadius: "23px",
                                      background: "#3B4056",
                                      "&:hover": { backgroundColor: "#3B4056" },
                                    }}
                                    type="button"
                                  >
                                    Remove Card
                                  </Button>
                                </Grid>
                              )}
                            </Grid>
                          ))}

                          <Grid
                            item
                            size={{ xs: 12 }}
                            sx={{ display: "flex", justifyContent: "end" }}
                          >
                            <Button
                              variant="outlined"
                              onClick={() =>
                                push({
                                  name: "",
                                  position: "",
                                  qualification: "",
                                  areaofspecilization: "",
                                  profilelink: "",
                                  faculty_img_url: null,
                                  aided: false,
                                  self_supporting: false,
                                })
                              }
                              sx={{
                                textTransform: "none",
                                color: "#6B3C58",
                                borderColor: "#6B3C58",
                                "&:hover": {
                                  backgroundColor: "#6B3C58",
                                  color: "white",
                                },
                              }}
                              type="button"
                            >
                              Add Card
                            </Button>
                          </Grid>
                        </>
                      )}
                    </FieldArray>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Activities
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    {/* Academic Year FieldArray */}
                    <FieldArray name="activitiesData">
                      {({ push, remove }) => (
                        <>
                          {values.activitiesData.map((year, yearIndex) => (
                            <Grid item size={{ xs: 12 }} key={yearIndex}>
                              <Grid
                                container
                                spacing={2}
                                sx={{
                                  // border: "1px solid #ddd",
                                  p: 2,
                                  mb: 3,
                                  // borderRadius: "10px",
                                }}
                              >
                                {/* Academic Year */}
                                <Grid item size={{ xs: 12 }}>
                                  <Typography variant="h6">
                                    Academic Year {yearIndex + 1}
                                  </Typography>
                                </Grid>

                                <Grid item size={{ xs: 12, md: 6 }}>
                                  <CustomInputLogin
                                    label="Academic Year"
                                    name={`activitiesData.${yearIndex}.academic_year`}
                                    inputType="text"
                                    custPlaceholder="Ex. 2024 - 2025"
                                  />
                                </Grid>

                                {/* ================= Activities ================= */}
                                <FieldArray
                                  name={`activitiesData.${yearIndex}.activities`}
                                >
                                  {({
                                    push: pushActivity,
                                    remove: removeActivity,
                                  }) => (
                                    <>
                                      {year.activities.map(
                                        (activity, actIndex) => (
                                          <Grid
                                            item
                                            size={{ xs: 12 }}
                                            key={actIndex}
                                          >
                                            <Grid
                                              container
                                              spacing={2}
                                              sx={{ mt: 2 }}
                                            >
                                              <Grid item size={{ xs: 12 }}>
                                                <Typography
                                                  variant="body2"
                                                  color="#6B3C58"
                                                >
                                                  Activity {actIndex + 1}
                                                </Typography>
                                              </Grid>

                                              {/* Title */}
                                              <Grid
                                                item
                                                size={{ xs: 12, md: 6 }}
                                              >
                                                <CustomInputLogin
                                                  label="Activity Title"
                                                  name={`activitiesData.${yearIndex}.activities.${actIndex}.title`}
                                                  inputType="text"
                                                  custPlaceholder="Enter Title"
                                                />
                                              </Grid>

                                              {/* Image */}
                                              <Grid
                                                item
                                                size={{ xs: 12, md: 6 }}
                                              >
                                                <FileUploadComponent
                                                  name={`activitiesData.${yearIndex}.activities.${actIndex}.image`}
                                                  uploadedFile={
                                                    values.activitiesData[
                                                      yearIndex
                                                    ].activities[actIndex].image
                                                  }
                                                  setUploadedFile={(file) =>
                                                    setFieldValue(
                                                      `activitiesData.${yearIndex}.activities.${actIndex}.image`,
                                                      file,
                                                    )
                                                  }
                                                  onFileUpload={(file) =>
                                                    setFieldValue(
                                                      `activitiesData.${yearIndex}.activities.${actIndex}.image`,
                                                      file,
                                                    )
                                                  }
                                                />
                                              </Grid>

                                              {/* Remove Activity */}
                                              {actIndex > 0 && (
                                                <Grid item size={{ xs: 12 }}>
                                                  <Button
                                                    variant="outlined"
                                                    color="error"
                                                    onClick={() =>
                                                      removeActivity(actIndex)
                                                    }
                                                  >
                                                    Remove Activity
                                                  </Button>
                                                </Grid>
                                              )}
                                            </Grid>
                                          </Grid>
                                        ),
                                      )}

                                      {/* Add Activity (Max 5) */}
                                      {year.activities.length < 6 && (
                                        <Grid
                                          item
                                          size={{ xs: 12 }}
                                          textAlign="right"
                                        >
                                          <Button
                                            onClick={() =>
                                              pushActivity({
                                                title: "",
                                                image: null,
                                              })
                                            }
                                            variant="outlined"
                                          >
                                            Add Activity
                                          </Button>
                                        </Grid>
                                      )}
                                    </>
                                  )}
                                </FieldArray>

                                {/* Remove Academic Year */}
                                {yearIndex > 0 && (
                                  <Grid item size={{ xs: 12 }}>
                                    <Button
                                      variant="outlined"
                                      color="error"
                                      onClick={() => remove(yearIndex)}
                                    >
                                      Remove Academic Year
                                    </Button>
                                  </Grid>
                                )}
                              </Grid>
                            </Grid>
                          ))}

                          {/* Add Academic Year (Max 2) */}
                          {values.activitiesData.length < 2 && (
                            <Grid item size={{ xs: 12 }} textAlign="right">
                              <Button
                                variant="contained"
                                onClick={() =>
                                  push({
                                    academic_year: "",
                                    activities: [
                                      {
                                        title: "",
                                        image: null,
                                      },
                                    ],
                                  })
                                }
                              >
                                Add Academic Year
                              </Button>
                            </Grid>
                          )}
                        </>
                      )}
                    </FieldArray>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Research
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="researchCards">
                      {({ push, remove }) => (
                        <>
                          {values.researchCards.map((card, index) => (
                            <Grid
                              container
                              spacing={2}
                              key={index}
                              sx={{ mt: index > 0 ? 1 : 0, mb: 2 }}
                            >
                              <Grid item size={{ xs: 12 }}>
                                <Typography
                                  variant="body2"
                                  sx={{ color: "#6B3C58" }}
                                >
                                  Research {index + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Title"
                                  name={`researchCards.${index}.title`}
                                  inputType="textarea"
                                  custPlaceholder="Enter Research Title"
                                />
                              </Grid>
                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Faculty Name"
                                  name={`researchCards.${index}.facultyName`}
                                  inputType="textarea"
                                  custPlaceholder="Enter Faculty Name"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Publisher"
                                  name={`researchCards.${index}.publisher`}
                                  inputType="textarea"
                                  textareaHeight={90}
                                />
                              </Grid>

                              {index > 0 && (
                                <Grid item size={{ xs: 12 }}>
                                  <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => remove(index)}
                                    sx={{
                                      textTransform: "none",
                                      color: "white",
                                      fontSize: "16px",
                                      boxShadow: "none",
                                      padding: {
                                        xs: "0px 20px",
                                        md: "0px 40px",
                                      },
                                      minHeight: "40px",
                                      borderRadius: "23px",
                                      background: "#3B4056",
                                      "&:hover": { backgroundColor: "#3B4056" },
                                    }}
                                    type="button"
                                  >
                                    Remove Card
                                  </Button>
                                </Grid>
                              )}
                            </Grid>
                          ))}

                          <Grid
                            item
                            size={{ xs: 12 }}
                            sx={{ display: "flex", justifyContent: "end" }}
                          >
                            <Button
                              variant="outlined"
                              onClick={() =>
                                push({
                                  title: "",
                                  description: "",
                                  facultyName: "",
                                })
                              }
                              sx={{
                                textTransform: "none",
                                color: "#6B3C58",
                                borderColor: "#6B3C58",
                                "&:hover": {
                                  backgroundColor: "#6B3C58",
                                  color: "white",
                                },
                              }}
                              type="button"
                            >
                              Add Card
                            </Button>
                          </Grid>
                        </>
                      )}
                    </FieldArray>

                    <Grid item size={{ xs: 12 }}>
                      <CustomDynamicTextArea
                        form={form}
                        label="Single Paragraph Research "
                        name="singleLineResearches"
                        textareaHeight={90}
                        maxItems={MAX_RESOURCE_PERSONS}
                      />
                    </Grid>
                  </Grid>

                    <Grid item size={{ xs: 12 }}>
                                      <Typography
                                        variant="h4"
                                        sx={{
                                          fontSize: "20px",
                                          color: "var(--main-color)",
                                          mt: "20px",
                                        }}
                                      >
                                        Acheivements
                                      </Typography>
                                    </Grid>
                  
                                    <Grid item size={{ xs: 12 }}>
                                      <FieldArray name="acheivementCards">
                                        {({ push, remove }) => (
                                          <>
                                            {values.acheivementCards.map((card, index) => (
                                              <Grid
                                                container
                                                spacing={2}
                                                key={index}
                                                sx={{ mt: index > 0 ? 1 : 0, mb: 2 }}
                                              >
                                                <Grid item size={{ xs: 12 }}>
                                                  <Typography
                                                    variant="body2"
                                                    sx={{ color: "#6B3C58" }}
                                                  >
                                                    Acheivement {index + 1}
                                                  </Typography>
                                                </Grid>
                  
                                                <Grid item size={{ xs: 12 }}>
                                                  <CustomInputLogin
                                                    label="Acheivement"
                                                    name={`acheivementCards.${index}.acheivement`}
                                                    inputType="text"
                                                    custPlaceholder="Enter Card Title"
                                                  />
                                                </Grid>
                  
                                                <Grid item size={{ xs: 12 }}>
                                                  <CustomInputLogin
                                                    label="Student Details"
                                                    name={`acheivementCards.${index}.student_details`}
                                                    inputType="textarea"
                                                    textareaHeight={90}
                                                  />
                                                </Grid>
                                              
                                                {index > 0 && (
                                                  <Grid item size={{ xs: 12 }}>
                                                    <Button
                                                      variant="outlined"
                                                      color="error"
                                                      onClick={() => remove(index)}
                                                      sx={{
                                                        textTransform: "none",
                                                        color: "white",
                                                        fontSize: "16px",
                                                        boxShadow: "none",
                                                        padding: {
                                                          xs: "0px 20px",
                                                          md: "0px 40px",
                                                        },
                                                        minHeight: "40px",
                                                        borderRadius: "23px",
                                                        background: "#3B4056",
                                                        "&:hover": { backgroundColor: "#3B4056" },
                                                      }}
                                                      type="button"
                                                    >
                                                      Remove Card
                                                    </Button>
                                                  </Grid>
                                                )}
                                              </Grid>
                                            ))}
                  
                                            <Grid
                                              item
                                              size={{ xs: 12 }}
                                              sx={{ display: "flex", justifyContent: "end" }}
                                            >
                                              <Button
                                                variant="outlined"
                                                onClick={() =>
                                                  push({
                                                    acheivement: "",
                                                    student_details: "",
                                                  })
                                                }
                                                sx={{
                                                  textTransform: "none",
                                                  color: "#6B3C58",
                                                  borderColor: "#6B3C58",
                                                  "&:hover": {
                                                    backgroundColor: "#6B3C58",
                                                    color: "white",
                                                  },
                                                }}
                                                type="button"
                                              >
                                                Add Card
                                              </Button>
                                            </Grid>
                                          </>
                                        )}
                                      </FieldArray>
                                      <Grid item size={{ xs: 12 }}>
                                        <CustomDynamicTextArea
                                          form={form}
                                          label="Single Paragraph Achievement"
                                          name="singleLineAchievements"
                                          textareaHeight={90}
                                          maxItems={MAX_RESOURCE_PERSONS}
                                        />
                                      </Grid>
                                    </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Annual Association Event
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12, md: 6 }}>
                    <FileUploadComponent
                      name="annual_associaction_img_url"
                      uploadedFile={annualAssociationFile}
                      setUploadedFile={(fileObj) =>
                        setAnnualAssociationFile(fileObj)
                      }
                      onFileUpload={(url) =>
                        setFieldValue("annual_associaction_img_url", url)
                      }
                    />
                  </Grid>
                  <Grid item size={{ xs: 12 }}>
                    <CustomDynamicTextArea
                      form={form}
                      label="Description"
                      name="annual_associaction_descriptions"
                      textareaHeight={90}
                      maxItems={MAX_RESOURCE_PERSONS}
                    />
                  </Grid>

                  {/* Beyond the Classroom */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Beyond the Classroom
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Description"
                      name="beyond_classroom_description"
                      custPlaceholder="Enter Description"
                      inputType="textarea"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="beyond_classroom_subdescription_cards">
                      {({ push, remove }) => (
                        <>
                          {values?.beyond_classroom_subdescription_cards?.map(
                            (card, index) => (
                              <Grid
                                container
                                spacing={2}
                                key={index}
                                sx={{ mt: index > 0 ? 1 : 0, mb: 2 }}
                              >
                                <Grid item size={{ xs: 12 }}>
                                  <Typography
                                    variant="body2"
                                    sx={{ color: "#6B3C58" }}
                                  >
                                    Beyond Classroom Sub Description Cards{" "}
                                    {index + 1}
                                  </Typography>
                                </Grid>

                                <Grid item size={{ xs: 12 }}>
                                  <CustomInputLogin
                                    label="Title"
                                    name={`beyond_classroom_subdescription_cards.${index}.title`}
                                    inputType="text"
                                    custPlaceholder="Enter Title"
                                  />
                                </Grid>

                                <Grid item size={{ xs: 12 }}>
                                  <CustomInputLogin
                                    label="Description"
                                    name={`beyond_classroom_subdescription_cards.${index}.description`}
                                    custPlaceholder="Enter Description"
                                    inputType="textarea"
                                  />
                                </Grid>

                                {index > 0 && (
                                  <Grid item size={{ xs: 12 }}>
                                    <Button
                                      variant="outlined"
                                      color="error"
                                      onClick={() => remove(index)}
                                      sx={{
                                        textTransform: "none",
                                        color: "white",
                                        fontSize: "16px",
                                        boxShadow: "none",
                                        padding: {
                                          xs: "0px 20px",
                                          md: "0px 40px",
                                        },
                                        minHeight: "40px",
                                        borderRadius: "23px",
                                        background: "#3B4056",
                                        "&:hover": {
                                          backgroundColor: "#3B4056",
                                        },
                                      }}
                                      type="button"
                                    >
                                      Remove Card
                                    </Button>
                                  </Grid>
                                )}
                              </Grid>
                            ),
                          )}

                          <Grid
                            item
                            size={{ xs: 12 }}
                            sx={{ display: "flex", justifyContent: "end" }}
                          >
                            <Button
                              variant="outlined"
                              onClick={() =>
                                push({
                                  title: "",
                                  description: "",
                                })
                              }
                              sx={{
                                textTransform: "none",
                                color: "#6B3C58",
                                borderColor: "#6B3C58",
                                "&:hover": {
                                  backgroundColor: "#6B3C58",
                                  color: "white",
                                },
                              }}
                              type="button"
                            >
                              Add Card
                            </Button>
                          </Grid>
                        </>
                      )}
                    </FieldArray>
                  </Grid>

                  <Grid item size={{ xs: 12, md: 6 }}>
                    <FileUploadComponent
                      name="administration_img_url"
                      uploadedFile={administrationFile}
                      setUploadedFile={(fileObj) =>
                        setAdministrationFile(fileObj)
                      }
                      onFileUpload={(url) =>
                        setFieldValue("administration_img_url", url)
                      }
                    />
                  </Grid>
                  <Grid
                    item
                    size={{ xs: 12 }}
                    sx={{ display: "flex", justifyContent: "end", mt: 4 }}
                  >
                    <Box>
                      <Button
                        onClick={() => {
                          handleClose();
                          resetForm();
                          setUploadedFile(null);
                          setBannerUploadedFile(null);
                          setPdfUploadFile(null);
                          setStudentUploadFiles(null);
                          setMultipleUploadedFile([]);
                        }}
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
                          boxShadow: "none",
                          border: "1px solid black",
                          "&:hover": {
                            backgroundColor: "#3B4056",
                            color: "white",
                          },
                        }}
                        type="button"
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "white",
                          fontSize: "16px",
                          boxShadow: "none",
                          padding: { xs: "0px 20px", md: "0px 40px" },
                          minHeight: "40px",
                          borderRadius: "23px",
                          background: "var(--main-color)",
                          "&:hover": {
                            backgroundColor: "#3B4056",
                            boxShadow: "none",
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>
            </Form>
          )}
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

export default FoundationCourseModal;
