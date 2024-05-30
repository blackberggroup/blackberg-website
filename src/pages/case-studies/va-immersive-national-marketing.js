import SEOHead from '@/app/components/SEOHead';
import { getPageBySlug } from '@/app/lib/hygraph';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function CaseStudyPage ({ page }) {

  return (
    <>
      <SEOHead page={page} />
      <section className="container-fluid case-study-details pt-8 pt-lg-0" aria-label="VA Immersive National Marketing case study details">
        <div className="container">

            {/* Title */}
            <div className="row row--large d-flex flex-column flex-md-row">
              <div className="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
                <h1 className="display-5 m-0">VA Immersive National Marketing</h1>
              </div>
              <div className="col-12 col-md-2 mt-4 mt-md-0 d-flex flex-md-column ms-auto">
                  <div className="d-flex flex-column text-figtree">
                      <span className="fw-bold-800 mb-2">Client</span>
                      <span className="label-data text-noto">VA Immersive</span>
                  </div>
                  <div className="d-flex flex-column ms-10 ms-md-0 mt-md-7 text-figtree">
                      <span className="fw-bold-800 mb-2">Category</span>
                      <span className="badge badge--case-study align-self-start">Communications</span>
                  </div>
              </div>
            </div>
            {/* Cover Image */}
            <div className="row">
              <div className="col-12 mb-7">
                    <img src="/images/case-studies/va-immersive/va-immersive-cover.webp" className="img-fluid" alt="Person wearing VR headset" loading="lazy"></img>
              </div>
            </div>
            {/* Content */}
            <div className="row mb-0">
              <div className="col-12 col-md-8 col-lg-6 mx-auto">
                <p className="m-0">{"VA Immersive has revolutionized health care experiences for Veterans, their caregivers, and VA staff. Immersive technology brings the senses of sight, sound, and touch to each patient's health care journey and revolutionizes the way VA clinicians provide care. Through pilot programs and collaborations, VA has leveraged Virtual Reality (VR) and Augmented Reality (AR) to solve complex challenges, seize new opportunities, and move innovation forward for better health care outcomes and a better care experience."}</p>
              </div>
            </div>
            {/* Divider */}
            <div className="row my-0">
              <div classname="col-12 hr">
                <hr className="hr--primar my-8" />
              </div>
            </div>
            {/* Content | The Challenge */}
            <div className="row mt-0">
              <div className="col-12 col-md-8 col-lg-6 mx-auto">
                  <h2 className="display-5 mb-3">The Challenge</h2>
                  <p className="m-0">{"His dolorem habemus mandamus et, eius ponderum at nec. Cum lorem molestiae ne, esse vulputate definitiones ut est. Fastidii iracundia at quo. Sit bonorum graecis convenire te, nec wisi assum novum eu. At sea dolorum constituto, ad solet pertinacia neglegentur vis."}</p>
              </div>
            </div>
             {/* Content | The Solution */}
            <div className="row row--large">
                <div className="col-12 col-md-8 col-lg-6 mx-auto">
                  <h2 className="display-5 mb-3">The Solution</h2>
                  <p className="m-0">{"His dolorem habemus mandamus et, eius ponderum at nec. Cum lorem molestiae ne, esse vulputate definitiones ut est. Fastidii iracundia at quo. Sit bonorum graecis convenire te, nec wisi assum novum eu. At sea dolorum constituto, ad solet pertinacia neglegentur vis. His dolorem habemus mandamus et, eius ponderum at nec. Cum lorem molestiae ne, esse vulputate definitiones ut est. Fastidii iracundia at quo. Sit bonorum graecis convenire te, nec wisi assum novum eu. At sea dolorum constituto, ad solet pertinacia neglegentur vis."}</p>
              </div>
            </div>
             {/* Gap */}
             <div className="row row--large"></div>
            {/* Gallery */}
            <div className="row row--large gx-3 gy-3 gx-lg-5 gy-lg-5">
              <div class="col-12 col-md-7 mt-0">
                <img src="/images/case-studies/va-immersive/va-immersive-cover.webp" className="img-fluid" alt="Person wearing VR headset" loading="lazy"></img>
              </div>
              <div className="col-12 col-md-5 mt-3 mt-md-0">
                <div className="col-12">
                  <img src="/images/case-studies/va-immersive/va-immersive-cover.webp" className="img-fluid" alt="Person wearing VR headset" loading="lazy"></img>
                </div>
                <div className="col-12 d-flex mt-3 mt-lg-5">
                  <div className="col-6 pe-2 pe-lg-3">
                    <img src="/images/case-studies/va-immersive/va-immersive-cover.webp" className="img-fluid" alt="Person wearing VR headset" loading="lazy"></img>
                  </div>
                  <div className="col-6 ps-2 ps-lg-3">
                    <img src="/images/case-studies/va-immersive/va-immersive-cover.webp" className="img-fluid" alt="Person wearing VR headset" loading="lazy"></img>
                  </div>
                </div>
              </div>
            </div>
          {/* Gap */}
          <div className="row row--large"></div>
          {/* Strategies */}
          <div className="row row--large">
              <div className="col-12 col-lg-5">
                <h2 className="display-5 mb-3">Key Strategies</h2>
                <p className="m-0">{"His dolorem habemus mandamus et, eius ponderum at nec. Cum lorem molestiae ne, esse vulputate definitiones ut est. Fastidii iracundia at quo. Sit bonorum graecis convenire te, nec wisi assum novum eu. At sea dolorum constituto, ad solet pertinacia neglegentur vis."}</p>
              </div>
              <div className="col-12 col-lg-6 ms-md-auto">
                <div className="row gx-4 gy-4 gx-md-5 gy-md-5 pt-4 pt-lg-0 my-0">
                  <div className="col-12 col-md-6 mt-4 mt-lg-0">
                    <h3 className="display-6">Strategy 1</h3>
                    <p className="m-0">{"His dolorem habemus mandamus et, eius ponderum at nec. Cum lorem molestiae ne, esse vulputate definitiones ut est."}</p>
                  </div>
                  <div className="col-12 col-md-6 mt-4 mt-lg-0">
                    <h3 className="display-6">Strategy 2</h3>
                    <p className="m-0">{"His dolorem habemus mandamus et, eius ponderum at nec. Cum lorem molestiae ne, esse vulputate definitiones ut est."}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <h3 className="display-6">Strategy 3</h3>
                    <p className="m-0">{"His dolorem habemus mandamus et, eius ponderum at nec. Cum lorem molestiae ne, esse vulputate definitiones ut est."}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <h3 className="display-6">Strategy 4</h3>
                    <p className="m-0">{"His dolorem habemus mandamus et, eius ponderum at nec. Cum lorem molestiae ne, esse vulputate definitiones ut est."}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Gap */}
            <div className="row row--large"></div>
            {/* Gallery */}
            <div className="row row--large gx-4 gx-md-5">
              <div class="col-12 col-md-6">
                <img src="/images/case-studies/va-immersive/va-immersive-cover.webp" className="img-fluid" alt="Person wearing VR headset" loading="lazy"></img>
              </div>
              <div class="col-12 col-md-6 mt-4 mt-md-auto">
                <img src="/images/case-studies/va-immersive/va-immersive-cover.webp" className="img-fluid" alt="Person wearing VR headset" loading="lazy"></img>
              </div>
            </div>
            {/* Gap */}
            <div className="row row--large"></div>
            {/* Content | The Result */}
            <div className="row row--large">
              <div className="col-12 col-md-8 col-lg-6 mx-auto">
                  <h2 className="display-5 mb-3">The Result</h2>
                  <p>{"His dolorem habemus mandamus et, eius ponderum at nec. Cum lorem molestiae ne, esse vulputate definitiones ut est. Fastidii iracundia at quo. Sit bonorum graecis convenire te, nec wisi assum novum eu. At sea dolorum constituto, ad solet pertinacia neglegentur vis. His dolorem habemus mandamus et, eius ponderum at nec. Cum lorem molestiae ne, esse vulputate definitiones ut est. Fastidii iracundia at quo. Sit bonorum graecis convenire te, nec wisi assum novum eu. At sea dolorum constituto, ad solet pertinacia neglegentur vis. "}</p>
                  <p className="m-0 mb-5">{"His dolorem habemus mandamus et, eius ponderum at nec. Cum lorem molestiae ne, esse vulputate definitiones ut est. Fastidii iracundia at quo. Sit bonorum graecis convenire te, nec wisi assum novum eu. At sea dolorum constituto, ad solet pertinacia neglegentur vis."}</p>
                  <h3>Share this case study:</h3>
                  <div className="social-share mt-4">
                    <Link href="" target="_blank" className="btn btn-outline" aria-label="Share VA Immersive National Marketing case study on LinkedIn">LinkedIn</Link>
                    <Link href="" target="_blank" className="btn btn-outline" aria-label="Share VA Immersive National Marketing case study on Twitter">Twitter</Link>
                    <Link href="" target="_blank" className="btn btn-outline" aria-label="Share VA Immersive National Marketing case study on Facebook">Facebook</Link>
                  </div>
              </div>
            </div>
             {/* Divider */}
             <div className="row row--large">
                <div classname="col-12 hr">
                  <hr className="hr--primar" />
                </div>
             </div>
              {/* Related Case Studies */}
              <div className="row row--large gy-7">
                  <div className="col-12 mt-0">
                    <h4 className="display-5 m-0">Related Case Studies</h4>
                  </div>
                  {/* Copy & Paste for additional Case Studies */}
                  <div className="col-12 col-md-6 d-flex flex-column">
                    <figure className="mb-4">
                        <img src="/images/case-studies/va-immersive/va-immersive-cover.webp" className="img-fluid" alt="Person wearing VR headset" loading="lazy"></img>
                    </figure>
                    <h5 className="mb-3">VA Immersive National Marketing</h5>
                    <span className="badge badge--case-study align-self-start">Communications</span>
                  </div>
                  {/* End of Copy & Paste */}
              </div>
        </div>
    </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const slug = context.resolvedUrl.substring(1);
  const page = await getPageBySlug(slug);
  return { props: { page: page || null } };
}

export default CaseStudyPage;