import { getPageBySlug } from '@/app/lib/hygraph/pages';
import SEOHead from '@/app/components/SEOHead';
import { RichText } from '@graphcms/rich-text-react-renderer';

function Page ({ page }) {

  return (
    <>
        <SEOHead page={page} />
        <div className="container-fluid">
            <div className="container">
              <div className="col-12 col-md-8 mx-auto">
                  <RichText content={page.content.raw} />
              </div>
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

    console.log('Page: ', page);

    if (!page) {
        return {
            notFound: true,
        };
    }
  
    return {
      props: { page }, // This will pass posts to the page component
    };
}

export default Page;