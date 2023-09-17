"use client";

import { Button, Input, Typography } from "@material-tailwind/react";

export function InputDefault() {
  return (
    <div className="w-72">
      <Input label="Username" />
    </div>
  );
}

export default function Contact() {
  return (
    <div className="flex w-full h-full justify-center py-48 space-x-16 text-center">
      <div className="space-y-10">
        <div className="space-y-6">
          <h3 className="text-5xl pb-8">Say Hi!</h3>
          <div className="w-72 mx-auto">
            <Input label="Name" className="bg-white" />
          </div>
          <div className="w-72 mx-auto">
            <Input label="Whatsapp" className="bg-white" />
          </div>
          <Button className="bg-brandBrown">Submit</Button>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100 flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 mr-4"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            +20 1068511562
          </Typography>
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100 flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 mr-4"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            info@nateqarabic.com
          </Typography>
        </div>
      </div>
    </div>
  );
}
