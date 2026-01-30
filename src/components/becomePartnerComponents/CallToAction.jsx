import Laptop from "../assets/laptop2.png";
import { Fade } from "react-awesome-reveal";

export default function CallToAction() {
    return(
        <section className="min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-0 lg:px-8">
            <div className="relative bg-[#032ca6]/90 p-12 lg:rounded-sm 
            grid grid-cols-1 lg:grid-cols-2 items-center w-full lg:max-w-4xl">
                <Fade triggerOnce direction="left" duration={800}>
                <div className="space-y-6">
                    <h2 className=" text-2xl md:text-4xl font-bold mb-4 text-white">
                        Rejoignez l’écosystème Mazia 
                    </h2>
                    <p className="text-sm md:text-lg text-white leading-relaxed">
                        Vous souhaitez proposer Mazia à vos clients et devenir un partenaire privilégié ? 
                        Il vous suffit de remplir notre formulaire de contact et un membre de l’équipe vous 
                        contactera pour discuter de votre profil, vos clients et les prochaines étapes. 
                    </p>
                    <a
                    href="mailto:partnership@mazia.ai"
                    className="inline-flex items-center justify-center
                    px-8 py-2 text-sm md:text-lg font-medium text-[#032ca6] bg-white rounded-lg
                    transition-all duration-300 hover:bg-gray-100"
                    >
                        Devenir partenaire Mazia
                    </a>
                </div>
                </Fade>
                <Fade triggerOnce direction="right" duration={800} className="absolute -right-48 hidden lg:block">
                    <img src={Laptop} alt="Mazia website mockup" className="w-120" />
                </Fade>
            </div>
            </div>
        </section>
    )
}