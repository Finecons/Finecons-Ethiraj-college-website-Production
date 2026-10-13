// import { GetAllOrdersByCustomerAction } from "../Slices/Customer/GetAllOrdersByCustomer";

import { getAllAboutUsSectionsAction } from "../Slices/AboutUs/getAllAboutUsSections";
import { getAcademicsSectionsByNameAction } from "../Slices/AcaddemicsAndDepartments/getAcademicsSectionsByName";
import { getAcademicsHierarchyByProgrammeLevelAction } from "../Slices/AcadmicDivisions/getAcademicsHierarchyByProgrammeLevel";
import { getAllAcademicsWithAllDetailsAction } from "../Slices/AcadmicDivisions/getAllAcademicsWithAllDetails";
import { getAllAcademicsAction } from "../Slices/AcadmicDivisions/getAllAcademics";
import { getAllProgrammeLevelsAction } from "../Slices/AcadmicDivisions/getAllProgrammeLevels";
import { getDepartmentByIdAction } from "../Slices/AcadmicDivisions/getDepartmentById";
import { getProgramByIdAction } from "../Slices/AcadmicDivisions/getProgramById";
import { getAllCampusLifeSectionsAction } from "../Slices/CampusLife/getAllCampusLifeSections";
import { getAllHomeSectionsBySectionNameAction } from "../Slices/HomeSection/getAllHomeSectionsBySectionName";

import { getAllIQACSectionsAction } from "../Slices/Iqac/getAllIQACSections";
import { getAllIQACSectionsBySectionNameAction } from "../Slices/Iqac/getAllIQACSectionsBySectionName";
import { getIQACSectionByIdAction } from "../Slices/Iqac/getIQACSectionById";
import { getAllResearchSectionsAction } from "../Slices/Research/getAllResearchSections";
import { getAllResearchSectionsBySectionNameAction } from "../Slices/Research/getAllResearchSectionsBySectionName";
import { getImportantResearchHighlightsAction } from "../Slices/Research/getImportantResearchHighlights";
import { getResearchSectionByIdAction } from "../Slices/Research/getResearchSectionById";
import { getAllExaminationsSectionsAction } from "../Slices/ControllerofExaminations/getAllExaminationsSections";
import { getAllButtonsByNameAction } from "../Slices/Buttons/getAllButtonsByName";
import { getAllMeritListSectionsAction } from "../Slices/MeritList/getAllMeritListSections";
import { getAllMarqueesAction } from "../Slices/Marquees/getAllMarquees";
import { postContactUsFormAction } from "../Slices/ContactForm/postContactUsForm";

const actions = {
  // ...LoginPostAction,
  ...getAllHomeSectionsBySectionNameAction,
  ...getAllAboutUsSectionsAction,
  ...getAcademicsSectionsByNameAction,
  ...getAllAcademicsAction,
  ...getAllAcademicsWithAllDetailsAction,
  ...getDepartmentByIdAction,
  ...getProgramByIdAction,

  ...getAcademicsHierarchyByProgrammeLevelAction,
  ...getAllProgrammeLevelsAction,
  
  ...getAllIQACSectionsBySectionNameAction,
  ...getAllIQACSectionsAction,
  ...getIQACSectionByIdAction,
    ...getAllResearchSectionsBySectionNameAction,
  ...getAllResearchSectionsAction,
  ...getResearchSectionByIdAction,
  ...getAllCampusLifeSectionsAction,

  ...getImportantResearchHighlightsAction,

  ...getAllExaminationsSectionsAction,
  ...getAllButtonsByNameAction,
  ...getAllMeritListSectionsAction,
  ...getAllMarqueesAction,

...postContactUsFormAction,

};

export default actions;
