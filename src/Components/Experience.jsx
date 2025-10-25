import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
} from "@mui/material";

import "../App.css";
const experiences = [
  {
    company: "Jio Platforms Ltd.",
    role: "Software Development Engineer",
    duration: "2022 – Present",
    description: `
- Engineered and deployed end-to-end features for the **JioSign platform** using **React (Redux)** and **Spring Boot**, supporting **100K+ active users**.
- Developed reusable **UI components** and integrated **RESTful APIs** with **MySQL**, improving data retrieval speed and enhancing user experience by **30%**.
- Automated recurring workflows using **Spring Boot schedulers** and **cron jobs**, reducing manual intervention by **40%**.
- Ensured high availability and scalability of **microservices** through **Kubernetes**, **Docker**, and **NGINX** load balancing.
- Collaborated in **Agile sprints** with cross-functional teams, delivering high-quality releases with strong **unit and integration test coverage**.
- Optimized backend queries and refactored legacy code, achieving **30% faster API response times** in production.
`,
  },
  {
    company: "Sahu Technologies",
    role: "Web Developer Intern",
    duration: "2021 – 2022",
    description: `
- Developed and maintained **REST APIs** in **Java**, optimized **SQL queries**, and improved backend performance.
- Collaborated with the frontend team to ensure smooth API integration and consistent data flow.
`,
  },
];
const Experience = () => {
  return (
    <div className="experienceSection">
      {/* <Box sx={{ maxWidth: 600, color: "white" }}> */}
      <Stepper className="stepper" orientation="vertical">
        {/* {experiences.map((exp, index) => ( */}
        {/* <Step key={index} active> */}
        <Step active>
          <StepLabel
            StepIconComponent={() => <span className="customIcon"></span>}
          >
            <Typography variant="h6" color="white">
              {experiences[0].company}
            </Typography>
          </StepLabel>
          <StepContent>
            <Typography variant="subtitle1" color="gray">
              {experiences[0].role}
            </Typography>
            <Typography variant="body2" color="gray">
              {experiences[0].duration}
            </Typography>
            {/* <li> */}

            <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
        - Engineered and deployed end-to-end features for the{" "}
        <strong>JioSign platform</strong> using <strong>React (Redux)</strong>{" "}
        and <strong>Spring Boot</strong>, supporting <strong>100K+ active users</strong>.
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
        - Developed reusable <strong>UI components</strong> and integrated{" "}
        <strong>RESTful APIs</strong> with <strong>MySQL</strong>.
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
        - Improved data retrieval speed and enhanced user experience by{" "}
        <strong>30%</strong>.
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
        - Automated recurring workflows using <strong>Spring Boot schedulers</strong>{" "}
        and <strong>cron jobs</strong>, reducing manual intervention by{" "}
        <strong>40%</strong>.
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
        - Ensured high availability and scalability of <strong>microservices</strong>{" "}
        through <strong>Kubernetes</strong>, <strong>Docker</strong>, and{" "}
        <strong>NGINX</strong> load balancing.
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
        - Collaborated in <strong>Agile sprints</strong> with cross-functional teams, 
        delivering high-quality releases with strong <strong>unit and integration test coverage</strong>.
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
        - Optimized backend queries and refactored legacy code, achieving{" "}
        <strong>30% faster API response times</strong> in production.
      </Typography>
          </StepContent>
        </Step>
        <Step active>
          <StepLabel
            StepIconComponent={() => (
              <span className="customIcon"></span>
            )}
          >
            <Typography variant="h6" color="white">
              {experiences[1].company}
            </Typography>
          </StepLabel>
          <StepContent>
            <Typography variant="subtitle1" color="gray">
              {experiences[1].role}
            </Typography>
            <Typography variant="body2" color="gray">
              {experiences[1].duration}
            </Typography>
         <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
        - Assisted in developing and maintaining <strong>responsive web pages </strong> 
        using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
        - Using <strong>React</strong> for improving UI consistency and accessibility.
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
        - Integrated <strong>RESTful APIs</strong> to fetch and display dynamic content, 
        enhancing application interactivity and user engagement.
      </Typography>
          </StepContent>
        </Step>
        {/* ))} */}
      </Stepper>
      {/* </Box> */}
    </div>
  );
};

export default Experience;
