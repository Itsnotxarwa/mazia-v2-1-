import { Fade } from "react-awesome-reveal";
import { Phone, Star, Heart } from "lucide-react";

export default function Features() {
    const Features = [
        {
            title: "S’intégrer à vos outils",
            description:
            "Mazia se connecte facilement à votre stack (CRM, API, base de données) et s’intègre naturellement à vos workflows existants, sans complexité.",
            icon: Phone,
        },
        {
            title: "Converser comme un humain",
            description:
              "Grâce à une intelligence conversationnelle avancée, Mazia comprend les demandes, répond avec naturel et offre une expérience fluide à vos utilisateurs.",
            icon: Star,
        },
        {
            title: "Réaliser des actions automatisées",
            description:
              "Mazia ne se contente pas de répondre : il exécute des actions, déclenche des processus et automatise vos interactions en temps réel.",
            icon: Heart,
        },
];
    return(
        <section className="relative py-24">
            <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-16">
                <div className="flex items-center justify-center mb-6">
                    <div className="space-y-4">
                            <Fade triggerOnce direction='up' duration={1000} delay={400}>
                                <h2 className="text-2xl max-w-5xl md:text-6xl font-medium mb-10 text-center">
                                    Ce que Mazia peut faire
                                </h2>
                            </Fade>
                            <div className="flex justify-center">
                                <Fade triggerOnce direction='up' duration={1000} delay={600}>
                                    <p className="text-lg max-w-xl mb-6 text-center px-4 text-gray-300">
                                        Un agent vocal qui comprend vos utilisateurs, agit pour vous et se déploie en quelques minutes.
                                    </p>
                                </Fade>
                            </div>
                          </div>
                        </div>
                        <Fade triggerOnce direction='up' duration={1000} delay={800}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Features.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div className="p-[1.5px] rounded-[5px] bg-linear-to-r from-[#0CCBB4] to-[#0E63DD]">
                        <div
                          key={i}
                          className="group p-4 text-left h-full
                          transition-all duration-500 bg-[#0F162B] rounded-[5px]
                          overflow-hidden flex flex-col items-start justify-center"
                        >
                          <div className="z-50">
                          <div className="flex justify-start mb-6">
                            <svg width="0" height="0">
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#0CCBB4" />
                                    <stop offset="100%" stopColor="#0E63DD" />
                                </linearGradient>
                            </svg>
                            <Icon size={38} stroke="url(#gradient)" />
                          </div>
                          <h3 className="text-xl text-transparent bg-clip-text bg-linear-to-r from-white to-[#0CCBB4] font-semibold mb-4">{item.title}</h3>
                          <p className="text-[16px] leading-relaxed text-gray-300">{item.description}</p>
                          </div>
                        </div>
                        </div>
                      );
                    })}
                  </div>
                  </Fade>
                </div>
                  </section>
    )
}