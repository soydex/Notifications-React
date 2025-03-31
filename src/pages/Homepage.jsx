import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex-grow bg-100">
      <Header />
      <Hero />
      <section className="p-6">
        <h3 className="text-2xl font-semibold">Nouvelle Section</h3>
        <p className="mt-2">Voici une nouvelle section ajoutée pour enrichir la page.</p>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
