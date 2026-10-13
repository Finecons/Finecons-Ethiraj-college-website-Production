
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../ReduxStore/actions";
import "./AnnouncementsBanner.css";
import newIcon from "../../Assets/newEventsAnouncementsIcon.png";
import anouncementsIcon from "../../Assets/anouncementsIcon.png";

const AnnouncementsBanner = ({ announcements = [] }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isTickerPaused, setIsTickerPaused] = useState(false);
  const [marqueeTravel, setMarqueeTravel] = useState(0);
  const marqueeContainerRef = useRef(null);
  const marqueeTrackRef = useRef(null);

  const dispatch = useDispatch();

  const { getAllMarquees } = useSelector((state) => state?.getAllMarquees);

  useEffect(() => {
    const fetchMarquees = async () => {
      const data = {
        data: {},
        method: "get",
        apiName: "getAllMarquees",
      };

      await dispatch(actions.GETALLMARQUEES(data));
    };

    fetchMarquees();
  }, [dispatch]);

  const marquees = getAllMarquees?.data || [];

  const announcementsToDisplay =
    marquees.length > 0
      ? marquees.map((item) => ({
        id: item.marquee_id,
        text: item.text,
        icon: "📢",
        link: item.link,
      }))
      : announcements;

  useEffect(() => {
    const updateMarqueeTravel = () => {
      if (!marqueeContainerRef.current || !marqueeTrackRef.current) {
        return;
      }

      const containerWidth = marqueeContainerRef.current.offsetWidth;
      const trackWidth = marqueeTrackRef.current.scrollWidth;

      setMarqueeTravel(containerWidth + trackWidth);
    };

    updateMarqueeTravel();
    window.addEventListener("resize", updateMarqueeTravel);

    return () => {
      window.removeEventListener("resize", updateMarqueeTravel);
    };
  }, [announcementsToDisplay.length]);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      {/* Top Banner */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          // height: "60px",
          // py: 1,
          borderBottom: "1px solid #e0d4dd",
          background: "#FFE6FF",
        }}
      >
        {/* Left Button */}
        <Box
          onClick={handleModalOpen}
          sx={{
            // height: "100%",
            minWidth: "220px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            ml: 2,
            borderRadius: "6px",
            px: { xs: "8px", sm: "12px", md: "16px" },
            // background: "#f7e8f4",
            border: "1px solid #6B3C58",
            cursor: "pointer",
            fontWeight: 600,
            color: "#4a3b4f",
            // fontSize: { xs: "12px", sm: "13px", md: "15px" },
            fontSize: { md: "14px", lg: "16px" },

            userSelect: "none",
          }}
        >
          <Box
            component="img"
            src={anouncementsIcon}
            alt="New Icon"
            sx={{ width: 34, height: 34 }}
          />
          <Typography
            // variant="typographyBodyInterNormal"
            sx={{ fontWeight: "500 !important" }}
            component="span"
          >
            ANNOUNCEMENTS
          </Typography>
          <KeyboardArrowDownIcon />
        </Box>

        {/* Marquee */}
        <Box className="announcements-wrapper">
          <Box className="marquee-container" ref={marqueeContainerRef}>
            <Box
              ref={marqueeTrackRef}
              className={`marquee-track12 ${isTickerPaused ? "paused" : ""}`}
              style={{
                "--marquee-travel": `${marqueeTravel}px`,
              }}
            >
              {announcementsToDisplay.map((announcement) => (
                <Box
                  key={announcement.id}
                  className="marquee-item"
                  onClick={() => {
                    if (announcement.link) {
                      window.open(announcement.link, "_blank");
                    }
                  }}
                  sx={{
                    cursor: announcement.link ? "pointer" : "default",
                  }}
                >
                  <span className="marquee-icon">
                    {/* {announcement.icon} */}
                    <Box
                      component="img"
                      src={newIcon}
                      alt="New Icon"
                      sx={{ width: 34, height: 34 }}
                    />
                  </span>

                  <span
                    className="marquee-text"
                    onMouseEnter={() => setIsTickerPaused(true)}
                    onMouseLeave={() => setIsTickerPaused(false)}
                  >
                    <Typography
                      variant="typographyBodyInterNormal"
                      component="span"
                      sx={{
                        textDecoration: "none",
                        cursor:
                          announcement?.link &&
                            announcement.link.toString().trim()
                            ? "pointer"
                            : "default",

                        "&:hover": {
                          textDecoration:
                            announcement?.link &&
                              announcement.link.toString().trim()
                              ? "underline"
                              : "none",
                        },
                      }}
                    >
                      {announcement.text}
                    </Typography>
                  </span>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Modal */}
      <Dialog
        open={openModal}
        onClose={handleModalClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "14px",
            overflow: "hidden",
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            py: 3,
            borderBottom: "1px solid #eaeaea",
          }}
        >
          <Typography variant="headingTextNewsreaderMedium">
            Announcements
          </Typography>

          <IconButton
            onClick={handleModalClose}
            sx={{
              position: "absolute",
              right: 20,
              top: 20,
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Content */}
        <DialogContent
          sx={{
            px: 4,
            py: 3,
          }}
        >
          {/* Category */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="typographyBodyInterMedium"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: "#333",
              }}
            >
              CATEGORY
            </Typography>

            {announcementsToDisplay.slice(0, 3).map((announcement, index) => (
              <Box
                key={index}
                onClick={() => {
                  if (announcement.link) {
                    window.open(announcement.link, "_blank");
                  }
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  py: 2,
                  borderBottom: "1px solid #cfcfcf",
                  cursor: announcement.link ? "pointer" : "default",
                }}
              >
                <Box
                  component="img"
                  src={newIcon}
                  alt="New Icon"
                  sx={{ width: 34, height: 34 }}
                />

                <Typography
                  variant="typographyBodyInterNormal"
                  sx={{
                    color: "#333",
                    textDecoration:
                      announcement?.link && announcement.link.toString().trim()
                        ? "underline"
                        : "none",
                  }}
                >
                  {announcement.text}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Other Announcements */}
          {announcementsToDisplay.length > 3 && (
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "18px",
                  mb: 3,
                  color: "#333",
                }}
              >
                OTHER ANNOUNCEMENTS
              </Typography>

              {announcementsToDisplay.slice(3).map((announcement, index) => (
                <Box
                  key={index}
                  onClick={() => {
                    if (announcement.link) {
                      window.open(announcement.link, "_blank");
                    }
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    py: 2,
                    borderBottom: "1px solid #cfcfcf",
                    cursor: announcement.link ? "pointer" : "default",
                  }}
                >
                  <Box
                    sx={{
                      background: "#6b3c58",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 700,
                      px: 1,
                      py: 0.5,
                      borderRadius: "4px",
                    }}
                  >
                    NEW
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "#333",
                      textDecoration:
                        announcement?.link &&
                          announcement.link.toString().trim()
                          ? "underline"
                          : "none",
                    }}
                  >
                    {announcement.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AnnouncementsBanner;
