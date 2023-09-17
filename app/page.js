import ComingSoon from "./sections/banner";
import About from "./sections/about";
import Courses from "./sections/courses";
import { Montserrat } from "next/font/google";
import Cta from "./sections/cta";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={montserrat.className}>
      <ComingSoon />
      <About />
      <Courses />
      <Cta />
    </main>
  );
}
