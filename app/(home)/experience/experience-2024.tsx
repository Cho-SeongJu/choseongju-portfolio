import Divider from "@/components/divider";
import TechStackTag from "@/components/tech-stack-tag";
import useObserver from "@/hooks/useObserver";
import { Dispatch, RefObject, SetStateAction } from "react";

const TECH_STACK = [
  "React",
  "TypeScript",
  "Redux",
  "Redux-Saga",
  "React-Hook-Form",
  "Styled-Components",
  "Storybook",
  "Git",
  "BitBucket",
  "Jira",
];

interface IExperience2024Props {
  readonly experience2024Ref: RefObject<HTMLDivElement | null>;
  readonly setExperienceYear: Dispatch<SetStateAction<number>>;
  readonly isVisible: boolean;
}

export default function Experience2024({
  experience2024Ref,
  setExperienceYear,
  isVisible,
}: IExperience2024Props) {
  useObserver({
    targetRef: experience2024Ref,
    changeStep: "experience",
    threshold: 0.3,
    rootMargin: "60px 0px 60px 0px",
    setExperienceYear,
    experienceYear: 2024,
  });

  return (
    <>
      <h3
        className={`md:hidden sm:block font-title text-white-002 xl:text-[160px] lg:text-[100px] sm:text-[60px] xs:text-[45px] leading-none xs:mb-[40px] md:mb-0  ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[100px]"
        } duration-[400ms] delay-100 ease-in`}
      >
        2024
      </h3>
      <div
        ref={experience2024Ref}
        className={`pb-[200px] ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[100px]"
        } duration-[400ms] delay-100 ease-in`}
      >
        <h4 className="text-white-002 font-bold lg:text-[30px] xs:text-[20px] mb-[16px]">
          키클롭스(CYCLOPS)
        </h4>
        <div className="flex justify-between lg:text-[24px] sm:text-[18px] xs:text-[16px]">
          <span className="font-medium text-white-002">FE팀 개발 • 인턴</span>
          <span className="text-white-006">2024.07.01 ~ 2024.10.04</span>
        </div>
        <Divider />
        <div className="text-white-004 flex flex-col lg:text-[20px] sm:text-[16px] xs:text-[16px] leading-140 lg:mb-[50px] md:mb-[30px] xs:mb-[50px]">
          <div className="flex mb-[8px]">
            <span className="mx-[12.5px]">•</span>
            <span>
              로컬 스토리지를 이용하여 가장 최근에 사용된 소셜 로그인 수단을
              확인할 수 있는 직전 소셜 로그인 확인 기능 개발
            </span>
          </div>
          <div className="flex mb-[8px]">
            <span className="mx-[12.5px]">•</span>
            <span>
              Publ 디자인 시스템의 신규 컴포넌트를 개발하고, 기존 컴포넌트에
              새로운 옵션을 추가하여 기능을 확장
            </span>
          </div>
          <div className="flex mb-[8px]">
            <span className="mx-[12.5px]">•</span>
            <span>
              Publ 디자인 시스템의 기존 컴포넌트(Version 1)를 최신
              컴포넌트(Version 2)로 전환하는 Publ 디자인 시스템 컴포넌트 버전
              업그레이드 경험
            </span>
          </div>
          <div className="flex mb-[8px]">
            <span className="mx-[12.5px]">•</span>
            <span>
              중복된 코드를 줄이고, 리스트 기반 화면을 최적화하기 위해 Custom
              Pagination Hook을 개발
            </span>
          </div>
          <div className="flex mb-[8px]">
            <span className="mx-[12.5px]">•</span>
            <span>
              페이징을 사용하는 모든 페이지에서 사용자가 직접 URL을 입력하는
              것을 방지하기 위해, 현재 위치(Offset)와 추가로 표시할 콘텐츠
              수(Limit)의 유효성을 검사하는 Custom Hook을 개발
            </span>
          </div>
          <div className="flex mb-[8px]">
            <span className="mx-[12.5px]">•</span>
            <span>
              타임 라인의 레이아웃을 여러 형식으로 자유롭게 설정할 수 있는
              레이아웃 변경 기능 추가
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>충전형 포인트 관리 시스템 개발</span>
            </div>
            <div className="flex flex-col ld:text-[17px] xs:text-[12px] leading-160 font-medium text-white-006 px-[33px]">
              <span>
                사업자가 포인트 시스템을 쉽게 이해하고 활용할 수 있도록 돕는
                프로모션 화면 개발
              </span>
              <span>
                사업자가 등록한 충전형 포인트 목록 조회 화면 및 포인트 등록/수정
                모달 기능 개발
              </span>
              <span>
                사업자가 채널에서 웹 충전 상품을 통해 충전된 충전 대금의 출금을
                publ에 신청하기 위한 티켓 수정 모달 및 기능 개발
              </span>
              <span>
                사업자가 충전형 포인트의 정책과 약관 정보 설정할 수 있는
                정책/약관 정보 설정 페이지 및 기능 개발
              </span>
              <span>
                사업자가 총 발행량, 총 소진량, 총 잔여량을 조회하는 포인트 발행
                현황 조회 페이지 및 기능 개발
              </span>
            </div>
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
