import React, { useCallback, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import CustomTable from "../../../Components/Table/CustomTable";
import { fetchData } from "../../../helpers";
import ButtonsModal from "./Modal/ButtonsModal";

const PayNowButtons = () => {
  const tableHeadData = ["S.No", "Button Name", "Text", "Link"];

  const [buttonRecords, setButtonRecords] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const loadButtons = useCallback(async () => {
    const response = await fetchData(
      { button_name: "Pay Now" },
      "post",
      "getAllButtonsByName"
    );
    const records = response?.data?.data || [];
    setButtonRecords(records);
  }, []);

  useEffect(() => {
    loadButtons();
  }, [loadButtons, refreshKey]);

  const tableData = buttonRecords.map((item) => ({
    id: item?.button_id,
    section_id: item?.button_id,
    button_name: item?.button_name || "-",
    text: item?.text || "-",
    link: item?.link || "-",
  }));

  const handleTableEdit = (id) => {
    const selected = buttonRecords.find((row) => row.button_id === id);
    setSelectedRow(selected || null);
  };

  const handleTableDataDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this button?"
    );
    if (!isConfirmed) return;

    const response = await fetchData({}, "delete", `deleteButton/${id}`);
    if (response?.data?.Success) {
      toast.success(response?.data?.Message || "Button deleted successfully.");
      setRefreshKey((prev) => prev + 1);
      return;
    }

    toast.error(response?.data?.Message || "Unable to delete button.");
  };

  const ButtonsModalWrapper = (props) => (
    <ButtonsModal
      {...props}
      buttonType="Pay Now"
      editData={selectedRow}
      onSuccess={() => {
        setSelectedRow(null);
        setRefreshKey((prev) => prev + 1);
      }}
    />
  );

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <CustomTable
          tableData={tableData}
          title="Pay Now Buttons"
          tableHeadData={tableHeadData}
          tableEdit={true}
          tableDelete={true}
          dataCreate={true}
          modalName={ButtonsModalWrapper}
          editModalName={ButtonsModalWrapper}
          handleTableEdit={handleTableEdit}
          handleTableDataDelete={handleTableDataDelete}
          editData={selectedRow}
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

export default PayNowButtons;
