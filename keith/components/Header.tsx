'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";


const Header = () => {
  
  const openMailchimpSignup = () => {
    const mailchimpSignupUrl = 'http://eepurl.com/iFN81U';
    window.open(mailchimpSignupUrl, '_blank');
  };

  const linkStyle = {
    fontFamily: "'Open Sans', sans-serif", // Make sure the font name matches the Google Font name
  };


  return (
    <Navbar className="navbar bg-black-500">
      <NavbarBrand>
        <img 
          src="/images/logo.png" 
          alt="Your Brand Logo" 
          className="mt-2 ml-0 w-[220px] h-[50px] " // Adjust the margin-top (mt-2) and margin-left (ml-0) as needed
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem isActive>
          <a href="#Hero" className="link text-white" style={linkStyle}>Home</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#Cardstext" className="link text-white" style={linkStyle}>Menu</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#Aboutuss" className="link text-white" style={linkStyle}>About Us</a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {/* Tailwind CSS applied for orange background and hover effect */}
          <Button 
            className="bg-orange-500 text-white hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={openMailchimpSignup}
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
