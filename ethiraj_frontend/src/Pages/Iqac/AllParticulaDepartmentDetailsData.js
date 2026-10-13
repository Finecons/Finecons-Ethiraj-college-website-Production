// // // // import  bcomImage From "../../../Assets/BcomBannerImage.png"

import { adminUrl } from "../../constants";

// import { adminUrl } from "../../../constants";

// // // const AllParticulaDepartmentDetailsData = {
// // //   courseData: {
// // //     title: "B.Com General",
// // //     description:
// // //       "A foundational commerce program offering broad knowledge in accounting, business law, economics, and management to prepare students for diverse business careers.",
// // //     degree: "Bachelors",
// // //     degreeDuration: "3 years, 6 semesters",
// // //     streams: ["Aided", "Self-Supporting"],
// // //     credits: [
// // //       "142 Credits",
// // //       "+ 1 Credit (Internship)",
// // //       "+ 1 Credit (Extension Activity)",
// // //     ],
// // //     department: "Commerce",
// // //     departmentLink: "#",
// // //     image: require("../../../Assets/BcomBannerImage.png"),
// // //   },

// // //   programOutcomes: {
// // //     programOutcomesData: [
// // //       {
// // //         title: "Accounting and Financial Literacy",
// // //         description:
// // //           "Develop the ability to record, analyze, and interpret financial information effectively.",
// // //       },
// // //       {
// // //         title: "Knowledge of Business Laws and Ethics",
// // //         description:
// // //           "Learn to apply legal principles and ethical practices in business decision-making.",
// // //       },
// // //       {
// // //         title: "IT and E-commerce Competence",
// // //         description:
// // //           "Acquire skills in digital tools and online business platforms for modern commerce.",
// // //       },
// // //       {
// // //         title: "Career Readiness and Higher Education",
// // //         description:
// // //           "Prepare for professional careers or advanced studies with practical and theoretical foundations.",
// // //       },
// // //     ],
// // //     programOutcomesDescription:
// // //       "The programme also offers insights into economics and market behavior, taxation and auditing, and the workings of banking, insurance, and financial services. Students further develop managerial and communication skills, entrepreneurial thinking, and analytical abilities to thrive in diverse business contexts.",
// // //   },

// // //   syllabus: {
// // //     description: `From the 2024–25 academic year, the Department of Commerce follows the Choice Based Credit System (CBCS). Each year is split into two semesters, with a minimum of 90 working days per semester. Classes run for 5 hours a day, and every subject carries credits based on teaching hours, giving you a flexible and well-structured learning experience.`,
// // //     buttonText: "Download the Syllabus",
// // //   },

// // //   valueAddedCourses: [
// // //     { name: "Beyond the Classroom", offered: "offered by ID Matrix Heads Up" },
// // //     {
// // //       name: "Event Management",
// // //       offered: "offered by CSIT in association with MHRD",
// // //     },
// // //     { name: "Advanced Excel", offered: "offered by Miles Education Pvt.Ltd." },
// // //     {
// // //       name: "Global Understanding for Sustainable Development",
// // //       offered: "offered by Audacious Dream Foundation",
// // //     },
// // //   ],

// // //   careerPaths: {
// // //     careerPathFirstDescription:
// // //       "Graduates of the B.Com programme can pursue careers in a wide range of fields, including:",

// // //     careerPathLastDescription:
// // //       "Graduates can explore many other career opportunities beyond this list.",
// // //     careerPathData: [
// // //       {
// // //         category: "Finance & Accounting",
// // //         roles:
// // //           "Accountant, Auditor, Tax Consultant, Investment Analyst, Risk Manager",
// // //       },
// // //       {
// // //         category: "Corporate & Management",
// // //         roles:
// // //           "Business Executive, HR Analyst, Operations Manager, Administrative Officer",
// // //       },
// // //       {
// // //         category: "Analytics & E-Commerce",
// // //         roles: "Business Analyst, Market Research Analyst, E-Commerce Manager",
// // //       },
// // //       {
// // //         category: "Entrepreneurship",
// // //         roles:
// // //           "Startup Founder, Small Business Owner, Social Enterprise Leader",
// // //       },
// // //       {
// // //         category: "Higher Studies & Professional Courses",
// // //         roles: "MBA, CA, CMA, ACS, ACCA, M.Com",
// // //       },
// // //     ],
// // //   },

