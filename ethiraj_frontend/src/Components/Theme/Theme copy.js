

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
          fontSize: "20px",
          lineHeight: "28px",
          "&.Mui-selected": {
            color: "var(--brand-palette-border-strong)",
            fontWeight: 400,
          },
          "@media (min-width:768px)": {
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "28px",
          },
          "@media (min-width:1024px)": {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "28px",
          },
          "@media (min-width:1366px)": {
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "28px",
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
          navbarMenuItemText: "p",
          secondaryTextInterRegular: "p",
          headingTextInterMediumProgram:"p",
          bodyTextInterRegular: "p",
          bodyTextInterMedium: "p",
          bodyTextSmallMobileInterRegular: "p",
          bodyTextSmallInterRegular: "p",
          bodyTextSmallInterRegularForRanking: "p",
          subHeadingTextInterMedium: "h3",
          typographyBodyInterNormal: "p",
          typographyContentHeading: "h3",
          // typographyContentHeading: "h3",
          typographyHeadingAcademicDivisions: "p",
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
          headingTextNewsreaderMedium: "h2",
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
        },
      },
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",

    primaryHeadingText: {
      fontFamily: "Newsreader",
      fontWeight: 600,
      fontSize: "36px",
      lineHeight: "44px",
      [`@media (min-width:768px)`]: {
        fontSize: "48px",
        lineHeight: "60px",
      },
      [`@media (min-width:1024px)`]: {
        // fontSize: "52px",
        // lineHeight: "65px",
        fontSize: `${CustomTypographySmallDesktopSize(60)}px`,
      },

      [`@media (min-width:1366px)`]: {
        fontSize: "60px",
        lineHeight: "72px",
      },
    },
    // ======
    primaryHeadingTextForRanking: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "36px",
      [`@media (min-width:768px)`]: {
        fontSize: "40px",
        lineHeight: "52px",
      },
      [`@media (min-width:1024px)`]: {
        fontSize: "40px",
        lineHeight: "52px",
        // fontSize: `${CustomTypographySmallDesktopSize(60)}px`,
      },

      [`@media (min-width:1366px)`]: {
        fontSize: "40px",
        lineHeight: "52px",
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
      fontSize: "24px",
      lineHeight: "32px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "28px",
        lineHeight: "40px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        // fontSize: "26px",

        fontSize: `${CustomTypographySmallDesktopSize(32)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "32px",
        lineHeight: "44px",
      },
    },

    // ------
    subTextInterMedium: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "32px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "28px",
        lineHeight: "40px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        // fontSize: "26px",

        fontSize: `${CustomTypographySmallDesktopSize(32)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "32px",
        lineHeight: "44px",
      },
    },
    // ---------------

    navbarMenuItemText: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "28px",
      [`@media (min-width:1024px)`]: {
        // fontSize: "15.5px",
        fontSize: "15px",

        lineHeight: "20px",
      },
      [`@media (min-width:1366px)`]: {
        fontSize: "18px",
        lineHeight: "28px",
      },
    },

    secondaryTextInterRegular: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "28px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "20px",
        lineHeight: "28px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        // fontSize: "19px",
        fontSize: `${CustomTypographySmallDesktopSize(24) + 2}px`,

        lineHeight: `${CustomTypographySmallDesktopSize(32) + 5}px`,
        // lineHeight: `32px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: "32px",
      },
    },


    secondaryModalTextInterRegular: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "28px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "24px",
        lineHeight: "32px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        // fontSize: "19px",
        fontSize: `${CustomTypographySmallDesktopSize(24) }px`,

        lineHeight: `${CustomTypographySmallDesktopSize(32)}px`,
        // lineHeight: `32px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: "32px",
      },
    },

    bodyTextInterRegular: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "22px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "28px",
        lineHeight: "40px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "24px",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
      },
    },

    bodyTextInterMedium: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "22px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
      },
    },

    bodyTextSmallMobileInterRegular: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: "Inter",
    },

    headingTextNewsreaderMedium: {
      fontWeight: 600,
      fontSize: "28px",
      lineHeight: "36px",
      fontFamily: "Newsreader",
      [`@media (min-width:768px)`]: {
        fontWeight: 600,
        fontSize: "38px",
        lineHeight: "48px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight:500,
        // fontSize: "40px",
        // lineHeight: "52px",
        fontSize: `${CustomTypographySmallDesktopSize(45)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(52)}px`,
        fontStyle: "normal",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "45px",
        lineHeight: "52px",
      },
    },
    leadershipContentTextNewsreaderMedium: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "32px",
      fontFamily: "Newsreader",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "24px",
        lineHeight: "32px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        // fontSize: "40px",
        // lineHeight: "52px",
        fontSize: `${CustomTypographySmallDesktopSize(32) + 1}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44) + 1}px`,
        fontStyle: "normal",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "32px",
        lineHeight: "44px",
      },
    },
    leadershipContentTextNewsreaderMediumForQuotes: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "32px",
      fontFamily: "Newsreader",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "24px",
        lineHeight: "32px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        // fontSize: "40px",
        // lineHeight: "52px",
        fontSize: `28px`,
        lineHeight: `38px`,
        fontStyle: "normal",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "32px",
        lineHeight: "44px",
      },
    },

    bodyTextSmallInterRegular: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "22px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontSize: "14px",
        lineHeight: "20px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
      },
      [`@media (min-width:1366px)`]: {
        fontSize: "14px",
        lineHeight: "22px",
      },
    },

    bodyTextSmallInterRegularForRanking: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "22px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontSize: "15px",
        lineHeight: "20px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
      },
      [`@media (min-width:1366px)`]: {
        fontSize: "14px",
        lineHeight: "22px",
      },
    },

    headingTextInterMedium: {
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "28px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "28px",
        lineHeight: "34px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        // fontSize: "30px",
        // lineHeight: "40px",
        fontSize: `${CustomTypographySmallDesktopSize(32)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "32px",
        lineHeight: "44px",
      },
    },



    // ----------------

    headingTextInterMediumProgram: {
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "28px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "24px",
        lineHeight: "32px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        // fontSize: "30px",
        // lineHeight: "40px",
        fontSize: `${CustomTypographySmallDesktopSize(32)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "32px",
        lineHeight: "44px",
      },
    },

    // -----------------

    headingNameTextInterMedium: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "32px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "28px",
        lineHeight: "40px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        // fontSize: "30px",
        // lineHeight: "40px",
        fontSize: `${CustomTypographySmallDesktopSize(32)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "32px",
        lineHeight: "44px",
      },
    },
    // --------------------------------

    secondaryHeadingTextInterMedium: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "32px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "24px",
        lineHeight: "32px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        // fontSize: "30px",
        // lineHeight: "40px",
        fontSize: `${CustomTypographySmallDesktopSize(32)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "32px",
        lineHeight: "44px",
      },
    },
    // -------------------------------

    subHeadingTextInterNextPage: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "32px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "28px",
        lineHeight: "40px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        // fontSize: "26px",

        fontSize: `${CustomTypographySmallDesktopSize(32)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "32px",
        lineHeight: "44px",
      },
    },
    typographyBodyInterNormal: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "22px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "28px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "28px",
      },
    },
    // ----------
    typographyBodyInterNormalHeadingProgram: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "28px",
      },
    },
    // ----------
    typographyBodyInterMaintext: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "28px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "24px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: `${CustomTypographySmallDesktopSize(24) + 1}px`,
        lineHeight: "24px",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: "32px",
      },
    },

    typographyBodyContent: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: "Inter",
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

    // ----------------
    typographyBodyContentRanking: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: "Inter",
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
    // ----
   typographyBodyContentCourse: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "28px",
      },
    },

    // ----
    typographyTabelInterText: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "28px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        // fontSize: "15px",
        // lineHeight: "24px",
        fontSize: `${CustomTypographySmallDesktopSize(24)}px`,
        lineHeight: `${CustomTypographySmallDesktopSize(32)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: "32px",
      },
    },
    // -------
    typographyBodyInterNormalSmall: {
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "28px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "28px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "22px",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "22px",
      },
    },
    typographySubheadingText: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        // fontSize: "18px",
        fontSize: `${CustomTypographySmallDesktopSize(24) + 2}px`,

        lineHeight: `${CustomTypographySmallDesktopSize(32) + 2}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: "32px",
      },
    },
    typographyContentHeading: {
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "40px",
      fontFamily: "Newsreader",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "28px",
        lineHeight: "40px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "26px",
        lineHeight: "40px",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "32px",
        lineHeight: "44px",
      },
    },

    // ------

    typographyContentHeadingResearch: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "32px",
      fontFamily: "Newsreader",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "28px",
        lineHeight: "40px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "26px",
        lineHeight: "38px",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "32px",
        lineHeight: "44px",
      },
    },

    typographyHeadingAcademicDivisions: {
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "24px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "20px",
        lineHeight: "24px",
        fontFamily: "Inter",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "28px",
        lineHeight: "32px",
        // fontFamily: "Inter",
        fontFamily: "newsreader",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "28px",
        lineHeight: "34px",
        fontFamily: "newsreader",
        
      },
    },

    typographyContentHeadingProgram: {
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "36px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "36px",
        lineHeight: "48px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: `${CustomTypographySmallDesktopSize(40)}px`,
        lineHeight: "40px",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "40px",
        lineHeight: "52px",
      },
    },
    // -------------------
    typographyTableTextNewsreader: {
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "28px",
      fontFamily: "Newsreader",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "20px",
        lineHeight: "28px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: `${CustomTypographySmallDesktopSize(24)}px`,

        lineHeight: `${CustomTypographySmallDesktopSize(32)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "24px",
        lineHeight: "32px",
      },
    },
    typographyTableHeadingText: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "28px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "28px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        // fontSize: "15px",
        // lineHeight: "24px",
        fontSize: `${CustomTypographySmallDesktopSize(18)}px`,

        lineHeight: `${CustomTypographySmallDesktopSize(28)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "28px",
      },
    },
    // --------------
    typographyCardContentHeading: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "32px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "24.696px",
        lineHeight: "35.28px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        // fontSize: "15px",
        // lineHeight: "24px",
        fontSize: `${CustomTypographySmallDesktopSize(32)}px`,

        lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "32px",
        lineHeight: "44px",
      },
    },

    // ------
    typographyCardContentText: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "22px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "14.112px",
        lineHeight: "21.168px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
        // fontSize: `${CustomTypographySmallDesktopSize(18)}px`,

        // lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "28px",
      },
    },
    // ---------------------------------
    typographySliderText: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "28px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "24px",
        lineHeight: "40px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "20px",
        lineHeight: "40px",
        // fontSize: `${CustomTypographySmallDesktopSize(18)}px`,

        // lineHeight: `${CustomTypographySmallDesktopSize(44)}px`,
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "24px",
        lineHeight: "38px",
      },
    },
    //--------------

    // pravin's theme adding section ===========================================

    // typographyCardContentHeading: {
    //   fontWeight: 500,
    //   fontSize: "27.78px",
    //   lineHeight: "39.69px",
    //   fontFamily: "Inter",
    //   [`@media (min-width:1366px)`]: {
    //     fontWeight: 500,
    //     fontSize: "32px",
    //     lineHeight: "44px",
    //   },
    //   [`@media (min-width:1024px)`]: {
    //     fontWeight: 500,
    //     fontSize: "27.83px",
    //     // fontSize:`${CustomTypographySmallDesktopSize(32)}px`,

    //     lineHeight: "39.01px",
    //   },
    //   [`@media (min-width:768px)`]: {
    //     fontWeight: 500,
    //     fontSize: "32px",
    //     lineHeight: "44px",
    //   },
    // },

    // typographyCardContentText: {
    //   fontWeight: 400,
    //   fontSize: "15.87px",
    //   lineHeight: "23.81px",
    //   fontFamily: "Inter",
    //   [`@media (min-width:1366px)`]: {
    //     fontWeight: 500,
    //     fontSize: "18px",
    //     lineHeight: "28px",
    //   },
    //   [`@media (min-width:1024px)`]: {
    //     fontWeight: 500,
    //     fontSize: "15.78px",
    //     lineHeight: "24.09px",
    //   },
    //   [`@media (min-width:768px)`]: {
    //     fontWeight: 400,
    //     fontSize: "14.11px",
    //     lineHeight: "21.17px",
    //   },
    // },
    typographyContentText: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: "Inter",
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "22px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "22px",
      },
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "22px",
      },
    },
    typographyTimeLineText: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "28px",
      fontFamily: "Inter",
    },
    typographyFooterHeading2Text: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      fontFamily: "Inter",
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
      },
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    typographyFooterText: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      fontFamily: "Inter",
      opacity: 0.7,
      [`@media (min-width:1366px)`]: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
      },
      [`@media (min-width:768px)`]: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    typographyFooterHeadingText: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "28px",
      fontFamily: "Inter",
      [`@media (min-width:1366px)`]: {
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "28px",
      },
      [`@media (min-width:1024px)`]: {
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "28px",
      },
      [`@media (min-width:768px)`]: {
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "28px",
      },
    },
    //
  },
});

export default theme;
