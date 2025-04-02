interface ITechStackTagProps {
  readonly text: string;
  readonly isNotLastIndex: boolean;
}

export default function TechStackTag({
  text,
  isNotLastIndex,
}: ITechStackTagProps) {
  return (
    <div
      className={`px-[20px] lg:py-[11px] py-[10px] bg-gray-001 rounded-[100px] inline-block mb-[14px] ${
        isNotLastIndex && "mr-[14px]"
      }`}
    >
      <span className="text-white-002 text-[14px] font-medium">{text}</span>
    </div>
  );
}
