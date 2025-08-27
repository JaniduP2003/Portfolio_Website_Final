import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
} from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export default function HeroSection({ scrollToSection }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const roles = [
      'Computer Science Student',
      'Full Stack Developer',
      'Problem Solver',
      'Tech Enthusiast'
    ];
    
    const handleType = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const codeLines = [
    { keyword: 'const', variable: ' developer', operator: ' = ', string: '"passionate"', punctuation: ';' },
    { keyword: 'const', variable: ' skills', operator: ' = ', string: '["React", "Node.js", "Python"]', punctuation: ';' },
    { keyword: 'const', variable: ' passion', operator: ' = ', string: '"building amazing things"', punctuation: ';' },
    { keyword: 'function', variable: ' createImpact', operator: '() {', string: '', punctuation: '' },
    { keyword: '  return', variable: ' innovation', operator: ' + ', string: 'dedication', punctuation: ';' },
    { keyword: '}', variable: '', operator: '', string: '', punctuation: '' },
  ];

  return (
    <section id="home">
      <Container maxWidth="lg">
        {/* Flex container for left + right */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {/* Left side */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(45deg, #ffffff, #e3f2fd)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Hi, I'm Janidu
            </Typography>

            <Box sx={{ mb: 3, minHeight: '60px' }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: 'primary.main',
                  fontWeight: 500,
                }}
              >
                {text}
                <Box
                  component="span"
                  sx={{
                    animation: 'blink 1s infinite',
                    '@keyframes blink': {
                      '0%, 50%': { opacity: 1 },
                      '51%, 100%': { opacity: 0 },
                    },
                  }}
                >
                  |
                </Box>
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                maxWidth: 500,
                mx: { xs: 'auto', md: 0 },
                color: 'text.secondary',
                fontSize: '1.1rem',
                lineHeight: 1.6,
              }}
            >
              Passionate about creating innovative solutions and building amazing web applications. 
              Currently pursuing Computer Science and always eager to learn new technologies.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection('about')}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  backgroundColor: '#e84fdbff',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#7d0083ff' },
                }}
              >
                Learn About Me
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection('contact')}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                }}
              >
                Get In Touch
              </Button>
            </Box>
          </Box>

          {/* Right side */}
          <Box sx={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src="/images/janidu profile.jpg"
              alt="Janidu's Profile"
              sx={{
                width: { xs: '70%', sm: '60%', md: '100%' },
                maxWidth: '400px',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                border: '3px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-5px) scale(1.02)' },
                animation: 'morph 8s ease-in-out infinite',
                '@keyframes morph': {
                  '0%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
                  '50%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                  '100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }
                }
              }}
            />
          </Box>
        </Box>

        {/* Social links */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, mt: 4 }}>
          <Button href="https://github.com/JaniduP2003" target="_blank" startIcon={<GitHub />} sx={{ color: 'text.secondary' }}>
            GitHub
          </Button>
          <Button href="https://linkedin.com/in/janidu-peiris" target="_blank" startIcon={<LinkedIn />} sx={{ color: 'text.secondary' }}>
            LinkedIn
          </Button>
          <Button href="mailto:janidupeiris2003@gmail.com" startIcon={<Email />} sx={{ color: 'text.secondary' }}>
            Email
          </Button>
        </Box>

        {/* Code snippet */}
        <Container maxWidth="md" sx={{ mt: 6 }}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: 'background.paper',
              backdropFilter: 'blur(10px)',
              borderRadius: 2,
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontFamily: 'monospace' }}>
              Current Focus
            </Typography>
            <Box sx={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
              {codeLines.map((line, index) => (
                <Box key={index} sx={{ mb: 0.5 }}>
                  <Box component="span" sx={{ color: 'primary.main' }}>{line.keyword}</Box>
                  <Box component="span" sx={{ color: 'text.primary' }}>{line.variable}</Box>
                  <Box component="span" sx={{ color: 'primary.main' }}>{line.operator}</Box>
                  <Box component="span" sx={{ color: 'secondary.main' }}>{line.string}</Box>
                  <Box component="span" sx={{ color: 'text.primary' }}>{line.punctuation}</Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Container>
      </Container>
    </section>
  );
}
