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
  duration,
} from "@mui/material";
import { ArrowIcon } from "../../../NewsEvents";
import { Description } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CustomAboutUsTable from "../../../../Components/CustomAboutUsTable/CustomAboutUsTable";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../../ReduxStore/actions";
import suburParthasarathy from "../../../../Assets/principals/Mrs. Subur Parthasarathy  (M.A.(Oxford)).png";
import monaHensman from "../../../../Assets/principals/Mrs.Mona Hensman  B.A.,(Hons) (London).png";
import evangelineMathew from "../../../../Assets/principals/Ms.Evangeline Mathew  M.A. (Cantab).png";
import vasanthiDevi from "../../../../Assets/principals/Mrs. K.Vasanthi Devi  M.A..png";
import naQadir from "../../../../Assets/principals/Mrs. N.A.Qadir  M.A..png";
import keserChander from "../../../../Assets/principals/Mrs. Keser Chander  M.A., B.T..png";
import yasodhaShanmugasundaram from "../../../../Assets/principals/Dr.Mrs. Yasodha Shanmugasundaram  M.A., Ph.D., D.Litt..png";
import indhraniSridharan from "../../../../Assets/principals/Dr.Mrs. Indhrani Sridharan  M.A., Ph.D..png";
import thavamani from "../../../../Assets/principals/Dr.Mrs.M.Thavamani  M.Com., M.Phil.,Ph.D..png";
import jothiKumaravel from "../../../../Assets/principals/Dr.Mrs. Jothi Kumaravel  M.Com., M.Phil.,Ph.D..png";

import nirmala from "../../../../Assets/principals/Dr.Mrs.A.Nirmala  M.A.,M.Phil.,Ph.D..png";
import kothai from "../../../../Assets/principals/Dr.Mrs.S.Kothai  M.Sc.,M.Phil.,Ph.D.png";

const tableBodyData = [
  {
    name: "Mrs. Subur Parthasarathy (M.A. (Oxford))",
    duration: "1948 – 1949 & 1950 – 1952",
    logo: suburParthasarathy,
  },
  {
    name: "Mrs. Mona Hensman B.A. (Hons) (London)",
    duration: "1953 – 1960",
    logo: monaHensman,
  },
  {
    name: "Ms. Evangeline Mathew M.A. (Cantab)",
    duration: "1960 – 1976",
    logo: evangelineMathew,
  },
  {
    name: "Mrs. K. Vasanthi Devi M.A.",
    duration: "1976 – 1984",
    logo: vasanthiDevi,
  },
  {
    name: "Mrs. N. A. Qadir M.A.",
    duration: "1984 – 1985",
    logo: naQadir,
  },
  {
    name: "Mrs. Keser Chander M.A., B.T.",
    duration: "1985 – 1988",
    logo: keserChander,
  },
  {
    name: "Dr. Mrs. Yasodha Shanmugasundaram M.A., Ph.D., D.Litt.",
    duration: "1988 – 1994",
    logo: yasodhaShanmugasundaram,
  },
  {
    name: "Dr. Mrs. Indhrani Sridharan M.A., Ph.D.",
    duration: "1994 – 2005",
    logo: indhraniSridharan,
  },
  {
    name: "Dr. Mrs. M. Thavamani M.Com., M.Phil., Ph.D.",
    duration: "2005 – 2011",
    logo: thavamani,
  },
  {
    name: "Dr. Mrs. Jothi Kumaravel M.Com., M.Phil., Ph.D.",
    duration: "2011 – 2014",
    logo: jothiKumaravel,
  },
  {
    name: "Dr. Mrs. A. Nirmala M.A., M.Phil., Ph.D.",
    duration: "2014 – 2018",
    logo: nirmala,
  },
  {
    name: "Dr. Mrs. S. Kothai M.Sc., M.Phil., Ph.D.",
    duration: "2019 – 2022",
    logo: kothai,
  },
];

const tableHeadData = ["NAME", " SERVICE DURATION"];

const navidateOtherData = [
  // { title: "NON-STATUTORY BODY", navigateLink: "/aboutus/statutorybody" },
  {
    title: "FORMER CHAIRPERSONS  ",
    navigateLink: "/aboutus/formerchairpersons",
  },

  {
    title: "BOARD OF TRUSTEES",
    navigateLink: "/aboutus/boardoftrustee",
  },
];

const pageHeader = {
  title: "Former Principals",
};

const breadgrumpsItems = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/aboutus" },
  { name: "Former Principals" },
];
export default function FormerPrinciples() {
  const navigate = useNavigate();
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


  // Function to get dates by section_name
  const getDatasBySectionName = (sectionName) => {
    return (
      getAllAboutUsSections?.data?.filter(
        (section) => section?.section_name === sectionName
      ) || []
    );
  };

  const FormerPrincipalsDatas = getAllAboutUsSections?.data
    ? getDatasBySectionName("FormerPrincipals section")
    : [];


  console.log(FormerPrincipalsDatas[0]?.additional_data?.card_design, "GoverningBodyDatasGoverningBodyDatas");

  console.log(FormerPrincipalsDatas[0], "GoverningBodyDatas");
  return (
    <div>
      <CustomAboutUsTable
        tableBodyData={FormerPrincipalsDatas[0]?.additional_data?.card_design?.length > 0 ? FormerPrincipalsDatas[0].additional_data.card_design : tableBodyData}
        tableHeadData={tableHeadData}
        navidateOtherData={navidateOtherData}
        pageHeader={pageHeader}
        breadgrumpsItems={breadgrumpsItems}
      />
    </div>
  );
}
