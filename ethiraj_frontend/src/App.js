// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//     </div>
//   );
// }

// export default App;

// App.js
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import theme from './theme';
// import YourComponent from './YourComponent';
import theme from "./Components/Theme/Theme";
import Navbar from "./Components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Router, Routes, useLocation, Navigate } from "react-router-dom";
import Footer from "./Pages/Footer";
import HomeAllSectionsMainPage from "./Pages/HomePage/HomeAllSectionsMainPage";
import BannerSection from "./Pages/AboutUs/OurStory/BannerSection";
import AboutUsAllComponents from "./Pages/AboutUs/AboutUsAllComponents";
import { useEffect, useRef, useState } from "react";
import GoverningBody from "./Pages/AboutUs/OurStory/TabCompoents/GoverningBody";
import BoardofTrustee from "./Pages/AboutUs/OurStory/TabCompoents/BoardofTrustee";
import CollegeComittee from "./Pages/AboutUs/OurStory/TabCompoents/CollegeComittee";
import StatuoryBody from "./Pages/AboutUs/StatuoryBody/StatuoryBody";
import AllNewsandEvents from "./Pages/AboutUs/OurStory/TabCompoents/AllNewsandEvents";
import CustomScrollToTop from "./Components/CustomScrollToTop/CustomScrollToTop";
import AcademicandDepartmentsAllComponents from "./Pages/AcademicandDepartments/AcademicandDepartmentsAllComponents";
import CustomNavbar from "./Components/Navbar/CustomNavbar";
import ProgramList from "./Pages/AcademicandDepartments/ProgramList";
import Postgraduate from "./Pages/AcademicandDepartments/Postgraduate";
import AllAcademicDivisions from "./Pages/AcademicandDepartments/AllAcademicDivisions";
import ParticularAcademicDivisions from "./Pages/AcademicandDepartments/ParticularAcademicDivisions";
import CustomParticularProgramDetails from "./Pages/AcademicandDepartments/ParticularProgramDetails/CustomParticularProgramDetails";
import CustomParticularDepartmentDetails from "./Pages/AcademicandDepartments/ParticularProgramDetails/CustomParticularDepartmentDetails";
import AcademicCalendar from "./Pages/AcademicandDepartments/AcademicCalendar/AcademicCalendar";
import CustomGoToTopButton from "./Components/CustomGoToTopButton/CustomGoToTopButton";
import FormerChairpersons from "./Pages/AboutUs/OurStory/TabCompoents/FormerChairpersons";
import { MmsRounded } from "@mui/icons-material";
import FormerPrinciples from "./Pages/AboutUs/OurStory/TabCompoents/FormerPrinciples";
import Iqac from "./Pages/Iqac/Iqac";
import ResearchAllComponents from "./Pages/Research/ResearchAllComponents";
import FollowersProjectsAllComponents from "./Pages/Research/FollowersProjects/FollowersProjectsAllComponents";
import Events from "./Pages/Research/Events/Events";
import InstrumentationCentre from "./Pages/Research/InstrumentationCentre";
import NonStatuoryBody from "./Pages/AboutUs/NonStatuoryBody/NonStatuoryBody";
import InstitutionalResponsiblities from "./Pages/AboutUs/InstitutionalResponsiblities/InstitutionalResponsiblities";
import CampusLifeMainPageAllSections from "./Pages/CampusLife/CampusLifeMainPage/CampusLifeMainPageAllSections";
import CustomParticularPhdProgramDetails from "./Pages/AcademicandDepartments/ParticularProgramDetails/CustomParticularPhdProgramDetails";
import ClubsPageAllSections from "./Pages/CampusLife/Clubs/ClubsPageAllSections";
import GlobalLoadingComponent from "./Components/GlobalLoadingComponent/GlobalLoadingComponent";
import HealthandWellness from "./Pages/CampusLife/HealthandWellness/HealthandWellness";
import Sports from "./Pages/CampusLife/Sports/Sports";
import Facilities from "./Pages/CampusLife/Facilities/Facilities";
import StudentUnion from "./Pages/CampusLife/StudentUnion/StudentUnion";
import CustomParticularFoundationalCoursesDetails from "./Pages/AcademicandDepartments/ParticularProgramDetails/CustomParticularFoundationalCoursesDetails";
import ResearchPublications from "./Pages/Research/ResearchPublications/ResearchPublications";
import ResearchAllPublications from "./Pages/Research/ResearchPublications/ResearchAllPublications";
import ControllerofExaminations from "./Pages/AboutUs/ControllerofExaminations/ControllerofExaminations";
import ExamSchedule from "./Pages/AboutUs/ControllerofExaminations/ExamSchedule";
import Transcript from "./Pages/AboutUs/ControllerofExaminations/Transcript";
import IncubationCentre from "./Pages/CampusLife/IncubationCentre/IncubationCentre";
import Hostel from "./Pages/CampusLife/Hostel/Hostel";
import DynamicTimelineModify from "./Pages/DynamicTimelineModify";
import Library from "./Pages/CampusLife/Library/Library";
import AdmissionsMainPage from "./Pages/Admissions/AdmissionsMainPage";
import AdmissionsGuidelines from "./Pages/Admissions/AdmissionsGuidelines.js";
import EligibilityCriteria from "./Pages/Admissions/EligibilityCriteria.js";
import MeritList from "./Pages/Admissions/MeritList.js";
import AdmissionsHowToApply from "./Pages/Admissions/AdmissionsHowToApply";
import PreRegistrationPolicyPGSS from "./Pages/Admissions/PreRegistrationPolicyPGSS";
import PreRegistrationPolicyNRI from "./Pages/Admissions/PreRegistrationPolicyNRI";
import AlumniConnect from "./Pages/Alumna/AlumniConnect.jsx";
import Scholorships from "./Pages/AcademicandDepartments/Scholorships/Scholorships.js";
import InternationalRelations from "./Pages/AboutUs/InternationalRelations/InternationalRelations.js";
import SwayamMooc from "./Pages/CampusLife/SwayamMooc/SwayamMooc.js";
import CentreofWomenStudies from "./Pages/CampusLife/CentreofWomenStudies/CentreofWomenStudies.js";
import PlacementCell from "./Pages/CampusLife/PlacementCell/PlacementCell.js";
import Admissions from "./Pages/Admissions/Admissions.js";
import { Box } from "@mui/material";
import ACCA from "./Pages/CampusLife/ACCA/ACCA.js";
import CareerDevelopment from "./Pages/CampusLife/CareerDevelopment/CareerDevelpment.js";
function App() {
  const [isMainTabsActive, setIsMainTabsActive] = useState(false);
  const mainTabsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const mainTabs = mainTabsRef.current;

      if (!mainTabs) {
        setIsMainTabsActive(false);
        return;
      }

      // Get ALL navbar containers (could be desktop or mobile)
      const navbars = document.querySelectorAll(".navbar-container");
      if (navbars.length === 0) {
        setIsMainTabsActive(false);
        return;
      }

      // Find the navbar that's currently visible by checking which one has height > 0
      let visibleNavbar = null;
      let navbarHeight = 0;

      for (let navbar of navbars) {
        const rect = navbar.getBoundingClientRect();
        // Find navbar that's visible in viewport or has y position >= 0
        if (rect.height > 0) {
          visibleNavbar = navbar;
          navbarHeight = rect.height;
          break;
        }
      }

      if (!visibleNavbar) {
        setIsMainTabsActive(false);
        return;
      }

      const mainTabsRect = mainTabs.getBoundingClientRect();
      const navbarRect = visibleNavbar.getBoundingClientRect();

      // Calculate navbar bottom position in viewport
      // When navbar is sticky at top 0, its bottom is at navbarHeight
      const navbarBottomInViewport = navbarRect.bottom;
      const mainTabsTopInViewport = mainTabsRect.top;

      // Hide navbar when mainTabs top reaches navbar bottom
      // Use a small buffer (5px) for smooth transition
      if (mainTabsTopInViewport <= navbarBottomInViewport + 5) {
        setIsMainTabsActive(true);
      } else {
        setIsMainTabsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMainTabsActive(false);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalLoadingComponent />

      <Box
        className="app-wrapper"
        sx={{
          width: "100%",
          [theme.breakpoints.up("xl")]: {
            maxWidth: "1728px",
            margin: "0 auto",
          },
        }}
      >
        {/* <Router> */}
        <CustomScrollToTop />
        <Navbar isMainTabsActive={isMainTabsActive} />
        <div className="app-content">
          <Routes>
            {/* <Navbar /> */}

            <Route
              path="/"
              element={
                <HomeAllSectionsMainPage
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/aboutus"
              element={
                <AboutUsAllComponents
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/aboutus/governingbody"
              element={
                <GoverningBody
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/aboutus/boardoftrustee"
              element={
                <BoardofTrustee
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/aboutus/collegecommittee"
              element={
                <CollegeComittee
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/aboutus/statutorybody"
              element={
                <StatuoryBody
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              path="/aboutus/nonstatutorybody"
              element={
                <NonStatuoryBody
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              path="/aboutus/institutionalresponsiblities"
              element={
                <InstitutionalResponsiblities
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              path="/aboutus/formerchairpersons"
              element={
                <FormerChairpersons
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/aboutus/formerprincipals"
              element={
                <FormerPrinciples
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              path="/internationalrelations"
              element={
                <InternationalRelations
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/academics/controllerofexaminations"
              element={
                <ControllerofExaminations
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/examshedule"
              element={
                <ExamSchedule
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/transcript"
              element={
                <Transcript
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/campuslife/careerdevelopment/incubationcentre"
              element={
                <IncubationCentre
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/allnewsevents"
              element={
                <AllNewsandEvents
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/academicsanddepartments"
              element={
                <AcademicandDepartmentsAllComponents
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/academics/programlist"
              element={
                <ProgramList
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              path="/academics/scholorships"
              element={
                <Scholorships
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/academics/academiccalendar"
              element={
                <AcademicCalendar
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/academics/postgraduateprogramlist"
              element={
                <Postgraduate
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              path="/academics/allacademicdivisions"
              element={
                <AllAcademicDivisions
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              path="/academics/allacademicdivisions/:academicSlug"
              element={
                <ParticularAcademicDivisions
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
             <Route
              path="/campuslife/careerdevelopment"
              element={
                <CareerDevelopment
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              path="/academics/:departmentName/:programName/:programId"
              element={
                <CustomParticularProgramDetails
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              // path="/academics/departmentdetails"h
              path="/academics/:departmentName/:departmentId"
              element={
                <CustomParticularDepartmentDetails
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              // path="/academics/departmentdetails"
              path="/academic/:foundationcourses/:departmentName/:departmentId"
              // path="/academics/foundationcourses"
              element={
                <CustomParticularFoundationalCoursesDetails
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              // path="/academics/departmentdetails"h
              path="/iqac"
              element={
                <Iqac
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              // path="/academics/departmentdetails"h
              path="/research/ecric"
              element={
                <ResearchAllComponents
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              // path="/academics/departmentdetails"h
              path="/research/fellowshipsandprojects"
              element={
                <FollowersProjectsAllComponents
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              // path="/academics/departmentdetails"h
              path="/research/researchpublications"
              element={
                <ResearchAllPublications
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              // path="/academics/departmentdetails"h
              path="/research/:researchallhighlights"
              element={
                <ResearchPublications
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              // path="/academics/departmentdetails"h
              path="/research/events"
              element={
                <Events
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              // path="/academics/departmentdetails"h
              path="/research/instrumentationcentre"
              element={
                <InstrumentationCentre
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              // path="/academics/departmentdetails"h
              path="/campuslife"
              element={
                <CampusLifeMainPageAllSections
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/campuslife/hostel"
              element={
                <Hostel
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              // path="/academics/departmentdetails"h
              path="/phdprograms"
              element={
                <CustomParticularPhdProgramDetails
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              // path="/academics/departmentdetails"h
              path="/phdprograms/:programId"
              element={
                <CustomParticularPhdProgramDetails
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              // path="/academics/departmentdetails"h
              path="/campuslife/clubs"
              element={
                <ClubsPageAllSections
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              // path="/academics/departmentdetails"h
              path="/campuslife/healthandwellness"
              element={
                <HealthandWellness
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              // path="/academics/departmentdetails"h
              path="/campuslife/healthandwellness"
              element={
                <HealthandWellness
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              // path="/academics/departmentdetails"h
              path="/campuslife/careerdevelopment/acca"
              element={
                <ACCA
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              // path="/academics/departmentdetails"h
              path="/campuslife/studentunion"
              element={
                <StudentUnion
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              // path="/academics/departmentdetails"h
              path="/campuslife/facilities"
              element={
                <Facilities
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              // path="/academics/departmentdetails"h
              path="/campuslife/library"
              element={
                <Library
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              // path="/academics/departmentdetails"h
              path="/campuslife/sports"
              element={
                <Sports
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              // path="/academics/departmentdetails"h
              path="/campuslife/careerdevelopment/swayammoocs"
              element={
                <SwayamMooc
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              // path="/academics/departmentdetails"h
              path="/campuslife/careerdevelopment/womencentre"
              element={
                <CentreofWomenStudies
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              // path="/academics/departmentdetails"h
              path="/campuslife/careerdevelopment/placementcell"
              element={
                <PlacementCell
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />

            <Route
              // path="/academics/departmentdetails"h
              path="/admissions"
              element={
                <AdmissionsMainPage
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              // path="/academics/departmentdetails"h
              path="/alumni"
              element={
                <AlumniConnect
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              // path="/academics/departmentdetails"h
              path="/admissions/policy"
              element={
                <AdmissionsGuidelines
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              // path="/academics/departmentdetails"h
              path="/admissions/applynow"
              element={
                <Admissions
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/admissions/pre-registration-policy-pg-ss"
              element={
                <PreRegistrationPolicyPGSS
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/admissions/pre-registration-policy-nri"
              element={
                <PreRegistrationPolicyNRI
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/admissions/how-to-apply"
              element={
                <AdmissionsHowToApply
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/admissions/eligibility-criteria"
              element={
                <EligibilityCriteria
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            <Route
              path="/admissions/merit-list"
              element={
                <MeritList
                  isMainTabsActive={isMainTabsActive}
                  mainTabsRef={mainTabsRef}
                />
              }
            />
            {/* First Navbar */}
            {/* <Route path="/students" element={<Students />} />
          <Route path="/faculty-staff" element={<Faculty />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/visitors" element={<Visitors />} /> */}

            {/* Second Navbar - About */}
            {/* <Route path="/about" element={<About />} />
          <Route path="/aboutus" element={<OurStory />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/mission-vision" element={<MissionVision />} /> */}

            {/* Academics */}
            {/* <Route path="/academics" element={<Academics />} />
          <Route path="/academics/departments" element={<Departments />} />
          <Route path="/academics/undergraduate" element={<Undergraduate />} />
          <Route path="/academics/postgraduate" element={<Postgraduate />} /> */}

            {/* Research */}
            {/* <Route path="/research" element={<Research />} />
          <Route path="/research/publications" element={<Publications />} />
          <Route path="/research/projects" element={<Projects />} />
          <Route
            path="/research/innovation-labs"
            element={<InnovationLabs />}
          /> */}

            {/* Campus Life */}
            {/* <Route path="/campus" element={<Campus />} />
          <Route path="/campus/clubs" element={<Clubs />} />
          <Route path="/campus/hostel" element={<Hostel />} />
          <Route path="/campus/events" element={<Events />} /> */}

            {/* Catch-all route - redirects invalid URLs to home page */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <CustomGoToTopButton />
        <Footer />
      </Box>
      {/* </Router> */}
    </ThemeProvider>
  );
}

export default App;
