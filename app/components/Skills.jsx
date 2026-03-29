const skillGroups = [
  {
    title: "Cloud",
    skills: [
      { name: "AWS", level: 65 },
      { name: "Linux", level: 55 },
      { name: "Networking", level: 65 },
      { name: "Terraform", level: 5 },
    ],
    awsServices: [
      "Auto Scaling",
      "ELB",
      "IAM",
      "CloudWatch",
      "CloudTrail",
      "Route 53",
      "NAT Gateway",
      "Internet Gateway",
      "Security Groups",
      "Network ACL",
      "EBS",
      "EFS",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "Aurora",
      "ECS",
      "CloudFormation",
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", level: 70 },
      { name: "GitHub Actions", level: 60 },
      { name: "Jenkins", level: 20 },
      { name: "CI/CD", level: 60 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 60 },
      { name: "React", level: 60 },
      { name: "Next.js", level: 70 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Node.js", level: 50 },
      { name: "Express.js", level: 55 },
      { name: "Git & GitHub", level: 90 },
    ],
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "MongoDB", level: 55 },
      { name: "DynamoDB", level: 45 },
      { name: "Aurora", level: 25 },
      { name: "RDS", level: 50 },
      { name: "EBS / EFS", level: 40 },
    ],
  },
];

function SkillBar({ name, level }) {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-white">{name}</span>
        <span className="text-sm subtle">{level}%</span>
      </div>

      <div className="neo-inset p-1.5 h-4">
        <div
          className="h-full rounded-full bg-[linear-gradient(145deg,#19a9ff,#118ae0)] shadow-[0_0_14px_rgba(24,160,251,0.35)]"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="section-label">Skills</p>
          <h2 className="mt-3 section-title">
            My learning progress and confidence
          </h2>
          <p className="mt-3 muted max-w-2xl">
            These percentages reflect my current confidence and hands-on comfort level.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="neo p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                {group.title}
              </h3>

              {/* Progress bars */}
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}

              {/* AWS services tags */}
              {group.awsServices && (
                <div className="mt-6">
                  <p className="text-xs subtle mb-3">AWS Services</p>

                  <div className="flex flex-wrap gap-2">
                    {group.awsServices.map((service) => (
                      <span
                        key={service}
                        className="neo-inset px-3 py-1.5 text-xs text-slate-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}