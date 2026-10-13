import React from "react";
import NestedCustomTab from "../../../Components/CustomTab/NestedCustomTab";
import { useDispatch } from "react-redux";
import {
  setHeaderName,
  setSubHeaderName,
} from "../../../ReduxStore/Slices/headerSlice";
import ECRIC from "./ECRIC";
import Patents from "./Patents";
import CatalystPublications from "./CatalystPublications";
import ECRICPhDFellowships from "./ECRICPhDFellowships";
import ResearchAndProjects from "./ResearchAndProjects";
import Consultancy from "./Consultancy";
import BookInstrument from "./BookInstrument";
import ResearchEvents from "./ResearchEvents";
// import ResearchPublications from "./ResearchPublications/ResearchPublications";
import ResearchHighlights from "./ResearchPublications/ResearchHighlights";
import StudentPublications from "./ResearchPublications/StudentPublications";
import FacultyPublicationsModal from "./ResearchPublications/Modal/FacultyPublicationsModal";
import FacultyPublications from "./ResearchPublications/FacultyPublications";


const ResearchAllComponents = () => {
  const mainTabs = [
    {
      label: "ECRIC",
      // component: <ECRIC />,
      subTabs: [
        { label: "About ECRIC", component: <ECRIC /> },
        { label: "Patents", component: <Patents /> },
        { label: "CatalystPublications", component: <CatalystPublications /> },





      ],
    },
    {
      label: "Fellowships & Projects",
      // component: <>Fellowships & Projects</>
      subTabs: [
        { label: "ECRIC PhD Fellowships", component: <ECRICPhDFellowships /> },
        { label: "Research And Projects", component: <ResearchAndProjects /> },
        { label: "Consultancy", component: <Consultancy /> },
      ],

    },
    {
      label: "Instrumentation Centre",
      // component: <>Instrumentation Centre</>
      subTabs: [
        { label: "BookInstrument", component: <BookInstrument /> },
      ],

    },
    {
      label: "Events",
      // component: <>Instrumentation Centre</>
      subTabs: [
        { label: "Research Events", component: <ResearchEvents /> },
      ],
    },
        { label: "ResearchPublications", 
        subTabs: [
{ 
      label: "Research Highlights",
      component: <ResearchHighlights />,
    },
    {
      label: "Student Publications",
      component: <StudentPublications />,
    },
    {
      label: "Faculty Publications",
      component: <FacultyPublications />,
    },
  
        ],
        },
  ];
         

  
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderName("Research"));
    dispatch(setSubHeaderName(""));
  }, [dispatch]);

  return (
    <div>
      <NestedCustomTab mainTabs={mainTabs} />
    </div>
  );
};

export default ResearchAllComponents;
