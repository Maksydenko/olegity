import { useState } from "react";

import { useWindowListener } from "@hooks/useWindowListener";

export const useFullHeight = () => {
  const [height, setHeight] = useState("100vh");

  const handleHeightUpdate = () => {
    const windowHeight = window.innerHeight;
    setHeight(`${windowHeight}px`);
  };
  useWindowListener(handleHeightUpdate);

  return height;
};
