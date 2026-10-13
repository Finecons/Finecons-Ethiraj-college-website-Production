// import React from 'react'

// const LevelOfSrtudy = () => {
//   return (
//     <div>LevelOfSrtudy</div>
//   )
// }

// export default LevelOfSrtudy

import React, { useEffect, useState } from "react";
import CustomTable from "../../../Components/Table/CustomTable";
// import BannerinputGetModal from '../../Modal/AboutAcademicsModal/BannerinputGetModaldal';
import { Grid } from "@mui/material";
// import BannerinputGetModal from '../../../CommonModal/AboutAcademicsModal/BannerinputGetModal';
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import { toast, ToastContainer } from "react-toastify";
import "../../../Components/ModalCss/BannerinputGetModal.css";
// import LevelOfStudyModal from "./Modal/LevelOfStudyModal";
import { updateProgrammeLevelAction } from "../../../ReduxStore/Slices/ProgramLevel/updateProgrammeLevel";
import AboutAcademicsModal from "./Modal/AboutAcademicsModal";
import { Description } from "@mui/icons-material";
// import LandingPage from '../../Preview/LandingPage';
// import PreviewComponent from "../../PreviewComponent/PreviewComponent";
// import StakeNowMainPage from "../../ContentManagementStakeNowPreview/Banner/StakeNowMainPage";
// import BannerinputGetModal from "../Modal/Banner/BannerinputGetModal";

const AboutAcademics = () => {
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

  const { getAcademicsSectionsByName } = useSelector(
    (state) => state?.getAcademicsSectionsByName
  );
  const { updateAcademicsSection } = useSelector(
    (state) => state?.updateAcademicsSection
  );
  const { addAcademicsSection } = useSelector(
    (state) => state?.addAcademicsSection
  );
  console.log(getAcademicsSectionsByName, "getAcademicsSectionsByName");
  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {
          section_name: "aboutAcademics section",
        },
        method: "post",
        apiName: `getAcademicsSectionsByName`,
      };

      const responseData = await dispatch(
        actions.GETACADEMICSSECTIONSBYNAME(data1)
      );
      console.log(responseData, "responseData");
      setResponseTableData(responseData?.payload);
    };

    fetchData();
  }, [addAcademicsSection, updateAcademicsSection]);

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
      apiName: `getAcademicsSectionById/${id}`,
    };
    dispatch(actions.GETACADEMICSSECTIONBYID(data1));
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
          title="About Academics"
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
            getAcademicsSectionsByName?.data?.[0]?.additional_data?.[0]?.title
              ? false
              : true
          }
          //   apiBasedName="stakeNowBannerInputModal"
          //   tableData={rowTableData}
          //   title="Banner"
          //   tableHeadData={tableHeadData}
          modalName={AboutAcademicsModal}
          handleTableEdit={handleTableEdit}
          editModalName={AboutAcademicsModal}
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

export default AboutAcademics;
