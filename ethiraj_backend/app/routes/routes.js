const router = require("express").Router();
const isAuthenticated = require("../middlewares/auth_middleware.js");


const imageController = require("../controllers/upload_files_controller/upload_image.controller.js");
const videoController = require("../controllers/upload_files_controller/upload_video.controller.js");
const audioController = require("../controllers/upload_files_controller/upload_audio.controller.js");
const imageAndPdfController = require("../controllers/upload_files_controller/upload_image_and_pdf.controller.js");
const multiplefilesController = require("../controllers/upload_files_controller/upload_multifile.controller.js");
const pdfController = require("../controllers/upload_files_controller/upload_pdf.controller.js");
const homeSectionController = require("../controllers/website_controller/homeSection.controller.js");
const iqacSectionController = require("../controllers/website_controller/iqacSection.controller.js");
const examinationsController = require("../controllers/website_controller/examinations.controller.js");
const meritListController = require("../controllers/website_controller/meritList.controller.js");
const admissionPolicyController = require("../controllers/website_controller/admissionPolicy.controller.js");
const buttonController = require("../controllers/website_controller/button.controller.js");
const marqueeController = require("../controllers/website_controller/marquee.controller.js");
const aboutUsSectionController = require("../controllers/website_controller/aboutUsSection.controller.js")
const academicsSectionController = require("../controllers/website_controller/academicsSection.controller.js");
const ContactUsFormController = require("../controllers/website_controller/contactUsForm.controller.js")
const alumniRegistrationController = require("../controllers/website_controller/alumniRegistration.controller.js");
const academicController = require("../controllers/college_controller/academics.controller.js");
const departmentController = require("../controllers/college_controller/departments.controller.js");
const fundingTypeController = require("../controllers/college_controller/FundingType.controller.js");
const programmeLevelController = require("../controllers/college_controller/programmeLevel.controller.js");
const programController = require("../controllers/college_controller/program.controller.js");
const facultyController = require("../controllers/college_controller/faculty.controller.js");
const researchController = require("../controllers/college_controller/research.controller.js")
const researchHighlightsController = require("../controllers/college_controller/researchHighlights.controller.js");
const studentPublicationsController = require("../controllers/college_controller/studentPublications.controller.js");
const facultyPublicationsController = require("../controllers/college_controller/facultyPublications.controller.js");
const newsEventController = require("../controllers/college_controller/newsEvent.controller.js");
const otpController = require("../controllers/other_controllers/otp.controller.js");
const roleController = require("../controllers/auth_users_controller/role.controller.js");
const authUserController = require("../controllers/auth_users_controller/authUser.controller.js");

const  researchSectionController= require("../controllers/website_controller/researchSection.controller.js");

const  campusLifeSectionController= require("../controllers/website_controller/campusLifeSection.controller.js");



// const authUserNotificationsController = require("../controllers/admin_controller/auth_user_notifications.controller.js")s
// Auth User Notifications Routes

// router.get("/getAuthUserNotifications/:auth_user_id", authUserNotificationsController.getAuthUserNotifications);
// router.put("/markNotificationAsReadForAuthUser/:notification_id", authUserNotificationsController.markNotificationAsReadForAuthUser);




// uploads

router.post("/uploadImage", imageController.uploadImage);
router.post("/uploadPdf", pdfController.uploadPdf);
router.post("/uploadPdfAndImage", imageAndPdfController.uploadFile);
router.post("/multiplefiles", multiplefilesController.uploadFiles);

// router.get("/downloadPdf/:filename", pdfController.downloadPdf);
router.post("/uploadVideo", videoController.uploadVideo);
// router.post("/uploadAudio", audioController.uploadAudio);



// role Routes

router.post("/createRole", roleController.createRole);
router.get("/getAllRoles", roleController.getAllRoles);
router.post("/createRoleWithPermissions", roleController.createRoleWithPermissions);
router.get("/getAllRolesWithModules", roleController.getAllRolesWithModules);



// authUser Routes

router.post("/registerAuthUser", isAuthenticated, authUserController.registerAuthUser);
router.post("/loginAuthUser", authUserController.loginAuthUser);
router.get("/getAllAuthUser", authUserController.getAllAuthUser);
router.get("/getAuthUserById/:user_id", isAuthenticated, authUserController.getAuthUserById);
router.put("/updateAuthUser/:user_id", isAuthenticated, authUserController.updateAuthUser);
router.delete("/softDeleteAuthUser/:user_id", isAuthenticated, authUserController.softDeleteAuthUser);
router.put("/resetPasswordForAuthUser", isAuthenticated, authUserController.resetPasswordForAuthUser);




