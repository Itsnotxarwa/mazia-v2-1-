import { Fade } from "react-awesome-reveal";

const whyChooseMazia = [
    {
        title: "L’agent conversationnel le plus humain du marché",
        description: "Capable de gérer les appels entrants et sortants avec une fluidité naturelle.",
        position: "md:absolute right-0 lg:-top-21 md:-top-12"
    },
    {
        title: "Une intégration complète à vos outils métier",
        description: "Connexion aux CRM, ERP, agendas et workflows personnalisés.",
        position: "md:absolute left-0 lg:top-8 md:top-18"
    },
    {
        title: "Un accompagnement complet pour nos partenaires",
        description: "Formation, support, démonstrations et mises à jour continues.",
        position: "md:absolute right-0 lg:top-37 md:top-48"
    },
    {
        title: "Une solution qui renforce l’humain",
        description: "Mazia ne remplace pas vos équipes, elle les rend plus performantes et libère du temps pour les tâches à forte valeur ajoutée.",
        position: "md:absolute left-0 lg:top-66 md:top-78 md:w-160"
    }
];


export default function WhyMazia() {
    return(
        <section className="min-h-screen py24">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex justify-center md:justify-start mb-4">
                    <Fade triggerOnce direction="up" duration={800}>
                        <h3 className="py-1 text-lg px-4 border border-blue-950 tracking-tighter text-blue-950 rounded-full">
                            Pourquoi choisir Mazia ?
                        </h3>
                    </Fade>
                </div>
                <div className="m-4">
                    <p className="text-lg md:text-xl text-center md:text-left leading-relaxed md:max-w-110">
                        Choisir Mazia, c’est s’associer à une technologie de pointe et un écosystème de partenaires solide. Nous nous distinguons par : 
                    </p>
                </div>
                <div className="space-y-6 relative">
                    {whyChooseMazia.map((reason,i) => (
                        <div
                        key={i}
                        className={`${reason.position} p-6 shadow-md border transition-shadow duration-300 hover:shadow-lg border-[#032ca6]/5 space-y-2`}>
                            <h3 className="text-blue-900 text-xl font-semibold">
                                {reason.title}
                            </h3>
                            <p className="text-lg">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}