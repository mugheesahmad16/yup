import { useState } from "react";

export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  const handleMenuClick = (menu: any) => {
    setSelectedMenu(menu);
  };
  return (
    <ul className="flex sm:flex flex-row text-black text-[13px] font-medium tracking-[0px] gap-6 invisible hidden sm:visible sm:block">
      <li
        className={`relative px-4 py-2 hover:text-[#E72687] ${
          selectedMenu === "Home" ? "active-menu" : ""
        }`}
        onClick={() => handleMenuClick("Home")}
      >
        {selectedMenu === "Home" && (
          <img
            src="images/staricon.svg"
            alt="staricon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 inline-block mr-2"
          />
        )}
        <a href="#">Home</a>
      </li>
      <li
        className={`relative px-4 py-2 hover:text-[#E72687] ${
          selectedMenu === "About Us" ? "active-menu" : ""
        }`}
        onClick={() => handleMenuClick("About Us")}
      >
        {selectedMenu === "About Us" && (
          <img
            src="images/staricon.svg"
            alt="staricon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 inline-block mr-2"
          />
        )}
        <a href="#">About Us</a>
      </li>
      <li
        className={`relative px-4 py-2 items-center hover:text-[#E72687] ${
          selectedMenu === "Blog" ? "active-menu" : ""
        }`}
        onClick={() => handleMenuClick("Blog")}
      >
        {selectedMenu === "Blog" && (
          <img
            src="images/staricon.svg"
            alt="staricon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 inline-block mr-2"
          />
        )}
        <a href="#">Blog</a>
      </li>
    </ul>
  );
}
