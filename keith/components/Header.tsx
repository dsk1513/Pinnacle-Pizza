'use client'
// Header.js
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const Header = () => {
  const openMailchimpSignup = () => {
    // Replace 'MAILCHIMP_SIGNUP_URL' with the actual Mailchimp signup form URL
    const mailchimpSignupUrl = 'http://eepurl.com/iFN81U';
    
    // Open the Mailchimp signup form in a new tab
    window.open(mailchimpSignupUrl, '_blank');
  };

  return (
    <Navbar>
      <NavbarBrand>
        {/* Your brand content goes here */}
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            MENU
          </Link>
        </NavbarItem>
        <NavbarItem> 
          <Link color="foreground" href="#">
            ABOUT US
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
 
        
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
