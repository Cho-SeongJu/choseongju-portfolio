import LinkIcon from "@/components/icon/link_icon";
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

export default function Header({ step, refObject, setStep }: IHeaderProps) {
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
    <header className="fixed top-0 w-full z-[999]">
      <div
        className={`items-center flex justify-evenly w-full h-[80px] mx-auto ${
          step === "intro" ? "translate-y-[-80px]" : "translate-y-0"
        } bg-black-002 intro-animation`}
      >
        <div className="flex w-full max-w-[1520px]">
          <ul
            className={`${
              step === "intro" ? "translate-y-[-100px]" : "translate-y-0"
            } intro-animation flex`}
          >
            {MENU.section.map((sectionMenu, index) => (
              <li
                key={sectionMenu.text}
                className={`text-[16px] cursor-pointer ${
                  index < 4 && "mr-[36px]"
                } ${
                  sectionMenu.step === step
                    ? "font-bold text-white-003"
                    : "text-white-005 hover:text-white-003 hover:font-bold"
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
                className={`text-white-005 text-[16px] cursor-pointer flex items-center hover:text-white-003 hover:font-bold ${
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
      </div>
      <div
        className={`${
          step === "intro" ? "w-full pb-[60px]" : "pb-0 w-[170px]"
        } absolute left-[50%] translate-x-[-50%] top-0 font-title mx-auto text-center text-white-001 intro-animation transition-all`}
      >
        <h1
          className={`${
            step === "intro" ? "translate-y-full" : "mx-auto translate-y-[16px]"
          } intro-animation`}
        >
          <span
            className={`${
              step === "intro" ? "text-[110px]" : "text-[14.54px]"
            } inline-block align-middle tracking-1 intro-animation`}
          >
            Front-End Developer
          </span>
          <span
            className={`${
              step === "intro"
                ? "text-stroke-intro mt-[30px] text-[200px]"
                : "text-stroke text-[22.37px]"
            } inline-block align-middle tracking-1 intro-animation`}
          >
            Cho Seong Ju
          </span>
        </h1>
      </div>
    </header>
  );
}
