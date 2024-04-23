import { useState, useEffect, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface SlideImage {
    url: string;
    caption: string;
}

const slideImages: SlideImage[] = [
    {
        url: 'https://wallpapers.com/images/high/white-power-button-computer-screen-lwszyg7jnqf7gfgb.webp',
        caption: 'Slide 1'
    },
    {
        url: 'https://i.pinimg.com/736x/28/eb/3a/28eb3a508e4bcc597c87979a72409096.jpg',
        caption: 'Slide 2'
    },
    {
        url: 'https://i.ytimg.com/vi/02Ip22mnHS0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShMMA8=&rs=AOn4CLDcGIbBUz_vTUc33tXR4wJmfa0DEw',
        caption: 'Slide 3'
    },
];

const AliceCarouselWithIndicators = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<AliceCarousel>(null); // Create a ref for AliceCarousel

    const handleSlideChange = (index: number) => {
        setCurrentIndex(index);
    };

    const handleIndicatorClick = (index: number) => {
        setCurrentIndex(index);
        carouselRef.current?.slideTo(index); // Use optional chaining to call slideTo method
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (currentIndex + 1) % slideImages.length;
            setCurrentIndex(nextIndex);
            carouselRef.current?.slideTo(nextIndex); // Use optional chaining to call slideTo method
        }, 5000); // Change image every 5 seconds

        return () => {
            clearInterval(intervalId); // Cleanup interval on component unmount
        };
    }, [currentIndex]); // Re-run effect when currentIndex changes

    return (
        <div className="alice-carousel-container">
            <AliceCarousel
                mouseTracking
                items={slideImages.map((slide, index) => (
                    <img
                        src={slide.url}
                        alt={slide.caption}
                        key={index}
                        className="carousel-image"
                    />
                ))}
                onSlideChanged={()=>handleSlideChange}
                ref={carouselRef} // Assign the ref to the carousel
            />

            <div className="indicators">
                {slideImages.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleIndicatorClick(index)} // Pass index directly to onClick handler
                    />
                ))}
            </div>

            <style>
                {`
                    .alice-carousel-container {
                        width: 100vw; /* Set width to 100% of viewport width */
                        overflow: hidden; /* Ensure content does not overflow */
                    }

                    .carousel-image {
                        width: 100vw; /* Image width covers entire container */
                        height: 75vh; /* Maintain aspect ratio */
                        object-fit: cover; /* Ensure image covers entire space */
                    }

                    .indicators {
                        display: flex;
                        justify-content: center;
                        margin-top: 20px;
                    }

                    .indicator {
                        width: 10px;
                        height: 10px;
                        border: 2px solid white;
                        border-radius: 50%;
                        margin: 0 5px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }

                    .indicator.active {
                        background-color: white;
                    }
                `}
            </style>
        </div>
    );
};

export default AliceCarouselWithIndicators;


// import { useState, useEffect, useRef } from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
//
// const slideImages = [
//     {
//         url: 'https://wallpapers.com/images/high/white-power-button-computer-screen-lwszyg7jnqf7gfgb.webp',
//         caption: 'Slide 1'
//     },
//     {
//         url: 'https://wallpapers.com/images/high/connected-chains-of-dots-and-lines-8w53afda4c6ie6kc.webp',
//         caption: 'Slide 2'
//     },
//     {
//         url: 'https://wallpapers.com/images/high/techno-robot-closeup-08x9hy7r0uo9g26h.webp',
//         caption: 'Slide 3'
//     },
// ];
//
// const AliceCarouselWithIndicators = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const carouselRef = useRef(null); // Create a ref for AliceCarousel
//
//     const handleSlideChange = (index:number) => {
//         setCurrentIndex(index);
//     };
//
//     const handleIndicatorClick = (index:number) => {
//         setCurrentIndex(index);
//         carouselRef.current.slideTo(index); // Use ref to call slideTo method
//     };
//
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             const nextIndex = (currentIndex + 1) % slideImages.length;
//             setCurrentIndex(nextIndex);
//             carouselRef.current.slideTo(nextIndex);
//         }, 5000); // Change image every 3 seconds
//
//         return () => {
//             clearInterval(intervalId); // Cleanup interval on component unmount
//         };
//     }, [currentIndex]); // Re-run effect when currentIndex changes
//
//     return (
//         <div className="alice-carousel-container">
//             <AliceCarousel
//                 mouseTracking
//                 items={slideImages.map((slide, index) => (
//                     <img
//                         src={slide.url}
//                         alt={slide.caption}
//                         key={index}
//                         className="carousel-image"
//                     />
//                 ))}
//                 startIndex={currentIndex}
//                 onSlideChanged={handleSlideChange}
//                 ref={carouselRef} // Assign the ref to the carousel
//                 duration={2000} // Set duration to 1 second (1000 milliseconds)
//             />
//
//             <div className="indicators">
//                 {slideImages.map((_, index) => (
//                     <div
//                         key={index}
//                         className={`indicator ${index === currentIndex ? 'active' : ''}`}
//                         onClick={() => handleIndicatorClick(index)}
//                     />
//                 ))}
//             </div>
//
//             <style>
//                 {`
//                     .alice-carousel-container {
//                         width: 100vw; /* Set width to 100% of viewport width */
//                         overflow: hidden; /* Ensure content does not overflow */
//                     }
//
//                     .carousel-image {
//                         width: 100vw; /* Image width covers entire container */
//                         height: 50vh; /* Maintain aspect ratio */
//                         object-fit: cover; /* Ensure image covers entire space */
//                     }
//
//                     .indicators {
//                         display: flex;
//                         justify-content: center;
//                         margin-top: 20px;
//                     }
//
//                     .indicator {
//                         width: 10px;
//                         height: 10px;
//                         border: 2px solid white;
//                         border-radius: 50%;
//                         margin: 0 5px;
//                         cursor: pointer;
//                         transition: background-color 0.3s ease;
//                     }
//
//                     .indicator.active {
//                         background-color: white;
//                     }
//                 `}
//             </style>
//         </div>
//     );
// };
//
// export default AliceCarouselWithIndicators;
