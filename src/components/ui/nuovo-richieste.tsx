import RequestList from "../../Data/request-list-data";
import NewRequestList from "./new-request-list";
import Warning from '/images/warning.svg'
export default function NouvoRichieste() {
  return (
    <div className="flex flex-col sm:my-10 px-4 sm:pl-7">
      {/* Heading */}
      <h1 className="text-[20px] text-[#29235C] font-semibold">
        Nuove richieste
      </h1>
      {/* New Requests Cards  */}
      <div className="mt-8">
        <div className="grid grid-cols-6 block sm:hidden justify-between items-center w-full">
          <div className="col-span-3">
            <p className="text-[16px] opacity-[20%] text-[#29235C]">Nome</p>
          </div>
          <div className="flex flex-row justify-between w-full col-span-3 items-center">
            <p className="text-[16px] opacity-[20%] text-[#29235C]">Dati</p>
            <p className="text-[16px] opacity-[20%] text-[#29235C]">Ospiti</p>
          </div>
        </div>
        {RequestList.length > 0 ? (
          <NewRequestList />
        ) : 
        <div className="relative flex flex-row my-5 sm:my-0 items-center justify-center gap-4 rounded-[300px] w-full h-[70px] sm:h-[100px]">
        <div className="absolute inset-0 bg-[#E72687] opacity-10 rounded-full"></div>
        <img className="min-w-[20px] max-w-[30px] h-auto z-10" src={Warning} alt="warning" />
        <p className="text-[12px] font-poppins text-black z-10">Non ci sono nuove richieste</p>
      </div>
        }
        
      </div>
    </div>
  );
}
