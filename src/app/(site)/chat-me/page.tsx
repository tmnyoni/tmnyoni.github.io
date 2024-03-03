"use client"

import { useState } from "react"
import { Anton } from "next/font/google"
import { PaperPlaneIcon, PersonIcon } from "@radix-ui/react-icons"
import { BotIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { chatAction } from "./action"

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
})

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col px-4 pt-8 ">
            <section className="mx-auto max-w-[600px]">
                <div className={cn("text-3xl", anton.className)}>Chat-me</div>
                <div className="mt-2 text-sm text-slate-700">
                    You wanna talk to me, let&apos; talk. You gonna like it😉
                </div>
                <div className="mt-4 grid gap-10 text-gray-600">
                    <div className="flex">
                        <div className="grid size-8 place-items-center rounded-full border bg-gray-50 sm:size-12">
                            <BotIcon strokeWidth={1} className="size-5" />
                        </div>
                        <div className="ml-4 mt-2 flex-1">
                            <p className="text-sm font-medium">
                                Tawanda M. Nyoni
                            </p>
                            <div className="mt-1 flex">
                                <div className="size-0 -rotate-180 border-b-[20px] border-l-0 border-r-[20px] border-gray-100 border-r-transparent" />
                                <p className="flex-1 rounded-b-xl rounded-tr-xl bg-gray-100 p-6 text-sm dark:bg-slate-800">
                                    Allow me to introduce myself. Unlike some
                                    people, I don&apos;t perform
                                    &quot;magic&quot;. I create websites and web
                                    applications. So please use this chat only
                                    for business purposes. I&apos;m sure you can
                                    manage to be a good citizen being for once.
                                </p>
                            </div>
                            <p className="ml-5 mt-1 rounded-xl bg-gray-100 p-6 text-sm dark:bg-slate-800">
                                Hi Earthling 😉
                            </p>
                        </div>
                    </div>
                    <div className="ml-6 flex items-center">
                        <div className="h-px flex-1 bg-gradient-to-r from-white to-gray-300" />
                        <div className="rounded border-x border-gray-300 px-8 text-sm text-gray-500">
                            Today
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-white" />
                    </div>
                    <div className="flex">
                        <div className="grid size-8 place-items-center rounded-full border bg-gray-50 sm:size-12">
                            <PersonIcon />
                        </div>
                        <div className="ml-4 mt-2 flex-1">
                            <ChatForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

function ChatForm() {
    const [state, setState] = useState<{ error: string | null }>({
        error: null,
    })

    const formAction = async (formData: FormData) => {
        try {
            const result = await chatAction(state, formData)

            setState({ error: result.error })
        } catch (error) {
            if (error instanceof Error) {
                setState({ error: error.message })
            }
        }
    }

    console.log(state)
    return (
        <form action={formAction} className="flex flex-col space-y-2">
            <div className="flex">
                <div className="size-0 -rotate-180 border-b-[20px] border-l-0 border-r-[20px] border-gray-200 border-r-transparent" />
                <Input
                    name="email"
                    placeholder="Email"
                    className="rounded-b-xl rounded-tr-xl border border-gray-200 p-6"
                />
            </div>
            <Textarea
                name="message"
                className="ml-5 h-32 rounded-xl border border-gray-200 p-6 text-sm outline-none focus:ring-1"
                placeholder="Type your whatchu wanna say here..."
            />

            <Button className="inline-flex w-fit self-end bg-gray-800 text-gray-50 hover:bg-gray-700 active:scale-95">
                <span>Send it</span>
                <PaperPlaneIcon />
            </Button>
        </form>
    )
}
