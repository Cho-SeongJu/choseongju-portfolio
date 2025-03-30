import { TStep } from "@/interface/common";

interface ILogo {
  readonly step: TStep;
}

export default function Logo({ step }: ILogo) {
  return (
    <div
      className={`${
        step === "intro" ? "w-full pb-[60px]" : "pb-0 w-[170px]"
      } absolute left-[50%] translate-x-[-50%] top-0 font-title mx-auto text-center text-white-001 intro-animation transition-all`}
    >
      <h1
        className={`${
          step === "intro" ? "translate-y-[75%]" : "mx-auto translate-y-[16px]"
        } intro-animation`}
      >
        <span
          className={`${
            step === "intro" ? "text-[110px]" : "text-[14.54px]"
          } inline-block align-middle tracking-1 intro-animation`}
        >
          Front-End Developer
        </span>
        <span
          className={`${
            step === "intro"
              ? "text-stroke-intro mt-[30px] text-[200px]"
              : "text-stroke text-[22.37px]"
          } inline-block align-middle tracking-1 intro-animation`}
        >
          Cho Seong Ju
        </span>
      </h1>
    </div>
  );
}
