export default function Contact() {
  return (
    <section id="contact" className="px-6 pt-20 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="neo p-8 md:p-10 text-center">
          <p className="section-label">Contact</p>

          <h2 className="mt-3 section-title">Let&apos;s connect</h2>

          <p className="mt-4 muted leading-8 max-w-2xl mx-auto">
            I&apos;m open to learning opportunities, collaborations,
            internships, and conversations around cloud, DevOps, and web development.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
            <div className="neo-sm p-5">
              <p className="text-sm subtle">Phone</p>
              <p className="mt-2 text-white font-medium">+92 314 0051441</p>
            </div>

            <div className="neo-sm p-5 break-all">
              <p className="text-sm subtle">Email</p>
              <p className="mt-2 text-white font-medium">
                orakzaiabdulapple@gmail.com
              </p>
            </div>

            <div className="neo-sm p-5">
              <p className="text-sm subtle">Location</p>
              <p className="mt-2 text-white font-medium">Peshawar, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}