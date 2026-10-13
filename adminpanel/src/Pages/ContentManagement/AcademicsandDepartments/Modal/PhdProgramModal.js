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
import { MdCancel } from "react-icons/md";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";

import CustomInputLogin from "../../../../Components/CustomInputLogin/CustomInputLogin";
import CustomDynamicText from "../../../../Components/CustomDynamicTextArea/CustomDynamicText";
import MultiFileUploadComponent from "../../../../Components/FileUploadComponent/MultiFileUploadComponent";
import FileUploadComponent from "../../../../Components/FileUploadComponent/FileUploadComponent";
import CustomDropdownMui from "../../../../Components/CustomDropDown/CustomDropdown";
import CustomMultipleCheckbox from "../../../../Components/CustomMultipleCheckbox/CustomMultipleCheckbox";

import "../../../../Components/ModalCss/BannerinputGetModal.css";
import actions from "../../../../ReduxStore/actions";
import { useDispatch, useSelector } from "react-redux";
import { clearCustomerId } from "../../../../ReduxStore/Slices/Operator/customerSlice";
import { clearTableGetId } from "../../../../ReduxStore/Slices/TableId/TableIdGetSlice";
import { setInitialStateOfgetAcademicById } from "../../../../ReduxStore/Slices/AcademicDivisions/getAcademicById";
import { setInitialStateOfgetDepartmentById } from "../../../../ReduxStore/Slices/Department/getDepartmentById";
import { setInitialStateOfgetProgramById } from "../../../../ReduxStore/Slices/Program/getProgramById";
import PdfFileUploadComponent from "../../../../Components/FileUploadComponent/PdfFileUploadComponent";
import CustomSingleFileUpload from "../../../../Components/FileUploadComponent/CustomSingleFileUpload";
import CustomDynamicTextArea from "../../../../Components/CustomDynamicTextArea/CustomDynamicTextArea";

const mapToOptions = (list = [], valueKey, labelKey) =>
  list.map((item) => ({
    value: item?.[valueKey],
    label: item?.[labelKey],
  }));

const createUploadedFile = (fileUrl, type = "img") => ({
  fileUrl,
  type,
  progress: 100,
});

const hasCardContent = (cards) =>
  Array.isArray(cards) &&
  cards.some((card) => card?.title || card?.description);

const getResearchScholarsInitial = (additionalData = {}) => {
  const scholars = additionalData?.researchScholars;

  if (Array.isArray(scholars) && scholars.length > 0) {
    if (scholars[0]?.title !== undefined || scholars[0]?.count !== undefined) {
      return scholars.map((scholar) => ({
        title: scholar?.title || "",
        count: scholar?.count || "",
      }));
    }

    return [
      {
        title: "",
        count: "",
      },
    ];
  }

  return [
    {
      title: "",
      count: "",
    },
  ];
};

