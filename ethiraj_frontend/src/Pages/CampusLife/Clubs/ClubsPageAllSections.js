import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import campusClubsImage from "../../../Assets/Clubs/swacchImage.jpg";
import Health from "../../../Assets/Clubs/holisticImage.jpg";
import facilities from "../../../Assets/Clubs/campusInnovationImage.jpg";

import sports from "../../../Assets/Campuslife/healthwellnesImageSlider1.png";
import Activities from "../../../Assets/Campuslife/Activities & Events.jpg";
import clubsBanner from "../../../Assets/Campuslife/Clubs.png";

import CustomBannerSection from "../../../Components/CustomBannerSection/CustomBannerSection";
// clubs

import nationalService from "../../../Assets/Clubs/National Service Scheme (NSS).png";
import citizenconsumerclub from "../../../Assets/Clubs/nationalCadetCorps.jpg";
import rotaractServive from "../../../Assets/Clubs/rotaractClub.png";
import redribbon from "../../../Assets/Clubs/Red Ribbon Club.jpg";
import yuvaTourism from "../../../Assets/Clubs/Yuva Tourism Club.png";
import astronomy from "../../../Assets/Clubs/Astronomy Club.png";
import heritage from "../../../Assets/Clubs/Heritage Club.png";

import illumeClub from "../../../Assets/Clubs/ILLUME-CSR Club.png";
import quantum from "../../../Assets/Clubs/Quantum Quarks.png";
import treatoClub from "../../../Assets/Clubs/Teatro Club.jpg";
import fineArts from "../../../Assets/Clubs/Fine Arts Club.png";
import filmAppreciation from "../../../Assets/Clubs/Film Appreciation & Photography Club.jpg";
import literaryClub from "../../../Assets/Clubs/Literary Club.jpg";
import SectionAccordion from "./SectionAccordion";

// New Images Add
import disasterMitigation from "../../../Assets/Clubs/disasterMitigationImage.jpg";
import socialWorks from "../../../Assets/Clubs/socialImage.png";
import greenEnviro from "../../../Assets/Clubs/greenEnviroImage.jpg";
import websiteLeague from "../../../Assets/Clubs/websiteLeagueImage.png";
import tamilTeatro from "../../../Assets/Clubs/TamilTeatro.jpg";
import quizClub from "../../../Assets/Clubs/QuizClub.jpg";
import artsClub from "../../../Assets/Clubs/ArtsClub.jpg";
import debateClub from "../../../Assets/Clubs/DebateClub.jpg";
import esquare from "../../../Assets/Clubs/esqaure.png";
import yrc from "../../../Assets/Clubs/yrc.png";

import youthEconomicSociety from "../../../Assets/Clubs/YouthEconomicSociety.png";
import bookFairy from "../../../Assets/Clubs/bookFairy.png";
import covalentClub from "../../../Assets/Clubs/CovalentClub.png";

import igniteClub from "../../../Assets/Clubs/ignite.png";
import journalClub from "../../../Assets/Clubs/JournalClub.png";
import yuvaClub from "../../../Assets/Clubs/YUVAClub.png";
import enactus from "../../../Assets/Clubs/EnactusReport.png";
import citizenConsumer from "../../../Assets/Clubs/Citizen Consumer Club (CCC).png";
import collegeBand from "../../../Assets/Clubs/collegeBrand.jpg";
import final from "../../../Assets/Clubs/financialLiteracy.png";
import alumniConnect from "../../../Assets/Clubs/alumni.jpg";
import blackImage from "../../../Assets/blackImage.jpg";
import enviro from "../../../Assets/Clubs/enviroClub.jpg";

