import { Fade } from "react-awesome-reveal";
import { ArrowRight, ArrowUpRight  } from "lucide-react";
import AudioPlayer from "./AudioPlayer";

export default function HeroSection() {
    return(    
                    <section className="relative py-24">
                        <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-16 flex flex-col">
                            <div className="flex flex-col justify-center items-center mb-8">
                                <div className="flex flex-col items-center justify-center">
                                    <Fade direction="up" triggerOnce duration={800}>
                                    <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center mx-2 lg:mx-14 tracking-tighter text-balance leading-14 md:leading-18" 
                                    >
                                        Automatisez vos appels et améliorez votre relation client.                                        
                                    </h1>
                                    </Fade>
                                    <Fade direction="up" triggerOnce duration={800} delay={200}>
                                    <p className="text-lg tracking-tight text-blue-950 max-w-2xl text-center">
                                    Mazia est l'assisstant IA qui prend en charge vos appels 24/7, répond instantanément à vos clients et optimise votre gestion téléphonique sans effort.
                                    </p>
                                    </Fade>
                                </div>
                                <Fade direction="up" triggerOnce duration={800} delay={400}>
                                <div className="mt-12 flex gap-4 items-center justify-center">

                                <a
                                href="/demo"
                                className="relative overflow-hidden flex items-center justify-center 
                                gap-3 text-sm font-medium  whitespace-nowrap rounded-[30px] cursor-pointer
                                px-8 py-2 h-11  bg-[#032CA6] text-white 
                                transition-all duration-400 transform  hover:scale-105 group">
                                    <ul className="relative h-6 overflow-hidden">
                                        <li className="flex items-center transform transition-transform duration-300 group-hover:-translate-y-full">
                                            Demandez une démo
                                            <ArrowUpRight size={22} />
                                        </li>
                                        <li className="flex items-center transform transition-transform translate-y-0 duration-300 group-hover:-translate-y-full">
                                            Demandez une démo
                                            <ArrowRight size={22} />
                                        </li>
                                    </ul> 
                                </a>
                                </div>
                                </Fade>
                            </div>
                            <div className="hidden md:flex justify-center">
                                <AudioPlayer />
                            </div>
                        </div>
                    </section>
    )
}