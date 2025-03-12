import { useState, useEffect } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Project';
import { Contact } from './components/sections/Contact';
import "./index.css";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <>
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

            <div className={`min-h-screen transition-colors duration-300 ${
                isDarkMode ? "bg-black text-gray-100" : "bg-[#B8D1E5] text-white"
            }`}>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Home />
                <About />
                <Projects />
                <Contact />
            </div>
        </>
    );
}

export default App;
