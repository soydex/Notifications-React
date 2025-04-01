import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex-grow bg-100 ml-[250px]">
      <Header />
      <Hero />
      <section className="p-6">
        <h3 className="text-2xl font-semibold mb-2">Nouvelle Section</h3>
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
              className="flex flex-col gap-2 p-4 items-start rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {card.image && (
                <img
                  src={card.image}
                  alt={card.alt || "Image"}
                  className="mb-4 w-full object-cover rounded-t-lg"
                />
              )}
              <h4 className="text-3xl font-semibold mb-2">{card.title}</h4>
              <p className="text-600 text-center">{card.description}</p>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-3.5 h-3.5 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                Buy now
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
