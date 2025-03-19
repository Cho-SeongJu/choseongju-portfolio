import TechStackTag from "@/components/tech-stack-tag";
import YoutubeVideo from "@/components/youtube-video";
import PlayIcon from "@/public/play.svg";
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
    <div className="w-screen min-h-screen flex mx-auto justify-between pt-[80px] px-[200px] pb-[101px]">
      <div className="flex flex-col justify-between w-[622px]">
        <div>
          <div className="flex flex-col text-white-002">
            <h2 className="font-bold text-[35px] mb-[10px]">
              멘토메이트 (MENTORMATE)
            </h2>
            <span className="font-medium text-[22px]">
              자기주도 학습러를 위한 온라인 멘토 & 멘티 매칭 서비스
            </span>
          </div>
          <div className="text-[15px] text-white-006 flex flex-col mt-[20px] mb-[30px]">
            <span className="mb-[6px]">Front-End 2명 • Back-End 3명</span>
            <span>2023.10.02 - 2023.11.09</span>
          </div>
          <div className="text-white-004 font-medium text-[14px]">
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
        <div className="mt-[40px]">
          {TECH_STACK.map((stack, index) => (
            <TechStackTag
              key={stack}
              text={stack}
              isNotLastIndex={index !== TECH_STACK.length}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <YoutubeVideo videoId="lDah3XZUDsk" />
        <div className="flex items-center justify-center mt-[30px]">
          <Link
            href="https://github.com/JurinApp/FE_REPO"
            target="_blank"
            className="text-white-002 text-[18px] font-medium border-b border-white-002"
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
