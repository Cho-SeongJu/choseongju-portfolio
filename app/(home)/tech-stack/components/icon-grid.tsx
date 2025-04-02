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
          className="w-[150px] h-[110px] flex flex-col items-center slide-in-animation opacity-0"
        >
          {icon.icon}
          <span className="lg:mt-[28px] md:mt-[38px] text-center text-black-002 text-[16px] font-medium">
            {icon.name}
          </span>
        </div>
      ))}
    </>
  );
}
