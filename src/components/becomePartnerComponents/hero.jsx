import PartnerImage from "../assets/become-partner.jpg"

export default function Hero() {
    return(
        <section className="min-h-screen py-24 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div className="flex flex-col justify-center items-start">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tighter font-bold mb-6">
                            Devenez <span className="text-[#032CA6]">partenaire</span> Mazia et transformez l’expérience client de vos clients
                        </h2>
                        <p className="text-sm md:text-lg text-black/70 mb-8">
                            Mazia vous ouvre les portes d’un marché en pleine mutation, avec une technologie unique d’agents IA capables de gérer appels entrants et sortants, d’interagir comme de véritables commerciaux et secrétaires, et de s’intégrer aux outils métiers de vos clients. En devenant partenaire, vous ne fournissez pas simplement un produit : vous proposez une solution complète qui améliore l’efficacité, la satisfaction client et le chiffre d’affaires des entreprises que vous accompagnez. 
                        </p>
                        <button className="bg-[#032CA6] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#021f7a] transition">
                            Devenir partenaire
                        </button>
                    </div>
                    <div>
                        <img src={PartnerImage} />
                    </div>
                </div>
            </div>
        </section>
    )
}