// ---------- Validation Schema (cleaned and consistent names) ----------
const validationSchema = Yup.object().shape({
  program_level: Yup.string().required("Program Level is required"),
  academic_name: Yup.string().required("Academic Division is required"),
  department_name: Yup.string().required("Department is required"),
  stream: Yup.string().required("Stream is required"),
  program_name: Yup.string().required("Program is required"),
  description: Yup.string().required("Description is required"),
  year_of_introduction: Yup.string().required(
    "Year of Introduction is required",
  ),
  affiliation_recognition: Yup.string().required(
    "Affiliation/Recognition is required",
  ),
  mode_of_study: Yup.string().required("Mode of Study is required"),
  img_url: Yup.mixed().required("Banner image is required"),

  researchAreas: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
    }),
  ),

  researchScholars: Yup.array()
    .of(
      Yup.object().shape({
        title: Yup.string().required("Title is required"),
        count: Yup.string().required("Count is required"),
      }),
    )
    .min(1, "At least one Research Scholar row is required"),
  reserch_scholars_image_url: Yup.mixed().required(
    "Research Scholars image is required",
  ),

  facultyCards: Yup.array()
    .of(
      Yup.object().shape({
        faculty_img_url: Yup.mixed().required("Faculty image is required"),
        name: Yup.string().required("Name is required"),
        position: Yup.string().required("Position is required"),
        areaofspecilization: Yup.string().required(
          "Area of specialization is required",
        ),
        email: Yup.string()
          .email("Enter a valid email")
          .required("Email is required"),
        approvalLetterLink: Yup.string().required(
          "Approval letter link is required",
        ),
      }),
    )
    .min(1, "At least one faculty card is required"),

  infrastructure_collaboration_description: Yup.string().required(
    "Infrastructure & Collaboration description is required",
  ),
  infrastructure_collaboration_cards: Yup.array()
    .of(
      Yup.object().shape({
        title: Yup.string().required("Title is required"),
        // modalDescription: Yup.string().required("Modal Description is required"),
        description: Yup.string().required("Description is required"),
        image_url: Yup.string().required("Image is required"),
      }),
    )
    .min(1, "At least one Infrastructure card is required"),
  contact_label: Yup.string().required("Contact Label is required"),
  contact_email: Yup.string()
    .email("Enter a valid contact email")
    .required("Contact Email is required"),
});

