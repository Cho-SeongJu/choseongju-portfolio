export default function AboutMe() {
  return (
    <section className="text-white-002 w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col text-center w-[789px]">
        <div className="flex overflow-hidden mx-auto">
          <span className="font-bold text-[80px] fade-up-animation opacity-0">
            안녕하세요!
          </span>
        </div>
        <div className="mt-[24px] text-[25px] leading-150 flex flex-col">
          <div className="flex overflow-hidden mx-auto">
            <span className="fade-up-animation opacity-0">
              비즈니스 관점을 고려하며 효율적인 코드 구조를 고민하고,
            </span>
          </div>
          <div className="flex overflow-hidden mx-auto">
            <span className="fade-up-animation opacity-0">
              중복을 줄여 유지보수성을 높이는 프론트엔드 개발자 조성주입니다.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
