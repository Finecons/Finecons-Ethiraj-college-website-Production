// pages/placements.js
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import ACCENTURE from "../Assets/ACCENTURE.png";
import LT from "../Assets/LT.png";
import INFOSYS from "../Assets/INFOSYS.png";
import EY from "../Assets/EY.png";
import Cognizant from "../Assets/Cognizant.png";
import Philips from "../Assets/Philips.png";
import PWC from "../Assets/PWC.png";
import Wipro from "../Assets/WIPRO.png";
import { adminUrl } from "../constants";

const logos1 = [ACCENTURE, INFOSYS, EY, LT, Cognizant, Philips, PWC, Wipro];

export default function Placements({ ourStudentPlacedDatas }) {
  const [logosUrl, setLogosUrl] = useState([]);


  console.log(ourStudentPlacedDatas[0]?.additional_data?.banner,"ourStudentPlacedDatas")

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const logos =
  //       (await ourStudentPlacedDatas[0]?.additional_data?.banner?.length) > 0
  //         ? ourStudentPlacedDatas[0]?.additional_data?.banner?.map(
  //             (data) => `${adminUrl}${data}`
  //           )
  //         : logos1;

  //     setLogosUrl(logos);
  //   };
  //   fetchData();
  // }, [ourStudentPlacedDatas]);

  useEffect(() => {
  if (
    Array.isArray(ourStudentPlacedDatas) &&
    ourStudentPlacedDatas.length > 0 &&
    Array.isArray(ourStudentPlacedDatas[0]?.additional_data?.banner) &&
    ourStudentPlacedDatas[0].additional_data.banner.length > 0
  ) {
    const logos = ourStudentPlacedDatas[0].additional_data.banner.map(
      (data) => `${data}`
    );
    setLogosUrl(logos);
  } else {
    setLogosUrl(logos1);
  }
}, [ourStudentPlacedDatas]);

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Box
        sx={{
          px: { sm: "50px", xs: "20px" },
        }}
      >
        <Typography
          variant="headingTextInterMedium"
          textAlign="center"
          sx={{ mb: 7, mx: "auto", display: "flex", justifyContent: "center" }}
        >
          {ourStudentPlacedDatas[0]?.heading
            ? ourStudentPlacedDatas[0]?.heading
            : "Our students are proudly placed at"}
        </Typography>

        {/* Marquee container */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            // maskImage: {
            //   md: "linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%)",
            // },
            // WebkitMaskImage: {
            //   md: "linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%)",
            // },
          }}
        >
          {/* Track wraps two copies for seamless loop */}
          <Box
            className="marquee-track"
            sx={{
              display: "flex",
              width: "max-content",
              // duplicate lists next to each other
              "& > .marquee-list": {
                display: "flex",
                // gap: { xs: 32, md: 24 },
                gap: { xs: "55px", sm: "105px" },
                pr: { xs: "55px", sm: "105px" },

                alignItems: "center",
                flexShrink: 0,
                // pr: { xs: 32, md: 24 }, // matches gap to keep spacing seamless
                // pr: { xs: 32, md: 24 }, // matches gap to keep spacing seamless
              },
              animation: "scroll-left var(--speed, 28s) linear infinite",
              // pause on hover
              "&:hover": { animationPlayState: "paused" },
            }}
          >
            <Box className="marquee-list">
              {logosUrl?.map((src) => (
                <Box
                  key={`a-${src}`}
                  component="img"
                  src={src}
                  alt=""
                  sx={{
                    maxHeight: "120px",
                    maxWidth: "120px",
                    objectFit: "contain",
                    // filter: "grayscale(1)",
                    // opacity: 0.85,
                  }}
                />
              ))}
            </Box>

            {/* duplicate */}
            <Box className="marquee-list">
              {logosUrl?.map((src) => (
                <Box
                  key={`b-${src}`}
                  component="img"
                  src={src}
                  alt=""
                  sx={{
                    maxHeight: "120px",
                    maxWidth: "120px",
                    objectFit: "contain",
                    // filter: "grayscale(1)",
                    // opacity: 0.85,
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* keyframes in a global style tag */}
      <style jsx global>{`
        @keyframes scroll-left {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </Box>
  );
}
