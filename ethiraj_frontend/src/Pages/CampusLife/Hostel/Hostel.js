import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import CustomBannerSection from "../../../Components/CustomBannerSection/CustomBannerSection";
import bannerImage from "../../../Assets/Campuslife/Hostel.jpg";
import beauifulSurroundingsImage from "../../../Assets/Beautiful Surroundings.jpg";
import pureDrinkingWaterImage from "../../../Assets/Pure Drinking WaterPure Drinking Water.png";
import hygienicWashroomsImage from "../../../Assets/Hygienic Washrooms.jpg";
import festivalsImage from "../../../Assets/Festivals & Celebrations.png";
import hostelMoments1 from "../../../Assets/hostelMoments1.jpg";
import hostelMoments2 from "../../../Assets/hostelMoments2.jpg";
import hostelMoments3 from "../../../Assets/hostelMoments3.png";
import hostelMoments4 from "../../../Assets/hostelMoments4.png";
import dining from "../../../Assets/canteen2.jpg";
import health from "../../../Assets/Campuslife/healthwellnesImageSlider1.png";
import essential from "../../../Assets/essential.jpg";
import hygenic from "../../../Assets/hygenic.jpg";
import highlightCollegeHostelImage from "../../../Assets/highlightCollegehostel.png";
import committeeMemberOne from "../../../Assets/chitra.png";
import committeeMemberTwo from "../../../Assets/anbuselvi.png";
import committeeMemberThree from "../../../Assets/deviyani.png";
// src/Assets/deviyani.png
import downloadPdfIconImage from "../../../Assets/downloadpdfIconImage.png";
import ImageWidthSlider from "./ImageWidthSlider";
import FacultySection from "./FacultySection";
import supportingExcellenceInSportsImage from "../../../Assets/supportingExcellenece.jpg";
import disciplineAndValuesImage from "../../../Assets/disciplineandvalues.jpg";
import ethirajHostelPromiseImage from "../../../Assets/hostelPromise.jpg";

import umaGowrie from "../../../Assets/umaGowrie.png";
import jayanthi from "../../../Assets/jayanthi.png";
import menaka from "../../../Assets/menaka.png";
import priya from "../../../Assets/priya.png";
import { GridOff } from "@mui/icons-material";

const highlights = [
  "Safe and secure women’s residential campus ",
  "Continuous supervision by Principal (Warden), Deputy Wardens & Hostel Committee Members",
  "Calm and academic atmosphere ideal for focused study ",
  "Strong culture of discipline, dignity, and respect ",
  "Inclusive community with students from varied backgrounds ",
  "Easy access to college facilities and events ",
  "Encouraging environment for personal growth and leadership ",
  "Comfortable stay with modern amenities",
];

const amenities = [
  {
    title: "Comfortable Living Spaces",
    image: null,
    bulletPoints: [
      "Spacious, airy, and naturally lit rooms",
      "Broad corridors and well-maintained surroundings",
      "Furnished accommodation with cots, study tables, chairs, lockers, cupboards, fans, and lights",
      "Room options including 3-bed, 5-bed, and non-A/C rooms",
      "Windows fitted with mosquito nets and curtains",
    ],
  },
  {
    title: "Celebrations & Traditions",
    image: festivalsImage,
    description:
      "The hostel celebrates festivals and special occasions with enthusiasm and inclusiveness, including:",
    bulletPoints: [
      "Vinayagar Chathurthi",
      "Freshers’ Day",
      "Navarathri",
      "Karthigai Deepam",
      "Christmas",
      "New Year",
      "Pongal",
      "Hostel Day",
    ],
  },
  {
    title: "Dining Facilities",
    image: dining,
    description:
      "The Hostel mess serves wholesome vegetarian food in a hygienic dining hall supported by modern kitchen facilities. The mess follows a transparent dividing system, ensuring fairness and shared responsibility among residents",
    bulletPoints: [],
  },
  {
    title: "Health & Wellness",
    image: health,
    description:
      "The hostel prioritizes the health and well-being of its residents with facilities such as:",
    bulletPoints: [],
  },
  {
    title: "Essential Services",
    image: essential,
    bulletPoints: [
      "24x7 water supply ",
      "RO purified drinking water ",
      "Hot and cold water dispensers in every block ",
      "24x7 electricity with generator backup ",
      "Water heaters and geysers ",
      "High-speed Wi-Fi connectivity for academic use",
    ],
  },
  {
    title: "Hygiene & Safety",
    image: hygenic,
    bulletPoints: [
      "24x7 CCTV surveillance across key hostel premises",
      "Professionally maintained housekeeping services",
      "Regular sanitation, fumigation, and deep cleaning",
      "Hygienic washrooms with continuous maintenance",
      "Fire extinguishers installed on each floor",
    ],
  },
];

