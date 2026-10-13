

import { createTheme } from "@mui/material/styles";
import { CustomTypographySmallDesktopSize } from "../CustomTypographySmallDesktopFontSize/CustomTypographySmallDesktopFontSize";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320, // Mobile
      sm: 768, // Tablet
      md: 1024, // Small Desktop
      lg: 1366, // Large Desktop
      xl: 1728, // Extra Large
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: "1.25rem",
          lineHeight: "1.75rem",
          "&.Mui-selected": {
            color: "var(--brand-palette-border-strong)",
            fontWeight: 400,
          },
          "@media (min-width:768px)": {
            fontSize: "1.125rem",
            fontWeight: 500,
            lineHeight: "1.75rem",
          },
          "@media (min-width:1024px)": {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: "1.75rem",
          },
          "@media (min-width:1366px)": {
            fontSize: "1.125rem",
            fontWeight: 400,
            lineHeight: "1.75rem",
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        // 👇 Map all custom variants to real HTML tags
        variantMapping: {
          primaryHeadingText: "h1",
          headingTextNewsreaderMedium: "h2",
          leadershipContentTextNewsreaderMediumForQuotes:"p",
          typographySliderText:"p",
          headingTextInterMedium: "p",
          typographyHeadingHealth:"p",
          navbarMenuItemText: "p",
          secondaryTextInterRegular: "p",
          secondaryTextInterRegularSmall: "p",
          headingTextInterMediumProgram:"p",
          bodyTextInterRegular: "p",
          bodyTextInterMedium: "p",
          bodyTextSmallMobileInterRegular: "p",
          bodyTextSmallInterRegular: "p",
          bodyTextSmallInterRegularForRanking: "p",
          subHeadingTextInterMedium: "h3",
          typographyBodyInterNormal: "p",
          typographyContentHeading: "h3",
         
          typographyHeadingAcademicDivisions: "p",
          typographyBodyInterMaintextResearchNewsreader:"p",
          typographyBodyContentCourse:'p',
          secondaryModalTextInterRegular:"p",

          typographyBodyInterNormalSmall: "p",
          typographySubheadingText: "p",
          typographyBodyContent: "p",
          typographyTableTextNewsreader: "p",
          typographyTableHeadingText: "p",
          typographyTabelInterText: "p",
          subTextInterMedium: "p",
          secondaryHeadingTextInterMedium: "h4",
          headingNameTextInterMedium: "p",
          typographyContentHeadingResearch: "h3",
          headingTextNewsreaderMediumForClubs: "h2",
          typographyBodyInterMaintext: "p",
          typographyContentHeadingProgram: "h4",
          typographyBodyInterNormalHeadingProgram: "p",
          leadershipContentTextNewsreaderMedium: "p",
          // pravin's added theme ==============================================================================
          typographyCardContentHeading: "h3",
          typographyCardContentText: "p",
          typographyContentText: "p",
          typographyTimeLineText: "h6",

          typographyFooterHeading2Text: "h6",
          typographyFooterText: "p",
          typographyFooterHeadingText: "h5",
          typographyEventTitle: "p",
          typographyEventTime: "p",
        },
      },
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",

    primaryHeadingText: {
      fontFamily: "Newsreader",
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",
      [`@media (min-width:768px)`]: {
        fontSize: "3rem",
        lineHeight: "3.75rem",
      },
      [`@media (min-width:1024px)`]: {
        fontSize: `${CustomTypographySmallDesktopSize(60)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontSize: "3.75rem",
        lineHeight: "4.5rem",
      },
    },
    // ======
    primaryHeadingTextForRanking: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: "2.25rem",
      [`@media (min-width:768px)`]: {
        fontSize: "2.5rem",
        lineHeight: "3.25rem",
      },
      [`@media (min-width:1024px)`]: {
        fontSize: "2.5rem",
        lineHeight: "3.25rem",
      },
      [`@media (min-width:1366px)`]: {
        fontSize: "2.5rem",
        lineHeight: "3.25rem",
      },
    },
    // subHeadingTextInterMedium: {
    //   fontWeight: 500,
    //   fontSize: "14.968px",
    //   lineHeight: "21.383px",
    //   fontFamily: "Inter",
    //   [`@media (min-width:768px)`]: {
    //     fontWeight: 500,
    //     fontSize: "28px",
    //     lineHeight: "40px",
    //   },
    //   [`@media (min-width:1024px)`]: {
    //     fontWeight: 500,
    //     // fontSize: "26px",

    //     fontSize: `${CustomTypographySmallDesktopSize(32)}px`,
    //     lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
    //   },
    //   [`@media (min-width:1366px)`]: {
    //     fontWeight: 500,
    //     fontSize: "32px",
    //     lineHeight: "44px",
    //   },
    // },

    // ----------

    subHeadingTextInterMedium: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.75rem",
        lineHeight: "2.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: `${CustomTypographySmallDesktopSize(32)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "2rem",
        lineHeight: "2.75rem",
      },
    },

    // ------
    subTextInterMedium: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.75rem",
        lineHeight: "2.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: `${CustomTypographySmallDesktopSize(32)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "2rem",
        lineHeight: "2.75rem",
      },
    },
    // ---------------

    navbarMenuItemText: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.75rem",
      [`@media (min-width:1024px)`]: {
        fontSize: "0.9375rem",
        lineHeight: "1.25rem",
      },
      [`@media (min-width:1366px)`]: {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
    },

    secondaryTextInterRegular: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.75rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: `${CustomTypographySmallDesktopSize(24) + 2}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(32) + 5}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
    },
secondaryTextInterRegularSmall: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.75rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.75rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: `${CustomTypographySmallDesktopSize(24) + 2}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(32) + 5}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
    },
    

    secondaryModalTextInterRegular: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.75rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: `${CustomTypographySmallDesktopSize(24) }px`,
        lineHeight: `${CustomTypographySmallDesktopSize(32)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
    },

    bodyTextInterRegular: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.375rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: "2.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
    },

    bodyTextInterMedium: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "1.375rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
    },

    bodyTextSmallMobileInterRegular: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      fontFamily: "Inter",
    },

    headingTextNewsreaderMedium: {
      fontWeight: 600,
      fontSize: "1.75rem",
      lineHeight: "2.25rem",
      fontFamily: "Newsreader",
      [`@media (min-width:768px)`]: {
        fontWeight: 600,
        fontSize: "2.375rem",
        lineHeight: "3rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight:500,
        fontSize: `${CustomTypographySmallDesktopSize(45)+2}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(52)+1}px`,
        fontStyle: "normal",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "2.8125rem",
        lineHeight: "3.25rem",
      },
    },
     headingTextNewsreaderMediumForClubs: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontFamily: "Newsreader",
      [`@media (min-width:768px)`]: {
        fontWeight: 600,
        fontSize: "2rem",
        lineHeight: "2.75rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight:500,
        fontSize: `${CustomTypographySmallDesktopSize(45)+2}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(52)+1}px`,
        fontStyle: "normal",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "2.8125rem",
        lineHeight: "3.25rem",
      },
    },
    leadershipContentTextNewsreaderMedium: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontFamily: "Newsreader",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: `${CustomTypographySmallDesktopSize(32) + 1}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44) + 1}px`,
        fontStyle: "normal",
      },
      [`@media (min-width:1566px)`]: {
        fontWeight: 500,
        fontSize: "2rem",
        lineHeight: "2.75rem",
      },
    },
    leadershipContentTextNewsreaderMediumForQuotes: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontFamily: "Newsreader",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: `1.75rem`,
        lineHeight: `2.375rem`,
        fontStyle: "normal",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "2rem",
        lineHeight: "2.75rem",
      },
    },

    bodyTextSmallInterRegular: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: "1.375rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      },
      [`@media (min-width:1366px)`]: {
        fontSize: "0.875rem",
        lineHeight: "1.375rem",
      },
    },

    bodyTextSmallInterRegularForRanking: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.375rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontSize: "0.9375rem",
        lineHeight: "1.25rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      },
      [`@media (min-width:1366px)`]: {
        fontSize: "0.875rem",
        lineHeight: "1.375rem",
      },
    },

    headingTextInterMedium: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.75rem",
        lineHeight: "2.125rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: `${CustomTypographySmallDesktopSize(32)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "2rem",
        lineHeight: "2.75rem",
      },
    },



    // ----------------

    headingTextInterMediumProgram: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: `${CustomTypographySmallDesktopSize(32)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "2rem",
        lineHeight: "2.75rem",
      },
    },

    // -----------------

    headingNameTextInterMedium: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.75rem",
        lineHeight: "2.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: `${CustomTypographySmallDesktopSize(32)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "2rem",
        lineHeight: "2.75rem",
      },
    },
    // --------------------------------

    secondaryHeadingTextInterMedium: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: `${CustomTypographySmallDesktopSize(32)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "2rem",
        lineHeight: "2.75rem",
      },
    },
    // -------------------------------

    subHeadingTextInterNextPage: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.75rem",
        lineHeight: "2.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: `${CustomTypographySmallDesktopSize(32)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "2rem",
        lineHeight: "2.75rem",
      },
    },
    typographyBodyInterNormal: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.375rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.75rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
    },
    // ----------
    typographyBodyInterNormalHeadingProgram: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
    },
    // ----------
    typographyBodyInterMaintext: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.75rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "1.25rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: `${CustomTypographySmallDesktopSize(24) + 2}px`,
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
    },
    typographyBodyInterMaintextResearchNewsreader: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1.75rem",
      fontFamily: "Newsreader",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: `${CustomTypographySmallDesktopSize(24) + 4}px`,
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
    },


    typographyBodyContent: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "0.9375rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
    },

    // ----------------
    typographyBodyContentRanking: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "0.9375rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
    },
    // ----
   typographyBodyContentCourse: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
    },

    // ----
    typographyTabelInterText: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.375rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.75rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: `${CustomTypographySmallDesktopSize(24)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(32)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
    },
    // -------
    typographyBodyInterNormalSmall: {
      fontWeight: 400,
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "0.9375rem",
        lineHeight: "1.375rem",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "0.9375rem",
        lineHeight: "1.375rem",
      },
    },
    typographySubheadingText: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: `${CustomTypographySmallDesktopSize(24) + 2}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(32) + 2}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
    },
    typographyContentHeading: {
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: "2.5rem",
      fontFamily: "Newsreader",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.75rem",
        lineHeight: "2.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "1.625rem",
        lineHeight: "2.5rem",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "2rem",
        lineHeight: "2.75rem",
      },
    },

    // ------

    typographyContentHeadingResearch: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontFamily: "Newsreader",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.75rem",
        lineHeight: "2.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "1.625rem",
        lineHeight: "2.375rem",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "2rem",
        lineHeight: "2.75rem",
      },
    },

    typographyHeadingAcademicDivisions: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: "1.5rem",
        fontFamily: "Inter",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "1.75rem",
        lineHeight: "2rem",
        fontFamily: "newsreader",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "1.75rem",
        lineHeight: "2.125rem",
        fontFamily: "newsreader",
      },
    },

    typographyHeadingHealth: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: "1.5rem",
        fontFamily: "Inter",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "1.55rem",
        lineHeight: "2rem",
        fontFamily: "Inter",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "1.75rem",
        lineHeight: "2.125rem",
        fontFamily: "Inter",
      },
    },

    typographyContentHeadingProgram: {
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: "2.25rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "2.25rem",
        lineHeight: "3rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: `${CustomTypographySmallDesktopSize(40)}px`,
        lineHeight: "2.5rem",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "2rem",
        lineHeight: "3.25rem",
      },
    },
    // -------------------
    typographyTableTextNewsreader: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontFamily: "Newsreader",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: `${CustomTypographySmallDesktopSize(24)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(32)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
    },
    typographyTableHeadingText: {
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: `${CustomTypographySmallDesktopSize(18)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(28)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
    },
    // --------------
    typographyCardContentHeading: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.544rem",
        lineHeight: "2.205rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: `${CustomTypographySmallDesktopSize(32)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "2rem",
        lineHeight: "2.75rem",
      },
    },

    // ------
    typographyCardContentText: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.375rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "0.882rem",
        lineHeight: "1.323rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
    },
    // ---------------------------------
    typographySliderText: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1.75rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.5rem",
        lineHeight: "2.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: "2.5rem",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "1.5rem",
        lineHeight: "2.375rem",
      },
    },
    //--------------

    // pravin's theme adding section ===========================================

    // typographyCardContentHeading: {
    //   fontWeight: 500,
    //   fontSize: "1.739rem",
    //   lineHeight: "2.482rem",
    //   fontFamily: "Inter",
    //   [`@media (min-width:1366px)`]: {
    //     fontWeight: 500,
    //     fontSize: "2rem",
    //     lineHeight: "2.75rem",
    //   },
    //   [`@media (min-width:1024px)`]: {
    //     fontWeight: 500,
    //     fontSize: "1.739rem",
    //     // fontSize:`${CustomTypographySmallDesktopSize(32)}px`,

    //     lineHeight: "2.44rem",
    //   },
    //   [`@media (min-width:768px)`]: {
    //     fontWeight: 500,
    //     fontSize: "2rem",
    //     lineHeight: "2.75rem",
    //   },
    // },

    // typographyCardContentText: {
    //   fontWeight: 400,
    //   fontSize: "0.992rem",
    //   lineHeight: "1.488rem",
    //   fontFamily: "Inter",
    //   [`@media (min-width:1366px)`]: {
    //     fontWeight: 500,
    //     fontSize: "1.125rem",
    //     lineHeight: "1.75rem",
    //   },
    //   [`@media (min-width:1024px)`]: {
    //     fontWeight: 500,
    //     fontSize: "0.989rem",
    //     lineHeight: "1.506rem",
    //   },
    //   [`@media (min-width:768px)`]: {
    //     fontWeight: 400,
    //     fontSize: "0.882rem",
    //     lineHeight: "1.323rem",
    //   },
    // },
    typographyContentText: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "0.9375rem",
        lineHeight: "1.375rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "0.9375rem",
        lineHeight: "1.375rem",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "0.9375rem",
        lineHeight: "1.375rem",
      },
    },
    typographyTimeLineText: {
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
      fontFamily: "Inter",
    },
    typographyFooterHeading2Text: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontFamily: "Inter",
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
    },
    typographyFooterText: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontFamily: "Inter",
      opacity: 0.7,
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
    },
    typographyFooterHeadingText: {
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
      fontFamily: "Inter",
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
    },
    typographyEventTitle: {
      color: "var(--heading-text-primary2)",
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "28px",
      fontFamily: "Inter",
      overflowWrap: "anywhere",
      wordBreak: "break-word",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "20px",
        lineHeight: "28px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "22px",
        lineHeight: "30px",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "24px",
        lineHeight: "32px",
      },
    },
    typographyEventTime: {
      color: "var(--heading-text-primary2)",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      fontFamily: "Inter",
      overflowWrap: "anywhere",
      wordBreak: "break-word",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "24px",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "28px",
      },
    },
  },
});

export default theme;
