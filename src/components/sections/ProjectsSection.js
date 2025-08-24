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
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Node.js backend, featuring user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github: 'https://github.com/JaniduP2003/ecommerce-platform',
      demo: 'https://ecommerce-demo.vercel.app',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      category: 'frontend',
      github: 'https://github.com/JaniduP2003/task-manager',
      demo: 'https://task-manager-demo.netlify.app',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather conditions and forecasts with beautiful visualizations.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      category: 'frontend',
      github: 'https://github.com/JaniduP2003/weather-dashboard',
      demo: 'https://weather-dashboard-demo.vercel.app',
      featured: false,
    },
    {
      id: 4,
      title: 'REST API Server',
      description: 'A robust REST API server with authentication, data validation, and comprehensive documentation using Swagger.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      category: 'backend',
      github: 'https://github.com/JaniduP2003/rest-api-server',
      demo: null,
      featured: false,
    },
    {
      id: 5,
      title: 'Mobile Expense Tracker',
      description: 'A cross-platform mobile app for tracking expenses with categories, budgets, and spending analytics.',
      technologies: ['React Native', 'Expo', 'SQLite', 'Chart.js'],
      category: 'mobile',
      github: 'https://github.com/JaniduP2003/expense-tracker',
      demo: null,
      featured: true,
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Material-UI, showcasing projects and skills.',
      technologies: ['React', 'Material-UI', 'CSS3', 'Vercel'],
      category: 'frontend',
      github: 'https://github.com/JaniduP2003/portfolio',
      demo: 'https://janidu-portfolio.vercel.app',
      featured: false,
    },
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
              <ToggleButton value="frontend">Frontend</ToggleButton>
              <ToggleButton value="backend">Backend</ToggleButton>
              <ToggleButton value="fullstack">Full Stack</ToggleButton>
              <ToggleButton value="mobile">Mobile</ToggleButton>
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
                  
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
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
                    
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button
                        href={project.github}
                        target="_blank"
                        startIcon={<GitHub />}
                        variant="outlined"
                        size="small"
                        sx={{ flex: 1 }}
                      >
                        Code
                      </Button>
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
              Check out my GitHub profile for more projects and contributions to open source.
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
