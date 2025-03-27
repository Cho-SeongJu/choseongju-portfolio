import useObserver from "@/hooks/useObserver";
import { TStep } from "@/interface/common";
import { Dispatch, RefObject, SetStateAction } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

interface IAboutMeProps {
  readonly targetRef: RefObject<HTMLElement | null>;
  readonly setStep: Dispatch<SetStateAction<TStep>>;
}

export default function AboutMeDeveloper({
  targetRef,
  setStep,
}: IAboutMeProps) {
  SwiperCore.use([Autoplay]);

  useObserver({ targetRef, changeStep: "about", setStep, threshold: 0.8 });

  return (
    <section
      ref={targetRef}
      className="flex items-center justify-center h-screen w-screen"
    >
      <div className="flex flex-col text-white-002 font-bold">
        <div className="flex mb-[24px] items-center">
          <span className="text-[60px]">저는</span>
          <Swiper
            className="w-[550px] px-[28px] h-[90px] about-me-border bg-gray-001 mx-[18px]!"
            direction="vertical"
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            loop
          >
            <SwiperSlide>
              <span className="text-[45px] my-[16px] flex justify-center items-center">
                비즈니스 관점으로 고민하는
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className="text-[45px] my-[16px] flex justify-center items-center">
                작업의 목적을 이해하는
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className="text-[45px] my-[16px] flex justify-center items-center">
                주도적인
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className="text-[45px] my-[16px] flex justify-center items-center">
                코드의 일관성을 유지하는
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className="text-[45px] my-[16px] flex justify-center items-center">
                성장하는
              </span>
            </SwiperSlide>
          </Swiper>
          <span className="text-[60px]">개발자로</span>
        </div>
        <span className="text-[60px] text-center">
          완성도 높은 서비스를 개발합니다
        </span>
      </div>
    </section>
  );
}
