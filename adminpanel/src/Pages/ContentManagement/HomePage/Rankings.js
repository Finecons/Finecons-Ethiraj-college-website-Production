import React, { useEffect, useState } from "react";
import CustomTable from "../../../Components/Table/CustomTable";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import { toast, ToastContainer } from "react-toastify";
import "../../../Components/ModalCss/BannerinputGetModal.css";
// import LevelOfStudyModal from "./Modal/LevelOfStudyModal";
import RankingsModal from "./Modal/RankingsModal";

const Rankings = () => {


    const tableHeadData = ["S.No", 'Heading Title', 'Heading Second Text', 'Card Title', 'Count Title'];

    const dispatch = useDispatch();

    const [responseTableData, setResponseTableData] = useState([]);
    // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
    const [rowTableData, setRowTableData] = useState([]);
    console.log(rowTableData, "rowTableTAdatatattattat");


    const { getAllHomeSectionsBySectionName } = useSelector(
        (state) => state?.getAllHomeSectionsBySectionName
    );
    const { updateHomeSection } = useSelector(
        (state) => state?.updateHomeSection
    );
    const { addHomeSectionPost } = useSelector(
        (state) => state?.addHomeSectionPost
    );
    console.log(getAllHomeSectionsBySectionName, "getAllHomeSectionsBySectionName");
    useEffect(() => {
        const fetchData = async () => {
            const data1 = {
                data: {
                    section_name: "Rankings section"
                },
                method: "post",
                apiName: `getAllHomeSectionsBySectionName`,
            };

            const responseData = await dispatch(
                actions.GETALLHOMESECTIONSBYSECTIONNAME(data1)
            );
            console.log(responseData, "responseData");
            setResponseTableData(responseData?.payload);
        };

        fetchData();
    }, [addHomeSectionPost, updateHomeSection]);

    useEffect(() => {
        const tempArr = [];

        responseTableData?.data?.map((data, index) => {
            return tempArr.push({
                id: data?.section_id,
                title: data?.heading || '--',
                subtext: data?.content || '--',
                card_title: data?.additional_data?.card_design
                    ?.map(card => card?.title)
                    .filter(title => title) // Removes undefined or null values
                    .join(", "),
                card_count_text: data?.additional_data?.card_count
                    ?.map(card => card?.content)
                    .filter(content => content) // Removes undefined or null values
                    .join(", "),

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
            apiName: `getHomeSectionById/${id}`,
        };
        dispatch(actions.GETHOMESECTIONBYID(data1));
    };

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
                <CustomTable
                    // tableEdit="tableEdit"
                    // tableDelete="tableDelete"

                    tableData={rowTableData}
                    title="Rankings"
                    tableHeadData={tableHeadData}
                    tableEdit={true}
                    dataCreate={!getAllHomeSectionsBySectionName?.data?.length > 0}
                    modalName={RankingsModal}
                    handleTableEdit={handleTableEdit}
                    editModalName={RankingsModal}
                />
            </Grid>
            
        </Grid>
    );
};

export default Rankings;
