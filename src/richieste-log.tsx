import AsideBar from "./components/ui/aside-bar";
import ClientDataList from "./components/ui/client-data-list";
import NuovoRichieste from "./components/ui/nuovo-richieste";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { clientListData } from "./Data/client-list-data";
export default function RichiesteLog() {
  return (
    <div className="h-full w-full max-w-[1240px] mx-auto relative">
      <div className="flex flex-col sm:grid sm:grid-cols-18 w-full max-w-full h-full">
        <div className="flex flex-col sm:col-span-5">
          <AsideBar />
        </div>
        <div className="flex flex-col col-span-13">
          <NuovoRichieste />
          {/* Richieste Preventivo */}
          <div className=" w-full max-w-full pb-12 sm:pb-0 ml-0 sm:ml-8 rounded-t-[32px] min-h-[400px] bg-[#29235C]">
            <div className="flex flex-col">
              <div className="flex flex-col sm:flex sm:flex-row justify-between px-6 py-6">
                <div className="flex flex-row justify-between items-center gap-16 leading-normal text-white text-[19px] tracking-wider font-semibold">
                  <h1>Richieste Preventivo</h1>
                  <h1>n°340</h1>
                </div>
                {/* select box div */}
                <div className="flex flex-row justify-between mt-5 sm:mt-0 items-center ">
                  <Select>
                    <SelectTrigger className="w-full sm:w-[250px] border-[1px] border-white-[10px] rounded-md">
                      <SelectValue
                        className="opacity-[100%]"
                        placeholder="Tutte"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* Table Heading */}
              <div className="grid grid-cols-12 justify-between items-center opacity-[50%] leading-normal w-full max-w-full text-white text-[15px] my-6 px-6">
                {/* col 1 */}
                <div className="flex flex-row col-span-4 sm:col-span-3 min-w-[80px] max-w-[100px]">
                  <p>Cliente</p>
                </div>
                {/* col 2 */}
                <div className="flex flex-row col-span-4 sm:col-span-6 justify-center gap-14 w-full items-center">
                  <p>Data</p>
                  <p className="hidden sm:block">N° Ospiti</p>
                  <p className="hidden sm:block">Costo</p>
                </div>
                {/* col 3 */}
                <div className="flex flex-row col-span-4 sm:col-span-3 justify-center">
                  Stato
                </div>
              </div>
            </div>
            {clientListData.length !== 0 ? (
              <ClientDataList />
            ) : (
              <div className="flex flex-row">
                <p>No data available</p>
              </div>
            )}
          </div>
        </div>
        {/* divider line */}
        <div className="absolute hidden sm:block inset-y-0 left-[calc(100%/18*5)] w-[2px] bg-[#E5E5E5]"></div>
        {/* Richieste Preventivo */}
      </div>
    </div>
  );
}
