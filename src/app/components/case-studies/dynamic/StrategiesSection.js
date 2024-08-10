import React, { useEffect } from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const StrategiesSection = ({ page }) => {

    const strategyContent = page.strategiesContent.split(' ');


    useEffect(() => {

        const strategyHeadline = document.querySelectorAll("#strategies-intro h2 .word");

        gsap.fromTo(
            strategyHeadline,
            {
                y: '110%',
                opacity: 0,
                rotationZ: '10',
            },
            {
                ease: "none",
                y: 0,
                opacity: 1,
                rotationZ: '0',
                stagger: 0.05,
                scrollTrigger: {
                    trigger: "#strategies", // Ensure the correct trigger element is used
                    start: "top 90%", // Adjust start position to trigger later
                   // markers: true, // Markers for debugging
                    once: true, // Ensure the animation runs only once
                }
            }
        );

        const strategyWords = document.querySelectorAll("#strategies-intro p .word");

        gsap.fromTo(
            strategyWords,
            {
                opacity: 0.1
            },
            {
                ease: "none",
                opacity: 1,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: "#strategies-intro", // Ensure the correct trigger element is used
                    start: "top 90%", // Adjust start position to trigger later
                    end: "bottom 50%", // Adjust end position
                    scrub: true,
                   // markers: true, // Markers for debugging
                    once: true, // Ensure the animation runs only once
                    delay: 0.4,
                }
            }
        );

        const strategies = document.querySelectorAll("#key-strategies .strategy-col");

        gsap.fromTo(
            strategies,
            {
                opacity: 0,
                scale: .85,
                y: 0
            },
            {
                ease: "Power3.out",
                opacity: 1,
                duration: .5,
                y: 0,
                scale: 1,
                stagger: 0.25,
                scrollTrigger: {
                    trigger: "#key-strategies", // Ensure the correct trigger element is used
                    start: "top 70%", // Adjust start position to trigger later
                  //  markers: true, // Markers for debugging
                    once: true, // Ensure the animation runs only once
                    //delay: 0.4,
                }
            }
        );

        // Clean up function
        // return () => {
        //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        // };

    }, []);

    return (
        <section id="strategies" className="py-8 py-md-11" aria-label="Strategies">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5 d-flex flex-column" id="strategies-intro">
                        <div className="text-reveal mb-3">
                            <h2 className="display-5"><span className="word will-change">Key</span> <span className="word will-change">Strategies</span></h2>
                        </div>
                        <p className="m-0">{page.strategiesContent}</p>
                        <p className="m-0">
                            {strategyContent.map((word, index) => (
                                <span key={index} className="word will-change">
                                {word}
                                </span>
                            ))}
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 ms-md-auto" id="key-strategies">
                        <div className="row gx-4 gy-4 gx-md-5 gy-md-5 pt-4 pt-lg-0 my-0">
                            {page.strategies && page.strategies.length > 0 && (
                            <div className="col-12 col-md-6 mt-4 mt-lg-0 strategy-col will-change">
                                <h3 className="display-6">{page.strategies[0].title}</h3>
                                <p className="m-0">{page.strategies[0].details}</p>
                            </div>
                            )}
                            {page.strategies && page.strategies.length > 1 && (
                            <div className="col-12 col-md-6 mt-4 mt-lg-0 strategy-col will-change">
                                <h3 className="display-6">{page.strategies[1].title}</h3>
                                <p className="m-0">{page.strategies[1].details}</p>
                            </div>
                            )}
                            {page.strategies && page.strategies.length > 2 && (
                            <div className="col-12 col-md-6 strategy-col will-change">
                                <h3 className="display-6">{page.strategies[2].title}</h3>
                                <p className="m-0">{page.strategies[2].details}</p>
                            </div>
                            )}
                            {page.strategies && page.strategies.length > 3 && (
                            <div className="col-12 col-md-6 strategy-col will-change">
                                <h3 className="display-6">{page.strategies[3].title}</h3>
                                <p className="m-0">{page.strategies[3].details}</p>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategiesSection;