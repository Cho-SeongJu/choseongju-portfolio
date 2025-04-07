import { JSX } from "react";

interface ISkillIcon {
  readonly name: string;
  readonly icon: JSX.Element;
}

interface IIconGridProps {
  readonly iconList: ISkillIcon[];
}

export default function IconGrid({ iconList }: IIconGridProps) {
  return (
    <>
      {iconList.map((icon: ISkillIcon) => (
        <div
          key={icon.name}
          className="lg:w-[150px] xs:w-[110px] md:h-[110px] xs:h-auto flex flex-col items-center slide-in-animation opacity-0 mx-auto"
        >
          {icon.icon}
          <span className="lg:mt-[28px] md:mt-[38px] xs:mt-[28px] text-center text-black-002 sm:text-[16px] xs:text-[12px] font-medium">
            {icon.name}
          </span>
        </div>
      ))}
    </>
  );
}
