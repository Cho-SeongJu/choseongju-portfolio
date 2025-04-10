import { TStep } from "@/interface/common";
import { Dispatch, RefObject, SetStateAction } from "react";
import MenuToggle from "./components/menu-toggle";
import NavBar from "./components/nav-bar";

interface IHeaderProps {
  readonly step: string;
  readonly refObject: { [key: string]: RefObject<HTMLElement | null> };
  readonly setStep: Dispatch<SetStateAction<TStep>>;
  readonly setIsOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderMenu({
  step,
  refObject,
  setStep,
  setIsOpenDrawer,
}: IHeaderProps) {
  return (
    <>
      <NavBar
        step={step}
        refObject={refObject}
        setStep={setStep}
      />
      <MenuToggle setIsOpenDrawer={setIsOpenDrawer} />
    </>
  );
}
