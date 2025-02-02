import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Únete a Nuestra Misión</h2>
        <p className="text-lg mb-8">
          Apoya nuestra causa como voluntario o haciendo una donación.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/voluntarios"
            className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition"
          >
            Sé Voluntario
          </a>
          <a
            href="/donaciones"
            className="bg-gray-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-600 transition"
          >
            Haz una Donación
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
