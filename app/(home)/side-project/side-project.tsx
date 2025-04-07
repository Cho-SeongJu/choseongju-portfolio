import useObserver from "@/hooks/useObserver";
import { TStep } from "@/interface/common";
import { Dispatch, RefObject, SetStateAction } from "react";
import CrewPlay from "./crew-play";
import FootStep from "./foot-step";
import Jurin from "./jurin";
import MentorMate from "./mentor-mate";

interface ISideProjectProps {
  readonly targetRef: RefObject<HTMLElement | null>;
  readonly setStep: Dispatch<SetStateAction<TStep>>;
}

export default function SideProject({ targetRef, setStep }: ISideProjectProps) {
  useObserver({
    targetRef,
    changeStep: "project",
    setStep,
    threshold: 0.1,
  });

  return (
    <section
      ref={targetRef}
      className="flex flex-col items-center justify-center w-screen"
    >
      <CrewPlay />
      <Jurin />
      <MentorMate />
      <FootStep />
    </section>
  );
}
