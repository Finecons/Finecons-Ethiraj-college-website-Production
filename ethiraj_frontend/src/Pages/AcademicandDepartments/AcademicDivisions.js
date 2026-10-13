// // import React from "react";
// // import { Grid, Typography, Button, CardMedia, Box } from "@mui/material";
// // import academicDicvisionsImage from "../../Assets/academicdivisions.png";
// // import CustomNextButton from "../../Components/CustomNextButton/CustomNextButton";
// // import { useNavigate } from "react-router-dom";
// // import { adminUrl } from "../../constants";

// // const AcademicDivisions = ({ exploreAcademicsDatas }) => {
// //   const navigate = useNavigate();
// //   const image = exploreAcademicsDatas[0]?.additional_data?.[0]?.imageUrl
// //     ? `${adminUrl}${exploreAcademicsDatas[0]?.additional_data?.[0]?.imageUrl}`
// //     : academicDicvisionsImage;
// //   return (
// //     <Box sx={{ p: 3 }}>
// //       <Grid container spacing={4} alignItems="center">
// //         {/* Left Section - Image */}
// //         <Grid item size={{ xs: 12, md: 5 }}>
// //           <CardMedia
// //             component="img"
// //             image={image} // Replace with your image
// //             alt="Classroom"
// //             sx={{ borderRadius: 2 }}
// //           />
// //         </Grid>

// //         {/* Right Section - Text */}
// //         <Grid
// //           item
// //           size={{ xs: 12, md: 7 }}
// //           sx={{
// //             display: "flex",
// //             flexDirection: "column",
// //             justifyContent: "space-between",
// //             minHeight: { md: "350px" },
// //           }}
// //         >
// //           <Box>
// //             <Typography
// //               variant="headingTextNewsreaderMedium"
// //               sx={{ mb: "16px" }}
// //             >
// //               {exploreAcademicsDatas[0]?.additional_data?.[0]?.title ||
// //                 "Explore Academic Divisions"}
// //             </Typography>
// //             <Typography
// //               variant="secondaryTextInterRegular"
// //               sx={{ mb: { xs: "32px", md: 0 } }}
// //             >
// //               {exploreAcademicsDatas[0]?.additional_data?.[0]?.description ||
// //                 "Our college is home to six vibrant academic divisions: Business Studies, Management Studies, Information Technology, Sciences, Humanities & Languages, and Foundation Courses."}
// //             </Typography>
// //           </Box>

// //           {/* <Button variant="outlined" endIcon={<span>&rarr;</span>}>
// //             Learn More
// //           </Button> */}
// //           <CustomNextButton
// //             buttonText={"Learn More"}
// //             onClick={"/academics/allacademicdivisions"}
// //           />
// //         </Grid>
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default AcademicDivisions;
// import React from "react";
// import { Grid, Typography, Button, CardMedia, Box } from "@mui/material";
// import academicDicvisionsImage from "../../Assets/academicdivisions.png";
// import CustomNextButton from "../../Components/CustomNextButton/CustomNextButton";
// import { useNavigate } from "react-router-dom";
// import { adminUrl } from "../../constants";

// const AcademicDivisions = ({ exploreAcademicsDatas }) => {
//   const navigate = useNavigate();
//   const image = exploreAcademicsDatas[0]?.additional_data?.[0]?.imageUrl
//     ? `${adminUrl}${exploreAcademicsDatas[0]?.additional_data?.[0]?.imageUrl}`
//     : academicDicvisionsImage;
//   return (
//     <Box sx={{ p: 3 }}>
//       <Grid container spacing={4} alignItems="center">
//         {/* Left Section - Image */}
//         <Grid item size={{ xs: 12, md: 5 }}>
//           <CardMedia
//             component="img"
//             image={image} // Replace with your image
//             alt="Classroom"
//             sx={{ borderRadius: 2 }}
//           />
//         </Grid>

//         {/* Right Section - Text */}
//         <Grid
//           item
//           size={{ xs: 12, md: 7 }}
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             minHeight: { md: "350px" },
//           }}
//         >
//           <Box>
//             <Typography
//               variant="headingTextNewsreaderMedium"
//               sx={{ mb: "16px" }}
//             >
//               {exploreAcademicsDatas[0]?.additional_data?.[0]?.title ||
//                 "Explore Academic Divisions"}
//             </Typography>
//             <Typography
//               variant="secondaryTextInterRegular"
//               sx={{ mb: { xs: "32px", md: 0 } }}
//             >
//               {exploreAcademicsDatas[0]?.additional_data?.[0]?.description ||
//                 "Our college is home to six vibrant academic divisions: Business Studies, Management Studies, Information Technology, Sciences, Humanities & Languages, and Foundation Courses."}
//             </Typography>
//           </Box>

//           {/* <Button variant="outlined" endIcon={<span>&rarr;</span>}>
//             Learn More
//           </Button> */}
//           <CustomNextButton
//             buttonText={"Learn More"}
//             onClick={"/academics/allacademicdivisions"}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default AcademicDivisions;

import React from "react";
import { Grid, Typography, CardMedia, Box } from "@mui/material";
import academicDicvisionsImage from "../../Assets/academicdivisions.png";
import CustomNextButton from "../../Components/CustomNextButton/CustomNextButton";
import { useNavigate } from "react-router-dom";
import { adminUrl } from "../../constants";

const AcademicDivisions = ({ exploreAcademicsDatas }) => {
  const navigate = useNavigate();

  const image = exploreAcademicsDatas[0]?.additional_data?.[0]?.imageUrl
    ? `${exploreAcademicsDatas[0]?.additional_data?.[0]?.imageUrl}`
    : academicDicvisionsImage;

  return (
    <Box sx={{ p: 3 ,mb: { lg: "60px", md: "50px", xs: "30px" }}}>
      <Grid
        container
        spacing={4}
        alignItems="stretch"   // 🔑 KEY FIX
      >
        {/* Left Section - Image */}
        <Grid item size={{ xs: 12, md: 5 }} sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            image={image}
            alt="Classroom"
            sx={{
              width: "100%",
              height: "100%",      // 🔑 match right content height
              borderRadius: 2,
              objectFit: "cover",  // prevent distortion
            }}
          />
        </Grid>

        {/* Right Section - Text */}
        <Grid
          item
          size={{ xs: 12, md: 7 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: { md: "350px" }, // content controls height
          }}
        >
          <Box>
            <Typography
              variant="headingTextNewsreaderMedium"
              sx={{ mb: "16px" }}
            >
              {exploreAcademicsDatas[0]?.additional_data?.[0]?.title ||
                "Explore Academic Divisions"}
            </Typography>

            <Typography
              variant="secondaryTextInterRegular"
              sx={{ mb: { xs: "32px", md: 0 } }}
            >
              {exploreAcademicsDatas[0]?.additional_data?.[0]?.description ||
                "Our college is home to six vibrant academic divisions: Business Studies, Management Studies, Information Technology, Sciences, Humanities & Languages, and Foundation Courses."}
            </Typography>
          </Box>

          <CustomNextButton
            buttonText="Learn More"
            onClick={"/academics/allacademicdivisions"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AcademicDivisions;
