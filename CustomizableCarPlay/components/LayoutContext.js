import React from "react";

const LayoutContext = React.createContext({
  layout: "layoutOne",
  setLayout: () => {},
});

export default LayoutContext;
