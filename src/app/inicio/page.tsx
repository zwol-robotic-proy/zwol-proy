'use client';
import Banner from "@/components/Banner";
import CarouselComponent from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex justify-center w-full">
          <CarouselComponent />
        </div>
        <Banner />
      </main>
      <Footer />
    </>
  )
};