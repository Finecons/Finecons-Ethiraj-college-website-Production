

import React, { useEffect, useState } from "react";
import CustomTable from "../../../Components/Table/CustomTable";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import { toast, ToastContainer } from "react-toastify";
import "../../../Components/ModalCss/BannerinputGetModal.css";
import UnionMemberStudentUnionModal from "./Modal/UnionMemberStudentUnionModal";
const UnionMembersStudentUnion = () => {
 

  const tableHeadData = ["S.No", "Year", "Description"];

  const dispatch = useDispatch();

  const [responseTableData, setResponseTableData] = useState([]);
  // const permissions = JSON.parse(sessionStorage.getItem("permissions"));

  const [rowTableData, setRowTableData] = useState([]);
  console.log(rowTableData, "rowTableTAdatatattattat");

  const { getAllCampuslifeSectionsBySectionName } = useSelector(
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

        page_name: "student unions",
        section_name: "union member section",
        },
        method: "post",
        apiName: `getAllCampuslifeSectionsBySectionName`,
      };        
         

      const responseData = await dispatch(
        actions.GETALLCAMPUSLIFESECTIONSBYSECTIONNAME(data1)
      );
      console.log(responseData, "responseData");
      setResponseTableData(responseData?.payload);
    };

    fetchData();
  }, [addCampuslifeSection, updateCampuslifeSection]);

  useEffect(() => {
    const tempArr = [];

    responseTableData?.data?.map((data, index) => {
      return tempArr.push({
        id: data?.section_id,
        year: data?.additional_data?.year,
        description: limitText(data?.additional_data?.description),
      });
    });
    setRowTableData(tempArr);
  }, [responseTableData]);

  const limitText = (text) =>
    text?.length > 50 ? text.substring(0, 50) + "..." : text;

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

  const tabledata1 = [
    {
      title: "What course will your future take?",
      description: "Over 70 programs to explore from across 6 different",
    },
  ];

  return (

    <Grid container spacing={2}>
      <Grid item size={{ xs: 12 }}>

        <CustomTable
    
          tableData={rowTableData}
          title="Union Members"
          tableHeadData={tableHeadData}
         
          tableEdit={true}
          dataCreate={
            getAllCampuslifeSectionsBySectionName?.data?.[0]?.additional_data?.year
              ? false
              : true
          }
        
          modalName={UnionMemberStudentUnionModal}
          handleTableEdit={handleTableEdit}
          editModalName={UnionMemberStudentUnionModal}
        />
      </Grid>
     
    </Grid>
  );
};

export default UnionMembersStudentUnion;
