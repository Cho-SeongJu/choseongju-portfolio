"use client";

import Header from "@/app/(home)/header";
import { useEffect, useState } from "react";
import AboutMe from "./about-me/about-me";
import AboutMeDeveloper from "./about-me/about-me-developer";
import Experience2021 from "./experience/experience-2021";
import Experience2022 from "./experience/experience-2022";
import Experience2024 from "./experience/experience-2024";
import SideProject from "./side-project/side-project";
import TechStack from "./tech-stack/tech-stack";

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

    const handleWheel = (e: WheelEvent) => {
      // e.deltaY  값이 양수면 down wheel, 음수면 up wheel
      const isScrollUp = e.deltaY > 0;

      if ((isScrollUp && step === 1) || (!isScrollUp && step === 6)) return;

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      isScrollUp
        ? handleChangeSectionStep("next")
        : handleChangeSectionStep("prev");
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header step={step} />
      <AboutMe />
      <AboutMeDeveloper />
      <Experience2024 />
      <Experience2022 />
      <Experience2021 />
      <TechStack />
      <SideProject />
    </>
  );
}
