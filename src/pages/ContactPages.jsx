import React from 'react';
import { 
    Container, 
    Box, 
    Typography, 
    Grid, 
    Paper, 
    Stack, 
    IconButton,
    Avatar
} from '@mui/material';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export function ContactPage() {
    
    const contactMethods = [
        {
            icon: <FaEnvelope />,
            title: "Email",
            value: "linus@markstrom.dev",
            link: "mailto:linus@markstrom.dev",
            color: "#e63946" 
        },
        {
            icon: <FaPhone />,
            title: "Phone",
            value: "+46 (70) 517 72 78",
            link: "tel:+46705177278",
            color: "#2a9d8f" 
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Location",
            value: "Stockholm, Sweden",
            link: null, 
            color: "#f4a261" 
        }
    ];

    return (
        <Box 
            sx={{ 
                bgcolor: '#f8f9fa', 
                minHeight: '90vh', 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center', 
                py: 4 
            }}
        >
            <Container maxWidth="md">
                
                {/* HEADER */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography 
                        variant="overline" 
                        sx={{ fontWeight: 'bold', color: 'primary.main', letterSpacing: 2, display: 'block', mb: 1 }}
                    >
                        GET IN TOUCH
                    </Typography>
                    <Typography 
                        variant="h3" 
                        component="h1" 
                        sx={{ fontWeight: 800, color: '#1a1a1a', mb: 2 }}
                    >
                        Contact Me
                    </Typography>
                    <Typography 
                        variant="body1" 
                        color="text.secondary" 
                        sx={{ maxWidth: '500px', mx: 'auto', fontSize: '1.1rem' }}
                    >
                        Feel free to reach out via email or phone, or connect with me on social media.
                    </Typography>
                </Box>

                {/* CONTACT CARDS GRID */}
                <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
                    {contactMethods.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper
                                component={item.link ? 'a' : 'div'} 
                                href={item.link}
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    textDecoration: 'none', 
                                    borderRadius: 4,
                                    border: '1px solid #e0e0e0',
                                    transition: 'all 0.3s ease',
                                    bgcolor: 'white',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)', // Subtle shadow by default
                                    '&:hover': item.link ? {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                                        borderColor: 'primary.main'
                                    } : {}
                                }}
                            >
                                <Avatar 
                                    sx={{ 
                                        width: 56, 
                                        height: 56, 
                                        bgcolor: `${item.color}15`, 
                                        color: item.color,
                                        mb: 2,
                                        fontSize: '1.4rem'
                                    }}
                                >
                                    {item.icon}
                                </Avatar>
                                <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a1a1a', mb: 0.5, fontSize: '1.1rem' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                                    {item.value}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* SOCIAL MEDIA SECTION */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                        Connect on Social Media
                    </Typography>
                    <Stack direction="row" spacing={3} justifyContent="center">
                        <IconButton 
                            href="https://se.linkedin.com/in/linusmarkstrom" 
                            target="_blank"
                            sx={{ 
                                width: 60, 
                                height: 60, 
                                bgcolor: 'white', 
                                border: '1px solid #e0e0e0',
                                color: '#0077b5',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                transition: 'all 0.2s',
                                '&:hover': { bgcolor: '#0077b5', color: 'white', transform: 'scale(1.1)' }
                            }}
                        >
                            <FaLinkedin size={26} />
                        </IconButton>

                        <IconButton 
                            href="https://github.com/lmarkstrom" 
                            target="_blank"
                            sx={{ 
                                width: 60, 
                                height: 60, 
                                bgcolor: 'white', 
                                border: '1px solid #e0e0e0',
                                color: '#333',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                transition: 'all 0.2s',
                                '&:hover': { bgcolor: '#333', color: 'white', transform: 'scale(1.1)' }
                            }}
                        >
                            <FaGithub size={26} />
                        </IconButton>
                    </Stack>
                </Box>

            </Container>
        </Box>
    );
}