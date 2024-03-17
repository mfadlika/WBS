import React, { ReactElement } from "react";
import Header from "./header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps): ReactElement {
  return (
    <React.Fragment>
      <Header>{props.children}</Header>
    </React.Fragment>
  );
}
