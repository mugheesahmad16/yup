import ProfileIcon from "/images/profileicon.svg";
import BellIcon from "/images/bellicon.svg";
import RequestIcon from "/images/calendericon.svg";
import structureIcon from "/images/structureicon.svg";
export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 px-6 bg-white border-t border-gray-200 shadow-md sm:hidden">
      <div className="flex justify-around items-center h-16">
        <button className="flex flex-col opacity-[50%] gap-1 items-center">
          <img
            src={structureIcon}
            className="h-6 w-6 text-gray-600"
            alt="Home"
          />
          <span className="text-xs text-gray-600">Structure</span>
        </button>
        <button className="flex flex-col gap-1 items-center">
          <img
            src={RequestIcon}
            className="h-6 w-6 opacity-[50%] text-gray-600"
            alt="Search"
          />
          <span className="text-xs text-gray-600">Richeste</span>
        </button>
        <button className="flex flex-col gap-1 items-center">
          <img src={BellIcon} className="h-6 w-6 opacity-[50%] text-gray-600" alt="Profile" />
          <span className="text-xs text-gray-600">Notifiche</span>
        </button>
        <button className="flex flex-col gap-1 items-center">
          <img
            src={ProfileIcon}
            className="h-6 w-6 text-gray-600"
            alt="Profile"
          />
          <span className="text-xs text-gray-600">Profile</span>
        </button>
      </div>
    </div>
  );
}
