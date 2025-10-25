import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Princess1 from "../assests/FunMode/princess1.png"
import Princess2 from "../assests/FunMode/princess2.png"
import Princess3 from "../assests/FunMode/princess3.png"
import Princess7 from "../assests/FunMode/princess7.png"
import Princess4 from "../assests/FunMode/princess4.png"
import Princess5 from "../assests/FunMode/princess5.png"
import Princess6 from "../assests/FunMode/princess6.png"
import Princess8 from "../assests/FunMode/princess8.png"
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Certifications from "./Certifications";
import Hobbies from "./Hobbies";


const FunModeIntro = () => {
  return (
    <Box
      sx={{
        // width: "100%",
        // minHeight: "100vh",
        // background: "linear-gradient(180deg, #0a0a0a, #111827)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 3, sm: 6, md: 10 },
        py: { xs: 4, sm: 6 },
        textAlign: { xs: "center", md: "left" },
        flexDirection:"column"
      }}
    >
      {/* Image Section */}
      <Box
        component="img"
        src={Princess1}
        alt="Princess Meenakshi"
        sx={{
            width: { xs: 150, sm: 200, md: 250 }, // Equal width and height
      height: { xs: 150, sm: 200, md: 250 },
        //   width: { xs: "60%", sm: "45%", md: "35%" },
          borderRadius: "50%",
          mb: { xs: 3, md: 0 },
                objectFit: "cover",  // Prevents stretching
 objectPosition: "5% center", 
//  backgroundColor: "", // moves the visible part slightly to the right
background:
            "linear-gradient(145deg, rgba(255,192,203,0.15), rgba(255,255,255,0.05))",
        }}
      />
      <Paper
        elevation={6}
        sx={{
          position: "relative",
          background:
            "linear-gradient(145deg, rgba(255,192,203,0.15), rgba(255,255,255,0.05))",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "25px",
          p: { xs: 2, sm: 3 },
          my: 5,
          color: "aliceblue",
          maxWidth: { xs: "90%", md: "50%" },
          fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },
          lineHeight: 1.6,
          "&::after": {
            content: '""',
            position: "absolute",
            top: "-15px",
            // left: { xs: "45%", md: "-15px" },
            left : "50%",
            transform: {
              xs: "translateX(-50%) rotate(45deg)",
              md: "translateX(-50%) rotate(45deg)",
            },
            width: "25px",
            height: "25px",
            bgcolor: "rgba(255,192,203,0.15)",
            borderLeft: "1px solid rgba(255,255,255,0.2)",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "4px",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
        >
          <span style={{ fontWeight: "600", color: "#FFC0CB" }}>👑 Hi there!</span>{" "}
          You’ve chosen{" "}
          <span style={{ color: "#4b8ffc", fontWeight: "bold" }}>Fun Mode</span>?!  
          That means you get *me* —{" "}
          <span style={{ color: "#FFB6C1", fontWeight: "bold" }}>Meenakshi</span> —
          your adorable host for today! 💖  
          I’ll guide you through my mama’s awesome portfolio — his{" "}
          <span style={{ color: "#87CEFA" }}>experience</span>,{" "}
          <span style={{ color: "#87CEFA" }}>skills</span>, and{" "}
          <span style={{ color: "#87CEFA" }}>projects</span> await! 🌈✨  
          Ready to have some fun~?
        </Typography>
      </Paper>

      <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 2, md: 4 },
        py: 4,
        px: { xs: 2, sm: 4 },
      }}
    >
      

      <Paper
        elevation={6}
        sx={{
          position: "relative",
          background:
            "linear-gradient(135deg, rgba(135,206,250,0.1), rgba(255,255,255,0.05))",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "25px",
          p: { xs: 2, sm: 3 },
          maxWidth: { xs: "90%", md: "60%" },
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            right: "-15px",
            transform: "translateY(-50%) rotate(45deg)",
            width: "25px",
            height: "25px",
            backgroundColor: "rgba(135,206,250,0.1)",
            borderLeft: "1px solid rgba(255,255,255,0.2)",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "4px",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, lineHeight: 1.6 ,
        color: "aliceblue"}}
        >
          <span style={{ fontWeight: "600", marginRight: 6 }}>
            {"Oooh, look here! Uncle worked in big jobs and made important stuff! He fix things, code things, and make meetings. He looks so smart 😎 . Just like me, my mama is also a whole package of awesomeness! 💖"}
          </span>
          {/* {experienceData.text} */}
        </Typography>
      </Paper>
      <Box
        component="img"
        src={Princess2}
        alt="Experience"
        sx={{
          width: { xs: 150, sm: 200, md: 250 },
          height: { xs: 150, sm: 200, md: 250 },
          borderRadius: "50%",
          objectFit: "cover",
        //   boxShadow: "0 0 20px rgba(0,0,0,0.3)",
        }}
      />
    </Box>
      <Experience mode={true}/>

      <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 2, md: 4 },
        py: 4,
        px: { xs: 2, sm: 4 },
      }}
    >
