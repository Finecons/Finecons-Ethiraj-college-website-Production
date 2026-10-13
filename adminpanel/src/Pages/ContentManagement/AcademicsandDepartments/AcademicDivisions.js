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
// import LandingPage from '../../Preview/LandingPage';
// import PreviewComponent from "../../PreviewComponent/PreviewComponent";
// import StakeNowMainPage from "../../ContentManagementStakeNowPreview/Banner/StakeNowMainPage";
// import BannerinputGetModal from "../Modal/Banner/BannerinputGetModal";

const AcademicDivisions = () => {
  // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  // // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  // const role = sessionStorage.getItem("role")
  // csonole

  // const tableData = role === "superAdmin"
  //   ? [{ title: 'The Best Gold', secondtext: 'Staking Company', subtext: 'Lorem Ipsum is simply dummy text of the...', documents: "banner.jpg" }]
  //   : [];

  const tableHeadData = ["S.No", "Academic Division"];

  const dispatch = useDispatch();

  const [responseTableData, setResponseTableData] = useState([]);
  // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  console.log(responseTableData, "responseTableDataresponseTableData");
  


  const [rowTableData, setRowTableData] = useState([]);
  console.log(rowTableData, "rowTableTAdatatattattat");
  

  const { addAcademic } = useSelector((state) => state?.addAcademic);

  const { getAllProgrammeLevels } = useSelector(
    (state) => state?.getAllProgrammeLevels
  );
  const { updateAcademic } = useSelector((state) => state?.updateAcademic);
  const { getAllAcademics } = useSelector((state) => state?.getAllAcademics);
  console.log(getAllProgrammeLevels, "getAllProgrammeLevels");
  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: `getAllAcademics`,
      };

      const responseData = await dispatch(actions.GETALLACADEMICS(data1));
      console.log(responseData, "responseData");
      setResponseTableData(responseData?.payload);
    };

    fetchData();
  }, [updateAcademic,addAcademic]);

  useEffect(() => {
    const tempArr = [];

    responseTableData?.data?.map((data, index) => {
      return tempArr.push({
        id: data?.academic_id,
        academic_name: data?.academic_name || "--",
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
      apiName: `getAcademicById/${id}`,
    };
    dispatch(actions.GETACADEMICBYID(data1));
  };


  const tableData = [
    {
      academic_name: "Management Studies",
      description:
        "This division focuses on scientific programs and research in various disciplines.",
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <CustomTable
          // tableEdit="tableEdit"
          // tableDelete="tableDelete"

          tableData={rowTableData}
          title="Academic Divisions"
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
          modalName={AcademicDivisionsModal}
          handleTableEdit={handleTableEdit}
          editModalName={AcademicDivisionsModal}
          //   handleTableDataDelete={handleTableDataDelete}
        />
      </Grid>
    </Grid>
  );
};

export default AcademicDivisions;
