// ============================================================================
// SKILLS SECTION COMPONENT
// ============================================================================
import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  Web,
  Storage,
  CloudQueue,
  PhoneAndroid,
} from '@mui/icons-material';

export default function SkillsSection() {
  // ============================================================================
  // SKILLS SECTION DATA
  // ============================================================================
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Web />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Material-UI', level: 80 },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Storage />,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Java', level: 75 },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: <CloudQueue />,
      skills: [
        { name: 'SQL', level: 75 },
        { name: 'PostgreSQL', level: 70 },
      ],
    },
    {
      title: 'UI/UX',
      icon: <PhoneAndroid />,
      skills: [
        { name: 'Figma', level: 75 },
        
      ],
    },
    {
    title: 'CI/CD',
      icon: <CloudQueue />,
      skills: [
        { name: 'Netlify', level: 75 },
        { name: 'GitLab', level: 70 },
      ],
    },
  ];

  const currentlyLearning = [
    'Next.js',
    'GitLab',
    'C#',
    'AWS',
  ];

  const learningGoals = [
    'DevOps and CI/CD',
    'System Design',
  ];

  return (
    <section id="skills">
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
            Skills & Technologies
          </Typography>

          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    backgroundColor: 'background.paper',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ color: 'primary.main', mr: 2, fontSize: '1.5rem' }}>
                      {category.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      {category.title}
                    </Typography>
                  </Box>
                  
                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">{skill.name}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 3,
                            backgroundColor: 'primary.main',
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <main className="main-flex3">
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 3,
                  backgroundColor: 'background.paper',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Currently Learning
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {currentlyLearning.map((item, index) => (
                    <Chip
                      key={index}
                      label={item}
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                      }}
                    />
                  ))}
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 3,
                  backgroundColor: 'background.paper',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Learning Goals
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {learningGoals.map((goal, index) => (
                    <Chip
                      key={index}
                      label={goal}
                      variant="outlined"
                      sx={{
                        borderColor: 'primary.main',
                        color: 'primary.main',
                      }}
                    />
                  ))}
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </section>
  );
}
