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

function CardDefault() {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image src="/mosque.jpg" fill alt="mosque" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
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
      <CardDefault />
      <CardDefault />
      <CardDefault />
    </div>
  );
}
