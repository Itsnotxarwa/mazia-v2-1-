import { Dot} from "lucide-react";
import { question } from "../data/Questions";
import bgImage from "../assets/bg.png"

export default function QuestionsSection() {

    return(
        <section className="relative py-24 px-4 min-h-screen">

            <img 
            src={bgImage} 
            className="absolute w-full h-full inset-0 object-cover z-0" />

            <div className="relative max-w-5xl mx-auto ">
                <div className="text-left mb-14">
                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Questions fréquentes</h3>
                </div>
            
            
                <div className="mx-auto py-8 px-4 sm:px-6 bg-[#e2e9fe]">
                    <div className="space-y-1">
                        {question.map((item,i) => {
                        return(
                        <div 
                        key={i}
                        className="flex flex-col group backdrop-blur-sm rounded-lg 
                        overflow-hidden ">
                                <div className="space-y-6">
                                    <ul className="list-disc pl-5">
                                        <li className="font-medium md:text-lg text-base">{item.question}</li>
                                    </ul>
                                </div>
                            <div className="px-5 pb-4 w-full">
                                <div className="w-10 h-px border-t border-dashed border-black/10 mb-3"></div>
                                <p className="text-black/70 text-sm md:text-lg text-left">{item.answer}</p>
                            </div>
                        </div>
                        )})}
                    </div>
                </div>
                </div>
        </section>
    )
}