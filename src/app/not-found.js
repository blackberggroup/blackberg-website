import Head from "next/head";
import Link from "next/link";

function ErrorPage({}) {
  return (
    <>
    <Head>
          <title>Error - My Website</title>
          <meta name="description" content="Learn more about what we do and who we are." />
          <meta name="keywords" content="about us, company, my website" />
          <meta property="og:title" content="About Us - My Website" />
          <meta property="og:description" content="Detailed information about our company and services." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://www.yourwebsite.com/about" />
          <meta property="og:image" content="http://www.yourwebsite.com/path_to_image.jpg" />
          <link rel="canonical" href="http://www.yourwebsite.com/about" />
      </Head>
      <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 text-center mx-auto py-5 my-5">
                <h1>{"Oops, looks like we couldn't find what you were looking for."}</h1>
                <h5 className="my-4">{"Let's go back to the home page and try again."}</h5>
                <Link href="/" className="btn btn-primary">
                    Back To Home
                </Link>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {

}

export default ErrorPage;