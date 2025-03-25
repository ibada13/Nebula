import Image from "next/image";
import { FaCirclePlay ,FaShare} from "react-icons/fa6";
export default function Main() { 
    return (
        <div className=" absolute top-1/5 left-0 h-[100vh] w-[90%] bg-red-500 flex gap-x-4  items-center p-4 ">
            <div className="ml-4 h-full w-2/5">
                <div className=" h-[85%] relative bg-black">
                    <Image 
                        src={'/background.jpg'} 
                        alt="album pic" 
                        fill 
                        className="object-cover"
                    />
                </div>
                <div>  </div>
            </div>
            <div className="bg-blue-500 p-4 w-1/2  h-full flex flex-col gap-y-8 justify-center">
                <div className="flex flex-col justify-around gap-y-4">
                    <p className="text-2xl">
                        LeveL Stars
                    </p>
                    <p className="text-xl">Someone</p>
            </div>
                <div className="flex items-center gap-x-4">
                    <button className="w-3/6 py-4 px-6 bg-black items-center text-nowrap flex justify-center gap-x-1">
                        <FaCirclePlay/>
                        Listen Now
                    </button>
                    <button className="w-2/6 py-3   px-6  flex gap-x-2 text-center">
                        share
                    </button>
            </div>
            </div>
        </div>
    );
}
