import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Server,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";

const profilePhoto = `${import.meta.env.BASE_URL}sabab-photo-clean.png`;
const email = "sababhussin107@gmail.com";
const phone = "+919161546184";
const linkedin = "https://www.linkedin.com/in/sabab-hussain-559181253";
const whatsapp = "https://wa.me/919161546184";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    title: "Frontend Development",
    description: "Responsive interfaces with HTML, CSS, JavaScript, React, and Tailwind CSS.",
    icon: Code2,
  },
  {
    title: "Backend Development",
    description: "API and database foundations with Node.js, Python, MySQL, and clean server logic.",
    icon: Server,
  },
  {
    title: "UI/UX Design",
    description: "Practical product layouts, wireframes, and polished visuals with Figma and Adobe XD.",
    icon: Sparkles,
  },
];

const projects = [
  {
    title: "Responsive Portfolio",
    type: "React + Tailwind",
    description:
      "A polished personal portfolio with responsive navigation, project cards, social links, and GitHub Pages deployment support.",
    tags: ["React", "Tailwind", "Vite"],
  },
  {
    title: "Full-Stack Web App",
    type: "Node.js + MySQL",
    description:
      "A full-stack application concept focused on structured data, reusable UI, and maintainable backend routes.",
    tags: ["Node.js", "MySQL", "JavaScript"],
  },
  {
    title: "Interface Design System",
    type: "UI/UX",
    description:
      "Reusable layouts and component concepts for web products, designed around clarity, spacing, and consistency.",
    tags: ["Figma", "Adobe XD", "CSS"],
  },
];

const experience = [
  "Building modern and responsive web applications with a focus on practical user flows.",
  "Working across frontend, backend, and UI design fundamentals to deliver complete web experiences.",
  "Improving project structure, performance, accessibility, and deployment readiness.",
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-panel text-ink">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-sm font-bold text-white">
              SH
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Portfolio
              </span>
              <span className="block text-lg font-bold leading-tight">Sabab Hussain</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${email}?subject=Resume request`}
              className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent"
            >
              Resume <ArrowUpRight size={16} />
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`mailto:${email}?subject=Resume request`}
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white"
              >
                Resume <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div>
              <p className="mb-5 inline-flex rounded-lg border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-semibold text-accent">
                Full-Stack Developer
              </p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
                Building modern, responsive web applications with clean execution.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                I am Sabab Hussain, a developer focused on professional web experiences across
                frontend, backend, and UI design.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                >
                  View Projects <ArrowUpRight size={18} />
                </a>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-accent hover:text-accent"
                >
                  Contact Me <Mail size={18} />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-accent hover:text-accent"
                >
                  <Linkedin size={19} />
                </a>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-accent hover:text-accent"
                >
                  <MessageCircle size={19} />
                </a>
                <a
                  href={`mailto:${email}`}
                  aria-label="Email"
                  className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-accent hover:text-accent"
                >
                  <Mail size={19} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-lg bg-amber-200 md:block" />
              <div className="absolute -right-4 bottom-8 hidden h-28 w-28 rounded-lg bg-indigo-200 md:block" />
              <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-soft">
                <img
                  src={profilePhoto}
                  alt="Sabab Hussain"
                  className="h-[420px] w-full object-cover object-center sm:h-[520px]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-ink/88 p-5 text-white backdrop-blur">
                  <p className="text-sm font-semibold text-teal-200">Available for web projects</p>
                  <p className="mt-1 text-lg font-bold">React, backend, and product-ready UI</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-slate-200 bg-panel py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">About</p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Developer with a practical product mindset.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                I build responsive web applications that balance solid structure with clean visual
                design. My work covers frontend development, backend fundamentals, database logic,
                and interface design.
              </p>
              <p>
                I care about clear layouts, maintainable code, and websites that feel polished on
                desktop and mobile.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Skills</p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Technical expertise</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <article
                    key={skill.title}
                    className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-lg bg-teal-50 text-accent">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-ink">{skill.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{skill.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-panel py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Projects</p>
                <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Selected work</h2>
              </div>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-teal-800"
              >
                Connect on LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="flex min-h-[300px] flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                      {project.type}
                    </span>
                    <Github className="text-slate-400" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-ink">{project.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Experience</p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Project-focused development experience.</h2>
            </div>
            <div className="rounded-lg border border-slate-200 bg-panel p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white text-accent">
                  <BriefcaseBusiness size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink">Full-Stack Developer</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-500">Portfolio and independent web projects</p>
                  <ul className="mt-5 space-y-3 text-slate-600">
                    {experience.map((item) => (
                      <li key={item} className="flex gap-3 leading-7">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-ink py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">Contact</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let’s build a clean web experience.</h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                Reach out for portfolio work, frontend development, backend foundations, or UI
                improvements.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${email}`}
                className="rounded-lg border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <Mail className="text-teal-200" size={22} />
                <span className="mt-4 block text-sm font-semibold text-slate-300">Email</span>
                <span className="mt-1 block break-all font-bold">{email}</span>
              </a>
              <a
                href={`tel:${phone}`}
                className="rounded-lg border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <Phone className="text-teal-200" size={22} />
                <span className="mt-4 block text-sm font-semibold text-slate-300">Phone</span>
                <span className="mt-1 block font-bold">{phone}</span>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <Linkedin className="text-teal-200" size={22} />
                <span className="mt-4 block text-sm font-semibold text-slate-300">LinkedIn</span>
                <span className="mt-1 block font-bold">Sabab Hussain</span>
              </a>
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <MessageCircle className="text-teal-200" size={22} />
                <span className="mt-4 block text-sm font-semibold text-slate-300">WhatsApp</span>
                <span className="mt-1 block font-bold">Message directly</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row lg:px-8">
          <p>© 2026 Sabab Hussain. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-accent">
              About
            </a>
            <a href="#projects" className="hover:text-accent">
              Projects
            </a>
            <a href="#contact" className="hover:text-accent">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
