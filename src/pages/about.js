import { getPageBySlug } from '@/app/lib/hygraph';
import SEOHead from '@/app/components/SEOHead';

function AboutPage({ page }) {

  return (
    <>
        <SEOHead page={page} />
        <div className="container-fluid">
            <div className="container">
                <h1>About Page</h1>
            </div>
        </div>
    </>
  );
}

export async function getServerSideProps(context) {

    // Extract the slug from the resolved URL
    // Remove leading slash
    const slug = context.resolvedUrl.substring(1); 
    const page = await getPageBySlug(slug);
  
    return {
      props: { page }, // This will pass posts to the page component
    };
}

export default AboutPage;