// import React from 'react'

// const LevelOfSrtudy = () => {
//   return (
//     <div>LevelOfSrtudy</div>
//   )
// }

// export default LevelOfSrtudy

import React, { useEffect, useState } from "react";
import CustomTable from "../../../Components/Table/CustomTable";
// import BannerinputGetModal from '../../Modal/BannerModal/BannerinputGetModaldal';
import { Grid } from "@mui/material";
// import BannerinputGetModal from '../../../CommonModal/BannerModal/BannerinputGetModal';
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import { toast, ToastContainer } from "react-toastify";
import "../../../Components/ModalCss/BannerinputGetModal.css";
import LevelOfStudyModal from "./Modal/LevelOfStudyModal";
import { updateProgrammeLevelAction } from "../../../ReduxStore/Slices/ProgramLevel/updateProgrammeLevel";
// import LandingPage from '../../Preview/LandingPage';
// import PreviewComponent from "../../PreviewComponent/PreviewComponent";
// import StakeNowMainPage from "../../ContentManagementStakeNowPreview/Banner/StakeNowMainPage";
// import BannerinputGetModal from "../Modal/Banner/BannerinputGetModal";

const LevelOfSrtudy = () => {
  // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  // // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  // const role = sessionStorage.getItem("role")
  // csonole

  // const tableData = role === "superAdmin"
  //   ? [{ title: 'The Best Gold', secondtext: 'Staking Company', subtext: 'Lorem Ipsum is simply dummy text of the...', documents: "banner.jpg" }]
  //   : [];

  const tableHeadData = ["S.No", "Level of Study", "Description"];

  const dispatch = useDispatch();

  const [responseTableData, setResponseTableData] = useState([]);
  // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  console.log(responseTableData, "responseTableDataresponseTableData");
  

  const [rowTableData, setRowTableData] = useState([]);
  console.log(rowTableData, "rowTableTAdatatattattat");
  
  
  const { getAllProgrammeLevels } = useSelector(
    (state) => state?.getAllProgrammeLevels
  );
  const { updateProgrammeLevel } = useSelector(
    (state) => state?.updateProgrammeLevel
  );
  const { addProgrammeLevel } = useSelector(
    (state) => state?.addProgrammeLevel
  );
  console.log(getAllProgrammeLevels, "getAllProgrammeLevels");
  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: `getAllProgrammeLevels`,
      };

      const responseData = await dispatch(actions.GETALLPROGRAMMELEVELS(data1));
      console.log(responseData, "responseData");
      setResponseTableData(responseData?.payload);
    };

    fetchData();
  }, [updateProgrammeLevel, addProgrammeLevel]);

  useEffect(() => {
    const tempArr = [];

    responseTableData?.data?.map((data, index) => {
      return tempArr.push({
        id: data?.programme_level_id,
        levelOfSrtudy: data?.level_name || "--",
        description: data?.description || "--",
      });
    });
    setRowTableData(tempArr);
  }, [responseTableData]);

  console.log(rowTableData, "rowTableDatattattata");

  const handleTableEdit = (id) => {
    console.log(id, "TableIddddd");

    const data1 = {
      data: {},
      method: "get",
      apiName: `getProgrammeLevelById/${id}`,
    };
    dispatch(actions.GETSPOGRAMMELEVELBYID(data1));
  };

  const handleTableDataDelete = async (id) => {
    const data1 = {
      data: {},
      method: "delete",
      apiName: `deleteStakeNowSection/${id}`,
    };
    const responseData = await dispatch(actions.DELETESTAKENOWSECTION(data1));
    if (
      responseData?.payload?.message ===
      "Stake Now section soft deleted successfully."
    ) {
      toast.success(responseData?.payload?.message);
    } else {
      toast.error(responseData?.payload?.message);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <CustomTable
          // tableEdit="tableEdit"
          // tableDelete="tableDelete"

          tableData={rowTableData}
          title="Level Of Study"
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
          dataCreate={true}
          //   apiBasedName="stakeNowBannerInputModal"
          //   tableData={rowTableData}
          //   title="Banner"
          //   tableHeadData={tableHeadData}
          modalName={LevelOfStudyModal}
          handleTableEdit={handleTableEdit}
          editModalName={LevelOfStudyModal}
          //   handleTableDataDelete={handleTableDataDelete}
        />
      </Grid>
      <ToastContainer
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
      />
    </Grid>
  );
};

export default LevelOfSrtudy;
