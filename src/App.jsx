import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Code2,
  Copy,
  ExternalLink,
  GraduationCap,
  Laptop,
  Mail,
  Moon,
  Phone,
  Rocket,
  Search,
  Send,
  Sparkles,
  Star,
  Sun,
  UserRound,
  Wand2,
} from "lucide-react";

const profile = {
  name: "Ashish Turan",
  title: "Founder & Lead Coding Educator",
  tagline:
    "Helping students master Python, Web Development, AI, and Computer Science through structured project-based learning.",
  location: "Remote • Serving students worldwide",
  email: "contact.ashish.turan@gmail.com",
  phone: "+918168290554",
  linkedin: "https://www.linkedin.com/in/ashish-turan/",
  company: "https://turancodes.vercel.app",
};

const stats = [
  { label: "Teaching Experience", value: "3+ Years" },
  { label: "Learning Style", value: "Project-Based" },
  { label: "Core Focus", value: "Python • Web • AI" },
  { label: "Mode", value: "Remote Global" },
];

const skills = [
  "Python",
  "JavaScript",
  "React.js",
  "HTML5",
  "CSS3",
  "SQL",
  "Java",
  "Scratch",
  "Data Analysis",
  "Big Data Analytics",
  "Computer Science",
  "AI Training",
  "Debugging",
  "Responsive Design",
  "IT Support",
  "Teaching",
  "Curriculum Support",
  "Problem Solving",
];

const services = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "1:1 Coding Lessons",
    desc: "Personalized Python, JavaScript, Scratch, and web development tutoring for beginners and students.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Project-Based Learning",
    desc: "Students build real projects such as games, websites, dashboards, and interactive coding activities.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "AI & Future Skills",
    desc: "Beginner-friendly support in AI concepts, prompt thinking, logic, and modern technology awareness.",
  },
  {
    icon: <Laptop className="h-5 w-5" />,
    title: "Web Portfolio Support",
    desc: "Guidance for students and beginners who want to create clean, responsive, professional web projects.",
  },
];

