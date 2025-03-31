import { useState, useEffect } from "react";

const Hero = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <section className="text-center p-10">
      <h2 className="text-3xl font-bold mb-4">Bienvenue sur ma page React !</h2>
      <p className="text-gray-700 mb-4">Explore les fonctionnalités interactives.</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Compteur : {count}
      </button>
      <div className="mt-4">
        <button
          onClick={toggleTheme}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
        >
          Basculer en {darkMode ? "mode clair" : "mode sombre"}
        </button>
      </div>
    </section>
  );
};

export default Hero;
