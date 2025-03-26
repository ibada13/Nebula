import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Main from "./components/Main";
import Stream from "./components/Stream";
import Tracks from "./components/Trarcks";
export default function Home() {
  return (
    <div className="relative  w-full flex flex-col  items-center   text-white text-3xl">
      <Navbar/>
      <Background/>
      <Main />
      <Stream />
      <Tracks />
    </div>
  );
}
