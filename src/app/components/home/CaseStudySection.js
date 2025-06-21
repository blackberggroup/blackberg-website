"use client";
import { formatCategory } from "@/app/lib/utilities/formatCategory";
import Link from "next/link";
import Image from "next/image";

export default function CaseStudySection({ items = [] }) {
  if (!items.length) return null;

  return (
    <section
      id="home-case-study-section"
      className="pb-7 pb-md-10"
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
              idx === 0 ? "col-12 mb-5" : "col-12 col-md-6 d-flex mb-6";

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
                      loading="lazy"
                      sizes="(min-width: 768px) 100vw, 100vw"
                    />
                  </figure>

                  <h3 className="fw-semibold mb-3 text-white">{cs.title}</h3>
                  <span className="badge badge--case-study text-figtree mb-3 mt-3">
                    {formatCategory(cs.category)}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="row mb-3">
          <div className="col-12 text-center">
            <Link href="/case-studies" aria-label="View all Case Studies of Blackberg Gruop projects" className="btn btn-secondary align-self-center">
              View All Case Studies
              <img src="/images/arrow-narrow-right.svg" width="20" height="20" className="ms-2" alt="white arrow pointing right" />    
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