// // //   placements: [
// // //     require("../../../Assets/ACCENTURE.png"),
// // //     require("../../../Assets/deloiteLogo.png"),
// // //     require("../../../Assets/EY.png"),
// // //     require("../../../Assets/barcklaysLogo.png"),
// // //     require("../../../Assets/guideHoLogo.png"),
// // //     require("../../../Assets/citiLogo.png"),
// // //     require("../../../Assets/hpLogo.png"),
// // //     require("../../../Assets/INFOSYS.png"),
// // //   ],

// // //   beyondClassroom: {
// // //     description: [
// // //       "The Department of Commerce goes beyond academics to nurture well-rounded individuals.",
// // //       "Through its student association COMET, annual magazine, and vibrant participation in cultural, literary, and sports events, students are encouraged to showcase their talents and leadership.",
// // //       "The Entrepreneurship Cell (est. 2007), empowers students to cultivate business acumen through hands-on training, in-house ventures, and innovation-driven activities preparing them to thrive as future leaders.",
// // //       "The Department also hosts national and international seminars, workshops, and conferences, fostering intellectual growth.",
// // //     ],
// // //     image: "campusImage",
// // //   },

// // //   facultyData: [
// // //     {
// // //       name: "Dr. A. S. Gayathri",
// // //       title: "Associate Professor and Head",
// // //       specialization: "Income Tax, Company Law",
// // //       qualification: "M.Com, MPhil, PhD, ACS(Inter)",
// // //       image: require("../../../Assets/Dr. A. S. Gayathri.jpg"),
// // //     },
// // //     {
// // //       name: "Dr. K. Mythili",
// // //       title: "Assistant Professor",
// // //       qualification: "M.Com., M Phil., Ph.D,  SLET",

// // //       specialization:
// // //         "Financial Accounting, Auditing, Management Accounting, Commercial Law",
// // //       // image: "path/to/image2.jpg",
// // //       image: require("../../../Assets/Dr. K. Mythili.jpg"),
// // //     },
// // //     {
// // //       name: "Dr. Veena Murali",
// // //       title: "Assistant Professor",
// // //       qualification: "M.Com., Ph.D., NET",

// // //       specialization: "Organisational Behaviour, Statistics",
// // //       // image: "path/to/image3.jpg",
// // //       image: require("../../../Assets/Dr.Veena Murali.jpg"),
// // //     },
// // //     {
// // //       name: "Dr. S. Revathi",
// // //       title: "Assistant Professor",
// // //       qualification: "M.Com.,M.Phil.,P.hD.,M.B.A.,M.A(Women Studies) NET-JRF",

// // //       specialization: "Marketing and Insurance, Risk Management",
// // //       // image: "path/to/image4.jpg",
// // //       image: require("../../../Assets/Dr.S.Revathi.jpg"),
// // //     },
// // //     {
// // //       name: "Dr. K. Geetha",
// // //       title: "Associate Professor and Head",
// // //       qualification: "M.Com, MPhil, PhD, ACS(Inter)",

// // //       specialization: "Organisational Behaviour",
// // //       // image: "path/to/image5.jpg",
// // //       image: require("../../../Assets/Dr. K. Geetha.jpg"),
// // //     },
// // //     {
// // //       name: "Dr. Sharmila Thambi Radhakrishna",
// // //       title: "Associate Professor",
// // //       specialization: "Accounting",
// // //       // image: "path/to/image6.jpg",
// // //       image: require("../../../Assets/Dr. Sharmila Thambi Radhakrishna.png"),
// // //     },
// // //     {
// // //       name: "Dr. B. Akila Priya",
// // //       title: "Associate Professor",
// // //       specialization: "Accounting & Income Tax",
// // //       // image: "path/to/image7.jpg",
// // //       image: require("../../../Assets/Dr. B. Akila Priya.jpg"),
// // //     },
// // //     {
// // //       name: "Dr. Sudeshna T",
// // //       title: "Associate Professor",
// // //       specialization: "Finance",
// // //       // image: "path/to/image8.jpg",
// // //       image: require("../../../Assets/Dr. Sudeshna T.jpg"),
// // //     },
// // //   ],

