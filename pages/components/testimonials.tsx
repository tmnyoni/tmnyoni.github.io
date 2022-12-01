import Image from "next/image";

const Testimonals = () => {
    return (
        <div className="mt-10 py-6 min-h-screen bg-gray-100 rounded">
            <div className="container mx-auto">
                <div className="text-center flex flex-col items-center">
                    <h1 className="max-w-xl text-3xl font-black tracking-tight text-gray-800 sm:text-4xl">
                        Testimonals
                    </h1>
                    <p className="w-96 text-center text-sm text-gray-400 mt-3">
                        I know you have trust issues, so listen to what others have to say about me.
                    </p>
                </div>

                <div className="mx-2 my-12 flex items-center">
                    <div className="rounded bg-gray-100 py-6 px-4 max-w-3xl">
                        <div className="flex items-center">
                            <Image
                                src={"/assets/hero-image.jpg"}
                                width={45}
                                height={45}
                                alt="bobo"
                                className="inline-block rounded-full"
                            />
                            <div className="ml-4 inline-block">
                                <h4 className="text-sm font-semibold text-slate-800">
                                    Some Random Guy
                                </h4>
                                <p className="text-sm text-slate-400">
                                    Internet Surfer
                                </p>
                            </div>
                        </div>
                        <p className="mt-6 text-xs text-slate-800">
                            I&apos;ve seen Tawanda M.&apos;s work and I&apos;ve seen him work; he&apos;s a genius.
                            His work demonstrates his obsession with perfection.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonals;