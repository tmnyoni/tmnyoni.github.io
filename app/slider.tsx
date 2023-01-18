export default function Slider() {
    return (
        <div className={`bg-black shadow  h-[100px] m-auto overflow-hidden relative w-full md:w-[960px]
        before:bg-gradient-to-r before:from-white before:to-white/0 before:h-[100px] before:absolute before:z-[2] 
        before:top-0 before:left-0 
        after:bg-gradient-to-r after:from-white/0 after:to-white after:h-[100px] after:absolute after:z-[2] 
        after:r-0 after:top-0 
        transform`}
        >
            <div className="animate-scroll flex w-[3000px] text-4xl md:text-5xl text-white">
                <div className="h-[100px] w-[300px] flex items-center justify-center bg-ed-100"> C++ </div>
                <div className="h-[100px] w-[300px] flex items-center justify-center bg-reen-100"> TypeScript </div>
                <div className="h-[100px] w-[300px] flex items-center justify-center bg-lue-100"> Java </div>
                <div className="h-[100px] w-[300px] flex items-center justify-center bg-ellow-100"> Python </div>
                <div className="h-[100px] w-[300px] flex items-center justify-center bg-ray-400"> JavaScript </div>
                <div className="h-[100px] w-[300px] flex items-center justify-center bg-ed-100"> C++ </div>
                <div className="h-[100px] w-[300px] flex items-center justify-center bg-reen-100"> TypeScript </div>
                <div className="h-[100px] w-[300px] flex items-center justify-center bg-lue-100"> Java </div>
                <div className="h-[100px] w-[300px] flex items-center justify-center bg-ellow-100"> Python </div>
                <div className="h-[100px] w-[300px] flex items-center justify-center bg-ray-400"> JavaScript </div>
            </div>
        </div >
    )
}

