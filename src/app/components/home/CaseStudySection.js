"use client";
import Link from "next/link";
import Image from "next/image";

export default function CaseStudySection({ items = [] }) {
  if (!items.length) return null;

  return (
    <section
      id="home-case-study-section"
      className="container-fluid pb-7 pb-md-10"
      aria-label="Case Study Overview"
    >
      <div className="container position-relative">
        <div className="row mt-4">
          <div className="col-12 text-center pb-7 pb-lg-8">
            <span className="text-headline-label text-headline-label--secondary text-uppercase text-white">
              Our Work
            </span>
            <h2 className="text-headline display-3 text-white">Case Studies</h2>
          </div>

          {items.map((cs, idx) => {
            const colClass =
              idx === 0 ? "col-12 mb-5" : "col-12 col-md-6 d-flex mb-5";

            return (
              <div className={colClass} key={cs.id}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="text-decoration-none w-100"
                >
                  <figure className="mb-4 position-relative overflow-hidden rounded-4">
                    <Image
                      src={cs.coverImage.url}
                      alt={cs.coverImage.altText || cs.title}
                      width={800}
                      height={420}
                      className="img-fluid w-100"
                      sizes="(min-width: 768px) 100vw, 100vw"
                    />
                  </figure>

                  <h3 className="h5 fw-semibold mb-2">{cs.title}</h3>
                  <span className="badge badge--case-study mb-3">
                    {cs.category}
                  </span>
                  <p className="text-body-secondary small">{cs.excerpt}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
