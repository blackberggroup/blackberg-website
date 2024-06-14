import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const CaseStudiesList = () => {

    const caseStudyListRef = useRef(null);
    const featuredImageRefs = useRef([]);
    const featuredPatternRefs = useRef([]);
    const featuredBoxRefs = useRef([]);

    useEffect(() => {

        const caseStudyList = caseStudyListRef.current;
        const caseStudyItems = caseStudyList.querySelectorAll('.case-study-item');

        const handleMouseMove = (e, item) => {
          const { clientX, clientY } = e;
          const { width, height } = caseStudyList.getBoundingClientRect();
          const xPos = (clientX / width - 0.5) * 40; 
          const yPos = (clientY / height - 0.5) * 40;
          const xPos2 = (clientX / width - 0.5) * 80; 
          const yPos2 = (clientY / height - 0.5) * 80;
          const xPos3 = (clientX / width - 0.5) * 20; 
          const yPos3 = (clientY / height - 0.5) * 20;
    
        const featuredImage = item.querySelector('.feature-image');
        const featuredPattern = item.querySelector('.feature-pattern');
        const featuredBox = item.querySelector('.feature-box');
    
            if (featuredImage) {
              gsap.to(featuredImage, {
                x: xPos,
                y: yPos,
                duration: 0.6,
              });
            }
    
            if (featuredPattern) {
              gsap.to(featuredPattern, {
                x: xPos2,
                y: yPos2,
                duration: 0.8,
              });
            }
    
            if (featuredBox) {
              gsap.to(featuredBox, {
                x: xPos3,
                y: yPos3,
                duration: 1,
              });
            }
        };

        featuredPatternRefs.current.forEach((featuredPattern) => {
            gsap.fromTo(
              featuredPattern,
              { scale: 0.5, rotate: -90},
              {
                scale: 1,
                rotate: 0,
                duration: 1,
                scrollTrigger: {
                  trigger: featuredPattern,
                  start: 'top 100%',
                  end: 'center center',
                  scrub: true
                }
              }
            );
          });

        caseStudyItems.forEach((item) => {
            item.addEventListener('mousemove', (e) => handleMouseMove(e, item));
        });

        // const textElement = document.querySelectorAll('.text-container');
        // const letters = document.querySelectorAll('.text-container span');

        // gsap.set(letters, {
        //     x: '100%',
        //     clipPath: 'inset(0 0 0 100%)',
        //   });
      
        //   letters.forEach((letter) => {
        //     gsap.to(letter, {
        //       x: '0%',
        //       clipPath: 'inset(0 0 0 0)',
        //       duration: 1,
        //       delay: .5,
        //       scrollTrigger: {
        //         trigger: letter,
        //         start: 'top 90%',
        //         end: 'top 50%',
        //         scrub: true,
        //       },
        //     });
        // });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            caseStudyList.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className="container-fluid py-8 py-md-10 position-relative z-1" aria-label="Case Studies Overview" id="case-studies-list" ref={caseStudyListRef}>
            <div className="container">
                {/* Case Study | VA Immersive National Marketing */}
                <section className="case-study-item row mt-4 mt-lg-6 pb-2 pb-lg-6 align-items-center" id="cs-va-immersive" aria-label="VA Immersive National Marketing Case Study Overview">
                    <div className="col-12 col-lg-6 position-relative h-100">
                        <div className="box-gradient position-absolute box-gradient--va-immersive feature-box" ref={(el) => (featuredBoxRefs.current[0] = el)}></div>
                        <figure className="feature-image px-7 pt-7 position-relative z-2 m-0">
                            <img src="/images/case-studies/case-study-va-immersive.webp" className="d-block mx-auto img-fluid img-immersive" alt="Person wearing VR headset" loading="lazy" ref={(el) => (featuredImageRefs.current[0] = el)}></img>
                        </figure>
                        <img src="/images/case-studies/dot-pattern-square.webp" alt="square dot pattern" className="position-absolute pattern pattern--va-immersive feature-pattern" ref={(el) => (featuredPatternRefs.current[0] = el)} />
                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center ps-lg-5 mt-5 mt-lg-0">
                        <div className="d-flex flex-column">
                            <h2 className="display-5 m-0">VA Immersive National Marketing</h2>
                            <div className="d-flex justify-space-between mt-4 mt-lg-5">
                                <div className="d-flex flex-column text-figtree">
                                    <span className="fw-bold-800 mb-2">Client</span>
                                    <span className="label-data text-noto">VA Immersive</span>
                                </div>
                                <div className="d-flex flex-column ms-5 ms-lg-10 text-figtree">
                                    <span className="fw-bold-800 mb-2">Category</span>
                                    <span className="badge badge--case-study">Communications</span>
                                </div>
                            </div>
                            <Link href="/case-studies/va-immersive-national-marketing" aria-label="Learn more about our Strategy services" className="btn btn-primary btn-icon-invert align-self-start mt-5">
                                View Case Study
                                <img src="/images/arrow-narrow-right.svg" width="20" height="20" className="ms-2" alt="" />    
                            </Link>
                        </div>
                    </div>
                </section>
                {/* Case Study | 2023 Suicide Prevention Annual Report */}
                <section className="case-study-item row flex-lg-row-reverse mt-10 mt-lg-10 align-items-center" id="cs-prevention" aria-label="2023 Suicide Prevention Annual Report Case Study Overview">
                    <div className="col-12 col-lg-6 position-relative h-100">
                        <div className="box-gradient position-absolute box-gradient--va-prevention feature-box" ref={(el) => (featuredBoxRefs.current[1] = el)}></div>
                        <figure className="feature-image px-7 pt-7 position-relative z-2 m-0">
                            <img src="/images/case-studies/case-study-va-prevention.webp" className="d-block mx-auto img-fluid img-prevention" alt="Person wearing VR headset" loading="lazy" ref={(el) => (featuredImageRefs.current[1] = el)}></img>
                        </figure>
                        <img src="/images/case-studies/dot-pattern-circle.webp" alt="square dot pattern" className="position-absolute pattern pattern--va-prevention device-mockup feature-pattern" ref={(el) => (featuredPatternRefs.current[1] = el)} />
                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center pe-lg-5 mt-5 mt-lg-0">
                        <div className="d-flex flex-column">
                            <h2 className="display-5 m-0">2023 Suicide Prevention Annual Report </h2>
                            <div className="d-flex justify-space-between mt-4 mt-lg-5">
                                <div className="d-flex flex-column text-figtree">
                                    <span className="fw-bold-800 mb-2">Client</span>
                                    <span className="label-data text-noto">VA Office of Mental Health<br/>and Suicide Prevention</span>
                                </div>
                                <div className="d-flex flex-column ms-5 ms-lg-10 text-figtree">
                                    <span className="fw-bold-800 mb-2">Category</span>
                                    <span className="badge badge--case-study">Web Design and Development</span>
                                </div>
                            </div>
                            <Link href="/case-studies/2023-suicide-prevention-annual-report" aria-label="Learn more about our Strategy services" className="btn btn-primary btn-icon-invert align-self-start mt-5">
                                View Case Study
                                <img src="/images/arrow-narrow-right.svg" width="20" height="20" className="ms-2" alt="" />    
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default CaseStudiesList;