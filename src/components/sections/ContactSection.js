// ============================================================================
// CONTACT SECTION COMPONENT
// ============================================================================
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  TextField,
  Button,
  Grid,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Twitter,
  Send,
} from '@mui/icons-material';

export default function ContactSection() {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // ============================================================================
  // CONTACT DATA
  // ============================================================================
  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'janidupeiris2003@gmail.com',
      link: 'mailto:janidupeiris2003@gmail.com',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+94 77 123 4567',
      link: 'tel:+94771234567',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Colombo, Sri Lanka',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <GitHub />,
      name: 'GitHub',
      url: 'https://github.com/JaniduP2003',
      color: '#333',
    },
    {
      icon: <LinkedIn />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/janidu-peiris',
      color: '#0077b5',
    },
    {
      icon: <Twitter />,
      name: 'Twitter',
      url: 'https://twitter.com/janidu_peiris',
      color: '#1da1f2',
    },
  ];

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlertMessage('Please fill in all required fields.');
      setShowAlert(true);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setAlertMessage('Thank you for your message! I\'ll get back to you soon.');
      setShowAlert(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <section id="contact">
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
            Get In Touch
          </Typography>

          <Grid container spacing={4}>
            {/* Contact Info */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Contact Information
                </Typography>
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    sx={{
                      mb: 2,
                      p: 2,
                      backgroundColor: 'background.paper',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      cursor: info.link ? 'pointer' : 'default',
                      transition: 'transform 0.2s ease',
                      '&:hover': info.link ? {
                        transform: 'translateX(5px)',
                      } : {},
                    }}
                    onClick={() => info.link && window.open(info.link, '_blank')}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ color: 'primary.main', mr: 2 }}>
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          {info.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                ))}
              </Box>

              <Box>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Follow Me
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      href={social.url}
                      target="_blank"
                      startIcon={social.icon}
                      variant="outlined"
                      sx={{
                        borderColor: social.color,
                        color: social.color,
                        '&:hover': {
                          backgroundColor: social.color,
                          color: 'white',
                        },
                      }}
                    >
                      {social.name}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Contact Form */}
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
                  Send Me a Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        multiline
                        rows={6}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<Send />}
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: '1.1rem',
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>

      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alertMessage.includes('Thank you') ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </section>
  );
}
