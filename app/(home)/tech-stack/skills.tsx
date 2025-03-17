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
      } py-[48px] px-[76px] rounded-[50px] flex flex-col cursor-pointer`}
      onMouseEnter={() => setSelectedType("skills")}
    >
      <h3
        className={`${
          selectedType === "skills" ? "text-black-002" : "text-gray-002"
        } font-bold text-[30px] text-center mb-[45px]`}
      >
        Front-End Skill
      </h3>
      <div className="grow items-center flex justify-center">
        {selectedType !== "skills" ? (
          <ViewText />
        ) : (
          <IconGrid iconList={SKILL_ICON} />
        )}
      </div>
    </div>
  );
}
