import { Tag, Typography } from "antd";

const { Text } = Typography;

const products = [
  {
    title: "Lenovo Thinkpad Series",
    subtitle: "For the creative minds",
    color: "bg-blue-700",
    price: 29999,
    image: "/19.png",
    tag1: "High Performance",
    tag2: "Long Battery Life",
  },
  {
    title: "Lenovo Thinkbook Series",
    subtitle: "For the creative minds",
    color: "bg-yellow-700",
    price: 29999,
    image: "/20.png",
    tag1: "High Performance",
    tag2: "Long Battery Life",
  },
  {
    title: "Lenovo V Series",
    subtitle: "For the creative minds",
    color: "bg-red-700",
    price: 29999,
    image: "/21.png",
    tag1: "High Performance",
    tag2: "Long Battery Life",
  },
];

const MoreProd = () => {
  return (
    <div className="py-10">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Check out our{" "}
          <span className="text-blue-900 font-bold">
            latest series of Laptops & Tablets
          </span>
        </h1>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        {products.map((product) => (
          <div
            key={product.title}
            className={`relative ${product.color} rounded-lg overflow-hidden shadow-lg`}
          >
            {/* Product Image with Tags */}
            <div className="relative">
              {/* Tags */}
              <Tag className="absolute top-2 left-2 bg-slate-200 text-black text-xs font-bold px-3 py-1 rounded-lg z-10">
                {product.tag1}
              </Tag>
              <Tag className="absolute top-2 right-2 bg-slate-200 text-black text-xs font-bold px-3 py-1 rounded-lg z-10">
                {product.tag2}
              </Tag>

              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="h-48 md:h-60 w-full"
              />
            </div>

            {/* Product Details */}
            <div className="p-6">
              <h1 className="text-white text-xl md:text-2xl font-bold mb-2">
                {product.title}
              </h1>
              <Text className="text-white flex flex-col md:flex-row gap-2 items-start md:items-center mb-4">
                {product.subtitle}
                <span className="hidden md:block">|</span>
                <span className="font-bold text-white">
                  Starts from INR {product.price.toLocaleString()}
                </span>
              </Text>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="border bg-white text-black hover:bg-black hover:text-white text-sm px-4 py-2 rounded transition-all duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProd;
