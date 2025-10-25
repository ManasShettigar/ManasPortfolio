import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";
import hobbiesData from "./HobbiesData";
import ImageViewer from "./ImageViewer";
const Hobbies = ({mode}) => {
    const [displayImage, setDisplayImage] = useState(false)
    const [image, setImage] = useState("")
    const handleImage=(val)=>{
        setImage(val);
        setDisplayImage(true)
    }

    const close = ()=>{
        setDisplayImage(false);
        setImage("");
    }
  return (
   <Box
  sx={{
    minHeight: "100vh",
    backgroundColor: "#0a0a0a",
    color: "#e5e7eb",
    py: 6,
    px: { xs: 2, sm: 4, md: 6 },
    position: "relative",
  }}
>
     {mode&&<Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    fontWeight: "600",
                    color: "primary.main",
                    textAlign: { xs: "center", sm: "center", md: "left" },
                  }}
                >
                  Hobbies
                </Typography>}
  {displayImage && <ImageViewer src={image} close={close} />}

  {hobbiesData.map((hobby, index) => (
    <Box
      key={index}
      sx={{
        mb: 6,
        pointerEvents: displayImage ? "none" : "auto",
        opacity: displayImage ? 0.3 : 1,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: "600",
          color: "primary.main",
          textAlign: { xs: "center", sm: "center", md: "left" },
        }}
      >
        {hobby.name}
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent={{ xs: "center", sm: "center", md: "flex-start" }} 
      >
        {hobby.images.map((img, idx) => (
          <Grid
            item
            xs={6}  // ✅ 2 per row on mobile
            sm={6}  // ✅ 2 per row on tablet
            md={4}
            lg={3}
            key={idx}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: 300,
                minWidth: 150,
                background: "linear-gradient(145deg, #1f1f23, #26262c)",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 6px 20px rgba(255,255,255,0.1)",
                },
              }}
              onClick={() => handleImage(img)}
            >
              <CardMedia
                component="img"
                height="200"
                image={img}
                alt={hobby.name}
                sx={{ objectFit: "cover" }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  ))}
</Box>

  );
};

export default Hobbies;
