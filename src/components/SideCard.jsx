import {
  CloudServerOutlined,
  DatabaseOutlined,
  DesktopOutlined,
  LaptopOutlined,
  SyncOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import { useEffect, useRef } from "react";

const categories = [
  { icon: <LaptopOutlined className="text-3xl" />, name: "Laptops" },
  { icon: <DesktopOutlined className="text-3xl" />, name: "Desktops" },
  { icon: <TabletOutlined className="text-3xl" />, name: "Tablets" },
  { icon: <CloudServerOutlined className="text-3xl" />, name: "Workstations" },
  { icon: <DatabaseOutlined className="text-3xl" />, name: "Servers" },
  { icon: <DesktopOutlined className="text-3xl" />, name: "Monitors" },
  { icon: <SyncOutlined className="text-3xl" />, name: "Refurbished" },
];

export default function BrowseCategories() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const animationDuration = scrollWidth / 120;

      scrollContainer.style.setProperty("--scroll-width", `${scrollWidth}px`);
      scrollContainer.style.setProperty(
        "--animation-duration",
        `${animationDuration}s`,
      );
    }
  }, []);

  return (
    <div className="max-w-full overflow-hidden py-8 relative z-[1]">
      <h1 className="text-center mb-8 font-bold text-3xl">
        Browse <span className="text-[#1a237e] ">Popular Categories</span>
      </h1>

      <div ref={scrollRef} className="flex animate-scroll">
        {[...Array(2)].map((_, containerIndex) => (
          <div key={containerIndex} className="flex">
            {categories.map((category, index) => (
              <div
                key={`${containerIndex}-${index}`}
                className="md:w-48 w-24 flex-shrink-0 mx-4 text-center">
                <div className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors cursor-pointer h-full flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center h-16 mb-2">
                    {category.icon}
                  </div>
                  <Typography.Text className="text-xs font-medium">
                    {category.name}
                  </Typography.Text>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
