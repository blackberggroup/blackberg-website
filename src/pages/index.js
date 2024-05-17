import Head from 'next/head';
import Link from 'next/link';

function HomePage({}) {

  return (
    <>
        <Head>
          <title>Home - Blackberg Group</title>
          <meta name="description" content="Learn more about what we do and who we are." />
          <meta name="keywords" content="Home, company, my website" />
          <meta property="og:title" content="Home - My Website" />
          <meta property="og:description" content="Detailed information about our company and services." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://www.yourwebsite.com/about" />
          <meta property="og:image" content="http://www.yourwebsite.com/path_to_image.jpg" />
          <link rel="canonical" href="http://www.yourwebsite.com/about" />
        </Head>
        <div className="container-fluid px-0 home">
            <div className="container-fluid p-4 p-md-5 mb-4 bg-light">
                <div className="container">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 fst-italic">Innovative and creative solutions for any industry.</h1>
                        <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what your company does.</p>
                        <p className="lead mb-0">
                            <Link href="/contact" className="btn btn-primary" aria-label="Contact page">
                                Get Started
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center fade-up">
                <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                    <div className="col-12 col-md-6 bg-dark p-5 text-center text-white overflow-hidden mx-auto">
                        <div className="my-3 py-5">
                            <h2 className="display-5">Another headline</h2>
                            <p className="lead mb-0">A subheading that gives more info.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                    <div className="col-12 col-md-6 bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">A subheading that gives more info.</p>
                    </div>
                    <div className="bg-light shadow-sm mx-auto p-4"></div>
                    </div>
                    <div className="col-12 col-md-6 bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">A subheading that gives more info.</p>
                    </div>
                    <div className="bg-dark shadow-sm mx-auto p-4"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

// TODO - data request for SSR
// export async function getServerSideProps() {

// }

export default HomePage;