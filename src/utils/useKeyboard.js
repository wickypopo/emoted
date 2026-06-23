import { keyboardContext } from "./KeyboardProvider";
import { useContext } from "react";

export function useKeyboard() {
  const { openKeyboard, toggleKeyboard, selectedEmojiCallback } =
    useContext(keyboardContext);
  return { openKeyboard, toggleKeyboard, selectedEmojiCallback };
}
