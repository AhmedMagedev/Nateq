import Image from "next/image";
import logo from "../public/logo.svg";

export default function ComingSoon() {
  return (
    <div className=" w-full bg-brandCream">
      <Image
        className="h-full w-full object-cover object-center"
        src="/Nateqhero2.svg"
        alt="nature image"
        width={1920}
        height={700}
      />
    </div>
  );
}
