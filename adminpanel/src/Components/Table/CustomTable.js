// // // import React, { useState } from 'react';
// // // import {
// // //   Table,
// // //   TableBody,
// // //   TableCell,
// // //   TableContainer,
// // //   TableHead,
// // //   TableRow,
// // //   Paper,
// // //   IconButton,
// // //   Typography,
// // //   Box,
// // //   Grid,
// // //   Menu,
// // //   MenuItem,
// // //   ListItemIcon,
// // //   ListItemText,
// // //   Divider,
// // //   Button,
// // // } from '@mui/material';
// // // import { HiDownload, HiPencil } from 'react-icons/hi';

// // // import { BsThreeDotsVertical } from "react-icons/bs";
// // // import { FaEye } from "react-icons/fa6";
// // // import { FaFileDownload } from "react-icons/fa";
// // // import { BiPlus } from 'react-icons/bi';
// // // import { FaSquarePlus } from "react-icons/fa6";

// // // const CustomTable = ({ tableData, tableHeadData }) => {
// // //   const rowsPerPage = 5;

// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [anchorEl, setAnchorEl] = useState(null);

// // //   const handlePageChange = (event, page) => setCurrentPage(page);

// // //   // Handle download of table data

// // //   // Handle dropdown menu
// // //   const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
// // //   const handleMenuClose = () => setAnchorEl(null);

// // //   return (
// // //     <Grid container >

// // //       <Grid item xs={12}
// // //         sx={{ width: "100px",overflow:"auto" }}
// // //       >
// // //         <Grid display="flex" justifyContent="space-between" alignItems="center" mb={1}>
// // //           <Typography variant='body1' sx={{ fontSize: "16px", fontWeight: "700" }}>Banner</Typography>

// // //           <Button
// // //             // variant="contained"
// // //             startIcon={<FaSquarePlus />}
// // //             sx={{
// // //               // backgroundColor: "#6B3C58",
// // //               textTransform: "none",
// // //               color: "#6B3C58",
// // //               // backgroundColor
// // //               fontSize: "16px",
// // //               fontWeight: "700",
// // //               // padding: "0px 40px",
// // //               // padding: { xs: "0px 20px", md: "0px 20px" },

// // //               minHeight: "30px",
// // //               borderRadius: "5px",
// // //               // border: "1px solid black",
// // //               // background: "white 0% 0% no-repeat padding-box",
// // //               // "&:hover": {
// // //               //     backgroundColor: "#6B3C58",
// // //               // },
// // //             }}
// // //           >
// // //             Create
// // //           </Button>
// // //         </Grid>
// // //         <TableContainer component={Paper}>
// // //           <Table>
// // //             <TableHead>
// // //               <TableRow sx={{ background: '#6B3C58' }}>
// // //                 {tableHeadData.map((data, index) => (
// // //                   <TableCell key={index}
// // //                     // sx={{ color: 'white', padding: '8px' }}
// // //                     sx={{
// // //                       color: 'white',
// // //                       padding: '8px',
// // //                       whiteSpace: 'nowrap',  // Prevents text from wrapping
// // //                       overflow: 'hidden',    // Hides overflow text
// // //                       textOverflow: 'ellipsis', // Adds ellipsis for overflow text
// // //                       textAlign: 'left',     // Align text to the left (adjust as needed)
// // //                       // width: '100%'          // Ensures the cell takes full width
// // //                     }}
// // //                   >
// // //                     <Typography variant='subtitle2'>
// // //                       {data}
// // //                     </Typography>

// // //                   </TableCell>
// // //                 ))}
// // //               </TableRow>
// // //             </TableHead>
// // //             <TableBody>
// // //               {paginatedCustomers.map((customer, index) => (
// // //                 <TableRow
// // //                   key={customer.id}
// // //                   sx={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F7F7F7' }}
// // //                 >
// // //                   <TableCell sx={{
// // //                     // color: '#7A7A7A', padding: '8px'
// // //                     color: '#7A7A7A', padding: '8px',
// // //                     whiteSpace: 'nowrap',  // Prevents text from wrapping
// // //                     overflow: 'hidden',    // Hides overflow text
// // //                     textOverflow: 'ellipsis', // Adds ellipsis for overflow text
// // //                     textAlign: 'left',     // Align text to the left (adjust as needed)
// // //                     // width: '100%'
// // //                   }}>
// // //                     <Typography variant='body1'>
// // //                       {(currentPage - 1) * rowsPerPage + index + 1}

