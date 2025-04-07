import Divider from "@/components/divider";
import TechStackTag from "@/components/tech-stack-tag";
import useObserver from "@/hooks/useObserver";
import { Dispatch, RefObject, SetStateAction } from "react";

const TECH_STACK = ["JavaScript", "JSP", "CSS", "WebSquare", "SVN", "Jira"];

interface IExperience2024Props {
  readonly experience2022Ref: RefObject<HTMLDivElement | null>;
  readonly setExperienceYear: Dispatch<SetStateAction<number>>;
  readonly isVisible: boolean;
}

export default function Experience2022({
  experience2022Ref,
  setExperienceYear,
  isVisible,
}: IExperience2024Props) {
  useObserver({
    targetRef: experience2022Ref,
    changeStep: "experience",
    threshold: 0.3,
    rootMargin: "60px 0px 60px 0px",
    setExperienceYear,
    experienceYear: 2022,
  });

  return (
    <>
      <h3
        className={`md:hidden sm:block font-title text-white-002 xl:text-[160px] lg:text-[100px] sm:text-[60px] xs:text-[30px] leading-none xs:mb-[40px] md:mb-0  ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[100px]"
        } duration-[400ms] delay-100 ease-in`}
      >
        2022
      </h3>
      <div
        ref={experience2022Ref}
        className={`pb-[200px] ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[100px]"
        } duration-[400ms] delay-100 ease-in`}
      >
        <h4 className="text-white-002 font-bold lg:text-[30px] xs:text-[20px] mb-[16px]">
          와이앤씨스마트앱스 (Y&C SmartApps)
        </h4>
        <div className="flex justify-between lg:text-[24px] sm:text-[18px] xs:text-[14px]">
          <span className="font-medium text-white-002">
            기업사업 개발 1팀 • 사원
          </span>
          <span className="text-white-006">2022.05.01 ~ 2022.12.31</span>
        </div>
        <Divider />
        <div className="text-white-004 flex flex-col font-medium lg:text-[20px] sm:text-[17px] xs:text-[16px] leading-140 lg:mb-[50px] md:mb-[30px] xs:mb-[50px]">
          <div className="flex mb-[8px]">
            <span className="mx-[12.5px]">•</span>
            <span>
              고객사 목록 조회와 고객사 선택 시 고객사의 상세 정보와 고객사에
              배치된 사원을 조회할 수 있는
              <strong> 고객사 정보 조회 페이지 구현</strong>
            </span>
          </div>
          <div className="flex mb-[8px]">
            <span className="mx-[12.5px]">•</span>
            <span>
              보유 유가 증권을 관리할 수 있는
              <strong> 유가 증권 페이지 구현</strong>
            </span>
          </div>
          <div className="flex mb-[8px]">
            <span className="mx-[12.5px]">•</span>
            <span>
              구매할 품목들의 가격과 수량을 명시할 수 있고, 특이사항을 입력하여
              고객사에 견적을 전달 할 수 있는
              <strong> 견적 등록 페이지 구현</strong>
            </span>
          </div>
          <div className="flex mb-[8px]">
            <span className="mx-[12.5px]">•</span>
            <span>
              제시한 견적을 고객사가 검토하고, 필요하면 가격 수정 등의 협의를
              진행할 수 있도록 하는 <strong> 견적 관리 페이지 구현</strong>
            </span>
          </div>
          <div className="flex mb-[8px]">
            <span className="mx-[12.5px]">•</span>
            <span>
              물품 배송 전, 각 공장의 가용 배차 현황을 조회할 수 있는
              <strong> 가용 배차 현황 조회 페이지 구현</strong>
            </span>
          </div>
          <div className="flex mb-[8px]">
            <span className="mx-[12.5px]">•</span>
            <span>
              회원가입 된 사원 및 고객사들을 조회할 수 있고 관리 할 수 있는
              <strong> 회원 조회 및 관리 페이지 구현</strong>
            </span>
          </div>
          <div className="flex mb-[8px]">
            <span className="mx-[12.5px]">•</span>
            <span>
              사원의 부서를 변경할 수 있는
              <strong> 사원 부서 변경 페이지 구현</strong>
            </span>
          </div>
          <div className="flex mb-[8px]">
            <span className="mx-[12.5px]">•</span>
            <span>
              오랫동안 유지 보수되지 않은 페이지의
              <strong> 코드 및 기능 정리</strong>
            </span>
          </div>
          <div className="flex mb-[8px]">
            <span className="mx-[12.5px]">•</span>
            <span>
              레거시 JSP 프로젝트를
              <strong> WebSquare + JavaScript로 마이그레이션</strong>
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
    </>
  );
}
