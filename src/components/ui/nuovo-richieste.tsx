import NewRequestList from "./new-request-list";
export default function NouvoRichieste() {
  return (
    <div className="flex flex-col my-10 pl-7">
      {/* Heading */}
      <h1 className="text-[20px] text-[#29235C] font-semibold">
        Nuove richieste
      </h1>
      {/* New Requests Cards  */}
      <div className="mt-8">
        <NewRequestList />
      </div>
    </div>
  );
}
