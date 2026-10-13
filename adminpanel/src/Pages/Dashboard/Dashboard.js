import React, { useEffect, useState } from "react";
import StatusCard from "../../Components/StatusCard/StatusCard";
import { Button, Grid } from "@mui/material";
import toal_user_icon from "../../Assets/toal_user_icon.svg";
import total_refer_icon from "../../Assets/total_refer_icon.svg";
import total_register_icon from "../../Assets/total_register_icon.svg";
import gold_puschased_icon from "../../Assets/gold_puschased_icon.svg";
import toal_gold_matured_icon from "../../Assets/toal_gold_matured_icon.svg";
import total_redeem_icon from "../../Assets/total_redeem_icon.svg";
import { LuSquareChevronRight } from "react-icons/lu";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { CgChevronLeft, CgChevronLeftR, CgChevronRightR } from "react-icons/cg";

import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";
import {
  ArrowBack,
  ArrowForward,
  ArrowLeft,
  ArrowRight,
  ArrowRightAltOutlined,
} from "@mui/icons-material";
import GradientLineChart from "../../Components/GraphStake/GradientLineChart";
import { useDispatch } from "react-redux";
import {
  setHeaderName,
  setSubHeaderName,
} from "../../ReduxStore/Slices/headerSlice";

// Gold Stake Schemes Component
const GoldStakeSchemesData = [
  {
    header: "Member Profit",
    subheader: "Since Last Month",
    value: "+53411",
  },
  {
    header: "Overdue",
    subheader: "Since Last Month",
    value: "+53411",
  },
  {
    header: "Support",
    subheader: "Since Last Month",
    value: "+53411",
  },
  {
    header: "Dividents",
    subheader: "Since Last Month",
    value: "+53411",
  },
];

const GoldStakeSchemes = () => (
  <Card sx={{ padding: 2, boxShadow: 2, height: "350px" }}>
    <Typography variant="body1" fontWeight="bold" fontSize="17px">
      Gold Stake Schemes
    </Typography>
    <Divider sx={{ marginTop: 1, width: "100%" }} />

    {GoldStakeSchemesData.map((item, index) => (
      <>
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 1,
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: "500" }}
            >
              {item.header}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "11px", color: "#7A7A7A" }}
            >
              {item.subheader}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="#6B3C58"
            sx={{ fontSize: "12px", fontWeight: "500" }}
          >
            {item.value}
          </Typography>
          {/* <Divider /> */}
        </Box>

        <Divider sx={{ marginTop: 1, width: "100%" }} />
      </>
    ))}
  </Card>
);

