import { useState } from "react";

import "./App.scss";
import logo from "./assets/images/logo.svg";

import hamburger from "./assets/images/icon-menu.svg";
import header from "./assets/images/image-web-3-desktop.jpg";
import gaming from "./assets/images/image-gaming-growth.jpg";
import retro from "./assets/images/image-retro-pcs.jpg";
import laptopkeys from "./assets/images/image-top-laptops.jpg";
import Navbar from "./Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar className="mobilenav" />
      <div className="nav">
        <div className="logo">
          <img src={logo} className="logo" alt="" />
        </div>
        <div className="navitems">
          <img src={hamburger} className="menu" alt="" />
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="item items--1">
          <img src={header} alt="header-image" className="header-image" />
        </div>
        <div className="item items--2">
          <h1>The Bright Future Of Web 3.0?</h1>
        </div>
        <div className="item items--3">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back <br /> into the hand of the people.But
            is it really <br /> fufilling its promise?
          </p>
          <button>READ MORE</button>
        </div>
        <div className="item items--4">
          <h2>New</h2>
          <div>
            <div className="sidesection">
              <h3>Hydrogen vs Electric cars</h3>
              <p>Will hydrogen fueled cars ever catch up with EVs?</p>
            </div>

            <div className="sidesection">
              <h3>The Downside Of AI Artistry</h3>
              <p>
                What are the possible adverse effects of AI image generation?
              </p>
            </div>

            <h3>IS VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firm is down 50% YOY.We take a look at what
              that means.
            </p>
          </div>
        </div>
        <div className="item items--5">
          <span>
            <img src={retro} className="retro" alt="" />
          </span>
          <span className="paragraph">
            <h2>01</h2>
            <h3>Reviving Retro PCs</h3>
            <p>what happens when old PCs are given modern upgrades?</p>
          </span>
        </div>
        <div className="item items--6">
          <div>
            <img src={laptopkeys} className="laptopkeys" alt="" />
          </div>
          <div>
            <h2>02</h2>
            <h3>Top 10 laptops of 2022</h3>
            <p>Our best picks for various needs and budgets</p>
          </div>
        </div>
        <div className="item items--7">
          <div>
            <img src={gaming} className="gaming" alt="" />
          </div>

          <div>
            <h2>03</h2>
            <h3>The Growth Of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
