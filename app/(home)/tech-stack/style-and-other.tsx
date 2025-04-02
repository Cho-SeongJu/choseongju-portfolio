import { Dispatch, JSX, SetStateAction, useMemo } from "react";
import CSSIcon from "@/public/svg/style-and-other/css.svg";
import StyledComponentsIcon from "@/public/svg/style-and-other/styled-components.svg";
import TailwindCSSIcon from "@/public/svg/style-and-other/tailwindcss.svg";
import GitIcon from "@/public/svg/style-and-other/git.svg";
import GitHubIcon from "@/public/svg/style-and-other/github.svg";
import VercelIcon from "@/public/svg/style-and-other/vercel.svg";
import AWSIcon from "@/public/svg/style-and-other/aws.svg";
import S3Icon from "@/public/svg/style-and-other/s3.svg";
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

export default function StyleAndOther({
  selectedType,
  setSelectedType,
}: ISkillsProps) {
  const STYLE_AND_OTHER_ICON: ISkillIcon[] = useMemo(() => {
    return [
      { name: "CSS", icon: <CSSIcon /> },
      { name: "Styled-Components", icon: <StyledComponentsIcon /> },
      { name: "TailwindCSS", icon: <TailwindCSSIcon /> },
      {
        name: "Git, GitHub",
        icon: (
          <div className="flex">
            <GitIcon />
            <GitHubIcon />
          </div>
        ),
      },
      { name: "Vercel", icon: <VercelIcon /> },
      {
        name: "AWS + S3",
        icon: (
          <div className="flex">
            <AWSIcon />
            <S3Icon />
          </div>
        ),
      },
    ];
  }, []);

  return (
    <div
      className={`ml-[24px] ${
        selectedType === "styleAndOther" ? "bg-white-001" : "bg-black-003"
      } ${
        selectedType === "styleAndOther"
          ? "py-[48px] lg:px-[76px] md:px-[50px]"
          : "pt-[48px] px-[42px] lg:pb-[209px] md:pb-[222px]"
      } rounded-[50px] flex flex-col cursor-pointer h-[571px]`}
      onMouseEnter={() => setSelectedType("styleAndOther")}
    >
      <h3
        className={`${
          selectedType === "styleAndOther"
            ? "text-black-002 mb-[45px]"
            : "text-gray-002 mb-[166px]"
        } font-bold lg:text-[30px] md:text-[20px] text-center`}
      >
        Styles & Others
      </h3>
      <div className="grow items-center flex justify-center">
        <div
          className={`${
            selectedType !== "styleAndOther"
              ? SKILL_STYLE.viewText
              : SKILL_STYLE.iconGrid
          } transition-all duration-400`}
        >
          {selectedType !== "styleAndOther" ? (
            <ViewText />
          ) : (
            <IconGrid iconList={STYLE_AND_OTHER_ICON} />
          )}
        </div>
      </div>
    </div>
  );
}
