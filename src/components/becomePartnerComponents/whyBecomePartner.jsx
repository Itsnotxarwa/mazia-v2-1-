import { Fade, Slide } from "react-awesome-reveal"

export default function BenefitsForPartners() {
    const benefits = [
        {
            title: "Une technologie différenciante",
            description: "nos agents IA sont capables de comprendre, qualifier, argumenter et agir, tout en s’intégrant aux CRM, ERP et autres outils métier. "
        },
        {
            title: "Une offre flexible et personnalisable",
            description: "chaque client est unique. L’agent Mazia peut être déployé pour un segment précis ou gérer l’ensemble des interactions téléphoniques. "
        },
        {
            title: "Une source de revenus complémentaire",
            description: " nos partenaires peuvent proposer Mazia comme un service à forte valeur ajoutée, créant un flux de revenus récurrent et prévisible. "
        },
        {
            title: "Accompagnement et support dédiés",
            description: "formation, onboarding, documentation complète, et assistance technique pour vous permettre de concentrer votre énergie sur la croissance et la relation client. "
        },
    ]
    return(
        <section className="py-24 min-h-screen">
            <div className=" mx-auto px-4 md:px-6 lg:px-8">
                <Slide triggerOnce direction="left" duration={1000}>
                <div className="bg-[#032ca6]/10 rounded-4xl p-8 grid grid-cols-1 lg:grid-cols-2 lg:w-7xl">
                    <div className="flex flex-col justify-center lg:max-w-2xl mx-auto px-6 gap-4 mb-4">
                        <h3 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#032ca6] mb-4">
                            Pourquoi devenir partenaire Mazia ?
                        </h3>
                        <p className="text-lg md:text-2xl text-black/70 leading-relaxed">
                            Mazia offre un programme conçu pour créer une relation gagnant-gagnant. Nos partenaires bénéficient de : 
                        </p>
                    </div>
                    <div className="space-y-6 lg:-mr-48">
                        {benefits.map((item,i) => (
                            <Fade triggerOnce direction="left" duration={800}>
                            <div
                            key={i}
                            className="p-8 bg-white rounded-2xl flex items-center justify-center gap-3 lg:gap-6 shadow-lg
                            hover:shadow-xl transition-shadow duration-300">
                                <span className="w-3 h-3 lg:w-4 md:h-4 rounded-full bg-[#032CA6] shrink-0" />
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl md:text-2xl font-semibold text-black">
                                        {item.title}
                                    </h3>
                                    <p className="text-[16px] md:text-lg text-black/70 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            </Fade>
                        ))}
                    </div>
                </div>
                </Slide>
            </div>
        </section>
    )
}