import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import getAllHomeSectionsBySectionNameSlice from "../Slices/HomeSection/getAllHomeSectionsBySectionName";
import getAllAboutUsSectionsSlice from "../Slices/AboutUs/getAllAboutUsSections";
import getAcademicsSectionsByNameSlice from "../Slices/AcaddemicsAndDepartments/getAcademicsSectionsByName";
import getAllAcademicsSlice from "../Slices/AcadmicDivisions/getAllAcademics";
import getAllAcademicsWithAllDetailsSlice from "../Slices/AcadmicDivisions/getAllAcademicsWithAllDetails";
import getDepartmentByIdSlice from "../Slices/AcadmicDivisions/getDepartmentById";
import getProgramByIdSlice from "../Slices/AcadmicDivisions/getProgramById";
import getAcademicsHierarchyByProgrammeLevelSlice from "../Slices/AcadmicDivisions/getAcademicsHierarchyByProgrammeLevel";
import getAllProgrammeLevelsSlice from "../Slices/AcadmicDivisions/getAllProgrammeLevels";
import getAllIQACSectionsBySectionNameSlice from "../Slices/Iqac/getAllIQACSectionsBySectionName";
import getAllIQACSectionsSlice from "../Slices/Iqac/getAllIQACSections";
import getIQACSectionByIdSlice from "../Slices/Iqac/getIQACSectionById";
import getAllResearchSectionsBySectionNameSlice from "../Slices/Research/getAllResearchSectionsBySectionName";
import getAllResearchSectionsSlice from "../Slices/Research/getAllResearchSections";
import getResearchSectionByIdSlice from "../Slices/Research/getResearchSectionById";
import globalLoadingReducer from "../Slices/GlobalLoading";
import { loadingMiddleware } from "../middleware/loadingMiddleware";
import getAllCampusLifeSectionsSlice from "../Slices/CampusLife/getAllCampusLifeSections";
import getImportantResearchHighlightsSlice from "../Slices/Research/getImportantResearchHighlights";
import getAllExaminationsSectionsSlice from "../Slices/ControllerofExaminations/getAllExaminationsSections";
import programCategoriesSlice from "../Slices/Admissions/getProgramCategories";
import getAllButtonsByNameSlice from "../Slices/Buttons/getAllButtonsByName";
import getAllMeritListSectionsSlice from "../Slices/MeritList/getAllMeritListSections";
import getAllMarqueesSlice from "../Slices/Marquees/getAllMarquees";
import postContactUsFormSlice from "../Slices/ContactForm/postContactUsForm";

// import LoginPostSlice from "../Slices/Login/LoginPost";

const reducer = combineReducers({
  // LoginPost: LoginPostSlice,
  getAllHomeSectionsBySectionName: getAllHomeSectionsBySectionNameSlice,
  getAllAboutUsSections: getAllAboutUsSectionsSlice,
  getAcademicsSectionsByName: getAcademicsSectionsByNameSlice,
  getAllAcademics: getAllAcademicsSlice,
  getAllAcademicsWithAllDetails: getAllAcademicsWithAllDetailsSlice,
  getDepartmentById: getDepartmentByIdSlice,
  getProgramById: getProgramByIdSlice,

  // -----------------

  getAcademicsHierarchyByProgrammeLevel:
    getAcademicsHierarchyByProgrammeLevelSlice,
  getAllProgrammeLevels: getAllProgrammeLevelsSlice,
  getAllIQACSectionsBySectionName: getAllIQACSectionsBySectionNameSlice,
  getAllIQACSections: getAllIQACSectionsSlice,
  getIQACSectionById: getIQACSectionByIdSlice,

  getAllResearchSectionsBySectionName: getAllResearchSectionsBySectionNameSlice,
  getAllResearchSections: getAllResearchSectionsSlice,
  getResearchSectionById: getResearchSectionByIdSlice,
  globalLoading: globalLoadingReducer,

  getAllCampusLifeSections: getAllCampusLifeSectionsSlice,

  getImportantResearchHighlights:getImportantResearchHighlightsSlice,

  getAllExaminationsSections: getAllExaminationsSectionsSlice,

  programCategoriesReducer: programCategoriesSlice,

  getAllButtonsByName: getAllButtonsByNameSlice,

  getAllMeritListSections: getAllMeritListSectionsSlice,

  getAllMarquees: getAllMarqueesSlice,
postContactUsForm: postContactUsFormSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loadingMiddleware,
  ],
});
export default store;
