import Image from 'next/image';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const CareersList = ({careers}) => {

    useEffect(() => {

        const memberCards = document.querySelectorAll(".member-card");
    
        gsap.fromTo(memberCards, 
            { y: 60, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                ease: 'Power1.easeOut',
                stagger: 0.25,
                duration: .4
            }
        );

    }, []);  

    const typeMapping = {
        fullTime: "Full-time",
        partTime: "Part-time",
        contract: "Contract",
        temporary: "Temporary"
    };

    return (
        <section id="careers-section" className="py-8 py-md-11">
            <div className="container">
              <div className="row">
                <div class="col-12 text-center">
                  <h2>{`We’re looking for the best`}</h2>
                  <p>{`We’re a 100% remote team spread all across the U.S.`}</p>
                </div>
              </div>
              {careers?.length > 0 &&
                <div className="row d-flex justify-content-center gx-6 member-row mt-4 mt-lg-6">
                    {careers.map((career, index) => (
                        <div className="career-col col-12 col-sm-10 col-lg-8 col-xl-7 mb-5 mb-md-8" key={index}>
                            <div class="card--career d-flex flex-column align-items-start h-100 p-4">
                                <div class="d-flex justify-content-between w-100 align-items-center">
                                  <span className="career-title mt-auto text-figtree">{career.title}</span>
                                  <Link href={career.slug} aria-label={`Learn more about our ${career.title} position`} className="btn btn-career-link align-self-start m-0 p-0 h6">
                                    View Job
                                    <img src="/images/arrow-up-right.svg" width="20" height="20" className="ms-2" alt="" />    
                                </Link>  
                                </div>
                                <div class="d-flex mt-3">                                  
                                  <span className="career-location text-figtree text-center d-flex me-3"> <img src="/images/location-icon.svg" width="20" height="20" className="me-2" alt="" /> {career.location}</span>
                                  <span className="career-type text-figtree text-center d-flex"><img src="/images/clock-icon.svg" width="20" height="20" className="me-2" alt="" />{typeMapping[career.type] || "Full-time"}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
              }   
              {careers?.length === 0 &&
                  <div className="row">
                        <div class="col-12 text-center">
                          <p>{`We're not hiring right now, but we're always interested in great talent. Feel free to send your resume!`}</p>
                        </div>
                  </div>
              }   
            </div>
        </section>
    );
};

export default CareersList;