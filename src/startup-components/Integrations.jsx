import { Fade } from "react-awesome-reveal";
import Hubspot from "./assets/hubsport.png";
import Salesforce from "./assets/salesforce.png";
import Slack from "./assets/slack.png";
import Whatsapp from "./assets/whatssap.png";
import Gmail from "./assets/gmail.png";
import Airtable from "./assets/airtable.png";

export default function Integrations() {
    const logos = [
        { src: Hubspot, alt: "Hubspot", w: 16, h: 16 },
        { src: Salesforce, alt: "Salesforce", w: 16, h: 16 },
        { src: Slack, alt: "Slack", w: 16, h: 16 },
        { src: Whatsapp, alt: "Whatsapp", w: 25, h: 25 },
        { src: Gmail, alt: "Gmail", w: 12, h: 12 },
        { src: Airtable, alt: "Airtable", w: 25, h: 25 },
    ];

    return(
        <section className="relative py-24">
            <div className="max-w-5xl mx-auto px-8">
                <div className="flex items-center justify-center mb-6">
                    <div>
                        <Fade triggerOnce direction='up' duration={1000} delay={400}>
                            <h2 className="text-4xl max-w-4xl px-8 md:text-6xl font-medium mb-24 text-center">
                                Compatible avec vos outils du quotidien
                            </h2>
                        </Fade>
                        <div className="flex justify-center">
                            <Fade triggerOnce direction='up' duration={1000} delay={600}>
                                <p className="text-lg max-w-xl mb-6 text-center px-4 text-gray-300">
                                    Mazia s’intègre avec plus de 450 outils grâce à n8n, permettant d’automatiser facilement 
                                    les workflows (CRM, email, support, calendrier, etc.).
                                </p>
                            </Fade>
                        </div>
                        <Fade triggerOnce direction='up' duration={1000} delay={400}>
                            <div className="flex justify-center items-center gap-6 flex-wrap">
                                {logos.map((logo, index) => (
                                <div
                                key={index}
                                className="w-30 h-30 flex items-center justify-center 
                                    rounded-full bg-white 
                                    hover:scale-105 transition-all"
                                >
                                    <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className= {`object-contain w-${logo.w} h-${logo.h}`}
                                    />
                                </div>
                            ))}
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}