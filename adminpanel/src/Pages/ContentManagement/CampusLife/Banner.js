
import React, { useEffect, useState } from "react";
import CustomTable from "../../../Components/Table/CustomTable";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import "../../../Components/ModalCss/BannerinputGetModal.css";
import BannerModal from "./Modal/BannerModal";

const Banner = () => {

  const tableHeadData = ["S.No"];

  const dispatch = useDispatch();

  const [responseTableData, setResponseTableData] = useState([]);
  // const permissions = JSON.parse(sessionStorage.getItem("permissions"));

  const [rowTableData, setRowTableData] = useState([]);
  console.log(rowTableData, "rowTableTAdatatattattat");

  const {getAllCampuslifeSectionsBySectionName } = useSelector(
    (state) => state?.getAllCampuslifeSectionsBySectionName
  );
  const { updateCampuslifeSection } = useSelector(
    (state) => state?.updateCampuslifeSection
  );
  const { addCampuslifeSection } = useSelector(
    (state) => state?.addCampuslifeSection  
  );
  console.log(getAllCampuslifeSectionsBySectionName, "getAllCampuslifeSectionsBySectionName");
  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: { 
            section_name: "banner section",
            page_name: "student unions"
        },
        method: "post",
        apiName: `getAllCampusLifeSectionsBySectionName`,
      };

      const responseData = await dispatch(
        actions.GETALLCAMPUSLIFESECTIONSBYSECTIONNAME(data1)
      );
      console.log(responseData, "responseData");
      setResponseTableData(responseData?.payload);
    };

    fetchData();
  }, [dispatch,addCampuslifeSection,updateCampuslifeSection]);

  useEffect(() => {
    const tempArr = [];

    responseTableData?.data?.map((data, index) => {
      return tempArr.push({
        id: data?.section_id,
      
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
      apiName: `getCampusLifeSectionById/${id}`,
    };
    dispatch(actions.GETCAMPUSLIFESECTIONBYID(data1));
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <CustomTable
     
          tableData={rowTableData}
          title="Banner"
          tableHeadData={tableHeadData}
     
          tableEdit={true}
          dataCreate={!getAllCampuslifeSectionsBySectionName?.data?.length > 0}
       
          modalName={BannerModal}
          handleTableEdit={handleTableEdit}
          editModalName={BannerModal}
  
        />
      </Grid>  
    </Grid>
  );
};

export default Banner;
