import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarResponsive
      as={motion.nav}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}  
    >
      <NavbarBrand>BeyondChats</NavbarBrand>
      <NavbarLinks>
        <NavbarLink to="/register">Register</NavbarLink>
        {/* <NavbarLink to="/setup">Setup</NavbarLink>
        <NavbarLink to="/integration">Integration</NavbarLink> */}
      </NavbarLinks>
    </NavbarResponsive>
  );
};

export default Navbar;

// Styled Components
const NavbarBrand = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left:100px;
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 30px;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-size: 20px;
  text-transform: capitalize;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px); /* Small lift effect */
  }
`;

// Media query for mobile responsiveness
const mediaQuery = `(max-width: 768px)`;
const mediaQueryPhone = `(max-width: 576px)`;
const mediaQuerySmallPhone = `(max-width: 400px)`;

const NavbarResponsive = styled.nav`
   background-color: #007bff;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin: 0;
    white-space: nowrap;
  }

  .navbar-links {
    display: flex;
    gap: 20px;
  }

  .navbar-link {
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  .navbar-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }

  /* Tablet view */
  @media ${mediaQuery} {
    padding: 10px 15px;

    .navbar-links {
      flex-direction: column;
      gap: 10px;
      text-align: center;
    }

    .navbar-link {
      padding: 8px 16px;
    }
  }

  /* Phone view */
  @media ${mediaQueryPhone} {
    flex-direction: column;
    padding: 8px;
    align-items: center;
    
    h1 {
      font-size: 22px;
    }

    .navbar-links {
      gap: 8px;
    }

    .navbar-link {
      padding: 6px 14px;
      font-size: 14px;
    }
  }

  /* Smaller phones (very compact screens) */
  @media ${mediaQuerySmallPhone} {
    padding: 6px;
    
    h1 {
      font-size: 20px;
    }

    .navbar-links {
      gap: 5px;
    }

    .navbar-link {
      padding: 5px 12px;
      font-size: 12px;
    }
  }
`;
