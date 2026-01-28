import { Fade } from "react-awesome-reveal";
import { FileCheckCorner, Euro, SlidersHorizontal, TrendingUp } from "lucide-react";
const avantagesFinanciers = [
    {
        icon: FileCheckCorner,
        title: "Frais de mise en place gratuits",
        description: "Contrairement à d’autres solutions, Mazia offre l’intégration initiale sans coût, facilitant la vente et la démonstration."
    },
    {
        icon: Euro,
        title: "Revenus récurrents",
        description: "Chaque client actif rapporte des commissions mensuelles, calculées selon le volume d’appels et les services souscrits."
    },
    {
        icon: SlidersHorizontal,
        title: "Flexibilité tarifaire",
        description: "Les partenaires peuvent adapter la proposition Mazia selon la taille de l’entreprise et ses besoins."
    },
    {
        icon: TrendingUp,
        title: "Optimisation du ROI client",
        description: "Réduction des coûts opérationnels, amélioration de la productivité et satisfaction accrue des clients."
    }
];

export default function FinancialBenefits() {
    return(
        <section className="py-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex justify-center mb-4">
                    <Fade triggerOnce direction="up" duration={800}>
                        <h3 className="py-1 text-lg px-4 border border-blue-950 tracking-tighter text-blue-950 rounded-full">
                            Avantages financiers pour nos partenaires
                        </h3>
                    </Fade>
                </div>
                <Fade triggerOnce direction="up" duration={800}>
                    <p className="text-2xl max-w-5xl mx-auto md:text-5xl text-black font-bold md:leading-14 mb-8 text-center">
                        Les partenaires Mazia peuvent proposer des solutions adaptées à différents métiers et besoins :
                    </p>
                </Fade>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {avantagesFinanciers.map((item, i) => {
                    const Icon = item.icon;
                        return(
                        <Fade key={i} direction="up" triggerOnce cascade={false} duration={700}>
                            <div className="p-2 space-y-6 text-center">
                                <div className="flex justify-center">
                                    <Icon className="text-blue-900" size={34} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-blue-900">{item.title}</h3>
                                    <p className="text-black/70 text-lg">{item.description}</p>
                                </div>
                            </div>
                        </Fade>
                        )})}
                    </div>
            </div>
            <Fade triggerOnce direction="left" duration={400} delay={200}>
                <div className="mt-12 py-8 w-full bg-[#032ca6]/10 flex items-center justify-center">
                    <p className="text-xl text-center leading-relaxed px-4 ">
                        Mazia permet à vos clients de {" "}
                        <span className="text-blue-900 font-bold">
                            gagner du temps, réduire leurs coûts et augmenter leurs performances,
                        </span>
                        <br />
                        {" "}  tout en générant pour vous un flux de revenus  {" "}
                        <span className="text-blue-900 font-bold">
                            solide et pérenne.
                        </span>
                    </p>
                </div>
            </Fade>
        </section>
    )
}