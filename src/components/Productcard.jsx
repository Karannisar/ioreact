import { Button, Rate, Typography } from "antd";
const { Text } = Typography;

const ProductCard = ({ product }) => (
  <div className="bg-gray-700 relative rounded-lg h-full flex flex-col justify-between p-2 sm:p-4">
    <h1 className="mt-3 sm:mt-5 text-xs sm:text-sm">
      <span className="bg-blue-900 p-1">DEAL</span>
      <span className="bg-white p-1 text-[10px] sm:text-xs">FLAT INR CASHBACK 20,000</span>
    </h1>
    
    <div className="px-3 sm:px-6">
      <div className="relative h-32 sm:h-40 lg:h-48 mb-2 sm:mb-4 mt-4 sm:mt-10">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full w-full"
        />
      </div>
      
      <h1 className="text-white text-base sm:text-lg lg:text-xl font-bold mb-1">
        {product.title}
      </h1>
      
      <Text className="block mb-2 text-white text-sm sm:text-base">
        {product.subtitle}
      </Text>
      
      <div className="flex items-center gap-2 mb-2">
        <Rate disabled defaultValue={product.rating} className="text-xs sm:text-sm" />
        <Text className="text-xs sm:text-sm text-white">
          {product.rating}/5 ({product.reviews})
        </Text>
      </div>
      
      <Text className="block text-xs sm:text-sm text-white mb-4">
        {product.specs}
        <Button type="link" className="p-0 ml-1 underline text-xs sm:text-sm">
          See More
        </Button>
      </Text>
    </div>

    <div className="mt-auto">
      <div className="px-3 sm:px-6">
        <Text className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
          ₹{product.price.toLocaleString()}
        </Text>
        <Text className="text-xs sm:text-sm text-white ml-2">
          <del>₹{product.originalPrice.toLocaleString()}</del>
        </Text>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-3 sm:px-6 py-3 mb-4 sm:mb-7">
        <button className="border bg-white text-blue-700 hover:bg-blue-700 hover:text-white font-bold text-xs px-3 sm:px-5 py-2 w-full">
          Buy Now (Save 7%)
        </button>
        <button className="border text-white hover:bg-white hover:text-gray-700 font-bold text-xs px-3 sm:px-5 py-2 w-full">
          View Details
        </button>
      </div>
    </div>
  </div>
);
export default ProductCard;
