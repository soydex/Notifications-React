const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="text-lg font-bold mb-4">Navigation</h2>
      <ul>
        <li className="mb-2">
          <a href="/" className="hover:underline">Accueil</a>
        </li>
        <li className="mb-2">
          <a href="/about" className="hover:underline">À propos</a>
        </li>
        <li>
          <a href="/contact" className="hover:underline">Contact</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
