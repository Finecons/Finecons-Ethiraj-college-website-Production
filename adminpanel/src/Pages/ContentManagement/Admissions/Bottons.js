import React, { useCallback, useEffect, useState } from "react";
import { Grid, Box, Tabs, Tab } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import CustomTable from "../../../Components/Table/CustomTable";
import { fetchData } from "../../../helpers";
import ButtonsModal from "./Modal/ButtonsModal";

const Bottons = () => {
  const tableHeadData = ["S.No", "Button Name", "Text", "Link"];

  const [buttonRecords, setButtonRecords] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [activeTab, setActiveTab] = useState("pay-now");

  const loadButtons = useCallback(async () => {
    const response = await fetchData({}, "get", "getAllButtons");
    const records = response?.data?.data || [];
    setButtonRecords(records);
  }, []);

  useEffect(() => {
    loadButtons();
  }, [loadButtons, refreshKey]);

  // Filter buttons by button_name
  const getFilteredButtons = (buttonType) => {
    return buttonRecords
      .filter((item) => item?.button_name?.toLowerCase() === buttonType.toLowerCase())
      .map((item) => ({
        id: item?.button_id,
        section_id: item?.button_id,
        button_name: item?.button_name || "-",
        text: item?.text || "-",
        link: item?.link || "-",
      }));
  };

  const payNowButtons = getFilteredButtons("Pay Now");
  const applyNowButtons = getFilteredButtons("Apply Now");

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
      buttonType={activeTab === "pay-now" ? "Pay Now" : "Apply Now"}
      editData={selectedRow}
      onSuccess={() => {
        setSelectedRow(null);
        setRefreshKey((prev) => prev + 1);
      }}
    />
  );

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setSelectedRow(null);
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "var(--main-color)",
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 500,
                "&.Mui-selected": {
                  color: "var(--main-color)",
                },
              },
            }}
          >
            <Tab label="Pay Now" value="pay-now" />
            <Tab label="Apply Now" value="apply-now" />
          </Tabs>
        </Box>

        {activeTab === "pay-now" && (
          <CustomTable
            tableData={payNowButtons}
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
        )}

        {activeTab === "apply-now" && (
          <CustomTable
            tableData={applyNowButtons}
            title="Apply Now Buttons"
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
        )}
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

export default Bottons;
