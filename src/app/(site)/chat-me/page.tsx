import { Anton } from "next/font/google"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
})

export default function Page() {
    return (
        <main className="flex min-h-screen  w-screen flex-col pt-8">
            <section className="mx-auto max-w-[600px]">
                <div>
                    <div className={cn("text-3xl", anton.className)}>
                        Chat-me
                    </div>
                    <div className="mt-2 text-sm text-slate-700">
                        You wanna talk to me, let&apos; talk. You gonna like
                        it😉
                    </div>
                    <div className="mt-4 grid gap-4">
                        <div className="h-0 w-0 border-[solid_38px]" />
                        <div className="max-w-[40ch] rounded-lg bg-slate-100 p-4 text-sm">
                            <p>Lemme be the first</p>
                            <p className="mt-1">Hi</p>
                        </div>
                        <textarea
                            className="rounded-lg border border-slate-200 p-2 text-sm shadow outline-none focus:ring-1"
                            placeholder="Type your whatchu wanna say here..."
                        />
                        <Button className="inline-flex w-fit bg-slate-900 text-slate-50 hover:bg-slate-700 active:scale-95">
                            Send it
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
