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
    threshold: 0.4,
    setIsVisible: changeVisible,
  });

  return (
    <section
      ref={targetRef}
      className="flex flex-col justify-center items-center w-screen min-h-screen text-white-002 pt-[124px] px-[200px] pb-[175px]"
    >
      <h2
        className={`font-bold text-[50px] mb-[65px] ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[100px]"
        } duration-[350ms] delay-100 ease-in`}
      >
        Skill
      </h2>
      <div
        className={`flex w-[1520px] ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[100px]"
        } duration-[350ms] delay-100 ease-in`}
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
    </section>
  );
}
