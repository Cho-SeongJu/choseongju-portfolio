import Divider from "@/components/divider";
import TechStackTag from "@/components/tech-stack-tag";
import useObserver from "@/hooks/useObserver";
import { Dispatch, RefObject, SetStateAction } from "react";

const TECH_STACK = ["JavaScript", "JSP", "CSS", "JQuery", "SVN"];

interface IExperience2021Props {
  readonly experience2021Ref: RefObject<HTMLDivElement | null>;
  readonly setExperienceYear: Dispatch<SetStateAction<number>>;
  readonly isVisible: boolean;
}

export default function Experience2021({
  experience2021Ref,
  setExperienceYear,
  isVisible,
}: IExperience2021Props) {
  useObserver({
    targetRef: experience2021Ref,
    changeStep: "experience",
    threshold: 0.8,
    setExperienceYear,
    experienceYear: 2021,
  });

  return (
    <div
      ref={experience2021Ref}
      className={`w-[878px] pb-[100px] ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[100px]"
      } duration-[400ms] delay-100 ease-in`}
    >
      <h4 className="text-white-002 font-bold text-[30px] mb-[16px]">
        조인트리 (JOINTREE)
      </h4>
      <div className="flex justify-between text-[24px]">
        <span className="font-medium text-white-002">SW개발팀 • 인턴</span>
        <span className="text-white-006">2021.08.01 ~ 2022.02.28</span>
      </div>
      <Divider />
      <div className="text-white-004 flex flex-col font-medium text-[20px] leading-140 mb-[50px]">
        <div className="flex mb-[8px]">
          <span className="mx-[12.5px]">•</span>
          <span>
            <strong>로그인 및 회원가입 페이지 구현</strong>
          </span>
        </div>
        <div className="flex mb-[8px]">
          <span className="mx-[12.5px]">•</span>
          <span>
            <strong>날짜 별 식단 표 조회 및 예약 페이지 구현</strong>
          </span>
        </div>
        <div className="flex mb-[8px]">
          <span className="mx-[12.5px]">•</span>
          <span>
            <strong>회원 정보 수정 페이지 구현</strong>
          </span>
        </div>
        <div className="flex mb-[8px]">
          <span className="mx-[12.5px]">•</span>
          <span>
            <strong>공지사항 조회 페이지 구현</strong>
          </span>
        </div>
      </div>
      <div>
        {TECH_STACK.map((stack, index) => (
          <TechStackTag
            key={stack}
            text={stack}
            isNotLastIndex={index !== TECH_STACK.length}
          />
        ))}
      </div>
    </div>
  );
}
