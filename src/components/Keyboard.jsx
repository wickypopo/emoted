import {
  Plus,
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
import { useState } from "react";
import { motion } from "framer-motion";
import { FluentEmoji } from "emoted-fluent-emoji";

export default function Keyboard() {
  const [open, setOpen] = useState(false);

  const emojis = [
    "😂",
    "😭",
    "🥺",
    "😳",
    "😬",
    "🤡",
    "💀",
    "🔥",
    "👀",
    "🤯",
    "😮‍💨",
    "🫠",
    "😎",
    "😈",
    "🤪",
    "🤣",
    "😏",
    "🙃",
    "😇",
    "🥴",
    "💅",
    "✨",
    "🫶",
    "💘",
    "❤️‍🔥",
    "🧠",
    "🫡",
    "🤝",
    "🫣",
    "🤭",
    "😤",
    "😡",
    "🥶",
    "😵‍💫",
    "🤓",
    "🫥",
    "😶‍🌫️",
    "🤌",
    "🙏",
    "💔",
    "🚩",
    "⚡",
    "🌟",
    "🎭",
    "🕺",
    "🧍",
    "🐸",
    "🦋",
    "🍓",
    "🪩",
  ];

  return (
    <motion.div
      animate={{
        width: open ? "90%" : "50px",
        height: open ? "330px" : "50px",
        position: "fixed",
      }}
      className="absolute -top-6 bg-system-blue text-white rounded-4xl squircle flex flex-col pl-[9px] pt-[9px] overflow-hidden"
    >
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        animate={{
          rotate: open ? "45deg" : "0deg",
        }}
        className="size-8 flex items-center justify-center shrink-0"
      >
        <Plus className="w-full" />
      </motion.button>

      {open && (
        <>
          <div className="flex-1 overflow-x-auto overflow-y-hidden no-scrollbar">
            <div className="grid grid-rows-3 grid-flow-col auto-cols-[60px] gap-4">
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

          <div className="flex gap-4 shrink-0 overflow-x-auto overflow-y-hidden whitespace-nowrap py-3 no-scrollbar">
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
        </>
      )}
    </motion.div>
  );
}
