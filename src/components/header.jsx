const Header = () => {
    return (
      <header className="bg-blue-600 text-white p-4 shadow-lg">
        <h1 className="text-xl font-bold">Ma Super Page</h1>
        <nav className="mt-2">
          <a href="/" className="mr-4 hover:underline">Accueil</a>
          <a href="/about" className="hover:underline">À propos</a>
        </nav>
      </header>
    );
  };
export default Header;
