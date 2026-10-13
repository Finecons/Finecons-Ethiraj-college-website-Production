import React, { useEffect, useState } from "react";
import CustomTable from "../../../../Components/Table/CustomTable";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../../ReduxStore/actions";
import FacultyPublicationsModal from "./Modal/FacultyPublicationsModal";

const FacultyPublications = () => {
  const tableHeadData = ["S.No", "Title", "Faculty Name", "Year", "Academic Name", "Department", "ISBN"];

  const dispatch = useDispatch();
  const [responseTableData, setResponseTableData] = useState([]);
  const [rowTableData, setRowTableData] = useState([]);

  const { getAllFacultyPublications } = useSelector(
    (state) => state?.getAllFacultyPublications
  );
  const { updateFacultyPublication } = useSelector(
    (state) => state?.updateFacultyPublication
  );
  const { addFacultyPublication } = useSelector(
    (state) => state?.addFacultyPublication
  );

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: `getAllFacultyPublications`,
      };

      const responseData = await dispatch(
        actions.GETALLFACULTYPUBLICATIONS(data1)
      );
      setResponseTableData(responseData?.payload);
    };

    fetchData();
  }, [dispatch, addFacultyPublication, updateFacultyPublication]);

  useEffect(() => {
    const tempArr = [];

    responseTableData?.data?.map((data, index) => {
      return tempArr.push({
        id: data?.facultyPublications_id,
        title: data?.title || "N/A",
        faculty_name: data?.faculty_name || "N/A",
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
      apiName: `getFacultyPublicationById/${id}`,
    };
    dispatch(actions.GETFACULTYPUBLICATIONBYID(data1));
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <CustomTable
          tableData={rowTableData}
          title="Faculty Publications"
          tableHeadData={tableHeadData}
          tableEdit={true}
          dataCreate={true}
          modalName={FacultyPublicationsModal}
          handleTableEdit={handleTableEdit}
          editModalName={FacultyPublicationsModal}
        />
      </Grid>
    </Grid>
  );
};

export default FacultyPublications;
