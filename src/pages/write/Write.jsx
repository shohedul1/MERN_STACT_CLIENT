import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) { }
  };

  return (
    <div className="write">

      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="image" />
      )}

      <form className="flex flex-col relative" onSubmit={handleSubmit}>
        <div className="flex gap-4 py-5">
          <label htmlFor="fileInput" className="w-[25px] h-[25px] rounded-full border bg-red-100 flex items-center justify-center">
            <i className=" fas fa-plus"></i>
          </label>
          <input
           id="fileInput" 
           type="file" 
           style={{ display: "none" }} 
           onChange={e=>setFile(e.target.files[0])}
           />
          <input
            className="outline-none"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full h-24">
          <textarea
            className="w-full h-full outline-none"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={e => setDesc(e.target.value)}
          />
        </div>
        <div className="">
          <button className="py-3 px-5 bg-green-500 rounded-md text-white" type="submit">
            Publish
          </button>
        </div>
      </form>



    </div>
  );
}