import React, { useState } from 'react'
import Switch from "@mui/material/Switch";
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Certifications from './Certifications';
import Hobbies from './Hobbies';
import FunMode from './FunMode';
import { Box, Stack, Typography } from "@mui/material";
import Projects from './Projects';

const AboutSection = () => {
    const [checked, setChecked] = useState(false);
    const [experience, setExperience] = useState(true);
    const [projects, setProjects] = useState(false);
    const [certifications, setCertifications] = useState(false);
    const [hobbies, setHobbies] = useState(false);
    const [skills, setSkills] = useState(false);
    const [education, setEducation] = useState(false);
const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleSection = (val) =>{
    // // if(val==='exp'){
    // console.log(val)
        setExperience(val==="exp"?true:false);
        setCertifications(val==="cer"?true:false);
        setProjects(val==="prj"?true:false);
        setHobbies(val==="hob"?true:false);
        setSkills(val==="skil"?true:false);
        setEducation(val==="edu"?true:false);

    // }
  }
  return (
    <div className='aboutSection'>
        
            <div className={`sections ${checked?"sectionsToggle":''} `}> 
                { !checked &&<>
               <Typography sx={{fontWeight:500}}  >
                 <span className={`${experience?'sectionSelected':''}`} onClick={()=>{handleSection("exp")}}>Experience</span>
                
                </Typography>
                <Typography sx={{fontWeight:500}}  >
                <span className={`${skills?'sectionSelected':''}`} onClick={()=>{handleSection("skil")}}>Skills</span>

                </Typography>
                <Typography sx={{fontWeight:500}} >
                <span className={`${projects?'sectionSelected':''}`} onClick={()=>{handleSection("prj")}}>Projects</span>

               
                </Typography>
               <Typography sx={{fontWeight:500}} >
                                <span className={`${education?'sectionSelected':''}`} onClick={()=>{handleSection("edu")}}>Education</span>

                </Typography> 
                <Typography sx={{fontWeight:500}} >
                <span className={`${certifications?'sectionSelected':''}`} onClick={()=>{handleSection("cer")}}>Certifications</span>

                </Typography>

                <Typography sx={{fontWeight:500}} >

                <span className={`${hobbies?'sectionSelected':''}`} onClick={()=>{handleSection("hob")}}>Hobbies</span>
                </Typography>
                </>
                }
            </div>

         <hr />

        <div className="sectionContainer">
            {
!checked ?<>
                {experience?<Experience mode={checked}/>:""}
            {education?<Education mode={checked}/>:""}
            {skills?<Skills mode={checked}/>:""}
            {projects?<Projects mode={checked}/>:""}
            {certifications?<Certifications mode={checked}/>:""}
            {hobbies?<Hobbies mode={checked}/>:""}
</>:<FunMode />
        }
        </div>

    <div className="modeToggle">
        <span style={{color:!checked?'aliceblue':'#7982a0'}}>PRO</span>
         <Switch
         sx={{
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#328ef8', 
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#328ef8', 
    },
     "& .MuiSwitch-thumb": {
          color: "#fff4f4", 
        },
        "& .MuiSwitch-track": {
          backgroundColor: "#fffefe", 
        },
  }}
        checked={checked}
        onChange={handleChange}
      />
      <span style={{color:checked?'aliceblue':'#7982a0'}}>FUN</span>
    </div>

    </div>
  )
}

export default AboutSection