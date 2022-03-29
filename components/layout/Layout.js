import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
    </>
  );
};

export default Layout;
