import React from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Box } from "@mui/material";

import projectsData from './ProjectsData'
const Projects = ({mode}) => {
    const handleLinkOpen = (val) => {
    const link = document.createElement('a');
    link.href = val; 
    link.target = "_blank";
    link.click();
  };
  return (
     <Box
    className="certificateSection"
      sx={{
        minHeight: "100vh",
        py: 4,
        px: { xs: 2, sm: 4 },
      }}
      
      >
         {mode&&<Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: "600",
                        color: "primary.main",
                        textAlign: "center",
                      }}
                    >
                      Projects
                    </Typography>}
      <Grid container spacing={3} justifyContent="center" >
        {projectsData.map((proj, index) => (
            <>
            
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
            onClick={()=>handleLinkOpen(proj.link)}
            >
            <Card
              sx={{
                width: 330,
                backgroundColor:"#0a0a0a",
                borderRadius: 3,
                boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                color: "#e5e7eb",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 6px 20px rgba(255,255,255,0.1)",
                },
            }}
            >
              <CardActionArea
              >
                <CardMedia
                  component="img"
                  maxHeight="200"
                  image={proj.preview}
                  alt={proj.name}
                  sx={{
                    objectFit: "cover",
                    borderBottom: "2px solid #2a2a2a",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="body1"
                    align="center"
                    fontWeight={500}
                    sx={{ color: "#e5e7eb" }}
                  >
                    {proj.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </>
        ))}
      </Grid>
    </Box>
  )
}

export default Projects