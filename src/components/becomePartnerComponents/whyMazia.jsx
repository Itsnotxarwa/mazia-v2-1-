import { Fade } from "react-awesome-reveal";

const whyChooseMazia = [
    {
        title: "L’agent conversationnel le plus humain du marché",
        description: "Capable de gérer les appels entrants et sortants avec une fluidité naturelle.",
    },
    {
        title: "Une intégration complète à vos outils métier",
        description: "Connexion aux CRM, ERP, agendas et workflows personnalisés.",
    },
    {
        title: "Un accompagnement complet pour nos partenaires",
        description: "Formation, support, démonstrations et mises à jour continues.",
    },
    {
        title: "Une solution qui renforce l’humain",
        description: "Mazia ne remplace pas vos équipes, elle les rend plus performantes et libère du temps pour les tâches à forte valeur ajoutée.",
    }
];


export default function WhyMazia() {
    return(
        <section className="min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex justify-center mb-8">
                    <Fade triggerOnce direction="up" duration={800}>
                        <h3 className="py-1 text-lg px-4 border border-blue-950 tracking-tighter text-blue-950 rounded-full">
                            Pourquoi choisir Mazia ?
                        </h3>
                    </Fade>
                </div>
                <div className="mb-4">
                    <Fade triggerOnce direction="up" duration={800}>
                    <p className="text-2xl max-w-4xl mx-auto md:text-4xl text-black font-bold mb-8 text-center">
                        Choisir Mazia, c’est s’associer à une technologie de pointe et un écosystème de partenaires solide. Nous nous distinguons par : 
                    </p>
                    </Fade>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-8">
                    {whyChooseMazia.map((reason,i) => (
                        <Fade triggerOnce direction="up" duration={1000}>
                        <div
                        key={i}
                        className="p-6 space-y-2 text-center">
                            <h3 className="text-blue-900 text-2xl font-semibold">
                                {reason.title}
                            </h3>
                            <p className="text-lg">
                                {reason.description}
                            </p>
                        </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    )
}