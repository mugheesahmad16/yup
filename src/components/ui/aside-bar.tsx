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
    <div className="flex flex-col pt-10 pb-5 sm:py-10 px-4 sm:pr-5">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row w-full justify-between  sm:flex sm:flex-col gap-2">
          <h1 className="text-[26px] font-bold leading-5 font-Poppins tracking-[0px] text-[#29235C]">
            Luna Rossa
          </h1>
          <Button
                className="rounded-2xl block sm:hidden  h-7 text-white font-light text-[12px] text-white bg-[#E72687] border-none"
                variant="outline"
                size="sm"
              >
                Vedi richiesta
              </Button>
          <p className="text-[12px] text-black opacity-[60%] hidden invisible sm:visible ">
            Via De Gasperi,23 Salerno
          </p>
          <Button
            variant="destructive"
            className="h-6 hidden invisible sm:visible hover:bg-[#E72687] text-[#29235C] hover:text-white hover:border-white rounded-full cursor-pointer w-15 border border-black border-[1px] bg-gray-200 text-[#29235C] py-[-1px] text-[12px] mt-2"
          >
            Horeca
          </Button>
        </div>
        <div className="flex sm:flex flex-col gap-2 justify-center items-center cursor-pointer hidden sm:flex">
          <img src="/images/eye.svg"></img>
          <p className="text-[12px] text-[#E72687]">Anteprima</p>
        </div>
      </div>
      {/* Request card */}
      <div className="my-8 flex md:flex flex-col gap-5 hidden md:block ">
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
