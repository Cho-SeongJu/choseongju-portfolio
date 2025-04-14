import Hamburger from "@/public/svg/hamburger.svg";
import { Dispatch, SetStateAction } from "react";

interface IMenuToggleProps {
  readonly setIsOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

export default function MenuToggle({ setIsOpenDrawer }: IMenuToggleProps) {
  const handleClickMenuToggle = () => {
    setIsOpenDrawer(true);
  };

  return (
    <div
      className="w-[24px] h-[24px] lg:hidden xs:flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-800 transition-colors duration-300 md:mr-0 sm:mr-[40px] xs:mr-[10px]"
      onClick={handleClickMenuToggle}
    >
      <Hamburger className="w-[30px] h-[30px]" />
    </div>
  );
}
