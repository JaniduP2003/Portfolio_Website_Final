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
                  alt="Janidu Profile"
                  src="/images/janidu profile.jpg"
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
                I’m a passionate Computer Science student with a strong love for coding and problem 
                solving. What started as simple curiosity about technology has grown into a journey 
                of building real-world applications and exploring the deeper side of computing.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                I enjoy working with React, Java (Spring Boot), C programming, and have a deep appreciation 
                for Linux both as a tool and as a philosophy of freedom and open collaboration.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                Beyond coding, I’m drawn to philosophy and poetry, where I find new ways of expressing ideas and understanding 
                the world. I also dedicate time to the gym, pushing myself to grow physically just as much as I do intellectually.

                For me, coding isn’t just a career path it’s a craft I enjoy refining every day. I’m always eager to learn, experiment, and contribute 
                to meaningful projects that blend creativity, logic, and passion.
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
