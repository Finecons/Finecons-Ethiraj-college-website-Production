import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  InputBase,
  Box,
  Grid,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchData } from "../../helpers";
import { getAllButtonsByNameAction } from "../../ReduxStore/Slices/Buttons/getAllButtonsByName";

import downArrow from "../../Assets/Down_arrow.svg";
import logoDesktop from "../../Assets/logoDesktop.png";
import logoMobile from "../../Assets/logoMobile.png";

import CustomSearchFeild from "../SearchField/CustomSearchFeild";
import CarouselSection from "../../Pages/HomePage/CarouselSection";
import RankingOutcomessSection from "../../Pages/HomePage/RankingOutcomessSection";
import MainTabs from "../../Pages/MainTabs";
import NewsPage from "../../Pages/NewsPage";
import RankingsPage from "../../Pages/rankings";
import aboutMenuImage from "../../Assets/FounderImagee.png";
import academicsMenuImage from "../../Assets/academicdivisions.png";
import researchMenuImage from "../../Assets/ResearchECRIC.jpg";
import campusMenuImage from "../../Assets/campus-students.png";
import newsMenuImage from "../../Assets/new1.png";
import "./Navbar.css";
import { Label, SearchOff } from "@mui/icons-material";
import infoIconImage from "../../Assets/info.svg";
import bookIconImage from "../../Assets/book-open-text.svg";
import notebookIconImage from "../../Assets/notebook-pen.svg";
import schoolIconImage from "../../Assets/school.svg";

import newsIconImage from "../../Assets/newspaper.png";

import fileUserIconImage from "../../Assets/file-user.svg";
import contactIconImage from "../../Assets/user-round.svg";
import penIconImage from "../../Assets/pen.svg";
// import penIconImage from "../../Assets/user";

import graduationCapIconImage from "../../Assets/graduation-cap.svg";
import UserRoundOenIconImage from "../../Assets/user-round-pen.svg";
import fileTextIconImage from "../../Assets/file-text.svg";
// import graduationCapIconImage from "../../Assets/info.svg"
import drawerCancelIconImage from "../../Assets/Drawer_cancel_icon_image.svg";
import Placements from "../../Pages/placements";
import DrawerIconImage from "../../Assets/DrawerIconImage.svg";
import Gallery from "../../Pages/gallery";
import ExperienceEthiraj from "../../Pages/ExperienceEthiraj";
import Footer from "../../Pages/Footer";
import notificationIconImage from "../../Assets/NotificationIndicatIconImage.svg";
import NotificationIcon from "../NotificationIcon/NotificationIcon";
import CustomDropdownButton from "../CustomDropdownButton/CustomDropdownButton";
import CustomNavbar from "./CustomNavbar";
import AnnouncementsBanner from "../AnnouncementsBanner/AnnouncementsBanner";
import actions from "../../ReduxStore/actions";
import calenderPdf from "../../Assets/Calendar_July_Oct2026.pdf"
import SiteSearchModal from "../Search/SiteSearchModal";
import searchService from "../../services/searchService";

/* ---------------- Configs ---------------- */

// First row menu: "Information For"
const firstNavMenu = [
  // {
  //   label: "Students",
  //   link: "",
  //   tabMobileIconImage: graduationCapIconImage,
  //   notficationCount: 0,
  // },
  // {
  //   label: "Faculty",
  //   link: "",
  //   tabMobileIconImage: UserRoundOenIconImage,
  //   notficationCount: 4,
  // },
  // {
  //   label: "Parents",
  //   link: "",
  //   tabMobileIconImage: contactIconImage,
  //   notficationCount: 4,
  // },
  {
    label: "Controller of Examinations",
    link: "/academics/controllerofexaminations",
    tabMobileIconImage: penIconImage,
    // notficationCount: 4,
  },

  {
    label: "Admissions",
    link: "/admissions",
    tabMobileIconImage: fileUserIconImage,
    notficationCount: 4,
  },

  {
    label: "Alumni",
    link: "/alumni",
    tabMobileIconImage: UserRoundOenIconImage,
    // notficationCount: 4,
  },

  {
    label: "IQAC",
    link: "/iqac",
    tabMobileIconImage: fileTextIconImage,
    // notficationCount: 0,
  },
];

