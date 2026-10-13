import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../Slices/authSlice";
import headerReducer from "../Slices/headerSlice";
import customerReducer from "../Slices/Operator/customerSlice";
import loadingReducer from "../Slices/loadingSlice";
import { loadingMiddleware } from "../middleware/loadingMiddleware";

import getAllRolesWithModulesSlice from "../Slices/userRole/getAllRolesWithModules";
import createRoleWithPermissionsSlice from "../Slices/userRole/createRoleWithPermissions";
import getAllRolesSlice from "../Slices/userRole/getAllRoles";
import TableIdGetReducer from "../Slices/TableId/TableIdGetSlice";
import getPermissionsForAuthUserSlice from "../Slices/userRole/getPermissionsForAuthUser";
import updateAllPermissionsForAuthUserSlice from "../Slices/userRole/updateAllPermissionsForAuthUser";

import addHomeSectionPostSlice from "../Slices/ContentManagement/HomeSection/addHomeSectionPost";

import getAllHomeSectionsWithCreatorBySectionNameSlice from "../Slices/ContentManagement/HomeSection/getAllHomeSectionsWithCreatorBySectionName";
import getAllHomeSectionsBySectionNameBasedOnCreatorSlice from "../Slices/ContentManagement/HomeSection/getAllHomeSectionsBySectionNameBasedOnCreator";
import addHomeSectionWithApprovalSlice from "../Slices/ContentManagement/HomeSection/addHomeSectionWithApproval";
import updateHomeSectionForReApprovalSlice from "../Slices/ContentManagement/HomeSection/updateHomeSectionForReApproval";
import updateHomeSectionSlice from "../Slices/ContentManagement/HomeSection/updateHomeSection";
import getHomeSectionByIdSlice from "../Slices/ContentManagement/HomeSection/getHomeSectionById";
import deleteHomeSectionSlice from "../Slices/ContentManagement/HomeSection/deleteHomeSection";
import addAboutUsSectionSlice from "../Slices/ContentManagement/AboutUsSection/addAboutUsSection";
import addAboutUsSectionWithApprovalSlice from "../Slices/ContentManagement/AboutUsSection/addAboutUsSectionWithApproval";
import deleteAboutUsSectionSlice from "../Slices/ContentManagement/AboutUsSection/deleteAboutUsSection";
import getAllAboutUsSectionsBySectionNameBasedOnCreatorSlice from "../Slices/ContentManagement/AboutUsSection/getAllAboutUsSectionsBySectionNameBasedOnCreator";
import getAllAboutUsSectionsWithCreatorBySectionNameSlice from "../Slices/ContentManagement/AboutUsSection/getAllAboutUsSectionsWithCreatorBySectionName";
import getAboutUsSectionByIdSlice from "../Slices/ContentManagement/AboutUsSection/getAboutUsSectionById";
import updateAboutUsSectionSlice from "../Slices/ContentManagement/AboutUsSection/updateAboutUsSection";
import updateAboutUsSectionForReApprovalSlice from "../Slices/ContentManagement/AboutUsSection/updateAboutUsSectionForReApproval";

