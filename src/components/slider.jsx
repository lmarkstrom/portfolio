import { useEffect, useState, useRef, useCallback } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Button, Typography, Stack, useTheme, useMediaQuery } from "@mui/material";
import { projectData } from "../data/project-data";
import { MAIN_PATH } from "../constants/constants";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = projectData.length;
    const navigate = useNavigate();
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    const autoScroll = true;
    const intervalTime = 5000;
    const slideInterval = useRef(null);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === slideLength - 1 ? 0 : prev + 1));
    }, [slideLength]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slideLength - 1 : prev - 1));
    };

    const startAuto = () => {
        if (!autoScroll) return;
        stopAuto();
        slideInterval.current = setInterval(nextSlide, intervalTime);
    };

    const stopAuto = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
            slideInterval.current = null;
        }
    };

    useEffect(() => {
        startAuto();
        return () => stopAuto();
    }, [nextSlide]); 

    const goToProject = (id) => {
        navigate(`${MAIN_PATH}/projects?scrollTo=${id}`);
    };

    if (!projectData || projectData.length === 0) {
        return <Box sx={{ p: 4, textAlign: 'center' }}>No slides available</Box>;
    }

    return (
        <Box 
            component="section"
            onMouseEnter={stopAuto} 
            onMouseLeave={startAuto}
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >
            {/* --- SLIDER WINDOW --- */}
            <Box
                sx={{
                    width: '100%',
                    aspectRatio: '16 / 10', 
                    minHeight: '300px',
                    position: 'relative',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    bgcolor: '#e6eef8', 
                }}
            >
                {/* Arrows */}
                <IconButton onClick={prevSlide} sx={{ ...arrowStyle, left: 16 }}>
                    <AiOutlineArrowLeft />
                </IconButton>
                <IconButton onClick={nextSlide} sx={{ ...arrowStyle, right: 16 }}>
                    <AiOutlineArrowRight />
                </IconButton>

                {/* Slides */}
                {projectData.map((slide, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: index === currentSlide ? 1 : 0,
                            transition: 'opacity 0.8s ease-in-out',
                            pointerEvents: index === currentSlide ? 'all' : 'none',
                        }}
                    >
                        <Box
                            component="img"
                            src={slide.image}
                            alt={slide.title}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', 
                            }}
                        />

                        {/* Text Overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: { xs: 20, md: 40 },
                                left: { xs: 20, md: 40 },
                                width: { xs: '85%', md: '55%' }, 
                                p: 3, 
                                borderRadius: 4,
                                background: 'rgba(0, 0, 0, 0.15)', 
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(255, 255, 255, 0.3)', 
                                color: 'white',
                                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                                transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                                opacity: index === currentSlide ? 1 : 0,
                                transition: 'all 0.6s ease 0.3s', 
                            }}
                        >
                            <Typography 
                                variant={isMobile ? "h6" : "h5"} 
                                fontWeight="bold" 
                                gutterBottom 
                                sx={{ 
                                    color: 'white',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                                }}
                            >
                                {slide.title}
                            </Typography>
                            
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    mb: 3, 
                                    color: 'rgba(255,255,255,1)', 
                                    lineHeight: 1.6, 
                                    display: { xs: 'none', sm: 'block' },
                                    textShadow: '0 1px 2px rgba(0,0,0,0.6)'
                                }}
                            >
                                {slide.shortDescription}
                            </Typography>
                            <Button size="small" variant="contained" onClick={() => goToProject(slide.id)} sx={{ bgcolor: 'black', color:'white' }}>
                                See More
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Dots */}
            <Stack direction="row" spacing={1} justifyContent="center">
                {projectData.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        sx={{
                            width: index === currentSlide ? 24 : 8,
                            height: 8,
                            borderRadius: 4,
                            bgcolor: index === currentSlide ? 'primary.main' : '#ccc',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                    />
                ))}
            </Stack>
        </Box>
    );
};

const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    bgcolor: 'white',
    color: 'black',
    boxShadow: 2,
    '&:hover': { bgcolor: '#f0f0f0' }
};

export { Slider };