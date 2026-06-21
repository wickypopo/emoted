import { FluentEmoji } from "emoted-fluent-emoji";
import { data } from "../../../data/data";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Frage({ step, setStep, question, setQuestion }) {
  const map = data.questions.map((item) => {
    return (
      <button
        key={item.id}
        onClick={() => setQuestion(item)}
        className="bg-bg-secondary border-2 border-white/15 flex-grow-1 rounded-4xl squircle flex flex-col justify-center p-8 text-left focus:border-blue-600 gap-4"
      >
        <div>
          {item.emojis.map((emoji, emojiIndex) => (
            <FluentEmoji key={emojiIndex} emoji={emoji} className="size-12" />
          ))}
        </div>
        <span className="text-label-primary text-2xl">{item.question}</span>
      </button>
    );
  });
  return (
    <>
      {step === "frage" ? (
        <div className="flex flex-col justify-between flex-grow-1 gap-4 pb-25">
          <div>
            <span className="text-label-primary font-medium text-3xl leading-10 tracking-tight">
              Welche Frage willst du deinen Freunden stellen?{" "}
              <FluentEmoji emoji="👀" className="size-12 -mt-3" />
            </span>
          </div>
          <div className="flex-grow-1 flex flex-col gap-2">
            {map}
            <div className="text-label-tertiary flex items-center gap-2">
              <div className="w-full border-b border-label-tertiary" />
              <span>oder</span>
              <div className="w-full border-b border-label-tertiary" />
            </div>

            <div className="bg-bg-secondary border-2 border-white/15 flex-grow-1 rounded-4xl squircle flex flex-col justify-center p-8">
              <div>
                <FluentEmoji emoji="💅" className="size-12" />
                <FluentEmoji emoji="🌟" className="size-12" />
                <FluentEmoji emoji="🕺" className="size-12" />
                <FluentEmoji emoji="😮‍💨" className="size-12" />
              </div>
              <textarea
                placeholder="Gib deine eigene Frage ein..."
                className="text-label-primary text-2xl outline-none mt-2"
              ></textarea>
            </div>
          </div>
          <div className="flex gap-2 fixed bottom-8 left-8 right-8">
            <button
              onClick={() => {
                setStep("start");
                setQuestion(null);
              }}
              className="bg-bg-tertiary p-4 w-full squircle rounded-4xl text-xl font-medium text-white"
            >
              Zurück
            </button>
            <button
              onClick={() => {
                if (!question) {
                  return;
                }
                setStep("done");
              }}
              className={
                question
                  ? "bg-white p-4 w-full squircle rounded-4xl text-xl font-medium"
                  : "bg-bg-tertiary text-label-secondary p-4 w-full squircle rounded-4xl text-xl font-medium"
              }
            >
              Weiter
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
