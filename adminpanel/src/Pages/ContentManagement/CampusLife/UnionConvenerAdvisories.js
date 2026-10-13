import React, { useEffect, useState } from "react";
import CustomTable from "../../../Components/Table/CustomTable";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import { toast, ToastContainer } from "react-toastify";
import "../../../Components/ModalCss/BannerinputGetModal.css";
import UnionConvenerAdvisoriesModal from "./Modal/UnionConvenerAdvisoriesModal";

const UnionConvenerAdvisories = () => {
  
  const tableHeadData = ["S.No", "Members"];

  const dispatch = useDispatch();

  const [responseTableData, setResponseTableData] = useState([]);
  const [rowTableData, setRowTableData] = useState([]);

  const { getAllCampuslifeSectionsBySectionName } = useSelector(
    (state) => state?.getAllCampuslifeSectionsBySectionName
  );
  const { updateCampuslifeSection } = useSelector(
    (state) => state?.updateCampuslifeSection
  );
  const { addCampuslifeSection } = useSelector(
    (state) => state?.addCampuslifeSection
  );

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {
          page_name: "student unions",
          section_name: "union convener advisories section",
        },
        method: "post",
        apiName: `getAllCampuslifeSectionsBySectionName`,
      };

      const responseData = await dispatch(
        actions.GETALLCAMPUSLIFESECTIONSBYSECTIONNAME(data1)
      );
      setResponseTableData(responseData?.payload);
    };

    fetchData();
  }, [addCampuslifeSection, updateCampuslifeSection]);

  useEffect(() => {
    const tempArr = [];

    responseTableData?.data?.forEach((data, dataIndex) => {
      const memberNames = data?.additional_data?.members
        ?.map((member) => member.name)
        .join(", ");
      tempArr.push({
        id: data?.section_id,
        members: memberNames,
      });
    });
    setRowTableData(tempArr);
  }, [responseTableData]);

  const handleTableEdit = (id) => {
    const data1 = {
      data: {},
      method: "get",
      apiName: `getCampusLifeSectionById/${id}`,
    };
    dispatch(actions.GETCAMPUSLIFESECTIONBYID(data1));
  };

  return (
    <Grid container spacing={2}>
      <Grid item size={{ xs: 12 }}>
        <CustomTable
          tableData={rowTableData}
          title="Union Convener & Advisories"
          tableHeadData={tableHeadData}
          tableEdit={true}
          dataCreate={
            getAllCampuslifeSectionsBySectionName?.data?.[0]?.additional_data?.members?.length > 0
              ? false
              : true
          }
          modalName={UnionConvenerAdvisoriesModal}
          handleTableEdit={handleTableEdit}
          editModalName={UnionConvenerAdvisoriesModal}
        />
      </Grid>
    </Grid>
  );
};

export default UnionConvenerAdvisories;
