import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import aboutProfile from "@/assets/about-profile.jpg";
import expMichigan from "@/assets/exp-michigan.png";
import expConcord from "@/assets/exp-concord.png";
import expLine from "@/assets/exp-line.png";
import expTiktok from "@/assets/exp-tiktok.png";
import expNaver from "@/assets/exp-naver.png";
import hobbyTravel from "@/assets/hobby-travel.png";
import hobbyPeople from "@/assets/hobby-people.png";
import hobbyChallenges from "@/assets/hobby-challenges.png";
import hobbyTheater from "@/assets/hobby-theater.jpg";

/* ── Mac window matching main page ── */
const MacWin = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <motion.div
    className="overflow-hidden rounded-2xl bg-white"
    style={{ border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-2 border-b border-black/[0.06] px-4 py-2.5" aria-hidden="true">
      <div className="flex items-center gap-[7px]">
        <span className="h-3 w-3 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#FFBD2E" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
      </div>
      <span className="flex-1 text-center text-[14px] font-medium tracking-wide text-black/35">{title}</span>
      <div className="w-[52px]" />
    </div>
    <div>{children}</div>
  </motion.div>
);

const SectionHeader = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="mb-10 md:mb-14">
    <p className="mb-2 text-[14px] font-medium uppercase tracking-[0.3em] text-black/30">{eyebrow}</p>
    <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-tight text-black/85">{title}</h2>
  </div>
);

