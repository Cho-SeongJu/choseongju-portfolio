import { TStep } from "@/interface/common";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import HeaderMenu from "./header-menu";
import Logo from "./logo";
import Drawer from "@/components/drawer";

interface IHeaderProps {
  readonly step: TStep;
  readonly refObject: { [key: string]: RefObject<HTMLElement | null> };
  readonly setStep: Dispatch<SetStateAction<TStep>>;
}

export default function Header({ step, refObject, setStep }: IHeaderProps) {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  useEffect(() => {
    if (isOpenDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpenDrawer]);

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
          setIsOpenDrawer={setIsOpenDrawer}
        />
      </div>
      <Logo step={step} />
      {isOpenDrawer && (
        <Drawer
          setIsOpenDrawer={setIsOpenDrawer}
          setStep={setStep}
          refObject={refObject}
        />
      )}
    </header>
  );
}
