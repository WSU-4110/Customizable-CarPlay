import React from "react";

const LayoutContext = React.createContext({
  layout: "layoutOne",
  toggleLayout: () => {},
});

export default LayoutContext;
