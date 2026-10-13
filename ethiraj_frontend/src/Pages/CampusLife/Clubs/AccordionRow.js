import React from "react";

// MUI components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const AccordionRow = ({
  title,
  viewLink,
  downloadLink,
  name,
  quote,
  designation,
  header,
  nameComponent,
  description,
  email,
  image,
  clubsData,
  objectFitType,
  contentMinHeight,
  maxImageHeight,
}) => {
  const hasImage = Boolean(image);

  if (nameComponent) {
    return (
      <Grid
        item
        size={{ xs: 12 }}
        sx={{ mt: { xs: "8px", sm: "22px", md: "32px", lg: "42px" } }}
      >
        <Card elevation={0} sx={{ background: "none" }}>
          <Grid container alignItems="stretch">
            {hasImage ? (
              <Grid
                item
                size={{ xs: 12, sm: 12, md: 4 }}
                sx={{
                  display: "flex",
                  mt: { xs: "42px", sm: "22px", md: "0", lg: "0" },
                  alignItems: "stretch",
                }}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={title || name}
                  sx={{
                    width: "100%",
                    height: contentMinHeight
                      ? "100%"
                      : { xs: 310, sm: 382, md: "100%", lg: "100%" },
                    // cap image height so it doesn't grow too tall when content is long
                    maxHeight: maxImageHeight || { md: "320px" },
                    objectFit: objectFitType || "cover",
                  }}
                />
              </Grid>
            ) : (
              <Grid
                item
                size={{ xs: 0, sm: 3.5, md: 4 }}
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            )}

            <Grid item size={{ xs: 12, sm: 12, md: 8 }} sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent
                sx={{
                  p: { xs: "20px 0", sm: "20px 0 20px 0px", md: "0 0 0 20px" },
                  // if a min height is provided, apply it so the row keeps that minimum
                  ...(contentMinHeight ? { minHeight: contentMinHeight } : {}),
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subHeadingTextInterMedium"
                  fontWeight={600}
                  sx={{ mb: { xs: "14px", md: "14px", lg: "17px" } }}
                >
                  {title || name}
                </Typography>

                {quote && (
                  <Typography
                    variant="typographyBodyInterMaintext"
                    // fontWeight={600}
                    sx={{
                      mb: { xs: "14px", md: "14px", lg: "17px" },
                      fontFamily: "Newsreader important",
                      fontWeight: "500 !important",
                      color:"black"
                    }}
                  >
                    “ {quote} ”
                  </Typography>
                )}

                {(description || designation)?.map((content, index) => (
                  <Typography
                    key={index}
                    variant="typographyBodyInterNormal"
                    sx={{ mb: 2 }}
                  >
                    {content}
                  </Typography>
                ))}

                {(name || email) && (
                  <Box
                    sx={{
                      mt: 0.25,
                      display: "flex",
                      alignItems: { xs: "start", md: "center" },
                      flexDirection: { xs: "column", md: "row" },
                      gap: 1,
                      minWidth: 0,
                    }}
                  >
                    {name && (
                      <Typography
                        variant="typographyBodyContent"
                        sx={{ whiteSpace: "nowrap" }}
                      >
                        {name}
                      </Typography>
                    )}

                    {name && email && (
                      <Typography
                        variant="typographyBodyContent"
                        color="text.secondary"
                        sx={{ display: { xs: "none", md: "block" } }}
                      >
                        |
                      </Typography>
                    )}

                    {email && (
                      <Link
                        href={`mailto:${email}`}
                        underline="hover"
                        sx={{ color: "#003BD1", whiteSpace: "nowrap" }}
                      >
                        {email}
                      </Link>
                    )}
                  </Box>
                )}

                {clubsData?.length > 0 && (
                  <List disablePadding sx={{ mt: 1 }}>
                    {clubsData.map((clubName, clubIndex) => (
                      <Box key={`${clubName}-${clubIndex}`}>
                        <ListItem sx={{ px: 0, py: 1.1 }}>
                          <ListItemText
                            primary={
                              <Typography variant="typographyBodyInterNormal">
                                {clubName}
                              </Typography>
                            }
                          />
                        </ListItem>
                        {clubIndex !== clubsData.length - 1 && <Divider />}
                      </Box>
                    ))}
                  </List>
                )}
              </CardContent>
            </Grid>
          </Grid>
        </Card>

        <Divider
          sx={{ borderColor: "var(--brand-palette-border-strong)", mt: 0 }}
        />
      </Grid>
    );
  }

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      size={{ xs: 12 }}
      sx={{
        py: 1,
        borderBottom: "1px solid var(--brand-palette-border-strong)",
        mt: { xs: "18px", sm: "10px", md: "10px" },
        // mb: { xs: "32px", sm: "24px", md: "24px" },
        // pb: { xs: "32px", sm: "26px", md: "26px" }
      }}
    >
      <Grid item size={{ xs: 12, sm: 6 }}>
        <Typography variant="typographyBodyInterMaintext">{title}</Typography>
      </Grid>

      <Grid
        item
        sx={{
          marginTop: { xs: "15px", sm: "0px" },
          display: "flex",
          justifyContent: { xs: "start", sm: "end" },
          alignItems: "center",
          gap: 2,
        }}
        size={{ xs: 12, sm: 6 }}
      >
        <Typography
          variant="typographyBodyInterMaintext"
          component="a"
          href={viewLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#003BD1",
            // textDecoration: "none",
            // fontWeight: 500,
          }}
        >
          View Certificate
        </Typography>

        <Typography
          variant="typographyBodyInterMaintext"
          component="a"
          href={downloadLink}
          download
          sx={{
            color: "#003BD1",
            // textDecoration: "none",
            // fontWeight: 500,
          }}
        >
          Download
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AccordionRow;
