import React, { useEffect, useRef } from "react";
import { Box, Card, CardMedia } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const ImageViewer = (props) => {
    const imageRef= useRef(null)
    useEffect(() => {
        imageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'column',
        gap:'10px',
        // width: "100%",
        p: { xs: 1, sm: 2 },
    }}
    ref={imageRef}
      className="imageViewer"
    // style={{position:"relative"}}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 400,
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.6)",
          },
        }}
      >
        <CardMedia
          component="img"
          src={props.src}
          alt={props.alt || "Image"}
          sx={{
            width:{ xs: 300, sm: 350, md: 400 , lg: 600},
            // maxHeight: { xs: 400, sm: 500, md: 700 , lg : 00 },
            objectFit: "cover",
          }}
        />
      </Card>
      <div className="closeButton" onClick={props.close}>
<CloseIcon color='black'/>

</div>
    </Box>
  );
};

export default ImageViewer;