// ----------------
import getAllProgrammeLevelsSlice from "../Slices/ProgramLevel/getAllProgrammeLevels";
import getProgrammeLevelByIdSlice from "../Slices/ProgramLevel/getProgrammeLevelById";
import updateProgrammeLevelSlice from "../Slices/ProgramLevel/updateProgrammeLevel";
import addProgrammeLevelSlice from "../Slices/ProgramLevel/addProgrammeLevel";
import getAllAcademicsSlice from "../Slices/AcademicDivisions/getAllAcademics";
import getAcademicByIdSlice from "../Slices/AcademicDivisions/getAcademicById";
import updateAcademicSlice from "../Slices/AcademicDivisions/updateAcademic";
import addAcademicSlice from "../Slices/AcademicDivisions/addAcademic";
import getDepartmentByIdSlice from "../Slices/Department/getDepartmentById";
// import getAllDepartmentsSlice from "../Slices/Department/getAllDepartments:import { getAllDepartmentsAction } from "import { addDepartmentAction } from "../Slices/Department/addDepartment";
import updateDepartmentSlice from "../Slices/Department/updateDepartment";
import addDepartmentSlice from "../Slices/Department/addDepartment";
import getAllDepartmentsSlice from "../Slices/Department/getAllDepartments";
import getAllAboutUsSectionsBySectionNameSlice from "../Slices/ContentManagement/AboutUsSection/getAllAboutUsSectionsBySectionName";
import updateAcademicsSectionSlice from "../Slices/ContentManagement/AcademicsAndDepartments/updateAcademicsSection";
import addAcademicsSectionSlice from "../Slices/ContentManagement/AcademicsAndDepartments/addAcademicsSection";
import getAcademicsSectionsByNameSlice from "../Slices/ContentManagement/AcademicsAndDepartments/getAcademicsSectionsByName";
import getAcademicsSectionByIdSlice from "../Slices/ContentManagement/AcademicsAndDepartments/getAcademicsSectionById";
import getAllFundingTypesSlice from "../Slices/Program/getAllFundingTypes";
import getAllHomeSectionsBySectionNameSlice from "../Slices/ContentManagement/HomeSection/getAllHomeSectionsBySectionName";
import getProgramByIdSlice from "../Slices/Program/getProgramById";
import updateProgramSlice from "../Slices/Program/updateProgram";
import getAllProgramsSlice from "../Slices/Program/getAllPrograms";
import addProgramSlice from "../Slices/Program/addProgram";
import uploadPdfAndImageSlice from "../Slices/Operator/uploadPdfAndImage";

import addIQACSectionSlice from "../Slices/ContentManagement/IqacSection/addIQACSection";
import getAllIQACSectionsSlice from "../Slices/ContentManagement/IqacSection/getAllIQACSections";
import getAllIQACSectionsBySectionNameSlice from "../Slices/ContentManagement/IqacSection/getAllIQACSectionsBySectionName";
import getIQACSectionByIdSlice from "../Slices/ContentManagement/IqacSection/getIQACSectionById";
import updateIQACSectionSlice from "../Slices/ContentManagement/IqacSection/updateIQACSection";

import addResearchSectionSlice from "../Slices/ContentManagement/ResearchSection/addResearchSection";
import getAllResearchSectionsSlice from "../Slices/ContentManagement/ResearchSection/getAllResearchSections";
import getAllResearchSectionsBySectionNameSlice from "../Slices/ContentManagement/ResearchSection/getAllResearchSectionsBySectionName";
import getResearchSectionByIdSlice from "../Slices/ContentManagement/ResearchSection/getResearchSectionById";
import updateResearchSectionSlice from "../Slices/ContentManagement/ResearchSection/updateResearchSection";

import  getFacultyByIdSlice  from "../Slices/Faculty/getFacultyById";
import  updateFacultySlice  from "../Slices/Faculty/updateFaculty";
import  getAllFacultySlice  from "../Slices/Faculty/getAllFaculty";
import  addFacultySlice  from "../Slices/Faculty/addFaculty";
import getAllCampuslifeSectionsBySectionNameSlice from "../Slices/ContentManagement/CampusLife/getAllCampuslifeSectionsBySectionName";
import addCampuslifeSectionSlice from "../Slices/ContentManagement/CampusLife/addCampuslifeSection";
import updateCampuslifeSectionSlice from "../Slices/ContentManagement/CampusLife/updateCampuslifeSection";
import getCampuslifeSectionByIdSlice from "../Slices/ContentManagement/CampusLife/getCampuslifeSectionById";
import getAllCampuslifeSectionsSlice from "../Slices/ContentManagement/CampusLife/getAllCampuslifeSections";

import getAllResearchHighlightsSlice from "../Slices/ContentManagement/Research/getAllResearchHighlights";
import getResearchHighlightByIdSlice from "../Slices/ContentManagement/Research/getResearchHighlightById";
import addResearchHighlightSlice from "../Slices/ContentManagement/Research/addResearchHighlight";
import updateResearchHighlightSlice from "../Slices/ContentManagement/Research/updateResearchHighlight";

import getAllStudentPublicationsSlice from "../Slices/ContentManagement/Research/getAllStudentPublications";
import getStudentPublicationByIdSlice from "../Slices/ContentManagement/Research/getStudentPublicationById";
import addStudentPublicationSlice from "../Slices/ContentManagement/Research/addStudentPublication";
import updateStudentPublicationSlice from "../Slices/ContentManagement/Research/updateStudentPublication";

