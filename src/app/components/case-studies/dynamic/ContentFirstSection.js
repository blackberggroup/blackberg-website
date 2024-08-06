import React, { useEffect } from 'react';
import { gsap } from "gsap/dist/gsap";

const ContentFirstSection = ({ page }) => {

    const introContent = page.introContent.split(' ');


    useEffect(() => {

        
   // Select all elements with the class "word"
    const words = document.querySelectorAll("#content-first .word");


  // Create the GSAP timeline with scroll trigger
  gsap.timeline({
    scrollTrigger: {
        trigger: "#content-first p", // The element that triggers the animation
        start: "top 5%",          // Start the animation when the top of the element is 75% down from the top of the viewport
        end: "+=300",         // End the animation when the bottom of the element is 25% up from the bottom of the viewport
        scrub: true,               // Scrub the animation based on scroll position
        markers: false,            // Remove markers for production
        once: true,                // Ensure the animation runs only once
    }
}).fromTo(words, 
    { opacity: 0.3 },  // Initial state: slightly visible and below position
    {
        opacity: 1,         // End state: fully visible
        stagger: 0.05,      // Stagger the animation by 0.05 seconds for each word
        ease: "power1.out"  // Slight ease for a smooth animation
    }
);
        
        // Clean up function
        return () => {

        };
         
      }, []);


    

    return (
        <section id="content-first" className="pb-8 pb-md-11" aria-label="Case study challenge and solution">
            <div className="container">
                {page.introContent && (
                <div className="row mb-0">
                    <div className="col-12 col-md-8 col-lg-6 mx-auto">
                        {/* <p className="m-0">{page.introContent}</p> */}
                        <p className="m-0">
                            {introContent.map((word, index) => (
                                <span key={index} className="word">
                                {word}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
                )}
                {/* Divider */}
                <div className="row my-0">
                <div classname="col-12 hr">
                    <hr className="hr--primar my-8" />
                </div>
                </div>
                {/* Content | The Challenge */}
                {page.challengeContent && (
                <div className="row mt-0">
                    <div className="col-12 col-md-8 col-lg-6 mx-auto">
                        <h2 className="display-5 mb-3">The Challenge</h2>
                        <p className="m-0">{page.challengeContent}</p>
                    </div>
                </div>
                )}
                {/* Content | The Solution */}
                {page.solutionContent && (
                <div className="row mt-8 mt-md-11">
                    <div className="col-12 col-md-8 col-lg-6 mx-auto">
                        <h2 className="display-5 mb-3">The Solution</h2>
                        <p className="m-0">{page.solutionContent}</p>
                    </div>
                </div>
                )}
            </div>
        </section>
    );
};

export default ContentFirstSection;