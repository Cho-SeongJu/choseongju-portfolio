import TechStackTag from "@/components/tech-stack-tag";
import Image from "next/image";
import Link from "next/link";
import PlayIcon from "@/public/svg/play.svg";

const TECH_STACK = [
  "React",
  "TypeScript",
  "Jotai",
  "React-Query",
  "TailwindCSS",
  "Next.js",
  "Vercel",
];

export default function CrewPlay() {
  return (
    <div className="flex md:flex-row xs:flex-col justify-between xl:w-[1520px] lg:w-[1139px] md:w-[800px] sm:w-[400px] xs:w-[320px] min-h-screen pt-[160px] pb-[96px]">
      <div className="flex flex-col xl:w-[622px] lg:w-[594px] md:w-[383px] xs:w-full">
        <div>
          <div className="flex flex-col text-white-002">
            <h2 className="font-bold lg:text-[35px] xs:text-[22px] mb-[10px]">
              크루플레이 (CREWPLAY)
            </h2>
            <span className="font-medium lg:text-[22px] xs:text-[18px]">
              KBO 야구 팬들을 위한 통합 플랫폼
            </span>
          </div>
          <div className="lg:text-[15px] xs:text-[14px] text-white-006 flex flex-col mt-[20px] mb-[30px]">
            <span className="mb-[6px]">
              PM 2명 • UI/UX Designer 3명 • Front-End 1명 • Back-End 2명
            </span>
            <span>2024.12.01 - 2024.12.31</span>
          </div>
          <div className="text-white-004 font-medium lg:text-[14px] xs:text-[12px]">
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                Next.js middleware를 활용한 권한 별 페이지 접근 로직 구현
              </span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>Axios의 Interceptor를 활용하여 토큰 재발급 로직 구현</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                공통으로 사용 할 수 있는 useDrag, useModal 커스텀 훅 구현
              </span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                React-Hook-Form을 사용한 로그인, 회원가입 폼 컴포넌트 구현
              </span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>카카오 로그인 ( 소셜 로그인 ) 구현</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>TailwindCSS를 활용한 UI와 반응형 디자인 구현</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>Vercel을 사용한 서비스 배포</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>TailwindCSS를 활용한 UI와 반응형 디자인 구현</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                코드 스타일 일관성을 위한 ESLint, Prettier, Husky(Commitlint)를
                설정
              </span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                Kakao Map을 활용하여 구장 별 맛집 리스트를 마커로 표시
              </span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>이번 주 / 지난 / 다음 주 주제 살펴보기 페이지 구현</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>경기 일정, 경기 일정 상세 페이지 구현</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>오늘의 소식 페이지 구현</span>
            </div>
          </div>
        </div>
        <div className="mt-[40px] md:mb-0 xs:mb-[50px]">
          {TECH_STACK.map((stack, index) => (
            <TechStackTag
              key={stack}
              text={stack}
              isNotLastIndex={index !== TECH_STACK.length}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:mx-0 xs:mx-auto">
        <div className="flex flex-col xl:w-[669px] xl:h-[631px] lg:w-[500px] lg:h-[472px] sm:w-[350px] sm:h-[330.12px] xs:w-[300px] xs:h-[270px] relative">
          <Image
            alt="crew-play"
            src={`/image/crew-play.png?v=${new Date().getTime()}`}
            fill
          />
        </div>
        <div className="flex items-center justify-center mt-[30px]">
          <Link
            href="https://github.com/crew-play/crewplay-FE"
            target="_blank"
            className="text-white-002 lg:text-[18px] xs:text-[14px] font-medium border-b border-white-002"
          >
            GitHub
          </Link>
          <div className="w-[24px] h-[24px] flex items-center justify-center">
            <PlayIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
