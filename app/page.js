import ComingSoon from "./comingSoon";
import About from "./about";
import Courses from "./courses";
import { Montserrat } from "next/font/google";
import Cta from "./cta";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={montserrat.className}>
      <link rel="icon" href="/favicon.svg" />
      <ComingSoon />
      <About />
      <Courses />
      <Cta />
    </main>
  );
}
