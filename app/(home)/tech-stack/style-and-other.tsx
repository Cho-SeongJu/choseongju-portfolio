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
      {
        name: "CSS",
        icon: (
          <CSSIcon className="lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] xs:w-[38px] xs:h-[38px]" />
        ),
      },
      {
        name: "Styled-Components",
        icon: (
          <StyledComponentsIcon className="lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] xs:w-[38px] xs:h-[38px]" />
        ),
      },
      {
        name: "TailwindCSS",
        icon: (
          <TailwindCSSIcon className="lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] xs:w-[38px] xs:h-[38px]" />
        ),
      },
      {
        name: "Git, GitHub",
        icon: (
          <div className="flex">
            <GitIcon className="lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] xs:w-[38px] xs:h-[38px]" />
            <GitHubIcon className="lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] xs:w-[38px] xs:h-[38px]" />
          </div>
        ),
      },
      {
        name: "Vercel",
        icon: (
          <VercelIcon className="lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] xs:w-[38px] xs:h-[38px]" />
        ),
      },
      {
        name: "AWS + S3",
        icon: (
          <div className="flex">
            <AWSIcon className="lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] xs:w-[38px] xs:h-[38px]" />
            <S3Icon className="lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] xs:w-[38px] xs:h-[38px]" />
          </div>
        ),
      },
    ];
  }, []);

  return (
    <div
      className={`md:ml-[24px] ${
        selectedType === "styleAndOther" ? "bg-white-001" : "bg-black-003"
      } ${
        selectedType === "styleAndOther"
          ? "py-[48px] lg:px-[76px] md:px-[50px] md:h-[571px] xs:h-[461px]"
          : "pt-[48px] px-[42px] lg:pb-[209px] md:pb-[222px] xs:pb-[33px] md:h-[571px] xs:h-[244px]"
      } rounded-[50px] flex flex-col cursor-pointer md:transition-none xs:transition-all duration-400`}
      onMouseEnter={() => setSelectedType("styleAndOther")}
    >
      <h3
        className={`${
          selectedType === "styleAndOther"
            ? "text-black-002 mb-[45px]"
            : "text-gray-002 md:mb-[166px] xs:mb-[28px]"
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
