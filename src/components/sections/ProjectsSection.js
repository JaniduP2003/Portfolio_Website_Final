// ============================================================================
// PROJECTS SECTION COMPONENT
// ============================================================================
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  Chip,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
} from '@mui/material';
import { GitHub, Launch, Code } from '@mui/icons-material';
import GitlabIcon from '@mui/icons-material/Storage'; // Placeholder GitLab icon
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ProjectsSection() {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  const [filter, setFilter] = useState('all');

  // ============================================================================
  // PROJECTS DATA
  // ============================================================================
  const projects = [
    {
      id: 1,
      title: 'CI/CD Pipeline for Portfolio Website',
      description:
        'A portfolio website integrated with a GitLab CI/CD pipeline and Netlify deployment. The pipeline automates build, test, and deployment stages, ensuring reliable and production-ready updates.',
      technologies: ['React', 'GitLab CI/CD', 'Netlify'],
      category: 'devops',
      github: 'https://github.com/JaniduP2003/Myportfolio2',
      gitlab: 'https://gitlab.com/JaniduP2003/janiduportfolio',
      linkedin: 'https://linkedin.com/in/janidup2003',
      
      featured: true,
    },
    {
      id: 2,
      title: 'SmartPhone Accessories Web App',
      description:
        'A modern and responsive web application for exploring and purchasing smartphone accessories. The app provides an easy-to-use interface with product listings, search and filter options, and a smooth shopping experience. Customers can browse categories like cases, chargers, headphones, and more, making it a one-stop solution for mobile essentials.',
      technologies: ['React', 'MYSQL', 'Material-UI',],
      category: 'frontend',
      github: 'https://github.com/JaniduP2003/smartphone-accessories.git',
      gitlab: null,
      linkedin: 'https://linkedin.com/in/janidup2003',
     
      featured: true,
    },
    {
      id: 3,
      title: 'FormLang++: A DSL & HTML Form Generato',
      description:
        'Designed FormLang++, a Domain-Specific Language for defining web forms, using Lex, Yacc, and C. The system parses .form scripts and generates fully functional HTML forms with built-in validation.',
      technologies: ['lex', 'yacc', 'Lexer & Parser','C', 'Error Handling:'],
      category: 'frontend',
      github: 'https://github.com/JaniduP2003/FormLang.git',
      gitlab: null,
      linkedin: 'https://linkedin.com/in/janidup2003',
      featured: false,
    },
    {
      id: 4,
      title: 'Solatraker Automated Sola Panal Positiioning System',
      description:
        'A real-time solar panel positioning system that automatically adjusts panel angles to maximize sunlight capture. It tracks the sun continuously, stores angle data in the cloud, and provides a web dashboard for live monitoring and historical analysis.',
      technologies: ['arduino', 'Iot', 'Web Dashboard',],
      category: 'frontend',
      gitlab: null,
      linkedin: 'https://linkedin.com/in/janidup2003',
      featured: false,
    },
   
  ];

  // Filter projects based on selected category
  const filteredProjects =
    filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================
  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  return (
    <section id="projects">
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
            My Projects
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <ToggleButtonGroup
              value={filter}
              exclusive
              onChange={handleFilterChange}
              sx={{
                '& .MuiToggleButton-root': {
                  color: 'text.secondary',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                  },
                },
              }}
            >
              <ToggleButton value="all">All</ToggleButton>
              
            </ToggleButtonGroup>
          </Box>

          <Grid container spacing={4}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.paper',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    {project.featured && (
                      <Chip
                        label="Featured"
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 10,
                          right: 10,
                          backgroundColor: 'primary.main',
                          color: 'primary.contrastText',
                        }}
                      />
                    )}
                    <Code sx={{ fontSize: 60, color: 'primary.main' }} />
                  </Box>

                  <CardContent
                    sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
                  >
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ mb: 3, color: 'text.secondary', flexGrow: 1 }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech, index) => (
                          <Chip
                            key={index}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: 'primary.main',
                              color: 'primary.main',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.github && (
                        <Button
                          href={project.github}
                          target="_blank"
                          startIcon={<GitHub />}
                          variant="outlined"
                          size="small"
                          sx={{ flex: 1 }}
                        >
                          GitHub
                        </Button>
                      )}
                      {project.gitlab && (
                        <Button
                          href={project.gitlab}
                          target="_blank"
                          startIcon={<GitlabIcon />}
                          variant="outlined"
                          size="small"
                          sx={{ flex: 1 }}
                        >
                          GitLab
                        </Button>
                      )}
                      {project.linkedin && (
                        <Button
                          href={project.linkedin}
                          target="_blank"
                          startIcon={<LinkedInIcon />}
                          variant="outlined"
                          size="small"
                          sx={{ flex: 1 }}
                        >
                          LinkedIn
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          href={project.demo}
                          target="_blank"
                          startIcon={<Launch />}
                          variant="contained"
                          size="small"
                          sx={{ flex: 1 }}
                        >
                          Demo
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <main className="main-center">
        <Container maxWidth="md">
          <Paper
            sx={{
              p: 4,
              textAlign: 'center',
              backgroundColor: 'background.paper',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
              Want to see more?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              Check out my GitHub profile for more projects and contributions to
              open source.
            </Typography>
            <Button
              href="https://github.com/JaniduP2003"
              target="_blank"
              variant="contained"
              size="large"
              startIcon={<GitHub />}
              sx={{ px: 4, py: 1.5 }}
            >
              Visit GitHub Profile
            </Button>
          </Paper>
        </Container>
      </main>
    </section>
  );
}