// Routes for OTP
router.post("/sendOTP", otpController.sendOTP);
router.post("/verifyOTP", otpController.verifyOTP);


// Route to handle Home page 

router.post("/addHomeSection", isAuthenticated, homeSectionController.addHomeSection);
router.get("/getAllHomeSections", homeSectionController.getAllHomeSections);
router.post("/getAllHomeSectionsBySectionName", homeSectionController.getAllHomeSectionsBySectionName);
router.put("/updateHomeSection/:section_id", homeSectionController.updateHomeSection);
router.get("/getHomeSectionById/:section_id", homeSectionController.getHomeSectionById);
router.delete("/deleteHomeSection/:section_id", homeSectionController.deleteHomeSection);
router.patch("/restoreHomeSection/restore/:section_id", homeSectionController.restoreHomeSection);


// Route to handle research 

router.post("/addResearchSection", isAuthenticated, researchSectionController.addResearchSection);
router.get("/getAllResearchSections/:page_name", researchSectionController.getAllResearchSections);
router.post("/getAllResearchSectionsBySectionName", researchSectionController.getAllResearchSectionsBySectionName);
router.put("/updateResearchSection/:section_id", researchSectionController.updateResearchSection);
router.get("/getResearchSectionById/:section_id", researchSectionController.getResearchSectionById);
router.delete("/deleteResearchSection/:section_id", researchSectionController.deleteResearchSection);
router.patch("/restoreResearchSection/restore/:section_id", researchSectionController.restoreResearchSection);

// Route to handle campus life 

router.post("/addCampusLifeSection", isAuthenticated, campusLifeSectionController.addCampusLifeSection);
router.get("/getAllCampusLifeSections/:page_name", campusLifeSectionController.getAllCampusLifeSections);
router.post("/getAllCampusLifeSectionsBySectionName", campusLifeSectionController.getAllCampusLifeSectionsBySectionName);
router.put("/updateCampusLifeSection/:section_id", campusLifeSectionController.updateCampusLifeSection);
router.get("/getCampusLifeSectionById/:section_id", campusLifeSectionController.getCampusLifeSectionById);
router.delete("/deleteCampusLifeSection/:section_id", campusLifeSectionController.deleteCampusLifeSection);
router.patch("/restoreCampusLifeSection/restore/:section_id", campusLifeSectionController.restoreCampusLifeSection);





// Route to handle IQAC page
router.post("/addIQACSection", isAuthenticated, iqacSectionController.addIQACSection);
router.get("/getAllIQACSections", iqacSectionController.getAllIQACSections);
router.post("/getAllIQACSectionsBySectionName", iqacSectionController.getAllIQACSectionsBySectionName);
router.put("/updateIQACSection/:section_id", iqacSectionController.updateIQACSection);
router.get("/getIQACSectionById/:section_id", iqacSectionController.getIQACSectionById);
router.delete("/deleteIQACSection/:section_id", iqacSectionController.deleteIQACSection);
router.patch("/restoreIQACSection/restore/:section_id", iqacSectionController.restoreIQACSection);


// Route to handle Examinations page
router.post("/addExaminationsSection", isAuthenticated, examinationsController.addExaminationsSection);
router.get("/getAllExaminationsSections", examinationsController.getAllExaminationsSections);
router.post("/getAllExaminationsSectionsBySectionName", examinationsController.getAllExaminationsSectionsBySectionName);
router.put("/updateExaminationsSection/:examination_id", examinationsController.updateExaminationsSection);
router.get("/getExaminationsSectionById/:examination_id", examinationsController.getExaminationsSectionById);
router.delete("/deleteExaminationsSection/:examination_id", examinationsController.deleteExaminationsSection);
router.patch("/restoreExaminationsSection/restore/:examination_id", examinationsController.restoreExaminationsSection);

