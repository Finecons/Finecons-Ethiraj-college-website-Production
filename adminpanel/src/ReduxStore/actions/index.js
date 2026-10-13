


import { getAllRolesWithModulesAction } from "../Slices/userRole/getAllRolesWithModules";
import { createRoleWithPermissionsAction } from "../Slices/userRole/createRoleWithPermissions";
import { getAllRolesAction } from "../Slices/userRole/getAllRoles";

import { getPermissionsForAuthUserAction } from "../Slices/userRole/getPermissionsForAuthUser";
import { updateAllPermissionsForAuthUserAction } from "../Slices/userRole/updateAllPermissionsForAuthUser";

import { addHomeSectionPostAction } from "../Slices/ContentManagement/HomeSection/addHomeSectionPost";

import { getAllHomeSectionsWithCreatorBySectionNameAction } from "../Slices/ContentManagement/HomeSection/getAllHomeSectionsWithCreatorBySectionName";
import { getAllHomeSectionsBySectionNameBasedOnCreatorAction } from "../Slices/ContentManagement/HomeSection/getAllHomeSectionsBySectionNameBasedOnCreator";
import { addHomeSectionWithApprovalAction } from "../Slices/ContentManagement/HomeSection/addHomeSectionWithApproval";
import { updateHomeSectionForReApprovalAction } from "../Slices/ContentManagement/HomeSection/updateHomeSectionForReApproval";
import { updateHomeSectionAction } from "../Slices/ContentManagement/HomeSection/updateHomeSection";
import { getHomeSectionByIdAction } from "../Slices/ContentManagement/HomeSection/getHomeSectionById";
import { deleteHomeSectionAction } from "../Slices/ContentManagement/HomeSection/deleteHomeSection";
import { addAboutUsSectionAction } from "../Slices/ContentManagement/AboutUsSection/addAboutUsSection";
import { addAboutUsSectionWithApprovalAction } from "../Slices/ContentManagement/AboutUsSection/addAboutUsSectionWithApproval";
import { deleteAboutUsSectionAction } from "../Slices/ContentManagement/AboutUsSection/deleteAboutUsSection";
import { getAllAboutUsSectionsBySectionNameBasedOnCreatorAction } from "../Slices/ContentManagement/AboutUsSection/getAllAboutUsSectionsBySectionNameBasedOnCreator";
import { getAllAboutUsSectionsWithCreatorBySectionNameAction } from "../Slices/ContentManagement/AboutUsSection/getAllAboutUsSectionsWithCreatorBySectionName";
import { getAboutUsSectionByIdAction } from "../Slices/ContentManagement/AboutUsSection/getAboutUsSectionById";
import { updateAboutUsSectionAction } from "../Slices/ContentManagement/AboutUsSection/updateAboutUsSection";
import { updateAboutUsSectionForReApprovalAction } from "../Slices/ContentManagement/AboutUsSection/updateAboutUsSectionForReApproval";

import { getAllProgrammeLevelsAction } from "../Slices/ProgramLevel/getAllProgrammeLevels";
import { getProgrammeLevelByIdAction } from "../Slices/ProgramLevel/getProgrammeLevelById";
import { updateProgrammeLevelAction } from "../Slices/ProgramLevel/updateProgrammeLevel";
import { addProgrammeLevelAction } from "../Slices/ProgramLevel/addProgrammeLevel";
import { getAcademicByIdAction } from "../Slices/AcademicDivisions/getAcademicById";
import { getAllAcademicsAction } from "../Slices/AcademicDivisions/getAllAcademics";
import { addAcademicAction } from "../Slices/AcademicDivisions/addAcademic";
import { updateAcademicAction } from "../Slices/AcademicDivisions/updateAcademic";
import { getDepartmentByIdAction } from "../Slices/Department/getDepartmentById";
import { getAllDepartmentsAction } from "../Slices/Department/getAllDepartments";
import { addDepartmentAction } from "../Slices/Department/addDepartment";
import { updateDepartmentAction } from "../Slices/Department/updateDepartment";
import { getAllAboutUsSectionsBySectionNameAction } from "../Slices/ContentManagement/AboutUsSection/getAllAboutUsSectionsBySectionName";
import { updateAcademicsSectionAction } from "../Slices/ContentManagement/AcademicsAndDepartments/updateAcademicsSection";
import { addAcademicsSectionAction } from "../Slices/ContentManagement/AcademicsAndDepartments/addAcademicsSection";
import { getAcademicsSectionsByNameAction } from "../Slices/ContentManagement/AcademicsAndDepartments/getAcademicsSectionsByName";
import { getAcademicsSectionByIdAction } from "../Slices/ContentManagement/AcademicsAndDepartments/getAcademicsSectionById";
import { getAllFundingTypesAction } from "../Slices/Program/getAllFundingTypes";
import { getAllHomeSectionsBySectionNameAction } from "../Slices/ContentManagement/HomeSection/getAllHomeSectionsBySectionName";
import { getProgramByIdAction } from "../Slices/Program/getProgramById";
import { updateProgramAction } from "../Slices/Program/updateProgram";
import { getAllProgramsAction } from "../Slices/Program/getAllPrograms";
import { addProgramAction } from "../Slices/Program/addProgram";
import { uploadPdfAndImageAction } from "../Slices/Operator/uploadPdfAndImage";

