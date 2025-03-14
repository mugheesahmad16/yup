import "./App.css";
import Navbar from "./navbar";
import RichiesteLog from "./richieste-log";
function App() {
  return (
    <>
      <div className="w-full h-full">
        <Navbar />
        <hr className='border-[#EDEDED] border-solid  w-full'></hr>
        <RichiesteLog/>
      </div>
    </>
  );
}

export default App;
