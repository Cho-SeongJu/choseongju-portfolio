import TypeScriptIcon from "@/public/svg/skills/typescript.svg";
import NextJsIcon from "@/public/svg/skills/nextjs.svg";
import ReactQueryIcon from "@/public/svg/skills/react-query.svg";
import JavaScriptIcon from "@/public/svg/skills/javascript.svg";
import RecoilIcon from "@/public/svg/skills/recoil.svg";
import ViteIcon from "@/public/svg/skills/vite.svg";
import ReactIcon from "@/public/svg/skills/react.svg";
import ReduxIcon from "@/public/svg/skills/redux.svg";
import { Dispatch, JSX, SetStateAction, useMemo } from "react";
import ViewText from "./components/view-text";
import IconGrid from "./components/icon-grid";
import { SKILL_STYLE } from "@/constants/tech-stack";

interface ISkillsProps {
  readonly selectedType: "skills" | "styleAndOther";
  readonly setSelectedType: Dispatch<
    SetStateAction<"skills" | "styleAndOther">
  >;
}

interface ISkillIcon {
  readonly name: string;
  readonly icon: JSX.Element;
}

export default function Skills({
  selectedType,
  setSelectedType,
}: ISkillsProps) {
  const SKILL_ICON: ISkillIcon[] = useMemo(() => {
    return [
      { name: "TypeScript", icon: <TypeScriptIcon /> },
      {
        name: "Next.js",
        icon: <NextJsIcon />,
      },
      {
        name: "React-Query",
        icon: <ReactQueryIcon />,
      },
      {
        name: "JavaScript",
        icon: <JavaScriptIcon />,
      },
      {
        name: "Recoil",
        icon: <RecoilIcon />,
      },
      {
        name: "Vite",
        icon: <ViteIcon />,
      },
      {
        name: "React",
        icon: <ReactIcon />,
      },
      {
        name: "Redux",
        icon: <ReduxIcon />,
      },
    ];
  }, []);

  return (
    <div
      className={`${
        selectedType === "skills" ? "bg-white-001" : "bg-black-003"
      } ${
        selectedType === "skills"
          ? "py-[48px] lg:px-[76px] md:px-[50px]"
          : "pt-[48px] px-[42px] lg:pb-[209px] md:pb-[222px]"
      } rounded-[50px] flex flex-col cursor-pointer h-[571px]`}
      onMouseEnter={() => setSelectedType("skills")}
    >
      <h3
        className={`${
          selectedType === "skills"
            ? "text-black-002 mb-[45px]"
            : "text-gray-002 mb-[166px]"
        } font-bold lg:text-[30px] md:text-[20px] text-center`}
      >
        Front-End Skill
      </h3>
      <div className="grow items-center flex justify-center">
        <div
          className={`${
            selectedType !== "skills"
              ? SKILL_STYLE.viewText
              : SKILL_STYLE.iconGrid
          } transition-all duration-400 `}
        >
          {selectedType !== "skills" ? (
            <ViewText />
          ) : (
            <IconGrid iconList={SKILL_ICON} />
          )}
        </div>
      </div>
    </div>
  );
}