// // //                     </Typography>
// // //                   </TableCell>
// // //                   {Object.keys(customer).map(
// // //                     (key) =>
// // //                       key !== 'id' && (
// // //                         <TableCell key={key} sx={{
// // //                           color: '#7A7A7A', padding: '8px',
// // //                           whiteSpace: 'nowrap',  // Prevents text from wrapping
// // //                           overflow: 'hidden',    // Hides overflow text
// // //                           textOverflow: 'ellipsis', // Adds ellipsis for overflow text
// // //                           textAlign: 'left',     // Align text to the left (adjust as needed)
// // //                           // width: '100%'
// // //                         }}>
// // //                           <Typography variant='body1'>
// // //                             {customer[key]}
// // //                           </Typography>

// // //                         </TableCell>
// // //                       )
// // //                   )}
// // //                   <TableCell sx={{ padding: '8px' }}>
// // //                     <IconButton onClick={handleMenuOpen} color="black">
// // //                       <BsThreeDotsVertical fontSize="14px" />
// // //                     </IconButton>
// // //                     <Menu
// // //                       anchorEl={anchorEl}
// // //                       open={Boolean(anchorEl)}
// // //                       onClose={handleMenuClose}
// // //                       sx={{
// // //                         '& .MuiPaper-root': {
// // //                           boxShadow: 'none',
// // //                           border: "1px solid black",
// // //                           fontSize: "10px"
// // //                         },
// // //                       }}
// // //                     >
// // //                       <MenuItem
// // //                         // onClick={handleDownload}
// // //                         sx={{ boxShadow: 'none', fontSize: '10px' }}>
// // //                         <ListItemIcon>
// // //                           <FaFileDownload style={{ fontSize: "16px", color: "#6B3C58" }} />
// // //                         </ListItemIcon>
// // //                         <ListItemText primary="Download Certificate"
// // //                           sx={{

// // //                             '& .MuiTypography-root': {
// // //                               fontSize: "15px"
// // //                             }
// // //                           }}
// // //                         />
// // //                       </MenuItem>
// // //                       <Divider />
// // //                       <MenuItem onClick={handleMenuClose} sx={{ boxShadow: 'none', fontSize: '10px' }}>
// // //                         <ListItemIcon>
// // //                           <FaEye style={{ fontSize: "16px", color: "#6B3C58" }} />
// // //                         </ListItemIcon>
// // //                         <ListItemText primary="View"
// // //                           sx={{

// // //                             '& .MuiTypography-root': {
// // //                               fontSize: "15px"
// // //                             }
// // //                           }} />
// // //                       </MenuItem>
// // //                     </Menu>
// // //                   </TableCell>
// // //                 </TableRow>
// // //               ))}
// // //             </TableBody>
// // //           </Table>
// // //         </TableContainer>
// // //       </Grid>
// // //     </Grid>
// // //   );
// // // };

// // // export default CustomTable;

// // import React, { useState } from 'react';
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Paper,
// //   IconButton,
// //   Typography,
// //   Grid,
// //   Menu,
// //   MenuItem,
// //   ListItemIcon,
// //   ListItemText,
// //   Divider,
// //   Button,
// //   TablePagination,
// // } from '@mui/material';
// // import { BsThreeDotsVertical } from 'react-icons/bs';
// // import { FaEye, FaPencil, FaSquarePlus } from 'react-icons/fa6';
// // import { BiEdit, BiPlusCircle } from 'react-icons/bi';
// // import { FaEdit } from 'react-icons/fa';
// // import BannerinputGetModal from '../../Pages/ContentManagement/Home/Modal/BannerinputGetModal';

