import { Fade } from "react-awesome-reveal";

export default function QuickSetup() {
    const steps = [
    {
        step: "Étape 1",
        title: "Prise de contact",
        description:
            "Cette étape est essentielle pour comprendre vos cas d’usage, définir le ton de votre agent, sa voix et l’ensemble des paramètres nécessaires à sa configuration. Chaque agent est conçu pour refléter fidèlement votre marque et vos valeurs."
    },
    {
        step: "Étape 2",
        title: "La configuration",
        description:
            "Chaque agent Mazia est conçu sur mesure à partir de vos besoins, de vos cas d’usage et de votre identité, pour s’intégrer parfaitement à votre produit et à votre vision."
    },
    {
        step: "Étape 3",
        title: "Le déploiement",
        description:
            "Une fois votre agent créé et configuré, il est déployé dans votre infrastructure et connecté à vos outils pour une utilisation immédiate. Vous accédez ensuite à un dashboard dédié pour suivre, analyser et piloter ses performances."
    }
];
    return(
        <section className="relative py-24">
            <div className="max-w-6xl mx-auto px-8">
                <div className="flex items-center justify-center mb-6">
                    <div className="space-y-4">
                        <Fade triggerOnce direction='up' duration={1000} delay={400}>
                            <h2 className="text-4xl max-w-5xl md:text-6xl font-medium mb-10 text-center
                            text-transparent bg-clip-text bg-linear-to-r from-white to-[#0CCBB4] ">
                                Une mise en place simple et rapide
                            </h2>
                        </Fade>
                        <div className="flex justify-center">
                            <Fade triggerOnce direction='up' duration={1000} delay={600}>
                                <p className="text-lg max-w-xl mb-6 text-center px-4 text-gray-300">
                                    Mazia s’intègre à votre produit en seulement 3 étapes, sans complexité ni friction.
                                </p>
                            </Fade>
                        </div>
                    </div>
                </div>

                <Fade triggerOnce direction='up' duration={1000} delay={800}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((item, i) => {
                            return (
                                <div className="p-[1.5px] rounded-[5px] bg-linear-to-r from-[#0CCBB4] to-[#0E63DD]">
                                    <div
                                        key={i}
                                        className="group p-4 text-left h-full
                                        transition-all duration-500 bg-[#0F162B] rounded-[5px]
                                        overflow-hidden flex flex-col items-start justify-start"
                                    >
                                        <div className="z-50">
                                            <h2 className="inline-block text-sm font-bold text-transparent bg-clip-text bg-linear-to-r from-[#0CCBB4] to-[#0E63DD] mb-4">{item.step}</h2>
                                            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
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