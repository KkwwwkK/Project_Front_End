import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
    {
        url: 'https://wallpapers.com/images/high/windows-techno-logo-xfej8mbbg1lbamrt.webp',
        caption: 'Slide 1'
    },
    {
        url: 'https://wallpapers.com/images/high/techno-robot-closeup-08x9hy7r0uo9g26h.webp',
        caption: 'Slide 2'
    },
    {
        url: 'https://wallpapers.com/images/high/glowing-techno-speakers-laftv0bomxhkvh1c.webp',
        caption: 'Slide 3'
    },
];

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Calculate the next slide index
            const nextSlide = (currentSlide + 1) % slideImages.length;
            setCurrentSlide(nextSlide);
        }, 1000); // Change slide every 1 second (1000 milliseconds)

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [currentSlide]); // Re-run effect when currentSlide changes

    return (
        <div className="slide-container">
            <Slide
                onChange={(oldIndex, newIndex) => {
                    // Set the current slide index when slide changes
                    setCurrentSlide(newIndex);
                }}
                duration={5000} // Duration of slide transition (ms)
            >
                {slideImages.map((slideImage, index) => (
                    <div key={index} className={index === currentSlide ? 'active' : ''}>
                        <div
                            style={{
                                backgroundImage: `url(${slideImage.url})`,
                                ...divStyle
                            }}
                        >
                            {/* Optional: Display slide caption */}
                            {/* <div style={spanStyle}>{slideImage.caption}</div> */}
                        </div>
                    </div>
                ))}
            </Slide>
            <style>
                {`
                    /* Hide navigation buttons by default */
                    .slide-container .react-slideshow-container .nav {
                        display: none;
                    }

                    /* Show navigation buttons when hovering over slide container */
                    .slide-container:hover .react-slideshow-container .nav {
                        display: block;
                    }
                `}
            </style>
        </div>
    );
};

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
};

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
};

export default Slideshow;
