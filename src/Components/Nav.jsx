import React from "react";
import { NavLink } from "react-router-dom";

const nav = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "About",
    url: "/about",
  },
  {
    text: "Contact",
    url: "/contact",
  },
];

function Nav() {
  return (
    <nav>
      <ul>
        {nav.map((item) => {
          return (
            <li>
              <NavLink to={item.url}>{item.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
