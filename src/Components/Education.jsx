import React from 'react'
import "../App.css"
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
} from "@mui/material";
const Education = ({mode}) => {
  return (
    <div className='experienceSection'>
         {mode&&<Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: "600",
                        color: "primary.main",
                        textAlign: { xs: "center", sm: "center", md: "left" },
                      }}
                    >
                      Education
                    </Typography>}
        <Stepper className="stepper" orientation="vertical">
  <Step active>
    <StepLabel StepIconComponent={() => <span className="customIcon"></span>}>
      <Typography variant="h6" color="white">
        Pillai HOC College of Engineering and Technology
      </Typography>
    </StepLabel>
    <StepContent>
      <Typography variant="subtitle1" color="gray">
        Bachelor of Engineering (Information Technology)
      </Typography>
      <Typography variant="body2" color="gray">
        2018 - 2022
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
        - Completed <strong>Bachelor of Engineering</strong> in{" "}
        <strong>Information Technology</strong> with a solid foundation in{" "}
        <strong>software development</strong> and secured <strong>8.36 CGPA</strong>.
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
        - Gained hands-on experience through academic projects in{" "}
        <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>React</strong>.
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
        - Graduated in <strong>2022</strong> with consistent academic performance.
      </Typography>
    </StepContent>
  </Step>

  <Step active>
    <StepLabel StepIconComponent={() => <span className="customIcon"></span>}>
      <Typography variant="h6" color="white">
        St. Joseph High School and Junior College
      </Typography>
    </StepLabel>
    <StepContent>
      <Typography variant="subtitle1" color="gray">
        Higher Secondary Certificate (HSC)
      </Typography>
      <Typography variant="body2" color="gray">
        2016 - 2018
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
        - Completed <strong>HSC</strong> from <strong>St. Joseph Junior College</strong> 
        with <strong>78.92%</strong>.
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
        - Focused on <strong>Science stream</strong> with a strong interest in{" "}
        <strong>Information Technology</strong> and <strong>Computer Science</strong>.
      </Typography>
    </StepContent>
  </Step>

  <Step active>
    <StepLabel StepIconComponent={() => <span className="customIcon"></span>}>
      <Typography variant="h6" color="white">
        Carmel Convent High School
      </Typography>
    </StepLabel>
    <StepContent>
      <Typography variant="subtitle1" color="gray">
        Secondary School Certificate (SSC)
      </Typography>
      <Typography variant="body2" color="gray">
        2016
      </Typography>
       <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
        - Completed <strong>SSC</strong> from <strong>Carmel Convent High School</strong> 
        with <strong>79%</strong>.
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
        - Built a strong academic foundation and developed an early interest in{" "}
        <strong>technology</strong> and <strong>problem-solving</strong>.
      </Typography>
    </StepContent>
  </Step>
</Stepper>

    </div>
  )
}

export default Education