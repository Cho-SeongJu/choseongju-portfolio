import LinkIcon from "@/components/link-icon";
import { TStep } from "@/interface/common";
import Link from "next/link";
import { Dispatch, RefObject, SetStateAction } from "react";

interface IHeaderProps {
  readonly step: string;
  readonly refObject: { [key: string]: RefObject<HTMLElement | null> };
  readonly setStep: Dispatch<SetStateAction<TStep>>;
}

interface IMenu {
  readonly section: {
    readonly text: "INTRO" | "ABOUT" | "SKILL" | "EXPERIENCE" | "PROJECT";
    readonly step: "intro" | "about" | "skill" | "experience" | "project";
    readonly onClick: () => void;
  }[];
  readonly link: {
    readonly text: "GITHUB" | "NOTION";
    readonly href: string;
  }[];
}

export default function HeaderMenu({ step, refObject, setStep }: IHeaderProps) {
  const MENU: IMenu = {
    section: [
      { text: "INTRO", step: "intro", onClick: () => setStep("intro") },
      {
        text: "ABOUT",
        step: "about",
        onClick: () => {
          refObject.aboutMeSectionRef.current?.scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth",
          });
          setStep("about");
        },
      },
      {
        text: "EXPERIENCE",
        step: "experience",
        onClick: () => {
          refObject.experienceSectionRef.current?.scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth",
          });
          setStep("experience");
        },
      },
      {
        text: "SKILL",
        step: "skill",
        onClick: () => {
          refObject.techStackSectionRef.current?.scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth",
          });
          setStep("skill");
        },
      },
      {
        text: "PROJECT",
        step: "project",
        onClick: () => {
          refObject.sideProjectSectionRef.current?.scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth",
          });
          setStep("project");
        },
      },
    ],
    link: [
      { text: "GITHUB", href: "https://github.com/Cho-SeongJu" },
      {
        text: "NOTION",
        href: "https://rich-crush-b28.notion.site/Resume-184c16fc38448044b582c1bc233dc570?pvs=4",
      },
    ],
  };

  return (
    <div className="flex w-full max-w-[1520px] md:hidden">
      <ul
        className={`${
          step === "intro" ? "translate-y-[-100px]" : "translate-y-0"
        } intro-animation flex`}
      >
        {MENU.section.map((sectionMenu, index) => (
          <li
            key={sectionMenu.text}
            className={`text-[16px] cursor-pointer transition-colors duration-200 ${
              index < 4 && "mr-[36px]"
            } ${
              sectionMenu.step === step
                ? "text-white-001"
                : "text-white-006 hover:text-white-003"
            }`}
            onClick={sectionMenu.onClick}
          >
            {sectionMenu.text}
          </li>
        ))}
      </ul>
      <div className="grow" />
      <ul
        className={`${
          step === "intro" ? "translate-y-[-100px]" : "translate-y-0"
        } intro-animation flex`}
      >
        {MENU.link.map((linkMenu, index) => (
          <li
            key={linkMenu.text}
            className={`text-white-006 text-[16px] cursor-pointer flex items-center hover:text-white-001 transition-colors duration-200 ${
              index === 0 && "mr-[36px]"
            }`}
          >
            <Link
              href={linkMenu.href}
              target="_blank"
            >
              {linkMenu.text}
            </Link>
            <LinkIcon />
          </li>
        ))}
      </ul>
    </div>
  );
}
