import React, { useEffect } from 'react';
import Link from 'next/link';

const ResultsSection = () => {

    return (
        <section id="results" className="py-8 py-md-11" aria-label="Results">
            <div className="container">
                <div className="row">
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
            </div>
        </section>
    );
};

export default ResultsSection;