export default function Navbar() {
  return (
    <div className="flex flex-col justify-between sm:flex-row bg-white p-4">
      <img src="../public/images/logo.svg" alt="logo"></img>

      <div>
        <ul className="flex flex-row">
          <li className="px-4 py-2">Home</li>
          <li className="px-4 py-2">About</li>
          <li className="px-4 py-2">Services</li>
          <li className="px-4 py-2">Contact</li>
        </ul>
      </div>

      <div>
        <div className="rounded-md bg-transparent border border-gray-300 px-4 py-2  ">
          <img src="../public/images/bars.svg" alt="bars"></img>
        </div>
      </div>
    </div>
  );
}
