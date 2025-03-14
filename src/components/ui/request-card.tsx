interface CardProps {
  image: string;
  heading: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export default function RequestCard({
  image,
  heading,
  description,
  selected,
  onClick,
}: CardProps) {
  const borderColor = selected ? "#E72687" : "#EDEDED";

  return (
    <div
      className="flex flex-row py-4 w-full justify-around cursor-pointer px-5 rounded-3xl border border-1px border-[#EDEDED]"
      style={{ borderColor: borderColor }}
      onClick={onClick}
    >
      <img className="max-w-[45px]" src={image}></img>
      <div className="flex flex-col gap-2">
        <h1 className="text-black text-[16px] font-semibold ">{heading}</h1>
        <p className="opacity-[60%] text-[12px] text-black break-words max-w-[200px]">
          {description}
        </p>
      </div>
    </div>
  );
}
