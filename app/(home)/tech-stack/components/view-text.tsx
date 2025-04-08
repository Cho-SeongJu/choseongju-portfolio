import PlayIcon from "@/public/svg/play.svg";

export default function ViewText() {
  return (
    <>
      <span className="text-gray-002">View</span>
      <div className="w-[24px] h-[24px] flex items-center justify-center ml-[6px]">
        <PlayIcon />
      </div>
    </>
  );
}
