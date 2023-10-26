import React from "react";
import "./index.css";
import { award, internship, stack } from "../../assets/png";

const list = [
  {
    title: "Dashboard",
    icon: stack,
  },
  {
    title: "Skill Test",
    icon: award,
  },
  {
    title: "Internships",
    icon: internship,
  },
];

function Navbar() {
  const pr = (idx) => {
    return idx === 1 ? { backgroundColor: "#f7f8fa", color: "#445ee2" } : {};
  };

  return (
    <nav className="navbar">
      {list.map((nav, index) => {
        return (
          <div className="navbar-item">
            <div className="navbar-item-container" style={pr(index)}>
              <img src={nav.icon} alt="" className="navbar-item-img" />
              <div className="navbar-item-title">{nav.title}</div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}

export default Navbar;
