"use client";

import Header from "@/app/(home)/header/header";
import Scroll from "@/components/scroll";
import { TStep } from "@/interface/common";
import { useEffect, useRef, useState } from "react";
import AboutMe from "./about-me/about-me";
import AboutMeDeveloper from "./about-me/about-me-developer";
import Experience from "./experience/experience";
import SideProject from "./side-project/side-project";
import TechStack from "./tech-stack/tech-stack";

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

    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;

      if (step === "intro" && diffY > 50) {
        // 아래로 스크롤한 경우
        setStep("about");
      }

      if (step === "about" && diffY < -50 && window.scrollY === 0) {
        // 위로 스크롤한 경우
        setStep("intro");
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
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