const experiences = [
  {
    role: "Founder & Lead Coding Educator",
    company: "TuranCodes",
    period: "May 2026 — Present",
    location: "United States / Remote",
    points: [
      "Leading a modern coding education platform for students, beginners, and aspiring developers.",
      "Creating structured, outcome-driven lessons in Python, Web Development, Computer Science, and AI.",
      "Helping learners build confidence, logical thinking, and real-world project skills.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Outlier",
    period: "March 2026 — Present",
    location: "Remote",
    points: [
      "Reviewing and improving AI-generated technical responses for code accuracy, clarity, and reasoning.",
      "Evaluating programming solutions in Python, JavaScript, SQL, and software engineering topics.",
      "Debugging code and improving technical explanations for AI training and evaluation projects.",
    ],
  },
  {
    role: "Coding Educator",
    company: "STEM Montessori Academy of Canada",
    period: "May 2023 — Present",
    location: "Toronto, ON / Remote",
    points: [
      "Teaching young learners coding, computer science, computational thinking, and problem-solving.",
      "Delivering hands-on lessons using Python, JavaScript, Scratch, loops, logic, and debugging.",
      "Adapting teaching style to each student’s pace, confidence level, and technical ability.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Natural Kids Movement Inc.",
    period: "August 2024 — January 2025",
    location: "Toronto, ON",
    points: [
      "Developed responsive front-end layouts, interactive components, and cross-device website functionality.",
      "Improved usability, visual consistency, and performance across desktop, tablet, and mobile screens.",
    ],
  },
  {
    role: "Math Expert",
    company: "Third Space Learning",
    period: "May 2022 — May 2023",
    location: "London Area, United Kingdom / Remote",
    points: [
      "Delivered personalized online mathematics support to improve confidence and problem-solving skills.",
      "Used clear step-by-step explanations, targeted practice, and student-focused learning support.",
    ],
  },
];

const education = [
  {
    degree: "Information Technology Solutions",
    school: "Humber Polytechnic",
    period: "May 2023 — January 2025",
  },
  {
    degree: "Computer Science and Engineering",
    school: "Chitkara University",
    period: "June 2018 — June 2022",
  },
  {
    degree: "CS50x — Computer Science",
    school: "Harvard University",
    period: "September 2022 — November 2022",
  },
];

const certifications = [
  "Java Programming",
  "Python Fundamentals for Beginners",
  "Learn CSS Course",
  "Responsive Web Design",
  "Programming Basics",
];

const faqs = [
  {
    q: "Who is Ashish Turan?",
    a: "Ashish Turan is a Founder & Lead Coding Educator at TuranCodes, a coding instructor, software engineering contributor, and technology professional with experience in teaching, frontend development, AI training, and computer science education.",
    tags: ["about", "intro", "who"],
  },
  {
    q: "What does Ashish teach?",
    a: "Ashish teaches Python, JavaScript, Scratch, Web Development, Computer Science fundamentals, debugging, logical thinking, and beginner-friendly AI concepts through project-based lessons.",
    tags: ["teach", "subjects", "courses", "python", "web", "scratch"],
  },
  {
    q: "What is TuranCodes?",
    a: "TuranCodes is an online coding education brand focused on helping students, beginners, and aspiring developers build strong programming foundations through structured, practical, and project-based learning.",
    tags: ["turancodes", "company", "brand"],
  },
  {
    q: "What is Ashish's teaching style?",
    a: "Ashish uses a clear, patient, and practical teaching style. Lessons are structured around step-by-step explanations, real projects, student confidence, and hands-on practice rather than only theory.",
    tags: ["teaching", "style", "method", "learning"],
  },
  {
    q: "What technologies does Ashish know?",
    a: "Ashish works with Python, JavaScript, React.js, HTML, CSS, SQL, Java, Scratch, data analysis tools, responsive design, debugging, and IT support concepts.",
    tags: ["skills", "technology", "tech", "stack"],
  },
  {
    q: "What experience does Ashish have?",
    a: "Ashish has experience as Founder & Lead Coding Educator at TuranCodes, Software Engineer at Outlier, Coding Educator at STEM Montessori Academy of Canada, Frontend Developer at Natural Kids Movement, and Math Expert at Third Space Learning.",
    tags: ["experience", "work", "jobs"],
  },
  {
    q: "How can I contact Ashish?",
    a: `You can contact Ashish by email at ${profile.email}, connect on LinkedIn, or visit TuranCodes at ${profile.company}.`,
    tags: ["contact", "email", "linkedin"],
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function findAnswer(input) {
  const text = input.toLowerCase().trim();
  if (!text)
    return "Ask me about Ashish's skills, teaching style, experience, education, TuranCodes, or contact details.";

  let best = null;
  let bestScore = 0;

  for (const faq of faqs) {
    const haystack = `${faq.q} ${faq.a} ${faq.tags.join(" ")}`.toLowerCase();
    const words = text.split(/\s+/).filter((word) => word.length > 2);
    const score = words.reduce(
      (total, word) => total + (haystack.includes(word) ? 1 : 0),
      0,
    );
    if (score > bestScore) {
      best = faq;
      bestScore = score;
    }
  }

  if (best && bestScore > 0) return best.a;

  if (text.includes("resume") || text.includes("cv")) {
    return "Ashish has a strong educator + technology profile with experience in coding education, AI coding evaluation, frontend development, mathematics tutoring, and a Computer Science / IT academic background.";
  }

  return "I can answer questions about Ashish Turan, TuranCodes, teaching services, coding subjects, technical skills, experience, education, and contact details. Try asking: 'What does Ashish teach?' or 'What is TuranCodes?'";
}

function Badge({ children, active = false, onClick, darkMode = true }) {
  const activeClasses = darkMode
    ? "border-emerald-300 bg-emerald-300/15 text-emerald-200 shadow-lg shadow-emerald-500/10"
    : "border-blue-400 bg-blue-500/10 text-blue-700 shadow-lg shadow-blue-500/10";

  const inactiveClasses = darkMode
    ? "border-emerald-300/10 bg-emerald-300/5 text-emerald-100 hover:border-lime-300/50 hover:bg-lime-300/10"
    : "border-blue-200 bg-white/75 text-slate-700 hover:border-cyan-400/60 hover:bg-blue-50";

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm transition-all duration-300",
        active ? activeClasses : inactiveClasses,
      )}
    >
      {children}
    </button>
  );
}

function SectionTitle({ kicker, title, desc, darkMode = true }) {
  const pill = darkMode
    ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-200"
    : "border-blue-300/50 bg-blue-500/10 text-blue-700";
  const titleColor = darkMode ? "text-white" : "text-slate-950";
  const descColor = darkMode ? "text-emerald-50/75" : "text-slate-700";

  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div
        className={cn(
          "mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium",
          pill,
        )}
      >
        <Sparkles className="h-4 w-4" /> {kicker}
      </div>
      <h2
        className={cn(
          "text-3xl font-black tracking-tight md:text-5xl",
          titleColor,
        )}
      >
        {title}
      </h2>
      <p className={cn("mt-4 text-base leading-7 md:text-lg", descColor)}>
        {desc}
      </p>
    </div>
  );
}