// // //   admissionsData: {
// // //     eligibilityText: [
// // //       "Candidates who have passed the +2 Board Examinations (State Board / Central Board / or any other equivalent examination)",
// // //       "Candidates must have the following subject combination: Accountancy / Commerce / Business Studies",
// // //       "And/or any two subjects from the list below: Business Mathematics / Business Statistics/Mathematics / Statistics/Computer Science / Computer Applications / Information Technology / Informatics Practices / Marketing / Legal Studies / Entrepreneurship / Business Mathematics and Statistics / Economics / Business Economics / Banking / Insurance / Auditing / Financial Markets Management / Taxation / Cost Accounting / Business Administration / Applied Mathematics / Any other relevant course",
// // //     ],
// // //     buttonText: "Learn How to Apply",
// // //     relatedDepartments: [
// // //       {
// // //         name: "B.Com Corporate Secretarialship",
// // //         focus: "Corporate Secretarialship",
// // //         type: "Self-supporting",
// // //       },
// // //       {
// // //         name: "B.Com Bank Management",
// // //         focus: "Bank Management",
// // //         type: "Self-supporting",
// // //       },
// // //       {
// // //         name: "B.Com Accounting & Finance",
// // //         focus: "Accounting & Finance",
// // //         type: "Self-supporting",
// // //       },
// // //     ],
// // //     admissionsImage: require("../../../Assets/admissions&eligibility.jpg"),
// // //   },
// // // };

// // // export default AllParticulaDepartmentDetailsData;
// // // src/Pages/Academics/DepartmentDetails/AllParticularProgramDetailsData.js

// // // const bcomGeneralData = {
// // //   // Hero Image
// // //   courseData: {
// // //     title: "Commerce Department",
// // //     image: require("../../../Assets/commerceBannerImage.png"),
// // //   },

// // //   // About Section
// // //   about: {
// // //     title: "About the Commerce Department",
// // //     paragraphs: [
// // //       `Since its founding in 1975, the Department of Commerce has been at the forefront of women’s commerce education in Tamil Nadu. From its humble beginning with just 50 students and one faculty member, it has grown into a leading centre offering Undergraduate, Postgraduate, M.Phil, and Ph.D. programs in both Aided and Self-Supporting streams.It also holds the distinction of being the first women’s college in Chennai to introduce M.Phil (1989–90) and Ph.D (1994–95) research programs.`,
// // //       `Our programs give students a strong grounding in Accounting, Finance, Marketing, Taxation, HR, Research, and Entrepreneurship, while internships and practical training provide valuable real-world experience. We prepare students not just for careers, but to become confident professionals and leaders in the business world.`,
// // //     ],
// // //   },

// // //   // Explore Programmes Section
// // //   programmes: [
// // //     {
// // //       category: "Undergraduate Programmes",
// // //       items: [
// // //         { program: "B.Com General", department: "Commerce", stream: "Aided" },
// // //         {
// // //           program: "B.Com General",
// // //           department: "Commerce",
// // //           stream: "Self-supporting",
// // //         },
// // //       ],
// // //     },
// // //     {
// // //       category: "Postgraduate Programmes",
// // //       items: [
// // //         { program: "M.Com General", department: "Commerce", stream: "Aided" },
// // //         {
// // //           program: "M.Com General",
// // //           department: "Commerce",
// // //           stream: "Self-supporting",
// // //         },
// // //       ],
// // //     },
// // //     {
// // //       category: "Ph.D Programmes (Aided)",
// // //       items: [{ program: "Commerce", department: "Commerce", stream: "Aided" }],
// // //     },
// // //   ],

// // //   // Facilities Section
// // //   facilities: {
// // //     title: "Facilities & Infrastructure",
// // //     description:
// // //       "Classrooms, Research Room, Lab – Department of Mathematics, LCD Projectors, Laptops, PCs with Bluetooth Printers.",
// // //     items: [
// // //       {
// // //         title: "Research Facilities",
// // //         img: require("../../../Assets/researchImage1.jpg"),
// // //       },
// // //       {
// // //         title: "Department Activities",
// // //         // img: "https://source.unsplash.com/400x250/?meeting,business",
// // //         img: require("../../../Assets/researchImage2.png"),
// // //       },
// // //       {
// // //         title: "Learning Environment",
// // //         // img: "https://source.unsplash.com/400x250/?students,classroom",
// // //         img: require("../../../Assets/researchImage3.jpg"),
// // //       },
// // //     ],
// // //   },
// // // };

// // // export default bcomGeneralData;

// // const bcomGeneralData = {
// //   // Hero Image
// //   courseData: {
// //     title: "Commerce",
// //     image: require("../../../Assets/commerceBannerImage.png"),
// //   },

// //   // About Section
// //   about: {
// //     title: "About the Commerce Department",
// //     paragraphs: [
// //       `Since its founding in 1975, the Department of Commerce has been at the forefront of women’s commerce education in Tamil Nadu. From its humble beginning with just 50 students and one faculty member, it has grown into a leading centre offering Undergraduate, Postgraduate, M.Phil, and Ph.D. programs in both Aided and Self-Supporting streams.It also holds the distinction of being the first women’s college in Chennai to introduce M.Phil (1989–90) and Ph.D (1994–95) research programs.`,
// //       `Our programs give students a strong grounding in Accounting, Finance, Marketing, Taxation, HR, Research, and Entrepreneurship, while internships and practical training provide valuable real-world experience. We prepare students not just for careers, but to become confident professionals and leaders in the business world.`,
// //     ],
// //   },

// //   // Explore Programmes Section
// //   programmes: [
// //     {
// //       category: "Undergraduate Programmes",
// //       items: [
// //         { program: "B.Com General", department: "Commerce", stream: "Aided" },
// //         {
// //           program: "B.Com General",
// //           department: "Commerce",
// //           stream: "Self-supporting",
// //         },
// //       ],
// //     },
// //     {
// //       category: "Postgraduate Programmes",
// //       items: [
// //         { program: "M.Com General", department: "Commerce", stream: "Aided" },
// //         {
// //           program: "M.Com General",
// //           department: "Commerce",
// //           stream: "Self-supporting",
// //         },
// //       ],
// //     },
// //     {
// //       category: "Ph.D Programmes (Aided)",
// //       items: [{ program: "Commerce", department: "Commerce", stream: "Aided" }],
// //     },
// //   ],

// //   // Facilities Section
// //   facilities: {
// //     title: "Facilities & Infrastructure",
// //     description:
// //       "Classrooms, Research Room, Lab – Department of Mathematics, LCD Projectors, Laptops, PCs with Bluetooth Printers.",
// //     items: [
// //       {
// //         title: "Research Facilities",
// //         img: require("../../../Assets/researchImage1.jpg"),
// //       },
// //       {
// //         title: "Department Activities",
// //         img: require("../../../Assets/researchImage2.png"),
// //       },
// //       {
// //         title: "Learning Environment",
// //         img: require("../../../Assets/researchImage3.jpg"),
// //       },
// //     ],
// //   },

// //   // ⭐ Events & Activities Section (Added)
// //   eventsAndActivities: [
// //     {
// //       event: "Alumnae Connect '25: Our Pride Your Inspiration",
// //       resourcePersons: [
// //         "Ms. Deepa Seshadri, Senior Vice President, Special Initiatives - Apollo Hospitals",
// //         "Ms. Akshaya Chandrasekaran, Ex-Vice President, Barclays, Placement Training Specialist & Director, Super Kings Academy, Trichy",
// //       ],
// //     },
// //     {
// //       event:
// //         "Dr. Mrs. Kousalya Moorthy & Justice M.N. Moorthy Endowment Lecture on Union Budget 2025 - An Overview",
// //       resourcePersons: [
// //         "CA Sai Ajay N, Senior Consultant, VCAJ & Associates LLP, Chennai",
// //       ],
// //     },
// //     {
// //       event: "Workshop on Mind Matters: Exploring Stress and Mental Well-being",
// //       resourcePersons: [
// //         "Dr. M. Ramya Maheshwari, Assistant Professor & Head, Department of Psychology, Ethiraj College for Women",
// //       ],
// //     },
// //   ],
// //   researchHighlights: [
// //     {
// //       id: 1,
// //       title:
// //         "New Study Demonstrstrates Sustainable Catalytic Use of Hydroxyapatite for Water Purification",
// //       description: "Enter a blurb from the publication...",
// //       date: "June 2025",
// //       category: "Commerce",
// //     },
// //     {
// //       id: 2,
// //       title:
// //         "New Study Demonstrstrates Sustainable Catalytic Use of Hydroxyapatite for Water Purification",
// //       description: "Enter a blurb from the publication...",
// //       date: "June 2025",
// //       category: "Commerce",
// //     },
// //     {
// //       id: 3,
// //       title:
// //         "New Study Demonstrstrates Sustainable Catalytic Use of Hydroxyapatite for Water Purification",
// //       description: "Enter a blurb from the publication...",
// //       date: "June 2025",
// //       category: "Commerce",
// //     },
// //   ],
// // };

// // export default bcomGeneralData;

