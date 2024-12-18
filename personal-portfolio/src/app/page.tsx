import Image from "next/image";
import Navbar from "./(components)/Navbar";
import Resume from "./(components)/Resume";
import Projects from "./(components)/Projects";
import Communities from "./(components)/Communities";
import Footer from "./(components)/Footer";
import Introduction from "./(components)/Introduction";

export default function Home() {
  return (
      <>
     <Navbar/>
     <Introduction/>
     <Resume/>
     <Projects/>
     <Communities/>
     <Footer/>
      </>
  );
}
