import { useState } from "react";
import Skills from "./skills";
import StyleAndOther from "./style-and-other";

type TType = "skills" | "styleAndOther";

export default function TechStack() {
  const [selectedType, setSelectedType] = useState<TType>("styleAndOther");

  return (
    <section className="flex flex-col justify-center items-center w-screen min-h-screen text-white-002 pt-[124px] px-[200px] pb-[175px]">
      <h2 className="font-bold text-[50px] mb-[65px]">Skill</h2>
      <div className="flex w-[1520px]">
        <Skills
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
        <StyleAndOther
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      </div>
    </section>
  );
}
