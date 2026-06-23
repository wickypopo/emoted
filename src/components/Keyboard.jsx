import {
  X,
  Clock,
  Smile,
  Dog,
  Apple,
  Balloon,
  Car,
  Lightbulb,
  Heart,
  Flag,
} from "lucide-react";
import { FluentEmoji } from "emoted-fluent-emoji";
import { useKeyboard } from "../utils/useKeyboard";
import { motion } from "framer-motion";

export default function Keyboard() {
  const { openKeyboard, toggleKeyboard, selectedEmojiCallback } = useKeyboard();
  const emojis = [
    // face-smiling
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "🤣",
    "😂",
    "🙂",
    "🙃",
    "🫠",
    "😉",
    "😊",
    "😇",

    // face-affection
    "🥰",
    "😍",
    "🤩",
    "😘",
    "😗",
    "☺️",
    "😚",
    "😙",
    "🥲",

    // face-tongue
    "😋",
    "😛",
    "😜",
    "🤪",
    "😝",
    "🤑",

    // face-hand
    "🤗",
    "🤭",
    "🫢",
    "🫣",
    "🤫",
    "🤔",
    "🫡",

    // face-neutral-skeptical
    "🤐",
    "🤨",
    "😐",
    "😑",
    "😶",
    "🫥",
    "😶‍🌫️",
    "😏",
    "😒",
    "🙄",
    "😬",
    "😮‍💨",
    "🤥",
    "🫨",

    // face-sleepy
    "😌",
    "😔",
    "😪",
    "🤤",
    "😴",

    // face-unwell
    "😷",
    "🤒",
    "🤕",
    "🤢",
    "🤮",
    "🤧",
    "🥵",
    "🥶",
    "🥴",
    "😵",
    "😵‍💫",
    "🤯",

    // face-hat
    "🤠",
    "🥳",
    "🥸",

    // face-glasses
    "😎",
    "🤓",
    "🧐",

    // face-concerned
    "😕",
    "🫤",
    "😟",
    "🙁",
    "☹️",
    "😮",
    "😯",
    "😲",
    "😳",
    "🥺",
    "🥹",
    "😦",
    "😧",
    "😨",
    "😰",
    "😥",
    "😢",
    "😭",
    "😱",
    "😖",
    "😣",
    "😞",
    "😓",
    "😩",
    "😫",
    "🥱",

    // face-negative
    "😤",
    "😡",
    "😠",
    "🤬",
    "😈",
    "👿",
    "💀",
    "☠️",

    // face-costume
    "💩",
    "🤡",
    "👹",
    "👺",
    "👻",
    "👽",
    "👾",
    "🤖",

    // cat-face
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "😽",
    "🙀",
    "😿",
    "😾",

    // monkey-face
    "🙈",
    "🙉",
    "🙊",

    // emotion
    "💋",
    "💌",
    "💘",
    "💝",
    "💖",
    "💗",
    "💓",
    "💞",
    "💕",
    "💟",
    "❣️",
    "💔",
    "❤️‍🔥",
    "❤️‍🩹",
    "❤️",
    "🩷",
    "🧡",
    "💛",
    "💚",
    "💙",
    "🩵",
    "💜",
    "🤎",
    "🖤",
    "🩶",
    "🤍",
    "💯",
    "💢",
    "💥",
    "💫",
    "💦",
    "💨",
    "🕳️",
    "💬",
    "👁️‍🗨️",
    "🗨️",
    "🗯️",
    "💭",
    "💤",
  ];
  return (
    <>
      <motion.div
        initial={{ pointerEvents: "none", opacity: 0, y: 20 }}
        animate={
          openKeyboard
            ? { pointerEvents: "all", opacity: 1, y: 0 }
            : { pointerEvents: "none", opacity: 0, y: 20 }
        }
        transition={{ duration: 0.1 }}
        className="absolute bottom-0 left-0 right-0 bg-bg-primary pt-4 rounded-t-4xl squircle"
      >
        <div>
          <X onClick={() => toggleKeyboard()} className="pl-4 size-12" />
          <div className="flex-1 overflow-x-auto overflow-y-hidden no-scrollbar">
            <div className="grid grid-rows-4 grid-flow-col auto-cols-[60px] gap-4 pb-4 pl-4">
              {emojis.map((emoji, index) => (
                <button
                  key={`${emoji}-${index}`}
                  className="aspect-square flex items-center justify-center"
                >
                  <FluentEmoji emoji={emoji} className="size-full" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 shrink-0 overflow-x-auto overflow-y-hidden justify-between py-3 no-scrollbar px-4">
            <span className="text-xl shrink-0">
              <Clock />
            </span>
            <span className="text-xl shrink-0 text-label-secondary">
              <Smile />
            </span>
            <span className="text-xl shrink-0 text-label-secondary">
              <Dog />
            </span>
            <span className="text-xl shrink-0 text-label-secondary">
              <Apple />
            </span>
            <span className="text-xl shrink-0 text-label-secondary">
              <Balloon />
            </span>
            <span className="text-xl shrink-0 text-label-secondary">
              <Car />
            </span>
            <span className="text-xl shrink-0 text-label-secondary">
              <Lightbulb />
            </span>
            <span className="text-xl shrink-0 text-label-secondary">
              <Heart />
            </span>
            <span className="text-xl shrink-0 text-label-secondary">
              <Flag />
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