import getAllFacultyPublicationsSlice from "../Slices/ContentManagement/Research/getAllFacultyPublications";
import getFacultyPublicationByIdSlice from "../Slices/ContentManagement/Research/getFacultyPublicationById";
import addFacultyPublicationSlice from "../Slices/ContentManagement/Research/addFacultyPublication";
import updateFacultyPublicationSlice from "../Slices/ContentManagement/Research/updateFacultyPublication";

import addExaminationsSectionSlice from "../Slices/ContentManagement/ExaminationsSection/addExaminationsSection";
import getAllExaminationsSectionsSlice from "../Slices/ContentManagement/ExaminationsSection/getAllExaminationsSections";
import getExaminationsSectionByIdSlice from "../Slices/ContentManagement/ExaminationsSection/getExaminationsSectionById";
import getAllExaminationsSectionsBySectionNameSlice from "../Slices/ContentManagement/ExaminationsSection/getAllExaminationsSectionsBySectionName";
import updateExaminationsSectionSlice from "../Slices/ContentManagement/ExaminationsSection/updateExaminationsSection";
import deleteExaminationsSectionSlice from "../Slices/ContentManagement/ExaminationsSection/deleteExaminationsSection";

import addMarqueeSlice from "../Slices/ContentManagement/Marquee/addMarquee";
import getAllMarqueesSlice from "../Slices/ContentManagement/Marquee/getAllMarquees";
import getAllMarqueesByPageSlice from "../Slices/ContentManagement/Marquee/getAllMarqueesByPageName";
import getMarqueeByIdSlice from "../Slices/ContentManagement/Marquee/getMarqueeById";
import updateMarqueeSlice from "../Slices/ContentManagement/Marquee/updateMarquee";
import deleteMarqueeSlice from "../Slices/ContentManagement/Marquee/deleteMarquee";
import restoreMarqueeSlice from "../Slices/ContentManagement/Marquee/restoreMarquee";

