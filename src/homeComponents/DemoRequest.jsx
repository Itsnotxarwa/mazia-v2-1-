import { Fade } from "react-awesome-reveal";
import womanTalk from "../assets/womanTalk.jpg";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function DemoRequest() {
    return(
        <section className="min-h-screen py-24 relative">

            <img 
            src={womanTalk}
            className="absolute w-full h-full inset-0 object-cover z-0"
            />

            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm z-10"></div>

            <div className="relative z-20 max-w-6xl mx-auto py-8 px-4">

            <div className="bg-black/30 py-24 px-4 backdrop-blur-sm shadow-sm rounded-sm">

            <div className="flex justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <Fade triggerOnce direction="up" duration={1000} delay={200}>
                        <h2 className="mb-12 font-semibold text-3xl text-white
                            md:text-4xl lg:text-5xl leading-tight text-center max-w-2xl">
                            Transformez vos appels dès aujourd’hui
                        </h2>
                        </Fade>

                        <Fade triggerOnce direction="up" duration={1000} delay={400}>
                        <p className="text-lg max-w-lg text-center text-white mb-12">
                            Gagnez du temps, automatisez vos interactions et offrez une expérience client professionnelle avec Mazia. Demandez votre démonstration gratuite et découvrez comment l’IA peut simplifier vos appels.
                        </p>
                        </Fade>

                        <Fade triggerOnce cascade direction="up" duration={1000} delay={600}>
                            <div className="flex items-center justify-center">
                                <a href="/demo"
                                className="group py-4 px-8 font-medium text-sm h-12 relative bg-[#032ca6] rounded-sm text-white"
                                >
                                    <ul className="h-6 relative overflow-hidden">
                                        <li className="flex items-center transform transition-transform duration-300 group-hover:-translate-y-full">
                                            Demandez votre démo maintenant <ArrowUpRight size={18} />
                                        </li>
                                        <li className="flex items-center transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-full">
                                            Demandez votre démo maintenant <ArrowRight size={18} />
                                        </li>
                                    </ul>
                                </a>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}