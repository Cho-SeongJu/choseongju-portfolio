import TechStackTag from "@/components/tech-stack-tag";
import Image from "next/image";
import Link from "next/link";
import PlayIcon from "@/public/play.svg";

const TECH_STACK = [
  "React",
  "TypeScript",
  "Recoil",
  "React-Query",
  "TailwindCSS",
  "Vite",
  "AWS (S3 + CloudFront)",
];

export default function Jurin() {
  return (
    <div className="flex mx-auto justify-between w-screen h-screen pt-[75px] px-[200px] pb-[96px]">
      <div className="flex flex-col justify-between w-[622px]">
        <div>
          <div className="flex flex-col text-white-002">
            <h2 className="font-bold text-[35px] mb-[10px]">주린이를 부탁해</h2>
            <span className="font-medium text-[22px]">
              청소년을 위한 교육용 모의 주식 서비스
            </span>
          </div>
          <div className="text-[15px] text-white-006 flex flex-col mt-[20px] mb-[30px]">
            <span className="mb-[6px]">
              PM 2명 • UI/UX Designer 1명 • Front-End 2명 • Back-End 1명
            </span>
            <span>2023.12.01 - 2024.02.15</span>
          </div>
          <div className="text-white-004 font-medium text-[14px]">
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>프로젝트 초기 설정</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>코드 분할을 활용한 초기 로딩 속도 개선</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                useAxios, useObserver 등의 재사용이 가능한 Custom Hook 구현
              </span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                Axios의 Interceptor, Instance를 활용한 네트워크 모듈화
              </span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>react-router-dom을 활용하여 권한 별 라우팅 처리</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>선생님 및 학생 권한 페이지 구현</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                React Query의 useInfiniteQuery 함수를 사용한 무한 스크롤 기능
                구현
              </span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>
                chart.js를 사용한 일별 최고 구매가 및 수량 그래프 구현
              </span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>AWS의 S3와 CloudFront를 사용하여 프로젝트 배포</span>
            </div>
            <div className="flex mb-[8px]">
              <span className="mx-[12.5px]">•</span>
              <span>Recoil을 활용한 유저, 모달, 데이터 상태 관리</span>
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
        <Image
          alt="crew-play"
          src="/image/jurin.png"
          width={669}
          height={631}
        />
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
