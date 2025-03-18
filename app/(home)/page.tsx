"use client";

import Header from "@/app/(home)/header";
import { useEffect, useState } from "react";
import AboutMe from "./about-me/about-me";
import AboutMeDeveloper from "./about-me/about-me-developer";
import Experience2021 from "./experience/experience-2021";
import Experience2022 from "./experience/experience-2022";
import Experience2024 from "./experience/experience-2024";
import SideProject from "./side-project/side-project";
import TechStack from "./tech-stack/tech-stack";

export default function Home() {
  const [isIntro, setIsIntro] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsIntro(false);
    }, 1000);
  }, []);

  return (
    <>
      <Header isIntro={isIntro} />
      {!isIntro && (
        <>
          <AboutMe />
          <AboutMeDeveloper />
          <Experience2024 />
          <Experience2022 />
          <Experience2021 />
          <TechStack />
          <SideProject />
        </>
      )}
    </>
  );
}
