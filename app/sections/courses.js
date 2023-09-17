"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

function CardDefault({ title, image, desc, path }) {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image src={image} fill alt="mosque" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{desc}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href={path}>
          <Button className="bg-brandBrown">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default function Courses() {
  return (
    <div
      className="py-24 bg-brandCream flex space-x-12 justify-center"
      id="courses"
    >
      <CardDefault
        title={`Quran Lessons`}
        image={`/quran.jpg`}
        desc={`Learn the Quran with a professional Quran teacher with over 10 years of experience. Our courses are designed to be fun and engaging for kids of all ages. We use a variety of teaching methods, including games, and stories, to make learning the Quran enjoyable.`}
        path={`/quran`}
      />
      <CardDefault
        title={`Arabic Lessons`}
        image={`/kid2.jpg`}
        desc={`Learn Arabic with a fun and engaging online program. Our courses are designed for kids of all ages and use a variety of teaching methods, including games, and stories, to make learning Arabic enjoyable.`}
        path={`/arabic`}
      />
    </div>
  );
}
