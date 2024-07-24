// components/layout/layout.component.tsx
import React from "react";
import Nav from "./components/nav/nav.component";
import * as Std from "./layout.styled";
import { LayoutProps } from "../../../types/types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Std.Wrapper>
      <div className="nav">
        <Nav />
      </div>
      <div className="main">{children}</div>
    </Std.Wrapper>
  );
};

export default Layout;
