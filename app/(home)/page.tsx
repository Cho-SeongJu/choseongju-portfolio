"use client";

import Header from "@/app/(home)/header";
import { useEffect, useState } from "react";
import AboutMe from "./about-me";

export default function Home() {
  const [step, setStep] = useState<number>(1);

  const handleChangeSectionStep = (type: "prev" | "next") => {
    if (type === "prev") {
      if (step === 1) return;
      setStep((prev) => prev - 1);
    }

    if (type === "next") {
      // 임시로 4
      if (step === 4) return;
      setStep((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleChangeSectionStep("next");
    }, 1000);

    window.addEventListener("wheel", (e: WheelEvent) => {
      // e.deltaY  값이 양수면 down wheel, 음수면 up wheel
      console.log(e.deltaY);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header step={step} />
      {step === 2 && <AboutMe />}
    </>
  );
}
