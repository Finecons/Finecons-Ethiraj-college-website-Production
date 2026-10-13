import {
  Box,
  Grid,
  Typography,
  Divider,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import eventImage from "../../../Assets/academicdivisions.png";
import Patents from "./Patents";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";

/* ---------- UI DATA ---------- */
const upcomingResearchEvents = {
  leftColumn: [
    {
      day: "04",
      month: "Sep",
      title: "Lorem Ipsum Dolor Sit Amet",
      time: "10:00AM - 4:00PM",
    },
    {
      day: "14",
      month: "April",
      title: "Lorem Ipsum Dolor Sit Amet",
      time: "10:00AM - 4:00PM",
    },
    {
      day: "20",
      month: "April",
      title: "Lorem Ipsum Dolor Sit Amet",
      time: "10:00AM - 4:00PM",
    },
    {
      day: "20",
      month: "April",
      title: "Lorem Ipsum Dolor Sit Amet",
      time: "10:00AM - 4:00PM",
    },
    {
      day: "20",
      month: "April",
      title: "Lorem Ipsum Dolor Sit Amet",
      time: "10:00AM - 4:00PM",
    },
  ],
  rightColumn: [
    {
      day: "04",
      month: "Sep",
      title: "Lorem Ipsum Dolor Sit Amet",
      time: "10:00AM - 4:00PM",
    },
    {
      day: "14",
      month: "April",
      title: "Lorem Ipsum Dolor Sit Amet",
      time: "10:00AM - 4:00PM",
    },
    {
      day: "20",
      month: "April",
      title: "Lorem Ipsum Dolor Sit Amet",
      time: "10:00AM - 4:00PM",
    },
    {
      day: "20",
      month: "April",
      title: "Lorem Ipsum Dolor Sit Amet",
      time: "10:00AM - 4:00PM",
    },
    {
      day: "20",
      month: "April",
      title: "Lorem Ipsum Dolor Sit Amet",
      time: "10:00AM - 4:00PM",
    },
  ],
};

const pastEvents = [
  { title: "Lorem Ipsum Dolor Sit Amet", image: eventImage },
  { title: "Lorem Ipsum Dolor Sit Amet", image: eventImage },
  { title: "Lorem Ipsum Dolor Sit Amet", image: eventImage },
  { title: "Lorem Ipsum Dolor Sit Amet", image: eventImage },
];

/* ---------- UI COMPONENTS ---------- */

function EventRow({ day, month, title, time, last }) {
  return (
    <Box>
      <Grid container columnSpacing={3} sx={{ py: 2, alignItems:"center"}}>
        <Grid item size={{xs:2,sm:1.5}}>
          <Stack alignItems="start">
            <Typography
              sx={{
                fontSize: 40,
                lineHeight: "52px",
                fontWeight: 500,
                color: "#6B3C58",
              }}
            >
              {day}
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                lineHeight: "28px",
                color: "#6B3C58",
              }}
            >
              {month}
            </Typography>
          </Stack>
        </Grid>

        <Grid item size={{xs:10,sm:10.5}}>
          <Typography
            sx={{
              fontSize: { xs: 18, md: 22 },
              fontWeight: 500,
              lineHeight: "30px",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              color: "text.secondary",
              mt: 0.5,
            }}
          >
            {time}
          </Typography>
        </Grid>
      </Grid>

      {!last && <Divider />}
    </Box>
  );
}

/* ---------- MAIN UI ---------- */

export default function Events() {



      const dispatch = useDispatch();

    const { getAllResearchSections } = useSelector(
        (state) => state?.getAllResearchSections,
    );

    console.log(getAllResearchSections, "getAllResearchSections FellowshipsAndProjects");

    useEffect(() => {
        const fetchData = async () => {
            const data1 = {
                data: {},
                method: "get",
                apiName: "getAllResearchSections/Events Page",
            };

            // setLoading(true); // Set loading to true when the request starts
            await dispatch(actions.GETALLRESEARCHSECTIONS(data1));
            // setLoading(false); // Set loading to false after data is fetched
        };
        fetchData();
    }, [dispatch]);

    // Function to get dates by section_name
    const getDatasBySectionName = (sectionName) => {
        return (
            getAllResearchSections?.data?.filter(
                (section) => section?.section_name === sectionName,
            ) || []
        );
    };


    const researchEventsDatas = getAllResearchSections?.data
        ? getDatasBySectionName("ResearchEvents section")
        : [];

        console.log(researchEventsDatas,"researchEventsDatas");


  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Typography variant="primaryHeadingText" sx={{ mt: 3, mb: 5 }} >Events</Typography>

      {/* <Divider sx={{ mt: 3, mb: 5 }} /> */}
      <Grid container spacing={{ xs: 0, md: 3 }}>
        <Grid size={{ xs: 12 }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{ mb: { xs: 2, sm: 2 } }}
          >
            Upcoming Events
          </Typography>
          <Typography variant="typographyBodyInterNormal">
            We conduct workshops, resources and other research related events
            regularly.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12,sm:10, md: 6 }}>
          {upcomingResearchEvents?.leftColumn?.map((event, index) => (
            <EventRow
              key={index}
              day={event.day}
              month={event.month}
              title={event.title}
              time={event.time}
              last={index === upcomingResearchEvents?.leftColumn?.length - 1}
            />
          ))}
          <Divider sx={{ display: { xs: "block", md: "none" }, mt: 2 }} />
        </Grid>
        <Grid size={{ xs: 12,sm:10, md: 6 }}>
          {upcomingResearchEvents?.rightColumn?.map((event, index) => (
            <EventRow
              key={index}
              day={event.day}
              month={event.month}
              title={event.title}
              time={event.time}
              last={index === upcomingResearchEvents?.rightColumn?.length - 1}
            />
          ))}
          <Divider sx={{ display: { xs: "block", md: "none" }, mt: 2 }} />
        </Grid>
      </Grid>

      <Typography variant="headingTextNewsreaderMedium" sx={{ mt: 6, mb: 3 }}>
        Past Research Events
      </Typography>
      <Patents researchEventsDatas={researchEventsDatas} />
      
    </Box>
  );
}
