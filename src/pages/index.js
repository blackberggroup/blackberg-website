import { getAllCaseStudies, getPageBySlug } from '@/app/lib/hygraph';
import Link from 'next/link';
import SEOHead from '@/app/components/SEOHead';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
import CaseStudyCard from '@/app/components/CaseStudyCard';



function HomePage({page, caseStudies}) {

    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    const mainRef = useRef(null); // Reference to the main container for the scroll trigger
    const ballRef = useRef(null); // Reference to the moon element that will animate
    const homeRef = useRef(null);
    const show1 = useRef(null);
    const caseStudyRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(ballRef.current, {
            ease: "sine.out",
            repeat: 1,
            motionPath: {
                path: mainRef.current,
                align: mainRef.current,
                autoRotate: true,
                alignOrigin: [0.5, 0.5],
                start: 0.05, 
                end: 1
            },
            duration: 100
        }, 0);

        ScrollTrigger.create({
            animation: tl,
            trigger: homeRef.current,
            start: "top center",
            end: "bottom bottom",
            scrub: 1, 
        });

        tl.to(show1.current, {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: .5,
            ease: "sine.out",
            scrollTrigger: {
                trigger: homeRef.current,
                start: "top top",
                end: "+=300",
                scrub: 1,
            }
        });

        tl.to(caseStudyRef.current, {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: .5,
            ease: "sine.out",
            scrollTrigger: {
                trigger: caseStudyRef.current,
                start: "-=300",
                end: "+=300",
                scrub: 1,
            }
        });

        // Cleanup function to kill animations and scroll triggers when component unmounts
        return () => {
            if (tl) tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

  return (
    <>
        <SEOHead page={page} />
        <div className="container-fluid px-0 home" ref={homeRef}>
            <div className="container-fluid p-4 p-md-5 mb-4 bg-light">
                <div className="container">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 fst-italic">Innovative and creative solutions for any industry.</h1>
                        <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what your company does.</p>
                        <p className="lead mb-0"><a href="#" className="btn btn-primary">Get Started</a></p>
                    </div>
                </div>
            </div>
            <div className="container container-svg px-0">
                <svg width="291" height="519" viewBox="0 0 291 519" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M291 438.845C189.928 438.845 107.993 358.473 107.993 259.33C107.993 160.187 189.928 79.8155 291 79.8155" fill="#FFE031"/>
                    <path d="M86.961 259.33C86.961 148.797 178.316 59.185 291 59.185" stroke="#1D262D" strokeMiterlimit="10"/>
                    <path d="M291 459.475C178.316 459.475 86.961 369.863 86.961 259.33" stroke="#1D262D" strokeWidth="4" strokeMiterlimit="10"/>
                    <path d="M86.961 259.33C86.961 148.797 178.316 59.185 291 59.185" stroke="#1D262D" strokeMiterlimit="10"/>
                    <path d="M291 459.475C178.316 459.475 86.961 369.863 86.961 259.33" stroke="#1D262D" strokeWidth="4" strokeMiterlimit="10"/>
                    <path d="M68.1213 259.33C68.1213 138.588 167.909 40.7047 291 40.7047" stroke="#1D262D" strokeMiterlimit="10"/>
                    <path d="M291 477.955C167.909 477.955 68.1213 380.072 68.1213 259.33" stroke="#1D262D" strokeWidth="4" strokeMiterlimit="10"/>
                    <path d="M68.1213 259.33C68.1213 138.588 167.909 40.7047 291 40.7047" stroke="#1D262D" strokeMiterlimit="10"/>
                    <path d="M291 477.955C167.909 477.955 68.1213 380.072 68.1213 259.33" stroke="#1D262D" strokeWidth="4" strokeMiterlimit="10"/>
                    <path d="M49.3605 259.33C49.3605 128.418 157.541 22.3019 291 22.3019" stroke="#1D262D" strokeMiterlimit="10"/>
                    <path d="M291 496.358C157.541 496.358 49.3605 390.242 49.3605 259.33" stroke="#1D262D" strokeWidth="4" strokeMiterlimit="10"/>
                    <path ref={mainRef} d="M291 2.33002C146.305 2.33002 29 117.396 29 259.33C29 401.264 146.305 516.33 291 516.33" stroke="#1D262D" strokeWidth="4" strokeMiterlimit="10"/>
                    <path ref={ballRef}  d="M227.865 517.086C232.26 517.086 235.823 513.591 235.823 509.279C235.823 504.968 232.26 501.472 227.865 501.472C223.469 501.472 219.906 504.968 219.906 509.279C219.906 513.591 223.469 517.086 227.865 517.086Z" fill="#0d6efd"/>
                    <path d="M1 177V325.5" stroke="white"/>
                </svg>
            </div>
            <div className="container d-flex justify-content-center fade-up" ref={show1}>
                <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                    <div className="col-12 col-md-6 bg-dark p-5 text-center text-white overflow-hidden mx-auto">
                        <div className="my-3 py-5">
                            <h2 className="display-5">Another headline</h2>
                            <p className="lead mb-0">And an even wittier subheading.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Featured Case Studies */}
            <div className="container-fluid">
                <div className="container">
                    <div className="container-title text-center">
                        <span className="label text-uppercase">Our Work</span>
                        <h2>Case Studies</h2>
                    </div>
                    <div className="row mt-4 d-flex flex-column align-items-center fade-up" ref={caseStudyRef}>
                        {caseStudies.map(caseStudy => (
                            <div className="col-12 col-md-8 mb-4 mb-md-5 mt-0 mt-md-5" key={caseStudy.id}>
                                <CaseStudyCard caseStudy={caseStudy} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

// TODO - data request for SSR
export async function getServerSideProps(context) {

    // Extract the slug from the resolved URL
    // Remove leading slash
    // const slug = context.resolvedUrl.substring(1); 
    // const page = await getPageBySlug(slug);
  
    // return {
    //   props: { page }, // This will pass posts to the page component
    // };


    const slug = context.resolvedUrl.substring(1);

    const [page, caseStudies] = await Promise.all([
        getPageBySlug(slug),
        getAllCaseStudies()
    ]);

    console.log('Case Studies: ', caseStudies);

    return {
        props: { 
            page: page || null,
            caseStudies: caseStudies || [] 
        },
    };
}

export default HomePage;