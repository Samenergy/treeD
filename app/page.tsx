import Image from "next/image";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>

    </main>
  );
}
