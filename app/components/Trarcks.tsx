import { CiPlay1 } from "react-icons/ci";
import { FiShare2 } from "react-icons/fi";
import { tracks } from "./data/tracksdata";
const Tracks = () => { 
    return (
        <div className="w-[95%] p-6 flex flex-col gap-y-6">
            <h1 className="uppercase text-4xl tracking-widest font-bold">Track List</h1>
            <div className="flex flex-col  w-full">
                {tracks.map((track, index) => (
                    
                    <div key={`track-${index}`} className="w-full flex justify-between  py-4 text-gray-300 text-xl font-light">
                    <div className=" flex   gap-x-6 items-center">
                            <p className="min-w-[24px]">{ index+1}</p>
                        <CiPlay1 />
                        <div className="flex flex-col">
                                <p className="text-lg">{ track.name}</p>
                                <p className="text-sm">{ track.artist}</p>
                        </div>
                    </div>
                    <div className=" flex gap-x-6 items-center ">
                            <p>{ track.duration }</p>
                        <FiShare2/>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Tracks; 