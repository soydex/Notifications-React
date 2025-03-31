const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        <p>&copy; 2025 - Tous droits réservés</p>
        <a href="/contact" className="text-blue-400 hover:underline">Contactez-nous</a>
        <div className="mt-2">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            Twitter
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
