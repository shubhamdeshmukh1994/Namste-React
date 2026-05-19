import React from "react";
import { LOGO_URL } from "../utils/Constant.js";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus.jsx";
const Header = () => {
  let buttonName = "LogIn";
  const [btnName, setBtnName] = React.useState("LogIn");

  const onlineStatus = userOnlineStatus();
  return (
    <div className="flex justify-between bg-yellow-50">
      <div className="logo">
        <img className="w-36" src={LOGO_URL} alt="Logo" />
      </div>
      <nav className="flex items-center h-[150]">
        <ul className="flex p-20 m-2 ">
          <li className="px-4">Online Status {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grossary">Grossary</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <button
              className="login_btn"
              onClick={() => {
                setBtnName(btnName === "LogIn" ? "LogOut" : "LogIn");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
