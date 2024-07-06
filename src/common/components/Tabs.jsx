import React from "react";

// Mui
import Box from "@mui/material/Box";
import MuiTabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stack from "@mui/material/Stack";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const Tabs = ({ tabs, activeTab, handleTabChange, children, mt = 0 }) => {
    return (
        <Box
            sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                flexDirection: { xs: "column-reverse", sm: "row" },
                justifyContent: "space-between",
            }}
        >
            <MuiTabs
                value={activeTab}
                onChange={handleTabChange}
                aria-label="tabs"
                sx={{ mt }}
            >
                {tabs.map((tab, index) => (
                    <Tab key={index} label={tab} {...a11yProps(index)} />
                ))}
            </MuiTabs>
            <Stack spacing={2} direction={"row"}>
                {children}
            </Stack>
        </Box>
    );
};

export default Tabs;
