import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function MobileMenu() {
    const navItems = [
        {
            url: "about",
            text: "About"
        },
        {
            url: "projects",
            text: "Projects"
        },
        {
            url: "articles",
            text: "Articles"
        },
        {
            url: "skills",
            text: "skills"
        }
    ]

    return (
        <Popover className="relative font-normal text-gray-800 md:hidden">
            {({ open }) => (
                <>
                    <Popover.Button className="rounded-md p-1 bg-gray-200">
                        <Bars3Icon className="h-6 w-6 text-gray-800" />
                    </Popover.Button>

                    <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
                    <Popover.Panel className="fixed z-20 w-screen md:max-w-md inset-0">
                        {({ close }) => (
                            <div className="relative mx-2 mt-1">
                                <div className="overflow-hidden relative bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-4">
                                    <div className="relative flex justify-between items-center px-4 mb-4 py-2">
                                        <div> Navigation </div>
                                        <button className="p-1" onClick={() => close()}>
                                            <XMarkIcon className="h-6 w-6" />
                                        </button>
                                    </div>
                                    <div className="relative grid gap-y-3">
                                        {navItems.map(item =>
                                            <Popover.Button
                                                key={item.text}
                                                as={"a"}
                                                href={item.url}
                                                className="flex items-center rounded-lg py-2 px-4 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                            >
                                                {item.text}
                                            </Popover.Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </Popover.Panel>
                </>
            )}
        </Popover>
    )
}