import Scroll from "@/components/scroll";

export default function AboutMeDeveloper() {
  return (
    <>
      <section className="flex items-center justify-center h-screen w-screen">
        <div className="flex flex-col text-white-002 font-bold">
          <div className="flex mb-[24px] items-center">
            <span className="text-[60px]">저는</span>
            <div className="px-[28px] h-[90px] about-me-border mx-[18px] bg-gray-001 overflow-hidden">
              <div className="flex flex-col justify-start items-center marquee">
                <span className="text-[45px] my-[16px]">
                  비즈니스 관점으로 고민하는
                </span>
                <span className="text-[45px] my-[16px]">
                  작업의 목적을 이해하는
                </span>
                <span className="text-[45px] my-[10px]">주도적인</span>
                <span className="text-[45px] my-[10px]">
                  코드의 일관성을 유지하는
                </span>
                <span className="text-[45px] my-[10px]">성장하는</span>
              </div>
              <div className="flex flex-col justify-start items-center marquee">
                <span className="text-[45px] my-[16px]">
                  비즈니스 관점으로 고민하는
                </span>
                <span className="text-[45px] my-[16px]">
                  작업의 목적을 이해하는
                </span>
                <span className="text-[45px] my-[10px]">주도적인</span>
                <span className="text-[45px] my-[10px]">
                  코드의 일관성을 유지하는
                </span>
                <span className="text-[45px]  my-[10px]">성장하는</span>
              </div>
              <div className="flex flex-col justify-start items-center marquee">
                <span className="text-[45px] my-[16px]">
                  비즈니스 관점으로 고민하는
                </span>
                <span className="text-[45px] my-[16px]">
                  작업의 목적을 이해하는
                </span>
                <span className="text-[45px]  my-[10px]">주도적인</span>
                <span className="text-[45px] my-[10px]">
                  코드의 일관성을 유지하는
                </span>
                <span className="text-[45px]  my-[10px]">성장하는</span>
              </div>
            </div>
            <span className="text-[60px]">개발자로</span>
          </div>
          <span className="text-[60px] text-center">
            완성도 높은 서비스를 개발합니다
          </span>
        </div>
      </section>
      <Scroll />
    </>
  );
}
