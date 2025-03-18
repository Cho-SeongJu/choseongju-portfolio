import CrewPlay from "./crew-play";
import FootStep from "./foot-step";
import Jurin from "./jurin";
import MentorMate from "./mentor-mate";

export default function SideProject() {
  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-center">
      <CrewPlay />
      <Jurin />
      <MentorMate />
      <FootStep />
    </section>
  );
}
