import { useState } from "react";

import Step1 from "@/components/common/Preview/Step1";
import Step2 from "@/components/common/Preview/Step2";
import Step3 from "@/components/common/Preview/Step3";
import Step4 from "@/components/common/Preview/Step4";

export default function Preview() {
  const [step, setStep] = useState<number>(1);

  return (
    <>
      {step === 1 && <Step1 setStep={setStep} />}
      {step === 2 && <Step2 setStep={setStep} />}
      {step === 3 && <Step3 setStep={setStep} />}
      {step === 4 && <Step4 setStep={setStep} />}
    </>
  )
}