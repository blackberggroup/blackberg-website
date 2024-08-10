import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const DetailsSection = ({page}) => {

    const titleWords = page.title.split(' ');

    useEffect(() => {

    gsap.fromTo("#case-study-details h1 .word",
        {
            y: '110%',
            opacity: 0,
            rotationZ: '10',
        },
        {
            ease: 'power1.out',
            y: 0,
            opacity: 1,
            duration: .5,
            rotationZ: '0',
            stagger: 0.05,
            delay: .6
        }
    );

    gsap.fromTo("#client-section",
        {
            opacity: 0,
            y: 10,
        },
        {
            ease: 'power1.out',
            opacity: 1,
            y: 0,
            duration: .5,
            delay: 1
        }
    );

    gsap.fromTo("#category-section",
        {
            opacity: 0,
            y: 10
        },
        {
            ease: 'power1.out',
            opacity: 1,
            y:0,
            duration: .5,
            delay: 1.2
        }
    );

    }, []);

    return (
        <section id="case-study-details" className="py-8 py-md-11 mt-8" aria-label="VA Immersive National Marketing case study details">
            <div className="container">
                <div className="row d-flex flex-column flex-md-row">
                    {page.introContent && (
                    <div className="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
                        <h1 className="display-5 m-0">
                        {titleWords.map((word, index) => (
                            <span key={index} className="word will-change">
                            {word}
                            </span>
                        ))}
                        </h1>
                    </div>
                    )}
                    <div className="col-12 col-md-3 col-lg-2 mt-4 mt-md-0 d-flex flex-md-column ms-auto client-category-container will-change">
                        {page.client && (
                        <div className="d-flex flex-column text-figtree" id="client-section">
                            <span className="fw-bold-800 mb-2">Client</span>
                            <span className="label-data text-noto">{page.client}</span>
                        </div>
                        )}
                        {page.category && (
                        <div className="d-flex flex-column ms-10 ms-md-0 mt-md-7 text-figtree" id="category-section">
                            <span className="fw-bold-800 mb-2">Category</span>
                            <span className="badge badge--case-study align-self-start">{page.category}</span>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsSection;