import Image from "next/image";

export default function Background() { 
    return (
        <div className="absolute h-screen inset-0 -z-10 overflow-hidden">
        <Image
          src="/background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="blur-xs scale-110" 
          priority
        />
        <div className="absolute  w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)]   via-[rgba(0,0,0,0.8)] via-70%  to-black opacity-100"></div>
        
      </div>
      
      
    );
}