export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 pt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          <li className="p-4 bg-gray-100 rounded cursor-pointer">HTML</li>
          <li className="p-4 bg-gray-100 rounded cursor-pointer">CSS</li>
          <li className="p-4 bg-gray-100 rounded cursor-pointer">JavaScript</li>
          <li className="p-4 bg-gray-100 rounded cursor-pointer">React</li>
          <li className="p-4 bg-gray-100 rounded cursor-pointer">Next.js</li>
          <li className="p-4 bg-gray-100 rounded cursor-pointer">Tailwind CSS</li>
          <li className="p-4 bg-gray-100 rounded cursor-pointer">Node.js</li>
          <li className="p-4 bg-gray-100 rounded cursor-pointer">Express</li>
          <li className="p-4 bg-gray-100 rounded cursor-pointer">MongoDB</li>
        </ul>
      </div>
    </section>
  );
}
