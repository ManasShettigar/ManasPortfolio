import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
const Footer = () => {
    const handleLinkOpen = (val) => {
    const link = document.createElement('a');
    link.href = val; 
    link.target = "_blank";
    link.click();
  };
  return (
    // <div className='footer' style={{backgroundColor :"aliceblue"}}>
        <footer class="footer">
    <span class="copyright">
        &copy; 2025 Manas Shettigar
    </span>

    <div class="contact-links">
        <div className='contact-primary additionalEmail' onClick={()=>handleLinkOpen("mailto:manasshettigar@gmail.com")}> 
        <MailIcon/>
        <span>manasshettigar@gmail.com</span>
        </div>
        <div className='contact-primary' > 
        <CallIcon/>
        <span>+91 7021392203</span>
        </div>
       
    </div>
    <div className="contact-social">
        <GitHubIcon  className="contact-social-icon" onClick={()=>handleLinkOpen("https://github.com/manasshettigar")} />
        <LinkedInIcon className='contact-social-icon'  onClick={()=>handleLinkOpen("https://in.linkedin.com/in/manasshettigar")}/>
        <InstagramIcon  className='contact-social-icon' onClick={()=>handleLinkOpen("https://www.instagram.com/manasshettigar/")}/>
    </div>
</footer>
    // </div>
  )
}

export default Footer