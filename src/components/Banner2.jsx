import { Link } from "lucide-react";

const Banner2 = () => {
  return (
    <div className="mt-16 w-full flex flex-col-reverse lg:flex-row h-auto lg:h-96 px-4 md:px-10">
      {/* Text Section */}
      <div className="bg-[#2b46b5] text-white px-6 py-8 w-full lg:w-[45%] text-center lg:text-left">
        <p className="flex justify-center lg:justify-start items-center text-xl md:text-2xl">
          Business <span className="font-bold ml-1">Solutions</span>
        </p>
        <div className="mt-4 lg:mt-10 space-y-4">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Looking for Tech Solutions for your Business?
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Our customer support officials are here to help. Drop an email or
            call us to know more.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <button className="bg-white text-black hover:bg-black hover:text-white font-bold text-sm sm:text-base px-4 sm:px-6 py-3 flex items-center gap-2">
              <Link className="w-4 h-4" /> Go to Bluecom
            </button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <img
        src="/23.png"
        alt="Banner"
        className="w-full lg:w-[55%] h-48 sm:h-64 md:h-auto object-cover"
      />
    </div>
  );
};

export default Banner2;
