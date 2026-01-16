import BgImage from "../assets/bg.png";
import testimonialsData from "../data/TestimonialsData";

export default function TrustedBy() {
    return(
        <section id="testimonials" className="relative py-24 min-h-screen overflow-hidden">
            <img
                src={BgImage}
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl max-w-5xl md:text-5xl text-white font-semibold md:leading-14 mb-8 text-center">
                            Ils nous ont fait confiance
                        </h2>
                        <p className="text-lg max-w-xl mb-6 text-center text-white px-4">
                            Des entreprises de tous secteurs utilisent Mazia pour automatiser leurs interactions téléphoniques et améliorer la productivité. Découvrez quelques-uns de nos clients et les bénéfices qu’ils ont obtenus grâce à notre assistant IA.
                        </p>
                    </div>
                </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-4 md:p-0 mt-6 md:mt-24">
                {testimonialsData.map((item, i) => {
                    return(
                    <div 
                    key={i} 
                    className="bg-white rounded-xl px-9 py-8 h-80 flex justify-center">
                        <div className="flex flex-col justify-between">
                            <div className="space-y-6">
                            <img src={item.image} className="w-14 rounded-full" />
                            <p className="text-lg">
                                "{item.description}"
                            </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium">{item.name}</h3>
                                <p className="text-sm">{item.entreprise}</p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            </div>
        </section>
    )
}