import Divider from "@/components/divider";
import TechStackTag from "@/components/tech-stack-tag";
import useObserver from "@/hooks/useObserver";
import { Dispatch, RefObject, SetStateAction } from "react";

const TECH_STACK = ["JavaScript", "JSP", "CSS", "WebSquare", "SVN", "Jira"];

interface IExperience2024Props {
  readonly experience2022Ref: RefObject<HTMLDivElement | null>;
  readonly setExperienceYear: Dispatch<SetStateAction<number>>;
}

export default function Experience2022({
  experience2022Ref,
  setExperienceYear,
}: IExperience2024Props) {
  useObserver({
    targetRef: experience2022Ref,
    changeStep: "experience",
    threshold: 0.8,
    setExperienceYear,
    experienceYear: 2022,
  });

  return (
    <div
      ref={experience2022Ref}
      className="w-[878px] pb-[332px]"
    >
      <h4 className="text-white-002 font-bold text-[30px] mb-[16px]">
        와이앤씨스마트앱스 (Y&C SmartApps)
      </h4>
      <div className="flex justify-between text-[24px]">
        <span className="font-medium text-white-002">
          기업사업 개발 1팀 • 사원
        </span>
        <span className="text-white-006">2022.05.01 ~ 2022.12.31</span>
      </div>
      <Divider />
      <div className="text-white-004 flex flex-col font-medium text-[20px] leading-140 mb-[50px]">
        <div className="flex mb-[8px]">
          <span className="mx-[12.5px]">•</span>
          <span>유가 증권 페이지 UI 구현 및 CRUD 기능 구현</span>
        </div>
        <div className="flex mb-[8px]">
          <span className="mx-[12.5px]">•</span>
          <span>물품 구매 견적서 등록, 조회 페이지 UI 구현 및 기능 개발</span>
        </div>
        <div className="flex mb-[8px]">
          <span className="mx-[12.5px]">•</span>
          <span>파트너 포탈 견적 확인 페이지 UI 구현 및 기능 개발</span>
        </div>
        <div className="flex mb-[8px]">
          <span className="mx-[12.5px]">•</span>
          <span>
            물품 배송 전 공장 별 가용 배차 조회 페이지 UI 구현 및 기능 개발
          </span>
        </div>
        <div className="flex mb-[8px]">
          <span className="mx-[12.5px]">•</span>
          <span>오랫동안 유지 보수되지 않은 페이지 코드 및 기능 정리</span>
        </div>
        <div className="flex mb-[8px]">
          <span className="mx-[12.5px]">•</span>
          <span>
            레거시 JSP 프로젝트를 WebSquare + JavaScript로 마이그레이션
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
