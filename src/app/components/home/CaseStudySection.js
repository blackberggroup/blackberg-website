"use client";
import Link from "next/link";
import Image from "next/image";
import { formatCategory } from "@/app/lib/utilities/formatCategory";

export default function CaseStudySection({ items = [] }) {
  if (!items.length) return null;

  return (
    <section
      id="home-case-study-section"
      className="pb-7 pb-md-10"
      aria-label="Case Study Overview"
    >
      <div className="container position-relative">
        {/* ── Heading ─────────────────────────────────────── */}
        <div className="row mt-4">
          <div className="col-12 text-center pb-7 pb-lg-8">
            <span className="text-headline-label text-headline-label--secondary text-uppercase text-white">
              Our Work
            </span>
            <h2 className="text-headline display-3 text-white">Case Studies</h2>
          </div>

          {/* ── Cards ─────────────────────────────────────── */}
          {items.map((cs, idx) => {
            if (!cs.coverImage?.url) return null;

            const colClass =
              idx === 0
                ? "col-12 mb-6 mb-md-8"
                : "col-12 col-md-6 d-flex mb-6";

            /* Comma-separated list of service lines */
            const serviceLinesText = cs.serviceLines
              ?.map(slug => formatCategory(slug))
              .join(", ");

            return (
              <div className={colClass} key={cs.id}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="text-decoration-none w-100"
                >
                  <figure className="mb-5 position-relative overflow-hidden rounded-4">
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

                  <h3 className="fw-semibold mb-1 text-white">{cs.title}</h3>

                  {serviceLinesText && (
                    <p className="text-white mb-0">
                      {serviceLinesText}
                    </p>
                  )}
                </Link>
              </div>
            );
          })}
        </div>

        {/* ── CTA ─────────────────────────────────────────── */}
        <div className="row mb-3">
          <div className="col-12 text-center">
            <Link
              href="/case-studies"
              className="btn btn-secondary align-self-center"
              aria-label="View all Case Studies of Blackberg Group projects"
            >
              View All Case Studies
              <img
                src="/images/arrow-narrow-right.svg"
                width="20"
                height="20"
                className="ms-2"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
