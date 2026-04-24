export default function Features() {
  return (
    <section id="features" className="py-16 px-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 shadow-lg rounded-xl bg-white">
          <h3 className="font-semibold text-xl">Industry Experts</h3>
          <p className="text-gray-600 mt-2">
            Learn from professionals.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-xl bg-white">
          <h3 className="font-semibold text-xl">Flexible Learning</h3>
          <p className="text-gray-600 mt-2">
            Learn anytime, anywhere.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-xl bg-white">
          <h3 className="font-semibold text-xl">Career Growth</h3>
          <p className="text-gray-600 mt-2">
            Boost your career.
          </p>
        </div>
      </div>
    </section>
  );
}