function PortfolioWebsite() {
  const [darkMode, setDarkMode] = useState(true);
  const [skillFilter, setSkillFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi, I’m Ashish’s portfolio assistant. Ask me about his skills, teaching style, experience, education, TuranCodes, or contact details.",
    },
  ]);

  const filters = ["All", "Teaching", "Development", "AI", "Data"];

  const filteredSkills = useMemo(() => {
    if (skillFilter === "All") return skills;
    const map = {
      Teaching: [
        "Teaching",
        "Scratch",
        "Computer Science",
        "Curriculum Support",
        "Problem Solving",
      ],
      Development: [
        "Python",
        "JavaScript",
        "React.js",
        "HTML5",
        "CSS3",
        "SQL",
        "Java",
        "Responsive Design",
        "Debugging",
      ],
      AI: [
        "AI Training",
        "Python",
        "Problem Solving",
        "Debugging",
        "Computer Science",
      ],
      Data: ["Data Analysis", "Big Data Analytics", "SQL", "Python"],
    };
    return skills.filter((skill) => map[skillFilter]?.includes(skill));
  }, [skillFilter]);

  const theme = darkMode
    ? "bg-[#03150d] text-white"
    : "bg-[#eef6ff] text-slate-950";

  const panel = darkMode
    ? "border-emerald-300/10 bg-emerald-950/20 shadow-black/30"
    : "border-blue-200/70 bg-white/85 shadow-blue-100/60";

  const muted = darkMode ? "text-emerald-50/75" : "text-slate-700";
  const heading = darkMode ? "text-white" : "text-slate-950";
  const accentText = darkMode ? "text-emerald-300" : "text-blue-600";
  const softAccentText = darkMode ? "text-emerald-200" : "text-blue-700";
  const accentPill = darkMode
    ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-200"
    : "border-blue-300/50 bg-blue-500/10 text-blue-700";
  const gradientPrimary = darkMode
    ? "bg-gradient-to-r from-emerald-400 to-lime-300 text-emerald-950 shadow-emerald-500/20"
    : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-blue-500/20";
  const iconGradient = darkMode
    ? "bg-gradient-to-br from-emerald-300 to-lime-300 text-emerald-950"
    : "bg-gradient-to-br from-blue-600 to-cyan-400 text-white";
  const secondaryButton = darkMode
    ? "border-emerald-300/15 bg-emerald-300/10 text-emerald-50 hover:bg-emerald-300/15"
    : "border-blue-200 bg-white text-blue-700 shadow-blue-100/60 hover:bg-blue-50";
  const progressGradient = darkMode
    ? "bg-gradient-to-r from-emerald-300 to-lime-300"
    : "bg-gradient-to-r from-blue-500 to-cyan-400";
  const subCard = darkMode
    ? "border-emerald-300/10 bg-emerald-950/25"
    : "border-blue-200 bg-blue-50";

  const sendMessage = async (promptText = query) => {
    const cleaned = promptText.trim();
    if (!cleaned) return;

    setMessages((prev) => [...prev, { role: "user", text: cleaned }]);
    setQuery("");

    // Safe frontend fallback. For a real OpenAI assistant, connect this to a secure backend route like /api/portfolio-chat.
    const answer = findAnswer(cleaned);

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", text: answer }]);
    }, 350);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main
      className={cn(
        "min-h-screen overflow-hidden transition-colors duration-500",
        theme,
      )}
    >
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className={cn(
            "absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl",
            darkMode ? "bg-emerald-500/20" : "bg-blue-400/30",
          )}
        />
        <div
          className={cn(
            "absolute right-0 top-1/4 h-80 w-80 rounded-full blur-3xl",
            darkMode ? "bg-lime-400/15" : "bg-cyan-400/30",
          )}
        />
        <div
          className={cn(
            "absolute bottom-0 left-0 h-80 w-80 rounded-full blur-3xl",
            darkMode ? "bg-green-400/15" : "bg-indigo-300/35",
          )}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <nav
        className={cn(
          "sticky top-0 z-50 border-b px-5 py-4 backdrop-blur-xl",
          darkMode
            ? "border-emerald-300/10 bg-[#03150d]/75"
            : "border-blue-200/80 bg-white/80",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            <div
              className={cn(
                "grid h-11 w-11 place-items-center rounded-2xl font-black shadow-lg",
                iconGradient,
                darkMode ? "shadow-emerald-500/20" : "shadow-blue-500/20",
              )}
            >
              AT
            </div>
            <div>
              <p className={cn("text-sm font-black leading-4", heading)}>
                Ashish Turan
              </p>
              <p className={cn("text-xs", softAccentText)}>
                Portfolio • Educator • Developer
              </p>
            </div>
          </a>

          <div
            className={cn(
              "hidden items-center gap-6 text-sm font-medium md:flex",
              muted,
            )}
          >
            <a
              className={cn(
                "transition",
                darkMode ? "hover:text-emerald-200" : "hover:text-blue-600",
              )}
              href="#skills"
            >
              Skills
            </a>
            <a
              className={cn(
                "transition",
                darkMode ? "hover:text-emerald-200" : "hover:text-blue-600",
              )}
              href="#experience"
            >
              Experience
            </a>
            <a
              className={cn(
                "transition",
                darkMode ? "hover:text-emerald-200" : "hover:text-blue-600",
              )}
              href="#education"
            >
              Education
            </a>
            <a
              className={cn(
                "transition",
                darkMode ? "hover:text-emerald-200" : "hover:text-blue-600",
              )}
              href="#assistant"
            >
              AI FAQ
            </a>
            <a
              className={cn(
                "transition",
                darkMode ? "hover:text-emerald-200" : "hover:text-blue-600",
              )}
              href="#contact"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            onClick={() => setDarkMode((value) => !value)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition hover:scale-[1.02]",
              secondaryButton,
            )}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      <section
        id="home"
        className="relative z-10 px-5 pb-20 pt-16 md:pb-28 md:pt-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className={cn(
                "mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium",
                accentPill,
              )}
            >
              <Wand2 className="h-4 w-4" /> Future-ready coding education and
              technology solutions
            </div>
            <h1
              className={cn(
                "max-w-5xl text-4xl font-black tracking-tight md:text-6xl lg:text-7xl",
                heading,
              )}
            >
              Building confident coders through clear, practical, and modern
              learning.
            </h1>
            <p
              className={cn(
                "mt-6 max-w-2xl text-lg leading-8 md:text-xl",
                muted,
              )}
            >
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={profile.company}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold shadow-xl transition hover:scale-[1.02]",
                  gradientPrimary,
                )}
              >
                Visit TuranCodes <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#assistant"
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 font-bold transition hover:scale-[1.02]",
                  secondaryButton,
                )}
              >
                Ask AI FAQ <Bot className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className={cn(
                    "rounded-3xl border p-4 backdrop-blur-xl",
                    panel,
                  )}
                >
                  <p className={cn("text-2xl font-black", accentText)}>
                    {item.value}
                  </p>
                  <p className={cn("mt-1 text-xs", muted)}>{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div
              className={cn(
                "absolute -inset-3 rounded-[2rem] blur-xl",
                darkMode
                  ? "bg-gradient-to-br from-emerald-400/30 via-lime-300/20 to-green-500/25"
                  : "bg-gradient-to-br from-blue-500/25 via-cyan-400/20 to-indigo-400/25",
              )}
            />
            <div
              className={cn(
                "relative rounded-[2rem] border p-6 backdrop-blur-xl",
                panel,
              )}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "grid h-14 w-14 place-items-center rounded-3xl text-xl font-black",
                      iconGradient,
                    )}
                  >
                    AT
                  </div>
                  <div>
                    <h3 className={cn("text-xl font-black", heading)}>
                      {profile.name}
                    </h3>
                    <p className={cn("text-sm", muted)}>{profile.title}</p>
                  </div>
                </div>
                <div
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-bold",
                    accentPill,
                  )}
                >
                  Available
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Python & Web Development",
                  "Computer Science Education",
                  "AI Coding Evaluation",
                  "Responsive Frontend Design",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + index * 0.08 }}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl border p-4",
                      subCard,
                    )}
                  >
                    <CheckCircle2 className={cn("h-5 w-5", accentText)} />
                    <span className={cn("font-semibold", heading)}>{item}</span>
                  </motion.div>
                ))}
              </div>

              <div
                className={cn(
                  "mt-6 rounded-3xl border p-5",
                  darkMode
                    ? "border-emerald-300/20 bg-emerald-300/10"
                    : "border-blue-300/40 bg-blue-500/10",
                )}
              >
                <p className={cn("text-sm font-semibold", softAccentText)}>
                  Signature Approach
                </p>
                <p className={cn("mt-2 text-sm leading-6", muted)}>
                  Clear explanation → guided practice → real project →
                  confidence-building feedback.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="relative z-10 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            darkMode={darkMode}
            kicker="Skills Matrix"
            title="A strong mix of teaching, development, AI, and problem-solving skills."
            desc="The portfolio highlights both technical ability and the communication skills needed to teach complex concepts clearly."
          />

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Badge
                key={filter}
                active={skillFilter === filter}
                darkMode={darkMode}
                onClick={() => setSkillFilter(filter)}
              >
                {filter}
              </Badge>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={cn(
                    "group rounded-3xl border p-5 backdrop-blur-xl transition hover:-translate-y-1",
                    panel,
                  )}
                >
                  <div
                    className={cn(
                      "mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ring-1",
                      darkMode
                        ? "bg-gradient-to-br from-emerald-300/20 to-lime-300/20 text-emerald-200 ring-emerald-300/10"
                        : "bg-gradient-to-br from-blue-500/10 to-cyan-400/15 text-blue-600 ring-blue-200",
                    )}
                  >
                    <Star className="h-5 w-5" />
                  </div>
                  <p className={cn("font-bold", heading)}>{skill}</p>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-700/30">
                    <div
                      className={cn(
                        "h-full w-4/5 rounded-full transition-all duration-500 group-hover:w-full",
                        progressGradient,
                      )}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            darkMode={darkMode}
            kicker="Services"
            title="Professional tutoring and technology support for modern learners."
            desc="Designed for students, beginners, parents, and aspiring developers who want clear guidance and practical results."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className={cn(
                  "rounded-[2rem] border p-6 backdrop-blur-xl transition hover:-translate-y-1",
                  panel,
                )}
              >
                <div
                  className={cn(
                    "mb-5 grid h-12 w-12 place-items-center rounded-2xl",
                    iconGradient,
                  )}
                >
                  {service.icon}
                </div>
                <h3 className={cn("text-lg font-black", heading)}>
                  {service.title}
                </h3>
                <p className={cn("mt-3 text-sm leading-6", muted)}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative z-10 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            darkMode={darkMode}
            kicker="Experience Timeline"
            title="Real teaching, AI, software, and frontend experience."
            desc="A profile built around helping learners, solving technical problems, and creating clean digital experiences."
          />

          <div className="relative mx-auto max-w-4xl">
            <div
              className={cn(
                "absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b to-transparent md:block",
                darkMode
                  ? "from-emerald-300 via-lime-300"
                  : "from-blue-500 via-cyan-400",
              )}
            />
            <div className="space-y-6">
              {experiences.map((job) => (
                <div
                  key={`${job.company}-${job.role}`}
                  className="relative md:pl-16"
                >
                  <div
                    className={cn(
                      "absolute left-0 top-7 hidden h-10 w-10 place-items-center rounded-2xl md:grid",
                      iconGradient,
                    )}
                  >
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div
                    className={cn(
                      "rounded-[2rem] border p-6 backdrop-blur-xl",
                      panel,
                    )}
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className={cn("text-xl font-black", heading)}>
                          {job.role}
                        </h3>
                        <p className={cn("font-semibold", accentText)}>
                          {job.company}
                        </p>
                      </div>
                      <div className={cn("text-sm", muted)}>
                        <p>{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <ul
                      className={cn("mt-5 space-y-3 text-sm leading-6", muted)}
                    >
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <CheckCircle2
                            className={cn(
                              "mt-0.5 h-4 w-4 shrink-0",
                              accentText,
                            )}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="relative z-10 px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div
            className={cn("rounded-[2rem] border p-7 backdrop-blur-xl", panel)}
          >
            <div className="mb-5 flex items-center gap-3">
              <div
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-2xl",
                  iconGradient,
                )}
              >
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <p className={cn("text-sm font-bold", accentText)}>
                  Academic Foundation
                </p>
                <h2 className={cn("text-2xl font-black", heading)}>
                  Education
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              {education.map((item) => (
                <div
                  key={`${item.school}-${item.degree}`}
                  className={cn(
                    "rounded-3xl border p-5",
                    darkMode
                      ? "border-emerald-300/10 bg-emerald-950/25"
                      : "border-blue-200 bg-blue-50",
                  )}
                >
                  <h3 className={cn("font-black", heading)}>{item.degree}</h3>
                  <p className={accentText}>{item.school}</p>
                  <p className={cn("text-sm", muted)}>{item.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={cn("rounded-[2rem] border p-7 backdrop-blur-xl", panel)}
          >
            <div className="mb-5 flex items-center gap-3">
              <div
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-2xl",
                  iconGradient,
                )}
              >
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <p className={cn("text-sm font-bold", accentText)}>
                  Proof of Learning
                </p>
                <h2 className={cn("text-2xl font-black", heading)}>
                  Certifications
                </h2>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className={cn(
                    "flex items-center gap-3 rounded-3xl border p-4",
                    darkMode
                      ? "border-emerald-300/10 bg-emerald-950/25"
                      : "border-blue-200 bg-blue-50",
                  )}
                >
                  <CheckCircle2
                    className={cn("h-5 w-5 shrink-0", accentText)}
                  />
                  <span className={cn("text-sm font-semibold", heading)}>
                    {cert}
                  </span>
                </div>
              ))}
            </div>

            <div
              className={cn(
                "mt-6 rounded-3xl border p-5",
                darkMode
                  ? "border-emerald-300/20 bg-emerald-300/10"
                  : "border-blue-300/40 bg-blue-500/10",
              )}
            >
              <p className={cn("font-bold", softAccentText)}>Languages</p>
              <p className={cn("mt-2 text-sm", muted)}>
                Hindi: Native or Bilingual • English: Full Professional
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="assistant" className="relative z-10 px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div
              className={cn(
                "mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium",
                accentPill,
              )}
            >
              <Bot className="h-4 w-4" /> Portfolio AI FAQ
            </div>
            <h2
              className={cn(
                "text-3xl font-black tracking-tight md:text-5xl",
                heading,
              )}
            >
              Ask questions about Ashish instantly.
            </h2>
            <p className={cn("mt-5 text-lg leading-8", muted)}>
              This assistant answers common questions about Ashish’s background,
              skills, teaching style, TuranCodes, experience, and contact
              details. It is frontend-safe and can later be connected to a
              secure OpenAI backend.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                "What does Ashish teach?",
                "What is TuranCodes?",
                "What technologies does Ashish know?",
                "How can I contact Ashish?",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => sendMessage(item)}
                  className={cn(
                    "flex items-center justify-between rounded-2xl border p-4 text-left text-sm font-semibold transition hover:-translate-y-0.5",
                    panel,
                  )}
                >
                  {item}
                  <ChevronDown className={cn("h-4 w-4", accentText)} />
                </button>
              ))}
            </div>
          </div>

          <div
            className={cn("rounded-[2rem] border p-4 backdrop-blur-xl", panel)}
          >
            <div
              className={cn(
                "mb-4 flex items-center justify-between border-b pb-4",
                darkMode ? "border-emerald-300/10" : "border-blue-200",
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "grid h-11 w-11 place-items-center rounded-2xl",
                    iconGradient,
                  )}
                >
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={cn("font-black", heading)}>
                    Ashish AI Assistant
                  </h3>
                  <p className={cn("text-xs", muted)}>Smart FAQ mode</p>
                </div>
              </div>
              <div
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-bold",
                  darkMode
                    ? "bg-emerald-300/10 text-emerald-200"
                    : "bg-blue-500/10 text-blue-700",
                )}
              >
                Online
              </div>
            </div>

            <div className="h-[430px] space-y-4 overflow-y-auto rounded-3xl p-2">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[86%] rounded-3xl px-4 py-3 text-sm leading-6",
                      message.role === "user"
                        ? cn("font-semibold", gradientPrimary)
                        : darkMode
                          ? "border border-emerald-300/10 bg-emerald-950/40 text-emerald-50/90"
                          : "border border-blue-200 bg-white text-slate-800",
                    )}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <form
              className="mt-4 flex gap-3"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
            >
              <div
                className={cn(
                  "flex flex-1 items-center gap-2 rounded-full border px-4",
                  darkMode
                    ? "border-emerald-300/10 bg-emerald-950/40"
                    : "border-blue-200 bg-white",
                )}
              >
                <Search className={cn("h-4 w-4", accentText)} />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Ask about skills, education, teaching..."
                  className={cn(
                    "h-12 w-full bg-transparent text-sm outline-none",
                    darkMode
                      ? "text-white placeholder:text-emerald-100/45"
                      : "text-slate-950 placeholder:text-slate-500",
                  )}
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-full shadow-lg transition hover:scale-105",
                  gradientPrimary,
                )}
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-5 py-20">
        <div
          className={cn(
            "mx-auto max-w-5xl rounded-[2.5rem] border p-8 text-center backdrop-blur-xl md:p-12",
            darkMode
              ? "border-emerald-300/10 bg-gradient-to-br from-emerald-400/15 via-lime-300/10 to-green-500/10"
              : "border-blue-200 bg-white/90 shadow-xl shadow-blue-100/70",
          )}
        >
          <div
            className={cn(
              "mx-auto mb-5 grid h-16 w-16 place-items-center rounded-3xl",
              iconGradient,
            )}
          >
            <UserRound className="h-8 w-8" />
          </div>
          <h2
            className={cn(
              "text-3xl font-black tracking-tight md:text-5xl",
              heading,
            )}
          >
            Let’s build future-ready coding skills.
          </h2>
          <p className={cn("mx-auto mt-4 max-w-2xl text-lg leading-8", muted)}>
            Connect for coding lessons, web development guidance, AI learning
            support, or collaboration opportunities.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold shadow-xl transition hover:scale-[1.02]",
                gradientPrimary,
              )}
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 font-bold transition",
                secondaryButton,
              )}
            >
              <Copy className="h-4 w-4" />{" "}
              {copied ? "Email Copied" : "Copy Email"}
            </button>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 font-bold transition",
                secondaryButton,
              )}
            >
              LinkedIn <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
            <div
              className={cn(
                "rounded-3xl border p-5",
                darkMode
                  ? "border-emerald-300/10 bg-emerald-950/25"
                  : "border-blue-200 bg-blue-50",
              )}
            >
              <Mail className={cn("mb-3 h-5 w-5", accentText)} />
              <p className={cn("text-sm", muted)}>Email</p>
              <p className={cn("break-all font-bold", heading)}>
                {profile.email}
              </p>
            </div>
            <div
              className={cn(
                "rounded-3xl border p-5",
                darkMode
                  ? "border-emerald-300/10 bg-emerald-950/25"
                  : "border-blue-200 bg-blue-50",
              )}
            >
              <Phone className={cn("mb-3 h-5 w-5", accentText)} />
              <p className={cn("text-sm", muted)}>Phone</p>
              <p className={cn("font-bold", heading)}>{profile.phone}</p>
            </div>
            <div
              className={cn(
                "rounded-3xl border p-5",
                darkMode
                  ? "border-emerald-300/10 bg-emerald-950/25"
                  : "border-blue-200 bg-blue-50",
              )}
            >
              <Rocket className={cn("mb-3 h-5 w-5", accentText)} />
              <p className={cn("text-sm", muted)}>Brand</p>
              <p className={cn("font-bold", heading)}>TuranCodes</p>
            </div>
          </div>
        </div>
      </section>

      <footer
        className={cn(
          "relative z-10 border-t px-5 py-8 text-center text-sm",
          darkMode
            ? "border-emerald-300/10 text-emerald-50/60"
            : "border-blue-200 text-slate-600",
        )}
      >
        <p>
          © {new Date().getFullYear()} Ashish Turan. Designed as a futuristic
          portfolio for coding education, AI, and web development.
        </p>
      </footer>
    </main>
  );
}

export default PortfolioWebsite;
