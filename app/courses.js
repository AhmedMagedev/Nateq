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

function CardDefault({ title, image, desc }) {
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
        <Button className="bg-brandBrown">Read More</Button>
      </CardFooter>
    </Card>
  );
}

export default function Courses() {
  return (
    <div className="py-24 bg-brandCream flex space-x-12 justify-center">
      <CardDefault
        title={`Quran`}
        image={`/quran.jpg`}
        desc={`Learn the Quran with a professional Quran teacher with over 10 years of experience. Our courses are designed to be fun and engaging for kids of all ages. We use a variety of teaching methods, including games, and stories, to make learning the Quran enjoyable.`}
      />
      <CardDefault
        title={`Arabic language`}
        image={`/kid2.jpg`}
        desc={`Learn the Quran with a professional Quran teacher with over 10 years of experience. Our courses are designed to be fun and engaging for kids of all ages. We use a variety of teaching methods, including games, and stories, to make learning the Quran enjoyable.`}
      />
    </div>
  );
}
