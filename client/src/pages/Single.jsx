import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
export const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://sf.tac-cdn.net/images/v2/products/large/T33-1-2.jpg?auto=webp&quality=70&width=490"
          alt=""
        />
        <div className="user">
          <img
            src="https://i.etsystatic.com/41788714/r/il/c68189/4734961338/il_794xN.4734961338_56j3.jpg"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem iupson dolar sit amet consectetur adip</h1>
        <p>
          {" "}
          Vivamus tincidunt nibh sit amet risus mattis placerat. Morbi euismod
          diam orci, vitae gravida nisi auctor vel. Phasellus nec risus eu dui
          iaculis rutrum quis in lectus. Duis eget congue sapien. Fusce vitae
          leo et metus sodales consectetur eleifend sed nibh. Proin non leo
          erat. Duis odio mauris, finibus non erat eget, tempor hendrerit arcu.
          Integer pellentesque eros et diam imperdiet, ut suscipit quam
          molestie. Curabitur suscipit, quam ut imperdiet elementum, arcu dolor
          ultrices mi, pellentesque tempor quam lectus sed velit. Donec est
          metus, aliquet sit amet egestas sit amet, sagittis in enim.
          <br />
          <br />
          Vivamus tincidunt nibh sit amet risus mattis placerat. Morbi euismod
          diam orci, vitae gravida nisi auctor vel. Phasellus nec risus eu dui
          iaculis rutrum quis in lectus. Duis eget congue sapien. Fusce vitae
          leo et metus sodales consectetur eleifend sed nibh.
          <br />
          <br />
          Vivamus tincidunt nibh sit amet risus mattis placerat. Morbi euismod
          diam orci, vitae gravida nisi auctor vel. Phasellus nec risus eu dui
          iaculis rutrum quis in lectus. Duis eget congue sapien. Fusce vitae
          leo et metus sodales consectetur eleifend sed nibh. Proin non leo
          erat. Duis odio mauris, finibus non erat eget, tempor hendrerit arcu.
          Integer pellentesque eros et diam imperdiet, ut suscipit quam
          molestie. Curabitur suscipit, quam ut imperdiet elementum, arcu dolor
          ultrices mi, pellentesque tempor quam lectus sed velit. Donec est
          metus, aliquet sit amet egestas sit amet, sagittis in enim.
        </p>
      </div>
      <Menu />
    </div>
  );
};
