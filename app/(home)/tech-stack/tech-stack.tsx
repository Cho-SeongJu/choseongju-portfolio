import { useState } from "react";
import Skills from "./skills";
import StyleAndOther from "./style-and-other";

type TType = "skills" | "styleAndOther";

export default function TechStack() {
  const [selectedType, setSelectedType] = useState<TType>("styleAndOther");

  return (
    <section className="flex flex-col justify-center items-center w-screen h-screen text-white-002">
      <h2 className="font-bold text-[50px] mb-[65px]">Skill</h2>
      <div className="flex">
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
