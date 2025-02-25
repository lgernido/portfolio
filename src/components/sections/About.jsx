import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {

    const technicalSkills = ["Data structures", "Algorithms", "Object oriented programming", "Debugging", "Unit tests", "Clean code"];
    const languagesKnown = ["C", "C++", "Python", "HTML"];
    const frameworksUsed = ["React", "Django", "Vite", "TailwindCSS", "Docker"];
    const dataBase = ["PostgreSQL", "MariaDB"];


    return (
        
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div  className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I started my software engineer journey in 2023 when I joined 42. I have a strong passion for problem solving and learning about new technology.
                        Ideally,  I would like to pursue a career in data, machine learning and artificial intelligence. 
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Technical Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {technicalSkills.map((tech, key) => (
                                    <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}

                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Frameworks & DevOps
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {frameworksUsed.map((tech, key) => (
                                    <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Programming Languages
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {languagesKnown.map((tech, key) => (
                                    <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}

                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-2  md:col-span-1">
                                Databases
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {dataBase.map((tech, key) => (
                                    <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                    <strong> Software Engineer student </strong> - 42 [2023 - Now]
                                </li>
                                <li>
                                    <strong> Master in Digital Marketing</strong> - ESSCA School of management [2017-2022]
                                </li>
                                <li>
                                    Relevant Coursework : Data Structures, Web Development, Big Data, System Administration...
                                </li>
                            </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Software Engineer at ESPN (2020-present)</h4>
                                    <p>Made women's basketball popular.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Software Engineer at ESPN (2020-present)</h4>
                                    <p>Made women's basketball popular.</p>
                                </div>

                            </div>
                    </div>
                </div>
                    <div className="mt-5 flex justify-center">
                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                    Full Resume
                </a>
                    </div>
            </div>
            </ RevealOnScroll>
        </section>
    );
};