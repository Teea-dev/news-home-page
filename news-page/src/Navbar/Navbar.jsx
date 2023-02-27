import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../assets/images/logo.svg";

function Navbar() {
  const [visibility, setVisibility] = useState(false);
  useEffect(() => {
    setVisibility(false);
  }, []);

  return (
    <>
      <nav className="Navbar">
        <div className="NavbarContent">
          <div className="NavbarContentHeader">
            <img src={logo} className="logo" alt="" />

            <div className="hamburger">
              <input
                type="checkbox"
                className="hamburger_check"
                checked={visibility}
                onChange={() => setVisibility((visibile) => !visibile)}
                id=" checkbox"
              />
              <label
                htmlFor="checkbox"
                onClick={() => setVisibility((visibile) => !visibile)}
              >
                <span className="hamburger_bars"></span>
                <span className="hamburger_bars"></span>
                <span className="hamburger_bars"></span>
              </label>
            </div>
          </div>
        </div>
        <ul className={visibility ? "visibleNav" : "inVisibleNav"}>
          <li className="activeNav">
            <span>Home</span>
          </li>
          <li className="activeNav">
            <span>New</span>
          </li>
          <li className="activeNav">
            <span>Popular</span>
          </li>
          <li className="activeNav">
            <span>Trending</span>
          </li>
          <li className="activeNav">
            <span>Categories</span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
