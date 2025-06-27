import Image from "next/image";
import Link from "next/link";


export default function RelatedCaseStudiesSection({ items = [] }) {
  if (!items.length) return null;

  const displayItems = items.slice(0, 2);

  return (
    <section id="related-case-studies" className="py-8 py-md-11" aria-label="Related Case Studies">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-0 mb-5 mb-md-7 d-flex flex-column flex-md-row justify-content-between align-items-center">
              <h3 className="display-5 m-0">Related Case Studies</h3>
              <Link href="/case-studies" aria-label="View all Case Studies from Blackberg" className="btn btn-primary mt-4 mt-md-0">
                  View All Case Studies
                  <img src="/images/arrow-narrow-right-light.svg" width="20" height="20" className="ms-2" alt="white arrow pointing right" />    
              </Link>
          </div>          

          {displayItems.map(cs => {
            if (!cs.coverImage?.url) return null;

            return (
              <div className="col-12 col-md-6 d-flex flex-column" key={cs.slug}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  aria-label={`Read more about our ${cs.title} case study`}
                  className="text-decoration-none"
                >
                  <div className="overflow-hidden rounded-3 mb-3">
                    <Image
                      src={cs.coverImage.url}
                      alt={cs.coverImage.altText || cs.title}
                      width={700}
                      height={280}
                      className="img-fluid transition-transform"
                    />
                  </div>

                  <h4 className="mb-3">{cs.title}</h4>

                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
