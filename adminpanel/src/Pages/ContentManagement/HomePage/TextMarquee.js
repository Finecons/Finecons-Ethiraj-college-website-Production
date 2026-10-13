import React, { useEffect, useState } from "react";
import CustomTable from "../../../Components/Table/CustomTable";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import { toast, ToastContainer } from "react-toastify";
import "../../../Components/ModalCss/BannerinputGetModal.css";
import MarqueeModal from "./Modal/MarqueeModal";

const TextMarquee = () => {
  const tableHeadData = ["S.No", "Title", "Link", "Icon"];

  const dispatch = useDispatch();

  const [responseTableData, setResponseTableData] = useState([]);
  const [rowTableData, setRowTableData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const { getAllMarquees } = useSelector(
    (state) => state?.getAllMarquees
  );
  const { addMarquee } = useSelector(
    (state) => state?.addMarquee
  );
  const { updateMarquee } = useSelector(
    (state) => state?.updateMarquee
  );
  const { deleteMarquee } = useSelector(
    (state) => state?.deleteMarquee
  );

  console.log(getAllMarquees, "getAllMarquees");

  // Fetch all marquees
  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: `getAllMarquees`,
      };

      const responseData = await dispatch(
        actions.GETALLMARQUEES(data1)
      );
      console.log(responseData, "responseData");
      setResponseTableData(responseData?.payload);
    };

    fetchData();
  }, [dispatch, addMarquee, updateMarquee, deleteMarquee]);

  // Transform marquee data to table format
  useEffect(() => {
    const tempArr = [];

    responseTableData?.data?.map((data, index) => {
      return tempArr.push({
        id: data?.marquee_id,
        title: data?.text || '--',
        link: data?.link || '--',
      });
    });
    setRowTableData(tempArr);
  }, [responseTableData]);

  console.log(rowTableData, "rowTableData");

  const handleTableEdit = (id) => {
    console.log(id, "MarqueeId");

    const data1 = {
      data: {},
      method: "get",
      apiName: `getMarqueeById/${id}`,
    };
    dispatch(actions.GETMARQUEEBYID(data1));
    setOpenModal(true);
  };

  const handleTableDelete = async (id) => {
    console.log(id, "Delete ID");
    
    const data1 = {
      data: {},
      method: "delete",
      apiName: `deleteMarquee/${id}`,
    };
    
    const responseData = await dispatch(actions.DELETEMARQUEE(data1));
    
    if (responseData?.payload?.message === "Marquee soft deleted successfully.") {
      toast.success(responseData?.payload?.message);
      // Refresh the marquee list
      const fetchData = {
        data: {},
        method: "get",
        apiName: `getAllMarquees`,
      };
      dispatch(actions.GETALLMARQUEES(fetchData));
    } else {
      toast.error(responseData?.payload?.message || "Failed to delete marquee");
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <CustomTable
          tableData={rowTableData}
          title="Text Marquee"
          tableHeadData={tableHeadData}
          tableEdit={true}
          tableDelete={true}
          // dataCreate={!getAllMarquees?.data?.length > 0}
          dataCreate={true}
          modalName={MarqueeModal}
          handleTableEdit={handleTableEdit}
          editModalName={MarqueeModal}
          handleTableDataDelete={handleTableDelete}
          openModal={openModal}
          setOpenModal={setOpenModal}
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

export default TextMarquee;
