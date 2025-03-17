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
    <div className="grid grid-cols-3 gap-y-[32px] gap-x-[242px]">
      {iconList.map((icon: ISkillIcon) => (
        <div
          key={icon.name}
          className="w-[150px] h-[110px] flex flex-col items-center"
        >
          {icon.icon}
          <span className="mt-[28px] text-center text-black-002 text-[16px] font-medium">
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  );
}
