// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaPinterestP } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import {Link} from  "react-router-dom"

// export default function Sidebar() {
//     const [cat, setCats] = useState([]);

//     useEffect(() => {
//         const getCats = async () => {
//             const res = await axios.get("http://localhost:5000/api/categories");
//             setCats(res.data);
//         };
//         getCats();
//     }, []);
//     return (
//         <div className="sidebar">
//             <div className="sidebarItem">
//                 <span className="sidebarTitle ">ABOUT ME</span>
//                 <img
//                     src="https://t3.ftcdn.net/jpg/05/24/30/02/360_F_524300228_egMskw0zvvdwNUFPeJLlplclKzFamXBk.jpg"
//                     alt="image"
//                 />
//                 <p>
//                     Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
//                     amet ex esse.Sunt eu ut nostrud id quis proident.
//                 </p>
//             </div>
//             <div className="sidebarItem">
//                 <span className="sidebarTitle">CATEGORIES</span>
//                 <ul className="sidebarList">
//                     {cat.map((c,index) => (
//                         <Link to={`/?cat=${c.name}`} key={index}>
//                         <li className="sidebarListItem" >
//                             {c.name}5
//                         </li>
//                         </Link>
//                     ))}
//                 </ul>


//             </div>
//             <div className="sidebarItem">
//                 <span className="sidebarTitle">FOLLOW US</span>
//                 <div className="sidebarSocial">
//                     <FaFacebook className='sidebarIcon' />
//                     <FaTwitter className='sidebarIcon' />
//                     <FaPinterestP className='sidebarIcon' />
//                     <FaInstagram className='sidebarIcon' />

//                 </div>
//             </div>
//         </div>
//     );
// }

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://scontent.fdac149-1.fna.fbcdn.net/v/t39.30808-6/418590145_122102295584180527_1524650291746034149_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE67-55xxwFnRNoeZIgEYml1jvcEKICM2vWO9wQogIza9m_jHsM4IpQwm7kfunjpLFShxWbcbR6XFcXTFlootOk&_nc_ohc=GQ05zSkdcGcQ7kNvgHtjuqN&_nc_oc=AdjrdTVQk9dVWEUP3xkjvt6GBt7P3uu-UI09I5cGUzONIdlWj8NipX51cHXbf0LZVr8&_nc_ht=scontent.fdac149-1.fna&oh=00_AYDAxxgUAzem7KbdAfjh8Z30DJAfmLTypMBdWeK-M11UmQ&oe=6645330E"
          alt="image"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}