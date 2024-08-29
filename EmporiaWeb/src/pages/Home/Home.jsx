import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/Navbar/HeroSection";
import MainCards from "../../components/AdCard/MainCards";
import AdCard from "../../components/AdCard/AdCard";
import DualCard from "../../components/AdCard/DualCard";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-auto">
      <Navbar isVisible={showNavbar} />
      <HeroSection />
      <div className="max-w-[95%] mx-auto px-2 py-12">
        <div className="grid grid-cols-3 gap-6">
          <MainCards
            title="Explore Our New Microcontrollers"
            description="Check out the latest range of microcontrollers perfect for your next project."
            imageUrl="/src/assets/images/components-1.jpg"
          />
          <MainCards
            title="Sensors & Modules"
            description="Discover a variety of sensors and modules to enhance your projects."
            imageUrl="/src/assets/images/components-5.jpg"
          />
          <div className="flex flex-col gap-6 justify-between h-[738px]">
            <MainCards
              title="Projects & Tutorials"
              description="Get inspired with our latest DIY project ideas and step-by-step tutorials."
              imageUrl="/src/assets/images/components-2.jpg"
            />
            <MainCards
              title="Additional Resources"
              description="Explore more resources to help you with your engineering projects."
              imageUrl="/src/assets/images/components-4.jpg"
            />
          </div>
        </div>

        <AdCard
          title="Discover More"
          description="Dive deeper into our vast selection of products and tutorials to boost your engineering projects."
          imageUrl="/src/assets/images/components-2.jpg"
          buttonText="Browse All Products"
        />

        <DualCard
          card1={{
            title: "Special Offers",
            description: "Don't miss out on our special discounts and offers.",
            imageUrl: "/src/assets/images/components-9.jpg",
            buttonText: "Shop Now",
          }}
          card2={{
            title: "Limited Time Deals",
            description: "Grab these limited-time deals before they're gone!",
            imageUrl: "/src/assets/images/components-6.jpg",
            buttonText: "Check Deals",
          }}
        />

        <AdCard
          title="Discover More"
          description="Dive deeper into our vast selection of products and tutorials to boost your engineering projects."
          imageUrl="/src/assets/images/components-7.jpg"
          buttonText="Browse All Products"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
