import React from "react";
import { formatCategory } from "@/app/lib/utilities/formatCategory";

const DetailsSection = ({ page }) => {
  const { title, client, serviceLines = [] } = page;

  /* Comma-separated “Service Lines” string */
  const serviceLinesText = serviceLines
    .map(slug => formatCategory(slug))
    .join(", ");

  return (
    <section
      id="case-study-details"
      className="py-8 py-md-11 mt-8"
      aria-label={`${title} case-study details`}
    >
      <div className="container">
        <div className="row d-flex flex-column flex-md-row">
          {title && (
            <div className="col-12">
              <h1 className="display-5 m-0">{title}</h1>
            </div>
          )}

          <div className="d-flex flex-column flex-md-row mt-4">
            {client && (
              <div className="d-flex flex-column text-figtree me-5">
                <span className="fw-bold-800">Client</span>
                <span className="label-data text-noto">{client}</span>
              </div>
            )}

            {serviceLines.length > 0 && (
              <div className="d-flex flex-column mt-3 mt-md-0 text-figtree">
                <span className="fw-bold-800">
                  {serviceLines.length === 1 ? "Service Line" : "Service Lines"}
                </span>
                <span className="label-data text-noto">{serviceLinesText}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
