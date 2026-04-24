export default function Hero() {
  return (
    <section id="home" className="text-center py-24 bg-gradient-to-r from-blue-50 to-white">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Upskill Your Workforce
      </h1>

      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        Transform your organization with industry-ready programs.
      </p>

      <a href="#contact">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
          Get Started
        </button>
      </a>
    </section>
  );
}