const ClubsPageAllSections = () => {
  const bannerDatas = {
    image: clubsBanner,
    breadCrumbsData: [
      { name: "Home", to: "/" },
      { name: "Campus Life", to: "/campuslife" },
      { name: "Clubs" },
    ],
    title: "Clubs",
  };

  const LeaguesData = [
    {
      heading: "Leagues",
      description:
        "Purpose-driven initiatives focused on innovation, sustainability, well-being, and social impact across campus and community.",
      additional_data: {
        card_design: [
          {
            title: "Green Enviro",
            quote: "Engaging Sustainable Actions for a Greener Future",
            Description: [
              "Green Enviro League is dedicated to promoting environmental awareness and sustainable living in and off campus. It encourages our students and college as a community to adopt eco-friendly practices such as tree planting, waste reduction (Plastic and e -waste), and conservation of natural resources.",
              "Through campaigns, waste donation drives, and volunteer activities, the league inspires collective action to do our role in protecting our planet. Guided by the principles of United Nations SDGs, we aim to create a cleaner, greener future for present and future generations.",
            ],
            // email: "league@ethirajcollege.edu.in",
            image: greenEnviro,
          },
          {
            title: "Campus Innovation",
            quote: "Transforming Ideas into Impactful Innovations",
            Description: [
              "The Campus Innovation League is a dynamic platform that nurtures creativity and innovation among students from diverse academic backgrounds. By collaborating on projects like Wall of Knowledge, Doodle Dreams, 3D Art, and Aqua Canva competitions and scrabble competitions, students gain hands-on experience in innovation and entrepreneurship.",

              "These projects help enhance critical thinking, teamwork, and leadership skills, bridging the gap between academic learning and industry requirements. By promoting a culture of experimentation and continuous learning, the League empowers students to become future-ready innovators and change-makers",
            ],
            // name: "Ms.V. Nevedha",
            // email: "nevedha_v@ethirajcollege.edu.in ",
            image: facilities,
          },
           {
            title: "Alumni Connect",
          quote:"Empowering success through alumnae mentoring",
            Description: [
              "Alumnae Connect League is dedicated to fostering meaningful and lasting connections between the college and its alumnae. It encourages former students to remain actively engaged with the institution by sharing their experiences, offering mentorship, and contributing to the growth of the student community",
              "Through guest lectures and interactive sessions, the League provides a dynamic platform for alumnae to connect, inspire, and guide current students. The initiative aims to build a strong, supportive network that celebrates achievements while strengthening the bond between alumnae and current students. Its mission is to nurture lifelong relationships and create a collaborative space that promotes learning, growth, and mutual support."
            ],
            image: alumniConnect,
            // name: "Mrs. C.S. Jayalakshmi",
            // email: "financial_literacyclub@ethirajcollege.edu.in",
          },
           {
            title: "Holistic Well-being",
            quote:"Nurturing Mind, Body, and Inner Balance",
            Description: [
              "The Holistic Well-Being League is a student-driven initiative committed to fostering a balanced, enriched student life by addressing the interconnected dimensions of health, including mental, emotional, physical, and spiritual.",
              "The League provides a supportive space where students can engage in activities such as yoga, meditation and fitness sessions, alongside discussions on stress management and work-life balance.",
              "By integrating wellness into everyday campus life, the League aims to foster resilience, self-awareness, and a sense of inner balance among students. The League strives to nurture individuals who are not only academically competent but also emotionally grounded."
            ],
            // name: "Dr. P. S.Vijaya Lakshmi",
            // email: "vijayalakshmi_ps@ethirajcollege.edu.in",
            image: Health,
          },
          {
            title: "Disaster Mitigation",
            quote:"Safety for All and Resilience Building",
            Description: [
              "The Disaster Mitigation League is actively involved in promoting safety awareness, mental well-being, and disaster preparedness. It organises a variety of educational and practical activities such as awareness events, drills, and field visits. Key initiatives include mental health awareness and specifically suicide prevention which helps students understand psychological challenges and coping strategies through discussions, street plays and film screenings.",
              "The league conducts regular fire safety drills and fire evacuation mock drills which helps students gain hands on experience in collaboration with the Tamil Nadu Fire and Rescue Service Department. The league focuses on equipping students with practical knowledge and encouraging community awareness on disaster management."
            ],
      
            image: disasterMitigation,
          },
          {
            title: "⁠Website League",
        quote:"Augmenting Knowledge through Digital Communication",
            Description: [
              "The Website League plays a vital role in supporting and monitoring the college website, ensuring timely updates and effective digital communication.",
              "The league actively assists the website development team while also involving student members in content creation, review, and coordination, thereby fostering technical skills and teamwork. The league is involved in awareness initiatives through LED display activities on significant international, National, and social events"
                        ],
          
            image: websiteLeague,
          },
          {
            title: "Swacch Ethiraj",
            quote:"Together for a Cleaner Tomorrow",
            Description: [
              "The Swachh Ethiraj League is a campus cleanliness initiative modelled after the Swachh Bharat Mission, focused on raising awareness and promoting healthy sanitation practices among students to foster a responsible, healthy campus environment.",
              "The league aims to instil civic responsibility and develop students into socially conscious citizens through various activities such as talks, awareness programs, and clean-up drives to maintain campus hygiene."
            ],
           
            image: campusClubsImage,
          },
         
          {
            title: "Social Works",
            quote:"Promoting Social Responsibility, Awareness and Active Involvement in Community Welfare",
            Description: [
              "Social Works League is an initiative aimed at promoting social responsibility, awareness, and active participation in community welfare activities.",
              "It serves as a platform for individuals to come together, identify societal issues, and contribute through meaningful programs and campaigns. The Social Works League regularly organizes creative and awareness-based events. These include slogan-making and poster-making competitions. The students are volunteers in beach clean ups, visits to old age homes, Orphanages and street plays."
            ],
         
            image: socialWorks,
          },

          
         
        ],
      },
    },
  ];

  const collegeClubsData = [
    {
      heading: "Other Clubs",
      description:
        "Department-led and special interest clubs that deepen academic engagement while nurturing skills, curiosity, and interdisciplinary learning.",
      additional_data: {
        card_design: [
          {
            title: "Quantum Quarks",
            Description: [
              "Quantum Quarks enriches chemistry education through student-led programmes addressing academic, professional, and personal development. The club hosts expert sessions on mental health, intellectual property rights, and emerging issues shaping science and society.",
            ],
            image: quantum,
          },
          {
            title: "ILLUME-CSR Club",
            Description: [
              "ILLUME fosters socially conscious citizens by engaging students in compassionate, community-focused and sustainability-driven initiatives. Since 2014, it has nurtured responsibility, inclusivity, and active social engagement beyond the classroom.",
            ],
            image: illumeClub,
          },
          {
            title: "Heritage Club",
            Description: [
              "The Heritage Club promotes historical awareness and cultural preservation through student-led initiatives, lectures, and commemorative events. Launched in 2025, it also provides a creative platform through Heritage Zine to showcase student voices and heritage perspectives.",
            ],
            email: "heritageclubethiraj@gmail.com",
            image: heritage,
          },
          {
            title: "Astronomy Club",
            Description: [
              "The Astronomy Club ignites curiosity in space science through telescope observations, expert talks, hands-on workshops, and field visits. With over 1,000 student members, it offers rich experiential learning and academic credit for sustained participation.",
            ],
            image: astronomy,
            email: "astroclub_phy@ethirajcollege.edu.in",
          },
          {
            title: "Yuva Tourism Club",
            Description: [
              "The Yuva Tourism Club promotes tourism education, leadership, and cultural awareness through experiential learning, workshops, and heritage initiatives. Since 2022, it has actively engaged students in sustainable and inclusive tourism practices through campus and outreach programs.",
            ],
            image: yuvaTourism,
            email: "yuvatourismclubethiraj@gmail.com",
          },
          {
            title: "Youth Economic Society (YES Club)",
            Description: [
              "The Youth Economic Society (YES Club) of the Department of Business Economics, Ethiraj College for Women, nurtures economic awareness, critical thinking, and leadership through workshops, debates, alumnae sessions, and social awareness programmes.",
            ],
            image: youthEconomicSociety,
          },
          {
            title: "Book Fairy",
            Description: [
              "Book Fairy is a student-run in-house library initiative of the PG Department of English (SS), Ethiraj College, housing a collection of around 150 books across classics, self-help, contemporary literature, and popular fiction.",
            ],
            image: bookFairy,
          },
          {
            title: "Covalent Club",
            Description: [
              "The Covalent Club is a student-run academic forum of the Biochemistry Department, Ethiraj College, fostering scientific curiosity, research skills, and interdisciplinary learning through workshops, seminars, and paper presentations.",
            ],
            email: "biochemistry1332@ethirajcollege.edu.in",
            image: covalentClub,
          },
          {
            title: "IGNITE - Campus Social Responsibility (CSR Club)",
            Description: [
              "The Ignite CSR Club of the Department of Commerce (Hons.), Ethiraj College, established in 2014 with the motto 'We Sparkle by Making Others Shine,' has been a catalyst for student-led social responsibility, conducting over 30 initiatives across environment, health, education, and gender empowerment — aligned with the United Nations SDGs.",
            ],
            image: igniteClub,
          },
          {
            title: "M-Power Club",
            Description: [
              "The M-POWER Club, an acronym symbolizing Mind Power and My Power, is dedicated to empowering students academically, personally, and professionally through a structured range of activities. Its initiatives are organized under the following arenas:",
            ],
            image: blackImage,
          },
          {
            title: "Journal Club",
            Description: [
              "The Journal Club of Ethiraj College is an enriching academic forum where Postgraduate students present and discuss recent research papers on emerging topics in their discipline, with PG students, UG final year students, and faculty as the audience.",
            ],
            image: journalClub,
          },
          {
            title: "YUVA Club",
            Description: [
              "The YUVA Club of the Department of B.Com Bank Management, the student wing of Young Indians (Yi), an initiative of the Confederation of Indian Industry (CII), empowers students through impactful initiatives that foster leadership, teamwork, innovation, and social responsibility. Driven by seven dynamic verticals namely Road Safety, Health, Masoom, Climate Change, Accessibility, Entrepreneurship, and Innovation, the club inspires students to become responsible leaders and active contributors to nation-building.",
            ],
            image: yuvaClub,
            email: "youngindiabbm@ethirajcollege.edu.in",
          },

          {
            title: "Citizen Consumer Club (CCC)",
            Description: [
              "Citizen Consumer Club (CCC) of Ethiraj College for Women is highly active since 2008, promoting consumer awareness, civic responsibility, and student engagement through academic and creative initiatives. The club introduced a Monthly E-Journal and a fortnightly E-Zine featuring informative and awareness-driven content. It organized events, competitions, and campaigns to mark significant national and international days, enhancing participation and awareness. The club also gained practical exposure through government programs and secured Winner in Talent Hunt ’26.",
            ],
            email: "citizenconsumerclub@ethirajcollege.edu.in",
            name: "Mrs. Meenakshi.S",
            image: citizenConsumer,
          },
          {
            title: "College Band",
            Description: [
              "Our band group represents the 'best of the best,' providing sophisticated musical backdrops for the university’s most prestigious occasions. Whether we are rocking out at campus events, playing in the pit, or supporting our teams, we pride ourselves on delivering unforgettable performances. More than just a band, we are a family of passionate individuals from diverse academic backgrounds—from students to artists—united by our love for music.",
            ],
            image: collegeBand,
          },
          {
            title: "Financial Literacy Club",
            Description: [
              "Our Financial Literacy Club is dedicated to empowering students with essential financial knowledge through engaging events, workshops, and outreach initiatives. We create a supportive environment where participants learn practical money management, budgeting, investing, and financial planning skills that matter in real life. By partnering with experts and leveraging interactive activities, we make financial concepts accessible and inspiring for everyone.",
            ],
            email: "financial_literacyclub@ethirajcollege.edu.in",
            name: "Mrs. C.S. Jayalakshmi",
            image: final,
          },

          {
            title: "EQIPOSE",
            Description: [
              "On 23rd August 2024, under the banner, “EQIPOISE”, the Department introduced a diverse range of clubs, each designed to enhance students’ talents and extracurricular engagement across multiple domains. These clubs aim to foster creativity, critical thinking, teamwork, and artistic expression.",
            ],
            image: blackImage,
          },
        ],
      },
    },
  ];

  const studentUnionData = [
    {
      heading: "Student Union Clubs",
      description:
        "Service-oriented bodies that foster leadership, discipline, and civic responsibility through community engagement and outreach.",
      additional_data: {
        card_design: [
          {
            title: "English Teatro",
            Description: [
              "The English Teatro Club nurtures creativity and confidence through English theatre, stagecraft, and live performances. It is a vibrant cultural space where students explore dramatic expression through annual productions and themed plays.",
            ],
            email: "esu.englishtreatro25@gmail.com",
            image: treatoClub,
            objectFitType: "contain",
          },
          {
            title: "Fine Arts Club",
            Description: [
              "The Fine Arts Club has been a beacon of cultural enrichment, fostering and promoting the timeless beauty of Indian classical arts, including Carnatic music and Bharatanatyam.",
            ],
            email: "fineartsclub89@gmail.com",
            image: fineArts,
          },
          {
            title: "Film Appreciation & Photography Club",
            Description: [
              "The Film Appreciation and Photography Club celebrates visual storytelling through cinema, photography, and digital media. It shapes the college’s visual identity while documenting campus life and fostering creative collaboration through events like Rhapsody.",
            ],
            email: "esu.fapclub@gmail.com",
            image: filmAppreciation,
          },
          {
            title: "Literary Club",
            Description: [
              "The Literary Club fosters creative expression, critical thinking, and a love for language through diverse literary activities and discussions. It also hosts Chronicles, a flagship intercollegiate fest that celebrates the power of words and student leadership.",
            ],
            email: "esu.literaryclub25@gmail.com",
            image: literaryClub,
            objectFitType: "contain",
          },
          {
            title: "Tamil Teatro",
            Description: [
              "Tamil Teatro Club is a vibrant creative platform at Ethiraj College that celebrates Tamil theatre, language, and culture through acting, scriptwriting, direction, mime, and stage performances. In collaboration with the English Teatro Club, the club organises an Annual Production — fostering confidence, teamwork, and social awareness while preserving the richness of Tamil traditions through skits, dramas, and street plays.",
            ],
            email: "ethirajkoothupattarai2526@gmail.com",
            image: tamilTeatro,
            objectFitType: "contain",
          },
          {
            title: "Quiz Club",
            Description: [
              "The Quiz Club of Ethiraj College is an academically oriented student body committed to fostering a culture of knowledge, inquiry, and competitive learning across diverse domains. The club organises Atlantis — its flagship national-level annual quiz event — drawing participation from colleges and schools, reflecting its emphasis on academic rigour and intellectual engagement.",
            ],
            email: "atlantis25.ecw@gmail.com",
            image: quizClub,
            objectFitType: "contain",
          },
          {
            title: "Arts Club",
            Description: [
              "The Arts Club is a dedicated platform for nurturing creativity through painting and drawing. It encourages students to explore visual expression, develop artistic skills, and engage with diverse art forms and techniques.",
            ],
            email: "Artsclubethirajcollegeforwomen@gmail.com",
            image: artsClub,
            objectFitType: "contain",
          },
          {
            title: "Debate Club",
            Description: [
              "The Debate Club of Ethiraj College for Women functions under the aegis of the Ethiraj Students’ Union. The Debate Club of our college is a dynamic platform that fosters critical thinking, confident communication, and respectful exchange of ideas. Through engaging debates and discussions, the club encourages students to analyze issues, articulate perspectives, and develop strong reasoning skills.",
            ],
            email: "esu.debateclub25@gmail.com",
            image: debateClub,
            objectFitType: "contain",
          },
        ],
      },
    },
  ];

  const extensionActivitiesData = [
    {
      heading: "Extension Activities",
      description:
        "Student-led creative and intellectual forums that celebrate expression, dialogue, and cultural vibrancy on campus.",
      additional_data: {
        card_design: [
          {
            title: "National Service Scheme (NSS)",
            Description: [
              "NSS nurtures socially responsible citizens through hands-on community service in education, health, environment, national integration, and social welfare. Through the spirit of 'Service to the Nation,' students build leadership, teamwork, civic responsibility, and the confidence to respond to social and environmental challenges.",
            ],
            image: nationalService,
          },
          {
            title: "National Cadet Corps (NCC)",
            Description: [
              "The National Cadet Corps (NCC) unit of Ethiraj College has played a significant role in shaping disciplined, responsible, and socially committed students. Through regular training, drills, and participation in various camps, the Ethiraj NCC has consistently encouraged leadership, teamwork, and national integration among cadets.",
            ],
            image: citizenconsumerclub,
          },
          {
            title: "Rotaract Club",
            Description: [
              "Rotaract Club of Ethiraj College for Women has empowered young women through leadership, service, and fellowship since 1995. Entering its 31st year, the club continues to create confident leaders committed to service above self.",
            ],
            email: "rotaractclub@ethirajcollege.edu.in",
            image: rotaractServive,
          },
          {
            title: "Red Ribbon Club",
            Description: [
              "The Red Ribbon Club empowers students to be socially conscious and empathetic citizens through sustained awareness and education on HIV/AIDS and public health. Since 2006, it has nurtured youth leadership, peer education, and community engagement within and beyond the campus.",
            ],
            email: " redribbonclub@ethirajcollege.edu.in",
            image: redribbon,
            objectFitType: "cover76",
          },
          {
            title: "E-SQUARE – Entrepreneurship Cell",
            Description: [
              "E-Square (E-Cell) is the Entrepreneurship Cell of Ethiraj College for Women, established in 2007–08 with the mission of nurturing innovation, leadership, and an entrepreneurial mindset among students by actively engaging and empowering them through diverse entrepreneurship activities within the college.",
            ],
            email: "entrepreneurshipcell@ethirajcollege.edu.in",
            image: esquare,
          },
          {
            title: "Youth Red Cross (YRC)",
            Description: [
              "The Youth Red Cross (YRC) is a voluntary student movement that functions under the Indian Red Cross Society, dedicated to promoting humanitarian values, health awareness, and community service among young people.",
            ],
            email: "Sofiyaazad@ethirajcollege.edu.in",
            image: yrc,
            objectFitType: "contain",
          },
          {
            title: "Enactus Club",
            Description: [
              "Enactus Ethiraj is a dynamic social entrepreneurship organization at Ethiraj College for Women (Autonomous), Chennai, dedicated to empowering women and uplifting communities through innovative and entrepreneurial solutions. With over 600 student members, the club nurtures leadership, creativity, collaboration, and social responsibility.",
            ],
            image: enactus,
          },

          {
            title: "Enviro Club",
            Description: [
              "EnviroClub empowers students as eco-stewards through sustainability education, green initiatives, bioremediation research, microplastics awareness, bioplastics innovation, and community conservation. These initiatives not only beautify our campus but also empower Ethirajians to lead in environmental biotechnology and sustainability.  Follow us on Instagram @EthirajEnviroClub for updates.",
            ],
            image: enviro,
            email: "enviroclub@ethirajcollege.edu.in.",
          },
        ],
      },
    },
  ];

  return (
    <div>
      <CustomBannerSection bannerDatas={bannerDatas} />
      <Box sx={{ px: { xs: 2, sm: 3, md: "74px", lg: "94px" } }}>
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "70%", lg: "75%" },
            mx: { xs: "0", md: "auto" },
            my: { xs: "44px", sm: "44px", md: "44px", lg: "61px" },
          }}
        >
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              textAlign: { xs: "left", md: "center" },
              // maxWidth: "800px",
              // display: "flex",
              // justifyContent: "center",
            }}
          >
            With more than 25+ clubs, it’s easy to meet people who share your
            interests, whether it’s quizzing, theatre, fine arts or NSS. All
            clubs are dedicated to representation and inclusion of our diverse
            community.
          </Typography>
        </Box>{" "}
        <Divider sx={{ my: "20px", borderColor: "gray" }} />
        <Box>
          <Typography
            variant="subHeadingTextInterMedium"
            sx={{
              maxWidth: { xs: "100%", md: "80%", lg: "80%" },
              // mx: "auto",
              textAlign: "start",
              mt: { xs: "44px", sm: "44px", md: "44px", lg: "61px" },
            }}
          >
            The clubs are thoughtfully grouped into distinct categories, each
            representing specific interest areas, to enable focused
            participation and meaningful collaboration.
          </Typography>
        </Box>
        <Grid
          size={{ xs: 12 }}
          sx={{ marginBottom: { xs: "30px", sm: "80px" } }}
        >
          <Grid container>
            {LeaguesData?.map((section, idx) => (
              <SectionAccordion
                key={idx}
                title={section.heading}
                heading={section.additional_data?.heading}
                sub_heading={section.additional_data?.sub_heading}
                content={section?.description}
                rows={section.additional_data?.card_design}
                nameComponent={true}
              />
            ))}
          </Grid>
          <Grid container>
            {studentUnionData?.map((section, idx) => (
              <SectionAccordion
                key={idx}
                title={section.heading}
                content={section?.description}
                rows={section.additional_data?.card_design}
                nameComponent={true}
              />
            ))}
          </Grid>

          <Grid container>
            {extensionActivitiesData?.map((section, idx) => (
              <SectionAccordion
                key={idx}
                title={section.heading}
                content={section?.description}
                rows={section.additional_data?.card_design}
                nameComponent={true}
              />
            ))}
          </Grid>

          <Grid container>
            {collegeClubsData?.map((section, idx) => (
              <SectionAccordion
                key={idx}
                title={section.heading}
                content={section?.description}
                rows={section.additional_data?.card_design}
                // bottomContent1={section.additional_data?.singleLeftSideContent}
                nameComponent={true}
              />
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ClubsPageAllSections;
