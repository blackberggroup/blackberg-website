import React, { useEffect } from 'react';
import Image from 'next/image';

const ValuesSection = () => {

    return (
        <section id="values-sesction" className="py-8 py-md-11">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-12 col-lg-8 text-center mx-auto">
                        <div className="text-white">
                            <span className="text-headline-label text-headline-label--secondary text-uppercase">Blackberg Group</span>
                            <h2 className="display-5 m-0 text-uppercase">Our Shared Values</h2>
                        </div>                            
                    </div>
                </div>
                <div className="row pt-6 pt-md-8 py-8 py-md-11">
                    <div className="col icon-container position-relative">
                        <div className="icon-circle d-flex align-items-center justify-content-center">
                            <Image src="/images/about/handshake-icon.webp"
                                className="img-fluid position-relative h-auto"
                                fill={true}
                                alt="Multiple US Air Force planes and helicopters flying in formation." />
                        </div>
                    </div>
                    <div className="col-12 col-md-5 text-white offset-xl-1 offset-xxl-2 ps-auto ps-md-5 mt-5 mt-md-0">
                        <h3>Professionalism</h3>
                        <p>{"Our team thrives on precision, integrity, and a relentless pursuit of quality. Professionalism is not merely what we do; it’s who we are—a team committed to setting the gold standard."}</p>
                    </div>
                </div>
                <div className="row py-8 py-md-11">
                    <div className="col icon-container position-relative">
                        <div className="icon-circle d-flex align-items-center justify-content-center position-relative top-0 start-0">
                            <Image src="/images/about/handshake-icon.webp"
                                className="img-fluid position-relative h-auto"
                                fill={true}
                                alt="Multiple US Air Force planes and helicopters flying in formation." />
                        </div>
                        <div className="icon-circle d-flex align-items-center justify-content-center position-absolute top-0 end-0 z-1">
                            <Image src="/images/about/handshake-icon.webp"
                                className="img-fluid position-relative h-auto"
                                fill={true}
                                alt="Multiple US Air Force planes and helicopters flying in formation." />
                        </div>
                    </div>
                    <div className="col-12 col-md-5 text-white offset-xl-1 offset-xxl-2 ps-auto ps-md-5 mt-5 mt-md-0">
                        <h3>Boldness</h3>
                        <p>{"Our team thrives on precision, integrity, and a relentless pursuit of quality. Professionalism is not merely what we do; it’s who we are—a team committed to setting the gold standard."}</p>
                    </div>
                </div>
                <div className="row py-8 py-md-11">
                    <div className="col icon-container position-relative">
                        <div className="icon-circle d-flex align-items-center justify-content-center position-relative top-0 start-0">
                            <Image src="/images/about/handshake-icon.webp"
                                className="img-fluid position-relative h-auto"
                                fill={true}
                                alt="Multiple US Air Force planes and helicopters flying in formation." />
                        </div>
                        <div className="icon-circle d-flex align-items-center justify-content-center position-absolute top-0 end-0 z-1">
                            <Image src="/images/about/handshake-icon.webp"
                                className="img-fluid position-relative h-auto"
                                fill={true}
                                alt="Multiple US Air Force planes and helicopters flying in formation." />
                        </div>
                        <div className="icon-circle icon-circle--bottom-left d-flex align-items-center justify-content-center position-relative top-0 start-0">
                            <Image src="/images/about/handshake-icon.webp"
                                className="img-fluid position-relative h-auto"
                                fill={true}
                                alt="Multiple US Air Force planes and helicopters flying in formation." />
                        </div>
                    </div>
                    <div className="col-12 col-md-5 text-white offset-xl-1 offset-xxl-2 ps-auto ps-md-5 mt-5 mt-md-0">
                        <h3>Entrepreneurialism</h3>
                        <p>{"We believe in empowering bold and thoughtful ideas. We dare to dream big, think beyond conventional limits, and redefine industry norms. Our consultants are fearless in pushing the boundaries of conventional consulting and envisioning new possibilities to drive better solutions."}</p>
                    </div>
                </div>
                <div className="row py-8 py-md-11">
                    <div className="col icon-container position-relative">
                        <div className="icon-circle d-flex align-items-center justify-content-center position-relative top-0 start-0">
                            <Image src="/images/about/handshake-icon.webp"
                                className="img-fluid position-relative h-auto"
                                fill={true}
                                alt="Multiple US Air Force planes and helicopters flying in formation." />
                        </div>
                        <div className="icon-circle d-flex align-items-center justify-content-center position-absolute top-0 end-0 z-1">
                            <Image src="/images/about/handshake-icon.webp"
                                className="img-fluid position-relative h-auto"
                                fill={true}
                                alt="Multiple US Air Force planes and helicopters flying in formation." />
                        </div>
                        <div className="icon-circle icon-circle--bottom-left d-flex align-items-center justify-content-center position-relative bottom-0 start-0">
                            <Image src="/images/about/handshake-icon.webp"
                                className="img-fluid position-relative h-auto"
                                fill={true}
                                alt="Multiple US Air Force planes and helicopters flying in formation." />
                        </div>
                        <div className="icon-circle d-flex align-items-center justify-content-center position-absolute bottom-0 end-0 z-1">
                            <Image src="/images/about/handshake-icon.webp"
                                className="img-fluid position-relative h-auto"
                                fill={true}
                                alt="Multiple US Air Force planes and helicopters flying in formation." />
                        </div>
                    </div>
                    <div className="col-12 col-md-5 text-white offset-xl-1 offset-xxl-2 ps-auto ps-md-5 mt-5 mt-md-0">
                        <h3>Grit</h3>
                        <p>{"Grit is the silent force that propels us through challenges. In the face of adversity, we don’t back down; we dig in. We thrive on perseverance and tenacity, turning obstacles into steppingstones for success."}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;