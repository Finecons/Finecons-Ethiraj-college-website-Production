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
// import LevelOfStudyModal from "./Modal/LevelOfStudyModal";
import { updateProgrammeLevelAction } from "../../../ReduxStore/Slices/ProgramLevel/updateProgrammeLevel";
import IQACEventsModal from "./Modal/IQACEventsModal";
// import LandingPage from '../../Preview/LandingPage';
// import PreviewComponent from "../../PreviewComponent/PreviewComponent";
// import StakeNowMainPage from "../../ContentManagementStakeNowPreview/Banner/StakeNowMainPage";
// import BannerinputGetModal from "../Modal/Banner/BannerinputGetModal";

const IQACEvents = () => {
  // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  // // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  // const role = sessionStorage.getItem("role")
  // csonole

  // const tableData = role === "superAdmin"
  //   ? [{ title: 'The Best Gold', secondtext: 'Staking Company', subtext: 'Lorem Ipsum is simply dummy text of the...', documents: "banner.jpg" }]
  //   : [];

  const tableHeadData = ["S.No"];

  const dispatch = useDispatch();

  const [responseTableData, setResponseTableData] = useState([]);
  // const permissions = JSON.parse(sessionStorage.getItem("permissions"));

  const [rowTableData, setRowTableData] = useState([]);
  console.log(rowTableData, "rowTableTAdatatattattat");

  const { getAllIQACSectionsBySectionName } = useSelector(
    (state) => state?.getAllIQACSectionsBySectionName
  );
  const { updateIQACSection } = useSelector(
    (state) => state?.updateIQACSection
  );
  const { addIQACSection } = useSelector(
    (state) => state?.addIQACSection
  );
  console.log(getAllIQACSectionsBySectionName, "getAllIQACSectionsBySectionName");
  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: { 
            section_name: "IQACEvents section" 
        },
        method: "post",
        apiName: `getAllIQACSectionsBySectionName`,
      };

      const responseData = await dispatch(
        actions.GETALLIQACSECTIONSBYSECTIONNAME(data1)
      );
      console.log(responseData, "responseData");
      setResponseTableData(responseData?.payload);
    };

    fetchData();
  }, [addIQACSection,updateIQACSection]);

  useEffect(() => {
    const tempArr = [];

    responseTableData?.data?.map((data, index) => {
      return tempArr.push({
        id: data?.section_id,
        // undergraduategraduate:data?.additional_data?.undergraduategraduate,
        // facultymember:data?.additional_data?.facultymember,
        // alumnisituatedglobally:data?.additional_data?.alumnisituatedglobally,
      });
    });
    setRowTableData(tempArr);
  }, [getAllIQACSectionsBySectionName,responseTableData]);

  console.log(rowTableData, "rowTableDatattattata");

  const handleTableEdit = (id) => {
    console.log(id, "TableIddddd");

    const data1 = {
      data: {},
      method: "get",
      apiName: `getIQACSectionById/${id}`,
    };
    dispatch(actions.GETIQACSECTIONBYID(data1));
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <CustomTable
          // tableEdit="tableEdit"
          // tableDelete="tableDelete"

          tableData={rowTableData}
          title="IQACEvents"
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
                    dataCreate={!getAllIQACSectionsBySectionName?.data?.length > 0}

          //   apiBasedName="stakeNowBannerInputModal"
          //   tableData={rowTableData}
          //   title="Banner"
          //   tableHeadData={tableHeadData}
          modalName={IQACEventsModal}
          handleTableEdit={handleTableEdit}
          editModalName={IQACEventsModal}
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

export default IQACEvents;
