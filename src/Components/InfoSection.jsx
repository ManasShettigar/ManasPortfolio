import React, { useState } from 'react'
import ProfileImage from '../assests/ManasProfilePhoto.jpg'
import ResumeIcon from '../assests/ResumeIcon.png'
import { Box, Typography } from "@mui/material";

import '../App.css'
const InfoSection = () => {

const[resumeButtonText,setResumeButtonText] = useState("Resume")

const onEnter = () =>{
    setResumeButtonText("Download")
}
const onLeave = () =>{
    setResumeButtonText("Resume")
}
const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://github.com/ManasShettigar/ManasPortfolio/raw/refs/heads/master/public/ManasShettigarCV.pdf'; 
    link.download = 'Manas_Gopal_Shettigar_Resume.pdf'; 
    link.click();
  };
  return (
    <Box
      className="infoSection"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: 2, md: 4 },
        // p: { xs: 2, md: 4 },
        width: "100%",
      }}
    >
      <Box
        component="img"
        src={ProfileImage}
        alt="ManasProfileImage"
        sx={{
          width: { xs: 120, sm: 150, md: 200 , lg:250 },
          height: { xs: 160, sm: 200, md: 250 , lg: 300 },
        //   borderRadius: "50%",
          objectFit: "cover",
          mb: { xs: 2, md: 0 },
        }}
      />

      <Box
        className="profileDispaly"
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
          }}
        >
          MANAS GOPAL SHETTIGAR
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            fontWeight: 500,
          }}
        >
          JAVA FULL STACK DEVELOPER
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            color: "text.secondary",
          }}
        >
          SDE @ Reliance JIO
        </Typography>
      </Box>

      <Box
        className="IntroC"
        sx={{
          flex: 1,
          mt: { xs: 3, md: 0 },
          textAlign: "justify",
        //   maxWidth: { xs: "100%", md: "70%" },
          maxWidth: "80%",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: "#3b82f6" }}>Introduction: </strong>
          3+ years of experience as a Java Full Stack SDE, specializing in
          designing and scaling enterprise web applications. Proficient in
          building secure, high-performance{" "}
          <span className="highlights">RESTful APIs</span> using{" "}
          <span className="highlights">Spring Boot</span>, developing responsive
          UIs with <span className="highlights">React</span>, and optimizing{" "}
          <span className="highlights">SQL</span> databases. Hands-on experience
          with CI/CD and DevOps principles{" "}
          <span className="highlights">(Kubernetes, Docker, NGINX)</span>. Deep
          commitment to code quality, performance optimization, and Agile
          methodologies.
        </Typography>
      </Box>

      <Box
        className="resumeDownload"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={handleResumeDownload}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
          mt: { xs: 3, md: 0 },
        //   p: { xs: 1.5, md: 2 },
          borderRadius: "12px",
          backgroundColor: "#3b82f6",
          color: "#fff",
          fontWeight: 500,
          "&:hover": { backgroundColor: "#2563eb" },
          transition: "0.3s ease",
        }}
      >
        <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
          {resumeButtonText}
        </Typography>
        <Box
          component="img"
          src={ResumeIcon}
          alt="ResumeIcon"
          sx={{ width: { xs: 22, sm: 25 }, height: { xs: 22, sm: 25 } }}
        />
      </Box>
    </Box>
    
  )
}

export default InfoSection
