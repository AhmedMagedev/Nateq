"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const navItems = ["About", "Courses", "Contact"];

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white  shadow-md">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Image
            src="/logo.svg"
            width={80}
            height={80}
            alt="logo"
            className="border-2 rounded-full cursor-pointer"
            href="/"
          />
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
                <li key={item.indexOf}>
                  <a
                    className="px-3 py-2 flex items-center text-md uppercase leading-snug hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="ml-2 text-md">{item}</span>
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
