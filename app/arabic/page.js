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
          <h1 className="text-3xl text-bold">Arabic classes</h1>
          <p className="text-lg py-12">
            Learn Arabic with a fun and engaging online program. Our courses are
            designed for kids of all ages and use a variety of teaching methods,
            including games, and stories, to make learning Arabic enjoyable.
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

          <p className="text-2xl font-bold"></p>
        </div>
        <Image
          src="/kid3.jpg"
          height={100}
          width={500}
          alt="logo"
          className="mr-12 ml-24 rounded-lg border-4 border-brandCream shadow-lg"
        />
      </div>
      <div className="py-16">
        <Accordion open={open === 1}>
          <AccordionHeader className="text-2xl" onClick={() => handleOpen(1)}>
            What are the benefits of learning Arabic?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            Learning Arabic can offer a variety of benefits, both personal and
            professional. It can help you to better understand the Arab world
            and its culture, gain insight into Islam and other religions that
            use Arabic as their liturgical language, improve your foreign
            language skills, develop business opportunities in Middle Eastern
            countries, and enjoy the beauty of a unique and ancient language.
            Additionally, learning Arabic can be a valuable asset on your resume
            and can open up new career possibilities. In short, learning Arabic
            is a rewarding experience that can enrich your life in many ways.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader className="text-2xl" onClick={() => handleOpen(2)}>
            What is the best way to learn Arabic?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            The best way to learn Arabic depends on the individual and their
            learning style. Some people prefer to take classes while others
            prefer to use online resources or self-study materials. Regardless
            of your preferred approach, it is important to be consistent with
            practice in order for the language to stick.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader className="text-2xl" onClick={() => handleOpen(3)}>
            How long does it take to learn Arabic?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            The amount of time it takes a child to learn Arabic and speak it
            fluently varies depending on a number of factors, including: The
            child&apos;s age: Younger children tend to learn languages more
            quickly than older children. The child&apos;s native language:
            Children whose native language is closely related to Arabic (such as
            Hebrew or Urdu) may find it easier to learn Arabic than children
            whose native language is not closely related. The child&apos;s
            exposure to Arabic: Children who are exposed to Arabic on a regular
            basis, either at home or in school, are more likely to learn it
            quickly. The child&apos;s learning style: Some children learn best
            by taking classes, while others learn best by immersing themselves
            in the language. In general, it takes most children around 2-3 years
            to learn Arabic well enough to speak it fluently. However, some
            children may learn it more quickly, while others may take longer.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader className="text-2xl" onClick={() => handleOpen(4)}>
            Is Arabic a difficult language?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            Learning Arabic can be challenging, but it is achievable with
            dedication and practice. Some aspects of the language, such as its
            grammar and pronunciation, may be more difficult than others.
            However, by immersing yourself in the language and focusing on
            speaking and listening regularly, you can overcome these challenges
            and become fluent in Arabic.
          </AccordionBody>
        </Accordion>
      </div>
      <div className="py-12 justify-center object-center flex space-x-8">
        <PricingCard
          price={32}
          first=" Dedicated 1 on 1 class"
          second="Weekly 1 Hour Class"
        />
        <PricingCard
          price={64}
          first="Dedicated 1 on 1 class"
          second="2 Weekly 1 Hour Class"
        />
      </div>
    </Container>
  );
}
