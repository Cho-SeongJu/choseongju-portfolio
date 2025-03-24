import { TStep } from "@/interface/common";
import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

interface IUseObserverProps {
  readonly targetRef: RefObject<HTMLElement | null>;
  readonly changeStep: TStep;
  readonly threshold: number;
  readonly setStep?: Dispatch<SetStateAction<TStep>>;
  readonly setExperienceYear?: Dispatch<SetStateAction<number>>;
  readonly experienceYear?: number;
}

export default function useObserver({
  targetRef,
  changeStep,
  threshold,
  setStep,
  setExperienceYear,
  experienceYear,
}: IUseObserverProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (setStep) {
            setStep(changeStep);
          }

          if (setExperienceYear && experienceYear) {
            setExperienceYear(experienceYear);
          }
        }
      },
      { threshold }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(targetRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeStep, setStep, targetRef, experienceYear]);
}
