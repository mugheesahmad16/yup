import { Button } from "./button";
import RequestList from "../../Data/request-list-data";

export default function NewRequestList() {
  return (
    <>
      {/* New Requests Cards  */}
      {RequestList.map((request) => (
        <div>
          <div className="grid grid-cols-6 sm:grid sm:grid-cols-12 justify-between items-center w-full">
            {/* Name */}

            <div className="flex flex-col col-span-3 sm:flex sm:col-span-3 sm:gap-3  items-start my-4">
              {/* <div className="flex flex-col sm:flex sm:flex-row gap-2"> */}
              <p className="block sm:hidden text-[12px] text-[#E72687]">
                Luna Rosso
              </p>
              <div className="flex flex-row gap-1 sm:gap-3">
              <img
                src="/images/eclipse.svg"
                className=""
                alt="arrow-left"
              />
              {/* </div> */}
              <h1 className="text-[16px] font-semibold text-[#29235C]">
                {request.name}
              </h1>
              </div>
            </div>
            {/* Date */}
            <div className="flex flex-row col-span-3 sm:flex sm:col-span-6 w-full sm:gap-14 justify-between sm:justify-center items-center">
              <p className="text-[15px] sm:text-[16px] text-[#29235C]">{request.date}</p>
              <div className="flex flex-row">
                <p className="text-[16px] text-[#29235C]">{request.guest} </p>
                &nbsp;{" "}
                <label className="hidden sm:inline sm:block">Ospiti</label>
              </div>
              <p className="hidden sm:block text-[16px] text-[#29235C]">{`${request.price} €`}</p>
            </div>
            {/* Button */}
            <div className="hidden sm:block sm:flex  flex flex-row col-span-3 justify-end items-center gap-3">
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
