import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function NestedCustomTab({ mainTabs }) {
  const [mainValue, setMainValue] = React.useState(0);
  const [subValue, setSubValue] = React.useState(0);

  const currentTab = mainTabs[mainValue];
  const hasSubTabs = currentTab?.subTabs && currentTab.subTabs.length > 0;

  // Reset sub-tab to 0 when switching main tabs
  React.useEffect(() => {
    setSubValue(0);
  }, [mainValue]);

  return (
    <div>
      {/* Main Tabs */}
      <Box
        sx={{
          maxWidth: { xs: 320, sm: "100%", md: "100%" },
          bgcolor: "background.paper",
          color: "#6B3C58",
          p: 1,
          borderRadius: "8px",
        }}
      >
        <Tabs
          value={mainValue}
          onChange={(event, newValue) => setMainValue(newValue)}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="main scrollable tabs"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#6B3C58",
              height: "3px",
            },
          }}
        >
          {mainTabs.map((tab, index) => (
            <Tab
              key={tab.label}
              label={tab.label}
              sx={{
                fontSize: "16px",
                textTransform: "none",
                fontWeight: mainValue === index ? "bold" : "normal",
                color: mainValue === index ? "#6B3C58" : "black",
                borderBottom: mainValue === index ? "3px solid #6B3C58" : "none",
                "&.Mui-selected": { color: "#6B3C58" },
                "&:hover": { color: "#6B3C58" },
              }}
            />
          ))}
        </Tabs>
      </Box>

      {/* Sub Tabs (if available) */}
      {hasSubTabs && (
        <Box
          sx={{
            maxWidth: { xs: 320, sm: "100%", md: "100%" },
            bgcolor: "#ffffff",
            color: "#6B3C58",
            p: 1,
            // borderLeft: "4px solid #6B3C58",
            mt: 2,
            ml: 2,
            // borderRadius: "8px",
          }}
        >
          <Tabs
            value={subValue}
            onChange={(event, newValue) => setSubValue(newValue)}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="sub scrollable tabs"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#6B3C58",
                height: "2px",
              },
            }}
          >
            {currentTab.subTabs.map((subTab, index) => (
              <Tab
                key={subTab.label}
                label={subTab.label}
                sx={{
                  fontSize: "14px",
                  textTransform: "none",
                  fontWeight: subValue === index ? "bold" : "normal",
                  color: subValue === index ? "#6B3C58" : "black",
                  borderBottom: subValue === index ? "3px solid #6B3C58" : "none",
                  "&.Mui-selected": { color: "#6B3C58" },
                  "&:hover": { color: "#6B3C58" },
                }}
              />
            ))}
          </Tabs>
        </Box>
      )}

      {/* Content Rendering */}
      <Box sx={{ py: 2 }}>
        {hasSubTabs
          ? currentTab.subTabs[subValue]?.component
          : currentTab?.component}
      </Box>
    </div>
  );
}

export default NestedCustomTab;
