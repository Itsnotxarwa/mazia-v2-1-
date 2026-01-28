import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fade } from "react-awesome-reveal";

gsap.registerPlugin(ScrollTrigger);

 const steps = [
        {
            id: 1,
            title: "Prise de contact et qualification",
            description: "Nous discutons de votre profil, de vos clients et de vos objectifs. "
        },
        {
            id: 2,
            title: "Présentation de l’offre",
            description: "Démonstration live de l’agent Mazia et des cas d’usage adaptés à vos clients. "
        },
        {
            id: 3,
            title: "Formation et onboarding",
            description: "Sessions en ligne pour vous familiariser avec les outils, le CRM et le script conversationnel. "
        },
        {
            id: 4,
            title: "Premiers tests clients",
            description: "Mise en place d’un pilote pour un segment limité, suivi et optimisation. "
        },
        {
            id: 5,
            title: "Déploiement et accompagnement continu",
            description: "Suivi, reporting et optimisation des performances pour garantir le succès commercial et opérationnel. "
        }
];

export default function ProcessusDePartenariat() {
    const lineRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
  gsap.fromTo(
    lineRef.current,
    { scaleY: 0 },
    {
      scaleY: 1,
      transformOrigin: "top",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 80%",
        scrub: true
      }
    }
  );
}, []);

    return(
        <section className="min-h-screen py-24 relative z-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-4">
                <div className="flex justify-center items-center">
                    <Fade triggerOnce direction="up" duration={800}>
                    <h3 className="text-lg py-1 px-4 border whitespace-nowrap border-blue-950 text-blue-950 rounded-full tracking-tighter mb-4">
                        Processus de partenariat 
                    </h3>
                    </Fade>
                </div>
                <Fade triggerOnce direction="up" duration={800}>
                <p className="text-2xl max-w-5xl mx-auto md:text-5xl text-black font-bold md:leading-14 mb-8 text-center">
                    Le parcours pour devenir partenaire Mazia est simple et rapide
                </p>
                </Fade>
                <div ref={containerRef} className="relative">
                    <div className="absolute hidden md:block left-10 top-5 h-200 w-0.5 bg-blue-900 origin-top" ref={lineRef}></div>
                    <div className="space-y-12">
                        {steps.map((step,i) => (
                            <Fade direction="up" triggerOnce cascade={false} duration={800} >
                            <div
                            key={i}
                            className="flex items-start gap-2 md:gap-8">
                                <div className="shrink-0">
                                    <div className="w-8 h-8 md:w-20 md:h-20 rounded-full bg-blue-900 text-lg md:text-2xl shadow-lg flex justify-center items-center font-semibold text-white">
                                        {step.id}
                                    </div>
                                </div>
                                
                                <div className="flex flex-col p-4 md:p-8 bg-white shadow-xl transition-shadow duration-300 rounded-2xl gap-1 border border-[#032ca6]/5
                                hover:shadow-2xl w-full">
                                    <h3 className="text-2xl font-semibold mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-black/70 text-lg">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}