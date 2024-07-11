import SEOHead from '@/app/components/SEOHead';
import { getInsightBySlug } from '@/app/lib/hygraph';

function InsightDetailPage ({ page }) {

  return (
    <>
        <SEOHead page={page} />
        <section className="py-8 py-md-11">
        <div className="container">
            <div className="row">
                <div className="col-8">
                    {page.title}
                </div>
            </div>
        </div>
        </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const slug = context.resolvedUrl.substring(1).replace("insights/",  "");
  const page = await getInsightBySlug(slug);

    if (!page) {
      return {
          notFound: true,
      };
  }

  return {
    props: { 
        page: page,
        navStyle: "light", 
        footerCta: true
      },
  };

}

export default InsightDetailPage;