// Referral Schemes Component
const ReferralSchemes = () => (
  <Card sx={{ paddingX: 2, py: 1, boxShadow: 2, height: "350px" }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="body1" fontWeight="bold" fontSize="17px">
        Referral Schemes
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <IconButton>
          <CgChevronRightR fontWeight="400" color="#6B3C58" />
        </IconButton>
        <IconButton>
          <CgChevronLeftR color="#6B3C58" />
        </IconButton>

        {/* <IconButton
                
                    variant="outlined" sx={{ border: "1px solid red", p: "0", borderRadius: "5px" }}><FaAngleRight /></IconButton>
                <IconButton
                    variant="outlined" sx={{ border: "1px solid red", p: "0", borderRadius: "5px" }}><FaAngleLeft /></IconButton> */}
      </Box>
    </Box>
    <Divider />
    {[
      {
        date: "14 Jan 2024",
        time: "09:30 am",
        type: "Transaction",
        status: "Disbursed",
      },
      {
        date: "13 Jan 2024",
        time: "12:30 am",
        type: "Transaction",
        status: "Top Up",
      },
      {
        date: "12 Jan 2024",
        time: "08:30 am",
        type: "Update",
        status: "Change Name",
      },
      {
        date: "11 Jan 2024",
        time: "03:30 pm",
        type: "Login",
        status: "Login Failed",
      },
      {
        date: "11 Jan 2024",
        time: "05:30 pm",
        type: "Login",
        status: "Login Failed",
      },
    ].map((entry, index) => (
      <>
        <Box
          key={index}
          sx={{
            marginBottom: 1,
            py: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box textAlign="start">
            <Typography variant="body2" color="#707070" fontSize="14px">
              {entry.date}{" "}
            </Typography>
            <Typography variant="body2" color="#6B3C58" fontSize="11px">
              {entry.time}
            </Typography>
          </Box>
          <Box textAlign="end">
            <Typography variant="body2" color="#707070" fontSize="14px">
              {entry.type}{" "}
            </Typography>
            <Typography variant="body2" color="#6B3C58" fontSize="11px">
              {entry.status}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ marginTop: 1, width: "100%" }} />
      </>
    ))}
  </Card>
);

// Total Gold Staked Component

const TotalGoldStaked = () => {
  // State to handle the selected dropdown value
  const [selectedDate, setSelectedDate] = useState("Today");
  // const [graphData, setGraphData] = useState({
  //     Today: {
  //         value: "$200.123",
  //         percentage: "+5.15(+20%)",
  //         stats: ['20% Growth', '40% Disbursed', '40% Withdraw']
  //     },
  //     Yesterday: {
  //         value: "$180.456",
  //         percentage: "+3.50(+15%)",
  //         stats: ['15% Growth', '50% Disbursed', '35% Withdraw']
  //     },
  // });

  const [graphData, setGraphData] = useState({
    Today: {
      value: "$200.123",
      percentage: "+5.15(+20%)",
      stats: ["20% Growth", "40% Disbursed", "40% Withdraw"],
      graph: [
        { name: "Point 1", value: 20 },
        { name: "Point 2", value: 40 },
        { name: "Point 3", value: 25 },
        { name: "Point 4", value: 50 },
        { name: "Point 5", value: 35 },
      ],
    },
    Yesterday: {
      value: "$180.456",
      percentage: "+3.50(+15%)",
      stats: ["15% Growth", "50% Disbursed", "35% Withdraw"],
      graph: [
        { name: "Point 1", value: 10 },
        { name: "Point 2", value: 100 },
        { name: "Point 3", value: 20 },
        { name: "Point 4", value: 45 },
        { name: "Point 5", value: 25 },
      ],
    },
  });

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderName("Dashboard"));
    dispatch(setSubHeaderName());
  }, [dispatch]);

  // Handler for dropdown change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const currentData = graphData[selectedDate];

  return (
    <Card
      sx={{
        paddingX: 2,
        py: 2,
        boxShadow: 2,
        height: "350px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" fontWeight="bold" fontSize="17px">
          Total Gold Staked
        </Typography>

        <Select
          value={selectedDate}
          onChange={handleDateChange}
          size="small"
          variant="outlined"
          sx={{
            width: "80px",
            fontSize: "13px",
            height: "30px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#6B3C58",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#6B3C58",
            },
            "& .MuiSelect-select": {
              color: "#6B3C58",
            },
          }}
        >
          <MenuItem value="Today">2024</MenuItem>
          <MenuItem value="Yesterday">2023</MenuItem>
        </Select>
      </Box>
      <Divider sx={{ marginTop: 1, width: "100%" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          color="black"
          sx={{ fontSize: "28px" }}
        >
          {currentData.value}
        </Typography>
        <Typography variant="body2" color="#6B3C58" fontSize="12px">
          {currentData.percentage}
        </Typography>
      </Box>
      {/* <GradientLineChart data={currentData} /> */}
      <GradientLineChart data={currentData.graph} />

      <Box
        sx={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}
      >
        {currentData.stats.map((stat, index) => (
          <Box key={index} textAlign="center">
            <Typography variant="body1" fontWeight="800">
              {stat.split(" ")[0]}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#6B3C58", fontSize: "12px" }}
            >
              {stat.split(" ")[1]}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
};
// // Main Dashboard Component
// const Dashboard = () => (
//   <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, padding: 2 }}>
//     <GoldStakeSchemes />
//     <ReferralSchemes />
//     <TotalGoldStaked />
//   </Box>
// );

// export default Dashboard;

const Dashboard = ({ setHeaderName }) => {
  useEffect(() => {
    // setHeaderName("DashBoard")
  }, []);

  return (
    <Grid container spacing={3}>
      {" "}
      {/* container with spacing */}
      <Grid item xs={12} md={4} sm={6}>
        {" "}
        {/* grid item with specified breakpoints */}
        <StatusCard
          icon={toal_user_icon}
          header="Total active Users"
          value="150"
        />
      </Grid>
      <Grid item xs={12} md={4} sm={6}>
        <StatusCard
          icon={total_refer_icon}
          header="Total Referral"
          total_referral={true}
          subheader1="Diamond"
          subheader2="Ruby"
          value1={120}
          value2={30}
        />
      </Grid>
      <Grid item xs={12} md={4} sm={6}>
        <StatusCard
          icon={total_register_icon}
          header="Total Registration"
          total_referral={true}
          subheader1="Self"
          subheader2="Operator"
          value1={120}
          value2={30}
        />
      </Grid>
      <Grid item xs={12} md={4} sm={6}>
        <StatusCard
          icon={gold_puschased_icon}
          header="Gold Purchased"
          value="150"
        />
      </Grid>
      <Grid item xs={12} md={4} sm={6}>
        <StatusCard
          icon={toal_gold_matured_icon}
          header="Total Gold Matured"
          value="150"
        />
      </Grid>
      <Grid item xs={12} md={4} sm={6}>
        <StatusCard
          icon={total_redeem_icon}
          header="Total Gold Redeemed"
          value="150"
        />
      </Grid>
      {/* Each card in its own grid item */}
      <Grid item xs={12} md={4} sm={6}>
        <GoldStakeSchemes />
      </Grid>
      <Grid item xs={12} md={4} sm={6}>
        <ReferralSchemes />
      </Grid>
      <Grid item xs={12} md={4} sm={6}>
        <TotalGoldStaked />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