<Box
            component="img"
            src={Princess3}
            alt="Skills"
            sx={{
              width: { xs: 150, sm: 200, md: 250 },
              height: { xs: 150, sm: 200, md: 250 },
              borderRadius: "50%",
              objectFit: "cover",
            //   boxShadow: "0 0 20px rgba(0,0,0,0.3)",
            }}
          />
      <Paper
        elevation={6}
        sx={{
          position: "relative",
          background:
            "linear-gradient(135deg, rgba(135,206,250,0.1), rgba(255,255,255,0.05))",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "25px",
          p: { xs: 2, sm: 3 },
          maxWidth: { xs: "90%", md: "60%" },
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "-15px",
            transform: "translateY(-50%) rotate(45deg)",
            width: "25px",
            height: "25px",
            backgroundColor: "rgba(135,206,250,0.1)",
            borderLeft: "1px solid rgba(255,255,255,0.2)",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "4px",
        },
    }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, lineHeight: 1.6 ,
          color: "aliceblue"}}
        >
          <span style={{ fontWeight: "600", marginRight: 6 }}>
            {"Whoa, so many skills! React, Spring Boot, Docker, and Kuber-neene? (It’s so tricky, just ask my mama — he’ll tell you!)  He’s like a superhero with a keyboard! 🦸‍♂️⌨️ 🛠️"}
          </span>
        </Typography>
      </Paper>
          
    </Box>
    <Skills mode={true}/>
<Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 2, md: 4 },
        py: 4,
        px: { xs: 2, sm: 4 },
      }}
    >

      <Paper
        elevation={6}
        sx={{
          position: "relative",
          background:
            "linear-gradient(135deg, rgba(135,206,250,0.1), rgba(255,255,255,0.05))",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "25px",
          p: { xs: 2, sm: 3 },
          maxWidth: { xs: "90%", md: "60%" },
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            right: "-15px",
            transform: "translateY(-50%) rotate(45deg)",
            width: "25px",
            height: "25px",
            backgroundColor: "rgba(135,206,250,0.1)",
            borderLeft: "1px solid rgba(255,255,255,0.2)",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "4px",
        },
    }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, lineHeight: 1.6 ,
          color: "aliceblue"}}
        >
          <span style={{ fontWeight: "600", marginRight: 6 }}>
            {"Mama creates end-to-end websites! Like games, but serious ones! Buttons, colors, and cool things that actually work! He's also always ready for late-night duties… like deployments — tested and approved by me! 😝💡"}
          </span>
        </Typography>
      </Paper>
          <Box
            component="img"
            src={Princess7}
            alt="Projects"
            sx={{
              width: { xs: 150, sm: 200, md: 250 },
              height: { xs: 150, sm: 200, md: 250 },
              borderRadius: "50%",
              objectFit: "cover",
            //   objectPosition: "500% center",   
            //   boxShadow: "0 0 20px rgba(0,0,0,0.3)",
            }}
          />
    </Box>
    <Projects mode={true}/>
<Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 2, md: 4 },
        py: 4,
        px: { xs: 2, sm: 4 },
      }}
    >
        <Box
            component="img"
            src={Princess4}
            alt="Education"
            sx={{
              width: { xs: 150, sm: 200, md: 250 },
              height: { xs: 150, sm: 200, md: 250 },
              borderRadius: "50%",
              objectFit: "cover",
            //   objectPosition: "500% center",   
            //   boxShadow: "0 0 20px rgba(0,0,0,0.3)",
            }}
          />

      <Paper
        elevation={6}
        sx={{
          position: "relative",
          background:
            "linear-gradient(135deg, rgba(135,206,250,0.1), rgba(255,255,255,0.05))",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "25px",
          p: { xs: 2, sm: 3 },
          maxWidth: { xs: "90%", md: "60%" },
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "-15px",
            transform: "translateY(-50%) rotate(45deg)",
            width: "25px",
            height: "25px",
            backgroundColor: "rgba(135,206,250,0.1)",
            borderLeft: "1px solid rgba(255,255,255,0.2)",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "4px",
        },
    }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, lineHeight: 1.6 ,
          color: "aliceblue"}}
        >
          <span style={{ fontWeight: "600", marginRight: 6 }}>
            {"So many books and papers! I tried to read them, but everything just looked the same to me 😋"}
          </span>
        </Typography>
      </Paper>
          
    </Box>
    <Education mode={true}/>
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 2, md: 4 },
        py: 4,
        px: { xs: 2, sm: 4 },
      }}
    >
        

      <Paper
        elevation={6}
        sx={{
          position: "relative",
          background:
            "linear-gradient(135deg, rgba(135,206,250,0.1), rgba(255,255,255,0.05))",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "25px",
          p: { xs: 2, sm: 3 },
          maxWidth: { xs: "90%", md: "60%" },
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            right: "-15px",
            transform: "translateY(-50%) rotate(45deg)",
            width: "25px",
            height: "25px",
            backgroundColor: "rgba(135,206,250,0.1)",
            borderLeft: "1px solid rgba(255,255,255,0.2)",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "4px",
        },
    }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, lineHeight: 1.6 ,
          color: "aliceblue"}}
        >
          <span style={{ fontWeight: "600", marginRight: 6 }}>
            {"He got sooo many things called certificates! Coursera, Google, AWS… I even clap every time I see them! 👏👏👏"}
          </span>
        </Typography>
      </Paper>
          
    <Box
            component="img"
            src={Princess5}
            alt="Certificates"
            sx={{
              width: { xs: 150, sm: 200, md: 250 },
              height: { xs: 150, sm: 200, md: 250 },
              borderRadius: "50%",
              objectFit: "cover",
            //   objectPosition: "500% center",   
            //   boxShadow: "0 0 20px rgba(0,0,0,0.3)",
            }}
          />
    </Box>
    <Certifications mode={true}/>
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 2, md: 4 },
        py: 4,
        px: { xs: 2, sm: 4 },
      }}
    >
        
<Box
            component="img"
            src={Princess6}
            alt="Hobbies"
            sx={{
              width: { xs: 150, sm: 200, md: 250 },
              height: { xs: 150, sm: 200, md: 250 },
              borderRadius: "50%",
              objectFit: "cover",
            //   objectPosition: "500% center",   
            //   boxShadow: "0 0 20px rgba(0,0,0,0.3)",
            }}
          />
      <Paper
        elevation={6}
        sx={{
          position: "relative",
          background:
            "linear-gradient(135deg, rgba(135,206,250,0.1), rgba(255,255,255,0.05))",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "25px",
          p: { xs: 2, sm: 3 },
          maxWidth: { xs: "90%", md: "60%" },
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "-15px",
            transform: "translateY(-50%) rotate(45deg)",
            width: "25px",
            height: "25px",
            backgroundColor: "rgba(135,206,250,0.1)",
            borderLeft: "1px solid rgba(255,255,255,0.2)",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "4px",
        },
    }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, lineHeight: 1.6 ,
          color: "aliceblue"}}
        >
          <span style={{ fontWeight: "600", marginRight: 6 }}>
            {"My favorite part! Besides playing with me, he loves to travel ✈️, draw 🎨, and ride big zoom bikes 🏍️💨. He’s sooo cool!"}
          </span>
        </Typography>
      </Paper>
          
    </Box>
    <Hobbies mode={true}/>
     <Box
        component="img"
        src={Princess8}
        alt="Princess Meenakshi"
        sx={{
            width: { xs: 150, sm: 200, md: 250 }, // Equal width and height
      height: { xs: 150, sm: 200, md: 250 },
        //   width: { xs: "60%", sm: "45%", md: "35%" },
          borderRadius: "50%",
          mt:5,
          mb: { xs: 3, md: 0 },
                objectFit: "cover",  // Prevents stretching
 objectPosition: "5% center", 
//  backgroundColor: "", // moves the visible part slightly to the right
background:
            "linear-gradient(145deg, rgba(255,192,203,0.15), rgba(255,255,255,0.05))",
        }}
      />
      <Paper
        elevation={6}
        sx={{
          position: "relative",
          background:
            "linear-gradient(145deg, rgba(255,192,203,0.15), rgba(255,255,255,0.05))",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "25px",
          p: { xs: 2, sm: 3 },
          my: 5,
          color: "aliceblue",
          maxWidth: { xs: "90%", md: "50%" },
          fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },
          lineHeight: 1.6,
          "&::after": {
            content: '""',
            position: "absolute",
            top: "-15px",
            // left: { xs: "45%", md: "-15px" },
            left : "50%",
            transform: {
              xs: "translateX(-50%) rotate(45deg)",
              md: "translateX(-50%) rotate(45deg)",
            },
            width: "25px",
            height: "25px",
            bgcolor: "rgba(255,192,203,0.15)",
            borderLeft: "1px solid rgba(255,255,255,0.2)",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "4px",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
        >
          {"That’s my Mamas’s world! He codes, creates, and sometimes even lets me bang on his keyboard and laptop screen 😆. He’s the best developer ever! 💖"}
        </Typography>
      </Paper>

    </Box>
  );
};

export default FunModeIntro;

