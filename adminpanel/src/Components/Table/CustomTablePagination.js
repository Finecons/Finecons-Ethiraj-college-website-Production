import React, { useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";

const CustomTablePagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage] = useState(10);

  const tableData = new Array(100).fill("").map((_, index) => `Row ${index + 1}`);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Your table component here */}
      <TablePagination
        component="div"
        count={tableData.length}
        page={currentPage}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[]}
        sx={{
          "& .MuiTablePagination-toolbar": {
            display: "flex",
            justifyContent: "space-between",
          },
          "& .MuiTablePagination-displayedRows": {
            display: "flex",
            alignItems: "center",
          },
          "& .MuiTablePagination-actions .MuiButtonBase-root": {
            border: "1px solid #ccc", // Add a border to the page number
            borderRadius: "4px",
            padding: "4px 8px",
            margin: "0 4px",
            minWidth: "32px",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            "&.Mui-disabled": {
              backgroundColor: "#f5f5f5",
            },
          },
        }}
      />
    </Box>
  );
};

export default CustomTablePagination;
