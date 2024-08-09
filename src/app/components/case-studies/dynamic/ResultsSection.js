import React, { useEffect } from 'react';
import Link from 'next/link';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ResultsSection = ({ page }) => {

    const resultsContent = page.resultContent.split(' ');

    
    useEffect(() => {
    
        const resultsHeadline = document.querySelectorAll("#results-content h2 .word");

        gsap.fromTo(
            resultsHeadline,
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
                    trigger: "#results-content", // Ensure the correct trigger element is used
                    start: "top 70%", // Adjust start position to trigger later
                  //  markers: true, // Markers for debugging
                    once: true, // Ensure the animation runs only once
                }
            }
        );

        const resultsWords = document.querySelectorAll("#results-content p .word");

        gsap.fromTo(
            resultsWords,
            {
                opacity: 0.1
            },
            {
                ease: "none",
                opacity: 1,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: "#results-content", // Ensure the correct trigger element is used
                    start: "top 70%", // Adjust start position to trigger later
                    end: "bottom 50%", // Adjust end position
                    scrub: true,
                   // markers: true, // Markers for debugging
                    once: true, // Ensure the animation runs only once
                    delay: 0.4,
                }
            }
        );


        // Clean up function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, []);

    return (
        <section id="results" className="py-8 py-md-11" aria-label="Results">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6 mx-auto">
                        <div className="d-flex flex-column" id="results-content">
                            <div className="text-reveal mb-3">
                                <h2 className="display-5"><span className="word will-change">The</span><span className="word will-change">Result</span></h2>
                            </div>
                            <p className="m-0">
                                {resultsContent.map((word, index) => (
                                    <span key={index} className="word will-change">
                                    {word}
                                    </span>
                                ))}
                            </p>
                        </div>
                        <h3 className="mt-5">Share this case study:</h3>
                        <div className="social-share mt-4">
                            <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${page.slug}`} target="_blank" className="btn btn-outline" aria-label={`Share ${page.title} case study on LinkedIn`}>LinkedIn</Link>
                            <Link href={`https://www.twitter.com/intent/tweet?text=${page.title}&via=blackberggroup&url=https://blackberggroup.com/case-studies/${page.slug}`} target="_blank" className="btn btn-outline" aria-label={`Share ${page.title} case study on Twitter`}>Twitter</Link>
                            <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://blackberggroup.com/case-studies/${page.slug}`} target="_blank" className="btn btn-outline" aria-label={`Share ${page.title} case study on Facebook`}>Facebook</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultsSection;