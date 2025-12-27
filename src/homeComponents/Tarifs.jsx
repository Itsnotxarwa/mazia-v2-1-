import { Fade } from "react-awesome-reveal";
import TarifsData from "../data/TarifsData";

export default function Tarifs() {
    return(
        <section className="relative py-24">
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
                                Choisissez l’offre qui vous convient
                            </h2>
                        </Fade>
                        <div className="flex justify-center">
                        <Fade triggerOnce direction='up' duration={1000} delay={600}>
                            <p className="text-lg max-w-xl mb-6 text-center text-blue-950 px-4">
                                Mazia propose des formules flexibles pour toutes les tailles d’entreprise. Que vous souhaitiez tester le service ou l’intégrer pleinement à vos opérations, nos options s’adaptent à vos besoins.
                            </p>
                        </Fade>
                        </div>
                    </div>
                </div>
                
                <Fade triggerOnce direction='up' duration={1000} delay={800}>
                <div className="grid grid-cols-1 max-w-5xl md:grid-cols-3 mt-8 gap-8 md:mx-16">
                    {TarifsData.map((item,i) => (
                        <div
                        key={i}
                        className="border border-[#032CA6] rounded-xl p-4 flex flex-col">
                            <div className="flex justify-center">
                                <span className="py-1 px-6 text-[#032ca6] bg-[#032ca6]/10 rounded-full font-bold text-xs tracking-wider">
                                    {item.title}
                                </span>
                            </div>

                            <div className="flex justify-center mt-12">
                                <p className="flex flex-col space-y-4">
                                    <span className="text-5xl font-bold">{item.price}€</span>
                                    <span className="text-center text-black/60">/month</span>
                                </p>
                            </div>

                            <div className="flex flex-1 flex-col justify-between">

                            <div className="mt-12 flex flex-col justify-center items-center border-t border-[#032ca6]">
                                <div className="mt-4 flex flex-col justify-center items-center space-y-2">
                                    <h3 className="underline text-sm">Fonctionnalités:</h3>
                                    <ul className="list-disc list-inside text-center">
                                        {item.fonctionnalities.map((f, index) => (
                                            <li key={index}>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-12 flex justify-center">
                                <button className="bg-[#032ca6] flex justify-center text-nowrap w-full py-3 px-5 text-white rounded-lg font-medium">
                                    Commencez votre essai gratuit
                                </button>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                </Fade>
            </div>
        </section>
    )
}