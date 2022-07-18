import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ListLink = [
  {
    to: "/",
    id: 1,
    title: "Home",
  },
  {
    to: "/blog",
    id: 2,
    title: "Blog",
  },
  {
    to: "/profile",
    id: 3,
    title: "Profile",
  },
  {
    to: "/contact",
    id: 4,
    title: "Contact",
  },
];
const Nav = () => {
  return (
    <>
      <div className="p-5 bg-white shadow-md flex items-center justify-center gap-x-5">
        {ListLink.map((item) => {
          return (
            <NavLink
              className={({ isActive }) => (isActive ? "text-green-400" : "")}
              to={item.to}
              key={item.id}
            >
              {item.title}
            </NavLink>
          );
        })}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
