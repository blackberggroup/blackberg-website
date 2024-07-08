import Image from 'next/image';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const TeamGridSection = ({employees}) => {

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

    return (
        <section id="team-members-section" className="py-8 py-md-11">
            <div className="container">
                <div className="row d-flex align-items-stretch gx-6 member-row">

                    {employees.map((employee, index) => (
                        <div className="member-col col-12 col-sm-6 col-lg-4 col-xl-3 mb-5 mb-md-8" key={index}>
                            <div class="member-card d-flex flex-column align-items-center h-100">
                                <div className="circle circle-1"></div>
                                <div className="circle circle-2"></div>
                                <div className="member-image h-100 w-100 mb-4 d-flex justify-content-center position-relative z-1">
                                    <Image src={employee.image.url}
                                    className="img-fluid w-100 h-auto position-relative" 
                                    alt={employee.image.altText}
                                    fill={true}
                                    loading="lazy" />
                                </div>
                                <span className="member-name mt-auto text-figtree">{employee.firstName} {employee.lastName}</span>
                                <span className="member-position text-figtree text-center">{employee.position}</span>
                                <div className="circle circle-3"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamGridSection;