"use client";
import React from "react";
import Navigator from "./Navigator";

const Root = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="relative">
      <main className="min-h-screen">{children}</main>
      <Navigator />
    </div>
  );
};

export default Root;
