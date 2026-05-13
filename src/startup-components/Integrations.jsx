import { Fade } from "react-awesome-reveal";
import ZapierLogo from "./assets/zapier-logo.png";

export default function Integrations() {
    return(
        <section className="relative py-24">
            <div className="max-w-5xl mx-auto px-8">
                <div className="flex items-center justify-center mb-6">
                    <div>
                        <Fade triggerOnce direction='up' duration={1000} delay={400}>
                            <h2 className="text-2xl max-w-4xl px-8 md:text-6xl font-medium mb-24 text-center">
                                Compatible avec vos outils du quotidien
                            </h2>
                        </Fade>
                        <Fade triggerOnce direction='up' duration={1000} delay={400}>
                            <div className="flex justify-center items-center gap-6 flex-wrap">
                                {[...Array(6)].map((_, index) => (
                                <div
                                key={index}
                                className="w-30 h-30 flex items-center justify-center 
                                    rounded-full bg-white 
                                    hover:scale-105 transition-all"
                                >
                                    <img
                                    src={ZapierLogo}
                                    alt="Zapier"
                                    className="w-20 h-20 object-contain"
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