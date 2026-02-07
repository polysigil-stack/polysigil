const About = () => {
  return (
    <main className="min-h-screen bg-background px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              Ethical Hacker • Security Researcher • Educator
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              About Vishal Kumar
            </h1>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I’m Vishal Kumar, an ethical hacker and cybersecurity researcher focused on identifying
                real-world security flaws and helping organizations build stronger, more resilient systems.
              </p>
              <p>
                My journey into hacking started early, driven by curiosity about how modern technologies
                work under the hood — and how they can fail. Over time, that curiosity evolved into a
                professional career in ethical hacking, vulnerability research, and bug bounty hunting.
                Today, I work at the intersection of offensive security, responsible disclosure, and
                security education.
              </p>
              <p>
                I’ve responsibly discovered and reported security vulnerabilities across a wide range of
                global organizations and technology platforms, including Apple, Amazon, Google, MetaMask,
                PayPal, Stripe, Intel, BlackBerry, DigitalOcean, Elastic, Frontegg, Linux Foundation
                (Decentralized Trust), Near, Vimeo, Xiaomi, and the U.S. Department of Homeland Security,
                among others. My work has contributed to improving the security posture of products used
                by millions of users worldwide.
              </p>
              <p>
                Beyond research, I’m passionate about sharing knowledge and helping others break into
                cybersecurity the right way. Through technical write-ups, demonstrations, and hands-on
                learning, I aim to simplify complex security concepts and guide aspiring hackers toward
                ethical, responsible security practices.
              </p>
              <p>
                My contributions to the security community have been formally recognized, including being
                named Sony Hacker of the Month in October 2025, an acknowledgment that reflects both the
                impact and quality of my research.
              </p>
              <p>
                When I’m not testing systems or analyzing vulnerabilities, I enjoy exploring new
                technologies, refining my skills, and staying deeply engaged with the evolving security
                landscape. I believe great security starts with curiosity, discipline, and a commitment to
                doing things the right way.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card/60 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">Highlights</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Offensive security, vulnerability research, and responsible disclosure focus.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Recognized as Sony Hacker of the Month (Oct 2025).
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Practical research impacting products used by millions worldwide.
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card/60 p-5">
                <p className="text-2xl font-bold text-foreground">Global</p>
                <p className="text-xs text-muted-foreground mt-1">Organizations impacted</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/60 p-5">
                <p className="text-2xl font-bold text-foreground">Offensive</p>
                <p className="text-xs text-muted-foreground mt-1">Security & research focus</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/60 p-5">
                <p className="text-2xl font-bold text-foreground">Disclosure</p>
                <p className="text-xs text-muted-foreground mt-1">Responsible research ethos</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/60 p-5">
                <p className="text-2xl font-bold text-foreground">Educator</p>
                <p className="text-xs text-muted-foreground mt-1">Mentorship & knowledge sharing</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/60 p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Core Values</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Curiosity",
                  "Integrity",
                  "Discipline",
                  "Responsible Disclosure",
                  "Community",
                ].map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-14 grid lg:grid-cols-[1fr_1fr] gap-8">
          <div className="rounded-2xl border border-border bg-card/60 p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">What I Do</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="font-semibold text-foreground mb-2">Vulnerability Research</p>
                <p>
                  Identify and validate security flaws, prioritize impact, and document clear remediation
                  paths.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="font-semibold text-foreground mb-2">Offensive Security</p>
                <p>
                  Assess real-world attack surfaces, simulate adversarial behavior, and harden defenses.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="font-semibold text-foreground mb-2">Responsible Disclosure</p>
                <p>
                  Coordinate with vendors to ensure fixes land safely and users stay protected.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="font-semibold text-foreground mb-2">Security Education</p>
                <p>
                  Share practical insights, write-ups, and guidance for ethical, responsible hacking.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card/60 p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Recognition & Impact</h2>
            <ol className="space-y-5 text-sm text-muted-foreground">
              <li className="flex gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <div>
                  <p className="font-semibold text-foreground">Sony Hacker of the Month</p>
                  <p>Recognized in October 2025 for impactful security research.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <div>
                  <p className="font-semibold text-foreground">Global Vendor Collaboration</p>
                  <p>Improved security posture across major consumer and enterprise platforms.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <div>
                  <p className="font-semibold text-foreground">Community Education</p>
                  <p>Practical write-ups and demos to help aspiring ethical hackers learn safely.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="mt-8">
          <div className="rounded-2xl border border-border bg-card/60 p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Organizations Impacted</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Apple",
                "Amazon",
                "Google",
                "MetaMask",
                "PayPal",
                "Stripe",
                "Intel",
                "BlackBerry",
                "DigitalOcean",
                "Elastic",
                "Frontegg",
                "Linux Foundation",
                "Near",
                "Vimeo",
                "Xiaomi",
                "U.S. DHS",
              ].map((org) => (
                <span
                  key={org}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                >
                  {org}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
