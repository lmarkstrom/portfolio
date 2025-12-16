import React from 'react';
import { Slider } from "../components/slider.jsx"; 
import { 
    Container, 
    Box, 
    Typography, 
    Button, 
    IconButton, 
    Chip, 
    Stack, 
    Divider 
} from "@mui/material";
import { AiOutlineContacts } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MAIN_PATH } from '../constants/constants.js';

const languages = ["Java", "Python", "C/C++", "C#", "Matlab", "Rust", "Prolog", "Haskell", "Assembly", "SQL", "PSQL", "MySQL", "SQLite", "Go", "JavaScript", "TypeScript", "HTML", "CSS"];
const frameworks = ["React", "Vue", "Node.js", "Next.js", "Redux", "Mui", "Tailwind", "Express", ".NET", "AWS", "Google Cloud", "Firebase", "Linux", "PyTorch"];

export function WelcomePage(props) {
    
    return (
        <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', display: 'flex', alignItems: 'center', py: 8 }}>
            <Container maxWidth="xl">
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' }, 
                    alignItems: 'center', 
                    gap: { xs: 6, md: 8 }
                }}>

                    {/* --- LEFT SIDE: SLIDER --- */}
                    <Box sx={{ 
                        flex: { xs: '1 1 100%', md: '1 1 55%' },
                        width: '100%',
                        minWidth: 0 
                    }}>
                        <Slider />
                    </Box>

                    {/* --- RIGHT SIDE: TEXT --- */}
                    <Box sx={{ 
                        flex: { xs: '1 1 100%', md: '1 1 45%' },
                        width: '100%',
                        pl: { md: 2 } 
                    }}>
                        <Typography variant="overline" sx={{ fontWeight: 'bold', color: 'primary.main', letterSpacing: 2 }}>
                            PORTFOLIO
                        </Typography>
                        <Typography 
                            variant="h1" 
                            sx={{ 
                                fontWeight: 800, 
                                mb: 2, 
                                color: '#1a1a1a',
                                fontSize: { xs: '3rem', lg: '4.5rem'}, // Bigger, bolder text
                                lineHeight: 1.1
                            }}
                        >
                            Hi, 
                        </Typography>
                        
                        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.2rem', lineHeight: 1.8, mb: 4, maxWidth: '600px' }}>
                            I am a fourth-year student at <b>KTH Royal Institute of Technology</b> in Stockholm,
                            pursuing Computer Science and Engineering studing the Computer Science Master with specializations in Cyber Security and Machine Learning.
                        </Typography>

                        <Stack direction="row" spacing={2} sx={{ mb: 5 }}>
                            <Button 
                                variant="contained" 
                                size="large" 
                                href={MAIN_PATH + "/projects"}
                                endIcon={<ArrowForwardIcon />}
                                sx={{ 
                                    borderRadius: 2, 
                                    px: 4, 
                                    py: 1.5, 
                                    fontSize: '1rem', 
                                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)' 
                                }}
                            >
                                Projects
                            </Button>
                            <Button 
                                variant="outlined" 
                                size="large"
                                href={MAIN_PATH + "/contact"}
                                startIcon={<AiOutlineContacts />}
                                sx={{ borderRadius: 2, px: 4, py: 1.5, fontSize: '1rem' }}
                            >
                                Connect
                            </Button>
                        </Stack>

                        <Stack direction="row" spacing={3}>
                            <IconButton href="https://se.linkedin.com/in/linusmarkstrom" target="_blank" sx={{ color: '#0077b5', transform: 'scale(1.2)' }}>
                                <FaLinkedin />
                            </IconButton>
                            <IconButton href="https://github.com/lmarkstrom" target="_blank" sx={{ color: '#333', transform: 'scale(1.2)' }}>
                                <FaGithub />
                            </IconButton>
                        </Stack>
                    </Box>
                </Box>

                <Divider sx={{ my: 5, opacity: 0.6 }} />

                {/* SKILLS SECTION */}
                <Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
                        <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'text.secondary' }}>LANGUAGES</Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {languages.map((lang) => (
                                    <Chip key={lang} label={lang} sx={{ bgcolor: 'white', border: '1px solid #e0e0e0', fontWeight: 500 }} />
                                ))}
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'text.secondary' }}>TOOLS & FRAMEWORKS</Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {frameworks.map((tool) => (
                                    <Chip key={tool} label={tool} variant="outlined" sx={{ fontWeight: 500 }} />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}