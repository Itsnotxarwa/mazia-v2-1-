import Header from "./Header";
import Footer from "./Footer";
import DemoForm from "./demoForm";
import { Check } from "lucide-react";

export default function Demo() {

    const rules = [
        {
            icon: Check,
            Text: "Parlez-lui de manière naturelle"
        },
        {
            icon: Check,
            Text: "N'hésitez pas à poser toutes vos questions"
        },
        {
            icon: Check,
            Text: "Saisissez l'occasion de prendre un rendez-vous pour une démonstration personnalisée et discutez de vos besoins spécifiques avec notre équipe."
        },
        {
            icon: Check,
            Text: "Dans un souci d'amélioration de la qualité et de lutte contre les incivilités, cet appel est enregistré."
        }
    ]

    return(
        <div className="min-h-screen">
            <Header />
            <section className="lg:py-24 py-12">
                <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-8 lg:mb-0 ml-6 lg:ml-12 tracking-tight ">
                    Faites-vous appeler 
                    <br />
                    par Mazia
                </h1>
                <div className="space-x-6 flex flex-col lg:flex-row items-center space-y-6  mx-6 lg:mx-12">
                    <div className="max-w-3xl">
                            <p className="text-black/60 text-lg">
                            Renseignez vos coordonnées et notre agent conversationnel vous rappellera  pour vous présenter nos solutions et répondre à toutes vos questions.
                            </p>
                        <div className="space-y-6 p-4 lg:p-8 ">
                                {rules.map((item,i) => {
                                    const Icon = item.icon;
                                    return(
                                        <div 
                                        key={i}
                                        className="flex gap-6 items-start">
                                            <div className="mt-1.5 h-5 w-5 bg-white/60 border-2 border-black rounded-full flex items-center justify-center p-0.5">
                                                <Icon />
                                            </div>
                                            <p className="text-black/60"> {item.Text} </p>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                        <DemoForm />
                </div>
            </section>
            <Footer />
        </div>
    )
}