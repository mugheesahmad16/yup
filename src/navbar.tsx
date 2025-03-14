import Menu from "./components/ui/menu";

export default function Navbar() {
  return (
    <div className="max-w-[1240px] mx-auto w-full h-[100px] grid grid-cols-7 sm:grid-cols-13 items-center justify-between sm:flex-row bg-white">
      <div className="flex col-span-3 sm:col-span-4 justify-start items-center">
        <img src="images/logo.svg" className="sm:max-w-[120px] max-w-[80px]" alt="logo"></img>
      </div>
      {/* menu bar */}
      <div className="flex sm:col-span-6 justify-center items-center">
        <Menu />
      </div>

      {/* right menu bar */}
      <div className="flex col-span-3 sm:col-span-3 justify-end items-center">
        <div className="flex flex-row col-span-3 items-center gap-5 rounded-full bg-transparent border border-gray-300 py-[2px] px-[3px]">
          <img
            className="cursor-pointer pl-3"
            src="images/bars.svg"
            alt="bars"
          ></img>
          <div className="relative flex flex-col cursor-pointer items-center justify-center max-w-[40px]">
            <img className="absolute" src="images/user.svg" alt="user"></img>
            <img className="" src="images/userbg.svg" alt="userbg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