const reducer = combineReducers({
  auth: authReducer,
  header: headerReducer,
  loading: loadingReducer,

  getAllRolesWithModules: getAllRolesWithModulesSlice,
  createRoleWithPermissions: createRoleWithPermissionsSlice,
  getAllRoles: getAllRolesSlice,
  Table: TableIdGetReducer,
  getPermissionsForAuthUser: getPermissionsForAuthUserSlice,
  updateAllPermissionsForAuthUser: updateAllPermissionsForAuthUserSlice,

  addHomeSectionPost: addHomeSectionPostSlice,

  getAllHomeSectionsWithCreatorBySectionName:
    getAllHomeSectionsWithCreatorBySectionNameSlice,
  getAllHomeSectionsBySectionNameBasedOnCreator:
    getAllHomeSectionsBySectionNameBasedOnCreatorSlice,
  addHomeSectionWithApproval: addHomeSectionWithApprovalSlice,
  updateHomeSectionForReApproval: updateHomeSectionForReApprovalSlice,
  updateHomeSection: updateHomeSectionSlice,
  getHomeSectionById: getHomeSectionByIdSlice,
  deleteHomeSection: deleteHomeSectionSlice,

  addAboutUsSection: addAboutUsSectionSlice,
  addAboutUsSectionWithApproval: addAboutUsSectionWithApprovalSlice,
  deleteAboutUsSection: deleteAboutUsSectionSlice,
  getAllAboutUsSectionsBySectionNameBasedOnCreator:
    getAllAboutUsSectionsBySectionNameBasedOnCreatorSlice,

  getAllAboutUsSectionsWithCreatorBySectionName:
    getAllAboutUsSectionsWithCreatorBySectionNameSlice,
  getAboutUsSectionById: getAboutUsSectionByIdSlice,
  updateAboutUsSection: updateAboutUsSectionSlice,
  updateAboutUsSectionForReApproval: updateAboutUsSectionForReApprovalSlice,

  // ------------------------------------------

  getAllProgrammeLevels: getAllProgrammeLevelsSlice,
  getProgrammeLevelById: getProgrammeLevelByIdSlice,
  updateProgrammeLevel: updateProgrammeLevelSlice,
  addProgrammeLevel: addProgrammeLevelSlice,
  getAcademicById: getAcademicByIdSlice,
  getAllAcademics: getAllAcademicsSlice,
  updateAcademic: updateAcademicSlice,
  addAcademic: addAcademicSlice,

  getDepartmentById: getDepartmentByIdSlice,
  getAllDepartments: getAllDepartmentsSlice,
  addDepartment: addDepartmentSlice,
  updateDepartment: updateDepartmentSlice,
  getAllAboutUsSectionsBySectionName: getAllAboutUsSectionsBySectionNameSlice,

  // -----
  updateAcademicsSection: updateAcademicsSectionSlice,
  addAcademicsSection: addAcademicsSectionSlice,
  getAcademicsSectionsByName: getAcademicsSectionsByNameSlice,
  getAcademicsSectionById: getAcademicsSectionByIdSlice,

  // ------
  getAllFundingTypes: getAllFundingTypesSlice,
  // ------
  getAllHomeSectionsBySectionName: getAllHomeSectionsBySectionNameSlice,

  getProgramById: getProgramByIdSlice,
  updateProgram: updateProgramSlice,
  getAllPrograms: getAllProgramsSlice,
  addProgram: addProgramSlice,

  //
  getFacultyById: getFacultyByIdSlice,
  updateFaculty: updateFacultySlice,
  getAllFaculty: getAllFacultySlice,
  addFaculty: addFacultySlice,

  customer: customerReducer,

  uploadPdfAndImage: uploadPdfAndImageSlice,

  // ==============================================
  addIQACSection: addIQACSectionSlice,
  getAllIQACSections: getAllIQACSectionsSlice,
  getAllIQACSectionsBySectionName: getAllIQACSectionsBySectionNameSlice,
  getIQACSectionById: getIQACSectionByIdSlice,
  updateIQACSection: updateIQACSectionSlice,

  // ==============================================
  addResearchSection: addResearchSectionSlice,
  getAllResearchSections: getAllResearchSectionsSlice,
  getAllResearchSectionsBySectionName: getAllResearchSectionsBySectionNameSlice,
  getResearchSectionById: getResearchSectionByIdSlice,
  updateResearchSection: updateResearchSectionSlice,
  getAllCampuslifeSectionsBySectionName: getAllCampuslifeSectionsBySectionNameSlice,
  addCampuslifeSection: addCampuslifeSectionSlice,
  updateCampuslifeSection: updateCampuslifeSectionSlice ,
  getCampuslifeSectionById: getCampuslifeSectionByIdSlice,
  getAllCampuslifeSections: getAllCampuslifeSectionsSlice,

  // ==============================================
  getAllResearchHighlights: getAllResearchHighlightsSlice,
  getResearchHighlightById: getResearchHighlightByIdSlice,
  addResearchHighlight: addResearchHighlightSlice,
  updateResearchHighlight: updateResearchHighlightSlice,

  getAllStudentPublications: getAllStudentPublicationsSlice,
  getStudentPublicationById: getStudentPublicationByIdSlice,
  addStudentPublication: addStudentPublicationSlice,
  updateStudentPublication: updateStudentPublicationSlice,

  getAllFacultyPublications: getAllFacultyPublicationsSlice,
  getFacultyPublicationById: getFacultyPublicationByIdSlice,
  addFacultyPublication: addFacultyPublicationSlice,
  updateFacultyPublication: updateFacultyPublicationSlice,

  addExaminationsSection: addExaminationsSectionSlice,
  getAllExaminationsSections: getAllExaminationsSectionsSlice,
  getExaminationsSectionById: getExaminationsSectionByIdSlice,
  getAllExaminationsSectionsBySectionName: getAllExaminationsSectionsBySectionNameSlice,
  updateExaminationsSection: updateExaminationsSectionSlice,
  deleteExaminationsSection: deleteExaminationsSectionSlice,

  // MARQUEE SLICES
  addMarquee: addMarqueeSlice,
  getAllMarquees: getAllMarqueesSlice,
  getAllMarqueesByPageName: getAllMarqueesByPageSlice,
  getMarqueeById: getMarqueeByIdSlice,
  updateMarquee: updateMarqueeSlice,
  deleteMarquee: deleteMarqueeSlice,
  restoreMarquee: restoreMarqueeSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loadingMiddleware),
});
export default store;