// Second row menu
const secondNavMenu = [
  {
    label: "About Us",
    type: "about",
    link: "/aboutus",
    groups: [
      {
        title: "The College",
        items: [
          {
            label: "About Ethiraj",
            link: "/aboutus",
            state: { scrollTo: "about-ethiraj" },
          },
          {
            label: "Fast Facts",
            link: "/aboutus",
            state: { scrollTo: "fast-facts" },
          },
          {
            label: "Milestones",
            link: "/aboutus",
            state: { scrollTo: "milestones" },
          },
          {
            label: "Vision & Mission",
            link: "/aboutus",
            state: { scrollTo: "vision-mission" },
          },
        ],
      },
      {
        title: "Leadership",
        items: [
          {
            label: "Chairman's Message",
            link: "/aboutus",
            state: { scrollTo: "chairman-message" },
          },
          {
            label: "Principal's Message",
            link: "/aboutus",
            state: { scrollTo: "principal-message" },
          },
          { label: "Board of Trustees", link: "/aboutus/boardoftrustee" },
          { label: "Former Chairpersons", link: "/aboutus/formerchairpersons" },
          { label: "Former Principals", link: "/aboutus/formerprincipals" },
        ],
      },
      {
        sections: [
          {
            title: "Governance",
            items: [
              { label: "Governing Body", link: "/aboutus/governingbody" },
              { label: "Statutory Bodies", link: "/aboutus/statutorybody" },
              {
                label: "Non-Statutory Bodies",
                link: "/aboutus/nonstatutorybody",
              },
            ],
          },
          {
            title: "Institutional Responsibilities",
            items: [
              {
                label: "Anti-Ragging Committee",
                link: "/aboutus/institutionalresponsiblities",
                state: { scrollTo: "anti-ragging-committee" },
              },
              {
                label: "Anti-Drug Committee",
                link: "/aboutus/institutionalresponsiblities",
                state: { scrollTo: "anti-drug-committee" },
              },
              {
                label: "Organogram",
                link: "/aboutus/institutionalresponsiblities",
                state: { scrollTo: "flowchart" },
              },
              {
                label: "RTI",
                link: "/aboutus/institutionalresponsiblities",
                state: { scrollTo: "rti-mandatory-disclosure" },
              },
            ],
          },
        ],
      },
      {
        title: "Partnerships",
        items: [
          {
            label: "Centre for International Relations",
            link: "/internationalrelations",
            // state: { scrollTo: "international-relations" },
          },
          {
            label: "MoUs & Collaborations",
            link: "/internationalrelations",
            state: { scrollTo: "mous-collaborations" },
          },
        ],
      },
    ],
    items: [
      {
        label: "About Ethiraj",
        link: "/aboutus",
        state: { scrollTo: "about-ethiraj" },
      },
      {
        label: "Fast Facts",
        link: "/aboutus",
        state: { scrollTo: "fast-facts" },
      },
      {
        label: "Milestones",
        link: "/aboutus",
        state: { scrollTo: "milestones" },
      },
      {
        label: "Vision & Mission",
        link: "/aboutus",
        state: { scrollTo: "vision-mission" },
      },

      {
        label: "Chairman's Message",
        link: "/aboutus",
        state: { scrollTo: "chairman-message" },
      },
      {
        label: "Principal's Message",
        link: "/aboutus",
        state: { scrollTo: "principal-message" },
      },
      { label: "Board of Trustees", link: "/aboutus/boardoftrustee" },
      { label: "Former Chairpersons", link: "/aboutus/formerchairpersons" },
      { label: "Former Principals", link: "/aboutus/formerprincipals" },
      { label: "Governing Body", link: "/aboutus/governingbody" },
      { label: "Statutory Bodies", link: "/aboutus/statutorybody" },
      { label: "Non-Statutory Bodies", link: "/aboutus/nonstatutorybody" },
      {
        label: "Anti-Ragging Committee",
        link: "/aboutus/institutionalresponsiblities",
      },
      {
        label: "Anti-Drug Committee",
        link: "/aboutus/institutionalresponsiblities",
      },
      { label: "Organogram", link: "/aboutus/institutionalresponsiblities" },
      {
        label: "RTI",
        link: "/aboutus/institutionalresponsiblities",
        state: { scrollTo: "rti" },
      },
      {
        label: "Centre for International Relations",
        link: "/internationalrelations",
        state: { scrollTo: "international-relations" },
      },
      {
        label: "MoUs & Collaborations",
        link: "/aboutus",
        state: { scrollTo: "mous-collaborations" },
      },
    ],
    image: aboutMenuImage,
    tabMobileIconImage: infoIconImage,
  },
  {
    label: "Academics",
    dropdownTitle: "Academics",
    type: "academics",
    link: "/academicsanddepartments",
    groups: [
      {
        title: "Departments",
        items: [
          { label: "All Departments", link: "/academics/allacademicdivisions" },
          {
            label: "Business Studies",
            link: "/academics/allacademicdivisions/business-studies",
          },
          { label: "Science", link: "/academics/allacademicdivisions/science" },
          {
            label: "Information Technology (I.T.)",
            link: "/academics/allacademicdivisions/information-technology",
          },
          {
            label: "Arts & Humanities",
            link: "/academics/allacademicdivisions/arts-and-humanities",
          },
          {
            label: "Media Studies",
            link: "/academics/allacademicdivisions/media-studies",
          },
          {
            label: "Management Studies",
            link: "/academics/allacademicdivisions/management-studies",
          },
          {
            label: "Foundation Courses",
            link: "/academics/allacademicdivisions/foundation-courses",
          },
        ],
      },
      {
        sections: [
          {
            title: "Browse by Stream",
            items: [
              {
                label: "Aided Stream",
                link: "/academics/programlist",
                state: { viewMode: "aided" },
              },
              {
                label: "Self Supporting Stream",
                link: "/academics/programlist",
                state: { viewMode: "self-supported" },
              },
            ],
          },
          {
            title: "Browse by Level",
            items: [
              {
                label: "Undergraduate Programs",
                link: "/academics/programlist",
                state: { level: "Undergraduate Programmes" },
              },
              {
                label: "Postgraduate Programs",
                link: "/academics/programlist",
                state: { level: "Postgraduate Programmes" },
              },
              {
                label: "Ph.D Programs",
                link: "/academics/programlist",
                state: { level: "PhD Programmes" },
              },
            ],
          },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Academic Calendar", link: "/academics/academiccalendar" },
          { label: "Library & Facilities", link: "/campuslife" },
          { label: "Swayam/MOOCs", link: "/campuslife/careerdevelopment/swayammoocs" },
          { label: "Admissions", link: "/admissions" },
          { label: "Scholarships", link: "/academics/scholorships" },
          {
            label: "Controller of Examinations",
            link: "/academics/controllerofexaminations",
          },
          { label: "Placements", link: "/campuslife/careerdevelopment/placementcell" },
        ],
      },
    ],
    items: [
      { label: "Departments", link: "/academics/allacademicdivisions" },
      {
        label: "Undergraduate Programs",
        link: "/academics/programlist",
        state: { level: "Undergraduate Programmes" },
      },
      {
        label: "Postgraduate Programs",
        link: "/academics/programlist",
        state: { level: "Postgraduate Programmes" },
      },
      {
        label: "Research Programs",
        link: "/academics/programlist",
        // link: "/phdprograms",

        state: { level: "PhD Programmes" },
      },
      { label: "Aided Programs", link: "/academics/programlist" },
      { label: "Self-Supported Programs", link: "/academics/programlist" },
      { label: "Value Added Courses", link: "/academics/programlist" },
      {
        label: "Controller of Examinations",
        link: "/academics/controllerofexaminations",
      },
    ],
    image: academicsMenuImage,
    tabMobileIconImage: bookIconImage,
  },
  {
    label: "Research",
    type: "research",
    link: "/research/ecric",
    groups: [
      {
        title: "About ECRIC",
        items: [
          {
            label: "ECRIC Committee",
            link: "/research/ecric",
            state: { scrollTo: "ecric-committee" },
          },
          {
            label: "Research Highlights",
            link: "/research/ecric",
            state: { scrollTo: "research-highlights" },
          },
          {
            label: "Patents",
            link: "/research/ecric",
            state: { scrollTo: "patents" },
          },
          {
            label: "Annual Publications",
            link: "/research/ecric",
            state: { scrollTo: "annual-publications" },
          },
          { label: "Events", link: "/research/events" },
        ],
      },
      {
        title: "Fellowships & Projects",
        items: [
          {
            label: "Ph.D Fellowship",
            link: "/research/fellowshipsandprojects",
            state: { scrollTo: "phd-fellowship" },
          },
          {
            label: "Student Summer Project",
            link: "/research/fellowshipsandprojects",
            state: { scrollTo: "student-summer-project" },
          },
          {
            label: "Externally Funded Projects",
            link: "/research/fellowshipsandprojects",
            state: { scrollTo: "externally-funded-projects" },
          },
          {
            label: "ECRIC Funded Faculty Research Projects",
            link: "/research/fellowshipsandprojects",
            state: { scrollTo: "ecric-funded-faculty-projects" },
          },
          {
            label: "Consultancy",
            link: "/research/fellowshipsandprojects",
            state: { scrollTo: "consultancy" },
          },
        ],
      },
      {
        title: "Instrumentation Centre",
        items: [
          {
            label: "FIST from DST Funded Instruments",
            link: "/research/instrumentationcentre",
            state: { scrollTo: "fist-dst-instruments" },
          },
          {
            label: "UGC Funded Instruments",
            link: "/research/instrumentationcentre",
            state: { scrollTo: "ugc-funded-instruments" },
          },
          {
            label: "Reserve an Instrument",
            link: "/research/instrumentationcentre",
            state: { scrollTo: "reserve-an-instrument" },
          },
        ],
      },
      {
        title: "Publications",
        items: [
          {
            label: "Research Publications",
            link: "/research/researchpublications",
          },
          {
            label: "Research Highlights",
            link: "/research/researchallhighlights",
          },
          {
            label: "Student Publications",
            link: "/research/studentpublications",
          },
          {
            label: "Faculty Publications",
            link: "/research/facultypublications",
          },
        ],
      },
    ],
    items: [
      {
        label: "ECRIC Committee",
        link: "/research/ecric",
        state: { scrollTo: "ecric-committee" },
      },
      {
        label: "Research Highlights",
        link: "/research/researchpublications",
        state: { scrollTo: "research-highlights" },
      },
      {
        label: "Patents",
        link: "/research/researchpublications",
        state: { scrollTo: "patents" },
      },
      {
        label: "Annual Publications",
        link: "/research/researchpublications",
        state: { scrollTo: "annual-publications" },
      },
      {
        label: "Ph.D Fellowship",
        link: "/research/fellowshipsandprojects",
        state: { scrollTo: "phd-fellowship" },
      },
      {
        label: "Student Summer Project",
        link: "/research/fellowshipsandprojects",
        state: { scrollTo: "student-summer-project" },
      },
      {
        label: "Externally Funded Projects",
        link: "/research/fellowshipsandprojects",
        state: { scrollTo: "externally-funded-projects" },
      },
      {
        label: "ECRIC Funded Faculty Research Projects",
        link: "/research/fellowshipsandprojects",
        state: { scrollTo: "ecric-funded-faculty-projects" },
      },
      {
        label: "Consultancy",
        link: "/research/fellowshipsandprojects",
        state: { scrollTo: "consultancy" },
      },
      {
        label: "FIST from DST Funded Instruments",
        link: "/research/instrumentationcentre",
        state: { scrollTo: "fist-dst-instruments" },
      },
      {
        label: "UGC Funded Instruments",
        link: "/research/instrumentationcentre",
        state: { scrollTo: "ugc-funded-instruments" },
      },
      {
        label: "Reserve an Instrument",
        link: "/research/instrumentationcentre",
        state: { scrollTo: "reserve-an-instrument" },
      },
      {
        label: "Student Publications",
        link: "/research/researchpublications",
        state: { scrollTo: "student-publications" },
      },
      {
        label: "Faculty Publications",
        link: "/research/researchpublications",
        state: { scrollTo: "faculty-publications" },
      },
      { label: "Events", link: "/research/events" },
    ],
    image: researchMenuImage,
    tabMobileIconImage: notebookIconImage,
  },
  {
    label: "Campus Life",
    type: "campus",
    link: "/campuslife",
    groups: [
      {
        title: "Infrastructure",
        items: [
          {
            label: "Hostel",
            link: "/campuslife/hostel",
          },
          { label: "Facilities", link: "/campuslife/facilities" },
          { label: "Health & Wellness", link: "/campuslife/healthandwellness" },
          { label: "Library", link: "/campuslife/library" },
        ],
      },
      {
        title: "Student Life",
        items: [
          { label: "Clubs", link: "/campuslife/clubs" },
          { label: "Sports", link: "/campuslife/sports" },
          { label: "Student Union", link: "/campuslife/studentunion" },
          {
            label: "Fraternity",
            link: "/campuslife",
            state: { scrollTo: "fraternity" },
          },
          {
            label: "Activities & Events",
            link: "/campuslife",
            state: { scrollTo: "activities-events" },
          },
        ],
      },
      {
        title: "Career Development",
        items: [
          {
            label: "Centre for Women's Studies",
            link: "/campuslife/careerdevelopment/womencentre",
            state: { scrollTo: "centre-for-womens-studies" },
          },
          { label: "Incubation Centre", link: "/campuslife/careerdevelopment/incubationcentre" },
          {
            label: "Swayam MOOCs",
            link: "/campuslife/careerdevelopment/swayammoocs",
            // state: { scrollTo: "swayam-moocs" },
          },
          { label: "Placement Cell", link: "/campuslife/careerdevelopment/placementcell" },
          { label: "ACCA", link: "/campuslife/careerdevelopment/acca" },
        ],
      },
    ],
    items: [
      { label: "Hostel", link: "/campuslife/hostel" },
      { label: "Clubs", link: "/campuslife/clubs" },
      { label: "Sports", link: "/campuslife/sports" },
      { label: "Facilities", link: "/campuslife/facilities" },
      { label: "Health & Wellness", link: "/campuslife/healthandwellness" },
      { label: "Student Union", link: "/campuslife/studentunion" },
      {
        label: "Fraternity",
        link: "/campuslife",
        state: { scrollTo: "fraternity" },
      },
      {
        label: "Activities & Events",
        link: "/campuslife",
        state: { scrollTo: "activities-events" },
      },
      {
        label: "Centre for Women's Studies",
        link: "/campuslife/careerdevelopment/womencentre",
        state: { scrollTo: "centre-for-womens-studies" },
      },
      { label: "Incubation Centre", link: "/campuslife/careerdevelopment/incubationcentre" },
      {
        label: "Swayam MOOCs",
        link: "/campuslife/careerdevelopment/swayammoocs",
        state: { scrollTo: "swayam-moocs" },
      },
      { label: "Placement Cell", link: "/campuslife/careerdevelopment/placementcell" },
    ],
    image: campusMenuImage,
    tabMobileIconImage: schoolIconImage,
  },
  {
    label: "News & Events",
    type: "newsandevents",
    link: "/allnewsevents",
    groups: [
      {
        title: "Updates",
        items: [{ label: "News & Events", link: "/allnewsevents" }],
      },
    ],
    items: [{ label: "News & Events", link: "/allnewsevents" }],
    image: newsMenuImage,
    tabMobileIconImage: newsIconImage,
  },
];