// Route to handle Merit List page
router.post("/addMeritListSection", isAuthenticated, meritListController.addMeritListSection);
router.get("/getAllMeritListSections", meritListController.getAllMeritListSections);
router.post("/getAllMeritListSectionsBySectionName", meritListController.getAllMeritListSectionsBySectionName);
router.put("/updateMeritListSection/:merit_list_id", meritListController.updateMeritListSection);
router.get("/getMeritListSectionById/:merit_list_id", meritListController.getMeritListSectionById);
router.delete("/deleteMeritListSection/:merit_list_id", meritListController.deleteMeritListSection);
router.patch("/restoreMeritListSection/restore/:merit_list_id", meritListController.restoreMeritListSection);

// Route to handle Admission Policy page
router.post("/addAdmissionPolicySection", isAuthenticated, admissionPolicyController.addAdmissionPolicySection);
router.get("/getAllAdmissionPolicySections", admissionPolicyController.getAllAdmissionPolicySections);
router.post("/getAllAdmissionPolicySectionsBySectionName", admissionPolicyController.getAllAdmissionPolicySectionsBySectionName);
router.put("/updateAdmissionPolicySection/:admission_policy_id", admissionPolicyController.updateAdmissionPolicySection);
router.get("/getAdmissionPolicySectionById/:admission_policy_id", admissionPolicyController.getAdmissionPolicySectionById);
router.delete("/deleteAdmissionPolicySection/:admission_policy_id", admissionPolicyController.deleteAdmissionPolicySection);
router.patch("/restoreAdmissionPolicySection/restore/:admission_policy_id", admissionPolicyController.restoreAdmissionPolicySection);

// Route to handle Buttons module
router.post("/addButton", isAuthenticated, buttonController.addButton);
router.get("/getAllButtons", buttonController.getAllButtons);
router.post("/getAllButtonsByName", buttonController.getAllButtonsByName);
router.get("/getButtonById/:button_id", buttonController.getButtonById);
router.put("/updateButton/:button_id", buttonController.updateButton);
router.delete("/deleteButton/:button_id", buttonController.deleteButton);
router.patch("/restoreButton/restore/:button_id", buttonController.restoreButton);

// Route to handle Marquee module
router.post("/addMarquee", isAuthenticated, marqueeController.addMarquee);
router.get("/getAllMarquees", marqueeController.getAllMarquees);
router.post("/getAllMarqueesByPageName", marqueeController.getAllMarqueesByPageName);
router.get("/getMarqueeById/:marquee_id", marqueeController.getMarqueeById);
router.put("/updateMarquee/:marquee_id", marqueeController.updateMarquee);
router.delete("/deleteMarquee/:marquee_id", marqueeController.deleteMarquee);
router.patch("/restoreMarquee/restore/:marquee_id", marqueeController.restoreMarquee);


// Route to handle AboutUs page 

router.post("/addAboutUsSection", isAuthenticated, aboutUsSectionController.addAboutUsSection);
router.get("/getAllAboutUsSections", aboutUsSectionController.getAllAboutUsSections);
router.post("/getAllAboutUsSectionsBySectionName", aboutUsSectionController.getAllAboutUsSectionsBySectionName);
router.put("/updateAboutUsSection/:section_id", aboutUsSectionController.updateAboutUsSection);
router.get("/getAboutUsSectionById/:section_id", aboutUsSectionController.getAboutUsSectionById);
router.delete("/deleteAboutUsSection/:section_id", aboutUsSectionController.deleteAboutUsSection);
router.patch("/restoreAboutUsSection/restore/:section_id", aboutUsSectionController.restoreAboutUsSection);

// Route to handle academics page

router.post("/addAcademicsSection", isAuthenticated, academicsSectionController.addAcademicsSection);
router.get("/getAllAcademicsSections", academicsSectionController.getAllAcademicsSections);
router.post("/getAcademicsSectionsByName", academicsSectionController.getAcademicsSectionsByName);
router.get("/getAcademicsSectionById/:section_id", academicsSectionController.getAcademicsSectionById);
router.put("/updateAcademicsSection/:section_id", academicsSectionController.updateAcademicsSection);
router.delete("/deleteAcademicsSection/:section_id", academicsSectionController.deleteAcademicsSection);
router.put("/restoreAcademicsSection/restore/:section_id", academicsSectionController.restoreAcademicsSection);

// Route to handle ContactUs form

