// ============================================================================
// ABOUT SECTION COMPONENT
// ============================================================================
import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  Chip,
  Avatar,
} from '@mui/material';
import {
  School,
  Work,
  LocationOn,
  Email,
} from '@mui/icons-material';

export default function AboutSection() {
  // ============================================================================
  // ABOUT SECTION DATA
  // ============================================================================
  const stats = [
    { label: 'Years of Study', value: '3+', icon: <School /> },
    { label: 'Projects Completed', value: '15+', icon: <Work /> },
    { label: 'Technologies Learned', value: '20+', icon: <School /> },
    { label: 'Coffee Cups', value: '∞', icon: <Work /> },
  ];

  const interests = [
    'Web Development', 'Machine Learning', 'Mobile Apps', 'UI/UX Design',
    'Open Source', 'Gaming', 'Music', 'Photography', 'Travel', 'Reading'
  ];

  return (
    <section id="about">
      <main className="main-flex2">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #ffffff, #e3f2fd)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </Typography>

          <Grid container spacing={4}>
            {/* Profile Section */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 3,
                  textAlign: 'center',
                  backgroundColor: 'background.paper',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: 'primary.main',
                    fontSize: '3rem',
                  }}
                >
                  JP
                </Avatar>
                <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                  Janidu Pabasara
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  Computer Science Student
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                    <LocationOn fontSize="small" />
                    <Typography variant="body2">Sri Lanka</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                    <Email fontSize="small" />
                    <Typography variant="body2">janidupeiris2003@gmail.com</Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} md={10} className="box-befor-bio">
  <Card
    sx={{
      p: 3,
      backgroundColor: 'background.paper',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      width: '100%',
    }}
  >
    <Typography variant="body1">
      This Box renders as an HTML section element.
    </Typography>
  </Card>
</Grid>

            {/* Bio Section */}
            <Grid item xs={12} md={8}>
              <Card
                sx={{
                  p: 3,
                  backgroundColor: 'background.paper',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  My Story
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                  I'm a passionate Computer Science student with a deep love for creating innovative 
                  digital solutions. My journey in technology began with curiosity about how things work, 
                  and has evolved into a commitment to building applications that make a difference.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Currently pursuing my degree in Computer Science, I've gained hands-on experience 
                  in full-stack development, working with modern technologies like React, Node.js, 
                  Python, and various databases. I believe in writing clean, efficient code and 
                  creating user experiences that are both functional and delightful.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or enjoying music and gaming. I'm always eager to learn, 
                  collaborate, and take on new challenges that push me to grow as a developer.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>

      <main className="main-grid">
        {stats.map((stat, index) => (
          <Card
            key={index}
            sx={{
              p: 3,
              textAlign: 'center',
              backgroundColor: 'background.paper',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
              },
            }}
          >
            <Box sx={{ color: 'primary.main', mb: 2, fontSize: '2rem' }}>
              {stat.icon}
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
              {stat.value}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {stat.label}
            </Typography>
          </Card>
        ))}
      </main>

      <main className="main-flex3">
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 600,
            }}
          >
            Interests & Hobbies
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'center',
            }}
          >
            {interests.map((interest, index) => (
              <Chip
                key={index}
                label={interest}
                variant="outlined"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                  },
                }}
              />
            ))}
          </Box>
        </Container>
      </main>
    </section>
  );
}
