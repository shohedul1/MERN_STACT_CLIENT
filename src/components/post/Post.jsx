import { Link } from 'react-router-dom';

export default function Post({ post }) {
  const PF ="http://localhost:5000/images/";
  return (
    <div className="post">
        {post.photo && <img className="postImg" src={PF + post.photo} alt="iamge" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c, index) => (
            <span className="postCat" key={index}>
              {c.name}
            </span>
          ))}
        </div>
        <Link to={`post/${post._id}`}>
          <span className="postTitle">
            {post.title}
          </span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.updatedAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  );
}