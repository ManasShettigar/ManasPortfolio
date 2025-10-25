import React from "react";
import { Box, Card, CardMedia } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const ImageViewer = (props) => {
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
            width: "100%",
            height: { xs: 200, sm: 250, md: 300 },
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
