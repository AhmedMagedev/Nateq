import "tailwindcss/tailwind.css";
import Image from "next/image";
import logo from "../public/logo.svg";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brandCream p-10">
      <div className="w-max">
        <Image src={logo} height={200} width={200} className=" m-auto" />
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-brandred font-bold py-4">
          Coming soon ...
        </h1>
      </div>
    </div>
  );
}
