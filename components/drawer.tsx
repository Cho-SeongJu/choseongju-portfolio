import { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import Exit from "@/public/svg/exit.svg";
import { IMenu, TStep } from "@/interface/common";
import Link from "next/link";
import LinkIcon from "./link-icon";

interface IDrawerProps {
  readonly setIsOpenDrawer: Dispatch<SetStateAction<boolean>>;
  readonly setStep: Dispatch<SetStateAction<TStep>>;
  readonly refObject: { [key: string]: RefObject<HTMLElement | null> };
}

export default function Drawer({
  setIsOpenDrawer,
  setStep,
  refObject,
}: IDrawerProps) {
  const MENU: IMenu = {
    section: [
      {
        text: "INTRO",
        step: "intro",
        onClick: () => {
          setStep("intro");
          setIsOpenDrawer(false);
        },
      },
      {
        text: "ABOUT",
        step: "about",
        onClick: () => {
          refObject.aboutMeSectionRef.current?.scrollIntoView({
            block: "start",
            inline: "start",
            behavior: "smooth",
          });
          setStep("about");
          setIsOpenDrawer(false);
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
          setIsOpenDrawer(false);
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
          setIsOpenDrawer(false);
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
          setIsOpenDrawer(false);
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

  useEffect(() => {
    const changeOpenDrawerState = () => {
      const currentWidth = window.innerWidth;

      if (currentWidth > 1199) {
        setIsOpenDrawer(false);
      }
    };

    window.addEventListener("resize", changeOpenDrawerState);

    return () => window.removeEventListener("resize", changeOpenDrawerState);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-screen h-screen absolute top-0 left-0 z-[1000] flex flex-col bg-black-001 text-white-003 text-[22px] font-semibold pb-[40px] overflow-y-auto scroll-none">
      <div className="h-[60px] flex items-center flex-row-reverse mr-[20px] sticky top-0 bg-black-001">
        <button
          type="button"
          onClick={() => setIsOpenDrawer(false)}
          className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
        >
          <Exit />
        </button>
      </div>
      <div className="mt-[10px] flex flex-col px-[20px] h-full">
        <ul>
          {MENU.section.map((sectionMenu) => (
            <li
              key={sectionMenu.text}
              onClick={sectionMenu.onClick}
              className="h-[60px] flex items-center cursor-pointer"
            >
              {sectionMenu.text}
            </li>
          ))}
        </ul>
        <div className="mt-[30px]">
          {MENU.link.map((linkMenu) => (
            <Link
              href={linkMenu.href}
              key={linkMenu.text}
              className="h-[60px] flex items-center cursor-pointer"
            >
              {linkMenu.text}
              <LinkIcon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
