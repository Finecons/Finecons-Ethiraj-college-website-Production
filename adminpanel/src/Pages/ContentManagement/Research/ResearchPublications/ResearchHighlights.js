import React, { useEffect, useState } from "react";
import CustomTable from "../../../../Components/Table/CustomTable";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../../ReduxStore/actions";
import ResearchHighlightsModal from "./Modal/ResearchHighlightsModal";

const ResearchHighlights = () => {
  const tableHeadData = ["S.No", "Title", "Faculty Name", "Year", "Academic Name", "Department", "Is Important"];

  const dispatch = useDispatch();
  const [responseTableData, setResponseTableData] = useState([]);
  const [rowTableData, setRowTableData] = useState([]);

  const { getAllResearchHighlights } = useSelector(
    (state) => state?.getAllResearchHighlights
  );
  const { updateResearchHighlight } = useSelector(
    (state) => state?.updateResearchHighlight
  );
  const { addResearchHighlight } = useSelector(
    (state) => state?.addResearchHighlight
  );

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: `getAllResearchHighlights`,
      };

      const responseData = await dispatch(
        actions.GETALLRESEARCHHIGHLIGHTS(data1)
      );
      setResponseTableData(responseData?.payload);
    };

    fetchData();
  }, [dispatch, addResearchHighlight, updateResearchHighlight]);

  useEffect(() => {
    const tempArr = [];

    responseTableData?.data?.map((data, index) => {
      return tempArr.push({
        id: data?.researchHighlights_id,
        title: data?.title || "N/A",
        faculty_name: data?.faculty_name || "N/A",
        year: data?.year || "N/A",
        academic_name: data?.academic?.academic_name || "N/A",
        department_name: data?.department?.department_name || "N/A",
        is_important: data?.is_important === 1 ? "Yes" : "No",
      });
    });
    setRowTableData(tempArr);
  }, [responseTableData]);

  const handleTableEdit = (id) => {
    const data1 = {
      data: {},
      method: "get",
      apiName: `getResearchHighlightById/${id}`,
    };
    dispatch(actions.GETRESEARCHHIGHLIGHTBYID(data1));
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <CustomTable
          tableData={rowTableData}
          title="Research Highlights"
          tableHeadData={tableHeadData}
          tableEdit={true}
          dataCreate={true}
          modalName={ResearchHighlightsModal}
          handleTableEdit={handleTableEdit}
          editModalName={ResearchHighlightsModal}
        />
      </Grid>
    </Grid>
  );
};

export default ResearchHighlights;
