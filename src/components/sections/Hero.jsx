const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-primary-600 mb-4 font-medium">
          Creative UX Designer
        </p>
        <h1 className="text-5xl md:text-3xl font-bold mb-6 text-gray-900 leading-tight">
          Crafting Digital Experiences
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          I design user-centered digital products that blend aesthetics with
          functionality.
        </p>
        <button className="px-8 py-4 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors duration-300">
          View my work
        </button>
      </div>
    </section>
  );
};

export default Hero;
