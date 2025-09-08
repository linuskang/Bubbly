"use client"
import { Home, Info, Bookmark, Shield, FileText, X } from "lucide-react"
import { useState } from "react"

interface NavigationSidebarProps {
    onNavigate?: (section: string) => void
}

export default function NavigationSidebar({ onNavigate }: NavigationSidebarProps) {
    const [activeSection, setActiveSection] = useState<string | null>(null)
    const isExpanded = activeSection !== null

    const handleClick = (section: string) => {
        if (section === "home") {
            setActiveSection(null)
        } else if (section === "privacy") {
            window.open("https://linuskang.au/privacy", "_blank")
            return
        } else if (section === "terms") {
            window.open("https://linuskang.au/terms", "_blank")
            return
        } else {
            setActiveSection(activeSection === section ? null : section)
        }

        onNavigate?.(section)
        console.log(section)
    }

    const renderContent = () => {
        switch (activeSection) {
            case "about":
                return (
                    <div className="p-5 bg-white border border-gray-100 max-w-md mx-auto">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-xl font-semibold text-gray-800">About</h2>
                            <button
                                onClick={() => setActiveSection(null)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700">
                            <p>
                                Welcome to <span className="font-bold">Bubbly</span>, an app created by me, <span className="font-bold">Linus Kang</span> for the <span className="italic">Premier Coding Challenge 2025</span>. Its goal is to map all of Australia's water fountains and make staying hydrated easier for everyone.
                            </p>

                            <div>
                                <p className="font-medium mb-2">Features include:</p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>💧 Find nearby water fountains quickly using your location.</li>
                                    <li>📝 Contribute by adding new fountains or reporting issues.</li>
                                    <li>📍 View fountain details, including accessibility and amenities.</li>
                                </ul>
                            </div>

                            <p>
                                Feel free to contribute or check out the code at <a href="https://github.com/linuskang/bubbly" className="text-blue-600 underline">GitHub</a>.
                            </p>

                            <p className="text-center font-semibold">Happy Exploring :)</p>
                        </div>
                        <p className="mt-1 text-xs text-gray-400 text-center">v{process.env.NEXT_PUBLIC_VERSION}</p>
                    </div>
                )
            case "bookmarks":
                return (
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">Bookmarks</h2>
                            <button onClick={() => setActiveSection(null)} className="p-1 hover:bg-gray-100 rounded">
                                <X className="w-4 h-4 text-gray-500" />
                            </button>
                        </div>
                        <div className="space-y-2">
                            <div className="p-2 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                                <div className="font-medium text-sm">Important Link</div>
                                <div className="text-xs text-gray-500">Saved 2 days ago</div>
                            </div>
                            <div className="p-2 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                                <div className="font-medium text-sm">Another Bookmark</div>
                                <div className="text-xs text-gray-500">Saved 1 week ago</div>
                            </div>
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div
            className={`h-full bg-white/90 backdrop-blur-sm border-r border-gray-200 shadow-lg z-30 flex transition-all duration-300 ${
                isExpanded ? "w-80" : "w-12"
            }`}
        >
            <div className="w-12 flex flex-col">
                <div className="flex flex-col pt-4 space-y-2">
                    <button
                        onClick={() => handleClick("home")}
                        className={`w-10 h-10 mx-1 flex items-center justify-center rounded-lg transition-colors group ${
                            activeSection === null ? "bg-blue-100" : "hover:bg-blue-100"
                        }`}
                        title="Home"
                    >
                        <Home
                            className={`w-5 h-5 ${
                                activeSection === null ? "text-blue-600" : "text-gray-600 group-hover:text-blue-600"
                            }`}
                        />
                    </button>

                    <button
                        onClick={() => handleClick("about")}
                        className={`w-10 h-10 mx-1 flex items-center justify-center rounded-lg transition-colors group ${
                            activeSection === "about" ? "bg-blue-100" : "hover:bg-blue-100"
                        }`}
                        title="About"
                    >
                        <Info
                            className={`w-5 h-5 ${
                                activeSection === "about" ? "text-blue-600" : "text-gray-600 group-hover:text-blue-600"
                            }`}
                        />
                    </button>

                    <button
                        onClick={() => handleClick("bookmarks")}
                        className={`w-10 h-10 mx-1 flex items-center justify-center rounded-lg transition-colors group ${
                            activeSection === "bookmarks" ? "bg-blue-100" : "hover:bg-blue-100"
                        }`}
                        title="Bookmarks"
                    >
                        <Bookmark
                            className={`w-5 h-5 ${
                                activeSection === "bookmarks" ? "text-blue-600" : "text-gray-600 group-hover:text-blue-600"
                            }`}
                        />
                    </button>
                </div>
                <div className="flex-1" />
                <div className="flex flex-col pb-4 space-y-2">
                    <button
                        onClick={() => handleClick("privacy")}
                        className="w-10 h-10 mx-1 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors group"
                        title="Privacy Policy"
                    >
                        <Shield className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                    </button>

                    <button
                        onClick={() => handleClick("terms")}
                        className="w-10 h-10 mx-1 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors group"
                        title="Terms of Service"
                    >
                        <FileText className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                    </button>
                </div>
            </div>

            {isExpanded && <div className="flex-1 border-l border-gray-100 bg-white">{renderContent()}</div>}
        </div>
    )
}
