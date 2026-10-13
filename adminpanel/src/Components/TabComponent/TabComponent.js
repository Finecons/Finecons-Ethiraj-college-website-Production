

// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import { IoMdTime } from 'react-icons/io';
// import { MdCheckCircle } from 'react-icons/md';


// import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';
// import TotalPendingRegisration from './TotalRegistration/TotalPendingRegisration';
// import TotalApprovedRegistration from './TotalRegistration/TotalApprovedRegistration';

// function TabComponent() {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

   
//     const renderTabContent = () => {
//         switch (value) {
//             case 0:
//                 return <TotalPendingRegisration />;
           
//             default:
//                 return null;
//         }
//     };

    

//     return (
//         <div>
//             <Box
//                 sx={{
//                     maxWidth: { xs: 320, sm: "100%", md: "100%" },
//                     bgcolor: 'background.paper',
//                     color: "#C38F51",
//                     p: 1,
//                 }}
//             >
//                 <Tabs
//                     value={value}
//                     onChange={handleChange}
//                     variant="scrollable"
//                     scrollButtons
//                     allowScrollButtonsMobile
//                     aria-label="scrollable auto tabs example"
//                     TabIndicatorProps={{
//                         style: {
//                             backgroundColor: '#C38F51',
//                             height: '3px',
//                         },
//                     }}
//                 >
//                     {tabsData.map((tab, index) => (

//                         <Tab
//                             key={tab.label}
//                             label={
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'space-between',
//                                         gap: 1,
//                                     }}
//                                 >
//                                     {tab.icon}
//                                     {tab.label}

//                                 </Box>
//                             }
//                             sx={{
//                                 fontSize: "16px",
//                                 color: value === index ? '#C38F51' : 'gray',
//                                 textTransform: 'none',
//                                 fontWeight: value === index ? 'bold' : 'normal',
//                                 borderBottom: value === index ? '3px solid #C38F51' : 'none',
//                                 // borderWidth:"20px",
//                                 '&.Mui-selected': {
//                                     color: '#C38F51',
//                                 },
//                                 '&:hover': {
//                                     color: '#C38F51',
//                                 },
//                             }}
//                         />
//                     ))}
//                 </Tabs>
//             </Box>
//             <Box sx={{ py: 2 }}>{renderTabContent()}</Box>
//         </div>
//     );
// }

// export default TabComponent;

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function TabComponent({ tabsData, tabComponents }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderTabContent = () => {
        return tabComponents[value] || null;
    };

    return (
        <div>
            <Box
                sx={{
                    maxWidth: { xs: 320, sm: "100%", md: "100%" },
                    bgcolor: 'background.paper',
                    color: "#C38F51",
                    p: 1,
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable auto tabs example"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: '#C38F51',
                            height: '3px',
                        },
                    }}
                >
                    {tabsData.map((tab, index) => (
                        <Tab
                            key={tab.label}
                            label={
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: 1,
                                    }}
                                >
                                    {tab.icon}
                                    {tab.label}
                                </Box>
                            }
                            sx={{
                                fontSize: "16px",
                                color: value === index ? '#C38F51' : 'gray',
                                textTransform: 'none',
                                fontWeight: value === index ? 'bold' : 'normal',
                                borderBottom: value === index ? '3px solid #C38F51' : 'none',
                                '&.Mui-selected': {
                                    color: '#C38F51',
                                },
                                '&:hover': {
                                    color: '#C38F51',
                                },
                            }}
                        />
                    ))}
                </Tabs>
            </Box>
            <Box sx={{ py: 2 }}>{renderTabContent()}</Box>
        </div>
    );
}

export default TabComponent;