const hostelMomentsGalleryImages = [
  // {
  //   src: hostelMoments1,
  //   alt: "Hostel exterior view",
  // },
  // {
  //   src: hostelMoments2,
  //   alt: "Hostel room interior",
  // },
  {
    src: hostelMoments3,
    alt: "RO water facility",
  },
  {
    src: hostelMoments4,
    alt: "Hostel washroom area",
  },
];

const guidelines = [
  "Day scholars are not allowed in the hostel.",
  "Boarders should not be found in their rooms during class hours unless they are sick, and only with prior permission from the deputy warden. Violation of this rule will be severely dealt with.",
  "Boarders are always expected to be formally dressed in the hostel.",
  "Ragging in any form is strictly prohibited. It is a crime punishable under law, and severe disciplinary action will be taken.",
  "SC/ST candidates are exempted from paying the application fee for the Aided stream.",
  "Misuse of any amenity by a boarder will entail withdrawal of such amenity.",
  "Any damage to hostel property like furniture, electrical fittings, sanitary wares, plumbing fittings, utensils, disfiguring walls, doors, or windows is considered a violation of discipline and immediate action will be taken. The cost of damage is deducted from the caution deposit of the inmates in that room and, if needed, recovered from all boarders collectively. The decision of the deputy warden in this matter is final.",
  "Boarders shall not put up any notice or write or fix anything on walls or doors.",
  "Students must return to the hostel on the evening prior to the reopening of the college each term.",
  "Outside classes are not allowed.",
  "In matters relating to internal management and those affecting discipline, rules, and regulations of the hostel, the decision of the principal is considered final.",
  "Outing timing will be announced by the deputy warden on Sunday. Weekend outing will not be allowed on holidays.",
  "Boarders shall not convene meetings, collect funds, or have parties of any sort under any circumstance without obtaining prior permission from the deputy warden.",
  "Hostel authorities may amend, modify, or add to these rules if necessary.",
];

const refundPolicy = [
  "At the time of admission, every inmate (boarder) shall pay the full term fee along with the prescribed caution deposit.",
  "If a candidate requests cancellation before joining the hostel, 10% of the Establishment Fee will be deducted as processing charges, and the balance amount will be refunded.",
  "No refund of Establishment fee shall be applicable once the candidate has joined the hostel after admission.",
  "The caution deposit paid by the boarder will not be adjusted against mess fee charges. It will be refunded only at the time of vacating the hostel, subject to applicable rules.",
  "No deduction or refund of Establishment Fee or mess charges will be permitted for absence from the hostel or vacating the hostel in the middle of the term.",
  "The monthly mess bill will be displayed on the hostel notice board on or before 5th of every month and the mess bill must be paid on or before the 10th of the same month.",
  "During the month of April, a charge of ₹225 per day will be levied, along with a service charge of ₹600.",
  "All payments towards hostel fees and mess bills shall be made through online mode only.",
];

const feesStructure = [
  "Application Fee – ₹500",
  "Admission Fee – ₹500",
  "Caution Deposit – ₹3,000",
  "Establishment Fee – ₹40,000",
  "Mess Fees – Dividing System",
];

