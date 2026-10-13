import React, { useEffect, useState } from "react";
import CustomTable from "../../../Components/Table/CustomTable";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import { toast, ToastContainer } from "react-toastify";
import "../../../Components/ModalCss/BannerinputGetModal.css";
import ECRICPhDFellowshipsModal from "./Modal/ECRICPhDFellowshipsModal";

const ECRICPhDFellowships = () => {
    const tableHeadData = ["S.No"];

    const dispatch = useDispatch();

    const [responseTableData, setResponseTableData] = useState([]);
    const [rowTableData, setRowTableData] = useState([]);
    console.log(rowTableData, "rowTableTAdatatattattat");

    const { getAllResearchSectionsBySectionName } = useSelector(
        (state) => state?.getAllResearchSectionsBySectionName
    );
    const { updateResearchSection } = useSelector(
        (state) => state?.updateResearchSection
    );
    const { addResearchSection } = useSelector(
        (state) => state?.addResearchSection
    );
    console.log(getAllResearchSectionsBySectionName, "getAllResearchSectionsBySectionName");

    useEffect(() => {
        const fetchData = async () => {
            const data1 = {
                data: {
                    page_name: "FellowshipsAndProjects Page",
                    section_name: "ECRICPhDFellowships section",
                },
                method: "post",
                apiName: `getAllResearchSectionsBySectionName`,
            };

            const responseData = await dispatch(
                actions.GETALLRESEARCHSECTIONSBYSECTIONNAME(data1)
            );
            console.log(responseData, "responseData");
            setResponseTableData(responseData?.payload);
        };

        fetchData();
    }, [addResearchSection, updateResearchSection]);

    useEffect(() => {
        const tempArr = [];

        responseTableData?.data?.map((data, index) => {
            return tempArr.push({
                id: data?.section_id,
            });
        });
        setRowTableData(tempArr);
    }, [getAllResearchSectionsBySectionName, responseTableData]);

    console.log(rowTableData, "rowTableDatattattata");

    const handleTableEdit = (id) => {
        console.log(id, "TableIddddd");

        const data1 = {
            data: {},
            method: "get",
            apiName: `getResearchSectionById/${id}`,
        };
        dispatch(actions.GETRESEARCHSECTIONBYID(data1));
    };

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
                <CustomTable
                    tableData={rowTableData}
                    title="ECRIC PhD Fellowships"
                    tableHeadData={tableHeadData}
                    tableEdit={true}
                    dataCreate={!getAllResearchSectionsBySectionName?.data?.length > 0}
                    modalName={ECRICPhDFellowshipsModal}
                    handleTableEdit={handleTableEdit}
                    editModalName={ECRICPhDFellowshipsModal}
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

export default ECRICPhDFellowships;
