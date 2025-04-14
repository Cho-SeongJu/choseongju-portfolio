import useObserver from "@/hooks/useObserver";
import { TStep } from "@/interface/common";
import { Dispatch, RefObject, SetStateAction, useState } from "react";
import Skills from "./skills";
import StyleAndOther from "./style-and-other";

interface ITechStackProps {
  readonly targetRef: RefObject<HTMLElement | null>;
  readonly setStep: Dispatch<SetStateAction<TStep>>;
}

type TType = "skills" | "styleAndOther";

export default function TechStack({ targetRef, setStep }: ITechStackProps) {
  const [selectedType, setSelectedType] = useState<TType>("skills");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const changeVisible = () => {
    setIsVisible(true);
  };

  useObserver({
    targetRef,
    changeStep: "skill",
    setStep,
    rootMargin: "100px 0px 100px 0px",
    threshold: 0.4,
    setIsVisible: changeVisible,
  });

  return (
    <section
      ref={targetRef}
      className="flex justify-center items-center w-screen min-h-screen text-white-002 pt-[120px]"
    >
      <div className="xl:w-[1520px] lg:w-[1140px] md:w-[800px] sm:w-[400px] xs:w-[320px]">
        <h2
          className={`font-bold lg:text-[50px] xs:text-[30px] mb-[65px] ${
            isVisible
              ? "opacity-100 md:translate-x-0 xs:translate-y-0"
              : "opacity-0 md:translate-x-[50px] xs:translate-y-[100px]"
          } duration-[350ms] delay-100 ease-in text-center`}
        >
          Skill
        </h2>
        <div
          className={`flex md:flex-row xs:flex-col ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[100px]"
          } duration-[350ms] delay-100 ease-in md:px-0 xs:px-[10px]`}
        >
          <Skills
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          <StyleAndOther
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        </div>
      </div>
    </section>
  );
}
