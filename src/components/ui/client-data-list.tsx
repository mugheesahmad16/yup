import { clientListData } from "../../Data/client-list-data"
export default function ClientDataList() {
  return (
    <div>
      {clientListData.map((data, index) => (
        <div key={index}>
          {/* Table Row */}
          <div className="grid grid-cols-12 w-full justify-between items-center leading-normal text-white text-[15px] px-6 my-4">
            {/* col 1 */}
            <div className="flex flex-row col-span-4 min-w-[20px] max-w-[100px] ">
              <p className="">{data.name}</p>
            </div>
            {/* col 2 */}
            <div className="flex flex-col sm:flex sm:flex-row col-span-5 gap-0 sm:gap-14 items-center">
              <p>{data.date}</p>
              <p>{data.guests} Ospiti</p>
              <p>{data.price} €</p>
            </div>
            {/* col 3 */}
            <div className="flex flex-row col-span-3 justify-center">
              <a href="">
              <img src={data.image} alt="arrow-right" />
              </a>
            </div>
          </div>
          <hr className="w-full border-[1px] h-0 border-[#D9D9D9] opacity-[5%]"></hr>
        </div>
      ))}
    </div>
  );
}