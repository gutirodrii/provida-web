import React from "react";

const HeroSection = () => {
  return (
    <section className="relative -top-16 h-120">
      <img
        src="/images/hero-bebe.webp"
        alt="Hero Image"
        className="relative inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dentro de ti tienes una nueva Vida, ¡No la cortes!
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Provida estará a tu lado, te dará soluciones, te ayudará a ver
            mejores horizontes.
          </p>
          <a
            href="/apoyo-embarazadas"
            className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            ¿Necesitas ayuda?
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
