import React, { useState } from "react";
import MenuItem from "./MenuItem";
import './NavbarComponent.css'
const Navbar = () => {
  const menuItems = [
    {
      id: 1,
      title: "Home",
      link: "/",
      subMenu: null,
    },
    {
      id: 2,
      title: "Products",
      link: "/products",
      subMenu: [
        {
          id: 3,
          title: "Product 1",
          link: "/products/1",
          subMenu: null,
        },
        {
          id: 4,
          title: "Product 2",
          link: "/products/2",
          subMenu: [
            {
              id: 5,
              title: "Subproduct 1",
              link: "/products/2/1",
             subMenu:null
            },
            {
              id: 6,
              title: "Subproduct 2",
              link: "/products/2/2",
              subMenu: [
                {
                  id: 9,
                  title: "subproduct inner",
                  link: "products/2/1/1",
                  link: "products/2/1/1",
                  subMenu: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      title: "About",
      link: "/about",
      subMenu: null,
    },
    {
      id: 8,
      title: "Contact",
      link: "/contact",
      subMenu: null,
    },
  ];

  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
