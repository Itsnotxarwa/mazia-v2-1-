import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowUpRight, ArrowRight, X, AlignJustify  } from "lucide-react";
import mazLogo from "./assets/image.png"
export default function Header() {

    const data = [
        {   
            link: "Accueil",
            href: "/",
        },
        {   
            link: "Fonctionnalités",
            href: "/#fonctionnalities",
            title: "Fonctionnalités des agents Mazia IA | Automatisation appels & support client"
        },
        {   
            link: "Cas d’usage",
            href: "/#cas-usage",
        },
        {   
            link: "Ils nous ont fait confiance",
            href: "/#testimonials",
        },
        {   
            link: "Tarifs",
            href: "/#tarifs",
            title: "Tarifs agents Mazia | Zéro frais de mise en place"
        },
        {   
            link: "Contact",
            href: "/contact",
            title: "Contactez Mazia | Testez votre agent IA personnalisé"
        },
    ]

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <header className="sticky lg:fixed w-full top-0 z-50 border-b border-black/10 bg-white/80">
            <div className="mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div>
                        <Link to='/'>
                        <img src={mazLogo} alt="Logo" className="w-24" />
                        </Link>
                    </div>

                    <div className="hidden lg:flex">
                        <nav>
                            <ul className="flex list-none items-center justify-center">
                                {data.map((item,i) => (
                                    <li key={i} className="group">
                                        <a 
                                        href={item.href} 
                                        title={item.title}
                                        className="group relative px-4 py-2 flex items-center justify-center gap-1 
                                        leading-6 font-medium text-sm transition-all duration-300 rounded-sm group-hover:bg-[#032ca6]/10"
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
                
                    <div className="hidden lg:flex items-center space-x-4">
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
                <div className="lg:hidden flex items-center justify-center">
                <div
                className="cursor-pointer flex relative justify-center"
                onClick={() => setMenuOpen(!menuOpen)}
                >
                    
                    {!menuOpen ? <AlignJustify /> : <span className="absolute z-80 right-1"><X /></span>}
                    
                </div>
                {menuOpen && (
                <div className="flex flex-col items-center justify-between absolute top-0 left-0 w-full lg:hidden min-h-screen z-60 overflow-hidden
                bg-[#e2e9fe]/90 backdrop-blur-sm px-4 pt-24 
                pb-4 text-lg font-medium">
                    <div className="flex flex-col items-center gap-2 pb-4 w-full">
                        {data.map((link, index) => (
                            <div
                            key={index} 
                            className="submenu-item">
                                <a href={link.href} className="submenu-link">
                                    {link.link}
                                </a>
                            </div>
                        ))}
                    
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