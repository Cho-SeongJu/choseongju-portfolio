import useObserver from "@/hooks/useObserver";
import { TStep } from "@/interface/common";
import { Dispatch, RefObject, SetStateAction } from "react";

interface IAboutMeProps {
  readonly targetRef: RefObject<HTMLElement | null>;
  readonly setStep: Dispatch<SetStateAction<TStep>>;
}

export default function AboutMe({ targetRef, setStep }: IAboutMeProps) {
  useObserver({ targetRef, changeStep: "about", setStep, threshold: 0.8 });

  return (
    <>
      <section
        ref={targetRef}
        className="text-white-002 w-screen h-screen flex items-center justify-center"
      >
        <div className="flex flex-col text-center xl:w-[789px] md:w-[657px] sm:w-[400px] xs:w-[320px]">
          <div className="flex overflow-hidden mx-auto">
            <span className="font-bold xl:text-[80px] md:text-[60px] sm:text-[40px] xs:text-[28px] fade-up-animation opacity-0">
              안녕하세요!
            </span>
          </div>
          <div className="mt-[24px] xl:text-[30px] md:text-[25px] sm:text-[18px] xs:text-[14px] leading-150 flex flex-col font-medium">
            <div className="flex overflow-hidden mx-auto">
              <span className="fade-up-animation opacity-0">
                주도적이고 꾸준히 성장하는 개발자가 되기 위해 노력하는
              </span>
            </div>
            <div className="flex overflow-hidden mx-auto">
              <span className="fade-up-animation opacity-0">
                신입 프론트엔드 개발자 조성주입니다.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
