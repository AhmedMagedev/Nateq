import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className=" w-full bg-brandCream">
      <Image
        className="h-full w-full object-cover object-center"
        src="/Nateqbanner.svg"
        alt="nature image"
        width={1920}
        height={700}
      />
    </div>
  );
}
