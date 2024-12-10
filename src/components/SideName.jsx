import { useEffect, useRef } from "react";

const categories = [
  { name: "The Iotian Experience" },
  { name: "On - Time Deliveries" },
  { name: "After sales support" },
];

export default function InfiniteScrollBanner() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth / 2;
      const animationDuration = scrollWidth / 50; // Adjust speed here

      scrollContainer.style.setProperty("--scroll-width", `${scrollWidth}px`);
      scrollContainer.style.setProperty(
        "--animation-duration",
        `${animationDuration}s`,
      );
    }
  }, []);

  return (
    <div className="max-w-full overflow-hidden bg-blue-600 py-2 mt-5">
      <div
        ref={scrollRef}
        className="flex whitespace-nowrap animate-scroll"
        style={{
          "--scroll-width": "0px",
          "--animation-duration": "0s",
        }}>
        {[...Array(6)].map((_, containerIndex) => (
          <div key={containerIndex} className="flex">
            {categories.map((category, index) => (
              <h1
                key={`${category.name}-${containerIndex}-${index}`}
                className="md:text-lg font-medium text-white px-2 text-center">
                {category.name} |
              </h1>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
