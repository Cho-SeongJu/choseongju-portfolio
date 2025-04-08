import Hamburger from "@/public/svg/hamburger.svg";

export default function MenuToggle() {
  return (
    <div className="w-[24px] h-[24px] lg:hidden xs:flex justify-center items-center sm:mr-[40px] xs:mr-[10px]">
      <Hamburger className="w-[16px] h-[10px]" />
    </div>
  );
}
