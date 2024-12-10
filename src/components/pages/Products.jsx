import {
  DesktopOutlined,
  LaptopOutlined,
  SyncOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import { Button, Rate, Tabs, Typography } from "antd";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "..//Banner";
import MoreProd from "../MoreProd";
import ProductCard from "../Productcard";

const { Text } = Typography;

const categories = [
  { key: "laptops", label: "Laptops", icon: <LaptopOutlined /> },
  { key: "desktops", label: "Desktops", icon: <DesktopOutlined /> },
  { key: "tablets", label: "Tablets", icon: <TabletOutlined /> },
  { key: "refurbished", label: "Refurbished", icon: <SyncOutlined /> },
];

const productsData = {
  laptops: Array(4).fill({
    title: "Asus Zenbook x360 (16)",
    subtitle: "2-in-1 Laptop OLED, Black",
    rating: 4.0,
    reviews: 51,
    price: 186999,
    originalPrice: 199999,
    specs:
      "Intel® Evo™ platform Powered by Intel® Core™ Ultra 7 processor · Windows 11 Home .",
    image: "/12.png",
  }),
  desktops: Array(4).fill({
    title: "HP Pavilion Desktop",
    subtitle: "High-Performance PC",
    rating: 4.5,
    reviews: 43,
    price: 78999,
    originalPrice: 89999,
    specs:
      "Intel® Core™ i5 12th Gen · 16GB RAM · 512GB SSD · Windows 11 Home.",
    image: "/15.png",
  }),
  tablets: Array(4).fill({
    title: "Samsung Galaxy Tab S8",
    subtitle: "Wi-Fi Tablet, 128GB",
    rating: 4.3,
    reviews: 67,
    price: 54999,
    originalPrice: 64999,
    specs: "11'' Display · Qualcomm Snapdragon 8 · Android 13.",
    image: "/16.png",
  }),
  refurbished: Array(4).fill({
    title: "Refurbished MacBook Air",
    subtitle: "M1 Chip, Space Grey",
    rating: 4.0,
    reviews: 32,
    price: 68999,
    originalPrice: 84999,
    specs: "Apple M1 Chip · 8GB RAM · 256GB SSD · macOS Big Sur.",
    image: "/17.png",
  }),
};

const budgetCategories = [
  { price: "25,000", image: "/P1.png" },
  { price: "50,000", image: "/P2.png" },
  { price: "75,000", image: "/P3.png" },
  { price: "100,000", image: "/P4.png" },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState("laptops");

  const products = productsData[activeTab] || [];

  return (
    <>
      <div className="text-center pt-10 mb-12">
        <h1 className="mb-2 text-4xl md:text-7xl">
          Check out our{" "}
          <span className="text-blue-900 font-bold">Bestsellers</span>
        </h1>
        <h1 className="text-gray-600 md:text-2xl">
          Iotian's most sold collection, preferred by most customers
        </h1>
      </div>

      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        centered
        items={categories.map((cat) => ({
          key: cat.key,
          label: (
            <div className="flex flex-col items-center gap-1 md:gap-3 text-md md:text-4xl ">
              {cat.icon}
              <span>{cat.label}</span>
            </div>
          ),
        }))}
      />

      <div className="mx-auto px-4 md:px-10 py-12 bg-gray-200">
        <div className="block md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="product-swiper">
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="mt-24 px-4 md:px-10">
        <h1 className="text-center mb-12 text-blue-800 text-4xl md:text-7xl">
          <span className="font-bold">Devices</span> as per your budget
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {budgetCategories.map((category, index) => (
            <div
              key={index}
              className="relative rounded-lg cursor-pointer group overflow-hidden">
              <img
                src={category.image}
                alt={`Devices under ${category.price}`}
                className="w-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
                <h1 className="text-lg mb-2 font-bold">Devices Under</h1>
                <h1 className="text-5xl md:text-7xl font-bold">
                  ₹{category.price}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Banner />
      <MoreProd />
    </>
  );
};

export default Products;