const establishmentRefundDetails = [
  {
    title: "Establishment Refund Details - General",
    details: [
      "If a student vacates the hostel after the College reopening date / before course completion, the Establishment and deposit fee will not be refunded under any circumstances.",
    ],
  },
  {
    title: "Caution Deposit Refund Details",
    details: [
      "For UG Students: The deposit amount will be adjusted against food charges only in March and April for the final year, provided the student stays in the hostel continuously from 1st year and 3rd year.",
      "For PG Students: The deposit amount will be adjusted against food charges only in March and April for the final year, provided the student stays in the hostel continuously from 1st year and 2nd year.",
    ],
  },
  {
    title: "Mess Bill Collection",
    details: [
      "The mess bill will be displayed on the hostel notice board by 5th of every month. All students must pay the amount online to the hostel mess A/C on or before 10th of every month.",
    ],
  },
  {
    title: "Day Count Collection",
    details: [
      "For students staying in the hostel for less than 5 days in a month, food charges will be collected at the rate of Rs.225/- per day, along with service charge of Rs.600/-. This is applicable only to students on medical leave with a valid medical certificate. Every year, in the month of May, food charges will be collected only on per-day basis for all students.",
    ],
  },
];

const committeeMembers = [
  {
    name: "Dr. S. Uma Gowrie",
    role: "Chairperson",
    dept: "Principal & Secretary, Ethiraj College for Women (Autonomous)",
    image: umaGowrie,
  },

  {
    name: "Dr. M. Jeyanthi",
    role: "Member",
    dept: "Vice Principal (SS), Head, Department of B.Com (A&F)",
    image: jayanthi,
  },

  {
    name: "Dr. S. Priya",
    role: "Assistant Professor",
    dept: "Department of Plant Biology and Plant Biotechnology",
    image: priya,
  },
  {
    name: "Dr. M. Menaka",

    role: "Associate Professor",
    dept: "Department of Clinical Nutrition and Dietetics",
    image: menaka,
  },

  {
    name: "Ms. B. Chitra",
    role: "Deputy Warden (Student Welfare)",
    dept: "Associate Professor, Department of English",
    image: committeeMemberOne,
  },
  {
    name: "Selvi. A. Anbuselvi",
    role: "Member",
    dept: "Deputy Warden (Establishment)",
    image: committeeMemberTwo,
  },
  {
    name: "Tmt. Devianai",
    role: "Member",
    dept: "Deputy Warden (Mess)",
    image: committeeMemberThree,
  },
];

const features = [
  {
    title: "Supporting Excellence in Sports",
    image: supportingExcellenceInSportsImage,
    desc: `Ethiraj College Hostel proudly supports student achievers in sports and games. International & National players are provided free hostel accommodation, with 50 students currently benefiting from this initiative.`,
  },
  {
    title: "Discipline & Values",
    image: null,
    desc: `Ethiraj College Hostel proudly supports student achievers in sports and games. International & National players are provided free hostel accommodation, with 50 students currently benefiting from this initiative.`,
  },
  {
    title: "Ethiraj Hostel Promise",
    image: ethirajHostelPromiseImage,
    desc: `At Ethiraj College Hostel, students do not simply stay—they thrive. It is a place where ambitions are shaped, friendships are built, traditions are cherished, and futures begin!`,
  },
];

