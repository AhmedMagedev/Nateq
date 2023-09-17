"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const navItems = [
  { title: "About", path: "./#about", id: 1 },
  { title: "Courses", path: "./#courses", id: 2 },
  { title: "Contact", path: "./contact", id: 3 },
];

export function FooterWithLogo() {
  return (
    <footer className="w-ful p-8 bg-white border-t-2 shadow-md">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 mx-auto container text-center md:justify-between bg-white">
        <Image src="/logo.svg" width={100} height={100} alt="logo" />
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
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Nateq
      </Typography>
    </footer>
  );
}
