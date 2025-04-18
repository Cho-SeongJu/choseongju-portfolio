import { TStep } from "@/interface/common";

interface ILogo {
  readonly step: TStep;
}

export default function Logo({ step }: ILogo) {
  return (
    <div
      className={`absolute top-0 lg:left-[50%] lg:translate-x-[-50%] font-title mx-auto text-center text-white-001 intro-animation transition-all 
        ${
          step === "intro"
            ? "w-full translate-y-[calc(60vh-50%)]"
            : "pb-0 sm:w-[170px] xs:w-[125.4px] sm:translate-y-[16px] xs:translate-y-[25px] lg:left-0 md:left-[calc(50vw-400px)] sm:left-[40px] xs:left-[10px]"
        }`}
    >
      <h1
        className={`${
          step !== "intro" && "mx-auto"
        } intro-animation flex flex-col`}
      >
        <span
          className={`${
            step === "intro"
              ? "xl:text-[110px] lg:text-[80px] md:text-[60px] sm:text-[40px] xs:text-[26px]"
              : "sm:text-[14.54px] xs:text-[10.72px]"
          } inline-block align-middle tracking-1 intro-animation`}
        >
          Front-End Developer
        </span>
        <span
          className={`${
            step === "intro"
              ? "text-stroke-intro sm:mt-[30px] xs:mt-[15px] xl:text-[200px] lg:text-[150px] md:text-[110px] sm:text-[60px] xs:text-[40px]"
              : "text-stroke sm:text-[22.37px] xs:text-[16.5]"
          } inline-block align-middle tracking-1 intro-animation`}
        >
          Cho Seong Ju
        </span>
      </h1>
    </div>
  );
}
