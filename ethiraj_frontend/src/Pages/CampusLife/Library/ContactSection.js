// import React from "react";
// import { Grid, Typography, Box, Paper } from "@mui/material";

// import LinkSection from "./LinkSection";
// import generalRulesPdf from "../../../Assets/General Rules Of Ethiraj Library.pdf";
// import bookinglendingPdf from "../../../Assets/Circulation Rules & Book Lending Facility.pdf";
// import openAccessDataspacePdf from "../../../Assets/Library/Open Access E-Databases.pdf";
// import openAccessJouenelsPdf from "../../../Assets/Library/Open Access E-Journals.pdf";

// const relatedLinks = {
//   title: "Related Links",
//   links: [
//     {
//       label: "General Rules",
//       url: generalRulesPdf,
//       underline: "false",
//     },
//     {
//       label: "Book Lending & Circulation Rules",
//       url: bookinglendingPdf,
//     },
//   ],
// };

// const resources = {
//   title: "Resources",
//   links: [
//     {
//       label: "Open Access Databases",
//       url: openAccessDataspacePdf,
//     },
//     {
//       label: "Open Access E-Journals",
//       url: openAccessJouenelsPdf,
//     },
//   ],
// };

// const ContactSection = ({ sections }) => {
//   return (
//     <Paper
//       elevation={0}
//       sx={{
//         // py: { xs: 3, sm: 4, md: 5 },
//         // px: { xs: 2, sm: 3, md: 4 },
//         background: "none",
//       }}
//     >
//       <Grid container spacing={4}>
//         <Grid item size={{ xs: 12,sm: 6, md: 3 }}>
//           <LinkSection sections={relatedLinks} />
//         </Grid>

//         <Grid item size={{ xs: 12,sm: 6, md: 3 }}>
//           <LinkSection sections={resources} />
//         </Grid>
        
        

//         {/* Right Column */}
//         <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
//           <Box>
//             <Typography
//               variant="typographyContentHeadingProgram"
//               sx={{ mb: 1 }}
//             >
//               Working Hours
//             </Typography>

//             <Typography variant="typographyBodyInterMaintext">
//               8.30 am to 5.30 pm on all
//               <br />
//               working days.
//             </Typography>
//           </Box>
//         </Grid>
//         <Grid item size={{ xs: 12,sm: 6, md: 3 }}>
//           <Typography variant="typographyContentHeadingProgram" sx={{ mb: 1 }}>
//             Contact Details
//           </Typography>

//           <Typography variant="typographyTabelInterText" sx={{ mb: 1 }}>
//             library@ethirajcollege.edu.in
//           </Typography>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };

// export default ContactSection;

import React from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";

import LinkSection from "./LinkSection";
import generalRulesPdf from "../../../Assets/General Rules Of Ethiraj Library.pdf";
import bookinglendingPdf from "../../../Assets/Circulation Rules & Book Lending Facility.pdf";
import openAccessDataspacePdf from "../../../Assets/Library/Open Access E-Databases.pdf";
import openAccessJouenelsPdf from "../../../Assets/Library/Open Access E-Journals.pdf";

const relatedLinks = {
  title: "Related Links",
  links: [
    {
      label: "General Rules",
      url: generalRulesPdf,
      underline: "true",
    },
    {
      label: "Book Lending & Circulation Rules",
      url: bookinglendingPdf,
    },
  ],
};

const resources = {
  title: "Resources",
  links: [
    {
      label: "Open Access Databases",
      url: openAccessDataspacePdf,
    },
    {
      label: "Open Access E-Journals",
      url: openAccessJouenelsPdf,
    },
  ],
};

const ContactSection = ({ sections }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        // py: { xs: 3, sm: 4, md: 5 },
        // px: { xs: 2, sm: 3, md: 4 },
        background: "none",
      }}
    >
      <Grid container spacing={4}>
        <Grid item size={{ xs: 12,sm: 6, md: 3 }}>
          <LinkSection sections={relatedLinks} />
        </Grid>

        <Grid item size={{ xs: 12,sm: 6, md: 3 }}>
          <LinkSection sections={resources} />
        </Grid>
        
        

        {/* Right Column */}
        <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
          <Box>
            <Typography
              variant="typographyContentHeadingProgram"
              sx={{ mb: 1 }}
            >
              Working Hours
            </Typography>

            <Typography variant="typographyBodyInterMaintext">
              8.30 am to 5.30 pm on all
              <br />
              working days.
            </Typography>
          </Box>
        </Grid>
        <Grid item size={{ xs: 12,sm: 6, md: 3 }}>
          <Typography variant="typographyContentHeadingProgram" sx={{ mb: 1 }}>
            Contact Details
          </Typography>

          <Typography variant="typographyTabelInterText" sx={{ mb: 1 }}>
            library@ethirajcollege.edu.in
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ContactSection;
