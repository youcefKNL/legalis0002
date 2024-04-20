// icons

import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";

// nav data
export const navData = [
  { name: "acceuil", path: "/", icon: <HiHome /> },
  { name: "à propos", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: " projets", path: "/projet", icon: <HiViewColumns /> },
  // {
  //   name: "avis",
  //   path: "/avis",
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  return (
    <nav className="navBar">
      <ul>
        {navData.map((link, index) => (
          <li>
            <NavLink
              className={(navlink) => (navlink.isActive ? "nav-active" : null)}
              to={link.path}
              key={index}
            >
              {link.icon}
            </NavLink>
            <div className="iconTitle">{link.name}</div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