// // const CustomTable = ({ tableData, tableHeadData,modalName: ModalComponent,title }) => {
// //   const rowsPerPage = 5;
// //   const [currentPage, setCurrentPage] = useState(0);
// //   const [anchorEl, setAnchorEl] = useState(null);

// //   // Handle pagination
// //   const handlePageChange = (event, newPage) => {
// //     setCurrentPage(newPage);
// //   };

// //   const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
// //   const handleMenuClose = () => setAnchorEl(null);

// //   // Paginated data
// //   // const paginatedData = tableData.slice(
// //   //   currentPage * rowsPerPage,
// //   //   currentPage * rowsPerPage + rowsPerPage
// //   // );
// //   const [isBannerInputModalOpen, setBannerInputModalOpen] = React.useState(false);

// //   const handleBannerInputOpenModal = (id, heading) => {
// //     setBannerInputModalOpen(true);

// //   };

// //   // Function to handle modal close
// //   const handleBannerInputCloseModal = () => {
// //     setBannerInputModalOpen(false);

// //   };

// //   return (
// //     <Grid container sx={{
// //       background: "white", borderRadius: "5px",
// //       mt: 1, px: 2, pb: 2
// //     }}>
// //       <Grid
// //         item
// //         xs={12}
// //         sx={{ width: '100%', overflow: 'auto' }}
// //       >
// //         <Grid display="flex" justifyContent="space-between" alignItems="center" mb={1}>
// //           <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: '700' }}>
// //            {title}
// //           </Typography>
// //           <Button
// //             onClick={() => { handleBannerInputOpenModal() }}
// //             startIcon={<FaSquarePlus />}
// //             sx={{
// //               textTransform: 'none',
// //               color: '#6B3C58',
// //               fontSize: '16px',
// //               fontWeight: '700',
// //               minHeight: '30px',
// //               borderRadius: '5px',
// //             }}
// //           >
// //             Create
// //           </Button>
// //         </Grid>
// //         <TableContainer component={Paper}>
// //           <Table>
// //             <TableHead>
// //               <TableRow sx={{ background: '#6B3C58' }}>
// //                 {tableHeadData.map((header, index) => (
// //                   <TableCell
// //                     key={index}
// //                     sx={{
// //                       color: 'white',
// //                       padding: '8px',
// //                       fontSize: "14px",
// //                       whiteSpace: 'nowrap',
// //                       overflow: 'hidden',
// //                       textOverflow: 'ellipsis',
// //                       textAlign: 'left'

// //                     }}
// //                   >
// //                     <Typography variant="subtitle2" sx={{ fontSize: "15px" }}>{header}</Typography>
// //                   </TableCell>
// //                 ))}
// //                 <TableCell sx={{
// //                   color: 'white', padding: '8px',
// //                   fontSize: "15px",

// //                 }}>Actions</TableCell>
// //               </TableRow>
// //             </TableHead>
// //             <TableBody>
// //               {tableData.map((row, index) => (
// //                 <TableRow
// //                   key={row.id || index}
// //                   sx={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F7F7F7' }}
// //                 >
// //                   <TableCell>
// //                     <Typography variant="body1">
// //                       {currentPage * rowsPerPage + index + 1}
// //                     </Typography>
// //                   </TableCell>
// //                   {Object.keys(row).map(
// //                     (key) =>
// //                       key !== 'id' && (
// //                         <TableCell key={key} sx={{
// //                           color: '#7A7A7A', padding: '8px', fontSize: "13px",
// //                           // whiteSpace: 'nowrap',
// //                           // overflow: 'hidden',
// //                           // textOverflow: 'ellipsis',
// //                           // textAlign: 'left'
// //                         }}>
// //                           <Typography variant="body1" sx={{ fontSize: "14px" }}>{row[key]}</Typography>
// //                         </TableCell>
// //                       )
// //                   )}
// //                   <TableCell>
// //                     <FaPencil style={{ fontSize: '16px', color: '#6B3C58', marginRight: "10px" }} />
// //                     <FaEye style={{ fontSize: '16px', color: '#6B3C58' }} />

