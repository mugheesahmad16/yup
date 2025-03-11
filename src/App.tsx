import "./App.css";
import Header from "./header";
import Navbar from "./navbar";
function App() {
  return (
    <>
      <div className="continer mx-auto w-full h-full max-w-[1386px]">
        <Navbar />
        <Header />
      </div>
    </>
  );
}

export default App;
