import { MessageSquareQuote } from "lucide-react";

const testimonials = [
    {
        quote: "Travailler avec Mazia a transformé notre offre pour nos clients. L’agent IA permet de déléguer la partie commerciale répétitive et de se concentrer sur le conseil stratégique. Les clients adorent la fluidité des échanges.",
        author: "SME StrategiTech"
    },
    {
        quote: "La mise en place a été simple et rapide, et nous avons commencé à générer des revenus dès le premier mois. L’accompagnement de l’équipe Mazia est exceptionnel.",
        author: "Kevin D. Consultant indépendant"
    }
];

export default function Testimonials() {
    return (
    <section className="py-24 bg-[#032ca6]/5">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
                Témoignages et retours
            </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {testimonials.map((t, i) => (
                <div key={i} className="relative p-8 bg-white rounded-2xl shadow-md">
                    <span className="text-6xl text-[#032ca6] absolute -top-6 -left-4">
                        <MessageSquareQuote size={34}/>                    
                    </span>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">{t.quote}</p>
                    <p className="font-semibold text-gray-900">– {t.author}</p>
                </div>
            ))}
        </div>
        </div>
    </section>
);
}
