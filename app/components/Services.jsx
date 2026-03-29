import { Cloud, Settings2, Code2 } from "lucide-react";

const focusItems = [
  {
    title: "Cloud & Infrastructure",
    description:
      "Learning and working with AWS services, networking, storage, security, and deployment fundamentals for scalable systems.",
    icon: Cloud,
  },
  {
    title: "DevOps & Automation",
    description:
      "Exploring containerization, CI/CD workflows, monitoring, and automation using Docker, GitHub Actions, Jenkins, and Linux tools.",
    icon: Settings2,
  },
  {
    title: "Web Development",
    description:
      "Building responsive web applications with React, Next.js, Node.js, Express, and MongoDB to strengthen end-to-end engineering skills.",
    icon: Code2,
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="section-label">Focus Areas</p>
          <h2 className="mt-3 section-title">
            What I am focused on right now
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {focusItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="neo p-6">
                <div className="w-14 h-14 neo-blue flex items-center justify-center text-white mb-5">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="muted leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}