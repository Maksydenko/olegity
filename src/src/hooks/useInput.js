import { useState } from "react";

export function useInput() {
  const [text, setText] = useState("");

  const onTextChange = (text) => {
    setText(text);
  };

  return { text, onTextChange };
}