// //                   </TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //         {/* <TablePagination
// //           component="div"
// //           count={tableData.length}
// //           page={currentPage}
// //           onPageChange={handlePageChange}
// //           rowsPerPage={rowsPerPage}
// //           rowsPerPageOptions={[]}
// //         /> */}

// //         {/* <ModalComponent open={isBannerInputModalOpen} onClose={handleBannerInputCloseModal} /> */}
// //         {ModalComponent && (
// //           <ModalComponent open={isBannerInputModalOpen} onClose={handleBannerInputCloseModal} />
// //         )}
// //       </Grid>
// //     </Grid>
// //   );
// // };

// // export default CustomTable;

// import React, { useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Typography,
//   Grid,
//   Button,
//   TablePagination,
//   Pagination,
// } from '@mui/material';
// import { FaEye, FaPencil, FaSquarePlus } from 'react-icons/fa6';

// const CustomTable = ({ tableData, tableHeadData, modalName: ModalComponent, title }) => {
//   const rowsPerPage = 3; // Display only 3 rows per page
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isBannerInputModalOpen, setBannerInputModalOpen] = useState(false);

//   const handlePageChange = (event, newPage) => {
//     setCurrentPage(newPage);
//   };

//   const handleBannerInputOpenModal = () => {
//     setBannerInputModalOpen(true);
//   };

//   const handleBannerInputCloseModal = () => {
//     setBannerInputModalOpen(false);
//   };

//   // Paginated data
//   const paginatedData = tableData.slice(
//     currentPage * rowsPerPage,
//     currentPage * rowsPerPage + rowsPerPage
//   );

//   return (

//     <Grid
//       container
//       xs={12}
//       sx={{ background: 'white', borderRadius: '5px', mt: 1, px: 2, pb: 2 }}

