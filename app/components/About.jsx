export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="neo p-8 md:p-10">
          <p className="section-label">About Me</p>

          <h2 className="mt-3 section-title">Building from code to cloud</h2>

          <p className="mt-6 muted leading-8 max-w-4xl">
            I am a Software Engineering student with a strong interest in Cloud
            Computing and DevOps. Alongside my cloud journey, I have hands-on
            experience in web development using HTML, CSS, JavaScript, React,
            Next.js, Node.js, Express, and MongoDB.
          </p>

          <p className="mt-4 muted leading-8 max-w-4xl">
            My current focus is on learning how modern applications are deployed,
            monitored, and managed using AWS, Docker, Linux, networking, and
            CI/CD workflows. I enjoy understanding systems end to end — from
            frontend interfaces to backend services and infrastructure.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="neo-sm p-5">
              <p className="text-sm subtle">Primary Direction</p>
              <p className="mt-2 text-white font-semibold">Cloud & DevOps</p>
            </div>

            <div className="neo-sm p-5">
              <p className="text-sm subtle">Supporting Strength</p>
              <p className="mt-2 text-white font-semibold">MERN Development</p>
            </div>

            <div className="neo-sm p-5">
              <p className="text-sm subtle">Tools I Use</p>
              <p className="mt-2 text-white font-semibold">AWS, Docker, Linux</p>
            </div>

            <div className="neo-sm p-5">
              <p className="text-sm subtle">Current Goal</p>
              <p className="mt-2 text-white font-semibold">Production-level skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}