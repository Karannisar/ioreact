import { Phone, Wifi } from "lucide-react";
import { useEffect, useState } from "react";
import InfiniteScrollBanner from "../SideName";
import SupportSection from "../SupportSection";

const Support2 = () => {
  const [arraySize, setArraySize] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setArraySize(1); // For mobile
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setArraySize(2); // For tablets
      } else {
        setArraySize(3); // For larger screens (laptops & desktops)
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const supporttext = Array(arraySize).fill({
    title: "Why Buy Iotian",
    subtitle:
      "Our customer support officials are here to help. Drop an email or call us to know more.",
    Last: "Learn More",
  });

  return (
    <>
      {/* Infinite scrolling banner */}
      <InfiniteScrollBanner />

      {/* Main content */}
      <div className="w-full flex flex-col">
        {/* Banner image */}
        <img
          src="/14.png"
          alt="Support Banner"
          className="w-full h-80 object-cover"
        />

        {/* Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-black text-white px-6 py-8">
          {supporttext.map((textsupp, index) => (
            <div key={index} className="flex flex-col p-4 space-y-2">
              <h1 className="font-bold text-2xl md:text-4xl">
                {textsupp.title}
              </h1>
              <p className="text-gray-500 text-lg">{textsupp.subtitle}</p>
              <a href="#" className="underline">
                {textsupp.Last}
              </a>
            </div>
          ))}
        </div>
        <SupportSection />
      </div>
    </>
  );
};

export default Support2;
