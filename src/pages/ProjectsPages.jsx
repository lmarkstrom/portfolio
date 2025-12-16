import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from "react-router-dom";
import { projectData } from "../data/project-data";
import { 
    Container, 
    Grid, 
    Card, 
    CardMedia, 
    CardContent, 
    CardActions, 
    Typography, 
    Button, 
    Box, 
    Chip,
    Tabs,
    Tab
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArticleIcon from '@mui/icons-material/Article';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export function ProjectsPage(props) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const scrollTo = searchParams.get("scrollTo");
    
    // (0 = Projects, 1 = Papers)
    const [currentTab, setCurrentTab] = useState(0);
    const itemRefs = useRef({});
    const lastScrolledId = useRef(null);

    // Filter data
    const devProjects = projectData.filter(item => item.type === 'project' || !item.type);
    const academicPapers = projectData.filter(item => item.type === 'paper');

    // Handle Tab Change
    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    // SCROLL EFFECT
    useEffect(() => {
        if (!scrollTo || lastScrolledId.current === scrollTo) return;

        const isPaper = academicPapers.find(p => p.id === scrollTo);
        const targetTab = isPaper ? 1 : 0;

        if (currentTab !== targetTab) {
            setCurrentTab(targetTab);
            return; 
        }

        setTimeout(() => {
            if (itemRefs.current[scrollTo]) {
                itemRefs.current[scrollTo].scrollIntoView({ 
                    behavior: "smooth", 
                    block: "center" 
                });
                lastScrolledId.current = scrollTo;
            }
        }, 100);
        
    }, [scrollTo, currentTab, academicPapers]);

    const renderGrid = (items, isPaper) => (
        <Grid container spacing={4} sx={{ mt: 2 }}>
            {items.map((item) => (
                <Grid item xs={12} md={6} lg={4} key={item.id}>
                    <div 
                        ref={(el) => (itemRefs.current[item.id] = el)} 
                        style={{ height: '100%' }}
                    >
                        <Card 
                            sx={{ 
                                height: '100%', 
                                display: 'flex', 
                                flexDirection: 'column',
                                borderRadius: 3,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': { 
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
                                }
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="220"
                                image={item.image}
                                alt={item.title}
                                sx={{ objectFit: 'cover' }}
                            />

                            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                <Chip 
                                    label={isPaper ? "Research Paper" : "Software Project"} 
                                    size="small" 
                                    color={isPaper ? "secondary" : "primary"} 
                                    variant="outlined"
                                    sx={{ mb: 2, fontWeight: 600 }}
                                />
                                <Typography gutterBottom variant="h5" component="h2" fontWeight="700">
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                    {item.description}
                                </Typography>
                            </CardContent>

                            <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
                                {item.github && (
                                    <Button 
                                        size="medium" 
                                        variant="outlined" 
                                        startIcon={<GitHubIcon />}
                                        href={item.github}
                                        target="_blank"
                                        sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600 }}
                                    >
                                        {isPaper ? "Resources" : "GitHub"}
                                    </Button>
                                )}
                                {item.deploy && (
                                    <Button 
                                        size="medium" 
                                        variant="contained" 
                                        startIcon={isPaper ? <PictureAsPdfIcon /> : <LaunchIcon />}
                                        href={item.deploy}
                                        target="_blank"
                                        sx={{ 
                                            borderRadius: 2, 
                                            textTransform: 'none', 
                                            fontWeight: 600,
                                            bgcolor: 'black',
                                            '&:hover': { bgcolor: '#333' }
                                        }}
                                    >
                                        {isPaper ? "Read Paper" : "Live Demo"}
                                    </Button>
                                )}
                            </CardActions>
                        </Card>
                    </div>
                </Grid>
            ))}
        </Grid>
    );

    return (
        <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', py: 8 }}>
            <Container maxWidth="xl">
                {/* TABS SELECTION */}
                <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider', mb: 4 }}>
                    <Tabs 
                        value={currentTab} 
                        onChange={handleTabChange} 
                        centered
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="project categories"
                        sx={{
                            '& .MuiTab-root': { 
                                fontSize: '1rem', 
                                fontWeight: 600, 
                                textTransform: 'none',
                                minWidth: 120
                            }
                        }}
                    >
                        <Tab label="Development Projects" />
                        <Tab label="Research Papers" />
                    </Tabs>
                </Box>

                {/* TAB CONTENT 0: PROJECTS */}
                <div role="tabpanel" hidden={currentTab !== 0}>
                    {currentTab === 0 && (
                        <Box>
                            <Typography align="center" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', mb: 2 }}>
                                Software, applications, and tools I have built using various technologies.
                            </Typography>
                            {renderGrid(devProjects, false)}
                        </Box>
                    )}
                </div>

                {/* TAB CONTENT 1: PAPERS */}
                <div role="tabpanel" hidden={currentTab !== 1}>
                    {currentTab === 1 && (
                        <Box>
                            <Typography align="center" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', mb: 2 }}>
                                Research and publications regarding Computer Science and Engineering.
                            </Typography>
                            {academicPapers.length > 0 ? (
                                renderGrid(academicPapers, true)
                            ) : (
                                <Box sx={{ textAlign: 'center', py: 8 }}>
                                    <Typography variant="h6" color="text.secondary">
                                        No papers published yet.
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    )}
                </div>

            </Container>
        </Box>
    );
}