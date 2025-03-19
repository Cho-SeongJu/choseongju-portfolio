import { TStep } from "@/interface/common";
import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

interface IUseObserverProps {
  readonly targetRef: RefObject<HTMLElement | null>;
  readonly changeStep: TStep;
  readonly setStep: Dispatch<SetStateAction<TStep>>;
}

export default function useObserver({
  targetRef,
  changeStep,
  setStep,
}: IUseObserverProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log(changeStep);
          setStep(changeStep);
        }
      },
      { threshold: 0.2 }
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
  }, [changeStep, setStep, targetRef]);
}
