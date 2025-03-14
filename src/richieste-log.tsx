import AsideBar from "./components/ui/aside-bar";
import NuovoRichieste from "./components/ui/nuovo-richieste";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
export default function RichiesteLog() {
  return (
    <div className="h-full w-full max-w-[1240px] mx-auto relative">
      <div className="grid grid-cols-18 w-full h-full relative">
        <div className="flex flex-col col-span-5">
          <AsideBar />
        </div>
        <div className="flex flex-col col-span-13">
          <NuovoRichieste />
        </div>
        {/* divider line */}
        <div className="absolute inset-y-0 left-[calc(100%/18*5)] w-[2px] bg-[#E5E5E5]"></div>
        {/* Richieste Preventivo */}
        <div className="absolute md:left-[365px] top-90 rounded-t-[32px] w-full md:w-[72%] min-h-[400px] bg-[#29235C]">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between w-full px-6 py-6">
              <div className="flex flex-row justify-between items-center gap-16 leading-normal text-white text-[19px] tracking-wider font-semibold">
                <h1>Richieste Preventivo</h1>
                <h1>n°340</h1>
              </div>
              {/* select box div */}
              <div className="flex flex-row justify-between items-center ">
                <Select>
                  <SelectTrigger className="w-[250px] border-[1px] border-white-[10px] rounded-md">
                    <SelectValue placeholder="Tutte" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-cols-12 justify-between items-center opacity-[50%] leading-normal text-white text-[15px] mx-10">
              <div className="flex flex-row col-span-2">
                <p>Cliente</p>
              </div>
              <div className="flex flex-row col-span-7 gap-16 justify-between items-center">
                <p>Data</p>
                <p>N° Ospiti</p>
                <p>Costo</p>
              </div>
              <div className="col-span-2">
                Stato
              </div>
            </div>
            <div className="flex flex-cols-12 justify-between items-center leading-normal text-white text-[15px] mx-10 my-4">
              <div className="flex flex-row col-span-2">
                <p className="max-w-[100px]">Marco Rossi</p>
              </div>
              <div className="flex flex-row col-span-7 gap-16 justify-between">
                <p>12/05</p>
                <p>90 Ospiti</p>
                <p>120,00 €</p>
              </div>
              <div className="col-span-3">
                <img src="/images/calanderclock.svg" alt="arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