const Hostel = () => {
  const bannerDatas = {
    image: bannerImage,
    breadCrumbsData: [
      { name: "Home", to: "/" },
      { name: "Campus Life", to: "/campuslife" },
      { name: "Hostel" },
    ],
    title: "Hostel",
  };

  return (
    <Box>
      <CustomBannerSection bannerDatas={bannerDatas} />

      <Box
        sx={{
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          py: { lg: "64px", md: "56px", xs: "24px", sm: "44px" },
        }}
      >
        <Typography
          variant="headingTextNewsreaderMedium"
          sx={{
            textAlign: "center",
            mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" },
          }}
        >
          “A Home Away from Home”
        </Typography>

        <Box sx={{ xs: "100%", md: "60%" }}>
          <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 2 }}>
            About the Hostel
          </Typography>
          <Typography variant="typographyBodyInterMaintext" sx={{ mb: 2 }}>
            Welcome to Ethiraj College Hostel More than a residence, the Ethiraj
            College Hostel is a vibrant community where students live, learn,
            grow, and create lifelong memories. Nestled within the prestigious
            Ethiraj College campus, it offers a secure, disciplined, and
            nurturing environment — empowering young women to pursue academic
            excellence with the comfort of a true second home.
          </Typography>
          <Typography variant="typographyBodyInterMaintext" sx={{ mb: 2 }}>
            Holistic Student Development Designed with a vision of holistic
            growth, the hostel seamlessly blends safety, convenience, cultural
            richness, and academic support. Students from diverse regions and
            backgrounds come together as one family — building friendships,
            values, and memories that last a lifetime.
          </Typography>
          <Typography variant="typographyBodyInterMaintext" sx={{ mb: 2 }}>
            A Symbol of Trust & Care For generations, Ethiraj College Hostel has
            stood as a symbol of trust, care, and opportunity. Parents choose
            the hostel not only for its secure infrastructure but for the values
            it instills — responsibility, independence, leadership, and
            self-discipline. The hostel experience helps students transition
            confidently into college life while staying focused on their
            aspirations.
          </Typography>
          <Typography variant="typographyBodyInterMaintext">
            Residential Excellence The hostel comprises 3 residential blocks and
            1 Sports Hostel with 155 rooms, accommodating 553 students in a
            well-planned, student-friendly environment. Reserved for UG and PG
            students, every resident enjoys easy access to classrooms,
            laboratories, library, sports facilities, and all campus resources —
            right at their doorstep.
          </Typography>
        </Box>
        <Box
          sx={{
            py: { lg: "72px", md: "60px", xs: "40px", sm: "50px" },
          }}
        >
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{ mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" } }}
          >
            Highlights of College Hostel
          </Typography>

          <Grid container spacing={{ xs: 4, md: 5 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 6 }}>
              {highlights.map((item) => (
                <Typography
                  key={item}
                  variant="typographyBodyInterMaintext"
                  sx={{
                    borderBottom: "1px solid #b8bcc8",
                    py: 1.6,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={highlightCollegeHostelImage}
                alt="Hostel building"
                sx={{ width: "100%", borderRadius: "12px", objectFit: "cover" }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" } }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{ mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" } }}
          >
            Hostel Amenities
          </Typography>
          <ImageWidthSlider
            items={amenities}
            itemWidth={{ xs: 280, sm: 300, md: 340, lg: 360 }}
            gap={2.5}
            renderItem={(item) => (
              <Box>
                {item.image ? (
                  <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: { xs: 220, sm: 230, md: 260 },
                    borderRadius: "6px",
                    objectFit: "cover",
                  }}
                />
                ) : (
                  <Box
                  sx={{
                    width: "100%",
                    height: { xs: 220, sm: 230, md: 260 },
                    borderRadius: "6px",
                    backgroundColor: "#b7a0d6",
                  }}
                />
                )}
                <Typography
                  variant="subHeadingTextInterMedium"
                  sx={{ mt: 2, color: "#1e2230" }}
                >
                  {item.title}
                </Typography>
                {item.description && (
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ color: "#4a4f5d", mt: 0.5, lineHeight: 1.65 }}
                  >
                    {item.description}
                  </Typography>
                )}
                <Box sx={{ mt: 1 }}>
                  <ul style={{ paddingLeft: 18, margin: 0 }}>
                    {item.bulletPoints.map((point, idx) => (
                      <li key={idx} style={{ marginBottom: 6 }}>
                        <Typography
                          variant="typographyBodyInterNormal"
                          sx={{ color: "#4a4f5d", lineHeight: 1.65 }}
                        >
                          {point}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Box>
            )}
          />
        </Box>

        <Grid
          container
          spacing={{ xs: 4, md: 5 }}
          sx={{ py: { lg: "72px", md: "60px", xs: "40px", sm: "50px" } }}
        >
          <Grid size={{ xs: 12 }}>
            <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 2 }}>
              Life in the Hostel - What to Know
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="subHeadingTextInterMedium"
              sx={{ color: "#6B3C58", fontWeight: 700, mb: 1.5 }}
            >
              Guidelines
            </Typography>

            <Stack spacing={1.2}>
              {guidelines.map((rule, index) => (
                <Box
                  key={rule}
                  sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}
                >
                  <Box
                    sx={{
                      minWidth: 24,
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      backgroundColor: "#ecdff0",
                      color: "#7d587f",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ color: "#4a4f5d" }}
                  >
                    {rule}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={bannerImage}
              alt="Hostel campus"
              sx={{
                height: { xs: 300, md: 500 },
                width: "100%",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Divider sx={{ my: 2, borderColor: "#b8bcc8" }} />
          </Grid>
        </Grid>

        <Typography
          variant="headingTextNewsreaderMedium"
          sx={{ mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" } }}
        >
          Hostel Fee Guide and Refund Information
        </Typography>

        <Grid container spacing={{ xs: 3, md: 6 }} alignItems="stretch">
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="subHeadingTextInterMedium"
              sx={{ color: "#6B3C58", fontWeight: 700, mb: 1.5 }}
            >
              Fees Structure (2026-2027)
            </Typography>
            <Stack spacing={1.1}>
              {feesStructure.map((item, idx) => (
                <Typography key={idx} variant="typographyBodyInterNormal">
                  {item}
                </Typography>
              ))}
            </Stack>
            <Box mt={4}>
              {establishmentRefundDetails.map((section, idx) => (
                <Box key={idx} mb={2}>
                  <Typography
                    variant="subHeadingTextInterMedium"
                    sx={{ color: "#6B3C58", fontWeight: 700, mb: 1 }}
                  >
                    {section.title}
                  </Typography>
                  <Stack spacing={0.8}>
                    {section.details.map((detail, didx) => (
                      <Typography
                        key={didx}
                        variant="typographyBodyInterNormal"
                      >
                        {detail}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
              borderLeft: { xs: "none", md: "1px solid #b8bcc8" },
              pl: { xs: 0, md: 4 },
            }}
          >
            <Typography
              variant="subHeadingTextInterMedium"
              sx={{ color: "#6B3C58", fontWeight: 700, mb: 1.5 }}
            >
              Refund Policy
            </Typography>
            <Stack spacing={1.1}>
              {refundPolicy.map((item, index) => (
                <Box
                  key={item}
                  sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}
                >
                  <Box
                    sx={{
                      minWidth: 24,
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      backgroundColor: "#ecdff0",
                      color: "#7d587f",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ color: "#4a4f5d" }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 5, md: 6 }, borderColor: "#b8bcc8" }} />

        <Box sx={{ py: { lg: "72px", md: "60px", xs: "40px", sm: "50px" } }}>
          <Grid container spacing={4}>
            {features.map((item, index) => (
              <Grid
                item
                size={{ xs: 12, md: 4 }}
                key={index}
                sx={{
                  pr: { md: 3 },

                  mb: { xs: 4, md: 0 },
                  borderRight:
                    index !== features.length - 1
                      ? { md: "1px solid #ccc" }
                      : "none",
                }}
              >
                {/* Title */}
                <Typography
                  variant="headingTextNewsreaderMedium"
                  sx={{
                    mb: 3,
                  }}
                >
                  {item.title}
                </Typography>

                {/* Image */}
               
               {item.image ? (
                 <Box
                   component="img"
                   src={item.image}
                   alt={item.title}
                   sx={{
                     width: "100%",
                     height: "220px",
                     objectFit: "cover",
                     borderRadius: "10px",
                     mb: 3,
                   }}
                 />
               ) : (
                 <Box
                   sx={{
                     width: "100%",
                     height: "220px",
                     backgroundColor: "#b7a0d6",
                     borderRadius: "10px",
                     mb: 3,
                   }}
                 />
               )}

                {/* Description */}
                <Typography variant="typographyBodyInterNormal">
                  {item.desc}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" } }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{ mb: { xs: "20px", md: "28px" } }}
          >
            Hostel Moments
          </Typography>
          <ImageWidthSlider
            images={hostelMomentsGalleryImages}
            imageHeight={{ xs: 220, sm: 240, md: 280 }}
            itemWidth={{ xs: 240, sm: 260, md: 300, lg: 340 }}
          />
        </Box>

        <Grid
          container
          spacing={{ xs: 3, md: 5 }}
          sx={{
            py: { lg: "72px", md: "60px", xs: "40px", sm: "50px" },
          }}
          alignItems={{ xs: "flex-start", md: "stretch" }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: { md: "flex", xs: "none" } }}
          >
            <Box
              component="img"
              src={bannerImage}
              alt="Hostel room"
              sx={{
                width: "100%",
                height: { xs: 260, md: "100%" },
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="headingTextNewsreaderMedium"
              sx={{ mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" } }}
            >
              Apply for Hostel Accommodation
            </Typography>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                display: { xs: "block", md: "none" },
                mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px " },
              }}
            >
              <Box
                component="img"
                src={bannerImage}
                alt="Hostel room"
                sx={{
                  width: "100%",
                  height: { xs: 260, md: "100%" },
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Typography
              variant="typographyBodyInterNormal"
              sx={{ color: "#4a4f5d", mb: 2.5, lineHeight: 1.8 }}
            >
              Ethiraj College for Women warmly invites outstation students to
              apply for hostel accommodation and experience the comfort,
              security, and warmth of our vibrant residential community. Nestled
              within the beautiful 9-acre campus, our hostel is more than just a
              place to stay - it is a second home where lasting friendships are
              built, independence is nurtured, and academic excellence is
              inspired.
            </Typography>
            <Typography
              variant="typographyBodyInterNormal"
              sx={{ color: "#4a4f5d", mb: 3, lineHeight: 1.8 }}
            >
              Students seeking hostel accommodation are required to fill in the
              Hostel Application Form available at the college office or through
              the online portal. Applicants must submit all necessary documents
              including proof of admission, identity proof, parent or guardian
              details, and a recent passport-size photograph. Applications will
              be reviewed by the hostel authorities and allotment will be
              communicated to the student upon confirmation.
            </Typography>

            <Button
              variant="outlined"
              startIcon={<Box component="img" src={downloadPdfIconImage} />}
              sx={{
                borderRadius: "24px",
                textTransform: "none",
                px: 2.8,
                py: 0.9,
                borderColor: "#8a8f9c",
                color: "#2f2f3a",
              }}
            >
              Download the Form
            </Button>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 3,
                mt: { xs: "24px", sm: "24px", md: "34px", lg: "48px" },
              
             }}>
              Hostel Committee
            </Typography>

            <Typography
              variant="subHeadingTextInterMedium"
              sx={{
                color: "#6B3C58",
                mb: { xs: "20px", md: "28px" },
              }}
            >
              Commitee Members
            </Typography>
            <FacultySection
              items={committeeMembers}
              showDefaultDetails={false}
              renderDetails={(member) => (
                <>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ color: "#4a4f5d" }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="bodyTextInterRegular"
                    sx={{ color: "#6a6f7b" }}
                  >
                    {member.dept}
                  </Typography>
                </>
              )}
              nameVariant="subHeadingTextInterMedium"
              nameSx={{ color: "#2f2f3a", mt: "12px" }}
              trackSx={{ gap: 2 }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography
              variant="headingTextNewsreaderMedium"
              sx={{
                mt: { xs: "24px", sm: "24px", md: "34px", lg: "48px" },
                mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" },
              }}
            >
              Contact Details
            </Typography>
            <Link
              href="mailto:hostel@ethirajcollege.edu.in"
              sx={{
                color: "#4a4f5d",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              <Typography variant="typographySubheadingText">
                hostel@ethirajcollege.edu.in
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hostel;
