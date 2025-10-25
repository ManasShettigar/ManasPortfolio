import React from 'react';
import { Box, Grid, Typography, Avatar, Paper } from '@mui/material';
import skillsData  from './SkillsData';

const Skills = () => {
  return (
    <Box sx={{ padding: { xs: 2, sm: 4, md: 6 } }}>
      {skillsData.map((section) => (
        <Box key={section.category} sx={{ mb: { xs: 3, sm: 4 } }}>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: '600', color: 'primary.main' }}
          >
            {section.category}
          </Typography>
          <Grid container spacing={2}>
            {section.items.map((item) => (
              <Grid
                item
                xs={6}
                sm={4}  
                md={3}  
                lg={2}   
                key={item.name}
              >
                <Paper
                  elevation={3}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    p: 1.5,
                    borderRadius: 2,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  {item.logo && (
                    <Avatar
                      src={item.logo}
                      alt={item.name}
                      variant="rounded"
                      sx={{ width: { xs: 30, sm: 35, md: 40 }, height: { xs: 30, sm: 35, md: 40 } }}
                    />
                  )}
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: 12, sm: 14, md: 16 },
                      fontWeight: 500,
                      textAlign: 'center',
                    }}
                  >
                    {item.name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
