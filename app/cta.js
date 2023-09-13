"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export default function Cta() {
  return (
    <div className="w-full h-full py-48 justify-center flex bg-white">
      <div className="space-y-6 text-center">
        <h2 className="text-5xl font-bold">Ready to get a FREE evalutaion?</h2>
        <p className="text-xl pb-6y">Book your free evalutaion session</p>
        <Link href="/contact">
          <Button className="bg-brandBrown">Book Session</Button>
        </Link>
      </div>
    </div>
  );
}
