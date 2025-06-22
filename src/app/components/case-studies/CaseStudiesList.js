import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudiesList({ items = [] }) {
  if (!items.length) return <p className="py-5">No case studies found.</p>;
  
  return (
    <section className="py-6 py-md-10">
    {items.map(cs => {
        if (!cs.coverImage?.url) return null;

        return (
        <section key={cs.id} className="py-6">
            <div className="container">
                <div className="row align-items-center">          
                    <div className="col-12 col-md-7">
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
                    <div className="col-12 col-md-5">
                        <Link href={`/case-studies/${cs.slug}`} className="text-decoration-none">
                        <h2 className="h3 fw-semibold mt-3 mt-md-0">{cs.title}</h2>
                        </Link>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <span className="fw-bold-800 text-figtree mb-2">Client</span><br />
                                <span className="label-data text-noto">{cs.client}</span>
                            </div>
                            <div className="col-12 col-sm-6 text-figtree">
                                <span className="fw-bold-800 mb-2">Category</span><br />
                                <span className="badge badge--case-study">{cs.category}</span>
                            </div>                
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
