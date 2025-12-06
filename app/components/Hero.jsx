export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-28 gap-10 "
    >
      {/* Left text */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Muhammad Abdullah</h1>
        <p className="text-lg text-gray-600">
          Software Engineering student and Full-Stack Developer skilled in
          React, Next.js, Node.js, Express, and MongoDB.
        </p>
      </div>

      {/* Right image */}
      <div>
        <img
          src="/myimage.jpg"
          alt="Muhammad Abdullah"
          className="w-48 h-48 object-cover rounded-full border shadow"
        />
      </div>
    </section>
  );
}
