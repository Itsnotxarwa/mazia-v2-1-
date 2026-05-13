import Header from "../Header";
import Hero from "./hero";
import Features from "./Features";
import Divider from "./Divider";
import Fonctionnalities from "./Fonctionnalities";
import Footer from "../Footer";
import Solution from "./Solution";
import QuickSetup from "./QuickSetup";
import DataPrivacy from "./DataPrivacy";
import Integrations from "./Integrations";

export default function Home() {
    return(
        <div className="min-h-screen bg-[#0F162B] text-white overflow-auto">
            <Header />
            <Hero />
            <Divider />
            <Features />
            <Divider />
            <Fonctionnalities />
            <Divider />
            <Solution />
            <Divider />
            <QuickSetup />
            <DataPrivacy />
            <Integrations />
            <Footer />
        </div>
    )
}