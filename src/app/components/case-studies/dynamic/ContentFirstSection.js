import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ContentFirstSection = ({ page }) => {
    
    const introContent = page.introContent.split(' ');
    const challengeContent = page.challengeContent.split(' ');
    const solutionContent = page.solutionContent.split(' ');
    
    useEffect(() => {
         
            const introWords = document.querySelectorAll("#intro-content p .word");

            gsap.fromTo(
                introWords,
                {
                    opacity: 0.1
                },
                {
                    ease: "none",
                    opacity: 1,
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: '#intro-content',
                        start: "top 90%",
                        end: "bottom 50%",
                        scrub: true,
                        once: true, 
                        delay: 0.4,
                    }
                }
            );

            const challengeHeadline = document.querySelectorAll("#challenge-text h2 .word");

            gsap.fromTo(
                challengeHeadline,
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
                        trigger: "#challenge-text", 
                        start: "top 90%", 
                        once: true, 
                    }
                }
            );

            const challengeWords = document.querySelectorAll("#challenge-text p .word");

            gsap.fromTo(
                challengeWords,
                {
                    opacity: 0.1
                },
                {
                    ease: "none",
                    opacity: 1,
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: "#challenge-text",
                        start: "top 90%", 
                        end: "bottom 50%", 
                        scrub: true,
                        once: true, 
                        delay: 0.4,
                    }
                }
            );

            const solutionHeadline = document.querySelectorAll("#solution-text h2 .word");

            gsap.fromTo(
                solutionHeadline,
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
                    trigger: "#solution-text",
                    start: "top 90%", 
                    once: true, 
                    }
                }
            );

            const solutionWords = document.querySelectorAll("#solution-text p .word");

            gsap.fromTo(
                solutionWords,
                {
                    opacity: 0.1
                },
                {
                    ease: "none",
                    opacity: 1,
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: "#solution-text", 
                        start: "top 90%",
                        end: "bottom 50%",
                        scrub: true,
                        once: true,
                        delay: 0.4,
                    }
                }
            );
  }, [])


    return (
        <section id="content-first" className="pb-8 pb-md-11" aria-label="Case study challenge and solution" key={page.introContent.id}>
            <div className="container">
                {page.introContent && (
                <div className="row mb-0" id="intro-content">
                    <div className="col-12 col-md-8 col-lg-6 mx-auto">
                        <p className="m-0">
                            {introContent.map((word, index) => (
                                <span key={index} className="word will-change">{word}&nbsp;</span>
                            ))}
                        </p>
                    </div>
                </div>
                )}
                <div className="row my-0">
                    <div className="col-12 hr">
                        <hr className="hr--primary my-8" />
                    </div>
                </div>
                {page.challengeContent && (
                <div className="row mt-0" id="challenge-text">
                    <div className="col-12 col-md-8 col-lg-6 mx-auto d-flex flex-column">
                        <div className="text-reveal mb-3">
                            <h2 className="display-5"><span className="word will-change">The&nbsp;</span><span className="word will-change">Challenge</span></h2>
                        </div>
                        <p className="m-0">
                            {challengeContent.map((word, index) => (
                                <span key={index} className="word will-change">{word}&nbsp;</span>
                            ))}
                        </p>
                    </div>
                </div>
                )}
                {page.solutionContent && (
                <div className="row mt-8 mt-md-11" id="solution-text">
                    <div className="col-12 col-md-8 col-lg-6 mx-auto d-flex flex-column">
                        <div className="text-reveal mb-3">
                            <h2 className="display-5"><span className="word will-change">The&nbsp;</span><span className="word will-change">Solution</span></h2>
                        </div>
                        <p className="m-0">
                            {solutionContent.map((word, index) => (
                                <span key={index} className="word will-change">{word}&nbsp;</span>
                            ))}
                        </p>
                    </div>
                </div>
                )}
            </div>
        </section>
    );
};

export default ContentFirstSection;