// export function convertDepartmentData(api) {
//   if (!api?.data) return null;

//   const d = api.data;
//   const add = d.additional_data || {};

//   return {
//     // ⭐ Hero Image
//     courseData: {
//       title: d.department_name || "",
//       image: `${adminUrl}${d.image_url}` || "",
//     },

//     // ⭐ About Section
//     about: {
//       title: `About the ${d.department_name} Department`,
//       paragraphs: add.about_department || [],
//     },

//     // ⭐ Programmes (API does NOT supply this → return empty)
//     programmes: [],

//     // ⭐ Facilities Section
//     facilities: {
//       title: "Facilities & Infrastructure",
//       description: add.facitltyDescription || "",
//       items: (add.facilityImages || []).map((img, index) => ({
//         title: `Facility Image ${index + 1}`,
//         img: `${adminUrl}${img}`,
//       })),
//     },

//     // ⭐ Events & Activities
//     eventsAndActivities:
//       add.cards?.activityCards?.map((item) => ({
//         event: item.events || "",
//         resourcePersons: item.resource_person || [],
//       })) || [],

//     // ⭐ Research Highlights
//     researchHighlights:
//       add.cards?.researchCards?.map((item, index) => ({
//         id: index + 1,
//         title: item.title || "",
//         description: item.description || "",
//         date: item.Date || "",
//         category: d.department_name || "",
//       })) || [],

//     // ⭐ Student Cards
//     studentSayAboutOutCollege:
//       add.cards?.studentcards?.map((item) => ({
//         student_name: item.student_name,
//         program: item.program,
//         year: item.year,
//         description: item.description,
//         studentImage_url: `${adminUrl}${item.studentImage_url}`,
//       })) || [],

//     // ⭐ Achievements
//     achievements:
//       add.cards?.acheivementCards?.map((item) => ({
//         achievement: item.acheivement,
//         student_details: item.student_details,
//       })) || [],

//     // ⭐ PDF
//     pdf_url: `${adminUrl}${add.pdf_url}` || "",
//   };
// }

export function convertDepartmentData(api) {
  if (!api?.data) return null;

  const d = api.data;
  const add = d.additional_data || {};

  // ⭐ Dynamic Programmes Mapping
  const programmes = (d.programs || []).reduce((acc, item) => {
    const category = item.programme_level?.level_name || "Unknown Level";

    if (!acc[category]) {
      acc[category] = { category, items: [] };
    }

    acc[category].items.push({
      program: item.program_name || "",

      programId:item?.program_id,
      department: item.academic?.academic_name || "",
      stream: item.funding_type?.type_name || "",
    });

    return acc;
  }, {});

  const programmeList = Object.values(programmes);

  return {
    // ⭐ Hero Image
    courseData: {
      title: d.department_name || "",
      image: `${adminUrl}${d.image_url}` || "",
    },

    // ⭐ About Section
    about: {
      title: `About the ${d.department_name} Department`,
      paragraphs: add.about_department || [],
    },

    // ⭐ Programmes → Dynamic
    programmes: programmeList,

    // ⭐ Facilities Section
    facilities: {
      title: "Facilities & Infrastructure",
      description: add.facitltyDescription || "",
      items: (add.facilityImages || []).map((img, index) => ({
        title: `Facility Image ${index + 1}`,
        img: `${adminUrl}${img}`,
      })),
    },

    // ⭐ Events & Activities
    eventsAndActivities:
      add.cards?.activityCards?.map((item) => ({
        event: item.events || "",
        resourcePersons: item.resource_person || [],
      })) || [],

    // ⭐ Research Highlights
    researchHighlights:
      add.cards?.researchCards?.map((item, index) => ({
        id: index + 1,
        title: item.title || "",
        description: item.description || "",
        date: item.Date || "",
        category: d.department_name || "",
      })) || [],

    // ⭐ Student Cards
    studentSayAboutOutCollege:
      add.cards?.studentcards?.map((item) => ({
        student_name: item.student_name,
        program: item.program,
        year: item.year,
        description: item.description,
        studentImage_url: `${adminUrl}${item.studentImage_url}`,
      })) || [],

    // ⭐ Achievements
    achievements:
      add.cards?.acheivementCards?.map((item) => ({
        achievement: item.acheivement,
        student_details: item.student_details,
      })) || [],

    // ⭐ PDF URL
    pdf_url: `${adminUrl}${add.pdf_url}` || "",
  };
}
