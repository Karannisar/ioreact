import { Input } from "antd";
import { Facebook, Instagram, Phone, Wifi } from "lucide-react";

const foot = [
  {
    title: "Devices by Type",
    items: [
      "Laptops",
      "Desktops",
      "Workstations",
      "Tablets",
      "Servers",
      "Monitors",
      "Refurbished",
    ],
  },
  {
    title: "Devices by Price",
    items: [
      "Devices under 25,000",
      "Devices under 50,000",
      "Devices under 70,000",
      "Devices under 100,000",
    ],
  },
  {
    title: "Latest Series of Laptops",
    items: [
      "Lenovo Thinkpad Series",
      "Lenovo Thinkbook Series",
      "Lenovo V series",
    ],
  },
  {
    title: "Devices by Use",
    items: [
      "Home Laptops",
      "Business Laptops",
      "Education Laptops",
      "For Designers",
      "For Video Editors",
      "For Illustrations",
    ],
  },
];

const Footer = () => {
  return (
    <>
      {/* First Section */}
      <div className="bg-gray-700 text-white px-4 sm:px-6 md:px-8 py-4 w-full mt-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 flex-col">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
            We are here to help.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-2 max-w-xl">
            You can drop an email, at the details given here. Our officials are
            available Mon - Sun, 7 AM - 5 PM.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-blue-800/70 text-sm sm:text-lg md:text-xl px-4 sm:px-5 py-2 sm:py-3 gap-2 mb-4 sm:mb-0 rounded-md whitespace-nowrap">
            +91 123-456-7890
          </button>
          <h6 className="text-sm sm:text-base">OR</h6>
          <a
            href="mailto:support@iotian.com"
            className="underline text-sm sm:text-lg md:text-xl whitespace-nowrap">
            support@iotian.com
          </a>
        </div>
      </div>

      <div className="bg-blue-800 w-full h-1" />

      {/* Second Section - Footer Links */}
      <div className="text-white bg-black px-4 sm:px-6 md:px-7 py-5 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 text-left gap-4 sm:gap-6">
          {foot.map((f) => (
            <div key={f.title} className="flex flex-col gap-2">
              <h6 className="text-sm sm:text-lg md:text-xl">{f.title}</h6>
              <ul className="flex flex-col gap-1 mt-2">
                {f.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs sm:text-sm md:text-lg text-gray-400 hover:text-white transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <h6 className="text-sm sm:text-lg md:text-xl">
              Stay Connected with Us
            </h6>
            <ul className="flex flex-col gap-1 mt-2">
              <li className="text-gray-400 text-xs sm:text-sm md:text-lg">
                @iotianlaptops
              </li>
              <div className="flex items-center gap-4 mt-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-white hover:text-blue-500 transition-colors">
                  <Instagram className="size-4 sm:size-5 md:size-6" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-white hover:text-blue-500 transition-colors">
                  <Facebook className="size-4 sm:size-5 md:size-6" />
                </a>
              </div>
            </ul>
          </div>
        </div>

        <div className="border-b-[1px] py-4 border-gray-500 my-6" />

        {/* Third Section - Ways to Buy & Support */}
        <div className="grid grid-cols-1 sm:grid-cols-2 text-left gap-6 sm:gap-8 md:gap-12">
          <div className="flex flex-col gap-4">
            <h6 className="text-lg sm:text-xl md:text-2xl">Ways to Buy</h6>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm md:text-base text-gray-500">
              <p>Shop Online</p>
              <p>|</p>
              <p>Call an Iotian Rep</p>
              <p>|</p>
              <p>Drop an Email</p>
            </div>
            <div className="sm:flex gap-4 items-center text-white mt-2 hidden">
              <button className="bg-blue-700 flex items-center gap-2 p-2 text-xs sm:text-sm md:text-base h-8 sm:h-10 md:h-12">
                <Phone className="size-4 sm:size-5 md:size-6" />
                Schedule a Call
              </button>
              <h6 className="text-xs sm:text-sm">OR</h6>
              <div className="flex flex-1 max-w-md">
                <Input
                  placeholder="eg: abc@xyz.com"
                  className="w-full h-8 sm:h-10 md:h-12 text-xs sm:text-sm md:text-base bg-transparent border border-white text-white placeholder-gray-400 focus:border-white focus:outline-none rounded-none"
                />
                <button className="bg-white text-xs sm:text-sm md:text-base text-black h-8 sm:h-10 md:h-12 px-3 sm:px-4 hover:bg-blue-700 hover:text-white transition-colors whitespace-nowrap">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-lg sm:text-xl md:text-2xl">Support</h6>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base text-gray-500">
              <p className="flex items-center gap-2">
                Iotian{" "}
                <span className="font-bold flex items-center gap-1">
                  Support <Wifi className="rotate-90 w-3 h-3 sm:w-4 sm:h-4" />
                </span>
              </p>
              <span>|</span>
              <p>Compare Products</p>
              <span>|</span>
              <p>Delivery Support</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base text-gray-500">
              <p>Schedule a support call</p>
              <span>|</span>
              <p>Know your Product</p>
              <span>|</span>
              <p>Live Chat</p>
            </div>
            <div className="sm:flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base text-gray-500 hidden">
              Drop an Email at support@iotian.com for more queries
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 text-white px-4 sm:px-6 md:px-8 py-4 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm md:text-base text-center sm:text-left">
          <span>
            &copy; 2024 Iotian | All Rights Reserved | The information on the
            website is subject to change without notice
          </span>
          <span className="hidden sm:block">|</span>
          <span>Privacy Policy | CSR | Terms of Use | Use of Cookies</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
