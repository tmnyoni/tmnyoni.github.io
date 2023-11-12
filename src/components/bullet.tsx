import { ComponentProps } from "react"
import { ArrowRight } from "lucide-react"

type BulletProps = ComponentProps<"div">

export function Bullet(props: Readonly<BulletProps>) {
    return (
        <div className="flex aspect-square h-4 items-center justify-center rounded bg-blue-400">
            <ArrowRight
                className="aspect-square h-3 text-white"
                strokeWidth={3}
            />
        </div>
    )
}
