import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { setHeaderName, setSubHeaderName } from "../../ReduxStore/Slices/headerSlice";



function CustomTab({ tabs }) {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setHeaderName("Content Management"));
    dispatch(setSubHeaderName("About us"));
  }, [dispatch]);

  // ✅ Dynamic Tabs List

  return (
    <div>
      <Box
        sx={{
          maxWidth: { xs: 320, sm: "100%", md: "100%" },
          bgcolor: "background.paper",
          color: "#6B3C58",
          p: 1,
        }}
      >
        <Tabs
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable tabs"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#6B3C58",
              height: "3px",
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={tab.label}
              label={tab.label}
              sx={{
                fontSize: "16px",
                textTransform: "none",
                fontWeight: value === index ? "bold" : "normal",
                color: value === index ? "#6B3C58" : "black",
                borderBottom: value === index ? "3px solid #6B3C58" : "none",
                "&.Mui-selected": { color: "#6B3C58" },
                "&:hover": { color: "#6B3C58" },
              }}
            />
          ))}
        </Tabs>
      </Box>

      {/* ✅ Dynamic Component Rendering */}
      <Box sx={{ py: 2 }}>{tabs[value]?.component}</Box>
    </div>
  );
}

export default CustomTab;
