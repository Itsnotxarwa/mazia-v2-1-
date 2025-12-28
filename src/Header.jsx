import { useState } from "react";
import { ArrowUpRight, ArrowRight, X, AlignJustify  } from "lucide-react";
import mazLogo from "./assets/image.png"
export default function Header() {

    const data = [
        {   
            link: "Accueil",
            href: "#accueil",
        },
        {   
            link: "Fonctionnalités",
            href: "#fonctionnalities",
        },
        {   
            link: "Cas d’usage",
            href: "#cas-usage",
        },
        {   
            link: "Tarifs",
            href: "#tarifs"
        },
        {   
            link: "Il nous ont fait confiance",
            href: "#testimonials",
        },
        {   
            link: "Contact",
        },
    ]

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <header className="sticky lg:fixed w-full top-0 z-50 border-b border-black/10 bg-white/80">
            <div className="mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div>
                        <img src={mazLogo} alt="Logo" className="w-24" />
                    </div>

                    <div className="hidden md:flex">
                        <nav>
                            <ul className="flex list-none items-center justify-center">
                                {data.map((item,i) => (
                                    <li key={i} className="group">
                                        <a 
                                        href={item.href} 
                                        className="group relative px-4 py-2 flex items-center justify-center gap-1 
                                        leading-6 font-medium text-sm transition-all duration-300 rounded-sm group-hover:bg-gray-200"
                                        >
                                            <span>
                                                {item.link}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                
                    <div className="hidden md:flex items-center space-x-4">
                        <a 
                        href="/demo"
                        className="group relative text-sm font-medium h-9 text-white whitespace-nowrap rounded-lg 
                        bg-[#032CA6] px-4 py-2 
                        transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                                >
                            <ul className="h-6 relative overflow-hidden">
                                <li className="flex items-center transform transition-transform duration-300 group-hover:-translate-y-full">
                                    Essayez Mazia gratuitement <ArrowUpRight size={18} />
                                </li>
                                <li className="flex items-center transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-full">
                                    Essayez Mazia gratuitement <ArrowRight size={18} />
                                </li>
                            </ul>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center justify-center">
                <div
                className="cursor-pointer flex relative justify-center"
                onClick={() => setMenuOpen(!menuOpen)}
                >
                    
                    {!menuOpen ? <AlignJustify /> : <span className="absolute z-80 right-1"><X /></span>}
                    
                </div>
                {menuOpen && (
                <div className="flex flex-col items-center justify-between absolute top-0 left-0 w-full md:hidden min-h-screen z-60 overflow-hidden
                bg-[#e2e9fe]/90 backdrop-blur-sm px-4 pt-24 
                pb-4 text-lg font-medium">
                    <div className="flex flex-col items-center gap-2 pb-4 w-full">
                    <div className="submenu-item">
                        <a href="#" className="submenu-link">Accueil</a>
                    </div>
                    <div className="submenu-item">
                        <a href="#" className="submenu-link">Fonctionnalités</a>
                    </div>
                    <div className="submenu-item">
                        <a href="#" className="submenu-link">Cas d'usage</a>
                    </div>
                    <div className="submenu-item">
                        <a href="#" className="submenu-link">Tarifs</a>
                    </div>
                    <div className="submenu-item">
                        <a href="#" className="submenu-link">Il nous ont fait confiane</a>
                    </div>
                    <div className="submenu-item">
                        <a href="#" className="submenu-link">Contact</a>
                    </div>
                    </div>

                    <div className="flex items-center">
                        <a 
                        href="/demo"
                        className="group relative text-sm font-medium h-9 text-white whitespace-nowrap rounded-lg 
                        bg-[#032CA6] px-4 py-2 
                        transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                                >
                            <ul className="h-6 relative overflow-hidden">
                                <li className="flex items-center transform transition-transform duration-300 group-hover:-translate-y-full">
                                    Essayez Mazia gratuitement <ArrowUpRight size={18} />
                                </li>
                                <li className="flex items-center transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-full">
                                    Essayez Mazia gratuitement <ArrowRight size={18} />
                                </li>
                            </ul>
                        </a>
                    </div>
                </div>
                )}
                </div>

                </div>
            </div>
        </header>
    )
}