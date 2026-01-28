import { Fade } from "react-awesome-reveal";
import { HandFist, ChartLine, Phone, Workflow, Calendar } from "lucide-react";

const useCases = [
  {
    icon: HandFist,
    title: "Support et service client",
    description: "Réduction des temps d’attente, réponses instantanées, gestion 24/7 des appels entrants."
  },
  {
    icon: ChartLine,
    title: "Acquisition et vente",
    description: "Qualification automatique des leads, prise de rendez-vous et suivi commercial sans effort humain."
  },
  {
    icon: Phone,
    title: "Secrétariat et gestion d’appels",
    description: "Réception et gestion des appels, filtrage et orientation vers les bonnes équipes."
  },
  {
    icon: Workflow,
    title: "Automatisation des processus métier",
    description: "Intégration à des workflows existants, déclenchement d’actions sur ERP, CRM ou autres systèmes."
  },
  {
    icon: Calendar,
    title: "Service interne",
    description: "Organisation des agendas, notifications, rappels et coordination interne."
  },
];

export default function UseCases() {
    return (
<section className="min-h-screen py-24">
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-4">
        <Fade triggerOnce direction="up" duration={800}>
        <div className="flex items-center justify-center mb-4">
            <h3 className="py-1 px-4 border border-blue-950 tracking-tighter text-blue-950 rounded-full">
                Cas d’usage pour vos clients
            </h3>
        </div>
        </Fade>
        <Fade triggerOnce direction="up" duration={800}>
        <p className="text-2xl max-w-5xl mx-auto md:text-5xl text-black font-bold md:leading-14 mb-8 text-center">
            Les partenaires Mazia peuvent proposer des solutions adaptées à différents métiers et besoins :
        </p>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1">
          {useCases.map((item, i) => {
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
      <div className="mt-12 py-8 w-full bg-[#032ca6]/10 flex items-center justify-center">
          <p className="text-xl text-center leading-relaxed px-4">
              <span className="text-blue-900 font-bold">
                  Chaque cas d’usage peut être personnalisé
              </span>
              {" "} pour les besoins spécifiques du client final, garantissant {" "}
              <br />
              <span className="text-blue-900 font-bold">
                  un retour sur investissement rapide et tangible.
              </span>
          </p>
      </div>
    </section>
  );
}
