"use client";

import React from "react";

const navItems = [
  { title: "About", path: "./#about", id: 1 },
  { title: "Courses", path: "./#courses", id: 2 },
  { title: "Contact", path: "./contact", id: 3 },
];

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between py-3 bg-white  shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-brandRed"
            href="/"
          >
            Nateq
          </a>
        </div>
        <button
          className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          Hello
        </button>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {navItems.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    className="px-3 py-2 flex items-center text-md uppercase leading-snug hover:opacity-75"
                    href={item.path}
                  >
                    <span className="ml-2 text-md">{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
