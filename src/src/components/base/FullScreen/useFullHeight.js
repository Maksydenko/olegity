import { useState } from "react";

import { useWindowListener } from "@hooks/useWindowListener";

export const useFullHeight = () => {
  const [height, setHeight] = useState("100vh");

  const handleHeightUpdate = () => {
    const { innerHeight } = window;
    setHeight(`${innerHeight - 0.0001}px`);
  };
  useWindowListener(handleHeightUpdate);

  return height;
};
