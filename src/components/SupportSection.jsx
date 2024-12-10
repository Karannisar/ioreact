import { Phone, Wifi } from "lucide-react";

export default function SupportSection() {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Text Section */}
      <div className="bg-[#0B1120] text-white md:w-1/2 px-8 py-12 space-y-6">
        <div className="flex items-center text-lg">
          <span>
            Iotian <span className="font-semibold">Support</span>
          </span>
          <Wifi className="rotate-90 ml-2 h-4 w-4" />
        </div>

        <div className="space-y-6">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-[2.75rem] leading-tight">
            <span className="text-[#3B82F6]">60% of consumers </span>
            stopped doing business with a brand due to{" "}
            <span className="text-[#3B82F6]">Poor Customer Service</span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
            We don't want that to happen. Our primary focus for all consumers is
            after-sales service, ensuring you give us a chance to serve you more
            than once.
          </p>

          <div className="flex items-center gap-6 pt-4">
            <button className="bg-white text-black hover:bg-black hover:text-white transition-colors px-6 py-3 rounded flex items-center gap-2 text-base font-semibold">
              <Phone className="h-5 w-5" />
              Schedule a call
            </button>
            <div className="flex items-center gap-3 text-lg">
              <span>OR</span>
              <a
                href="#"
                className="underline hover:text-blue-400 transition-colors">
                Drop an Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 md:block hidden">
        <img
          src="/18.png"
          alt="Frustrated customer"
          className="w-full h-full "
        />
      </div>
    </div>
  );
}
