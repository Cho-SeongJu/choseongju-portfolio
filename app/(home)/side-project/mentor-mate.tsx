import TechStackTag from "@/components/tech-stack-tag";
import YoutubeVideo from "@/components/youtube-video";
import PlayIcon from "@/public/svg/play.svg";
import Link from "next/link";

const TECH_STACK = [
  "React",
  "TypeScript",
  "Recoil",
  "React-Query",
  "TailwindCSS",
  "Vite",
  "AWS (S3 + CloudFront)",
];

export default function MentorMate() {
  return (
    <div className="flex md:flex-row xs:flex-col justify-between xl:w-[1520px] lg:w-[1139px] md:w-[800px] sm:w-[400px] xs:w-[320px] min-h-screen pt-[160px] pb-[96px] md:px-0 xs:px-[10px]">
      <div className="flex flex-col xl:w-[622px] lg:w-[594px] md:w-[383px] xs:w-full">
        <div>
          <div className="flex flex-col text-white-002">
            <h2 className="font-bold lg:text-[35px] xs:text-[22px] mb-[10px]">
              멘토메이트 (MENTORMATE)
            </h2>
            <span className="font-medium lg:text-[22px] xs:text-[18px]">
              자기주도 학습러를 위한 온라인 멘토 & 멘티 매칭 서비스
            </span>
          </div>
          <div className="lg:text-[15px] xs:text-[14px] text-white-006 flex flex-col mt-[20px] mb-[30px]">
            <span className="mb-[6px]">Front-End 2명 • Back-End 3명</span>
            <span>2023.10.02 - 2023.11.09</span>
          </div>
          <div className="text-white-004 font-medium lg:text-[14px] xs:text-[12px]">
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                프로젝트 주제 선정, 개발 기간, 와이어프레임, 로고 등 프로젝트의
                전체적인 기획을 담당
              </span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                SSE를 사용하여 멘토링 결제를 했을 때 해당 멘토링의 멘토에게
                실시간으로 알림이 갈 수 있도록 기능을 구현
              </span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                실시간으로 대화하고 상호작용할 수 있도록 하기 위해 WebSocket을
                사용하여 실시간 채팅 기능을 구현
              </span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>네이버, 카카오 소셜 로그인 기능 구현</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>좋아요, 댓글 기능 구현</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>멘토링 / 멘토 / 커뮤니티 페이지 UI 및 기능 구현</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>AWS의 S3와 CloudFront를 사용하여 프로젝트 배포</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                TailwindCSS를 사용하여 UI 스타일링 및 반응형 디자인 적용
              </span>
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
        <YoutubeVideo videoId="lDah3XZUDsk" />
        <div className="flex items-center justify-center mt-[30px]">
          <Link
            href="https://github.com/MentoMate/mentomate-FE"
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
