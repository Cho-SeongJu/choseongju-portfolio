"use client";

import Header from "@/app/(home)/header/header";
import { TStep } from "@/interface/common";
import { useEffect, useRef, useState } from "react";
import AboutMe from "./about-me/about-me";
import AboutMeDeveloper from "./about-me/about-me-developer";
import Experience from "./experience/experience";
import SideProject from "./side-project/side-project";
import TechStack from "./tech-stack/tech-stack";
import Scroll from "@/components/scroll";

export default function Home() {
  const [step, setStep] = useState<TStep>("intro");
  const [isVisibleScrollIcon, setIsVisibleScrollIcon] =
    useState<boolean>(false);

  const aboutMeSectionRef = useRef<HTMLElement>(null);
  const aboutMeDeveloperSectionRef = useRef<HTMLElement>(null);
  const experienceSectionRef = useRef<HTMLElement>(null);
  const techStackSectionRef = useRef<HTMLElement>(null);
  const sideProjectSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (step === "about" || step === "intro") {
      setIsVisibleScrollIcon(true);
    } else {
      setIsVisibleScrollIcon(false);
    }

    const handleWheel = (e: WheelEvent) => {
      if (step === "intro" && e.deltaY > 0) {
        const timer = setTimeout(() => setStep("about"), 500);
        return () => clearTimeout(timer);
      }

      if (step === "about" && e.deltaY < 0 && window.scrollY === 0) {
        setStep("intro");
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
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
      {isVisibleScrollIcon && <Scroll />}
    </>
  );
}
