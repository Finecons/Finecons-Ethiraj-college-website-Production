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
import DepartmentModal from "./Modal/DepartmentModal";
import { addDepartmentAction } from "../../../ReduxStore/Slices/Department/addDepartment";
// import LandingPage from '../../Preview/LandingPage';
// import PreviewComponent from "../../PreviewComponent/PreviewComponent";
// import StakeNowMainPage from "../../ContentManagementStakeNowPreview/Banner/StakeNowMainPage";
// import BannerinputGetModal from "../Modal/Banner/BannerinputGetModal";

const Department = () => {
  // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  // // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  // const role = sessionStorage.getItem("role")
  // csonole

  // const tableData = role === "superAdmin"
  //   ? [{ title: 'The Best Gold', secondtext: 'Staking Company', subtext: 'Lorem Ipsum is simply dummy text of the...', documents: "banner.jpg" }]
  //   : [];

  const tableHeadData = ["S.No", "Department","Academic Division"];

  const dispatch = useDispatch();

  const [responseTableData, setResponseTableData] = useState([]);
  // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  console.log(responseTableData, "responseTableDataresponseTableData");

  const [rowTableData, setRowTableData] = useState([]);
  console.log(rowTableData, "rowTableTAdatatattattat");

  const { addDepartment } = useSelector((state) => state?.addDepartment);

  const { getAllProgrammeLevels } = useSelector(
    (state) => state?.getAllProgrammeLevels,
  );
  const { updateDepartment } = useSelector((state) => state?.updateDepartment);
  const { getAllAcademics } = useSelector((state) => state?.getAllAcademics);
  console.log(getAllProgrammeLevels, "getAllProgrammeLevels");
  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: `getAllDepartments`,
      };

      const responseData = await dispatch(actions.GETALLDEPARTMENTS(data1));
      console.log(responseData, "responseData");
      setResponseTableData(responseData?.payload);
    };

    fetchData();
  }, [updateDepartment, addDepartment]);

  useEffect(() => {
    const tempArr = [];

    responseTableData?.data?.forEach((data) => {
      const isFoundationCourse =
        data?.academic?.academic_name === "Foundation Courses";
      const isArtsGeography =
        data?.academic?.academic_name === "Arts & Humanities" &&
        data?.department_name === "Geography";

      if (isFoundationCourse || isArtsGeography) {
        return;
      }

      tempArr.push({
        id: data?.department_id,
        department_name: data?.department_name || "--",
        academic_division: data?.academic?.academic_name,

        // description: data?.description || "--",
      });
    });
    setRowTableData(tempArr);
  }, [responseTableData]);

  const handleTableEdit = (id) => {
    console.log(id, "TableIddddd");

    const data1 = {
      data: {},
      method: "get",
      apiName: `getDepartmentById/${id}`,
    };
    dispatch(actions.GETDEPARTMENTBYID(data1));
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
      department: "Commerce",
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <CustomTable
          // tableEdit="tableEdit"
          // tableDelete="tableDelete"

          tableData={rowTableData}
          title="Department"
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
          modalName={DepartmentModal}
          handleTableEdit={handleTableEdit}
          editModalName={DepartmentModal}
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

export default Department;
