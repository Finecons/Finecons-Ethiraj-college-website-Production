import React, { useEffect, useState } from "react";
import CustomTable from "../../../Components/Table/CustomTable";
// import BannerinputGetModal from '../../Modal/BannerModal/BannerinputGetModaldal';
import { Grid } from "@mui/material";
// import BannerinputGetModal from '../../../CommonModal/BannerModal/BannerinputGetModal';
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import { toast, ToastContainer } from "react-toastify";
import "../../../Components/ModalCss/BannerinputGetModal.css";
// import LevelOfStudyModal from "./Modal/LevelOfStudyModal";
import { updateProgrammeLevelAction } from "../../../ReduxStore/Slices/ProgramLevel/updateProgrammeLevel";
import GalleryModal from "./Modal/GalleryModal";
// import LandingPage from '../../Preview/LandingPage';
// import PreviewComponent from "../../PreviewComponent/PreviewComponent";
// import StakeNowMainPage from "../../ContentManagementStakeNowPreview/Banner/StakeNowMainPage";
// import BannerinputGetModal from "../Modal/Banner/BannerinputGetModal";

const Gallery = () => {
  // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  // // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
  // const role = sessionStorage.getItem("role")
  // csonole

  // const tableData = role === "superAdmin"
  //   ? [{ title: 'The Best Gold', secondtext: 'Staking Company', subtext: 'Lorem Ipsum is simply dummy text of the...', documents: "banner.jpg" }]
  //   : [];

  const tableHeadData = ["S.No"];

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
          section_name: "Gallery section"
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
          title="Gallery"
          tableHeadData={tableHeadData}
          //   modalName={BannerinputGetModal}
          //   editModalName={BannerinputGetModal}

          // const permissions = JSON.parse(sessionStorage.getItem("permissions"));
          // tableView={true}
          //   modalVeiwName={PreviewComponent}
          //   ModalPreviewComponent1={StakeNowMainPage}
          // handleTableDataDelete={handleTableDataDelete}

          // tableDelete={true}
          tableEdit={true}
          dataCreate={!getAllHomeSectionsBySectionName?.data?.length > 0}
          //   apiBasedName="stakeNowBannerInputModal"
          //   tableData={rowTableData}
          //   title="Banner"
          //   tableHeadData={tableHeadData}
          modalName={GalleryModal}
          handleTableEdit={handleTableEdit}
          editModalName={GalleryModal}
        //   handleTableDataDelete={handleTableDataDelete}
        />
      </Grid>
      
    </Grid>
  );
};

export default Gallery;
