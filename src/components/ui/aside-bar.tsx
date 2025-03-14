import { useState } from "react";
import RequestCard from "./request-card";
import Cards from "../../Data/request-card-data";
import { Button } from "./button";
export default function AsideBar() {
  const [selectCard, setSelectCard] = useState<number | null>(null);
  const handleClick = (index: number) => {
    setSelectCard(index);
  };
  return (
    <div className="flex flex-col  py-10 pr-5">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-[26px] font-bold leading-5 font-Poppins tracking-[0px] text-[#29235C]">
            Luna Rossa
          </h1>
          <p className="text-[12px] text-black opacity-[60%] ">
            Via De Gasperi,23 Salerno
          </p>
          <Button
            variant="destructive"
            className="h-6 hover:bg-[#E72687] text-[#29235C] hover:text-white hover:border-white rounded-full cursor-pointer w-15 border border-black border-[1px] bg-gray-200 text-[#29235C] py-[-1px] text-[12px] mt-2"
          >
            Horeca
          </Button>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <img src="/images/eye.svg"></img>
          <p className="text-[12px] text-[#E72687]">Anteprima</p>
        </div>
      </div>
      {/* Request card */}
      <div className="my-8 flex flex-col gap-5">
        {Cards.map((card, index) => (
          <RequestCard
            key={index}
            image={card.image}
            heading={card.heading}
            description={card.description}
            selected={selectCard === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
