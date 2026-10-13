// import { Box, Container, Grid, Paper, Typography } from "@mui/material";
// import React from "react";

// const AboutEthiraj = () => {
//   return (
//     <div>
//       {" "}
//       <Box
//       id="ourstory"
//         sx={{
//           // minHeight: "100vh",
//           //   background: "linear-gradient(to top, #e6d6f7 5%, #fff 40%)",
//           display: "flex",
//           alignItems: "center",
//         px: { xs: 2, sm: 3, md: "74px", lg: "94px" },

//           py: {lg:"72px",md:"60px",xs:"20px",sm:"50px"},
//         }}
//       >
//         {/* <Container maxWidth="lg"> */}
//         <Paper elevation={0} sx={{ px: {lg:"36px",md:"28px",xs:"16px",sm:"30px"},background:"none" }}>
//           <Grid container spacing={6}>
//             {/* Left Column */}
//             <Grid item size={{ xs: 12, md: 6 }}>
//               <Typography
//                 variant="subTextInterMedium"
//                 sx={{ maxWidth: { lg: "693px", md: "550px" } }}
//               >
//                 Established in 1948, Ethiraj College for Women has been a
//                 pioneer in women’s education.
//               </Typography>
//               <br />
//               {/* <br /> */}

//               <Typography
//                 variant="subHeadingTextInterMedium"
//                 sx={{ maxWidth: { lg: "693px", md: "550px" } }}
//               >
//                 With a legacy of academic excellence, empowerment, and
//                 innovation, the college continues to nurture generations of
//                 women to lead and inspire.
//               </Typography>
//             </Grid>

//             {/* Right Column */}
//             <Grid item size={{ xs: 12, md: 6 }}>
//               <Typography variant="typographySubheadingText" sx={{color:"var(--brand-palatte-text-color)"}}>
//                 Ethiraj College for Women is situated in the heart of Chennai,
//                 nestled within nine acres of lush greenery and elegant
//                 architecture, stands Ethiraj College for Women — a name
//                 synonymous with quality, integrity, and opportunity. Since its
//                 founding in 1948, the College has combined a strong academic
//                 vision with impressive infrastructure, spanning over 3,48,000
//                 sq. ft.
//               </Typography>

//               <br />
//               {/* <br /> */}

//               <Typography variant="typographySubheadingText" sx={{color:"var(--brand-palatte-text-color)"}}>
//                 Over the decades, Ethiraj College has earned prestigious
//                 accolades, including the Five-Star status from NAAC and the
//                 College with Potential for Excellence (CPE) recognition from the
//                 UGC. These honors are not merely badges of prestige but
//                 affirmations of the institution’s unwavering commitment — upheld
//                 by visionary management, dedicated principals, committed
//                 faculty, and ambitious students.
//               </Typography>
//               <br />
//               {/* <br /> */}

//               <Typography variant="typographySubheadingText" sx={{color:"var(--brand-palatte-text-color)"}}>
//                 Today, the College has over 7,300+ students and 346 faculty
//                 members, all of whom contribute to its vibrant academic
//                 environment. Its alumni network includes leaders across
//                 diplomacy, law, education, social service, culture, and industry
//                 — individuals who carry forward the legacy of Ethiraj College
//                 and continue to shape society in meaningful ways.
//               </Typography>
//               <br />
//               {/* <br /> */}

//               <Typography variant="typographySubheadingText" sx={{color:"var(--brand-palatte-text-color)"}}>
//                 As Ethiraj College for Women looks to the future, it remains
//                 rooted in a philosophy of growth through change. Echoing Charles
//                 Darwin’s ...
//               </Typography>
//             </Grid>
//           </Grid>
//         </Paper>
//         {/* </Container> */}
//       </Box>
//     </div>
//   );
// };

// export default AboutEthiraj;

import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ResearchPolicy from "../../../Assets/Research Policy.pdf";
import EthicalPolicy from "../../../Assets/Ethical Policy.pdf";



const AboutECRIC = ({ aboutEcricDatas }) => {


  console.log(aboutEcricDatas,"aboutEcricDatas");
  
  // Extract policy URLs from aboutEcricDatas if available, otherwise use static PDF files
  const researchPolicyUrl = aboutEcricDatas?.[0]?.additional_data?.research_policy || ResearchPolicy;
  const ethicalPolicyUrl = aboutEcricDatas?.[0]?.additional_data?.ethical_policy || EthicalPolicy;

  // const { subtext = [], description = [] } = additionalData || {};
  const subtext =
    [
      "The Ethiraj Centre for Research, Innovation & Creativity (ECRIC), established on 16 April 2019, serves as a dynamic hub for advancing a vibrant research ecosystem at Ethiraj College for Women.",
    ];

  const description =
    [
      "The Centre encourages faculty members and students to actively engage in basic, applied, interdisciplinary & Multidisciplinary research, contributing to the overall academic and scholarly development of the College.",
      "ECRIC supports faculty and students in the development of research proposals, publications, and projects, while fostering innovation, creativity, and critical thinking in teaching and learning practices.",
      "Through these efforts, the Centre enhances the College’s research ecosystem and academic excellence, ensuring alignment with NAAC quality benchmarks and national research priorities.",
    ];
  return (
    <div>
      <Box
        id="ourstory"
        sx={{
          display: "flex",
          alignItems: "center",
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          py: { lg: "72px", md: "60px", xs: "20px", sm: "50px" },
        }}
      >


        <Paper
          elevation={0}
          sx={{
            // px: { lg: "36px", md: "28px", xs: "16px", sm: "30px" },
            background: "none",
          }}
        >

          {/* <Typography variant="primaryHeadingText" sx={{ mb: { xs: "32px", sm: "24px", md: "24px" } }}  >About ECRIC</Typography> */}
          <Typography
            variant="headingTextNewsreaderMedium"
            id="about-section"
            // fontWeight="bold"
            // gutterBottom
            // sx={{mb:2}}
            sx={{ mb: { xs: "32px", sm: "24px", md: "24px" } }}
          >
            About ECRIC
          </Typography>



          <Grid container spacing={6}>
            {/* Left Column */}


            <Grid item size={{ xs: 12, md: 6 }}>

              {subtext.map((text, index) => (
                <>
                  <Typography
                    key={index}
                    variant="subTextInterMedium"
                    sx={{ maxWidth: { lg: "693px", md: "550px" } }}
                  >
                    {text}
                  </Typography>
                  <br />
                </>
              ))}
            </Grid>

            {/* Right Column */}
            <Grid item size={{ xs: 12, md: 6 }}>
              {description.map((text, index) => (
                <>
                  <Typography
                    key={index}
                    variant="typographySubheadingText"
                    sx={{
                      color: "var(--brand-palatte-text-color)",
                      // mb: 2,
                    }}
                  >
                    {text}
                  </Typography>
                  <br />
                </>
              ))}
              <>
                <Typography
                  variant="typographyBodyInterNormalSmall"
                  component="a"
                  href={researchPolicyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#003BD1",
                    marginBottom: "15px"
                    // textDecoration: "none",
                    // fontWeight: 500,
                  }}
                >
                  Research Policy
                </Typography>
                <br />
                <br />
              </>
              <Typography
                variant="typographyBodyInterNormalSmall"
                component="a"
                href={ethicalPolicyUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#003BD1",
                  // textDecoration: "none",
                  // fontWeight: 500,
                }}
              >
                Ethical Policy
              </Typography>


            </Grid>
          </Grid>
        </Paper>

      </Box>


    </div>
  );
};

export default AboutECRIC;