//     >
//       <Grid item xs={12} sx={{ width: '100%' }}>
//         <Grid display="flex" justifyContent="space-between" alignItems="center" mb={1}>
//           <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: '700' }}>
//             {title}
//           </Typography>
//           <Button
//             onClick={handleBannerInputOpenModal}
//             startIcon={<FaSquarePlus />}
//             sx={{
//               textTransform: 'none',
//               color: '#6B3C58',
//               fontSize: '16px',
//               fontWeight: '700',
//               minHeight: '30px',
//               borderRadius: '5px',
//             }}
//           >
//             Create
//           </Button>
//         </Grid>
//         <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
//           <Table>
//             <TableHead>
//               <TableRow sx={{ background: '#6B3C58' }}>
//                 {tableHeadData.map((header, index) => (
//                   <TableCell
//                     key={index}
//                     sx={{
//                       color: 'white',
//                       padding: '8px',
//                       fontSize: '14px',
//                       whiteSpace: 'nowrap',
//                       textOverflow: 'ellipsis',
//                     }}
//                   >
//                     <Typography variant="subtitle2" sx={{ fontSize: '15px' }}>
//                       {header}
//                     </Typography>
//                   </TableCell>
//                 ))}
//                 <TableCell
//                   sx={{ color: 'white', padding: '8px', fontSize: '15px' }}
//                 >
//                   Actions
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {paginatedData.map((row, index) => (
//                 <TableRow
//                   key={row.id || index}
//                   sx={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F7F7F7' }}
//                 >
//                   <TableCell>
//                     <Typography variant="body1">
//                       {currentPage * rowsPerPage + index + 1}
//                     </Typography>
//                   </TableCell>
//                   {Object.keys(row).map(
//                     (key) =>
//                       key !== 'id' && (
//                         <TableCell
//                           key={key}
//                           sx={{
//                             color: '#7A7A7A',
//                             padding: '8px',
//                             fontSize: '13px',
//                             whiteSpace: 'nowrap',
//                             textOverflow: 'ellipsis',
//                           }}
//                         >
//                           <Typography variant="body1" sx={{ fontSize: '14px' }}>
//                             {row[key]}
//                           </Typography>
//                         </TableCell>
//                       )
//                   )}
//                   <TableCell sx={{
//                     whiteSpace: 'nowrap',
//                     textOverflow: 'ellipsis'
//                   }}>
//                     <FaPencil
//                       style={{ fontSize: '16px', color: '#6B3C58', marginRight: '10px' }}
//                     />
//                     <FaEye style={{ fontSize: '16px', color: '#6B3C58' }} />
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         <Pagination
//           count={pageCount}
//           page={currentPage}
//           onChange={handlePageChange}
//           siblingCount={1}
//           boundaryCount={1}
//           showFirstButton
//           showLastButton
//           shape="rounded"
//         />
//         {ModalComponent && (
//           <ModalComponent open={isBannerInputModalOpen} onClose={handleBannerInputCloseModal} />
//         )}
//       </Grid>
//     </Grid>
//   );
// };

// export default CustomTable;

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Grid,
  Button,
  Pagination,
  Box,
  TextField,
  InputAdornment,
  ModalPreviewComponent,
  FormControl,
} from "@mui/material";
import { FaEye, FaPencil, FaSquarePlus } from "react-icons/fa6";
import { RiEyeLine } from "react-icons/ri";
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { RiPencilLine } from "react-icons/ri";
import { setCustomerId } from "../../ReduxStore/Slices/Operator/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { setTableGetId } from "../../ReduxStore/Slices/TableId/TableIdGetSlice";
import { toast, ToastContainer } from "react-toastify";
import actions from "../../ReduxStore/actions";

const CustomTable = ({
  notModalTable,
  tableSearch,
  tableView,
  tableDelete,
  tableEdit,
  rowPerPage,
  editData,
  section_name,

  tableData,
  tableHeadData,
  modalName: ModalComponent,
  editModalName: EditModalComponent,
  title,
  modalHeadingName,
  purchaseButton,
  dataCreate,
  options,
  isRejectTextShowModal,
  tierStatusBtnShow,
  handleTableDataDelete,
  ModalPreviewComponent1: ModalPreviewComponent,
  IsShowRejectApproveButton,
  // ModalViewComponent1,
  modalVeiwName: ModalViewComponent,
  modalViewHeadingName,
  allShowModal,
  userApprovalModel,
  handleTableEdit,
}) => {
  // const rowsPerPage = rowPerPage ? rowPerPage : 5; // Display only 3 rows per page
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [currentPage, setCurrentPage] = useState(0);
  const [isBannerInputModalOpen, setBannerInputModalOpen] = useState(false);
  const [isTableViewModalOpen, setTableViewModalOpen] = useState(false);

  console.log(tableData, "tableDatatableData");
  // modal for operator user Registration

  const dispatch = useDispatch();
  const customerId = useSelector((state) => state.customer.customerId);

  const TableId = useSelector((state) => state.Table.TableId);

  // console.log(TableId, "customeridddddddddddddddddddddd");

  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [openModal6, setOpenModal6] = useState(false);

  const handleOpenModal1 = () => setOpenModal1(true);
  const handleCloseModal1 = () => setOpenModal1(false);

  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);

  const handleOpenModal3 = () => {
    setOpenModal3(true);
  };

  const handleCustomerIdGet = (id) => {
    dispatch(setCustomerId(id)); // Example ID
    console.log(id, "111111111111111111");
  };

  const handleCloseModal3 = () => setOpenModal3(false);

  const handleOpenModal4 = () => setOpenModal4(true);
  const handleCloseModal4 = () => setOpenModal4(false);

  const handleOpenModal5 = () => setOpenModal5(true);
  const handleCloseModal5 = () => setOpenModal5(false);

  const handleOpenModal6 = () => setOpenModal6(true);
  const handleCloseModal6 = () => setOpenModal6(false);

  // -----------------------modal for operator user registraion is end---------------------

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage - 1); // Adjust for 0-based `currentPage`
  };

  const handleBannerInputOpenModal = () => {
    setBannerInputModalOpen(true);
  };

  const handleBannerInputCloseModal = () => {
    setBannerInputModalOpen(false);
  };

  const handleViewOpenModal = () => {
    setTableViewModalOpen(true);
  };

  const viewCustomerApprove = (id) => {
    dispatch(setCustomerId(id)); // Example ID
    dispatch(setTableGetId(id)); // Example ID
  };

  const handlehandleViewCloseModal = () => {
    setTableViewModalOpen(false);
  };

  // ======================

  // ======================

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const handleEditOpenModal = (id) => {
    console.log(id, "customerIdddddddd");
    dispatch(setCustomerId(id)); // Example ID

    dispatch(setTableGetId(id)); // Example ID

    setEditModalOpen(true);
  };

  const handleEditCloseModal = () => {
    setEditModalOpen(false);
  };

  const pageCount = Math.ceil(tableData.length / rowsPerPage);

  // Paginated data

  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(tableData);
  console.log(data, "datattatata");

  useEffect(() => {
    if (tableData) {
      setData(tableData);
    }
  }, [tableData]);
  console.log(data, "datattatata1111");

  // Handle search functionality
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm)
    )
  );
  console.log(filteredData, "filteredDatafilteredData");

  const paginatedData = filteredData.slice(
    currentPage * rowsPerPage,
    currentPage * rowsPerPage + rowsPerPage
  );
  console.log(paginatedData, "paginatedDatapaginatedData");

  // Handle delete functionality
  const handleDeleteRow = async (index, id) => {
    if (!id) {
      const updatedData = [...data];
      updatedData.splice(index + currentPage * rowsPerPage, 1);
      setData(updatedData);
    } else {
      handleTableDataDelete(id);
      // console.log(id, "deleteIddd")
      // const data1 = {
      //   data: {},
      //   method: "delete",
      //   apiName: `softDeleteAuthUser/${id}`,
      // };
      // const responseData = await dispatch(actions.SOFTDELETEAUTHUSER(data1));
      // if (responseData?.payload?.message === "User deleted successfully (soft delete).") {
      //   toast.success("User inactive sucessfully!")
      // } else {
      //   toast.error(responseData?.payload?.message)

      // }
    }
  };

  const handleChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Grid
      container
      size={{ xs: 12 }}
      sx={{ background: "white", borderRadius: "5px", mt: 1, px: 2, pb: 2 }}
    >
      {/* <ToastContainer
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
      /> */}
      <Grid item  size={{xs:12}} sx={{ width: "100%"}}>
        <Grid
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={1}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              fontWeight: "700",
              // paddingTop: "5px"
            }}
          >
            {title}
          </Typography>

          <Grid>
            {/* {tierStatusBtnShow && <><Button
              onClick={() => ActivateLastTierFn()}
              // startIcon={<FaSquarePlus />}
              sx={{
                textTransform: "none",
                background: "#6B3C58",
                color: "white",
                fontSize: "14px",
                // fontWeight: "700",
                minHeight: "30px",
                borderRadius: "5px",
                marginRight:"10px"
              }}
            >
              ActivateLastTier
            </Button>

              <Button
                onClick={() => InactivateLastTierFn()}
                // startIcon={<FaSquarePlus />}
                sx={{
                  textTransform: "none",
                  background: "#6B3C58",
                  color: "white",
                  fontSize: "14px",
                  // fontWeight: "700",
                  minHeight: "30px",
                  borderRadius: "5px",
                }}
              >
                InactivateLastTier
              </Button></>} */}
            {dataCreate && (
              <Button
                onClick={
                  allShowModal ? handleOpenModal1 : handleBannerInputOpenModal
                }
                startIcon={<FaSquarePlus />}
                sx={{
                  textTransform: "none",
                  color: "#6B3C58",
                  fontSize: "16px",
                  fontWeight: "700",
                  minHeight: "30px",
                  borderRadius: "5px",
                }}
              >
                Create
              </Button>
            )}
          </Grid>

          {tableSearch && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 1,
                mb: 1,
              }}
            >
              <TextField
                placeholder="Search..."
                variant="outlined"
                fullWidth
                size="small"
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{
                  width: { xs: "100px", md: "150px" },

                  borderColor: "#6B3C58",
                  // mb: 2,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1.5px solid #6B3C58",
                    // p:"2px",
                    // height: '42px'
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "5px",
                    // borderColor: "#6B3C58",
                    // border: "2px solid #6B3C58",

                    backgroundColor: "white",
                    // backgroundColor: "#f9f9f9",
                    "&:hover fieldset": {
                      borderColor: "#6B3C58",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#6B3C58",
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AiOutlineSearch
                        style={{ color: "#6B3C58", fontSize: "20px" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          )}
        </Grid>
        <Grid></Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // mb: 1,
            // mt: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              mb: 1,
              mt: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{ marginRight: 1, color: "#7A7A7A" }}
            >
              Show
            </Typography>
            <FormControl>
              {/* <label htmlFor="items-per-page">Items</label> */}
              <select
                style={{ height: "30px", color: "#7A7A7A" }}
                id="items-per-page"
                value={rowsPerPage}
                onChange={handleChange}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </FormControl>
            <Typography
              variant="body1"
              sx={{ marginLeft: 1, color: "#7A7A7A" }}
            >
              items
            </Typography>
          </Box>
          <Grid>
            {tierStatusBtnShow && (
              <>
                <Button
                  // onClick={() => ActivateLastTierFn()}
                  // startIcon={<FaSquarePlus />}
                  sx={{
                    textTransform: "none",
                    // background: "#6B3C58",
                    border: "1px solid #6B3C58",
                    color: "#6B3C58",
                    fontSize: "14px",
                    // fontWeight: "700",
                    minHeight: "30px",
                    borderRadius: "5px",
                    marginRight: "10px",
                  }}
                >
                  ActivateLastTier
                </Button>

                <Button
                  // onClick={() => InactivateLastTierFn()}
                  // startIcon={<FaSquarePlus />}
                  sx={{
                    textTransform: "none",
                    // background: "#6B3C58",
                    // color: "white",
                    border: "1px solid #6B3C58",
                    color: "#6B3C58",
                    fontSize: "14px",
                    // fontWeight: "700",
                    minHeight: "30px",
                    borderRadius: "5px",
                  }}
                >
                  InactivateLastTier
                </Button>
              </>
            )}
          </Grid>
        </Grid>
        <TableContainer
          component={Paper}
          sx={{ overflowX: "auto", boxShadow: "none" }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ background: "#6B3C58" }}>
                {tableHeadData.map((header, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      color: "white",
                      padding: "8px",
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ fontSize: "15px" }}>
                      {header}
                    </Typography>
                  </TableCell>
                ))}
                <TableCell
                  ariant="subtitle2"
                  sx={{ color: "white", padding: "8px", fontSize: "15px" }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((row, index) => (
                <TableRow
                  key={row.id || index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#FFFFFF",
                  }}
                >
                  <TableCell
                    sx={{
                      borderBottomColor: "#6B3C58",
                    }}
                  >
                    <Typography variant="body1">
                      {currentPage * rowsPerPage + index + 1}
                    </Typography>
                  </TableCell>
                  {Object.keys(row).map(
                    (key) =>
                      key !== "id" &&
                      key !== "section_id" &&
                      key !== "customer_id" &&
                      key !== "purchase_id" &&
                      key != "plan_id" &&
                      key !== "role_id" &&
                      key !== "user_id" && (
                        <TableCell
                          key={key}
                          sx={{
                            color: "#707070",
                            fontSize: "13px",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            borderBottomColor: "#6B3C58",
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: "14px",
                              color:
                                row[key] === "Approved"
                                  ? "#1FC45B"
                                  : row[key] === "Pending"
                                  ? "#707070"
                                  : row[key] === "Reject"
                                  ? "red"
                                  : row[key] === "Received"
                                  ? "#1FC45B"
                                  : "inherit", // Default color
                            }}
                          >
                            {key === "stake_starting" ||
                            key === "stake_maturity"
                              ? row[key] && !isNaN(new Date(row[key]))
                                ? format(new Date(row[key]), "MMMM d, yyyy")
                                : "Invalid Date"
                              : // : row[key]}
                              row[key]?.length > 100
                              ? `${row[key].slice(0, 100)}...`
                              : row[key]}
                          </Typography>
                        </TableCell>
                      )
                  )}

                  {purchaseButton && (
                    <TableCell
                      sx={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        borderBottomColor: "#6B3C58",
                      }}
                    >
                      <Button
                        onClick={() => {
                          handleOpenModal3();
                          handleCustomerIdGet(row.customer_id);
                          console.log(row.customer_id, "curstomerrrrrrrr");
                        }}
                        sx={{
                          color: "white",
                          background: "#6B3C58",
                          border: "1px solid #6B3C58",
                          textTransform: "none",
                          padding: "1px",
                          fontSize: "13px",
                        }}
                      >
                        Purchase
                      </Button>
                    </TableCell>
                  )}

                  <TableCell
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      borderBottomColor: "#6B3C58",
                    }}
                  >
                    {tableEdit && (
                      <RiPencilLine
                        onClick={() => {
                          if (handleTableEdit) {
                            handleTableEdit(row.id);
                          }
                          console.log(row?.id, "idddddddddddd");
                          handleEditOpenModal(
                            row.customer_id ||
                              row.plan_id ||
                              row.role_id ||
                              row.user_id ||
                              row.tier_id ||
                              row.section_id ||
                              null
                          );
                          // viewCustomerApprove(row.customer_id || null);
                        }}
                        style={{
                          fontSize: "16px",
                          color: "#ACB0BF",
                          marginRight: "10px",
                          cursor: "pointer",
                        }}
                      />
                    )}
                    {tableView && (
                      <RiEyeLine
                        onClick={() => {
                          handleViewOpenModal();
                          viewCustomerApprove(
                            row.customer_id ||
                              row.purchase_id ||
                              row.plan_id ||
                              row.section_id ||
                              null
                          );
                          // console.log(row.section_id, "section_id")
                        }}
                        style={{
                          fontSize: "16px",
                          marginRight: "10px",
                          color: "#ACB0BF",
                          cursor: "pointer",
                        }}
                      />
                    )}
                    {tableDelete && (
                      <AiOutlineDelete
                        onClick={() =>
                          handleDeleteRow(
                            row,
                            row.user_id || row.plan_id || row.section_id || row.id
                          )
                        }
                        style={{
                          fontSize: "16px",
                          color: "#ACB0BF",
                          cursor: "pointer",
                        }}
                      />
                    )}
                    {!tableEdit && !tableView && !tableDelete && "--"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Pagination
            count={pageCount}
            page={currentPage + 1}
            onChange={handlePageChange}
            siblingCount={1}
            boundaryCount={1}
            shape="rounded"
            sx={{
              mt: 2,
              "& .MuiPaginationItem-root": {
                color: "#6B3C58", // Default text color
                border: "1px solid #6B3C58", // Default border color
                "&:hover": {
                  backgroundColor: "transparent", // Removes hover background color
                },
                "&.Mui-selected": {
                  backgroundColor: "#6B3C58", // Selected background color
                  color: "white", // Selected text color
                  border: "none", // Remove border for selected items
                  "&:hover": {
                    backgroundColor: "#6B3C58", // Ensure hover does not change selected color
                  },
                },
              },
            }}
          />
        </Box>
        {ModalComponent && (
          <ModalComponent
            options={options}
            open={isBannerInputModalOpen}
            onClose={handleBannerInputCloseModal}
            modalHeadingName={modalHeadingName}
            editData={editData}
            section_name={section_name}
            ModalPreviewComponent={ModalPreviewComponent}
          />
        )}
        {EditModalComponent && (
          <EditModalComponent
            // options={options}
            open={isEditModalOpen}
            onClose={handleEditCloseModal}
            modalHeadingName={modalHeadingName}
            editData={editData}
            section_name={section_name}
            ModalPreviewComponent={ModalPreviewComponent}
          />
        )}
      

        {ModalViewComponent && (
          <ModalViewComponent
            ModalPreviewComponent={ModalPreviewComponent}
            userApprovalModel={userApprovalModel}
            notModalTable={notModalTable}
            open={isTableViewModalOpen}
            onClose={handlehandleViewCloseModal}
            modalViewHeadingName={modalViewHeadingName}
            IsShowRejectApproveButton={IsShowRejectApproveButton}
            isRejectTextShowModal={isRejectTextShowModal}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default CustomTable;
