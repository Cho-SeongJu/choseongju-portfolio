"use client";

import Header from "@/app/(home)/header";
import { useEffect, useRef, useState } from "react";
import AboutMe from "./about-me/about-me";
import AboutMeDeveloper from "./about-me/about-me-developer";
import Experience2021 from "./experience/experience-2021";
import Experience2022 from "./experience/experience-2022";
import Experience2024 from "./experience/experience-2024";
import SideProject from "./side-project/side-project";
import TechStack from "./tech-stack/tech-stack";
import { TStep } from "@/interface/common";

export default function Home() {
  const [step, setStep] = useState<TStep>("intro");

  const aboutMeSectionRef = useRef<HTMLElement>(null);
  const aboutMeDeveloperSectionRef = useRef<HTMLElement>(null);
  const experience2024SectionRef = useRef<HTMLElement>(null);
  const experience2022SectionRef = useRef<HTMLElement>(null);
  const experience2021SectionRef = useRef<HTMLElement>(null);
  const techStackSectionRef = useRef<HTMLElement>(null);
  const sideProjectSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (step !== "intro") return;

    const timer = setTimeout(() => setStep("about"), 1000);

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <>
      <Header
        step={step}
        setStep={setStep}
      />
      {step !== "intro" && (
        <>
          <AboutMe
            setStep={setStep}
            targetRef={aboutMeSectionRef}
          />
          <AboutMeDeveloper
            setStep={setStep}
            targetRef={aboutMeDeveloperSectionRef}
          />
          <Experience2024
            setStep={setStep}
            targetRef={experience2024SectionRef}
          />
          <Experience2022
            setStep={setStep}
            targetRef={experience2022SectionRef}
          />
          <Experience2021
            setStep={setStep}
            targetRef={experience2021SectionRef}
          />
          <TechStack
            setStep={setStep}
            targetRef={techStackSectionRef}
          />
          <SideProject
            setStep={setStep}
            targetRef={sideProjectSectionRef}
          />
        </>
      )}
    </>
  );
}
