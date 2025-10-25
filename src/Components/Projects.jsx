import { Typography } from '@mui/material'
import React from 'react'

const Projects = ({mode}) => {
  return (
    <div> {mode&&<Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: "600",
                color: "primary.main",
                textAlign: { xs: "center", sm: "center", md: "left" },
              }}
            >
              Projects
            </Typography>}</div>
  )
}

export default Projects