router.post("/postContactUsForm", ContactUsFormController.addContactUsForm);
router.get("/getAllContactUsForms", ContactUsFormController.getAllContactUsForms);
router.get("/getContactUsFormById/:contact_us_form_id", ContactUsFormController.getContactUsFormById);
router.delete("/deleteContactUsForm/:contact_us_form_id", ContactUsFormController.deleteContactUsForm);
router.patch("/restoreContactUsForm/:contact_us_form_id", ContactUsFormController.restoreContactUsForm);

// Restore a Soft-Deleted Contact Us Form Entry by contact_us_form_id
// Route parameter: contact_us_form_id
// Example URL: /restoreContactUsForm/1
router.patch("/restoreContactUsForm/:contact_us_form_id", ContactUsFormController.restoreContactUsForm);

// Alumni Registration Route
router.post("/submitAlumniRegistration", alumniRegistrationController.submitAlumniRegistration);


// Academic Routes

router.post("/addAcademic", academicController.addAcademic);
router.get("/getAllAcademics", academicController.getAllAcademics);
router.get("/getAcademicById/:academic_id", academicController.getAcademicById);
router.put("/updateAcademic/:academic_id", academicController.updateAcademic);
router.delete("/deleteAcademic/:academic_id", academicController.deleteAcademic);
router.put("/restoreAcademic/restore/:academic_id", academicController.restoreAcademic);

router.get('/getAcademicsHierarchyByProgrammeLevel/:programme_level_id', academicController.getAcademicsHierarchyByProgrammeLevel)

router.get("/getAllAcademicsWithAllDetails", academicController.getAllAcademicsWithAllDetails);


// Department Routes

router.post("/addDepartment", departmentController.addDepartment);
router.get("/getAllDepartments", departmentController.getAllDepartments);
router.get("/getDepartmentById/:department_id", departmentController.getDepartmentById);
router.put("/updateDepartment/:department_id", departmentController.updateDepartment);
router.delete("/deleteDepartment/:department_id", departmentController.deleteDepartment);
router.put("/restoreDepartment/restore/:department_id", departmentController.restoreDepartment);

// Funding Type Routes

router.post("/addFundingType", fundingTypeController.addFundingType);
router.get("/getAllFundingTypes", fundingTypeController.getAllFundingTypes);
router.get("/getFundingTypeById/:funding_type_id", fundingTypeController.getFundingTypeById);
router.put("/updateFundingType/:funding_type_id", fundingTypeController.updateFundingType);
router.delete("/deleteFundingType/:funding_type_id", fundingTypeController.deleteFundingType);
router.put("/restoreFundingTypes/restore/:funding_type_id", fundingTypeController.restoreFundingType);




//programmeLevel Routes

router.post("/addProgrammeLevel", programmeLevelController.addProgrammeLevel);
router.get("/getAllProgrammeLevels", programmeLevelController.getAllProgrammeLevels);
router.get("/getProgrammeLevelById/:programme_level_id", programmeLevelController.getProgrammeLevelById);
router.put("/updateProgrammeLevel/:programme_level_id", programmeLevelController.updateProgrammeLevel);
router.delete("/deleteProgrammeLevel/:programme_level_id", programmeLevelController.deleteProgrammeLevel);
router.put("/restoreProgrammeLevel/restore/:programme_level_id", programmeLevelController.restoreProgrammeLevel);



// program Routes

router.post("/addProgram", programController.addProgram);
router.get("/getAllPrograms", programController.getAllPrograms);
router.get("/getProgramById/:program_id", programController.getProgramById);
router.put("/updateProgram/:program_id", programController.updateProgram);
router.delete("/deleteProgram/:program_id", programController.deleteProgram);
router.put("/restoreProgram/restore/:program_id", programController.restoreProgram);

router.get("/getProgramsByDepartment/:department_id", programController.getProgramsByDepartment);
router.get("/getUndergraduateAidedPrograms", programController.getUndergraduateAidedPrograms);
router.get("/getUndergraduateSelfSupportingPrograms", programController.getUndergraduateSelfSupportingPrograms);
router.get("/getPostgraduateAidedPrograms", programController.getPostgraduateAidedPrograms);
router.get("/getPostgraduateSelfSupportingPrograms", programController.getPostgraduateSelfSupportingPrograms);


// Faculty  Routes

