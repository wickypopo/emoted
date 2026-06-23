import { FluentEmoji } from "emoted-fluent-emoji";
import Keyboard from "../../../components/Keyboard-dep";
export default function Signup({ step, setStep }) {
  return (
    <>
      {step === "signup" ? (
        <div className="flex flex-col justify-start flex-grow-1 gap-4 pb-25">
          <div className="flex flex-col">
            <span className="text-label-primary font-medium text-3xl leading-10 tracking-tight">
              Speichere deine Frage, damit <br />
              du deine Antworten sehen kannst.
              <FluentEmoji emoji="👀" className="size-12 -mt-3" />
            </span>
            <span className="text-label-secondary text-xl leading-10 tracking-tight">
              So sehen deine Freunde deine Frage:
            </span>
          </div>
          <form className="flex-grow-1 flex flex-col gap-2 max-h-[300px] justify-center relative">
            <input
              type="text"
              placeholder="Username"
              name="name"
              className="text-2xl text-label-primary p-4 bg-bg-tertiary squircle rounded-4xl border-2 border-label-tertiary"
            />
            <input
              type="email"
              placeholder="E-Mail"
              name="email"
              className="text-2xl text-label-primary p-4 bg-bg-tertiary squircle rounded-4xl border-2 border-label-tertiary"
            />

            <input
              type="password"
              placeholder="Passwort"
              name="password"
              className="text-2xl text-label-primary p-4 bg-bg-tertiary squircle rounded-4xl border-2 border-label-tertiary"
            />
          </form>
          <button
            onClick={() => setStep("share")}
            className="bg-white p-4 w-full squircle rounded-4xl text-xl font-medium"
          >
            Registrieren
          </button>
          <div className="text-label-tertiary flex items-center gap-2">
            <div className="w-full border-b border-label-tertiary" />
            <span>oder</span>
            <div className="w-full border-b border-label-tertiary" />
          </div>
          <div className="flex items-center justify-center pr-6 bg-bg-tertiary rounded-full border-2 border-label-tertiary p-2 gap-8">
            {" "}
            <img src="/Google.svg" className="size-13" />
            <span className="text-label-primary font-medium text-xl">
              Weiter mit Google
            </span>
          </div>
          <div className="flex items-center justify-center pr-6 bg-bg-tertiary rounded-full border-2 border-label-tertiary p-2 gap-8">
            {" "}
            <img src="/Google.svg" className="size-13" />
            <span className="text-label-primary font-medium text-xl">
              Weiter mit Apple
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}
