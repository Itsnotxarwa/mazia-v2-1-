import Footer from "./Footer";
import Header from "./Header";
import UsageExamples from "./homeComponents/UsageExamples";
import BenefitsSection from "./homeComponents/BenefitsSection";
import FeaturesSection from "./homeComponents/FeaturesSection";
import HeroSection from "./homeComponents/heroSection";
import { Slide } from "react-awesome-reveal";
import TrustedBy from "./homeComponents/TrustedBy";
import Tarifs from "./homeComponents/Tarifs";
import QuestionsSection from "./homeComponents/QuestionsSection";
import DemoRequest from "./homeComponents/DemoRequest";

export default function Homepage() {
    return(
        <div className="min-h-screen bg-white text-black overflow-hidden">
            <Header />
            <HeroSection />
            <BenefitsSection />
            <Slide triggerOnce direction="up" duration={1000} delay={400}>
            <FeaturesSection />
            </Slide>
            <UsageExamples />
            <Slide triggerOnce direction="up" duration={1000} delay={400}>
            <TrustedBy />
            </Slide>
            <Tarifs />
            <Slide triggerOnce direction="up" duration={1000} delay={400}>
            <QuestionsSection />
            </Slide>
            <DemoRequest />
            <Footer />
        </div>
    )
}