import Image from 'next/image';
import Link from 'next/link';

export default function RelatedCaseStudiesSection({ items = [] }) {
  if (!items.length) return null;

  return (
    <>
      <section id="related-case-studies" className="py-8 py-md-11">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-0 mb-5 mb-md-7">
              <h4 className="display-5 m-0">Related Case Studies</h4>
            </div>

            {items.map(cs => (
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
                  <span className="badge badge--case-study align-self-start">
                    {cs.category}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
