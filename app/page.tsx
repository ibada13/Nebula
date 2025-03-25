import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Main from "./components/Main";
export default function Home() {
  return (
    <div className="relative h-screen flex  flex-col justif text-white text-3xl">
      <Navbar/>
      <Background/>
      <Main/>
    </div>
  );
}
