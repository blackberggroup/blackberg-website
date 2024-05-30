import SEOHead from '@/app/components/SEOHead';
import { getPageBySlug } from '@/app/lib/hygraph';

function CaseStudyPage ({ page }) {

  return (
    <>
      <SEOHead page={page} />
      <div className="container-fluid page-case-study-details">
        <div className="container">
          <div className="row">
            {/* Title */}
            <div className="d-flex flex-column">
                  <h1 className="display-5 m-0">Case Study Detail Page</h1>
                  <div className="d-flex justify-space-between mt-4 mt-lg-5">
                      <div className="d-flex flex-column text-figtree">
                          <span className="fw-bold-800 mb-2">Client</span>
                          <span className="label-data text-noto">Sample Client</span>
                      </div>
                      <div className="d-flex flex-column ms-5 ms-lg-10 text-figtree">
                          <span className="fw-bold-800 mb-2">Category</span>
                          <span className="badge badge--case-study align-self-start">Communications</span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const slug = context.resolvedUrl.substring(1);
  const page = await getPageBySlug(slug);
  return { props: { page: page || null } };
}

export default CaseStudyPage;