import "./App.css";
import BottomNav from "./components/ui/bottom-nav";
import Footer from "./footer";
import Navbar from "./navbar";
import RichiesteLog from "./richieste-log";
function App() {
  return (
    <>
      <div className="w-full h-full">
        <Navbar />
        <hr className='border-[#EDEDED] border-solid  w-full'></hr>
        <RichiesteLog/>
        <Footer/>
        <BottomNav/>
      </div>
    </>
  );
}

export default App;
