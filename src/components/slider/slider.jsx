import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";
import { useNavigate } from "react-router-dom";
import "./slider.css";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
    const navigate = useNavigate();
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
      console.log("next");
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      console.log("prev");
    };
  
    function auto() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  
    useEffect(() => {
      setCurrentSlide(0);
    }, []);
  
    useEffect(() => {
      if (autoScroll) {
        auto();
      }
      return () => clearInterval(slideInterval);
    }, [currentSlide]);

    const goToProject = (project) => {
      navigate(`/projects?scrollTo=${project}`);
    };
  
    return (
      <div className="slider-container">
        <div className="slider">
          {/* <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
          <AiOutlineArrowRight className="arrow next" onClick={nextSlide} /> */}
          {sliderData.map((slide, index) => {
            return (
              <div
                className={index === currentSlide ? "slide current" : "slide"}
                key={index}
              >
                {index === currentSlide && (
                  <div className="slider-content">
                    <img src={slide.image} alt="slide" className="image" />
                    <div className="content">
                      <h2>{slide.title}</h2>
                      <p>{slide.description}</p>
                      {/* <hr /> */}
                      <button onClick={() => goToProject("project" + (index + 1))}>See more</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="progress-bar">
          {sliderData.map((_, index) => (
            <div
              key={index}
              className={`progress-line ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    );
  };
  
  export { Slider };