/* ---------------- Styled Components ---------------- */
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create("width"),
  display: "flex",
  width: "217px",
  padding: "5px 10px",
  alignItems: "center",
  "&:focus": {
    width: "20ch",
  },
}));

/* ---------------- Navbar ---------------- */
export default function Navbar({ isMainTabsActive }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [menuType, setMenuType] = useState("");
  const [payNowData, setPayNowData] = useState([]);
  const [applyNowData, setApplyNowData] = useState([]);
  const [buttonsLoading, setButtonsLoading] = useState(false);
  // const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuOpen = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };
  const handleMenuOpenSecondHeader = (event, type) => {
    setAnchorE2(event.currentTarget);
    setMenuType(type);
  };

  const handleMenuCloseSecondHeader = () => {
    setAnchorE2(null);
    setMenuType("");
  };

  // const toggleDrawer = (open) => () => {
  //   setDrawerOpen(open);
  // };

  // const handleNavigation = (link) => {
  //   navigate(link);
  //   handleMenuClose();
  //   handleMenuCloseSecondHeader();
  // };
  const getColumns = (items, itemsPerColumn = 4) => {
    const columns = [];
    for (let i = 0; i < items.length; i += itemsPerColumn) {
      columns.push(items.slice(i, i + itemsPerColumn));
    }
    return columns;
  };
  const [drawerOpen, setDrawerOpen] = useState(false);
  // const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  // const handleToggleSubmenu = (label) => {
  //   setOpenSubmenus((prev) => ({
  //     ...prev,
  //     [label]: !prev[label],
  //   }));
  // };

  // const handleNavigation = (link) => {
  //   navigate(link);
  //   setDrawerOpen(false);
  // };

  // ====================
  const [openSubmenus, setOpenSubmenus] = useState({});
  const location = useLocation();

  console.log(openSubmenus, "openSubmenussss");

  // const handleToggleSubmenu = (label) => {
  //   setOpenSubmenus((prev) => ({
  //     ...prev,
  //     [label]: !prev[label],
  //   }));
  // };

  const handleToggleSubmenu = (label) => {
    setOpenSubmenus((prev) => {
      const isAlreadyOpen = prev[label];
      // Close all submenus first
      const newState = {};
      // If it's not already open, then open this one
      if (!isAlreadyOpen) {
        newState[label] = true;
      }
      return newState;
    });
  };

  const handleButtonItemSelect = (link, label) => {
    console.log(`Navigating to: ${link} (${label})`);
    handleNavigation(link);
  };

  const handleNavigation = (link, state, openInNewTab = false) => {
    if (openInNewTab) {
      window.open(link, '_blank');
    } else {
      navigate(link, state ? { state } : undefined);
    }
    handleMenuCloseSecondHeader();
  };

  const handleNavigationForMobileandTab = (link, state, openInNewTab = false) => {
    if (openInNewTab) {
      window.open(link, '_blank');
    } else {
      navigate(link, state ? { state } : undefined);
      toggleDrawer(false);
    }
  };
  // helper to check if this parent is active
  const isParentActive = (item) => {
    return (
      location.pathname === item.link ||
      item.items?.some((sub) => sub.link === location.pathname)
    );
  };

  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const [isMainTabsActive, setIsMainTabsActive] = useState(false);
  // const mainTabsRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navbar = document.querySelector(".navbar-container");
  //     const mainTabs = mainTabsRef.current;

  //     if (!navbar || !mainTabs) return;

  //     const scrollY = window.scrollY;
  //     const navbarHeight = navbar.offsetHeight;
  //     const mainTabsTop = mainTabs.offsetTop;

  //     // ✅ Hide navbar only when scroll has passed the exact point
  //     if (scrollY + navbarHeight >= mainTabsTop) {
  //       setIsMainTabsActive(true);
  //     } else {
  //       setIsMainTabsActive(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    if (Boolean(anchorE2)) {
      const handleScroll = () => {
        handleMenuCloseSecondHeader();
      };
      window.addEventListener("scroll", handleScroll);

      // cleanup when menu closes
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [anchorE2, handleMenuCloseSecondHeader]);

  // Fetch button data from Redux
  useEffect(() => {
    const fetchButtonData = async () => {
      const payNowPayload = {
        data: {
          button_name: "Pay Now",
        },
        method: "post",
        apiName: "getAllButtonsByName",
      };

      const applyNowPayload = {
        data: {
          button_name: "Apply Now",
        },
        method: "post",
        apiName: "getAllButtonsByName",
      };

      setButtonsLoading(true);
      try {
        const payNowResponse = await dispatch(
          actions.GETALLBUTTONSBYNAME(payNowPayload),
        );
        if (payNowResponse?.payload?.data?.length > 0) {
          setPayNowData(payNowResponse.payload.data);
        }

        const applyNowResponse = await dispatch(
          actions.GETALLBUTTONSBYNAME(applyNowPayload),
        );
        if (applyNowResponse?.payload?.data?.length > 0) {
          setApplyNowData(applyNowResponse.payload.data);
        }
      } catch (error) {
        console.error("Error fetching button data:", error);
      } finally {
        setButtonsLoading(false);
      }
    };
    fetchButtonData();
  }, [dispatch]);

  // Hydrate Search Index dynamically from Academics API
  useEffect(() => {
    const hydrateSearchIndex = async () => {
      try {
        const payload = {
          method: "get",
          apiName: "getAllAcademicsWithAllDetails",
        };
        const response = await dispatch(
          actions.GETALLACADEMICSWITALLDETAILS(payload)
        );
        if (response?.payload?.data) {
          searchService.ingestDynamicData({
            academicsData: response.payload.data,
          });
        }
      } catch (err) {
        console.warn("Dynamic search hydration notice:", err);
      }
    };
    hydrateSearchIndex();
  }, [dispatch]);

  return (
    <>
      {/* ---------------- Row 1 (Hide on scroll) ---------------- */}
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          background: "white",
          // transition: "transform 0.3s ease-in-out",
          transform: scrollY > 50 ? "translateY(-100%)" : "translateY(0)",
          display: { xs: "none", md: "block" },
        }}
      >
        <Toolbar
          sx={{
            flexDirection: "column",
            alignItems: "stretch",
            // display: { xs: "none", md: "flex" },
            padding: 0,
            minHeight: "unset !important", // remove default height
          }}
        >
          <Grid
            container
            sx={{
              // height: "75px",
              // padding: "0 20px",
              py: "6px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Left: Information For */}
            <Grid
              item
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <Box
                display="flex"
                alignItems="center"
                gap="15px"
                flexWrap="wrap"
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: { lg: "16px", md: "14px" },
                    fontWeight: "700",
                    color: "var(--brand-palatte-text-color)",
                  }}
                >
                  Information For:
                </Typography>
                {firstNavMenu.map((item) => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Typography
                      key={item.label}
                      onClick={() => {
                        // handleNavigation(item.link);
                        handleNavigation(item.link, item.state, item.openInNewTab); // Pass link + state + openInNewTab
                        console.log(item?.state, "locationState");
                      }}
                      variant="navbarMenuItemText"
                      sx={{
                        color: "gray",
                        fontFamily: "Inter",
                        fontSize: {
                          lg: "16px !important",
                          md: "14px !important",
                        },

                        fontWeight: "400",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        // pl:item?.notficationCount > 0 ? "10px":0,
                        // pl: "10px",

                        "&:hover": {
                          // fontWeight: 700, // bold on hover
                          color: "black",
                          borderBottom: "1px solid black",
                          // textDecoration: "underline",
                          // textDecorationThickness: "1px", // thickness of underline
                          // textUnderlineOffset: "5px", // distance from text
                        },
                      }}
                    >
                      <NotificationIcon count={item?.notficationCount} />

                      {item.label}
                      {/* <img src={downArrow} alt="dropdown" /> */}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Right: Buttons */}
            <Grid item>
              <Box display="flex" gap={1}>
                <CustomDropdownButton
                  buttonText="PAY NOW"
                  buttonColor="#473F93"
                  menuItems={payNowData}
                  onItemSelect={handleButtonItemSelect}
                />

                {/*  <Button
                  variant="contained"
                  sx={{
                    borderRadius: "32px",
                    background: "#473F93",
                    // height: { lg: "55px", md: "45px" },
                    padding: { lg: "8px 20px", md: "8px 15px" },
                    fontSize: { md: "12.5px", lg: "16px" },
                    lineHeight: "normal",
                    boxShadow: "none",
                    textTransform: "none",
                  }}
                  onClick={() => handleNavigation("/pay-fees")}
                >
                  PAY FEES
                </Button>
                 */}
                {/* <CustomDropdownButton
                  buttonText="APPLY NOW"
                  buttonColor="#6B3C58"
                  menuItems={applyNowData}
                  onItemSelect={handleButtonItemSelect}
                /> */}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
        <Divider sx={{ display: { xs: "none", md: "block" } }} />
      </AppBar>

      {/* ---------------- Row 2 (Sticky) ---------------- */}
      <CustomNavbar
        navData={secondNavMenu}
        isMainTabsActive={isMainTabsActive}
      />
      {/* Mobile Hamburger */}
      <Box
        className={`navbar-container ${isMainTabsActive ? "navbar-hidden" : ""
          }`}
        sx={{
          display: { xs: "block", md: "none" },
          p: "20px",
          position: "sticky",
          top: 0,
          zIndex: isMainTabsActive ? 0 : 1100,
          background: "white",
          transition:
            "opacity 0.4s ease, transform 0.4s ease, z-index 0.4s ease",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ alignItems: "center" }}
        >
          <Box
            onClick={() => {
              navigate("/");
            }}
            component="img"
            src={logoMobile}
            alt="logo"
            sx={{
              maxWidth: { xs: "246px" },
              cursor: "pointer",
              // height: "48px",
              height: "auto",
              // aspectRatio: "1 / 1",
              display: { xs: "block", sm: "none" },
            }}
          />
          <Box
            onClick={() => {
              navigate("/");
            }}
            component="img"
            src={logoDesktop}
            alt="logo"
            sx={{
              maxWidth: { sm: "350px" },
              // height: "84px",
              height: "auto",
              cursor: "pointer",
              // aspectRatio: "1 / 1",
              display: { xs: "none", sm: "block" },
            }}
          />
          <IconButton
            onClick={() => {
              toggleDrawer(true);
            }}
          >
            <Box component="img" src={DrawerIconImage} />
          </IconButton>
        </Box>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => {
            toggleDrawer(false);
          }}
          PaperProps={{
            sx: { width: { xs: 320, sm: 768 } },
          }}
        >
          <Box
            sx={{
              width: { xs: 320, sm: 768 },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              bgcolor: "#fff",
              // p:"20px"
            }}
            role="presentation"
            onClick={(event) => event.stopPropagation()} // Prevent closing on click inside
            onKeyDown={() => {
              toggleDrawer(true);
            }}
          >
            <Box
              sx={{
                padding: { sm: 8, xs: 2 },
                overflowY: "auto",
                flexGrow: 1,
              }}
            >
              {/* Search Field */}
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: { xs: "12px", sm: "16px" },
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <CustomSearchFeild />
                </Box>
                <Box
                  onClick={() => {
                    toggleDrawer(false);
                  }}
                  src={drawerCancelIconImage}
                  component="img"
                  sx={{
                    height: { xs: "32px", sm: "40px" },
                    width: { xs: "32px", sm: "40px" },
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                />
              </Box>

              <List>
                {secondNavMenu.map((item) => {
                  const parentActive = isParentActive(item);
                  return (
                    <Box key={item.label}>
                      <ListItem
                        button
                        onClick={() => {
                          handleNavigationForMobileandTab(
                            item.link,
                            item.state,
                            item.openInNewTab,
                          );
                        }}
                        // onClick={toggleDrawer(false)}
                        sx={{
                          backgroundColor: "white",
                          ":hover": {
                            background: "white",
                          },
                          borderRadius: "8px",
                          padding: "8px",
                        }}
                      >
                        <ListItemText
                          primary={
                            <Box
                              display="flex"
                              alignItems="center"
                              sx={{ gap: "20px" }}
                            >
                              <Box
                                component="img"
                                src={item?.tabMobileIconImage}
                                sx={{
                                  height: 24,
                                  width: 24,
                                  filter: "none",
                                }}
                              />
                              <Typography
                                variant="bodyTextInterMedium"
                                sx={{
                                  color: "var(--brand-palette-text-tertiary)",
                                }}
                              >
                                {item?.label}
                              </Typography>
                            </Box>
                          }
                        />

                        {item.items && (
                          <IconButton
                            size="small"
                            onClick={(event) => {
                              event.stopPropagation();
                              handleToggleSubmenu(item.label);
                            }}
                            sx={{ p: 0.5 }}
                          >
                            <img
                              src={downArrow}
                              alt="dropdown"
                              style={{
                                width: "12px",
                                height: "7.47px",
                                transform: openSubmenus[item.label]
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                                transition: "transform 0.3s ease",
                                filter: "none",
                              }}
                            />
                          </IconButton>
                        )}
                      </ListItem>

                      {/* Sub-menu Items */}
                      {item.items && openSubmenus[item.label] && (
                        <List component="div" disablePadding sx={{ pl: 3 }}>
                          <Box sx={{ display: "flex", gap: "24px" }}>
                            <Divider orientation="vertical" flexItem />

                            {item.groups?.length ? (
                              <Grid
                                container
                                spacing={{ xs: 2, sm: 3 }}
                                sx={{ py: 1, width: "100%" }}
                              >
                                {item.groups.map((group, groupIndex) => (
                                  <Grid
                                    item
                                    size={{
                                      xs: 12,
                                      sm: 6,
                                    }}
                                    key={`${item.label}-${group.title || "group"}-${groupIndex}`}
                                  >
                                    {group.title ? (
                                      <Typography
                                        variant="bodyTextInterMedium"
                                        sx={{
                                          color: "#343A40",
                                          mb: 1,
                                          fontWeight: "600 !important",
                                        }}
                                      >
                                        {group.title}
                                      </Typography>
                                    ) : null}

                                    {group.sections?.length
                                      ? group.sections.map(
                                        (section, sectionIndex) => (
                                          <Box
                                            key={`${group.title || "group"}-${section.title || "section"}-${sectionIndex}`}
                                            sx={{
                                              mb:
                                                sectionIndex ===
                                                  group.sections.length - 1
                                                  ? 0
                                                  : 1,
                                            }}
                                          >
                                            {section.title ? (
                                              <Typography
                                                variant="bodyTextInterMedium"
                                                sx={{
                                                  color: "#343A40",
                                                  mb: 0.5,
                                                  fontWeight:
                                                    "600 !important",
                                                }}
                                              >
                                                {section.title}
                                              </Typography>
                                            ) : null}

                                            {section.items?.map((subItem) => (
                                              <ListItem
                                                button
                                                disablePadding
                                                key={`${section.title || "section"}-${subItem.label}`}
                                                onClick={() => {
                                                  handleNavigationForMobileandTab(
                                                    subItem.link,
                                                    subItem.state,
                                                    subItem.openInNewTab,
                                                  );
                                                }}
                                                sx={{ py: "3px" }}
                                              >
                                                <ListItemText
                                                  primary={
                                                    <Typography
                                                      variant="bodyTextSmallMobileInterRegular"
                                                      sx={{ color: "#333" }}
                                                    >
                                                      {subItem.label}
                                                    </Typography>
                                                  }
                                                />
                                              </ListItem>
                                            ))}
                                          </Box>
                                        ),
                                      )
                                      : group.items?.map((subItem) => (
                                        <ListItem
                                          button
                                          disablePadding
                                          key={`${group.title || "group"}-${subItem.label}`}
                                          onClick={() => {
                                            handleNavigationForMobileandTab(
                                              subItem.link,
                                              subItem.state,
                                              subItem.openInNewTab,
                                            );
                                          }}
                                          sx={{ py: "3px" }}
                                        >
                                          <ListItemText
                                            primary={
                                              <Typography
                                                variant="bodyTextSmallMobileInterRegular"
                                                sx={{ color: "#333" }}
                                              >
                                                {subItem.label}
                                              </Typography>
                                            }
                                          />
                                        </ListItem>
                                      ))}
                                  </Grid>
                                ))}
                              </Grid>
                            ) : (
                              <Box>
                                {item.items.map((subItem) => (
                                  <ListItem
                                    button
                                    key={subItem.label}
                                    onClick={() => {
                                      handleNavigationForMobileandTab(
                                        subItem.link,
                                        subItem.state,
                                        subItem.openInNewTab,
                                      );
                                    }}
                                  >
                                    <ListItemText
                                      primary={
                                        <Typography
                                          variant="bodyTextSmallMobileInterRegular"
                                          sx={{ color: "#333" }}
                                        >
                                          {subItem?.label}
                                        </Typography>
                                      }
                                    />
                                  </ListItem>
                                ))}
                              </Box>
                            )}
                          </Box>
                        </List>
                      )}
                    </Box>
                  );
                })}
              </List>

              {/* Section 2: "Information For" */}
              {/* <Divider sx={{ my: 2 }} /> */}
              <Typography
                variant="bodyTextInterMedium"
                sx={{
                  fontSize: "18px",
                  // fontWeight: 600,
                  color: "#000",
                  mb: 2,
                  mt: 2,
                  px: "8px",
                }}
              >
                Information for
              </Typography>

              {/* <List>
                    {firstNavMenu.map((item) => (
                      <ListItem
                        button
                        key={item.label}
                        onClick={() => handleNavigation(item.link)}
                      >
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                  </List> */}
              <List>
                {firstNavMenu.map((item) => (
                  <Box key={item.label}>
                    <ListItem
                      button
                      onClick={() =>
                        item.items
                          ? handleToggleSubmenu(item.label)
                          : handleNavigationForMobileandTab(item.link, item.state, item.openInNewTab)
                      }
                      sx={{ padding: "8px !important" }}
                    >
                      {/* <ListItemText primary={<SearchOff />item.label} /> */}
                      <ListItemText
                        primary={
                          <Box
                            display="flex"
                            alignItems="center"
                            sx={{ gap: "20px" }}
                          >
                            <Box
                              component="img"
                              fontSize="small"
                              src={item?.tabMobileIconImage}
                              sx={{
                                // marginRight: "14px",
                                height: 24,
                                width: 24,
                              }}
                            />
                            <Typography
                              variant="bodyTextInterMedium"
                              sx={{
                                color: "var(--brand-palette-text-tertiary)",
                              }}
                            >
                              {item?.label}
                            </Typography>
                          </Box>
                        }
                      />

                      <NotificationIcon count={item?.notficationCount} />

                      {item.items && (
                        <img
                          src={downArrow}
                          alt="dropdown"
                          style={{
                            width: "12px",
                            height: "7.47px",
                            transform: openSubmenus[item.label]
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      )}
                    </ListItem>

                    {/* Sub-menu Items */}
                    {item.items && openSubmenus[item.label] && (
                      <List component="div" disablePadding sx={{ pl: 3 }}>
                        <Box sx={{ display: "flex", gap: "38px" }}>
                          <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                              height: "144px",
                              color: "#6c757d",
                              borderWidth: "1px",
                              // display: { md: "block", xs: "none" },
                            }}
                          />
                          <Box>
                            {item.items.map((subItem) => (
                              <ListItem
                                button
                                key={subItem.label}
                                onClick={() => handleNavigationForMobileandTab(subItem.link, subItem.state, subItem.openInNewTab)}
                              >
                                <ListItemText
                                  primary={
                                    <Typography
                                      variant="bodyTextSmallMobileInterRegular"
                                      sx={{
                                        fontSize: "14px",
                                        color:
                                          "var(--brand-palatte-text-color)",
                                      }}
                                    >
                                      {subItem?.label}
                                    </Typography>
                                  }
                                />
                              </ListItem>
                            ))}
                          </Box>
                        </Box>
                      </List>
                    )}
                  </Box>
                ))}
              </List>
              {/* --- Bottom Section (CTA Buttons) --- */}
              <Box
                sx={{
                  p: 2,
                  //  borderTop: "1px solid #ddd"
                }}
              >
                <Box sx={{ display: "flex", gap: 2 }}>
                  <CustomDropdownButton
                    buttonText="PAY FEES"
                    buttonColor="#473F93"
                    menuItems={payNowData}
                    onItemSelect={handleButtonItemSelect}
                    fullWidth={true}
                  />
                  {/* <CustomDropdownButton
                    buttonText="APPLY NOW"
                    buttonColor="#6B3C58"
                    menuItems={applyNowData}
                    onItemSelect={handleButtonItemSelect}
                    fullWidth={true}
                  /> */}
                </Box>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>
      <Divider />

      {/* Announcements Banner */}
      {location.pathname === "/" && <AnnouncementsBanner />}

      {/* Global Site Search Modal */}
      <SiteSearchModal />
    </>
  );
}
