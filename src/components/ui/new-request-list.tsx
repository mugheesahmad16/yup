import { Button } from "./button";
import RequestList from "../../Data/request-list-data";

export default function NewRequestList() {
  return (
    <>
        {/* New Requests Cards  */}
        {RequestList.map((request) => (
      <div>
          <div className="grid grid-cols-12 justify-between items-center w-full">
            {/* Name */}
            <div className="flex flex-row col-span-3 gap-3 items-center my-4">
              <img src="/images/eclipse.svg" alt="arrow-left" />
              <h1 className="text-[16px] font-semibold text-[#29235C]">
                {request.name}
              </h1>
            </div>
            {/* Date */}
            <div className="flex flex-row col-span-6 gap-14 justify-center items-center">
              <p className="text-[16px] text-[#29235C]">{request.date}</p>
              <p className="text-[16px] text-[#29235C]">{request.guest}</p>
              <p className="text-[16px] text-[#29235C]">{`${request.price} €`}</p>
            </div>
            {/* Button */}
            <div className="flex flex-row col-span-3 justify-end items-center gap-3">
              <Button
                className="rounded-2xl h-7 text-white font-light text-[12px] text-white bg-[#E72687] border-none"
                variant="outline"
                size="sm"
              >
                Vedi richiesta
              </Button>
            </div>
          </div>
        <hr className="w-full border-[1px] h-0 border-[#D9D9D9] opacity-[40%]"></hr>
      </div>
        ))}
    </>
  );
}
