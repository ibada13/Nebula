const MusicVideo = () => { 
    return (
        <div className="flex flex-col gap-y-8  w-[95%] p-6">
            <h1 className="uppercase text-3xl tracking-widest">music video</h1>
            <iframe
                src="https://www.youtube.com/embed/uT5X9aDYcPw"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="h-screen border-0 shadow-2xl"
                
            ></iframe>
        </div>
    );
}

export default MusicVideo; 