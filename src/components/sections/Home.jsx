import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#73000a] to-[#8a1c1c] bg-clip-text text-transparent bg-white leading-right">
                        Hello! I'm Lucie Gernidos
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        I am a software engineer student at 42 based in Paris.
                        Currently available for a 6 months internship.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-[#73000a] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(115, 0, 10, 0.4)]">
                            View Projects
                        </a>
                        <a href="#contact" className="border border-[#73000a]/50 text-[#73000a] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(115, 0, 10, 0.2)] hover:bg-[#73000a]/10">
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};