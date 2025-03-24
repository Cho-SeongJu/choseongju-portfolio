"use client";

import Header from "@/app/(home)/header";
import { TStep } from "@/interface/common";
import { useEffect, useRef, useState } from "react";
import AboutMe from "./about-me/about-me";
import AboutMeDeveloper from "./about-me/about-me-developer";
import Experience from "./experience/experience";
import SideProject from "./side-project/side-project";
import TechStack from "./tech-stack/tech-stack";

export default function Home() {
  const [step, setStep] = useState<TStep>("intro");

  const aboutMeSectionRef = useRef<HTMLElement>(null);
  const aboutMeDeveloperSectionRef = useRef<HTMLElement>(null);
  const experienceSectionRef = useRef<HTMLElement>(null);
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
        refObject={{
          aboutMeSectionRef,
          aboutMeDeveloperSectionRef,
          experienceSectionRef,
          techStackSectionRef,
          sideProjectSectionRef,
        }}
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
          <Experience
            experienceSectionRef={experienceSectionRef}
            setStep={setStep}
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
