import PlayIcon from "@/public/play.svg";

export default function ViewText() {
  return (
    <div className="flex justify-center py-[42.5px] w-[326px]">
      <span className="text-gray-002">View</span>
      <div className="w-[24px] h-[24px] flex items-center justify-center ml-[6px]">
        <PlayIcon />
      </div>
    </div>
  );
}
