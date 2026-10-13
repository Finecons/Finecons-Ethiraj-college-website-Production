import React, { useCallback, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import CustomTable from "../../../Components/Table/CustomTable";
import { fetchData } from "../../../helpers";
import AdmissionPolicyModal from "./Modal/AdmissionPolicyModal";

const AdmissionPolicy = () => {
  const tableHeadData = ["S.No", "Section Name", "Heading", "Sub Heading", "Content"];

  const [tableData, setTableData] = useState([]);
  const [sectionRecords, setSectionRecords] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const loadSections = useCallback(async () => {
    const response = await fetchData({}, "get", "getAllAdmissionPolicySections");
    const records = response?.data?.data || [];
    setSectionRecords(records);

    const rows = records.map((item) => ({
      id: item?.admission_policy_id,
      section_id: item?.admission_policy_id,
      section_name: item?.section_name || "-",
      heading: item?.heading || "-",
      sub_heading: item?.sub_heading || "-",
      content: item?.content || "-",
    }));
    setTableData(rows);
  }, []);

  useEffect(() => {
    loadSections();
  }, [loadSections, refreshKey]);

  const handleTableEdit = (id) => {
    const selected = sectionRecords.find(
      (row) => row.admission_policy_id === id
    );
    setSelectedRow(selected || null);
  };

  const handleTableDataDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this admission policy section?"
    );
    if (!isConfirmed) return;

    const response = await fetchData(
      {},
      "delete",
      `deleteAdmissionPolicySection/${id}`
    );

    if (response?.data?.Success) {
      toast.success(
        response?.data?.Message || "Admission policy section deleted successfully."
      );
      setRefreshKey((prev) => prev + 1);
      return;
    }

    toast.error(
      response?.data?.Message || "Unable to delete admission policy section."
    );
  };

  const AdmissionPolicyModalWrapper = (props) => (
    <AdmissionPolicyModal
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
          title="Admission Policy"
          tableHeadData={tableHeadData}
          tableEdit={true}
          tableDelete={true}
          dataCreate={true}
          modalName={AdmissionPolicyModalWrapper}
          editModalName={AdmissionPolicyModalWrapper}
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

export default AdmissionPolicy;
