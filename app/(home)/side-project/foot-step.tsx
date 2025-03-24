import TechStackTag from "@/components/tech-stack-tag";
import YoutubeVideo from "@/components/youtube-video";
import PlayIcon from "@/public/play.svg";
import Link from "next/link";

const TECH_STACK = [
  "React",
  "TypeScript",
  "Recoil",
  "Kakao Map API",
  "Vite",
  "Vercel",
  "TailwindCSS",
];

export default function FootStep() {
  return (
    <div className="flex mx-auto justify-between w-screen min-h-screen pt-[155px] px-[200px] pb-[96px]">
      <div className="flex flex-col justify-between w-[622px]">
        <div>
          <div className="flex flex-col text-white-002">
            <h2 className="font-bold text-[35px] mb-[10px]">
              발자국 (FOOT-STEP)
            </h2>
            <span className="font-medium text-[22px]">
              지인들과 실시간으로 계획과 기록할 수 있는 여행 일정 서비스
            </span>
          </div>
          <div className="text-[15px] text-white-006 flex flex-col mt-[20px] mb-[30px]">
            <span className="mb-[6px]">Front-End 2명 • Back-End 3명</span>
            <span>2023.06.27 - 2023.08.02</span>
          </div>
          <div className="text-white-004 font-medium text-[14px]">
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                KakaoMap API로 장소 검색 기능, 검색 결과 마커 표시, 마커 클릭 시
                장소 정보가 오버레이가 표시 되도록 구현
              </span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                WebSocket을 활용한 실시간 단체 채팅 및 목적지 공유 기능 구현
              </span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>여행 일정 요약 내용 카카오톡 나에게로 전송 기능 구현</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                랜딩 / 일정 공유방 검색(입장) 페이지 / 일정 공유방 페이지 UI 및
                기능 구현
              </span>
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
        <YoutubeVideo videoId="hgY-RED-7X8" />
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
