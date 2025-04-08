import { TStep } from "@/interface/common";
import { Dispatch, RefObject, SetStateAction } from "react";
import HeaderMenu from "./header-menu";
import Logo from "./logo";

interface IHeaderProps {
  readonly step: TStep;
  readonly refObject: { [key: string]: RefObject<HTMLElement | null> };
  readonly setStep: Dispatch<SetStateAction<TStep>>;
}

export default function Header({ step, refObject, setStep }: IHeaderProps) {
  return (
    <header className="fixed top-0 w-full z-[999]">
      <div
        className={`items-center flex lg:justify-evenly xs:flex-row-reverse w-full mx-auto h-[80px] ${
          step === "intro" ? "translate-y-[-80px]" : "translate-y-0"
        } bg-black-002 intro-animation`}
      >
        <HeaderMenu
          refObject={refObject}
          step={step}
          setStep={setStep}
        />
      </div>
      <Logo step={step} />
    </header>
  );
}
