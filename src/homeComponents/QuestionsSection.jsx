import { useState } from "react";
import { question } from "../data/Questions";
import { ChevronDown } from "lucide-react";

export default function QuestionsSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const [visibleCount, setVisibleCount] = useState(3);

    const handleToggle = () => {
        if (visibleCount >= question.length) {
            setVisibleCount(3);
        } else {
            setVisibleCount(prev => prev + 3);
        } 
    }

    return(
        <section id="questions" className="relative py-24 px-4 min-h-screen">

            <div className="relative max-w-5xl mx-auto ">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">Questions fréquentes</h2>
                </div>
            
            
                <div className="mx-auto py-8 px-4 sm:px-6">
                    <div className="space-y-1">
                        {question.slice(0, visibleCount).map((item,i) => {
                        const isOpen = openIndex === i;
                        return(
                        <div 
                        key={i}
                        className="flex flex-col group overflow-hidden group mb-4
                        bg-white border border-gray-200 hover:border-[#032CA6]/70 transition-all duration-300  rounded-lg shadow-xs hover:shadow-lg">
                                    <div className="flex justify-between items-center cursor-pointer 
                                    group-hover:bg-gray-50 px-6 md:px-8 py-6 md:py-8 "
                                    onClick={() => setOpenIndex(isOpen ? null : i)}>
                                        <h3 className="text-lg md:text-xl text-left font-bold">
                                            {item.question}
                                        </h3>
                                            <ChevronDown size={18} className={`transition-transform duration-300 
                                                ${isOpen ? "rotate-180" : "rotate-0"}`} />
                                    </div>
                                {isOpen && (
                                    <div className="px-5 pb-4 w-full">
                                        <div className="w-10 h-px border-t border-dashed border-black/10 mb-3"></div>
                                        {Array.isArray(item.answer) ? (
                                            <ul className="list-disc pl-5 text-black/70 text-sm md:text-lg text-left space-y-1">
                                                {item.answer.map((ans, index) => (
                                                    <li key={index}>{ans}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-black/70 text-sm md:text-lg text-left">{item.answer}</p>
                                        )}
                                    </div>
                                )}
                        </div>
                        )})}
                        <div 
                        className="flex justify-end text-sm text-black/70 hover:underline
                        cursor-pointer"
                        onClick={handleToggle}>
                            {visibleCount >= question.length ? "Voir moins" : "Voir plus"}
                        </div>
                    </div>
                </div>
                </div>
        </section>
    )
}