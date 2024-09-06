import { getPageBySlug } from '@/app/lib/hygraph';
import SEOHead from '@/app/components/seo/SEOHead';
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
    const { slug } = context.params;

    // console.log('Secondary page slug: ', slug);
    // const path = Array.isArray(slug) ? slug.join('/') : slug;

    // console.log('Secondary page slug: ', path);
    const secondItem = slug[1];
    console.log('Secondary page second item: ', secondItem);
    const page = await getPageBySlug(secondItem);

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