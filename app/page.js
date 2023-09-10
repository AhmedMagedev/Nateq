import Navbar from "./nav2";
import ComingSoon from "./comingSoon";
import About from "./about";
import Courses from "./courses";
import { FooterWithLogo } from "./footer";

export default function Home() {
  return (
    <main className="w-full h-full min-h-screen">
      <link rel="icon" href="/favicon.svg" />
      <Navbar />
      <ComingSoon />
      <About />
      <Courses />
      <FooterWithLogo />
    </main>
  );
}
