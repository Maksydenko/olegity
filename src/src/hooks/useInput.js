import { useState } from "react";

export const useInput = () => {
  const [text, setText] = useState("");

  return { text, setText };
};
