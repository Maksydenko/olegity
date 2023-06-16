import { useState } from "react";

import { useWindowResize } from "@hooks/useWindowResize";

export const useFullHeight = () => {
  const [height, setHeight] = useState("100vh");

  const handleResizeHeight = () => {
    const windowHeight = window.innerHeight;
    setHeight(`${windowHeight}px`);
  };
  useWindowResize(handleResizeHeight);

  return height;
};
