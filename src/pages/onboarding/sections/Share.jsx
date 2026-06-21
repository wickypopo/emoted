import { FluentEmoji } from "emoted-fluent-emoji";
import Keyboard from "../../../components/Keyboard";
import { useNavigate } from "react-router-dom";
export default function Share({ step, setStep, question, setQuestion }) {
  const navigate = useNavigate();
  return (
    <>
      {step === "share" ? (
        <div className="flex flex-col justify-start flex-grow-1 gap-4 pb-25">
          <div className="flex flex-col">
            <span className="text-label-primary font-medium text-3xl leading-10 tracking-tight">
              Teile deine Frage <br /> mit Freunden{" "}
              <FluentEmoji emoji="👀" className="size-12 -mt-3" />
            </span>
          </div>
          <div className="flex-grow-1 flex flex-col gap-2 max-h-[300px] justify-center relative">
            <div className="bg-bg-secondary border-2 border-white/15 flex-grow-1 rounded-4xl squircle flex flex-col justify-center p-8 gap-4">
              <div>
                {question.emojis.map((emoji, emojiIndex) => (
                  <FluentEmoji
                    key={emojiIndex}
                    emoji={emoji}
                    className="size-15"
                  />
                ))}
              </div>
              <span className="text-label-primary text-2xl">
                {question.question}
              </span>
              <div className="text-white absolute right-4 bottom-0 translate-y-1/2">
                <FluentEmoji emoji="😂" className="size-12" />
                <FluentEmoji emoji="🔥" className="size-12" />
                <FluentEmoji emoji="🥺" className="size-12" />
                <FluentEmoji emoji="🤯" className="size-12" />
              </div>

              <div className="absolute bottom-0 left-4 translate-y-1/2 w-full">
                <Keyboard />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 fixed bottom-8 left-8 right-8">
            <button
              onClick={() => navigate("/profile")}
              className="bg-white p-4 w-full squircle rounded-4xl text-xl font-medium"
            >
              Bei Whatsapp teilen
            </button>

            <div className="flex gap-2">
              <button
                onClick={() => navigate("/profile")}
                className="bg-bg-tertiary p-4 w-full squircle rounded-4xl text-xl font-medium text-white"
              >
                Instagram
              </button>
              <button
                onClick={() => navigate("/profile")}
                className="bg-bg-tertiary p-4 w-full squircle rounded-4xl text-xl font-medium text-white"
              >
                Instagram
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