router.post("/addFaculty", facultyController.addFaculty);
router.get("/getAllFaculties", facultyController.getAllFaculties);
router.get("/getFacultyById/:faculty_id", facultyController.getFacultyById);
router.put("/updateFaculty/:faculty_id", facultyController.updateFaculty);
router.delete("/deleteFaculty/:faculty_id", facultyController.deleteFaculty);
router.put("/restoreFaculty/restore/:faculty_id", facultyController.restoreFaculty);

router.get("/getFacultiesByProgramId/:program_id", facultyController.getFacultiesByProgramId);
router.get(
  "/getFacultiesByProgramAndFunding/:program_id/:funding_type_id",
  facultyController.getFacultiesByProgramAndFunding
);


// research Routes

router.post("/addResearch", researchController.addResearch); // ➕ Add new research
router.get("/getAllResearch", researchController.getAllResearch); // 📄 Get all research
router.get("/getResearchById/:research_id", researchController.getResearchById); // 🔍 Get research by ID
router.put("/updateResearch/:research_id", researchController.updateResearch); // ✏️ Update research
router.delete("/deleteResearch/:research_id", researchController.deleteResearch); // 🗑️ Soft delete research
router.put("/restoreResearch/restore/:research_id", researchController.restoreResearch); // ♻️ Restore deleted research

router.get("/getResearchByFacultyId/:faculty_id", researchController.getResearchByFacultyId); // 🔍 Get by faculty
router.get("/getResearchByProgramAndDepartment/:program_id/:department_id", researchController.getResearchByProgramAndDepartment); // 🔍 Get by program & department
router.get("/getResearchByDepartment/:department_id", researchController.getResearchByDepartment); // 🔍 Get by department

// Research Highlights Routes

router.post("/addResearchHighlight", isAuthenticated, researchHighlightsController.addResearchHighlight); // ➕ Add new research highlight
router.get("/getAllResearchHighlights", researchHighlightsController.getAllResearchHighlights); // 📄 Get all research highlights
router.get("/getImportantResearchHighlights", researchHighlightsController.getImportantResearchHighlights); // ⭐ Get only important research highlights
router.get("/getResearchHighlightById/:researchHighlights_id", researchHighlightsController.getResearchHighlightById); // 🔍 Get research highlight by ID
router.put("/updateResearchHighlight/:researchHighlights_id", researchHighlightsController.updateResearchHighlight); // ✏️ Update research highlight
router.delete("/deleteResearchHighlight/:researchHighlights_id", researchHighlightsController.deleteResearchHighlight); // 🗑️ Soft delete research highlight
router.patch("/restoreResearchHighlight/restore/:researchHighlights_id", researchHighlightsController.restoreResearchHighlight); // ♻️ Restore deleted research highlight
router.patch("/markResearchHighlightAsImportant/:researchHighlights_id", researchHighlightsController.markResearchHighlightAsImportant); // ⭐ Mark/Unmark as important (max 4)

router.get("/getResearchHighlightsByAcademic/:academic_id", researchHighlightsController.getResearchHighlightsByAcademic); // 🔍 Get by academic
router.get("/getResearchHighlightsByDepartment/:department_id", researchHighlightsController.getResearchHighlightsByDepartment); // 🔍 Get by department
router.get("/getAcademicsWithResearchHighlights", researchHighlightsController.getAcademicsWithResearchHighlights); // 📚 Get all academics with highlights
router.get("/getDepartmentsByAcademicInResearchHighlights/:academic_id", researchHighlightsController.getDepartmentsByAcademicInResearchHighlights); // 🏢 Get departments by academic
router.get("/filterResearchHighlights", researchHighlightsController.filterResearchHighlights); // 🔎 Advanced filter with keyword, academic_id, department_id, year

// Student Publications Routes

router.post("/addStudentPublication", isAuthenticated, studentPublicationsController.addStudentPublication); // ➕ Add new student publication
router.get("/getAllStudentPublications", studentPublicationsController.getAllStudentPublications); // 📄 Get all student publications
router.get("/getImportantStudentPublications", studentPublicationsController.getImportantStudentPublications); // ⭐ Get only important student publications
router.get("/getStudentPublicationById/:studentPublications_id", studentPublicationsController.getStudentPublicationById); // 🔍 Get student publication by ID
router.put("/updateStudentPublication/:studentPublications_id", studentPublicationsController.updateStudentPublication); // ✏️ Update student publication
router.delete("/deleteStudentPublication/:studentPublications_id", studentPublicationsController.deleteStudentPublication); // 🗑️ Soft delete student publication
router.patch("/restoreStudentPublication/restore/:studentPublications_id", studentPublicationsController.restoreStudentPublication); // ♻️ Restore deleted student publication
router.patch("/markStudentPublicationAsImportant/:studentPublications_id", studentPublicationsController.markStudentPublicationAsImportant); // ⭐ Mark/Unmark as important (max 4)

