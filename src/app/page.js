"use client";

import { useActionState, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe,
  LayoutDashboard,
  Mail,
  Menu,
  MonitorSmartphone,
  Sparkles,
  UserRound,
  Workflow,
  X,
} from "lucide-react";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import Reveal from "../components/Reveal.jsx";
import { sendContactEmail } from "./actions";

const projects = [
  {
    title: "Fake Store",
    description:
      "An e-commerce frontend focused on product browsing, visual clarity, and a smooth shopping-oriented layout.",
    tech: ["React", "JavaScript", "REST API", "Responsive UI"],
    image: "/images/projects/fakestore.jpg",
    altImage: "/images/projects/fakestore2.jpg",
    href: "https://a-fakestore.netlify.app/",
  },
  {
    title: "Country Quiz",
    description:
      "A playful interactive quiz product with progress-based flow, levels, and engaging challenge mechanics.",
    tech: ["React", "Game Logic", "State Management", "Interactive UI"],
    image: "/images/projects/country-quiz-1.jpg",
    altImage: "/images/projects/country-quiz-2.jpg",
    href: "https://letusplaycoutryquiz.netlify.app/",
  },
  {
    title: "Weather Now",
    description:
      "A weather app that presents current conditions and forecast data inside a modern dashboard experience.",
    tech: ["React", "API Integration", "Forecast UI", "Responsive Design"],
    image: "/images/projects/weather.jpg",
    href: "https://letuschecktheweathernow.netlify.app/",
  },
  {
    title: "Fekra Agency",
    description:
      "A bold agency website with strong messaging, modern layout structure, and polished visual presentation.",
    tech: ["Next.js", "UI Design", "Brand Website", "Animation"],
    image: "/images/projects/fekra.jpg",
    href: "https://fekra-agency.netlify.app/",
  },
];

const services = [
  {
    icon: <MonitorSmartphone size={22} />,
    title: "Responsive Frontend",
    text: "Modern interfaces that work beautifully across mobile, tablet, and desktop screens.",
  },
  {
    icon: <Workflow size={22} />,
    title: "Fullstack Development",
    text: "Connecting frontend systems with APIs, backend logic, authentication, and data-driven features.",
  },
  {
    icon: <LayoutDashboard size={22} />,
    title: "UI Implementation",
    text: "Transforming product ideas and layouts into polished web experiences with modern interaction details.",
  },
  {
    icon: <Globe size={22} />,
    title: "Multilingual Collaboration",
    text: "Working across Arabic, English, and German for products with broader audiences and markets.",
  },
];

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Responsive Design",
  "Framer Motion",
];

const initialFormState = {
  success: false,
  message: "",
};

