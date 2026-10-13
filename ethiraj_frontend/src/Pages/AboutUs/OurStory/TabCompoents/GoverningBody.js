
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
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../../ReduxStore/actions";
import Muralidharan from "../../../../Assets/Muralidharan.png";

const tableBodyData = [
  { name: "Thiru. V. M. Muralidharan", position: "Chairman" },
  { name: "Dr. M.Sekar", position: "Financial Trustee" },
  { name: "Dr A. Sivathanu Pillai", position: "Financial Trustee" },
  { name: "Dr. A. Sivathanu Pillai", position: "Trust Board Member" },
  { name: "Thiru. R. Chandrasekar", position: "Trust Board Member", logo: Muralidharan },
  {
    name: "Dr. Geetha Lakshmipathy",
    position: "Trust Board Member",
    description:
      "Former Head of Neurology Department, Madras Medical College & Govt.General Hospital",
  },
  { name: "Prof. Dr. S. Sundaram", position: "University Representative", description: "Member Syndicate professor  & Head Department of Indian history University of Madras" },
  {
    name: "Dr.  V. Uma Maheswari",
    position: "Mangement Nominee",
  },
  { name: "Dr. Tmt. D. B. Usharani", position: "Member College Committee" },
  { name: "Maj. Dr. Tmt. R. Shanthini", position: "Member College Committee" },
  { name: "Dr. Tmt. S. Uma Gowrie", position: "Principal  & Secretary", description: "M.Sc.,M.Phil.,Ph.D" },
  { name: "Tmt A. Tamilselvi", position: "Administrative Officer" },
];

const tableHeadData = ["NAME", "ADMINISTRATIVE POSITION"];

const navidateOtherData = [
  {
    title: "BOARD OF TRUSTEES",
    navigateLink: "/aboutus/boardoftrustee",
  },
  {
    title: "COLLEGE COMMITTEE",
    navigateLink: "/aboutus/collegecommittee",
  },
  // { title: "NON-STATUTORY BODY", navigateLink: "/aboutus/statutorybody" },
];

const pageHeader = {
  title: "Governing Body",
};

const breadgrumpsItems = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/aboutus" },
  { name: "Governing Body" },
];
export default function GoverningBody() {
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

  const GoverningBodyDatas = getAllAboutUsSections?.data
    ? getDatasBySectionName("GoverningBody section")
    : [];


  console.log(GoverningBodyDatas[0]?.additional_data?.card_design, "GoverningBodyDatasGoverningBodyDatas");

  console.log(GoverningBodyDatas[0], "GoverningBodyDatas");


  return (
    <CustomAboutUsTable
      tableBodyData={GoverningBodyDatas[0]?.additional_data?.card_design?.length > 0 ? GoverningBodyDatas[0].additional_data.card_design : tableBodyData}
      tableHeadData={tableHeadData}
      navidateOtherData={navidateOtherData}
      pageHeader={pageHeader}
      breadgrumpsItems={breadgrumpsItems}
      memberNewLayout={true}
    />
  );
}
