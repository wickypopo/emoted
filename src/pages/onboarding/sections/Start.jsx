import { FluentEmoji } from "emoted-fluent-emoji";

export default function Start({ step, setStep }) {
  return (
    <>
      {step === "start" ? (
        <div className="flex flex-col justify-end flex-grow-1 gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex">
              <FluentEmoji emoji="🥺" animated className="size-25 -ml-1" />
              <FluentEmoji emoji="🤡" animated className="size-25 -ml-5" />
              <FluentEmoji emoji="😳" animated className="size-25 -ml-5" />
              <FluentEmoji emoji="🤯" animated className="size-25 -ml-5" />
            </div>
            <span className="text-label-primary font-semibold text-5xl leading-[1.1] tracking-[-3%]">
              Was denken <br />
              deine Freunde <br />
              wohl über dich?
            </span>
            <span className="text-label-secondary text-xl">
              Erfahre jetzt, was deine Freunde
              <br />
              <span className="underline text-label-primary">wirklich</span> von
              dir denken
            </span>
          </div>

          <button
            onClick={() => setStep("frage")}
            className="bg-white p-4 w-full squircle rounded-4xl text-xl font-medium"
          >
            Frage erstellen
          </button>
        </div>
      ) : null}
    </>
  );
}
