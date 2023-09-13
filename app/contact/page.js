"use client";

import { Button, Input } from "@material-tailwind/react";

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
      <div className="space-y-6">
        <h3 className="text-5xl pb-8">Say Hi!</h3>
        <div className="w-72">
          <Input label="Name" />
        </div>
        <div className="w-72">
          <Input label="Whatsapp" />
        </div>
        <Button className="bg-brandBrown">Submit</Button>
      </div>
    </div>
  );
}