import { addIQACSectionAction } from "../Slices/ContentManagement/IqacSection/addIQACSection";
import { getAllIQACSectionsAction } from "../Slices/ContentManagement/IqacSection/getAllIQACSections";
import { getAllIQACSectionsBySectionNameAction } from "../Slices/ContentManagement/IqacSection/getAllIQACSectionsBySectionName";
import { getIQACSectionByIdAction } from "../Slices/ContentManagement/IqacSection/getIQACSectionById";
import { updateIQACSectionAction } from "../Slices/ContentManagement/IqacSection/updateIQACSection";

import { addResearchSectionAction } from "../Slices/ContentManagement/ResearchSection/addResearchSection";
import { getAllResearchSectionsAction } from "../Slices/ContentManagement/ResearchSection/getAllResearchSections";
import { getAllResearchSectionsBySectionNameAction } from "../Slices/ContentManagement/ResearchSection/getAllResearchSectionsBySectionName";
import { getResearchSectionByIdAction } from "../Slices/ContentManagement/ResearchSection/getResearchSectionById";
import { updateResearchSectionAction } from "../Slices/ContentManagement/ResearchSection/updateResearchSection";

import { getFacultyByIdAction } from "../Slices/Faculty/getFacultyById";
import { updateFacultyAction } from "../Slices/Faculty/updateFaculty";
import { getAllFacultyAction } from "../Slices/Faculty/getAllFaculty";
import { addFacultyAction } from "../Slices/Faculty/addFaculty";
import { getAllCampuslifeSectionsBySectionNameAction } from "../Slices/ContentManagement/CampusLife/getAllCampuslifeSectionsBySectionName";
import { addCampuslifeSectionAction } from "../Slices/ContentManagement/CampusLife/addCampuslifeSection";
import { updateCampuslifeSectionAction } from "../Slices/ContentManagement/CampusLife/updateCampuslifeSection";
import { getCampuslifeSectionByIdAction } from "../Slices/ContentManagement/CampusLife/getCampuslifeSectionById";
import { getAllCampuslifeSectionsAction } from "../Slices/ContentManagement/CampusLife/getAllCampuslifeSections";

import { getAllResearchHighlightsAction } from "../Slices/ContentManagement/Research/getAllResearchHighlights";
import { getResearchHighlightByIdAction } from "../Slices/ContentManagement/Research/getResearchHighlightById";
import { addResearchHighlightAction } from "../Slices/ContentManagement/Research/addResearchHighlight";
import { updateResearchHighlightAction } from "../Slices/ContentManagement/Research/updateResearchHighlight";

import { getAllStudentPublicationsAction } from "../Slices/ContentManagement/Research/getAllStudentPublications";
import { getStudentPublicationByIdAction } from "../Slices/ContentManagement/Research/getStudentPublicationById";
import { addStudentPublicationAction } from "../Slices/ContentManagement/Research/addStudentPublication";
import { updateStudentPublicationAction } from "../Slices/ContentManagement/Research/updateStudentPublication";

import { getAllFacultyPublicationsAction } from "../Slices/ContentManagement/Research/getAllFacultyPublications";
import { getFacultyPublicationByIdAction } from "../Slices/ContentManagement/Research/getFacultyPublicationById";
import { addFacultyPublicationAction } from "../Slices/ContentManagement/Research/addFacultyPublication";
import { updateFacultyPublicationAction } from "../Slices/ContentManagement/Research/updateFacultyPublication";

import { addExaminationsSectionAction } from "../Slices/ContentManagement/ExaminationsSection/addExaminationsSection";
import { getAllExaminationsSectionsAction } from "../Slices/ContentManagement/ExaminationsSection/getAllExaminationsSections";
import { getExaminationsSectionByIdAction } from "../Slices/ContentManagement/ExaminationsSection/getExaminationsSectionById";
import { getAllExaminationsSectionsBySectionNameAction } from "../Slices/ContentManagement/ExaminationsSection/getAllExaminationsSectionsBySectionName";
import { updateExaminationsSectionAction } from "../Slices/ContentManagement/ExaminationsSection/updateExaminationsSection";
import { deleteExaminationsSectionAction } from "../Slices/ContentManagement/ExaminationsSection/deleteExaminationsSection";

