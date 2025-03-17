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
      } pt-[48px] pb-[126px] px-[76px] rounded-[50px] flex flex-col cursor-pointer`}
      onMouseEnter={() => setSelectedType("styleAndOther")}
    >
      <h3
        className={`${
          selectedType === "styleAndOther" ? "text-black-002" : "text-gray-002"
        } font-bold text-[30px] text-center mb-[108px]`}
      >
        Styles & Others
      </h3>
      <div className="grow items-center flex justify-center">
        {selectedType !== "styleAndOther" ? (
          <ViewText />
        ) : (
          <IconGrid iconList={STYLE_AND_OTHER_ICON} />
        )}
      </div>
    </div>
  );
}
