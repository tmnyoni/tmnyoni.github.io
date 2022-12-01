export default function SocialProof() {
    return (
        <section className="py-6 min-h-screen flex flex-col items-center justify-center">
            <div className="container mx-auto">
                <div className="text-center flex flex-col items-center">
                    <h1 className="max-w-xl text-3xl font-black tracking-tight text-gray-800 sm:text-4xl">
                        Testimonals
                    </h1>
                    <p className="w-96 text-center text-sm text-gray-400 mt-3">
                        I know you have trust issues, so listen to what others have to say about me.
                    </p>
                </div>

                <div className="my-10">
                    <div className="border border-gray rounded-md px-10 py-10">
                        <div className="w-10 h-10 rounded-full border border-gray-200"></div>
                        <div className="text-sm font-medium mt-6">
                            Alec M. Musasa
                        </div>
                        <p className="text-sm">
                            Tawanda is a diligent, curious, talented and artistic creator that learns
                            technical concepts quickly. He is tech-savvy and proficient in various 
                            programming languages and frameworks. He has a great personality, responds well to 
                            constructive feedback, is relatable and free-spirited ...which have all added
                            to my enjoyment of working with him.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}