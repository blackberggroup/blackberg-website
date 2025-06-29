import Link from "next/link";
import Image from "next/image";
import { formatCategory } from "@/app/lib/utilities/formatCategory";

export default function RelatedCaseStudiesSection({ items = [] }) {
  /* ── CASE 1: we DO have related studies ─────────────── */
  if (items.length) {
    return (
      <section id="related-case-studies" className="py-8 py-md-11">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-0 mb-5 mb-md-7">
              <h3 className="display-5 m-0">Related Case Studies</h3>
            </div>

            {items.map(cs => (
              <div className="col-12 col-md-6 d-flex flex-column" key={cs.slug}>
                <Link
                  href={`/case-studies/${cs.slug}`}
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

                  <h4 className="mb-2">{cs.title}</h4>
                  <span className="small text-figtree">
                    {cs.serviceLines?.map(formatCategory).join(", ")}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ── CASE 2: NO related studies – show CTA ───────────── */
  return (
    <section id="no-related-case-studies" className="py-8 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">Looking for more examples of our work?</h2>
        <p className="mb-3">
          Explore additional case studies to see how we help organizations like yours succeed.
        </p>
        <Link href="/case-studies" className="btn btn-primary">
          View All Case Studies
          <img
            src="/images/arrow-narrow-right-light.svg"
            width="20"
            height="20"
            className="ms-2"
            alt=""
          />
        </Link>
      </div>
    </section>
  );
}
