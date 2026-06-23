import { useState, createContext } from "react";

export const keyboardContext = createContext();

export default function KeyboardProvider({ children }) {
  const [openKeyboard, setOpenKeyboard] = useState(false);

  function toggleKeyboard() {
    setOpenKeyboard((prev) => !prev);
  }
  function selectedEmojiCallback() {}

  return (
    <keyboardContext.Provider
      value={{ openKeyboard, toggleKeyboard, selectedEmojiCallback }}
    >
      {children}
    </keyboardContext.Provider>
  );
}