router.get("/getStudentPublicationsByAcademic/:academic_id", studentPublicationsController.getStudentPublicationsByAcademic); // 🔍 Get by academic
router.get("/getStudentPublicationsByDepartment/:department_id", studentPublicationsController.getStudentPublicationsByDepartment); // 🔍 Get by department
router.get("/getAcademicsWithStudentPublications", studentPublicationsController.getAcademicsWithStudentPublications); // 📚 Get all academics with student publications
router.get("/getDepartmentsByAcademicInStudentPublications/:academic_id", studentPublicationsController.getDepartmentsByAcademicInStudentPublications); // 🏢 Get departments by academic
router.get("/filterStudentPublications", studentPublicationsController.filterStudentPublications); // 🔎 Advanced filter with keyword, academic_id, department_id, year

// Faculty Publications Routes

router.post("/addFacultyPublication", isAuthenticated, facultyPublicationsController.addFacultyPublication); // ➕ Add new faculty publication
router.get("/getAllFacultyPublications", facultyPublicationsController.getAllFacultyPublications); // 📄 Get all faculty publications
router.get("/getImportantFacultyPublications", facultyPublicationsController.getImportantFacultyPublications); // ⭐ Get only important faculty publications
router.get("/getFacultyPublicationById/:facultyPublications_id", facultyPublicationsController.getFacultyPublicationById); // 🔍 Get faculty publication by ID
router.put("/updateFacultyPublication/:facultyPublications_id", facultyPublicationsController.updateFacultyPublication); // ✏️ Update faculty publication
router.delete("/deleteFacultyPublication/:facultyPublications_id", facultyPublicationsController.deleteFacultyPublication); // 🗑️ Soft delete faculty publication
router.patch("/restoreFacultyPublication/restore/:facultyPublications_id", facultyPublicationsController.restoreFacultyPublication); // ♻️ Restore deleted faculty publication
router.patch("/markFacultyPublicationAsImportant/:facultyPublications_id", facultyPublicationsController.markFacultyPublicationAsImportant); // ⭐ Mark/Unmark as important (max 4)

router.get("/getFacultyPublicationsByAcademic/:academic_id", facultyPublicationsController.getFacultyPublicationsByAcademic); // 🔍 Get by academic
router.get("/getFacultyPublicationsByDepartment/:department_id", facultyPublicationsController.getFacultyPublicationsByDepartment); // 🔍 Get by department
router.get("/getAcademicsWithFacultyPublications", facultyPublicationsController.getAcademicsWithFacultyPublications); // 📚 Get all academics with faculty publications
router.get("/getDepartmentsByAcademicInFacultyPublications/:academic_id", facultyPublicationsController.getDepartmentsByAcademicInFacultyPublications); // 🏢 Get departments by academic
router.get("/filterFacultyPublications", facultyPublicationsController.filterFacultyPublications); // 🔎 Advanced filter with keyword, academic_id, department_id, year

// newsEvent Routes

// Add News or Event
router.post("/addNewsEvent", isAuthenticated, newsEventController.addNewsEvent);
router.get("/getAllNewsEvents", newsEventController.getAllNewsEvents);
router.get("/getNews", newsEventController.getNews);
router.get("/getEvents", newsEventController.getEvents);
router.get("/getNewsEventById/:news_event_id", newsEventController.getNewsEventById);
router.put("/updateNewsEvent/:news_event_id", newsEventController.updateNewsEvent);
router.patch("/markEventImportant/:news_event_id", newsEventController.markEventImportant);
router.delete("/deleteNewsEvent/:news_event_id", newsEventController.deleteNewsEvent);
router.patch("/restoreNewsEvent/restore/:news_event_id", newsEventController.restoreNewsEvent);
router.get("/getImportantNewsAndEvents", newsEventController.getImportantNewsAndEvents);



module.exports = router;