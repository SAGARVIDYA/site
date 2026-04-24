export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Clients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 shadow-lg rounded-xl bg-gray-50">
          <p>"Amazing learning experience!"</p>
          <h4 className="mt-4 font-semibold">— John</h4>
        </div>

        <div className="p-6 shadow-lg rounded-xl bg-gray-50">
          <p>"Highly recommended."</p>
          <h4 className="mt-4 font-semibold">— Sarah</h4>
        </div>

        <div className="p-6 shadow-lg rounded-xl bg-gray-50">
          <p>"Very useful courses."</p>
          <h4 className="mt-4 font-semibold">— David</h4>
        </div>
      </div>
    </section>
  );
}