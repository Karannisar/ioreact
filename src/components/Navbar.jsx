"use client";

import { Button, Drawer, Input, Layout, Menu } from "antd";
import { MenuIcon, Phone, Search, ShoppingCart, UserRound } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

const items = [
  {
    label: <a href="#products">Products</a>,
    key: "products",
  },
  {
    label: <a href="#applications">Applications</a>,
    key: "applications",
  },
  {
    label: <a href="#solutions">Solutions</a>,
    key: "solutions",
  },
  {
    label: <a href="#explore">Explore</a>,
    key: "explore",
  },
  {
    label: <a href="#support">Support</a>,
    key: "support",
  },
];

export default function Navbar() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <Header className="flex flex-col p-0 bg-white border-b min-h-fit">
      {/* Top Bar - Visible on tablet and larger */}
      <div className="flex bg-[#001122] py-2 px-4 justify-between items-center text-xs md:text-sm text-white">
        <span className="inline">
          Free Shipping on items worth 15,000 INR or more.{" "}
          <span className="underline">T&Cs Apply.</span>
        </span>
        <div className="md:flex hidden items-center space-x-2 sm:space-x-4">
          <NavLink to="/track" className="text-white hover:text-blue-400">
            Track Your Order
          </NavLink>
          <span>|</span>
          <NavLink to="/contact" className="text-white hover:text-blue-400">
            Contact Us
          </NavLink>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2">
        <div className="flex items-center">
          {/* Mobile Menu Toggle */}
          <Button
            type="text"
            icon={<MenuIcon className="text-2xl" />}
            onClick={toggleDrawer}
            className="lg:hidden"
          />
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <img src="/2.png" alt="LOGO" className="h-12 w-auto" />
          </a>

          {/* Desktop Menu - Moved next to logo */}
          <div className="hidden lg:flex items-center">
            <Menu
              mode="horizontal"
              items={items}
              style={{ fontWeight: "500", fontSize: "15px" }}
              className="border-none"
            />
          </div>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block relative">
            <Input
              placeholder="Search for Laptops, Desktops and more"
              prefix={<Search className="text-[#001122]" />}
              className="w-[280px] h-9 rounded-sm bg-white/10"
            />
          </div>
          <Button
            type="text"
            icon={<Search className="h-6 w-6" />}
            className="lg:hidden text-gray-700"
          />
          <Button
            icon={<Phone className="h-5 w-5" />}
            className="hidden md:flex items-center py-5 bg-blue-800 text-white hover:bg-blue-700">
            <span className="hidden lg:inline ml-2">Contact Us</span>
          </Button>
          <Button
            type="text"
            icon={<UserRound className="h-6 w-6" />}
            className="text-gray-700 hidden md:block"
          />
          <Button
            type="text"
            icon={<ShoppingCart className="h-6 w-6" />}
            className="text-gray-700"
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        open={drawerVisible}
        className="lg:hidden">
        <div className="flex flex-col space-y-6">
          <Input
            placeholder="Search for Laptops, Desktops and more"
            prefix={<Search className="text-[#001122]" />}
            className="w-full h-9 rounded-sm bg-white/10"
          />
          <Menu
            mode="vertical"
            items={items}
            style={{ fontWeight: "500", fontSize: "15px" }}
            className="border-none"
          />
          <div className="pt-4 border-t">
            <NavLink
              to="/track"
              className="block py-2 text-gray-600 hover:text-blue-600">
              Track Your Order
            </NavLink>
            <NavLink
              to="/contact"
              className="block py-2 text-gray-600 hover:text-blue-600">
              Contact Us
            </NavLink>
          </div>
        </div>
      </Drawer>
    </Header>
  );
}
