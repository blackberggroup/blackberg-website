import Image from "next/image";
import Link from "next/link";
import { formatCategory } from "@/app/lib/utilities/formatCategory";

export default function RelatedCaseStudiesSection({ items = [] }) {
  if (!items.length) return null;

  const displayItems = items.slice(0, 2);

  return (
    <section id="related-case-studies" className="py-8 py-md-11">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-0 mb-5 mb-md-7">
            <h3 className="display-5 m-0">Related Case Studies</h3>
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
                  <span className="badge badge--case-study text-figtree align-self-start">
                    {formatCategory(cs.category)}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
