import Link from 'next/link';

const CaseStudyCard = ({ caseStudy }) => {
    return (
        <div className="card h-100">
            <img src={caseStudy.coverImage.url} class="card-img-top" alt={caseStudy.coverImage.altText}></img>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{caseStudy.title}</h5>
                <p className="card-text">{caseStudy.category}</p>
                <Link href={`/case-studies/${caseStudy.slug}`} className="btn btn-primary mt-auto align-self-start" aria-label="Read full article {post.title}">Read More</Link>
            </div>
        </div>
    );
};

export default CaseStudyCard;