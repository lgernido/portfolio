import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Inception</h3>
                        <p className="text-gray-400 mb-4">
                            Introduction to docker
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Docker", "Nginx", "MariaDB", "Virtual Machine"].map((tech, key) => (
                            <span key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/lgernido/Inception" target="blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project → 
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">ft_transcendence</h3>
                        <p className="text-gray-400 mb-4">
                            Recreate a pong game into my own website
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Django", "Python", "OAuth 2.0", "Docker", "Django", "HTML", "CSS", "Javascript"].map((tech, key) => (
                            <span key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/lgernido/ft_transcendence" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project → 
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">fract'ol</h3>
                        <p className="text-gray-400 mb-4">
                            Render beautiful fractals 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C","Minilibx", "Complex numbers", "Event management"].map((tech, key) => (
                            <span key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/lgernido/fractol" target="blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project → 
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Push Swap</h3>
                        <p className="text-gray-400 mb-4">
                            Implement the most efficient sorting algorithm
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C", "Time complexity", "Algorithms", "Linked list"].map((tech, key) => (
                            <span key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/lgernido/push_swap" target="blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project → 
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Minishell</h3>
                        <p className="text-gray-400 mb-4">
                            Recreate a simple shell
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C", "Asymetrical Syntax Tree", "Tokenization"].map((tech, key) => (
                            <span key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/lgernido/minishell" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project → 
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Philosophers</h3>
                        <p className="text-gray-400 mb-4">
                            Learn the basics of threading a process to solve the philosphers problem
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C", "Threads", "Mutexes"].map((tech, key) => (
                            <span key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/lgernido/42-philo" target="blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project → 
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Cub3d</h3>
                        <p className="text-gray-400 mb-4">
                            Use raycasting and minilibx to render a game based on Wolfenstein 3D 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C", "Raycasting", "3D", "Minilibx", "Gaming"].map((tech, key) => (
                            <span key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/lgernido/cub3d" target="blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project → 
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Pipex</h3>
                        <p className="text-gray-400 mb-4">
                            Recreate the pipe command
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C", "Processes", "Redirections"].map((tech, key) => (
                            <span key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/lgernido/pipex" target="blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project → 
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">ft_printf</h3>
                        <p className="text-gray-400 mb-4">
                            Recrate the printf function
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C", "Variadic functions"].map((tech, key) => (
                            <span key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/lgernido/ft_printf" target="blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project → 
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">libft</h3>
                        <p className="text-gray-400 mb-4">
                            First C library with a set of useful functions
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C", "Library", "Linked list", "Makefile"].map((tech, key) => (
                            <span key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/lgernido/libft" target="blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project → 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};