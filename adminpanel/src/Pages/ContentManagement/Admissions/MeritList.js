import React, { useCallback, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import CustomTable from "../../../Components/Table/CustomTable";
import { fetchData } from "../../../helpers";
import MeritListModal from "./Modal/MeritListModal";

const MeritList = () => {
  const tableHeadData = ["S.No", "Section Name", "Cards", "Preview"];

  const [tableData, setTableData] = useState([]);
  const [sectionRecords, setSectionRecords] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const loadSections = useCallback(async () => {
    const response = await fetchData({}, "get", "getAllMeritListSections");
    const records = response?.data?.data || [];
    setSectionRecords(records);

    const rows = records.map((item) => {
      const cards = Array.isArray(item?.additional_data)
        ? item.additional_data
        : item?.additional_data?.cards || [];

      return {
        id: item?.merit_list_id,
        section_id: item?.merit_list_id,
        section_name: item?.section_name || "-",
        cards: cards.length || 0,
        preview:
          cards.length > 0
            ? `${cards[0]?.main_title || "-"} | ${cards[0]?.next_title || "-"}`
            : "-",
      };
    });
    setTableData(rows);
  }, []);

  useEffect(() => {
    loadSections();
  }, [loadSections, refreshKey]);

  const handleTableEdit = (id) => {
    const selected = sectionRecords.find((row) => row.merit_list_id === id);
    setSelectedRow(selected || null);
  };

  const handleTableDataDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this merit list section?"
    );
    if (!isConfirmed) return;

    const response = await fetchData({}, "delete", `deleteMeritListSection/${id}`);

    if (response?.data?.Success) {
      toast.success(
        response?.data?.Message || "Merit list section deleted successfully."
      );
      setRefreshKey((prev) => prev + 1);
      return;
    }

    toast.error(response?.data?.Message || "Unable to delete merit list section.");
  };

  const MeritListModalWrapper = (props) => (
    <MeritListModal
      {...props}
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
          title="Merit List"
          tableHeadData={tableHeadData}
          tableEdit={true}
          tableDelete={true}
          dataCreate={true}
          modalName={MeritListModalWrapper}
          editModalName={MeritListModalWrapper}
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

export default MeritList;
