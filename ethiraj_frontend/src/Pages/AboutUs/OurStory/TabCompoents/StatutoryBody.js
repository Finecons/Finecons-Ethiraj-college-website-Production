
import React from "react";
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
const tableBodyData = [
  { name: "Thiru. V. M. Muralidharan", position: "Chairman" },
  { name: "Dr. Tmt. S. Uma Gowrie", position: "Principal & Secretary" },
  { name: "Dr. M. Sekar", position: "Financial Trustee" },
  { name: "Dr. A. Sivathanu Pillai", position: "Trust Board Member" },
  { name: "Thiru. R. Chandrasekar", position: "Trust Board Member" },
  {
    name: "Dr. Geetha Lakshmipathy",
    position: "Trust Board Member",
    description:
      "Former Head of Neurology Department, Madras Medical College & Govt. General Hospital",
  },
  { name: "Prof. Dr. Rita John", position: "University Representative" },
  {
    name: "Dr. K. Sudakarkodi (RJD Chennai- Region )",
    position: "State Government Official",
  },
  { name: "Dr. V. Uma Maheswari", position: "Management Nominee" },
  { name: "Dr. Tmt. D. B. Usharani", position: "Member College Committee" },
  { name: "Maj. Dr. Tmt. R. Shanthini", position: "Member College Committee" },
  { name: "Tmt. A. Tamilselvi", position: "Administrative Officer" },
];

const tableHeadData = ["NAME", "ADMINISTRATIVE POSITION"];

const navidateOtherData = [
  {
    title: "GOVERNING BODY",
    navigateLink: "/aboutus/governingbody",
  },
  {
    title: "BOARD OF TRUSTEES",
    navigateLink: "/aboutus/boardoftrustee",
  },
  {
    title: "COLLEGE COMMITTEE",
    navigateLink: "/aboutus/collegecommittee",
  },
];

const pageHeader = {
  title: "Non-Statutory Body",
subText:
"Ensuring academic excellence, regulatory compliance, and quality assurance across all educational programs.",

subText2:"Governing Body Committee Ref: F. No1-18/2021(CPP-II), dated: 03.04.2023 University Grants Commission The Governing Body Committee is constituted as below, by, Chairman, Ethiraj College for Women, for a tenure of two academic years, i.e; 2025-26 and 2026- 27, as per the “Conferment of Autonomous Status upon Colleges and Measures for Maintenance of Standards in Autonomous Colleges) Regulations 2023” issued by the University Grants Commission"
};

const breadgrumpsItems = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/aboutus" },
  { name: "Non-Statutory Body" },
];
export default function StatutoryBody() {
  return (
    <CustomAboutUsTable
      tableBodyData={tableBodyData}
      tableHeadData={tableHeadData}
      navidateOtherData={navidateOtherData}
      pageHeader={pageHeader}
      breadgrumpsItems={breadgrumpsItems}
    />
  );
}
