import { Check, MoveRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import TarifsData from "../data/TarifsData";

export default function Tarifs() {
    return(
        <section id="tarifs" className="relative py-24">
            <div className="mx-auto px-8 sm:px-6 lg:px-16 flex flex-col justify-center items-center">
                <div className="flex items-center justify-center mb-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-center">
                        <Fade triggerOnce direction='up' duration={1000} delay={200}>
                            <h2 className="text-lg border border-blue-950 rounded-full px-4 py-1 tracking-tighter text-center text-blue-950 mb-4">Tarifs et offres</h2>
                        </Fade>
                        </div>
                        <Fade triggerOnce direction='up' duration={1000} delay={400}>
                            <h2 className="text-4xl max-w-5xl md:text-5xl text-black font-bold md:leading-14 mb-8 text-center">
                                Des agents téléphoniques adaptés à votre réalité
                            </h2>
                        </Fade>
                        <div className="flex justify-center">
                        <Fade triggerOnce direction='up' duration={1000} delay={600}>
                            <p className="text-lg max-w-xl mb-6 text-center text-blue-950 px-4">
                                Chaque entreprise a ses flux d’appels, ses objectifs et ses contraintes.
                                Mazia vous accompagne avec des solutions sur mesure, personnalisées et évolutives.
                            </p>
                        </Fade>
                        </div>
                    </div>
                </div>
                
                <Fade triggerOnce direction='up' duration={1000} delay={800}>
                <div className="grid grid-cols-1 md:w-257 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-2 
                ">
                    {TarifsData.map((item,i) => (
                        <div
                        key={i}
                        className="border border-[#032CA6] rounded-2xl flex flex-col">

                        <div className="p-[28px_28px_22px]">
                            {/* badge */}
                            <div className="flex">
                                <span className="py-1 px-6 text-[#032ca6]
                                bg-[#032ca6]/10 rounded-full font-semibold text-[13px] tracking-wider mb-1.5">
                                    {item.badge}
                                </span>
                            </div>

                            {/* price */}
                            <div className="flex items-baseline gap-4 mb-2 mt-12">
                                <span 
                                className="text-sm font-semibold text-[#032ca6] mr-0.5"
                                style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                }}
                                >
                                    à partir de
                                </span>
                                <span 
                                className="text-5xl font-extrabold tracking-tighter text-[#0a1628]
                                leading-px"
                                >
                                    {item.price}
                                </span>
                                <span
                                className="text-sm font-medium text-[#032ca6] ml-0.5" 
                                >
                                    /mois
                                </span>
                            </div>

                            {/* tagline */}
                            <p className="text-sm text-[#032ca6] leading-4" 
                            >
                                {item.tagline}
                            </p>
                        </div>
                        
                        {/* divider */}
                        <div className="h-px bg-blue-900/20 mx-7"></div>

                         {/* features */}
                        <div className="flex flex-1 p-[22px_28px]">
                            <div className="flex flex-col gap-2.5">
                                {item.features.map((f,i) => (
                                    <div
                                    key={i}
                                    className="flex items-start justify-start gap-2.5">
                                        <div className="w-4 h-4 rounded-full shrink-0 mt-px bg-[rgba(3,44,166,0.08)]
                                        border border-[rgba(3,44,166,0.1)] flex items-center justify-center
                                        text-[#032ca6]">
                                            <Check size={12} />
                                        </div>
                                        <span className="text-sm text-[#374151] leading-4">
                                            {f}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="p-[28px_28px]">
                            <div className="text-[13px] text-[#032ca6] italic mb-3.5">
                                {item.cta}
                            </div>
                            <a 
                            href={item.ctaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full flex items-center justify-center gap-2
                            py-3 rounded-xl text-sm font-bold tracking-[-0.01em]
                            cursor-pointer bg-[#032ca6] text-white">
                                {item.ctaBtn}
                                <MoveRight className="translate-x-0 transition duration-300
                                group-hover:translate-x-1.5" />
                            </a>
                        </div>
                    </div>
                    ))}
                </div>
                </Fade>
            </div>
        </section>
    )
}