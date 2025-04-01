import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex-grow bg-100">
      <Header />
      <Hero />
      <section className="p-6">
        <h3 className="text-2xl font-semibold mb-4">Nouvelle Section</h3>
        <p className="mb-6">
          Voici une nouvelle section ajoutée pour enrichir la page.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Sous-section 1",
              description: "Détails de la sous-section 1.",
              image: "./src/sources/flowers.png",
              alt: "Fleurs",
            },
            {
              title: "Sous-section 2",
              description: "Détails de la sous-section 2.",
              image: "./src/sources/flowers.png",
              alt: "Fleurs",
            },
            {
              title: "Sous-section 3",
              description: "Détails de la sous-section 3.",
              image: "./src/sources/flowers.png",
              alt: "Fleurs",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-4 rounded-lg shadow-md"
            >
              {card.image && (
                <img
                  src={card.image}
                  alt={card.alt || "Image"}
                  className="mb-4 w-full object-cover rounded-lg"
                />
              )}
              <h4 className="text-3xl font-semibold mb-2">{card.title}</h4>
              <p className="text-600 text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
