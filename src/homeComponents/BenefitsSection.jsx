import { benefits } from "../data/BenefitsData";
import { Fade } from "react-awesome-reveal";

export default function BenefitsSection() {

    return(
        <section className="relative pt-24 pb-32">
            <div className="mx-auto px-8 sm:px-6 lg:px-16">
                <div className="flex items-center justify-center mb-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                    <Fade triggerOnce direction='up' duration={1000} delay={200}>
                    <h2 className="text-lg border border-blue-950 rounded-full px-4 py-1 tracking-tighter text-center text-blue-950 mb-4">Pourquoi Mazia ?</h2>
                    </Fade>
                    </div>
                    <Fade triggerOnce direction='up' duration={1000} delay={400}>
                    <h2 className="text-4xl max-w-5xl md:text-5xl text-black font-bold md:leading-14 mb-8 text-center">
                        Un assisstant IA pour vos appels professionels
                    </h2>
                    </Fade>
                    <div className="flex justify-center">
                    <Fade triggerOnce direction='up' duration={1000} delay={600}>
                    <p className="text-lg max-w-xl mb-6 text-center text-blue-950 px-4">
                        Mazia automatize vos intercations téléphoniques pour vous faire gagner du temps, améliorer l'efficacité de vos équipes et garantir une expérience client constante et professionelle.
                    </p>
                    </Fade>
                    </div>
                  </div>
                </div>
                <Fade triggerOnce direction='up' duration={1000} delay={800}>
                <div className="grid grid-cols-1 md:grid-cols-3 space-y-4">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group p-4 md:p-8 text-left 
                  transition-all duration-500
                  overflow-hidden flex flex-col justify-center"
                >
                  <div className="z-50">
                  <div className="flex justify-start mb-6 text-black">
                    <Icon size={45} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-lg">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          </Fade>
        </div>
          </section>
    )
}