/* ── Photo Shuffle Widget ── */
const PhotoShuffleWidget = ({ hobbies }: { hobbies: { image: string; caption: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % hobbies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hobbies.length]);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Main photo stack */}
      <div className="relative h-[400px] w-[320px] sm:h-[480px] sm:w-[380px]">
        {hobbies.map((h, i) => {
          const offset = (i - currentIndex + hobbies.length) % hobbies.length;
          const isActive = offset === 0;
          const zIndex = hobbies.length - offset;
          const rotate = offset === 0 ? 0 : offset === 1 ? 4 : offset === 2 ? -3 : 6;
          const scale = isActive ? 1 : 1 - offset * 0.04;
          const y = offset * 8;

          return (
            <motion.div
              key={h.caption}
              className="absolute inset-0 cursor-pointer overflow-hidden rounded-[24px] bg-white"
              style={{
                zIndex,
                boxShadow: isActive
                  ? "0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)"
                  : "0 8px 24px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
              animate={{
                rotate,
                scale,
                y,
                opacity: offset > 2 ? 0 : 1,
              }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              onClick={() => setCurrentIndex((currentIndex + 1) % hobbies.length)}
            >
              <div className="h-[75%] overflow-hidden">
                <img src={h.image} alt={h.caption} className="h-full w-full object-cover" />
              </div>
              <div className="flex h-[25%] items-center px-6">
                <p className="text-[16px] leading-snug text-black/60">{h.caption}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2">
        {hobbies.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-6 bg-[#4338CA]" : "w-2 bg-black/15"
            }`}
            aria-label={`Show photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const hobbies = [
  { image: hobbyTravel, caption: "✈️ Loves to travel and experience new culture" },
  { image: hobbyPeople, caption: "🤝 Enjoys meeting different people and stories" },
  { image: hobbyChallenges, caption: "🤿 Eager to take on new challenges" },
  { image: hobbyTheater, caption: "🎭 Steps on stage and steals the spotlight" },
];

const experiences = [
  { period: "2024 – Present", title: "MS-HCI @ University of Michigan", description: "Blending UX research, design strategy, and emerging tech to create more human-centered products.", image: expMichigan },
  { period: "2023 – Present", title: "UX Designer @ Concord AI", description: "Led the 0-to-1 design of Concord's first client-facing product, fostering close collaboration with C-level, product, and engineering stakeholders.", image: expConcord },
  { period: "2023", title: "Product Strategy Research Assistant @ LINE", description: "Explored how Generative AI, blockchain, and Web3 could evolve into user-centered products.", image: expLine },
  { period: "2022", title: "Global Communications Intern @ TikTok", description: "Created digital content that helped creators navigate TikTok's tools across global teams.", image: expTiktok },
  { period: "2020 – 2021", title: "UX Research & Strategy Intern @ NAVER Corp", description: "Connected user insights with service and marketing strategies through qualitative research.", image: expNaver },
];

const workValues = [
  { title: "Empathy", emoji: "💛", description: "Understanding users deeply through research and genuine human connection to create meaningful solutions" },
  { title: "Strategy", emoji: "🎯", description: "Bridging user needs with business goals through data-driven insights and strategic thinking" },
  { title: "Creativity", emoji: "✨", description: "Exploring innovative approaches and emerging technologies to solve complex design challenges" },
];

const About = () => {
  return (
    <div className="overflow-x-hidden font-sans" style={{ background: "#DDD5EE" }}>
      <Navigation />

      <main id="main-content" role="main">
        {/* Hero */}
        <section className="px-4 pt-16 pb-8 sm:px-8 md:px-10" aria-labelledby="about-heading">
          <div className="mx-auto max-w-[1000px]">
            <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="mb-2 text-[14px] font-medium uppercase tracking-[0.3em] text-black/30">About</p>
              <h1 id="about-heading" className="text-[clamp(32px,5vw,56px)] font-bold tracking-tight text-black/85">
                Meet Hyebin! 👋
              </h1>
            </motion.div>

            <MacWin title="about-hyebin.md">
              <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-2 md:gap-12 md:p-10">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                  <img src={aboutProfile} alt="Hyebin Park smiling at camera" className="w-full max-w-sm rounded-xl shadow-lg" />
                </motion.div>
                <motion.div className="space-y-5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                  <p className="text-[18px] text-black/70 leading-relaxed">Hi, I'm Hyebin Park, but you can call me Bibi 👋</p>
                  <p className="text-[16px] text-black/55 leading-relaxed">
                    I'm a <span className="font-semibold text-black/80">strategic product designer</span> who turns complex problems in <span className="font-semibold text-black/80">emerging tech</span> into tangible <span className="font-semibold text-black/80">business impact</span>.
                  </p>
                  <p className="text-[16px] text-black/55 leading-relaxed">
                    As a Master's student in <span className="font-semibold text-black/80">Human-Computer Interaction</span> at the University of Michigan, I specialize in bridging <span className="font-semibold text-black/80">user needs, technical possibilities, and business goals</span>.
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1l2V4pQCjAZhIhLyRmVh3m2QTw87yLI6P/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium text-white transition-all hover:opacity-90"
                    style={{ background: "#4338CA" }}
                  >
                    View Resume <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </div>
            </MacWin>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="px-4 py-28 sm:px-8 sm:py-36 md:px-10" aria-labelledby="exp-heading">
          <div className="mx-auto max-w-[1000px]">
            <MacWin title="Finder — Experience">
              <div className="p-6 sm:p-8 md:p-10">
                <SectionHeader eyebrow="Experience" title="What I've been exploring and learning 🚀" />
                <div className="space-y-5">
                  {experiences.map((exp, i) => (
                    <motion.div key={exp.title} className="flex gap-5 rounded-xl bg-[#f7f8fa] p-6" style={{ border: "1px solid rgba(0,0,0,0.04)" }}
                      initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                    >
                      <img src={exp.image} alt={exp.title} className="hidden h-20 w-20 flex-shrink-0 rounded-full object-cover sm:block" />
                      <div>
                        <p className="text-[14px] font-semibold text-[#4338CA]">{exp.period}</p>
                        <h3 className="mt-1 text-[18px] font-bold text-black/80">{exp.title}</h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-black/50">{exp.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </MacWin>
          </div>
        </section>

        {/* How I Work */}
        <section className="px-4 py-28 sm:px-8 sm:py-36 md:px-10" aria-labelledby="how-heading">
          <div className="mx-auto max-w-[1000px]">
            <MacWin title="Notes — How I Work">
              <div className="p-6 sm:p-8 md:p-10">
                <SectionHeader eyebrow="Values" title="How I Work" />
                <div className="grid gap-6 sm:grid-cols-3">
                  {workValues.map((v, i) => (
                    <motion.div key={v.title} className="rounded-xl bg-[#f7f8fa] p-6" style={{ border: "1px solid rgba(0,0,0,0.04)" }}
                      initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    >
                      <h3 className="mb-3 text-[18px] font-semibold text-black/80">
                        <span className="mr-2">{v.emoji}</span>{v.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-black/50">{v.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </MacWin>
          </div>
        </section>

        {/* Outside of Design — Photo Shuffle */}
        <section className="px-4 py-28 sm:px-8 sm:py-36 md:px-10" aria-labelledby="hobbies-heading">
          <div className="mx-auto max-w-[1000px]">
            <SectionHeader eyebrow="Beyond Design" title="Outside of Design Work" />
            <div className="flex justify-center">
              <PhotoShuffleWidget hobbies={hobbies} />
            </div>
          </div>
        </section>

        <div id="cta-section"><Footer /></div>
      </main>
    </div>
  );
};

export default About;
