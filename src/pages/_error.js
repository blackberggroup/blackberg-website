import SEOHead from '@/app/components/SEOHead';
import Link from 'next/link';

function Custom404() {

  return (
    <>
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
  
    return {
      props: { 
          navStyle: "light", 
          footerCta: true
        },
    };
}

export default Custom404;