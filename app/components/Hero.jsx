export default function Hero() {
  return (
    <section id="home" className="min-h-screen px-6 pt-32 pb-16 flex items-center">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex neo-sm px-5 py-3 text-sm muted">
            Software Engineering Student • Cloud & DevOps Learner
          </div>

          <h1 className="mt-7 text-5xl sm:text-6xl font-bold leading-tight text-white">
            Muhammad
            <br />
            Abdullah
          </h1>

          <p className="mt-6 text-lg leading-8 muted max-w-2xl">
            I build modern web applications and explore cloud infrastructure,
            DevOps workflows, and scalable deployment systems using AWS, Docker,
            Linux, networking, and the MERN stack.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#skills"
              className="neo-button px-6 py-4 text-white font-medium"
            >
              View Skills
            </a>

            <a
              href="#contact"
              className="neo-button px-6 py-4 text-white font-medium"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div className="neo-sm p-5">
    <p className="text-sm subtle">Focus</p>
    <p className="mt-2 text-white font-semibold">Cloud & DevOps</p>
  </div>

  <div className="neo-sm p-5">
    <p className="text-sm subtle">Stack</p>
    <p className="mt-2 text-white font-semibold">AWS • Docker • CI/CD • MERN • Next.js</p>
  </div>

  <div className="neo-sm p-5">
    <p className="text-sm subtle">Learning</p>
    <p className="mt-2 text-white font-semibold">Deep Linux • Terraform</p>
  </div>
</div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="neo p-5 w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px]">
            <img
              src="/myimage.png"
              alt="Muhammad Abdullah"
              className="w-full h-full object-cover rounded-[22px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}