function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialFormState,
  );

  const [feedback, setFeedback] = useState({
    success: false,
    message: "",
  });

  useEffect(() => {
    if (!state.message) return;

    setFeedback({
      success: state.success,
      message: state.message,
    });

    const timer = setTimeout(() => {
      setFeedback({
        success: false,
        message: "",
      });
    }, 4000);

    return () => clearTimeout(timer);
  }, [state]);

  return (
    <form
      className="info-card contact-form"
      action={formAction}
    >
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Tell me about your project"
          required
        />
      </div>

      <button
        type="submit"
        className="primary-btn full-width-btn"
        disabled={isPending}
      >
        {isPending ? "Sending..." : "Send me a mail"} <Mail size={16} />
      </button>

      {feedback.message ? (
        <p
          style={{
            marginTop: "12px",
            color: feedback.success ? "#16a34a" : "#dc2626",
          }}
        >
          {feedback.message}
        </p>
      ) : null}
    </form>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="page-shell">
      <header className="topbar">
        <a
          href="#home"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-dot" />
          <span>Yazan Yahya</span>
        </a>

        <nav className="nav-links desktop-nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a
            className="nav-cta desktop-cta"
            href="https://github.com/YazanKhalilYahya?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.24 }}
            >
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="https://github.com/YazanKhalilYahya?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-github"
                onClick={() => setMenuOpen(false)}
              >
                Visit GitHub
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section
        className="hero"
        id="home"
      >
        <div className="hero-copy">
          <Reveal>
            <div className="eyebrow">
              <Sparkles size={15} />
              Frontend / Fullstack Developer
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1>
              I build sharp <span>digital products</span> with modern UI, clean
              code, and real product thinking.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="hero-text">
              I’m Yazan Yahya, a developer from Syria living in Germany. I love
              building modern websites and web applications that transform ideas
              into products people can actually use and enjoy.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="hero-actions">
              <a
                href="#projects"
                className="primary-btn"
              >
                Explore Projects <ArrowRight size={17} />
              </a>
              <a
                href="#contact"
                className="secondary-btn"
              >
                Send Message
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <ul
              className="hero-meta"
              role="list"
            >
              <li>
                <Code2 size={16} /> React, Next.js, Express.js, MongoDB
              </li>
              <li>
                <Globe size={16} /> Arabic, English, German
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal
          delay={0.14}
          className="hero-visual-wrap"
        >
          <motion.div
            className="hero-visual"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="accent accent-one" />
            <div className="accent accent-two" />

            <div className="hero-card hero-main">
              <Image
                src="/images/profile/hero-scene.jpg"
                alt="Hero visual"
                fill
                className="cover-image"
                priority
                sizes="(max-width: 760px) 100vw, (max-width: 1100px) 100vw, 50vw"
              />
            </div>

            <div className="hero-card hero-portrait">
              <Image
                src="/images/profile/yazan-portrait.jpg"
                alt="Portrait of Yazan Yahya"
                fill
                className="cover-image"
                priority
                sizes="(max-width: 760px) 100vw, (max-width: 1100px) 100vw, 50vw"
              />
            </div>

            <div className="hero-card hero-workspace">
              <Image
                src="/images/profile/workspace.jpg"
                alt="Workspace illustration"
                fill
                className="cover-image"
                sizes="(max-width: 760px) 100vw, (max-width: 1100px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </Reveal>
      </section>

      <section
        className="section-block"
        id="about"
      >
        <Reveal>
          <div className="section-head">
            <span>About</span>
            <h2>
              A developer who enjoys turning ideas into modern, functional, and
              visually polished products.
            </h2>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={0.08}>
            <article className="info-card">
              <div className="icon-box">
                <UserRound size={20} />
              </div>
              <p>
                I focus on frontend and fullstack development with a strong
                interest in modern UI, responsiveness, clean structure, and
                practical digital experiences that feel professional from the
                first click.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.14}>
            <article className="info-card">
              <div className="icon-box">
                <Globe size={20} />
              </div>
              <p>
                I am from Syria and live in Germany, and I speak Arabic,
                English, and German. This helps me work across different
                audiences and build products with broader communication in mind.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="skills-bar">
            {skills.map((skill) => (
              <span
                key={skill}
                className="skill-tag"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section
        className="section-block"
        id="services"
      >
        <Reveal>
          <div className="section-head">
            <span>Services</span>
            <h2>
              What I can deliver for startups, businesses, and product ideas.
            </h2>
          </div>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.06}
            >
              <motion.article
                className="info-card service-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.24 }}
              >
                <div className="icon-box">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="section-block"
        id="projects"
      >
        <Reveal>
          <div className="section-head">
            <span>Projects</span>
            <h2>
              Work that reflects my taste in interface design, structure, and
              interaction.
            </h2>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.06}
            >
              <motion.article
                className="project-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.28 }}
              >
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="cover-image"
                    sizes="(max-width: 768px) 45vw, 18vw"
                  />
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>

                  <p>{project.description}</p>

                  <div className="tag-row">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo <ArrowUpRight size={16} />
                  </a>

                  {project.altImage && (
                    <div className="project-gallery">
                      <div className="project-gallery-item">
                        <Image
                          src={project.image}
                          alt={`${project.title} main preview`}
                          fill
                          className="cover-image"
                          sizes="(max-width: 760px) 50vw, (max-width: 1100px) 50vw, 25vw"
                        />
                      </div>

                      <div className="project-gallery-item">
                        <Image
                          src={project.altImage}
                          alt={`${project.title} secondary preview`}
                          fill
                          className="cover-image"
                          sizes="(max-width: 768px) 100vw, 30vw"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="section-block"
        id="contact"
      >
        <Reveal>
          <div className="section-head">
            <span>Contact</span>
            <h2>
              Have an idea for a website or product? Let’s create something
              memorable.
            </h2>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal delay={0.08}>
            <div className="info-card contact-info">
              <h3>Why work with me</h3>
              <ul role="list">
                <li>Modern and responsive frontend development.</li>
                <li>Attention to details, UI polish, and usability.</li>
                <li>Ability to build both frontend and fullstack products.</li>
                <li>Clear communication in three languages.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-copy">
            <h3>Yazan Yahya</h3>
            <p>
              Frontend / Fullstack Developer building modern digital products.
            </p>
          </div>

          <div className="footer-links">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a
              href="https://github.com/YazanKhalilYahya?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Designed & built by Yazan Yahya with Next.js.</p>

          <div className="footer-socials">
            <a
              href="https://github.com/YazanKhalilYahya?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://instagram.com/yazan_yahya_98"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
