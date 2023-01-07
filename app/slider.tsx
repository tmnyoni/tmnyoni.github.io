export default function Slider() {
    return (
        <div className={`bg-white shadow h-[100px] m-auto overflow-hidden relative w-[960px]
        after:bg-gradient-to-r after:from-white after:to-white 
        after:h-[100px] after:absolute after:w-[200px] after:z-[2] after:r-0 after:top-0 
        transform rotate- before:bg-gradient-to-r before:from-white before:to-white 
        before:h-[100px] before:absolute before:w-[200px] before:z-[2] before:top-0 before:left-0 before:bg-green-100`}
        >
            <div className="animate-scroll flex w-[3000px] bg-red-100">
                <div className="h-[100px] w-[300px] text-black text-5xl"> C++ </div>
                <div className="h-[100px] w-[300px] text-black text-5xl"> Java </div>
                <div className="h-[100px] w-[300px] text-black text-5xl"> Python </div>
                <div className="h-[100px] w-[300px] text-black text-5xl"> TypeScript </div>
                <div className="h-[100px] w-[300px] text-black text-5xl"> JavaScript </div>
            </div>
        </div >
    )
}

