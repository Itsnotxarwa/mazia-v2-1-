import { Fade } from "react-awesome-reveal";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Hero() {
    return(
        <section className="relative lg:pt-48 lg:pb-24 py-12">
            <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-17 flex flex-col">
                <div className="flex flex-col justify-center items-center mb-8">
                    <div className="flex flex-col items-center justify-center">
                        <Fade direction="up" triggerOnce duration={800}>
                        <h1 className="text-5xl md:text-7xl font-medium mb-8 text-center mx-2 lg:mx-14 
                        tracking-tight text-balance" 
                        >
                            Propulsez votre {" "} <span className="text-[#0CCBB4]">startup</span> {" "}
                            <br />
                            dans {" "} <span className="text-[#0CCBB4]">le futur!</span>                                     
                        </h1>
                        </Fade>
                        <Fade direction="up" triggerOnce duration={800} delay={200}>
                        <p className="text-lg tracking-tight max-w-xl text-center">
                            Un agent IA capable de s’intégrer directement à votre produit et vos
                            opérations pour faire passer votre startup au niveau supérieur
                        </p>
                        </Fade>
                    </div>
                        <Fade direction="up" triggerOnce duration={800} delay={400}>
                            <div className="mt-12 flex gap-4 items-center justify-center">

                                <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://meetings-eu1.hubspot.com/mazia"
                                className="relative overflow-hidden flex items-center justify-center 
                                gap-3 text-sm font-medium  whitespace-nowrap rounded-[30px] cursor-pointer
                                px-8 py-2 h-11  bg-linear-to-r from-[#0CCBB4] to-[#0E63DD] text-white 
                                transition-all duration-400 transform  hover:scale-105 group">
                                    <ul className="relative h-6 overflow-hidden">
                                        <li className="flex items-center transform transition-transform duration-300 group-hover:-translate-y-full">
                                            Prendre rendez-vous
                                            <ArrowUpRight size={22} />
                                        </li>
                                        <li className="flex items-center transform transition-transform translate-y-0 duration-300 group-hover:-translate-y-full">
                                            Prendre rendez-vous
                                            <ArrowRight size={22} />
                                        </li>
                                    </ul> 
                                </a>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
    )
}