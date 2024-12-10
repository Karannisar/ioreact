import { ClockCircleOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import Navbar from "../Navbar";

const { Title, Text } = Typography;

const applications = [
  {
    title: "Home Laptops",
    image: "/5.png",
    price: "Starting from INR 29,999",
  },
  {
    title: "Business Laptops",
    image: "/6.png",
    price: "Starting from INR 29,999",
  },
  {
    title: "Education Laptops",
    image: "/7.png",
    price: "Starting from INR 29,999",
  },
  {
    title: "For Designers",
    image: "/8.png",
    price: "Starting from INR 29,999",
  },
  {
    title: "For Video Editors",
    image: "/9.png",
    price: "Starting from INR 29,999",
  },
  {
    title: "For Illustrations",
    image: "/10.png",
    price: "Starting from INR 29,999",
  },
];

export default function Applications() {
  return (
    <div className="px-7 pt-10">
      <div className="text-center mb-12">
        <h1 className="!mb-0 lg:text-6xl md:text-3xl text-xl">
          <span className="text-[#2632b0] font-bold">Applications </span> we
          help you achieve
        </h1>
      </div>

      {/* Responsive Grid Layout */}
      <Row gutter={[16, 16]} justify="center">
        {applications.map((app, index) => (
          <Col
            key={index}
            sm={12} // Half width on tablet
            lg={8} // 1/3 width on desktop
            className="relative">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-auto max-h-[30rem] object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center   text-white p-4">
                <h1 className="md:text-5xl text-2xl mb-2">{app.title}</h1>
                <h2 className="text-lg font-thin">{app.price}</h2>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
