"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const navItems = ["About", "Courses", "Contact"];

export function FooterWithLogo() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <Image src="/logo.svg" width={100} height={100} alt="logo" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
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
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Nateq
      </Typography>
    </footer>
  );
}
