import React, { createContext, useState } from "react";

const LayoutContext = createContext({
  layout: "layoutOne",
  setLayout: () => {},
  footerColor: "#ffffff",
  setFooterColor: () => {},
});

export const LayoutProvider = ({ children }) => {
  const [layout, setLayout] = useState("layoutOne");
  const [footerColor, setFooterColor] = useState("#ffffff");

  return (
    <LayoutContext.Provider
      value={{ layout, setLayout, footerColor, setFooterColor }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
