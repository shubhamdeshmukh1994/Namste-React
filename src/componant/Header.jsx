import React from "react";
import { LOGO_URL } from "../utils/Constant.js";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus.jsx"
const Header = () => {
  let buttonName = "LogIn";
  const [btnName, setBtnName] = React.useState("LogIn");

  const onlineStatus = userOnlineStatus();
  return (
    <div className="header">
      <div className="logo">
        <img
          src={LOGO_URL}
          alt="Logo"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <nav className="nav-items">
        <ul>
          <li >Online Status {onlineStatus ? "✅" : "🔴" }</li>
          <li ><Link to="/">Home</Link></li>
          <li ><Link to="/grossary">Grossary</Link></li>
          <li ><Link to="/about">About</Link></li>
          <li ><Link to="/contact">Contact</Link></li>
          <li ><Link to="/cart">Cart</Link></li>
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
