import Link from "next/link";
import Image from "next/image";
import { formatCategory } from "@/app/lib/utilities/formatCategory";

export default function CaseStudiesList({ items = [] }) {
  if (!items.length) return <p className="py-5">No case studies found.</p>;

  return (
    <section className="py-6 py-md-10">
      {items.map(cs => {
        if (!cs.coverImage?.url) return null;

        /* Comma-separated “Service Lines” string */
        const serviceLinesText = cs.serviceLines
          ?.map(slug => formatCategory(slug))
          .join(", ");

        return (
          <section key={cs.id} className="py-6">
            <div className="container">
              <div className="row align-items-center">
                {/* Image column */}
                <div className="col-12 col-lg-7">
                  <Link href={`/case-studies/${cs.slug}`} className="d-block">
                    <div className="overflow-hidden rounded-3">
                      <Image
                        src={cs.coverImage.url}
                        alt={cs.coverImage.altText || cs.title}
                        width={700}
                        height={280}
                        className="img-fluid transition-transform"
                      />
                    </div>
                  </Link>
                </div>

                {/* Text column */}
                <div className="col-12 col-lg-5 mt-3 mt-lg-0">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="text-dark text-decoration-none"
                  >
                    <h3 className="h3 fw-semibold">{cs.title}</h3>
                  </Link>

                  <div className="row mt-3">
                    <div className="col-12 col-sm-6">
                      <span className="fw-bold-800 text-figtree mb-2">
                        Client
                      </span>
                      <br />
                      <span className="label-data">{cs.client}</span>
                    </div>

                    {serviceLinesText && (
                      <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                        <span className="fw-bold-800 mb-2 text-figtree">
                          {cs.serviceLines.length === 1
                            ? "Service Line"
                            : "Service Lines"}
                        </span>
                        <br />
                        <span className="label-data">{serviceLinesText}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
}
