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
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../../ReduxStore/actions";
import CustomAboutUsTable from "../../../../Components/CustomAboutUsTable/CustomAboutUsTable";

import ethiraj from "../../../../Assets/Chairpersons/Thiru. V.L.Ethiraj.png";
import rangaswami from "../../../../Assets/Chairpersons/Thiru. V. T. Rangaswami  (B.A. B.L).png";
import mahalingam from "../../../../Assets/Chairpersons/Thiru. N. Mahalingam (B.Sc. F.I.E).png";
import natarajan from "../../../../Assets/Chairpersons/Justice. S. Natarajan (B.A.B.L).png";
import jagadeesan from "../../../../Assets/Chairpersons/Justice. S. Jagadeesan (B.A. B.L).png";
import Swaminathan from "../../../../Assets/Chairpersons/Dr. A.M. Swaminathan ( IAS (Retd.)).png";
import Thanikachalam from "../../../../Assets/Chairpersons/Tmt. Chandra Devi Thanikachalam (B.Sc (Home Science),B.L).png";
import Muralidharan from "../../../../Assets/Chairpersons/Thiru. V.M. Muralidharan (BE (Hons)).png";

const tableBodyData = [
  {
    name: "Thiru. V.L.Ethiraj",
    duration: "Founder, Chairperson, 1948 - 1960",
    logo: ethiraj,
  },
  {
    name: "Thiru. V. T. Rangaswami  (B.A. B.L)",
    duration: "1960 – 1972",
    logo: rangaswami,
  },
  {
    name: "Thiru. N. Mahalingam (B.Sc. F.I.E)",
    duration: "1972 – 1980",
    logo: mahalingam,
  },
  {
    name: "Justice. S. Natarajan (B.A.B.L)",
    duration: "1980 –1998",
    logo: natarajan,
  },
  {
    name: "Justice. S. Jagadeesan (B.A. B.L)",
    duration: "1998 – 2008",
    logo: jagadeesan,
  },
  {
    name: "Dr. A.M. Swaminathan ( IAS (Retd.)",
    duration: "2008 – 2013",
    logo: Swaminathan,
  },
  {
    name: "Tmt. Chandra Devi Thanikachalam (B.Sc (Home Science),B.L)",
    duration: "2019 – 2022",
    logo: Thanikachalam,
  },
  {
    name: "Thiru. V.M. Muralidharan (BE (Hons))",
    duration: "2013 – 2019 & 2022 - At Present",
    logo: Muralidharan,
  },
];

const tableHeadData = ["NAME", " SERVICE DURATION"];

const navidateOtherData = [
  // { title: "NON-STATUTORY BODY", navigateLink: "/aboutus/statutorybody" },
  {
    title: "FORMER PRINCIPALS ",
    navigateLink: "/aboutus/formerprincipals",
  },

  {
    title: "BOARD OF TRUSTEES",
    navigateLink: "/aboutus/boardoftrustee",
  },
];

const pageHeader = {
  title: "Former Chairpersons",
};

const breadgrumpsItems = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/aboutus" },
  { name: "Former Chairpersons" },
];
export default function FormerChairpersons() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const { getAllAboutUsSections } = useSelector(
    (state) => state?.getAllAboutUsSections,
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
        (section) => section?.section_name === sectionName,
      ) || []
    );
  };

  const FormerChairpersonsDatas = getAllAboutUsSections?.data
    ? getDatasBySectionName("FormerChairpersons section")
    : [];

  console.log(
    FormerChairpersonsDatas[0]?.additional_data?.card_design,
    "GoverningBodyDatasGoverningBodyDatas",
  );

  console.log(FormerChairpersonsDatas[0], "GoverningBodyDatas");

  return (
    <div>
      <CustomAboutUsTable
        tableBodyData={
          FormerChairpersonsDatas[0]?.additional_data?.card_design?.length > 0
            ? FormerChairpersonsDatas[0].additional_data.card_design
            : tableBodyData
        }
        tableHeadData={tableHeadData}
        navidateOtherData={navidateOtherData}
        pageHeader={pageHeader}
        breadgrumpsItems={breadgrumpsItems}
        memberNewLayout={true}
      />
    </div>
  );
}
