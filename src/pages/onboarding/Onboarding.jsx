import Start from "./sections/Start";
import Frage from "./sections/Frage";
import { useState } from "react";
import Done from "./sections/Done";
import Signup from "./sections/Signup";
import Share from "./sections/Share";

export default function Onboarding() {
  const [step, setStep] = useState("start");
  const [question, setQuestion] = useState(null);

  return (
    <div className="dark">
      <main className="h-dvh min-h-screen p-4 pt-10 flex flex-col gap-8 bg-linear-[30deg] from-bg-primary via-bg-secondary to-bg-primary">
        <Start step={step} setStep={setStep} />
        <Frage
          step={step}
          setStep={setStep}
          question={question}
          setQuestion={setQuestion}
        />
        <Done
          step={step}
          setStep={setStep}
          question={question}
          setQuestion={setQuestion}
        />
        <Signup step={step} setStep={setStep} />
        <Share
          step={step}
          setStep={setStep}
          question={question}
          setQuestion={setQuestion}
        />
      </main>
    </div>
  );
}
