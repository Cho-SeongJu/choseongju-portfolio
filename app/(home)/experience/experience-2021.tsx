import Divider from "@/components/divider";
import TechStackTag from "@/components/tech-stack-tag";
import useObserver from "@/hooks/useObserver";
import { TStep } from "@/interface/common";
import { Dispatch, RefObject, SetStateAction } from "react";

interface IExperience2021Props {
  readonly targetRef: RefObject<HTMLElement | null>;
  readonly setStep: Dispatch<SetStateAction<TStep>>;
}

const TECH_STACK = ["JavaScript", "JSP", "CSS", "JQuery", "SVN"];

export default function Experience2021({
  targetRef,
  setStep,
}: IExperience2021Props) {
  useObserver({
    targetRef,
    changeStep: "experience",
    setStep,
  });

  return (
    <section
      ref={targetRef}
      className="flex items-center justify-center min-h-screen w-screen pt-[120px] px-[200px] pb-[455px]"
    >
      <div className="flex w-[1520px] justify-between">
        <h3 className="font-title text-white-002 text-[160px] leading-none">
          2021
        </h3>
        <div className="w-[878px] py-[30px]">
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
              <span>사용자 권한 기능 페이지 와이어 프레임 제작</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                사용자 권한 로그인, 회원 가입, 날짜 별 식단 표 조회 및 예약,
                회원 정보 수정 페이지 UI 구현 및 기능 개발
              </span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>사용자 예약 여부 확인 기능 개발</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>사용자 권한 페이지 기능 유지 보수</span>
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
      </div>
    </section>
  );
}
