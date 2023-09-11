import Navbar from "./nav";
import ComingSoon from "./comingSoon";
import About from "./about";
import Courses from "./courses";
import { FooterWithLogo } from "./footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={montserrat.className}>
      <link rel="icon" href="/favicon.svg" />
      <ComingSoon />
      <About />
      <Courses />
    </main>
  );
}