const PhdProgramModal = ({ open, onClose }) => {
  const [academicId, setAcademicId] = useState(null);
  const dispatch = useDispatch();
  const { getProgramById } = useSelector(
    (state) => state?.getProgramById || {},
  );
  const { getAllAcademics } = useSelector(
    (state) => state?.getAllAcademics || {},
  );
  const { getAllDepartments } = useSelector(
    (state) => state?.getAllDepartments || {},
  );
  const { getAllProgrammeLevels } = useSelector(
    (state) => state?.getAllProgrammeLevels || {},
  );
  const { getAllFundingTypes } = useSelector(
    (state) => state?.getAllFundingTypes || {},
  );

  const academicDivisionsOptions =
    mapToOptions(getAllAcademics?.data, "academic_id", "academic_name") || [];
  const departmentOptions =
    mapToOptions(
      getAllDepartments?.data?.departments,
      "department_id",
      "department_name",
    ) || [];
  const programLevelOptions =
    mapToOptions(
      getAllProgrammeLevels?.data,
      "programme_level_id",
      "level_name",
    ) || [];
  const streamTypeOptions =
    mapToOptions(getAllFundingTypes?.data, "funding_type_id", "type_name") ||
    [];

  // ---------- Separate states for each upload (Option A) ----------
  const [bannerFile, setBannerFile] = useState(null);
  const [syllabusPdfFile, setSyllabusPdfFile] = useState(null);
  const [beyondClassroomFile, setBeyondClassroomFile] = useState(null);
  const [administrationFile, setAdministrationFile] = useState(null);

  // Multiple file arrays
  const [placedCompanyFiles, setPlacedCompanyFiles] = useState([]);
  const [facilityImagesFiles, setFacilityImagesFiles] = useState([]);
  const [researchScholarCommonFile, setResearchScholarCommonFile] =
    useState(null);

  // Arrays for repeatable items
  const [studentFiles, setStudentFiles] = useState([]); // maps to studentcards[*].studentImage_url
  const [facultyFiles, setFacultyFiles] = useState([]); // maps to facultyCards[*].faculty_img_url
  const [infrastructureFiles, setInfrastructureFiles] = useState([]); // maps to infrastructureCards[*].image_url

  // Fetch selects
  useEffect(() => {
    if (!open) return;

    if (getProgramById?.data?.academic_id) {
      setAcademicId(getProgramById.data.academic_id);
    }

    const administrationImageUrl =
      getProgramById?.data?.additional_data?.adminsistraion_and_eligibility
        ?.administration_img_url;
    if (administrationImageUrl) {
      setAdministrationFile(createUploadedFile(administrationImageUrl));
    }

    const facilityImages =
      getProgramById?.data?.additional_data?.facilityImages || [];
    setFacilityImagesFiles(
      facilityImages.map((img) => createUploadedFile(img)),
    );

    if (getProgramById?.data?.image_url) {
      setBannerFile(createUploadedFile(getProgramById.data.image_url));
    }

    if (getProgramById?.data?.additional_data?.syllabus_pdf_url) {
      setSyllabusPdfFile(
        createUploadedFile(
          getProgramById.data.additional_data.syllabus_pdf_url,
          "pdf",
        ),
      );
    }

    if (getProgramById?.data?.additional_data?.placed_company_logos) {
      setPlacedCompanyFiles(
        (getProgramById.data.additional_data.placed_company_logos || []).map(
          (url) => createUploadedFile(url),
        ),
      );
    }

    if (
      getProgramById?.data?.additional_data?.beyond_classroom_details
        ?.beyond_classroom_img_url
    ) {
      setBeyondClassroomFile(
        createUploadedFile(
          getProgramById.data.additional_data.beyond_classroom_details
            .beyond_classroom_img_url,
        ),
      );
    }

    // Map faculty images if present
    const facultyCards =
      getProgramById?.data?.additional_data?.facultyCards || [];
    setFacultyFiles(
      facultyCards.map((f) => createUploadedFile(f.faculty_img_url || null)),
    );

    const infrastructureCards =
      getProgramById?.data?.additional_data?.infrastructure_and_collaboration
        ?.cards || [];
    setInfrastructureFiles(
      infrastructureCards.map((f) =>
        createUploadedFile(f?.image_url || f?.img_url || null),
      ),
    );

    const legacyScholarImage =
      getProgramById?.data?.additional_data?.reserch_scholars_image_url;
    if (legacyScholarImage) {
      setResearchScholarCommonFile(createUploadedFile(legacyScholarImage));
    } else {
      const scholarsFromApi =
        getProgramById?.data?.additional_data?.researchScholars;
      const firstScholarWithImage = Array.isArray(scholarsFromApi)
        ? scholarsFromApi.find((scholar) => scholar?.reserch_scholars_image_url)
        : null;
      setResearchScholarCommonFile(
        firstScholarWithImage?.reserch_scholars_image_url
          ? createUploadedFile(firstScholarWithImage.reserch_scholars_image_url)
          : null,
      );
    }
  }, [open, getProgramById]);

  // Fetch reference data once
  useEffect(() => {
    if (!open) return;
    const fetchData = async () => {
      await dispatch(
        actions.GETALLACADEMICS({
          data: {},
          method: "get",
          apiName: `getAllAcademics`,
        }),
      );
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
      await dispatch(
        actions.GETALLPROGRAMMELEVELS({
          data: {},
          method: "get",
          apiName: `getAllProgrammeLevels`,
        }),
      );
    };

    fetchData();
  }, [open, dispatch]);

  useEffect(() => {
    if (!academicId) return;

    dispatch(
      actions.GETALLDEPARTMENTS({
        data: {},
        method: "get",
        apiName: `getAcademicById/${academicId}`,
      }),
    );
  }, [dispatch, academicId]);

  const handleClose = () => {
    dispatch(setInitialStateOfgetProgramById());
    dispatch(setInitialStateOfgetAcademicById());
    dispatch(setInitialStateOfgetDepartmentById());
    setBannerFile(null);
    setSyllabusPdfFile(null);
    setBeyondClassroomFile(null);
    setAdministrationFile(null);
    setStudentFiles([]);
    setFacultyFiles([]);
    setResearchScholarCommonFile(null);
    setPlacedCompanyFiles([]);
    setFacilityImagesFiles([]);
    setAcademicId(null);
    onClose();
    dispatch(clearCustomerId(null));
    dispatch(clearTableGetId(null));
  };

  const handleSubmit = async (values, { resetForm }) => {
    const researchScholarsPayload = (values?.researchScholars || []).map(
      (scholar) => ({
        title: scholar?.title || "",
        count: scholar?.count || "",
      }),
    );

    const payload = {
      academic_id: values?.academic_name,
      image_url: values?.img_url || (bannerFile?.fileUrl ?? null),
      description: values?.description,
      department_id: values?.department_name || "",
      program_name: values?.program_name,
      funding_type_id: values?.stream || "",
      programme_level_id: values?.program_level,
      additional_data: {
        year_of_introduction: values?.year_of_introduction,
        affiliation_recognition: values?.affiliation_recognition,
        mode_of_study: values?.mode_of_study,
        // stream: values?.stream,
        credits: values?.credits,
        researchAreas: values?.researchAreas,
        ongoingResearchProjects: values?.ongoingResearchProjects,
        programOutcomeDecription: values?.programOutcomeDecription,
        researchScholars: researchScholarsPayload,
        reserch_scholars_image_url:
          values?.reserch_scholars_image_url ??
          researchScholarCommonFile?.fileUrl ??
          null,

        facultyCards: values?.facultyCards,
        infrastructure_and_collaboration: {
          description: values?.infrastructure_collaboration_description,
          cards:
            values?.infrastructure_collaboration_cards?.map((card) => ({
              ...card,
              img_url: card?.img_url || card?.image_url || "",
            })) || [],
        },
        contact_details: {
          contact_label: values?.contact_label,
          contact_email: values?.contact_email,
        },
        adminsistraion_and_eligibility: {
          elgibility_criteria: values?.elgibility_criteria,
          subject_requirements: values?.subject_requirements,
          any_two_subjects_list: values?.any_two_subjects_list,
          admission_process: values?.admission_process,
          course_work_duration: values?.course_work_duration,
          administration_img_url:
            values?.administration_img_url ??
            administrationFile?.fileUrl ??
            null,
        },
      },
    };

    const apiData = {
      data: payload,
      method: getProgramById?.data?.program_id ? "put" : "Post",
      apiName: getProgramById?.data?.program_id
        ? `updateProgram/${getProgramById?.data?.program_id}`
        : `addProgram`,
    };

    try {
      const responseData = await dispatch(
        getProgramById?.data?.program_id
          ? actions.UPDATEPROGRAM(apiData)
          : actions.ADDPROGRAM(apiData),
      );

      const message = responseData?.payload?.message;
      if (message) {
        toast.success(message);
        setTimeout(() => {
          handleClose();
          resetForm();
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
      // onClose={onClose}
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
            <MdCancel style={{ color: "white" }} />
          </IconButton>
          <DialogTitle className="custom-dialog-title">
            <Box>
              <Typography
                className="custom-title-text"
                fontSize="16px"
                color="white"
              >
                Program
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          // validationSchema={validationSchema}
          initialValues={{
            program_level: getProgramById?.data?.programme_level_id || "",
            stream: getProgramById?.data?.funding_type_id || "",
            academic_name: getProgramById?.data?.academic_id || "",
            department_name: getProgramById?.data?.department_id || "",
            program_name: getProgramById?.data?.program_name || "",
            description: getProgramById?.data?.description || "",
            year_of_introduction:
              getProgramById?.data?.additional_data?.year_of_introduction || "",
            affiliation_recognition:
              getProgramById?.data?.additional_data?.affiliation_recognition ||
              "",
            mode_of_study:
              getProgramById?.data?.additional_data?.mode_of_study || "",

            // Banner Image
            img_url: getProgramById?.data?.image_url || null,

            // Program Outcomes
            researchAreas:
              getProgramById?.data?.additional_data?.researchAreas?.length > 0
                ? getProgramById?.data?.additional_data?.researchAreas
                : [{ title: "", description: "" }],
            ongoingResearchProjects:
              getProgramById?.data?.additional_data?.ongoingResearchProjects
                ?.length > 0
                ? getProgramById?.data?.additional_data?.ongoingResearchProjects
                : [
                    {
                      research_topic: "",
                      candidate_name: "",
                      reg_date: "",
                      supervisor_name: "",
                      status: "",
                    },
                  ],
            researchScholars: getResearchScholarsInitial(
              getProgramById?.data?.additional_data,
            ),
            reserch_scholars_image_url:
              getProgramById?.data?.additional_data
                ?.reserch_scholars_image_url || null,

            // Faculty
            facultyCards:
              getProgramById?.data?.additional_data?.facultyCards?.length > 0
                ? getProgramById?.data?.additional_data?.facultyCards
                : [
                    {
                      name: "",
                      position: "",
                      areaofspecilization: "",
                      email: "",
                      approvalLetterLink: "",
                      faculty_img_url: null,
                    },
                  ],

            infrastructure_collaboration_description:
              getProgramById?.data?.additional_data
                ?.infrastructure_and_collaboration?.description || "",
            infrastructure_collaboration_cards:
              getProgramById?.data?.additional_data
                ?.infrastructure_and_collaboration?.cards?.length > 0
                ? getProgramById?.data?.additional_data?.infrastructure_and_collaboration?.cards?.map(
                    (card) => ({
                      ...card,
                      image_url: card?.image_url || card?.img_url || "",
                      modalDescription:
                        Array.isArray(card?.modalDescription) &&
                        card?.modalDescription?.length > 0
                          ? card.modalDescription
                          : [""],
                    }),
                  )
                : [
                    {
                      title: "",
                      description: "",
                      image_url: "",
                      modalDescription: [""],
                    },
                  ],
            contact_label:
              getProgramById?.data?.additional_data?.contact_details
                ?.contact_label || "",
            contact_email:
              getProgramById?.data?.additional_data?.contact_details
                ?.contact_email || "",

            // Admission & Eligibility
            elgibility_criteria:
              getProgramById?.data?.additional_data
                ?.adminsistraion_and_eligibility?.elgibility_criteria || "",
            admission_process:
              getProgramById?.data?.additional_data
                ?.adminsistraion_and_eligibility?.admission_process || "",
            course_work_duration:
              getProgramById?.data?.additional_data
                ?.adminsistraion_and_eligibility?.course_work_duration || "",
          }}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, setFieldValue, resetForm, values, form }) => (
            <Form onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid item size={{ xs: 12 }}>
                    <CustomDropdownMui
                      label="Program Level"
                      name="program_level"
                      options={programLevelOptions}
                      custPlaceholder="Select Program Level"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomDropdownMui
                      label="Academic Division"
                      name="academic_name"
                      setAcademicId={setAcademicId}
                      resetDepartmentName="department_name"
                      options={academicDivisionsOptions}
                      custPlaceholder="Select Academic Division"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomDropdownMui
                      label="Department"
                      name="department_name"
                      options={departmentOptions}
                      custPlaceholder="Select Department Name"
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

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Program"
                      name="program_name"
                      inputType="text"
                      custPlaceholder="Enter Program"
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

                  {/* Degree */}

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Year of Introduction"
                      name="year_of_introduction"
                      inputType="text"
                      custPlaceholder="Ex. 2020-2021"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Affiliation/Recognition"
                      name="affiliation_recognition"
                      inputType="text"
                      custPlaceholder="Enter Affiliation/Recognition"
                    />
                  </Grid>
                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Mode of Study"
                      name="mode_of_study"
                      inputType="text"
                      custPlaceholder="Enter Mode of Study"
                    />
                  </Grid>

                  {/* Banner */}
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
                      uploadedFile={bannerFile}
                      setUploadedFile={(fileObj) => setBannerFile(fileObj)}
                      onFileUpload={(url) => setFieldValue("img_url", url)}
                      existingUrl={getProgramById?.data?.image_url}
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
                      Research Areas
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="researchAreas">
                      {({ push, remove }) => (
                        <>
                          {values?.researchAreas?.map((card, index) => (
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
                                  Research Area {index + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Title"
                                  name={`researchAreas.${index}.title`}
                                  inputType="text"
                                  custPlaceholder="Enter Title"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  form={form}
                                  label="Description"
                                  name={`researchAreas.${index}.description`}
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

                          {values?.researchAreas?.length < 6 && (
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
                      Research Scholars
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="researchScholars">
                      {({ push, remove }) => (
                        <>
                          {values?.researchScholars?.map((scholar, index) => (
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
                                  Research Scholar Row {index + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12, md: 6 }}>
                                <CustomInputLogin
                                  label="Title"
                                  name={`researchScholars.${index}.title`}
                                  inputType="text"
                                  custPlaceholder="Enter Title"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12, md: 6 }}>
                                <CustomInputLogin
                                  label="Count"
                                  name={`researchScholars.${index}.count`}
                                  inputType="text"
                                  custPlaceholder="Enter Count"
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
                                    Remove Row
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
                                  count: "",
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
                              Add Row
                            </Button>
                          </Grid>
                        </>
                      )}
                    </FieldArray>
                  </Grid>

                  <Grid item size={{ xs: 12, md: 6 }}>
                    <FileUploadComponent
                      name="reserch_scholars_image_url"
                      uploadedFile={researchScholarCommonFile}
                      setUploadedFile={(fileObj) =>
                        setResearchScholarCommonFile(fileObj)
                      }
                      onFileUpload={(url) =>
                        setFieldValue("reserch_scholars_image_url", url)
                      }
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
                      Ongoing Research Projects
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="ongoingResearchProjects">
                      {({ push, remove }) => (
                        <>
                          {values?.ongoingResearchProjects?.map(
                            (project, index) => (
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
                                    Project {index + 1}
                                  </Typography>
                                </Grid>

                                <Grid item size={{ xs: 12, md: 6 }}>
                                  <CustomInputLogin
                                    label="Research Topic"
                                    name={`ongoingResearchProjects.${index}.research_topic`}
                                    inputType="text"
                                    custPlaceholder="Enter Research Topic"
                                  />
                                </Grid>

                                <Grid item size={{ xs: 12, md: 6 }}>
                                  <CustomInputLogin
                                    label="Name of the Candidate"
                                    name={`ongoingResearchProjects.${index}.candidate_name`}
                                    inputType="text"
                                    custPlaceholder="Enter Candidate Name"
                                  />
                                </Grid>

                                <Grid item size={{ xs: 12, md: 6 }}>
                                  <CustomInputLogin
                                    label="Reg Date"
                                    name={`ongoingResearchProjects.${index}.reg_date`}
                                    inputType="text"
                                    custPlaceholder="Enter Registration Date"
                                  />
                                </Grid>

                                <Grid item size={{ xs: 12, md: 6 }}>
                                  <CustomInputLogin
                                    label="Name of Supervisor"
                                    name={`ongoingResearchProjects.${index}.supervisor_name`}
                                    inputType="text"
                                    custPlaceholder="Enter Supervisor Name"
                                  />
                                </Grid>

                                <Grid item size={{ xs: 12, md: 6 }}>
                                  <CustomInputLogin
                                    label="Status"
                                    name={`ongoingResearchProjects.${index}.status`}
                                    inputType="text"
                                    custPlaceholder="Enter Status"
                                  />
                                </Grid>

                                <Grid item size={{ xs: 12, md: 6 }}>
                                  <CustomInputLogin
                                    label="Mode"
                                    name={`ongoingResearchProjects.${index}.mode`}
                                    inputType="text"
                                    custPlaceholder="Enter Mode"
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
                                      Remove Row
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
                                  research_topic: "",
                                  candidate_name: "",
                                  reg_date: "",
                                  supervisor_name: "",
                                  status: "",
                                  mode: "",
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
                              Add Row
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
                      Research Guides
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
                                  uploadedFile={facultyFiles[index]}
                                  setUploadedFile={(fileObj) => {
                                    setFacultyFiles((prev) => {
                                      const updated = [...prev];
                                      updated[index] = fileObj;
                                      return updated;
                                    });
                                  }}
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
                                  label="Email"
                                  name={`facultyCards.${index}.email`}
                                  custPlaceholder="Enter Email"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  form={form}
                                  label="Approval Letter Link"
                                  name={`facultyCards.${index}.approvalLetterLink`}
                                  textareaHeight={90}
                                  maxItems={5}
                                  custPlaceholder="Enter Approval Letter Link"
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
                                  areaofspecilization: "",
                                  email: "",
                                  approvalLetterLink: "",
                                  faculty_img_url: null,
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
                      Infrastructure & Collaboration
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Section Description"
                      name="infrastructure_collaboration_description"
                      custPlaceholder="Enter infrastructure and collaboration description"
                      inputType="textarea"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="infrastructure_collaboration_cards">
                      {({ push, remove }) => (
                        <>
                          {values?.infrastructure_collaboration_cards?.map(
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
                                    Infrastructure Card {index + 1}
                                  </Typography>
                                </Grid>

                                <Grid item size={{ xs: 12, md: 6 }}>
                                  <CustomInputLogin
                                    label="Title"
                                    name={`infrastructure_collaboration_cards.${index}.title`}
                                    inputType="text"
                                    custPlaceholder="Enter Title"
                                  />
                                </Grid>

                                <Grid item size={{ xs: 12, md: 6 }}>
                                  <FileUploadComponent
                                    name={`infrastructure_collaboration_cards.${index}.image_url`}
                                    uploadedFile={infrastructureFiles[index]}
                                    setUploadedFile={(fileObj) => {
                                      setInfrastructureFiles((prev) => {
                                        const updated = [...prev];
                                        updated[index] = fileObj;
                                        return updated;
                                      });
                                    }}
                                    onFileUpload={(url) =>
                                      setFieldValue(
                                        `infrastructure_collaboration_cards.${index}.image_url`,
                                        url,
                                      )
                                    }
                                  />
                                </Grid>
                                 <Grid item size={{ xs: 12, md:12 }}>
                                  <CustomInputLogin
                                    label="Description"
                                    name={`infrastructure_collaboration_cards.${index}.description`}
                                    inputType="textarea"
                                    custPlaceholder="Enter Description"
                                  />
                                </Grid>

                               

                                <Grid item size={{ xs: 12 }}>
                                    <CustomDynamicTextArea
                                      form={form}
                                      label="Modal Descriptions"
                                      name={`infrastructure_collaboration_cards.${index}.modalDescription`}
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
                                  image_url: "",
                                  modalDescription: [""],
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
                      Contact Details
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Contact Label"
                      name="contact_label"
                      inputType="text"
                      custPlaceholder="Enter Contact Label (e.g., Aided)"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Contact Email"
                      name="contact_email"
                      inputType="text"
                      custPlaceholder="Enter Contact Email"
                    />
                  </Grid>

                  {/* Admission & Eligibility */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Admission & Eligibility
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Eligibility Criteria"
                      name="elgibility_criteria"
                      custPlaceholder="Enter Eligibility Criteria"
                      inputType="textarea"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Admission Process"
                      name="admission_process"
                      custPlaceholder="Enter Admission Process"
                      inputType="textarea"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Course Work Duration"
                      name="course_work_duration"
                      custPlaceholder="Enter Course Work Duration"
                      inputType="textarea"
                    />
                  </Grid>

                  {/* Submit / Cancel buttons */}
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
                          setBannerFile(null);
                          setSyllabusPdfFile(null);
                          setBeyondClassroomFile(null);
                          setAdministrationFile(null);
                          setStudentFiles([]);
                          setFacultyFiles([]);
                          setResearchScholarCommonFile(null);
                          setPlacedCompanyFiles([]);
                          setFacilityImagesFiles([]);
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

export default PhdProgramModal;
