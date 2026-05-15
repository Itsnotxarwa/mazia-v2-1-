import { Fade } from "react-awesome-reveal";
import PicOne from "./assets/image1.png";
import PicTwo from "./assets/image2.png";
import PicThree from "./assets/image3.png";

export default function Fonctionnalities() {
    const fonctionnalities =[
            {
                title: "Mazia s’intègre dans votre produit",
                description: "Votre agent Mazia s’intègre directement au cœur de votre solution, et ne se limite pas à un simple rôle de support. Vous profitez ainsi de toute la puissance d’un agent IA capable de gérer les appels, qualifier les prospects et automatiser les interactions avec vos utilisateurs, sans avoir à consacrer des heures au développement d’une solution complexe.",
                image: PicOne
            },
            {
                title: "Mazia automatise vos interactions clients",
                description: "Votre agent Mazia automatise intelligemment vos appels, notifications, relances et la qualification de vos prospects, sans que votre équipe n'ait à intervenir en permanence. Votre équipe peut ainsi se concentrer sur les tâches à forte valeur ajoutée, pendant que Mazia s'occupe du reste.",
                image: PicTwo
            },
            {
                title: "Mazia s'adapte automatiquement à votre croissance",
                description: "Une fois déployé, Mazia s'adapte automatiquement à vos flux de données et à la croissance de votre startup. Plus d'utilisateurs, plus d'appels, plus d'interactions : l'agent IA gère l'échelle sans que vous ayez besoin de reconfigurer votre système.",
                image: PicThree
            },
        ]
    return(
        <section className="relative py-24">
            <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-16">
                <div className="flex items-center justify-center mb-6">
                    <div className="space-y-4">
                        <Fade triggerOnce direction='up' duration={1000} delay={400}>
                            <h2 className="text-4xl max-w-5xl md:text-6xl font-medium mb-10 text-center
                            text-transparent bg-clip-text bg-linear-to-r from-white to-[#0CCBB4] ">
                                Comment Mazia fonctionne
                            </h2>
                        </Fade>
                        <div className="flex justify-center">
                            <Fade triggerOnce direction='up' duration={1000} delay={600}>
                                <p className="text-lg max-w-xl mb-6 text-center px-4 text-gray-300">
                                    Profitez de toute la puissance d’un agent conversationnel, déployé en quelques minutes, sans prise de tête.
                                </p>
                            </Fade>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div>
                        {fonctionnalities.map((item, i) => (
                            <Fade triggerOnce direction="left" duration={800} delay={400}>
                                <div
                                key={i}  
                                className="mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="flex flex-col justify-start items-start space-y-6">
                                        <h3 className="text-[32px] font-medium max-w-sm leading-shung">
                                        {item.title}
                                        </h3>
                                        <p className="text-base text-gray-300 text-left max-w-md">{item.description}</p>
                                    </div>
                
                                    <div className="flex justify-end items-end w-70">
                                        <img src={item.image} className="" />
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