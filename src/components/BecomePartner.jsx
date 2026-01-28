import Header from "../Header";
import WhyBecomePartner from "./becomePartnerComponents/whyBecomePartner";
import Hero from "./becomePartnerComponents/hero";
import HowItWorks from "./becomePartnerComponents/HowItWorks";
import PartnerProfile from "./becomePartnerComponents/partnerProfile";
import UseCases from "./becomePartnerComponents/useCases";
import FinancialBenefits from "./becomePartnerComponents/FinancialBenefits";
import Footer from "../Footer"
import ProcessusDePartenariat from "./becomePartnerComponents/processusDePartenariat ";
import WhyMazia from "./becomePartnerComponents/whyMazia";

export default function BecomePartner() {
    return(
        <div>
            <Header />
            <Hero />
            <WhyBecomePartner />
            <PartnerProfile />
            <HowItWorks />
            <UseCases />
            <FinancialBenefits />
            <ProcessusDePartenariat />
            <WhyMazia />
            <Footer />
        </div>
    )
}