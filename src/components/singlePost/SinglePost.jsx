import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";


export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { user } = useContext(Context);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  // console.log(path)
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('http://localhost:5000/api/posts/' + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc)
    }
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) { }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) { }
  };


  const PF = "http://localhost:5000/images/";

  return (
    <div className="singlePost flex flex-col">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            className="singlePostImg"
            src={PF + post.photo}
            alt="postImage"
          />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput w-full text-center outline-none border-b border-b-gray-100 py-4 mb-4"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        {updateMode ? (
          <textarea
            className="singlePostDescInput w-full outline-none"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}

        <div>
          {updateMode && (
            <button className="py-2 px-4 bg-blue-500 text-white rounded-md " onClick={handleUpdate}>
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

