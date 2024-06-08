import Image from 'next/image';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StrategicToolkitSection = () => {
  useEffect(() => {
    // Define the animation
    gsap.fromTo('.circle-dotted', 
      { opacity: 0 }, // Start from opacity 0
      { 
        opacity: 1, // End at opacity 1
        scrollTrigger: {
          trigger: '.circle-dotted',
          start: 'top bottom', // Start animation when the top of the element hits the bottom of the viewport
          end: 'center center', // End animation when the bottom of the element hits the top of the viewport
          scrub: true, // Smoothly scrubs the animation based on the scroll position
        }
      }
    );
  }, []);
  
    return (
            <section id="strategy-strategic-toolkit" className="py-8 py-md-11">
                <div className="container">
                    <div className="section-wrapper rounded-4 p-6 p-md-8">
                        <div className="text-center mb-5 mb-lg-8">
                            <span className="text-headline-label text-headline-label--secondary text-uppercase text-white">Blackberg Group</span>
                            <h2 className="text-headline display-5 text-white">Our Strategic Toolkit</h2>
                        </div>
                        <div className="row align-items-center position-relative z-2">
                            <div className="col-12 col-lg-4 pe-lg-0">
                                <div className="toolkit-card toolkit-card--left card py-6 mb-5 mb-lg-0 shadow text-center">
                                    <div className="card-body px-5 px-md-4">
                                        <h3 className="card-title h4 mb-4">Technology-Driven Analysis</h3>
                                        <ul className="list-unstyled m-0 lh-lg">
                                            <li>Social Media Monitoring</li>
                                            <li>Machine Learning</li>
                                            <li>Change Point Detection</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 px-lg-0">
                                <div className="toolkit-card toolkit-card--center card py-6 mb-5 mb-lg-0 shadow-lg text-center z-3">
                                    <div className="card-body px-5 px-md-4">
                                        <h3 className="card-title h4 mb-4">Strategic / Environmental Scanning</h3>
                                        <ul className="list-unstyled m-0 lh-lg">
                                            <li>Environmental Scans</li>
                                            <li>Empirical Research</li>
                                            <li>Wargaming</li>
                                            <li>Real Options Analysis</li>
                                            <li>Adaptive Systems Analysis</li>
                                            <li>PESTEL Analysis</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>             
                            <div className="col-12 col-lg-4 ps-lg-0">
                                <div className="toolkit-card toolkit-card--right card py-6 shadow text-center">
                                    <div className="card-body px-5 px-md-4">
                                        <h3 className="card-title h4 mb-4">Human-Centered Approaches</h3>
                                        <ul className="list-unstyled m-0 lh-lg">
                                            <li>Crowdsourcing</li>
                                            <li>Swarm intelligence</li>
                                            <li>Human-Centered Design</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>                                           
                        </div>
                        <div className="circle-dotted">
                            <img src="/images/circle-dotted.svg" className="img-fluid unselectable" />
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default StrategicToolkitSection;