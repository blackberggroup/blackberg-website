import Link from 'next/link';

const CaseStudyCard = ({ caseStudy }) => {
    return (
        <div className="card card-case-study border-0">
            <Link href={`/case-studies/${caseStudy.slug}`} aria-label="Read full article {post.title}">
                <img src={caseStudy.coverImage.url} className="card-img-top" alt={caseStudy.coverImage.altText}></img>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{caseStudy.title}</h5>
                    <p className="card-text">{caseStudy.category}</p>
                </div>
            </Link>
        </div>
    );
};

export default CaseStudyCard;