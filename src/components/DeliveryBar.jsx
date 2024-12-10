import { Dumbbell } from "lucide-react";
import { useEffect, useState } from "react";

const DeliveryBar = () => {
  const [arraySize, setArraySize] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setArraySize(2);
      } else if (window.innerWidth < 768) {
        setArraySize(3);
      } else {
        setArraySize(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#2b46b5] text-white px-6 sm:px-8 lg:px-12 py-12 my-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-[40%] space-y-4 lg:pr-8">
          <p className="flex items-center text-xl sm:text-2xl">
            The <span className="font-bold ml-1">Iotian Advantage</span>
            <Dumbbell className="ml-2 w-6 h-6" />
          </p>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
            Why Choose Iotian?
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl">
            Our customer support officials are here to help.
            <br />
            Drop an email or call us to know more.
          </p>
          <a
            href="#"
            className="inline-block text-white underline text-lg hover:text-gray-200">
            Read More
          </a>
        </div>

        {/* Delivery Icons Section */}
        <div className="lg:w-[60%] w-full mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${
                    index >= arraySize ? "hidden" : ""
                  }`}>
                  <div className="relative w-full flex items-center justify-center">
                    <div className="w-16 sm:w-20">
                      <img
                        src="/11.png"
                        alt="Delivery icon"
                        className="w-full h-auto"
                      />
                    </div>
                    {index < arraySize - 1 && (
                      <div className="absolute right-0 h-20 w-px bg-white/30" />
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBar;
