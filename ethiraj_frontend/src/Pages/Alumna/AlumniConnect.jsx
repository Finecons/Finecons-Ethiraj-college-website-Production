import { useState, useRef } from "react";
import {
  Box,
  Select,
  MenuItem,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Grid,
  Button,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import heroImage from "../../Assets/page1/alumuni-connect.png";
import alumni1 from "../../Assets/page1/alumni's/1.png";
import alumni2 from "../../Assets/page1/alumni's/2.png";
import alumni3 from "../../Assets/page1/alumni's/3.png";
import alumni4 from "../../Assets/page1/alumni's/4.png";
import committee1 from "../../Assets/page1/alumuni's2/1.png";
import committee2 from "../../Assets/page1/alumuni's2/2.png";
import committee3 from "../../Assets/page1/alumuni's2/3.png";
import committee4 from "../../Assets/page1/alumuni's2/4.png";
import committee5 from "../../Assets/jananArun.png";
import committee6 from "../../Assets/page1/alumuni's2/6.png";
import ethibandanImage from "../../Assets/ethibhaban_rgiht_mage.jpg";
import ethAwardImage from "../../Assets/page1/ethibandan-award.png";
import gallery1 from "../../Assets/page1/gallery/1.png";
import gallery2 from "../../Assets/page1/gallery/2.png";
import gallery3 from "../../Assets/page1/gallery/3.png";
import gallery4 from "../../Assets/page1/gallery/4.png";
import alumniConnectImage from "../../Assets/page1/alumuni-connect.png";
import alumniVideoThumbnail from "../../Assets/page1/alumuni-connect-thumbnail.png";
import CustomBannerSection from "../../Components/CustomBannerSection/CustomBannerSection";
import FacultySection from "./FacultySection";
import { Link } from "react-router-dom";
import ImageWidthSlider from "../CampusLife/Hostel/ImageWidthSlider";
import { adminUrl } from "../../constants/url";

/* ──────────────────────────────────────────────────────────
   IMPORT ALL IMAGES
────────────────────────────────────────────────────────── */

// POLITICS
import pol1 from "../../Assets/Alumni/Rectangle 191.png";
import pol2 from "../../Assets/Alumni/Rectangle 191-1.png";
import pol3 from "../../Assets/Alumni/Rectangle 191-2.png";
import pol4 from "../../Assets/Alumni/Rectangle 191-3.png";

// FINE ARTS
import fine1 from "../../Assets/Alumni/Rectangle 191-4.png";
import fine2 from "../../Assets/Alumni/Rectangle 191-5.png";
import fine3 from "../../Assets/Alumni/Rectangle 191-6.png";
import fine4 from "../../Assets/Alumni/Rectangle 191-7.png";
import fine5 from "../../Assets/Alumni/Rectangle 191-8.png";
import fine6 from "../../Assets/Alumni/Rectangle 191-9.png";
import fine7 from "../../Assets/Alumni/Rectangle 191-10.png";
import fine8 from "../../Assets/Alumni/Rectangle 191-11.png";

// ADMINISTRATIVE SERVICES
import admin1 from "../../Assets/Alumni/Rectangle 191-12.png";
import admin2 from "../../Assets/Alumni/Rectangle 191-13.png";
import admin3 from "../../Assets/Alumni/Rectangle 191-14.png";
import admin4 from "../../Assets/Alumni/Rectangle 191-15.png";
import admin5 from "../../Assets/Alumni/Rectangle 191-16.png";
import admin6 from "../../Assets/Alumni/Rectangle 191-17.png";
import admin7 from "../../Assets/Alumni/Rectangle 191-18.png";
import admin8 from "../../Assets/Alumni/Rectangle 191-19.png";

// SPORTS
import sports1 from "../../Assets/Alumni/Rectangle 191-20.png";
import sports2 from "../../Assets/Alumni/Rectangle 191-21.png";
import sports3 from "../../Assets/Alumni/Rectangle 191-22.png";
import sports4 from "../../Assets/Alumni/Rectangle 191-23.png";
import sports5 from "../../Assets/Alumni/Rectangle 191-24.png";
import sports6 from "../../Assets/Alumni/Rectangle 191-25.png";
import sports7 from "../../Assets/Alumni/Rectangle 191-26.png";
import sports8 from "../../Assets/Alumni/Rectangle 191-27.png";

// ENTERTAINMENT
import ent1 from "../../Assets/Alumni/Rectangle 191-28.png";
import ent2 from "../../Assets/Alumni/Rectangle 191-29.png";
import ent3 from "../../Assets/Alumni/Rectangle 191-30.png";
import ent4 from "../../Assets/Alumni/Rectangle 191-31.png";
import ent5 from "../../Assets/Alumni/Rectangle 191-32.png";
import ent6 from "../../Assets/Alumni/Rectangle 191-33.png";
import ent7 from "../../Assets/Alumni/Rectangle 191-34.png";
import ent8 from "../../Assets/Alumni/Rectangle 191-35.png";
import ent9 from "../../Assets/Alumni/Rectangle 191-36.png";

/* ──────────────────────────────────────────────────────────
   ALL CATEGORY DATA
────────────────────────────────────────────────────────── */

/* ──────────────────────────────────────────────────────────
   CORPORATE DATA (OLD DATA)
────────────────────────────────────────────────────────── */

// import alumni1 from "../../Assets/page1/alumni's/1.png";
// import alumni2 from "../../Assets/page1/alumni's/2.png";
// import alumni3 from "../../Assets/page1/alumni's/3.png";
// import alumni4 from "../../Assets/page1/alumni's/4.png";

const ALUMNAE_DATA = {
  Corporate: [
    {
      name: "Suchitra Ella",
      role: "Managing Director, Bharat Biotech",
      image: alumni1,
      info: {
        bio: [
          "Suchitra Ella is a prominent Indian entrepreneur, best known as the co-founder of Bharat Biotech International Ltd., a globally recognized biotechnology company based in Hyderabad, India.",
        ],
        achievements: [
          "Padma Bhushan - 2022",
          "South Indian Business Achievers Award - 2016",
        ],
      },
    },
    {
      name: "Kimsuka Narasimhan",
      role: "Director, Meesho Technologies Pvt Ltd.",
      image: alumni2,
      info: {
        bio: [
          "Kimsuka Narasimhan is currently Director at Meesho Technologies Pvt Ltd., Independent Director at Bharti Airtel Ltd. since 2019, Independent Director at Meesho Ltd. starting 2025, Member of The Institute of Chartered Accountants of India, Member of The Institute of Cost and Works Accountants of India, Member of CFO Board India, and Chief Financial Officer - Asia-Pacific Region at Kimberly-Clark Singapore Pte Ltd. Former roles include Independent Non-Executive Director at AstraZeneca Pharma India Ltd. from 2017 to 2022, and Chief Financial Officer, Director and Vice President at PepsiCo India Holdings Pvt Ltd.",
        ],
        achievements: [
          "Played a key role in identifying, classifying, and documenting numerous plant species across India.",
          "Actively contributed to the prestigious Flora of India, a major scientific work documenting India's plant diversity.",
          "Served as a senior scientist and contributed to national-level botanical surveys and research programs.",
          "Involved in describing and recording new or lesser-known plant species, enriching scientific knowledge.",
        ],
      },
    },
    {
      name: "Mrs. Revathy Balakrishnan",
      role: "Texas Teacher of the Year 2016",
      image: alumni3,
      info: {
        bio: [
          "Mrs. Revathy Balakrishnan (Texas) is recognized as an educator known for her dedication to teaching and student development in the United States. While she is different from the Indian actress Revathi, her contributions are in the field of education and academic mentoring.",
        ],
        achievements: [
          "Known for student-centered teaching methods that make learning engaging and interactive.",
          "Focuses on developing critical thinking and problem-solving skills.",
          "Actively supports students in both academic growth and personal development.",
          "Encourages participation, creativity, and confidence in the classroom.",
        ],
      },
    },
    {
      name: "Ms. Padmini Janaki",
      role: "CEO and Co-Founder, Mind & Mom",
      image: alumni4,
      info: {
        bio: [
          "Ms. Padmini Janaki, through her initiative Mind and Mom, focuses on promoting mental wellness and mindful parenting. She works towards empowering mothers by addressing emotional well-being, strengthening mother-child relationships, and spreading awareness through workshops and counseling sessions.",
        ],
        achievements: [
          "Established a platform focused on mental wellness and mindful parenting, supporting mothers and families.",
          "Successfully promoted awareness on emotional well-being, stress management, and parenting challenges among women.",
          "Conducted and contributed to workshops, seminars, and interactive sessions on parenting, child psychology, and mental health.",
          "Helped mothers develop confidence, emotional resilience, and positive parenting practices.",
        ],
      },
    },
  ],

  Politics: [
    {
      name: "Dr. Tamilisai Soundararajan",
      role: "Former Governor of Telangana",
      image: pol1,
      info: {
        bio: [
          "Dr. Tamilisai Soundararajan is an Indian doctor-turned-politician who has served as the Governor of Telangana and Lieutenant Governor of Puducherry.",
        ],
        achievements: [
          "Appointed as the Governor of Telangana (2019), becoming a prominent woman leader in Indian politics.",
          "Served as the Lieutenant Governor of Puducherry (2021-2025).",
          "Built a career as a medical professional, contributing to public health awareness.",
          "Former President of BJP Tamil Nadu, playing a key role in state-level politics.",
        ],
      },
    },
    {
      name: "Jayanthi Natarajan",
      role: "Former Minister of Forests & Environment",
      image: pol2,
      info: {
        bio: [
          "Ms. Jayanthi Natarajan is an Indian lawyer and politician who has made significant contributions to public life. She served as the Union Minister for Environment and Forests, playing an important role in shaping environmental policies.",
        ],
        achievements: [
          "Served as Union Minister for Environment and Forests, contributing to national environmental governance.",
          "Recognized for her work in public life and policy-level leadership.",
          "Contributed to legal and parliamentary discussions on governance and environment.",
          "Built a notable career as an Indian lawyer and politician.",
        ],
      },
    },
    {
      name: "Ms. Kanimozhi Karunanidhi",
      role: "Member of Parliament",
      image: pol3,
      info: {
        bio: [
          "Ms. Kanimozhi Karunanidhi is an Indian politician, poet, and Member of Parliament from Tamil Nadu. She represents the Thoothukudi constituency in the Lok Sabha and is a prominent leader of the DMK. She actively works on issues related to women's rights, social justice, and cultural development. She is also known for her contributions to Tamil literature and arts.",
        ],
        achievements: [
          "Member of Parliament (Lok Sabha) from Thoothukudi, representing people and addressing regional issues.",
          "Successfully won elections and established herself as a prominent DMK leader in Tamil Nadu politics.",
          "Strong advocate for women's rights, social justice, and freedom of expression.",
          "Recognized poet and writer, contributing to Tamil literature and cultural development.",
        ],
      },
    },
    {
      name: "Dr. Thamizhachi Thangapandian",
      role: "Member of Parliament",
      image: pol4,
      info: {
        bio: [
          "Dr. Thamizhachi Thangapandian is an Indian politician, writer, and academic known for her contributions to public life. She serves as a Member of Parliament from South Chennai, representing people and addressing social issues. She is an accomplished Tamil poet and author, contributing significantly to literature and culture. She has also worked as a professor and actively supports women's empowerment, education, and social development.",
        ],
        achievements: [
          "Elected as Member of Parliament (Lok Sabha) from South Chennai constituency.",
          "Acclaimed Tamil writer and poet, contributing significantly to Tamil literature.",
          "Strong voice for women's empowerment, education, and social issues.",
          "Former college professor, contributing to academics and student development.",
        ],
      },
    },
  ],

  "Fine Arts": [
    {
      name: "Dr. Padma Subrahmanyam",
      role: "Padma Bhushan",
      image: fine1,
      info: {
        bio: [
          "Dr. Padma Subrahmanyam is a renowned Bharatanatyam dancer, choreographer, and scholar. She is famous for reviving the ancient karana movements described in the Natya Shastra and bringing them into modern performances. She has received prestigious awards like the Padma Shri and Padma Bhushan for her contributions to Indian classical dance.",
        ],
        achievements: [
          "Awarded the Padma Shri and Padma Bhushan, two of India's highest civilian honours.",
          "Revived and popularized ancient karana dance movements from the Natya Shastra through research and performance.",
          "Performed Bharatanatyam on international stages, promoting Indian culture worldwide.",
          "Contributed to dance research, teaching, and choreography, influencing generations of dancers.",
        ],
      },
    },
    {
      name: "Dr. Sudha Raghunathan",
      role: "Padma Bhushan",
      image: fine2,
      info: {
        bio: [
          "Dr. Sudha Raghunathan is a celebrated Carnatic vocalist who has earned national recognition for her musical excellence. She has received prestigious awards, performed worldwide, and continues to inspire through her dedication to classical music and teaching.",
        ],
        achievements: [
          "Awarded the Padma Bhushan for her contribution to Indian classical music.",
          "One of the leading Carnatic singers, performing at major music festivals in India and abroad.",
          "Disciple of the legendary M. L. Vasanthakumari, carrying forward a rich musical tradition.",
          "Promotes music through concerts, teaching, and cultural initiatives, inspiring young musicians.",
        ],
      },
    },
    {
      name: "Ms. Meenakshi Chitharanjan",
      role: "Padma Shri",
      image: fine3,
      info: {
        bio: [
          "Ms. Meenakshi Chitharanjan is a passionate Bharatanatyam dancer who has contributed to the field through performances and cultural participation. Her dedication to classical dance and efforts in promoting the art form reflect her commitment to preserving Indian cultural heritage.",
        ],
        achievements: [
          "Trained in Bharatanatyam, showcasing a strong foundation in classical dance techniques.",
          "Performed in cultural programs and stage performances, gaining appreciation for expressive skills.",
          "Contributes to the promotion of Indian classical dance and culture.",
          "Involved in teaching or mentoring dance, encouraging young learners in the art form.",
        ],
      },
    },
    {
      name: "Ms. Srekala Bharath",
      role: "Kalaimamani",
      image: fine4,
      info: {
        bio: [
          "Ms. Srekala Bharath is a passionate Bharatanatyam dancer who has contributed to art through performances and cultural events. Her dedication to classical dance and her efforts in encouraging young talents reflect her commitment to preserving Indian traditions.",
        ],
        achievements: [
          "Trained in Bharatanatyam and demonstrates strong classical dance techniques.",
          "Performed in cultural programs and stage performances, earning appreciation.",
          "Contributes to promoting Indian classical dance and cultural heritage.",
          "Involved in teaching or mentoring dance, inspiring young learners.",
        ],
      },
    },
    {
      name: "Ms. Pavithra Srinivasan",
      role: "Founder, Arsha Kala Bharati",
      image: fine5,
    },
    {
      name: "Ms. Aishwarya Dwarakanath",
      role: "Classical Dancer",
      image: fine6,
    },
    {
      name: "Ms. Shreya Devnath",
      role: "Carnatic Vocalist",
      image: fine7,
    },
    {
      name: "Ms. Srinisha Jayaseelan",
      role: "Indian Playback Singer",
      image: fine8,
    },
  ],

  "Administrative Services": [
    {
      name: "Ms. Usha Kakarla IAS",
      role: "Principal Secretary School Education",
      image: admin1,
    },
    {
      name: "Ms. K. Vetriselvi IAS",
      role: "Director",
      image: admin2,
    },
    {
      name: "Ms. Jayashree Muralidharan IAS",
      role: "Special Secretary",
      image: admin3,
    },
    {
      name: "Ms. D. Sabitha IAS",
      role: "Chief Project Officer",
      image: admin4,
    },
    {
      name: "Ms. M.V. Jayagowri IPS",
      role: "Joint Director",
      image: admin5,
    },
    {
      name: "Ms. B. Samundeeswari IPS",
      role: "Joint Commissioner Police",
      image: admin6,
    },
    {
      name: "Ms. Meenakshi Vijayakumar IPS",
      role: "Joint Director",
      image: admin7,
    },
    {
      name: "Ms. Amreeta Titus IRS",
      role: "Joint Commissioner",
      image: admin8,
    },
  ],

  Sports: [
    {
      name: "Ms. Dipika Rebecca Pallikal",
      role: "India’s Squash Player",
      image: sports1,
    },
    {
      name: "Ms. Sudha Shah",
      role: "International Cricketer",
      image: sports2,
    },
    {
      name: "Ms. Rushmi Chakravarthi",
      role: "International Tennis Player",
      image: sports3,
    },
    {
      name: "Ms. Priyanga S",
      role: "13th Hockey India Senior Women National Championship",
      image: sports4,
    },
    {
      name: "Ms. V Jayalakshmi",
      role: "First Indian Women Tamil Nadu",
      image: sports5,
    },
    {
      name: "Ms. Joshna Chinappa",
      role: "Asian Squash Champion",
      image: sports6,
    },
    {
      name: "Ms. T. Mala",
      role: "Kabaddi Player",
      image: sports7,
    },
    {
      name: "Ms. Stacy Fernandes",
      role: "National Volley Ball Player",
      image: sports8,
    },
  ],

  Entertainment: [
    {
      name: "Ms. Trisha Krishnan",
      role: "Kalaimamani",
      image: ent1,
    },
    {
      name: "Ms. Aishwarya Rajesh",
      role: "Kalaimamani",
      image: ent2,
    },
    {
      name: "Ms. Kiruthiga Udhayanidhi",
      role: "Director",
      image: ent3,
    },
    {
      name: "Ms. Roshni Haripriyan",
      role: "Actress",
      image: ent4,
    },
    {
      name: "Ms. Latha Rajinikanth",
      role: "Singer",
      image: ent5,
    },
    {
      name: "Ms. Dhivyadharshini Neelakandan",
      role: "Television Host",
      image: ent6,
    },
    {
      name: "Ms. Priyanka Deshpande",
      role: "TV Presenter",
      image: ent7,
    },
    {
      name: "Ms. DevaDarshini Sukumaran",
      role: "Actress",
      image: ent8,
    },
    {
      name: "Ms. Archana Chandhoke",
      role: "TV Host",
      image: ent9,
    },
  ],
};

/* ─── DATA ─────────────────────────────────────────────── */

const ALUMNAE = [
  {
    name: "Suchitra Ella",
    role: "Managing Director, Bharat Biotech",
    category: "Corporate",
    img: alumni1,
    info: {
      bio: [
        "Suchitra Ella is a prominent Indian entrepreneur, best known as the co-founder of Bharat Biotech International Ltd., a globally recognized biotechnology company based in Hyderabad, India. She is widely celebrated as 'The Vaccine Lady of India' — a woman who helped protect over a billion lives.",
        "Suchitra Ella graduated with distinction from the University of Madras in Economics and Social Sciences — her academic roots firmly planted in Chennai, the home of Ethiraj College.",
      ],
      achievements: [
        "Padma Bhushan - India's 3rd Highest Civilian Award — 2022",
        "South Indian Business Achievers Award - 2016",
        "Zee TV Best Women Entrepreneur Award - National Recognition",
        "SAARC Women Entrepreneur Award - Regional Excellence",
      ],
    },
  },
  {
    name: "Kimouka Narasimhan",
    role: "Independent Director, Maasho",
    category: "Corporate",
    img: alumni2,
    info: {
      bio: [
        "Kimouka Narasimhan is a distinguished independent director and business leader with decades of experience in corporate governance and strategic management.",
        "An Ethirajian at heart, she has led numerous initiatives bridging academia and industry, mentoring the next generation of women leaders.",
      ],
      achievements: [
        "Top 100 Women Leaders in India - 2021",
        "Corporate Governance Excellence Award - 2019",
        "Women in Business Leadership Award - 2017",
      ],
    },
  },
  {
    name: "Mrs. Revathy Balakrishnan",
    role: "Texas Teacher of the Year 2016 from President Obama",
    category: "Education",
    img: alumni3,
    info: {
      bio: [
        "Mrs. Revathy Balakrishnan is an internationally acclaimed educator honoured as Texas Teacher of the Year 2016 by President Obama — a testament to her extraordinary contribution to education.",
        "A proud Ethirajian, her journey from Chennai to the White House is an inspiration to thousands of students across the world.",
      ],
      achievements: [
        "Texas Teacher of the Year 2016 - Awarded by President Obama",
        "National Excellence in Education Award",
        "Global Indian Educator Award - 2018",
      ],
    },
  },
  {
    name: "Ms. Padmini Janaki",
    role: "CEO and Co-Founder, Mind & Mom",
    category: "Healthcare",
    img: alumni4,
    info: {
      bio: [
        "Ms. Padmini Janaki is the CEO and Co-Founder of Mind & Mom, a pioneering mental wellness platform focused on maternal mental health — a space she has championed with relentless passion.",
        "Her Ethirajian roots gave her the foundation to build an enterprise that touches millions of lives across India and beyond.",
      ],
      achievements: [
        "Forbes 30 Under 30 - Social Entrepreneurs - 2020",
        "Best Women-Led Startup - National Startup Awards 2021",
        "CII Women Exemplar Award - 2022",
      ],
    },
  },
];

// const ETHIBANDHAN_GALLERY = [gallery1, gallery2, gallery3, gallery4];

const ETHIBANDHAN_GALLERY = [
  {
    src: gallery1,
    alt: "gallery1",
  },
  {
    src: gallery2,
    alt: "gallery2",
  },
  {
    src: gallery3,
    alt: "gallery3",
  },
  {
    src: gallery4,
    alt: "gallery4",
  },
];

const COMMITTEE = [
  {
    name: "Dr. K. Mythili",
    role: "Secretary, ECAA",
    dept: "Associate Professor, Department of Commerce",
    img: committee1,
    info: {
      bio: [
        "Dr. K. Mythili is the Secretary of the Ethiraj College Alumnae Association (ECAA) and an esteemed Associate Professor in the Department of Commerce at Ethiraj College for Women.",
        "With her dedicated commitment to the institution and the alumna community, she has been instrumental in fostering meaningful connections and advancing the mission of alumni engagement at the college.",
      ],
      achievements: [
        "Secretary, Ethiraj College Alumnae Association",
        "Associate Professor, Department of Commerce",
        "Active contributor to alumni engagement initiatives",
      ],
    },
  },
  {
    name: "Dr. N. Kavitha",
    role: "Treasurer, ECAA",
    dept: "Associate Professor, Department of Tamil",
    img: committee2,
    info: {
      bio: [
        "Dr. N. Kavitha serves as the Treasurer of the Ethiraj College Alumnae Association, bringing financial expertise and organizational acumen to her role.",
        "As an Associate Professor in the Department of Tamil, she combines academic excellence with her commitment to strengthening the alumni community and institutional growth.",
      ],
      achievements: [
        "Treasurer, Ethiraj College Alumnae Association",
        "Associate Professor, Department of Tamil",
        "Leader in alumni financial planning and resource management",
      ],
    },
  },
  {
    name: "Dr. M. Kanimozhi",
    role: "Member, ECAA",
    dept: "Associate Professor, Department of Plant Biology and Plant Bio Technology",
    img: committee3,
    info: {
      bio: [
        "Dr. M. Kanimozhi is an active member of the Ethiraj College Alumnae Association and an accomplished Associate Professor in the Department of Plant Biology and Plant Bio Technology.",
        "Her interdisciplinary expertise and passion for mentoring have made her a vital member of the ECAA committee, bridging the gap between the institution and its alumni network.",
      ],
      achievements: [
        "Member, Ethiraj College Alumnae Association",
        "Associate Professor, Department of Plant Biology and Plant Bio Technology",
        "Research and mentorship contributions to alumni community",
      ],
    },
  },
  {
    name: "Dr. Shantha Visalakshi. U",
    role: "Member, ECAA",
    dept: "Associate Professor, MCA Department",
    img: committee4,
    info: {
      bio: [
        "Dr. Shantha Visalakshi. U is a dedicated member of the Ethiraj College Alumnae Association and an Associate Professor in the MCA Department.",
        "Her technical expertise and commitment to alumni relations have significantly contributed to the association's mission of fostering professional networks and lifelong connections.",
      ],
      achievements: [
        "Member, Ethiraj College Alumnae Association",
        "Associate Professor, MCA Department",
        "Facilitator of professional development for alumni",
      ],
    },
  },
  {
    name: "Ms. R. Janani Arun",
    role: "Member, ECAA",
    dept: "Assistant Professor, Department of English",
    img: committee5,
    info: {
      bio: [
        "Ms. R. Janani Arun is a vibrant member of the Ethiraj College Alumnae Association and an Assistant Professor in the Department of English at Ethiraj College for Women.",
        "Her dynamic approach to alumni engagement and communication has strengthened the connections between the college, alumni, and current students through various initiatives.",
      ],
      achievements: [
        "Member, Ethiraj College Alumnae Association",
        "Assistant Professor, Department of English",
        "Leader in alumni communication and engagement programs",
      ],
    },
  },
  {
    name: "Ms. Vaishnavi S",
    role: "Member, ECAA",
    dept: "Assistant Professor, Department of Accounting and Finance (SS)",
    img: committee6,
    info: {
      bio: [
        "Ms. Vaishnavi S is a dedicated member of the Ethiraj College Alumnae Association and an Assistant Professor in the Department of Accounting and Finance (SS) at Ethiraj College for Women.",
        "Her commitment to academic excellence and alumni engagement helps strengthen the ties between the college and its alumnae network.",
      ],
      achievements: [
        "Member, Ethiraj College Alumnae Association",
        "Assistant Professor, Department of Accounting and Finance (SS)",
        "Active contributor to alumni initiatives and student development",
      ],
    },
  },
];

const NAV = [
  "Home",
  "Academics & Departments",
  "Students",
  "Campus Life",
  "Contact",
];

const CONTRIBUTION_OPTIONS = [
  "Deliver a Seminar",
  "Conduct a Workshop",
  "Mentor Students",
  "Career Guidance Sessions",
  "Placement/Interview Preparation",
  "Technical Training",
  "Industry Expert Talk / Guest Lecture",
  "Internship or Job Referrals",
  "Project Guidance",
  "Research Collaboration",
  "Sponsor or Support Department Activities",
  "Alumni Networking Events",
  "Other (please specify)",
];

/* ─── COMPONENT ─────────────────────────────────────────── */

export default function AlumniConnect() {
  const [selected, setSelected] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Corporate");
  const [formData, setFormData] = useState({
    name: "",
    batchYear: "",
    dob: "",
    department: "",
    mobileNo: "",
    email: "",
    currentAddress: "",
    designation: "",
    field: "",
    otherField: "",
  });
  const [selectedContributions, setSelectedContributions] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  const toggleContribution = (option) => {
    setSelectedContributions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const required = [
      "name",
      "batchYear",
      "dob",
      "department",
      "mobileNo",
      "email",
      "currentAddress",
      "designation",
      "field",
    ];
    const empty = required.filter((key) => !formData[key]?.trim());
    if (empty.length > 0) {
      setFormError("Please fill in all required fields marked with *");
      return;
    }
    setFormError("");
    setIsSubmitting(true);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || adminUrl;
      const response = await fetch(`${apiUrl}submitAlumniRegistration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          batchYear: formData.batchYear,
          dob: formData.dob,
          department: formData.department,
          mobile: formData.mobileNo,
          email: formData.email,
          currentAddress: formData.currentAddress,
          designation: formData.designation,
          field: formData.field,
          otherField: formData.otherField,
          contributions: selectedContributions,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSnackbarSeverity("success");
        setSnackbarMessage("Thank you for registering! Your details and confirmation emails have been sent.");
        setSnackbarOpen(true);
        setFormData({
          name: "",
          batchYear: "",
          dob: "",
          department: "",
          mobileNo: "",
          email: "",
          currentAddress: "",
          designation: "",
          field: "",
          otherField: "",
        });
        setSelectedContributions([]);
      } else {
        setSnackbarSeverity("error");
        setSnackbarMessage(result.Message || "Failed to submit registration. Please try again.");
        setSnackbarOpen(true);
      }
    } catch (err) {
      console.error("Alumni registration submit error:", err);
      setSnackbarSeverity("error");
      setSnackbarMessage("Failed to submit registration. Please check your network connection and try again.");
      setSnackbarOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderInputField = (name, label, type = "text") => (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Box
        component="input"
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        sx={{
          width: "100%",
          height: "46px",
          px: "14px",
          py: "10px",
          borderRadius: "4px",
          border:
            formError && !formData[name]?.trim()
              ? "1px solid #E53935"
              : "1px solid #D5D7E2",
          backgroundColor: "#FFFFFF",
          fontSize: "14px",
          fontFamily: "Inter, sans-serif",
          color: "#1F2937",
          outline: "none",
          boxSizing: "border-box",
          transition: "border-color 0.2s ease",
          "&:focus": {
            borderColor: "#56507A",
          },
        }}
      />
      {!formData[name] && (
        <Box
          component="span"
          sx={{
            position: "absolute",
            left: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: "#6B7280",
            fontSize: "14px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {label} <span style={{ color: "#E53935" }}>*</span>
        </Box>
      )}
    </Box>
  );
  const alumnaeScrollRef = useRef(null);
  const committeeScrollRef = useRef(null);

  const categories = Object.keys(ALUMNAE_DATA);
  const filteredAlumnae = (ALUMNAE_DATA[selectedCategory] || []).map(
    (member) => ({
      ...member,
      category: selectedCategory,
    })
  );

  const alumnaeData = filteredAlumnae.map((a) => ({
    name: a.name,
    title: a.role,
    image: a.image,
    info: a.info,
    img: a.image,
  }));

  const committeeData = COMMITTEE.map((m) => ({
    name: m.name,
    title: m.role,
    image: m.img,
    qualification: m.dept,
    info: m.info,
    img: m.img,
  }));

  const handleReadMore = (item) => {
    const originalItem = item.info
      ? item
      : ALUMNAE.find((a) => a.name === item.name) ||
      COMMITTEE.find((c) => c.name === item.name);
    setSelected(originalItem);
  };

  const bannerDatas = {
    image: heroImage,
    breadCrumbsData: [{ name: "Home", to: "/" }, { name: "Alumni" }],
    title: "Alumni Connect",
  };
  return (
    <Box>
      <CustomBannerSection bannerDatas={bannerDatas} />

      <Box px={{ xs: 2, sm: 3, md: "74px", lg: "94px" }}>
        {/* ══ QUOTE ═══════════════════════════════════════════ */}
        <Box>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              textAlign: "center",
              py: { lg: "72px", md: "60px", xs: "40px", sm: "50px" },
            }}
          >
            "Once an Ethirajian, Always an Ethirajian."
          </Typography>
        </Box>

        {/* ══ ABOUT ═══════════════════════════════════════════ */}
        <Box component="section">
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" },
            }}
          >
            About Alumni Connect
          </Typography>

          <Typography variant="typographyBodyInterMaintext">
            and its distinguished alumnae. It serves as a vibrant digital space
            where former students can reconnect with their alma mater, network
            with fellow alumnae, and engage with current students and faculty.
            Through mentorship, professional networking, knowledge sharing, and
            institutional collaboration, the platform fosters meaningful
            engagement and collective growth. By bringing together generations
            of Ethirajians across the world, Alumni Connect celebrates the
            college's legacy while inspiring future leaders.
          </Typography>
        </Box>

        {/* ══ DISTINGUISHED ALUMNAE ═══════════════════════════ */}
        <Box
          component="section"
          sx={{ py: { xs: "40px", sm: "50px", md: "60px", lg: "72px" } }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
              mb: "40px",
            }}
          >
            <Typography variant="headingTextNewsreaderMedium">
              Distinguished Alumnae
            </Typography>
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              MenuProps={{
                PaperProps: {
                  sx: {
                    mt: 0.8,
                    borderRadius: "10px",
                    minWidth: "164px",
                    backgroundColor: "#f7f7f7",
                    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #e1e1e1",
                  },
                },
              }}
              sx={{
                minWidth: "180px",
                height: "40px",
                px: "8px",
                borderRadius: "9999px",
                border: "1px solid #cdb5c1",
                fontSize: "13px",
                color: "#5f2f4b",
                bgcolor: "#faf7f9",
                "& .MuiSelect-select": {
                  py: "8px",
                  pl: "8px",
                  pr: "26px !important",
                },
                "& .MuiSelect-icon": {
                  color: "#8f6f81",
                  right: 10,
                },
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                "&:hover": { borderColor: "#b89aa9" },
              }}
            >
              {categories.map((cat, index) => (
                <MenuItem
                  key={cat}
                  value={cat}
                  sx={{
                    fontSize: "14px",
                    color: "#5f2f4b",
                    py: "9px",
                    px: "14px",
                    borderBottom:
                      index !== categories.length - 1
                        ? "1px solid #d9d9d9"
                        : "none",
                    minHeight: "unset",
                    "&.Mui-selected": {
                      backgroundColor: "transparent",
                    },
                    "&.Mui-selected:hover": {
                      backgroundColor: "#ececec",
                    },
                    "&:hover": {
                      backgroundColor: "#ececec",
                    },
                  }}
                >
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </Box>

          <FacultySection
            items={alumnaeData}
            trackSx={{ mb: 3 }}
            onReadMore={handleReadMore}
          />
        </Box>

        {/* ══ REGISTER TO BECOME AN ALUMNI FORM ═══════════════ */}
        <Box
          component="section"
          sx={{
            py: { lg: "60px", md: "50px", xs: "36px", sm: "44px" },
          }}
        >
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              mb: { xs: "20px", sm: "24px", md: "30px" },
              color: "#1D1D1D",
            }}
          >
            Register to become an Alumni in Ethiraj
          </Typography>

          <Box component="form" onSubmit={handleRegisterSubmit}>
            <Typography
              sx={{
                fontFamily: "Newsreader, Georgia, serif",
                fontSize: { xs: "20px", sm: "22px", md: "24px" },
                fontWeight: 500,
                color: "#1D1D1D",
                mb: { xs: "18px", md: "24px" },
              }}
            >
              Personal Details
            </Typography>

            {/* 2-column grid for Personal Details */}
            <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
              {/* Row 1 */}
              <Grid size={{ xs: 12, sm: 6 }}>
                {renderInputField("name", "Name")}
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                {renderInputField("batchYear", "Batch / Year")}
              </Grid>

              {/* Row 2 */}
              <Grid size={{ xs: 12, sm: 6 }}>
                {renderInputField("dob", "Date of Birth")}
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                {renderInputField("department", "Department")}
              </Grid>

              {/* Row 3 */}
              <Grid size={{ xs: 12, sm: 6 }}>
                {renderInputField("mobileNo", "Mobile No")}
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                {renderInputField("email", "Email ID", "email")}
              </Grid>

              {/* Row 4 */}
              <Grid size={{ xs: 12, sm: 6 }}>
                {renderInputField("currentAddress", "Current Address")}
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                {renderInputField("designation", "Designation")}
              </Grid>

              {/* Row 5 */}
              <Grid size={{ xs: 12, sm: 6 }}>
                {renderInputField("field", "Field")}
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }} sx={{ display: { xs: "none", sm: "block" } }} />
            </Grid>

            {/* Contribution Question */}
            <Typography
              sx={{
                fontFamily: "Newsreader, Georgia, serif",
                fontSize: { xs: "19px", sm: "21px", md: "23px" },
                fontWeight: 500,
                color: "#1D1D1D",
                mt: { xs: "36px", md: "48px" },
                mb: { xs: "20px", md: "24px" },
                lineHeight: 1.4,
              }}
            >
              In what ways would you like to contribute to the department/college? (Select all that apply)
            </Typography>

            {/* Contribution Options Grid */}
            <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
              {CONTRIBUTION_OPTIONS.map((option) => {
                const isChecked = selectedContributions.includes(option);
                return (
                  <Grid size={{ xs: 12, sm: 6, md: 3 }} key={option}>
                    <Box
                      onClick={() => toggleContribution(option)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        cursor: "pointer",
                        userSelect: "none",
                        py: 0.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: "18px",
                          height: "18px",
                          minWidth: "18px",
                          borderRadius: "3px",
                          border: isChecked ? "none" : "1.5px solid #4B5563",
                          backgroundColor: isChecked ? "#1F2937" : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.15s ease",
                        }}
                      >
                        {isChecked && (
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.5 6L5 8.5L9.5 3.5"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontFamily: "Inter, sans-serif",
                          color: "#1F2937",
                          lineHeight: 1.4,
                        }}
                      >
                        {option}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>

            {/* Conditional "Specify Your Field" Input */}
            {selectedContributions.includes("Other (please specify)") && (
              <Box sx={{ mt: "20px", maxWidth: { xs: "100%", sm: "480px" } }}>
                <Box
                  component="input"
                  type="text"
                  name="otherField"
                  placeholder="Specify Your Field"
                  value={formData.otherField}
                  onChange={handleInputChange}
                  sx={{
                    width: "100%",
                    height: "46px",
                    px: "14px",
                    py: "10px",
                    borderRadius: "4px",
                    border: "1px solid #D5D7E2",
                    backgroundColor: "#FFFFFF",
                    fontSize: "14px",
                    fontFamily: "Inter, sans-serif",
                    color: "#1F2937",
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s ease",
                    "&:focus": {
                      borderColor: "#56507A",
                    },
                  }}
                />
              </Box>
            )}

            {formError && (
              <Typography
                sx={{
                  color: "#E53935",
                  fontSize: "13px",
                  fontFamily: "Inter, sans-serif",
                  mt: 2,
                  textAlign: "center",
                }}
              >
                {formError}
              </Typography>
            )}

            {/* Register Now Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: { xs: "36px", md: "48px" },
              }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                sx={{
                  backgroundColor: "#56507A",
                  color: "#FFFFFF",
                  borderRadius: "24px",
                  px: { xs: 4, sm: 5 },
                  py: 1.2,
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  fontFamily: "Inter, sans-serif",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#453F63",
                    boxShadow: "none",
                  },
                  "&.Mui-disabled": {
                    backgroundColor: "#9A95B2",
                    color: "#FFFFFF",
                  },
                }}
              >
                {isSubmitting ? "SUBMITTING..." : "REGISTER NOW >"}
              </Button>
            </Box>
          </Box>
        </Box>

        <Grid
          container
          spacing={{ xs: 3, md: 5 }}
          sx={{
            py: { lg: "72px", md: "60px", xs: "40px", sm: "50px" },
          }}
          alignItems={{ xs: "flex-start", md: "stretch" }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="headingTextNewsreaderMedium"
              sx={{ mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" } }}
            >
              ETHIBANDHAN
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
                src={ethibandanImage}
                alt="Hostel room"
                sx={{
                  width: "100%",
                  height: { xs: 260, sm: "400px", md: "100%" },
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Typography
              variant="typographyBodyInterNormal"
              sx={{ color: "#4a4f5d", mb: 2.5, lineHeight: 1.8 }}
            >
              Ethiraj College for Women celebrated its annual Alumnae Meet,
              Ethibandhan, with warmth and nostalgia on 26th January 2026.
            </Typography>
            <Typography
              variant="typographyBodyInterNormal"
              sx={{ color: "#4a4f5d", mb: 3, lineHeight: 1.8 }}
            >
              The event was graced by Kalaimamani, Dr. Srekala Bharath, who
              inspired everyone with her thoughts on friendship and college
              memories. Thiru V. M. Muralidharan, Chairman, delivered the
              Presidential Address, while Dr. S. Uma Gowrie, Principal &
              Secretary welcomed the gathering.
            </Typography>
            <Typography
              variant="typographyBodyInterNormal"
              sx={{ color: "#4a4f5d", mb: 3, lineHeight: 1.8 }}
            >
              Our distinguished alumna, Mrs. Kalpana Muralidharan, along with
              Vice-Principals Mrs. Beulah Jebakumari Suganthi and Dr. M.
              Jeyanthi, joined the celebration. The meet concluded with a vote
              of thanks by Dr. K. Mythili, Secretary, ECAA.
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: { md: "flex", xs: "none" } }}
          >
            <Box
              component="img"
              src={ethibandanImage}
              alt="Hostel room"
              sx={{
                width: "100%",
                height: { xs: 260, sm: "400px", md: "100%" },
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>

        {/* ══ GALLERY ═════════════════════════════════════════ */}
        <Box
          // sx={{ mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" } }}
          sx={{ py: { xs: "40px", sm: "50px", md: "60px", lg: "72px" } }}
        >
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{ mb: { xs: "20px", md: "28px" } }}
          >
            Gallery{" "}
          </Typography>
          <ImageWidthSlider
            images={ETHIBANDHAN_GALLERY}
            imageHeight={{ xs: 220, sm: 240, md: 280 }}
            itemWidth={{ xs: 240, sm: 260, md: 300, lg: 340 }}
          />
        </Box>
        {/* ══ ALUMNAE ASSOCIATION ══════════════════════════════ */}
        <Box component="section">
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              mb: "20px",
            }}
          >
            Alumni Association
          </Typography>
          <Typography
            variant="headingNameTextInterMedium"
            sx={{ color: "#6B3C58", mb: "40px" }}
          >
            Committee Members
          </Typography>

          <FacultySection
            items={committeeData}
            showDefaultDetails={true}
            trackSx={{ mb: 3 }}
          // onReadMore={handleReadMore}
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
              src={alumniConnectImage}
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
              Alumni Connect League
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
                src={alumniConnectImage}
                alt="Hostel room"
                sx={{
                  width: "100%",
                  height: { xs: 260, sm: "400px", md: "100%" },
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Typography
              variant="typographyBodyInterNormal"
              sx={{ color: "#4a4f5d", mb: 2.5, lineHeight: 1.8 }}
            >
              Alumnae Connect League is a part of Ethisakthi League of Ethiraj
              College for Women (Autonomous), Chennai. This league is dedicated
              to fostering meaningful and lasting connections between the
              college and its alumnae. It encourages former students to stay
              engaged with the institution by sharing their experiences,
              offering mentorship, and contributing to the growth of the college
              community.
            </Typography>
            <Typography
              variant="typographyBodyInterNormal"
              sx={{ color: "#4a4f5d", mb: 3, lineHeight: 1.8 }}
            >
              Through networking events and collaborative initiatives, the
              league creates a platform for alumnae to connect, inspire, and
              guide current students. It aims to build a strong and supportive
              network that celebrates achievements and strengthens the bond
              between past and present generations. Its mission is to nurture
              lifelong relationships and create a collaborative space for
              learning, growth, and mutual support.
            </Typography>

            {/* <Button
              variant="outlined"
              // startIcon={<Box component="img" src={downloadPdfIconImage} />}
              sx={{
                borderRadius: "24px",
                textTransform: "none",
                px: 2.8,
                py: 0.9,
                borderColor: "#8a8f9c",
                color: "#2f2f3a",
              }}
            >
              Register to Become a Mentor
            </Button> */}
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
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
              href="mailto:etirajalumnae@gmail.com"
              sx={{
                color: "#4a4f5d",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              <Typography variant="typographySubheadingText">
                etirajalumnae@gmail.com
              </Typography>
            </Link>
          </Grid>

          {/* <Grid size={{ xs: 12, md: 1 }} sx={{ display: { xs: "none", md: "flex" }, alignItems: "stretch" }}>
            <Divider
              orientation="vertical"
              sx={{
                height: "auto",
                borderColor: "#d0d0d0",
                mx: { md: 3, lg: 4 },
              }}
            />
          </Grid> */}

          <Grid
            size={{ xs: 12, md: 6 }}
          //  sx={{
          //     borderLeft: { md: "1px solid black" },
          //     paddingLeft: { xs: "0px", md: "30px" },
          //   }}
          >
            <Box
              sx={{
                borderLeft: { md: "1px solid black" },
                paddingLeft: { xs: "0px", md: "30px" },
                mt: { xs: "24px", sm: "24px", md: "34px", lg: "48px" },
                mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" },
              }}
            >
              <Typography
                variant="headingTextNewsreaderMedium"
                sx={{
                  mb: { xs: "16px", sm: "16px", md: "24px" },
                }}
              >
                Our Ethiraj Moments
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  overflow: "hidden",
                  borderRadius: "8px",
                  backgroundColor: "#f0f0f0",
                  "&:hover .playButton": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={alumniVideoThumbnail}
                  alt="Our Ethiraj Moments"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  className="playButton"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    "&::after": {
                      content: '""',
                      width: 0,
                      height: 0,
                      borderLeft: "20px solid #d946a6",
                      borderTop: "12px solid transparent",
                      borderBottom: "12px solid transparent",
                      marginLeft: "4px",
                    },
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* ══ MODAL ═══════════════════════════════════════════ */}
        <Dialog
          open={!!selected}
          onClose={() => setSelected(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 3,
              px: 2,
            },
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={() => setSelected(null)}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              border: "1px solid #ccc",
              width: 34,
              height: 34,
              zIndex: 10,
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>

          <DialogContent sx={{ pt: 3 }}>
            {/* Title */}
            <Typography
              variant="headingTextNewsreaderMedium"
              sx={{
                fontWeight: 500,
                mb: 3,
              }}
            >
              Alumni Info
            </Typography>

            {/* Content Grid */}
            <Grid container spacing={4} sx={{ pb: 2 }}>
              {/* Image - Left Column */}
              <Grid item size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src={selected?.img}
                  alt={selected?.name}
                  sx={{
                    height: "300px",
                    width: "100%",
                    borderRadius: 2,
                    objectFit: "cover",
                  }}
                />
              </Grid>

              {/* Content - Right Column */}
              <Grid item size={{ xs: 12, md: 8 }}>
                {/* Name and Designation */}
                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="subHeadingTextInterMedium"
                    sx={{
                      mb: 0.5,
                      fontFamily: "Newsreader"
                    }}
                  >
                    {selected?.name}
                  </Typography>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ color: "#6b7280" }}
                  >
                    {selected?.role}
                  </Typography>
                </Box>

                {/* Bio */}
                {selected?.info?.bio?.map((para, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography
                      variant="typographyBodyInterNormal"
                      sx={{ lineHeight: 1.8 }}
                    >
                      {para}
                    </Typography>
                  </Box>
                ))}

                {/* Achievements */}
                <Box sx={{ mt: 3 }}>
                  <Typography
                    variant="subHeadingTextInterMedium"
                    sx={{
                      mb: 1,
                      fontFamily: "Newsreader"
                    }}
                  >
                    Achievements
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    {selected?.info?.achievements?.map((ach, index) => (
                      <Typography
                        key={index}
                        variant="typographyBodyInterNormal"
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1.5,

                        }}
                      >
                        <Box component="span" sx={{ flexShrink: 0 }}>
                          •
                        </Box>
                        <Box component="span">{ach}</Box>
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>

        {/* Snackbar Notification */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity={snackbarSeverity}
            sx={{ width: "100%", borderRadius: "8px" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
