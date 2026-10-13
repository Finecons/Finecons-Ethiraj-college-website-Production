import React, { useEffect, useState } from "react";
import CustomTable from "../../../../Components/Table/CustomTable";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../../ReduxStore/actions";
import StudentPublicationsModal from "./Modal/StudentPublicationsModal";

const StudentPublications = () => {
  const tableHeadData = ["S.No", "Title", "Student Name", "Year", "Academic Name", "Department", "ISBN"];

  const dispatch = useDispatch();
  const [responseTableData, setResponseTableData] = useState([]);
  const [rowTableData, setRowTableData] = useState([]);

  const { getAllStudentPublications } = useSelector(
    (state) => state?.getAllStudentPublications
  );
  const { updateStudentPublication } = useSelector(
    (state) => state?.updateStudentPublication
  );
  const { addStudentPublication } = useSelector(
    (state) => state?.addStudentPublication
  );

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: `getAllStudentPublications`,
      };

      const responseData = await dispatch(
        actions.GETALLSTUDENTPUBLICATIONS(data1)
      );
      setResponseTableData(responseData?.payload);
    };

    fetchData();
  }, [dispatch, addStudentPublication, updateStudentPublication]);

  useEffect(() => {
    const tempArr = [];

    responseTableData?.data?.map((data, index) => {
      return tempArr.push({
        id: data?.studentPublications_id,
        title: data?.title || "N/A",
        student_name: data?.student_name || "N/A",
        year: data?.year || "N/A",
        academic_name: data?.academic?.academic_name || "N/A",
        department_name: data?.department?.department_name || "N/A",
        isbn: data?.isbn || "N/A",
      });
    });
    setRowTableData(tempArr);
  }, [responseTableData]);

  const handleTableEdit = (id) => {
    const data1 = {
      data: {},
      method: "get",
      apiName: `getStudentPublicationById/${id}`,
    };
    dispatch(actions.GETSTUDENTPUBLICATIONBYID(data1));
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <CustomTable
          tableData={rowTableData}
          title="Student Publications"
          tableHeadData={tableHeadData}
          tableEdit={true}
          dataCreate={true}
          modalName={StudentPublicationsModal}
          handleTableEdit={handleTableEdit}
          editModalName={StudentPublicationsModal}
        />
      </Grid>
    </Grid>
  );
};

export default StudentPublications;
