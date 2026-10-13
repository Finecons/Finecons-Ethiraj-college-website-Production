

import React, { useEffect, useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Grid,
  Button,
  Paper,
  TableHead,
  IconButton,
} from "@mui/material";
import { ArrowIcon } from "../../../NewsEvents";
import { Description } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CustomAboutUsTable from "../../../../Components/CustomAboutUsTable/CustomAboutUsTable";
import geethalakshipathy from "../../../../Assets/geethalakshipathy.png";
import chandrasekar from "../../../../Assets/chandrasekar.png";
import sivathanupillai from "../../../../Assets/sivathanupillai.png";
import sekar from "../../../../Assets/sekar.png";
import Muralidharan from "../../../../Assets/Muralidharan.png";
import ritajohn from "../../../../Assets/ritajohn.png";
import umagowri from "../../../../Assets/umagowri.png";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../../ReduxStore/actions";
const tableBodyData = [
  {
    name: "Thiru. V.M. Muralidharan",
    position: "Chairman",
    logo: Muralidharan,
  },
  {
    name: "Dr. M. Sekar",
    position: "Financial Trustee",
    logo: sekar,
  },
  {
    name: "Dr. A. Sivathanu Pillai",
    position: "Trust Board Member",
    logo: sivathanupillai,
  },
  {
    name: "Thiru. R. Chandrasekar",
    position: "Trust Board Member",
    logo: chandrasekar,
  },
  {
    name: "Dr. Geetha Lakshmipathy",
    position: "Trust Board Member",
    description:
      "Former Head of Neurology Department, Madras Medical College & Govt. General Hospital",
    logo: geethalakshipathy,
  },
  {
    name: "Prof. Dr. S. Sundaram",
    position: "University Representative",
    description:
      "Member Syndicate professor  & Head Department of Indian history University of Madras",
    logo: ritajohn,
  },
  {
    name: "Dr. Tmt. S. Uma Gowrie",
    position: "Principal & Secretary",
    description:
      "M.Sc.,M.Phil.,Ph.D",
    logo: umagowri,
  },
];

const tableHeadData = ["NAME", "ADMINISTRATIVE POSITION"];

const navidateOtherData = [
  {
    title: "COLLEGE COMMITTEE",
    navigateLink: "/aboutus/collegecommittee",
  },
  // { title: "NON-STATUTORY BODY", navigateLink: "/aboutus/statutorybody" },
  {
    title: "GOVERNING BODY",
    navigateLink: "/aboutus/governingbody",
  },
];

const pageHeader = {
  title: "Board of Trustees",
  subText: "People committed to Ethiraj’s mission and interests.",
};

const breadgrumpsItems = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/aboutus" },
  { name: "Board of Trustees" },
];
export default function BoardofTrustee() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const { getAllAboutUsSections } = useSelector(
    (state) => state?.getAllAboutUsSections
  );

  console.log(getAllAboutUsSections);


  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: "getAllAboutUsSections",
      };

      // setLoading(true); // Set loading to true when the request starts
      await dispatch(actions.GETALLABOUTUSSECTIONS(data1));
      // setLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
  }, [dispatch]);

  const navigate = useNavigate();



  // Function to get dates by section_name
  const getDatasBySectionName = (sectionName) => {
    return (
      getAllAboutUsSections?.data?.filter(
        (section) => section?.section_name === sectionName
      ) || []
    );
  };

  const BoardOfTrusteesDatas = getAllAboutUsSections?.data
    ? getDatasBySectionName("BoardOfTrustees section")
    : [];


  console.log(BoardOfTrusteesDatas[0]?.additional_data?.card_design, "BoardOfTrusteesDatasBoardOfTrusteesDatas");




  return (
    <div>
      <CustomAboutUsTable
        tableBodyData={BoardOfTrusteesDatas[0]?.additional_data?.card_design?.length > 0 ? BoardOfTrusteesDatas[0].additional_data.card_design : tableBodyData}
        tableHeadData={tableHeadData}
        navidateOtherData={navidateOtherData}
        pageHeader={pageHeader}
        breadgrumpsItems={breadgrumpsItems}
        memberNewLayout={true}
      />
    </div>
  );
}
