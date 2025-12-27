import { Fade } from "react-awesome-reveal";
import { usageData } from '../data/UsageData';

export default function UsageExamples() {

    return(
        <section className="relative py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <div className="space-y-4 mb-8 md:mb-20">
                        <div className='flex justify-center'>
                        <Fade triggerOnce direction="up" duration={800} delay={200}>
                            <h2 className="text-lg tracking-tighter mb-4 py-1 px-4 border border-blue-950 rounded-full text-blue-950">
                                Cas d’usage
                            </h2>
                        </Fade>
                        </div>
                        <div className='flex justify-center'>
                        <Fade triggerOnce direction="up" duration={800} delay={200}>
                            <h2 className="mb-8 font-bold text-4xl md:text-5xl 
                            leading-tight tracking-tight max-w-2xl text-center">
                                Comment Mazia peut transformer vos appels
                            </h2>
                        </Fade>
                        </div>
                        <div className='flex justify-center'>
                        <Fade triggerOnce direction="up" duration={800} delay={200}>
                        <p className='text-lg max-w-xl text-center mb-6 text-blue-950'>
                            Mazia automatise et optimise vos appels, gère les demandes clients, qualifie les prospects et fournit des rapports clairs pour améliorer l’efficacité de votre entreprise.                        </p>
                        </Fade>
                        </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-5xl">
                                {usageData.map((item, i) => (
                                    <Fade key={i} triggerOnce direction="left" duration={800} delay={400}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                            <div className="flex flex-col justify-start items-start space-y-6">
                                                <h3 className="text-2xl md:text-5xl font-bold max-w-sm leading-shung">
                                                {item.title}
                                                </h3>
                                                <p className="text-base text-left max-w-sm">{item.description}</p>
                                                <button className="bg-[#032CA6] px-8 text-sm py-2 rounded-xs text-white">
                                                    Voir Mazia en action
                                                </button>
                                            </div>

                                            <div className="flex justify-center">
                                                <img src={item.image} className="w-90" />
                                            </div>
                                        </div>
                                </Fade>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}