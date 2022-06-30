import React from "react";
import { NavbarElements, NavbarHeader, NavbarMain } from "./NavbarStyle";

export const Navbar = () => {
  return (
    <div>
      <NavbarMain>
        <NavbarHeader>Header</NavbarHeader>

        <NavbarElements>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </NavbarElements>
      </NavbarMain>
    </div>
  );
};
