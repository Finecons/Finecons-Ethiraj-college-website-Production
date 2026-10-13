// import React from 'react'

// const AcademicDivisions = () => {
//   return (
//     <div>AcademicDivisions</div>
//   )
// }

// export default AcademicDivisions

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
import AcademicDivisionsModal from "./Modal/AcademicDivisionsModal";
// import ProgramModal from "./Modal/ProgramModal";
import { addProgramAction } from "../../../ReduxStore/Slices/Program/addProgram";
import PhdProgramModal from "./Modal/PhdProgramModal";
// import LandingPage from '../../Preview/LandingPage';
// import PreviewComponent from "../../PreviewComponent/PreviewComponent";
// import StakeNowMainPage from "../../ContentManagementStakeNowPreview/Banner/StakeNowMainPage";
// import BannerinputGetModal from "../Modal/Banner/BannerinputGetModal";

const Phdprograms = () => {
  // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  // // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  // const role = sessionStorage.getItem("role")
  // csonole

  // const tableData = role === "superAdmin"
  //   ? [{ title: 'The Best Gold', secondtext: 'Staking Company', subtext: 'Lorem Ipsum is simply dummy text of the...', documents: "banner.jpg" }]
  //   : [];

  const tableHeadData = ["S.No", "Program"];

  const dispatch = useDispatch();

  const [responseTableData, setResponseTableData] = useState([]);
  // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  console.log(responseTableData, "responseTableDataresponseTableData");

  const [rowTableData, setRowTableData] = useState([]);
  console.log(rowTableData, "rowTableTAdatatattattat");

  const { addProgram } = useSelector((state) => state?.addProgram);

  const { getAllProgrammeLevels } = useSelector(
    (state) => state?.getAllProgrammeLevels,
  );
  const { updateProgram } = useSelector((state) => state?.updateProgram);
  const { getAllAcademics } = useSelector((state) => state?.getAllAcademics);
  console.log(getAllProgrammeLevels, "getAllProgrammeLevels");
  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: `getAllPrograms`,
      };

      const responseData = await dispatch(actions.GETALLPROGRAMS(data1));
      console.log(responseData, "responseData");
      setResponseTableData(responseData?.payload);
    };

    fetchData();
  }, [updateProgram, addProgram]);
  useEffect(() => {
    const filteredData =
      responseTableData?.data
        ?.filter(
          (item) => item?.programme_level?.level_name?.toLowerCase() === "phd",
        )
        ?.map((data) => ({
          id: data?.program_id,
          program_name: data?.program_name || "--",
        })) || [];

    setRowTableData(filteredData);
  }, [responseTableData]);
  console.log(rowTableData, "rowTableDatattattata");

  const handleTableEdit = (id) => {
    console.log(id, "TableIddddd");

    const data1 = {
      data: {},
      method: "get",
      apiName: `getProgramById/${id}`,
    };
    dispatch(actions.GETPROGRAMBYID(data1));
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

  const tableData = [
    {
      program: "Commerce",
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <CustomTable
          // tableEdit="tableEdit"
          // tableDelete="tableDelete"

          tableData={rowTableData}
          title="Program"
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
          modalName={PhdProgramModal}
          handleTableEdit={handleTableEdit}
          editModalName={PhdProgramModal}
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

export default Phdprograms;