import { addMarqueeAction } from "../Slices/ContentManagement/Marquee/addMarquee";
import { getAllMarqueesAction } from "../Slices/ContentManagement/Marquee/getAllMarquees";
import { getAllMarqueesByPageAction } from "../Slices/ContentManagement/Marquee/getAllMarqueesByPageName";
import { getMarqueeByIdAction } from "../Slices/ContentManagement/Marquee/getMarqueeById";
import { updateMarqueeAction } from "../Slices/ContentManagement/Marquee/updateMarquee";
import { deleteMarqueeAction } from "../Slices/ContentManagement/Marquee/deleteMarquee";
import { restoreMarqueeAction } from "../Slices/ContentManagement/Marquee/restoreMarquee";


const actions = {
  // ...RptLoadNoDropDownAction,
  // ...RptStatusDropDownAction,

  // ...CategoryTableGetAllAction,
  // ...GetAllOrdersByCustomerAction,
  
  
  ...getAllRolesWithModulesAction,
  ...createRoleWithPermissionsAction,
  ...getAllRolesAction,
 
  ...getPermissionsForAuthUserAction,
  ...updateAllPermissionsForAuthUserAction,
 
  ...addHomeSectionPostAction,
  
  ...getAllHomeSectionsWithCreatorBySectionNameAction,
  ...getAllHomeSectionsBySectionNameBasedOnCreatorAction,
  ...addHomeSectionWithApprovalAction,
  ...updateHomeSectionForReApprovalAction,
  ...updateHomeSectionAction,
  ...getHomeSectionByIdAction,
  ...deleteHomeSectionAction,
 
  ...addAboutUsSectionAction,
  ...addAboutUsSectionWithApprovalAction,
  ...deleteAboutUsSectionAction,
  ...getAllAboutUsSectionsBySectionNameBasedOnCreatorAction,
  ...getAllAboutUsSectionsWithCreatorBySectionNameAction,
  ...getAboutUsSectionByIdAction,
  ...updateAboutUsSectionAction,
  ...updateAboutUsSectionForReApprovalAction,
  
  // ----------------------
  ...getAllProgrammeLevelsAction,
  ...getProgrammeLevelByIdAction,
  ...updateProgrammeLevelAction,
  ...addProgrammeLevelAction,
  ...getAllAcademicsAction,
  ...getAcademicByIdAction,
  ...addAcademicAction,
  ...getAcademicByIdAction,
  ...updateAcademicAction,

  ...getDepartmentByIdAction,
  ...getAllDepartmentsAction,
  ...addDepartmentAction,
  ...updateDepartmentAction,
  ...getAllAboutUsSectionsBySectionNameAction,

  // --------

  ...updateAcademicsSectionAction,
  ...addAcademicsSectionAction,
  ...getAcademicsSectionsByNameAction,
  ...getAcademicsSectionByIdAction,
  ...getAllFundingTypesAction,

  // ---
  ...getAllHomeSectionsBySectionNameAction,

  ...getProgramByIdAction,
  ...updateProgramAction,
  ...getAllProgramsAction,
  ...addProgramAction,

  ...getFacultyByIdAction,
  ...updateFacultyAction,
  ...getAllFacultyAction,
  ...addFacultyAction,


  ...uploadPdfAndImageAction,

  // ====================

  ...addIQACSectionAction,
  ...getAllIQACSectionsAction,
  ...getAllIQACSectionsBySectionNameAction,
  ...getIQACSectionByIdAction,
  ...updateIQACSectionAction,

  // ====================

  ...addResearchSectionAction,
  ...getAllResearchSectionsAction,
  ...getAllResearchSectionsBySectionNameAction,
  ...getResearchSectionByIdAction,
  ...updateResearchSectionAction,

  ...getAllCampuslifeSectionsBySectionNameAction,
  ...addCampuslifeSectionAction,
  ...updateCampuslifeSectionAction,
  ...getCampuslifeSectionByIdAction,
  ...getAllCampuslifeSectionsAction,

  ...getAllResearchHighlightsAction,
  ...getResearchHighlightByIdAction,
  ...addResearchHighlightAction,
  ...updateResearchHighlightAction,

  ...getAllStudentPublicationsAction,
  ...getStudentPublicationByIdAction,
  ...addStudentPublicationAction,
  ...updateStudentPublicationAction,

  ...getAllFacultyPublicationsAction,
  ...getFacultyPublicationByIdAction,
  ...addFacultyPublicationAction,
  ...updateFacultyPublicationAction,

  ...addExaminationsSectionAction,
  ...getAllExaminationsSectionsAction,
  ...getExaminationsSectionByIdAction,
  ...getAllExaminationsSectionsBySectionNameAction,
  ...updateExaminationsSectionAction,
  ...deleteExaminationsSectionAction,

  // MARQUEE ACTIONS
  ...addMarqueeAction,
  ...getAllMarqueesAction,
  ...getAllMarqueesByPageAction,
  ...getMarqueeByIdAction,
  ...updateMarqueeAction,
  ...deleteMarqueeAction,
  ...restoreMarqueeAction,
  
};

export default actions;
