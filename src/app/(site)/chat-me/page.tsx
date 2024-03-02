"use client"

import { Anton } from "next/font/google"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
})

export default function Page() {
    return (
        <main className="flex min-h-screen w-screen flex-col px-4 pt-8">
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
                        <div className=" space-y-1">
                            <p className="rounded-bl-lg rounded-br-lg rounded-tr-lg bg-slate-100 p-4 dark:bg-slate-800">
                                Allow me to introduce myself. Unlike some
                                people, I don&apos;t perform &quot;magic&quot;.
                                I create websites and web applications. So
                                please use this chat only for business purposes.
                                I&apos;m sure you can manage to be a good
                                citizen being for once.
                            </p>
                            <p className="bg-slate-100 p-4 dark:bg-slate-800">
                                Hi Earthling 😉
                            </p>
                        </div>
                        <ChatForm />
                    </div>
                </div>
            </section>
        </main>
    )
}

function ChatForm() {
    return (
        <form className="flex w-full flex-col space-y-2">
            <Input placeholder="Email" className="rounded border" />
            <Textarea
                className="h-32 rounded-lg border border-slate-200 p-2 text-sm shadow outline-none focus:ring-1"
                placeholder="Type your whatchu wanna say here..."
            />

            <Button className="inline-flex w-fit bg-slate-800 text-slate-50 hover:bg-slate-700 active:scale-95">
                Send it
            </Button>
        </form>
    )
}
