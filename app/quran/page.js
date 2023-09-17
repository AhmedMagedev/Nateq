"use client";

import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import PricingCard from "../sections/priceCard";

export default function Quran() {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Container className=" h-full py-12">
      <div className="flex">
        <div>
          <h1 className="text-3xl text-bold">Quran Classes</h1>
          <p className="text-lg py-12">
            Learn the Quran with a professional Quran teacher with over 10 years
            of experience. Our courses are designed to be fun and engaging for
            kids of all ages. We use a variety of teaching methods, including
            games, and stories, to make learning the Quran enjoyable.
            <br />
            Our courses are taught by qualified Arabic teachers who are
            passionate about teaching children. We believe that every child has
            the potential to learn Arabic, and we are committed to providing
            them with the best education.
            <br />
            <span className="font-bold">
              Sign up for our free trial today and see how much your child
              enjoys learning Arabic with us!
            </span>
          </p>
        </div>
        <Image
          src="/kidbw.jpg"
          height={200}
          width={500}
          alt="logo"
          className="mr-12 ml-24 rounded-lg border-4 border-brandCream shadow-lg"
        />
      </div>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <div className="py-12 justify-center object-center flex">
        <PricingCard />
      </div>
    </Container>
  );
}
