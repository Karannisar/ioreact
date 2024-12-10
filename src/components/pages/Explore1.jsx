import { Typography } from "antd";
import { useEffect, useState } from "react";

const { Text } = Typography;

const Explore = () => {
  const [arraySize, setArraySize] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setArraySize(1); // For mobile
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setArraySize(3); // For tablets
      } else {
        setArraySize(4); // For larger screens (laptops & desktops)
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const products = Array(arraySize).fill({
    title: "Laptop slowing down? 10 things you can do to make it new!",
    image: "/22.png",
  });
  return (
    <>
      {/* Section Header */}
      <div className="text-center pt-10 ">
        <h1 className="!mb-2 text-4xl md:text-7xl">
          Check out the{" "}
          <span className="text-blue-900 font-bold">Iotian Journal</span>
        </h1>
        <Text className="text-gray-600 md:text-2xl">
          (We know what we{"'"}re talking about)
        </Text>
      </div>

      {/* Bestsellers Section */}
      <div className="mx-auto px-10 py-12 ">
        <div className="grid md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <div key={index} className="relative p-4 rounded-lg">
              {/* Product Image */}
              <div className="relative h-60 mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full"
                />
              </div>

              <h1 className="md:text-2xl text-sm  mb-1">
                {product.title}
              </h1>
              <a
                href="#"
                className="text-blue-600 md:text-lg text-xs underline">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Explore;
