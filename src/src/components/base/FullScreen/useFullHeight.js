import { useState } from "react";

import { useWindowResize } from "@hooks/useWindowResize";

export const useFullHeight = () => {
  const [height, setHeight] = useState("100vh");

  const handleHeightUpdate = () => {
    const windowHeight = window.innerHeight;
    setHeight(`${windowHeight}px`);
  };
  useWindowResize(handleHeightUpdate);

  return height;
};
