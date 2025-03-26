import Link from "next/link";
import { links , policylinks } from "./data/linksdata";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function AboutUs() { 
    return (
        <div className="flex justify-between items-start text-lg font-bold text-gray-200 uppercase tracking-widest border-t-2 border-t-gray-300 border-b-2 border-b-gray-300 py-15 " >
            <div className="flex flex-col flex-1">
                {links.map((link , index)=>(
                    <Link key={`link-${index}`} href={link.link}>{link.title}</Link>
                ))}
            </div>
            <div className="flex flex-col  items-start   flex-1">
                {policylinks.map((link , index)=>(
                    <Link key={`policylink-${index}`} href={link.link}>{link.title}</Link>
                ))}
            </div>
            <div className="flex flex-col w-1/3 gap-y-2 ">
  <p className="text-gray-500">Neblua news</p>
  <p className="font-light text-xs">
    Don't miss a thing, stay up to date with the latest news from us.
  </p>
  <div className="w-full max-w-xs  border-b-2 border-b-gray-400 flex gap-x-1 items-center py-2">
    <input
      type="text"
      placeholder="email"
      className="w-full py-1  uppercase focus:outline-0 focus:ring-0"
    />
    <button className="px-6 py-2 hover:text-black hover:bg-white transition-colors duration-300">
      <IoIosArrowRoundForward />
    </button>
  </div>
</div>

        </div>
    );
}