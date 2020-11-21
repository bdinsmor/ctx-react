import { Header } from "antd/lib/layout/layout";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
    </Header>
  );
};

export default NavBar;
