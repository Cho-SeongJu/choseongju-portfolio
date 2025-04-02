import { Dispatch, RefObject, SetStateAction, useRef, useState } from "react";
import Experience2021 from "./experience-2021";
import Experience2022 from "./experience-2022";
import Experience2024 from "./experience-2024";
import { TStep } from "@/interface/common";
import useObserver from "@/hooks/useObserver";

interface IExperienceProps {
  readonly experienceSectionRef: RefObject<HTMLElement | null>;
  readonly setStep: Dispatch<SetStateAction<TStep>>;
}

export default function Experience({
  experienceSectionRef,
  setStep,
}: IExperienceProps) {
  const [experienceYear, setExperienceYear] = useState<number>(2024);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const experience2024Ref = useRef<HTMLDivElement>(null);
  const experience2022Ref = useRef<HTMLDivElement>(null);
  const experience2021Ref = useRef<HTMLDivElement>(null);

  const changeVisible = () => {
    setIsVisible(true);
  };

  useObserver({
    targetRef: experienceSectionRef,
    changeStep: "experience",
    threshold: 0.2,
    setStep,
    setIsVisible: changeVisible,
  });

  return (
    <section
      ref={experienceSectionRef}
      className="w-screen min-h-screen"
    >
      <div className="flex justify-between pt-[120px] xl:w-[1520px] lg:w-[1140px] mx-auto md:w-[800px]">
        <h3
          className={`sticky top-[120px] self-start font-title text-white-002 xl:text-[160px] lg:text-[100px] md:text-[60px] leading-none ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[100px]"
          } duration-[400ms] delay-100 ease-in`}
        >
          {experienceYear}
        </h3>
        <div className="min-h-screen xl:w-[878px] lg:w-[823px] md:w-[482px]">
          <Experience2024
            experience2024Ref={experience2024Ref}
            setExperienceYear={setExperienceYear}
            isVisible={isVisible}
          />
          <Experience2022
            experience2022Ref={experience2022Ref}
            setExperienceYear={setExperienceYear}
            isVisible={isVisible}
          />
          <Experience2021
            experience2021Ref={experience2021Ref}
            setExperienceYear={setExperienceYear}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
}
