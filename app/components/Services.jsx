export default function Services() {
  return (
    <section id="services" className="min-h-screen px-6 pt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 bg-gray-100 rounded shadow cursor-pointer">
            <h3 className="font-semibold mb-2">Frontend Development</h3>
            <p className="text-gray-600">React, Next.js, Tailwind CSS</p>
          </div>

          <div className="p-5 bg-gray-100 rounded shadow cursor-pointer">
            <h3 className="font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-600">Node.js, Express, MongoDB</p>
          </div>

          <div className="p-5 bg-gray-100 rounded shadow cursor-pointer">
            <h3 className="font-semibold mb-2">Full-Stack Projects</h3>
            <p className="text-gray-600">Complete MERN apps</p>
          </div>
        </div>
      </div>
    </section>
  );
}
