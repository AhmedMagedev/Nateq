"use client";

import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export default function About() {
  return (
    <div className="py-20 px-40 text-lg leading-relaxed bg-white " id="about">
      <h1 className="text-4xl text-bold">About Nateq</h1>
      <div className="flex">
        <div>
          <p className="text-2xl py-12">
            We are a professional Arabic language teaching institute that
            provides high-quality Arabic language courses to children who do not
            speak Arabic as their first language. Our teachers are native Arabic
            speakers with years of experience teaching Arabic to children. We
            use a variety of engaging and interactive methods to make learning
            Arabic fun and effective. Our goal is to help children develop a
            strong foundation in Arabic so that they can communicate effectively
            with Arabic speakers and learn about Arabic culture.
          </p>
          <div className="flex w-max gap-4">
            <Link href="#courses">
              <Button ripple={true} className="bg-brandBrown">
                Explore Courses
              </Button>
            </Link>
            <Link href="./contact">
              <Button ripple={true} className="bg-brandBrown">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src="/mosque.jpg"
          width={600}
          height={367}
          alt="logo"
          className="mr-12 ml-24 rounded-lg border-4 border-brandCream shadow-lg"
        />
      </div>
    </div>
  );
}
