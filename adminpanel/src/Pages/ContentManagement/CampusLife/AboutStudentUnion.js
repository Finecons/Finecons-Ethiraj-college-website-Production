// import React from 'react'

// const LevelOfSrtudy = () => {
//   return (
//     <div>LevelOfSrtudy</div>
//   )
// }

// export default LevelOfSrtudy

import React, { useEffect, useState } from "react";
import CustomTable from "../../../Components/Table/CustomTable";
// import BannerinputGetModal from '../../Modal/AboutStudentUnionModal/BannerinputGetModaldal';
import { Grid } from "@mui/material";
// import BannerinputGetModal from '../../../CommonModal/AboutStudentUnionModal/BannerinputGetModal';
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import { toast, ToastContainer } from "react-toastify";
import "../../../Components/ModalCss/BannerinputGetModal.css";
// import LevelOfStudyModal from "./Modal/LevelOfStudyModal";
import { updateProgrammeLevelAction } from "../../../ReduxStore/Slices/ProgramLevel/updateProgrammeLevel";
import AboutStudentUnionModal from "./Modal/AboutStudentUnionModal";
import { Description } from "@mui/icons-material";
// import LandingPage from '../../Preview/LandingPage';
// import PreviewComponent from "../../PreviewComponent/PreviewComponent";
// import StakeNowMainPage from "../../ContentManagementStakeNowPreview/Banner/StakeNowMainPage";
// import BannerinputGetModal from "../Modal/Banner/BannerinputGetModal";

const AboutStudentUnion = () => {
  // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  // // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  // const role = sessionStorage.getItem("role")
  // csonole

  // const tableData = role === "superAdmin"
  //   ? [{ title: 'The Best Gold', secondtext: 'Staking Company', subtext: 'Lorem Ipsum is simply dummy text of the...', documents: "banner.jpg" }]
  //   : [];

  const tableHeadData = ["S.No", "Title", "Description"];

  const dispatch = useDispatch();

  const [responseTableData, setResponseTableData] = useState([]);
  // const permissions = JSON.parse(sessionStorage.getItem("permissions"));

  const [rowTableData, setRowTableData] = useState([]);
  console.log(rowTableData, "rowTableTAdatatattattat");

  const { getAllCampuslifeSectionsBySectionName } = useSelector(
    (state) => state?.getAllCampuslifeSectionsBySectionName
  );
  const { updateCampuslifeSection } = useSelector(
    (state) => state?.updateCampuslifeSection
  );
  const { addCampuslifeSection } = useSelector(
    (state) => state?.addCampuslifeSection
  );
  console.log(getAllCampuslifeSectionsBySectionName, "getAllCampuslifeSectionsBySectionName");
  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {

        page_name: "student unions",
        section_name: "aboutStudentUnion section",
        },
        method: "post",
        apiName: `getAllCampuslifeSectionsBySectionName`,
      };        
         

      const responseData = await dispatch(
        actions.GETALLCAMPUSLIFESECTIONSBYSECTIONNAME(data1)
      );
      console.log(responseData, "responseData");
      setResponseTableData(responseData?.payload);
    };

    fetchData();
  }, [addCampuslifeSection, updateCampuslifeSection]);

  useEffect(() => {
    const tempArr = [];

    responseTableData?.data?.map((data, index) => {
      return tempArr.push({
        id: data?.section_id,
        title: data?.additional_data[0]?.title,
        description: data?.additional_data[0]?.description?.map((t) =>
          limitText(t)
        ),
        // title:data?.heading,
      });
    });
    setRowTableData(tempArr);
  }, [responseTableData]);

  const limitText = (text) =>
    text?.length > 50 ? text.substring(0, 50) + "..." : text;

  console.log(rowTableData, "rowTableDatattattata");

  const handleTableEdit = (id) => {
    console.log(id, "TableIddddd");

    const data1 = {
      data: {},
      method: "get",
      apiName: `getCampusLifeSectionById/${id}`,
    };
    dispatch(actions.GETCAMPUSLIFESECTIONBYID(data1));
  };

  const tabledata1 = [
    {
      title: "What course will your future take?",
      description: "Over 70 programs to explore from across 6 different",
    },
  ];

  return (
    // <Grid container>
    //   <Grid  items size={{xs:12}}>
    <Grid container spacing={2}>
      <Grid item size={{ xs: 12 }}>
        {/* <Grid item xs={12} > */}

        <CustomTable
          // tableEdit="tableEdit"
          // tableDelete="tableDelete"

          tableData={rowTableData}
          title="About Student Union"
          tableHeadData={tableHeadData}
          //   modalName={BannerinputGetModal}
          //   editModalName={BannerinputGetModal}

          // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
          // tableView={true}
          //   modalVeiwName={PreviewComponent}
          //   ModalPreviewComponent1={StakeNowMainPage}
          // handleTableDataDelete={handleTableDataDelete}

          // tableDelete={true}
          tableEdit={true}
          dataCreate={
            getAllCampuslifeSectionsBySectionName?.data?.[0]?.additional_data?.[0]?.title
              ? false
              : true
          }
          //   apiBasedName="stakeNowBannerInputModal"
          //   tableData={rowTableData}
          //   title="Banner"
          //   tableHeadData={tableHeadData}
          modalName={AboutStudentUnionModal}
          handleTableEdit={handleTableEdit}
          editModalName={AboutStudentUnionModal}
          //   handleTableDataDelete={handleTableDataDelete}
        />
      </Grid>
      {/* <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> */}
    </Grid>
  );
};

export default AboutStudentUnion;
