import Link from 'next/link';

const PostCard = ({ post }) => {
    return (
        <div className="card card-case-study h-100">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.excerpt}</p>
                <Link href={`/resources/${post.slug}`} className="btn btn-primary mt-auto align-self-start" aria-label="Read full article {post.title}">Read More</Link>
            </div>
        </div>
    );
};

export default PostCard;