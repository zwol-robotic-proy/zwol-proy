import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Carousel />
        <Banner />
      </main>
      <Footer />
    </>
  )
};