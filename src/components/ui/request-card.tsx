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
      className="flex lg:flex-row sm:items-center gap-2 sm:flex-col py-4 w-full justify-around cursor-pointer px-5 rounded-3xl border border-1px border-[#EDEDED]"
      style={{ borderColor: borderColor }}
      onClick={onClick}
    >
      <img className="max-w-[45px]" src={image}></img>
      <div className="flex flex-col gap-2 lg:items-start sm:flex sm:items-center">
        <h1 className="text-black text-[12px] lg:text-[16px] text-center lg:text-start font-semibold">{heading}</h1>
        <p className="opacity-[60%] text-center lg:text-start text-[11px] lg:text-[12px] text-black break-words max-w-[200px]">
          {description}
        </p>
      </div>
    </div>
  );
}
