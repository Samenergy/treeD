import Image from "next/image";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Work from "./Components/Work";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>

    </main>
  );
}
