import React, { useEffect, useState } from "react";
import CustomTable from "../../../Components/Table/CustomTable";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import { toast, ToastContainer } from "react-toastify";
import "../../../Components/ModalCss/BannerinputGetModal.css";
import ExaminationsModal from "./Modal/ExaminationsModal";

const Examinations = () => {
  const tableHeadData = ["S.Nom", "Exam Schedules"];

  const dispatch = useDispatch();
  const [responseTableData, setResponseTableData] = useState([]);
  const [rowTableData, setRowTableData] = useState([]);

  const { getAllExaminationsSections } = useSelector(
    (state) => state?.getAllExaminationsSections
  );
  const { updateExaminationsSection } = useSelector(
    (state) => state?.updateExaminationsSection
  );
  const { addExaminationsSection } = useSelector(
    (state) => state?.addExaminationsSection
  );
  const { deleteExaminationsSection } = useSelector(
    (state) => state?.deleteExaminationsSection
  );

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: `getAllExaminationsSections`,
      };

      const responseData = await dispatch(
        actions.GETALLEXAMINATIONSSECTIONS(data1)
      );
      setResponseTableData(responseData?.payload);
    };

    fetchData();
  }, [dispatch, addExaminationsSection, updateExaminationsSection, deleteExaminationsSection]);

  useEffect(() => {
    const tempArr = [];

    responseTableData?.data?.map((data, index) => {
      // Extract card titles from additional_data
      const cardTitles = data?.additional_data?.cards
        ?.map((card) => card?.title)
        .join(", ") || "N/A";

      return tempArr.push({
        id: data?.examination_id,
        
        exam_schedules: cardTitles,
      });
    });
    setRowTableData(tempArr);
  }, [responseTableData]);

  const handleTableEdit = (id) => {
    const data1 = {
      data: {},
      method: "get",
      apiName: `getExaminationsSectionById/${id}`,
    };
    dispatch(actions.GETEXAMINATIONSSECTIONBYID(data1));
  };

  const handleTableDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this examination section?"
    );

    if (confirmDelete) {
      const data1 = {
        data: {},
        method: "delete",
        apiName: `deleteExaminationsSection/${id}`,
      };

      const responseData = await dispatch(
        actions.DELETEEXAMINATIONSSECTION(data1)
      );

      if (responseData?.payload?.Success) {
        toast.success("Examination section deleted successfully");
        // Refresh the table
        const data2 = {
          data: {},
          method: "get",
          apiName: `getAllExaminationsSections`,
        };
        const refreshedData = await dispatch(
          actions.GETALLEXAMINATIONSSECTIONS(data2)
        );
        setResponseTableData(refreshedData?.payload);
      } else {
        toast.error(responseData?.payload?.Message || "Error deleting record");
      }
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <CustomTable
          tableData={rowTableData}
          title="Examinations Sections"
          tableHeadData={tableHeadData}
          tableEdit={true}
          dataCreate={true}
          modalName={ExaminationsModal}
          handleTableEdit={handleTableEdit}
          editModalName={ExaminationsModal}
          handleTableDelete={handleTableDelete}
      tableDelete={false}
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

export default Examinations;
