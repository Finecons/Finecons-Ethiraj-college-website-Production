
import React, { useEffect, useState } from "react";
import CustomTable from "../../../Components/Table/CustomTable";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import { toast } from "react-toastify";
import "../../../Components/ModalCss/BannerinputGetModal.css";
import FoundationCourseModal from "./Modal/FoundationCourseModal";

const FoundationCourses = () => {

  const tableHeadData = ["S.No", "Departments","Academic Division"];

  const dispatch = useDispatch();

  const [responseTableData, setResponseTableData] = useState([]);
  // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  console.log(responseTableData, "responseTableDataresponseTableData");
 

  const [rowTableData, setRowTableData] = useState([]);
  console.log(rowTableData, "rowTableTAdatatattattat");
  

  const { addDepartment } = useSelector((state) => state?.addDepartment);

  const { getAllProgrammeLevels } = useSelector(
    (state) => state?.getAllProgrammeLevels
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
    // Exclude unwanted data using NOT EQUAL
    if (
      data?.academic?.academic_name !== "Foundation Courses" &&
      !(
        data?.academic?.academic_name === "Arts & Humanities" &&
        data?.department_name === "Geography"
      )
    ) {
      return; // skip this row
    }

    // Allowed data
    tempArr.push({
      id: data?.department_id,
      department_name: data?.department_name || "--",
      academic_division: data?.academic?.academic_name,
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
      apiName: `getDepartmentById/${id}`,
    };
    dispatch(actions.GETDEPARTMENTBYID(data1));
  };

  

  
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <CustomTable
       
          tableData={rowTableData}
          title="FoundationCourses"
          tableHeadData={tableHeadData}

          tableEdit={true}
          dataCreate={true}
        
          modalName={FoundationCourseModal}
          handleTableEdit={handleTableEdit}
          editModalName={FoundationCourseModal

          }
        />
      </Grid>
      
    </Grid>
  );
};

export default FoundationCourses;
