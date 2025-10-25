import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";
import hobbiesData from "./HobbiesData";
import ImageViewer from "./ImageViewer";
const Hobbies = () => {
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
      }}
      //   className=""
    style={{position:"relative"}}
    >

      {displayImage && <ImageViewer src={image} close={close} />}
      {hobbiesData.map((hobby, index) => (
        <Box key={index} sx={{ mb: 6 }}
        style={{
    pointerEvents: displayImage ? "none" : "auto",
    opacity: displayImage ? 0.3 : 1,
  }}>
          <Typography
            variant="h5"
                        sx={{ mb: 2, fontWeight: '600', color: 'primary.main' }}

          >
            {hobby.name}
          </Typography>

          <Grid container spacing={2}>
            {hobby.images.map((img, idx) => (
              <Grid
                item
                xs={12}
                sm={6}
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
                  onClick ={() => handleImage(img)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    // minWidth="150"
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
