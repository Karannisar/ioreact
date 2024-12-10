import { Phone, Wifi } from "lucide-react";

const Banner = () => {
  return (
    <div className="mt-12 sm:mt-14 lg:mt-16 w-full flex flex-col-reverse lg:flex-row h-auto">
      <div className="w-full lg:w-[60%]">
        <img
          src="/13.png"
          alt="Banner"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="bg-[#2b46b5] text-white px-8 py-12 w-full lg:w-[40%]">
        <p className="flex flex-row items-center text-lg sm:text-xl mb-8">
          Iotian <span className="font-bold ml-1">Support</span>
          <Wifi className="rotate-90 ml-2 w-4 h-4 sm:w-5 sm:h-5" />
        </p>
        <div className="mt-4 sm:mt-6">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            Still Need Help?
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mt-2 sm:mt-3">
            Our customer support officials are here to help. Drop an email or
            call us to know more.
          </p>
          <div className="flex flex-row mt-8 items-center">
            <button className="bg-white text-black hover:bg-black hover:text-white font-bold text-base px-6 py-3 flex flex-row gap-2 items-center">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Contact Us
            </button>
            <h6 className="text-lg mx-4">OR</h6>
            <button className="underline text-lg">Drop an Email</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
