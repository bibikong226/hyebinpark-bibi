import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { MacWindow } from "@/components/MacWindow";
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

const hobbies = [
  { image: hobbyTravel, caption: "✈️ Loves to travel and experience new culture" },
  { image: hobbyPeople, caption: "🤝 Enjoys meeting different people and stories" },
  { image: hobbyChallenges, caption: "🤿 Eager to take on new challenges" },
  { image: hobbyTheater, caption: "🎭 Steps on stage and steals the spotlight" },
];

const experiences = [
  { period: "2024 – Present", title: "MS-HCI @ University of Michigan", description: "Blending UX research, design strategy, and emerging tech to create more human-centered products. From automotive UX to Generative AI and accessibility, I explore how technology can serve people better.", image: expMichigan },
  { period: "2023 – Present", title: "UX Designer @ Concord AI", description: "Led the 0-to-1 design of Concord's first client-facing product, fostering close collaboration with C-level, product, and engineering stakeholders. My final design for the institutional OTC trading and asset management MVP increased user trust and trading speed.", image: expConcord },
  { period: "2023", title: "Product Strategy Research Assistant @ LINE", description: "Explored how Generative AI, blockchain, and Web3 could evolve into user-centered products. Translated market trends, usability gaps, and interaction patterns into strategic insights.", image: expLine },
  { period: "2022", title: "Global Communications Intern @ TikTok", description: "Created digital content that helped creators navigate TikTok's tools. Worked across global cross-functional teams on campaigns like Internet Safety Month and TikTok Shop.", image: expTiktok },
  { period: "2020 – 2021", title: "UX Research & Strategy Intern @ NAVER Corp", description: "Connected user insights with service and marketing strategies. Led qualitative research including interviews, FGIs, and social listening to uncover user needs and shape content.", image: expNaver },
];

const workValues = [
  { title: "Empathy", emoji: "💛", description: "Understanding users deeply through research and genuine human connection to create meaningful solutions" },
  { title: "Strategy", emoji: "🎯", description: "Bridging user needs with business goals through data-driven insights and strategic thinking" },
  { title: "Creativity", emoji: "✨", description: "Exploring innovative approaches and emerging technologies to solve complex design challenges" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-8 md:px-16" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif italic text-indigo-400 mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Hyebin!
          </motion.h1>

          <MacWindow title="about-hyebin.md">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start p-6 sm:p-8 md:p-10">
              {/* Profile Photo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src={aboutProfile}
                  alt="Hyebin Park smiling at camera"
                  className="w-full max-w-sm md:max-w-md rounded-xl shadow-lg mx-auto md:mx-0"
                />
              </motion.div>

              {/* Bio */}
              <motion.div
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                  Hi, I'm Hyebin Park, but you can call me Bibi 👋
                </p>
                <p className="text-base sm:text-lg text-white/50 leading-relaxed">
                  I'm a <span className="font-semibold text-white">strategic product designer</span> who turns complex problems in <span className="font-semibold text-white">emerging tech</span> into tangible <span className="font-semibold text-white">business impact</span>. I use research-backed insight to bring a human touch to powerful new systems, from AI algorithms to crypto workflows.
                </p>
                <p className="text-base sm:text-lg text-white/50 leading-relaxed">
                  As a Master's student in <span className="font-semibold text-white">Human-Computer Interaction</span> at the University of Michigan, I specialize in bridging the gap between <span className="font-semibold text-white">user needs, technical possibilities, and business goals</span>.
                </p>
                <a
                  href="https://drive.google.com/file/d/1l2V4pQCjAZhIhLyRmVh3m2QTw87yLI6P/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-[#0c0e1a] rounded-full hover:bg-white/90 transition-all font-medium text-sm sm:text-base mt-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  View Resume
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </motion.div>
            </div>
          </MacWindow>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16" aria-labelledby="experience-heading">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            id="experience-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What I have been exploring and learning 🚀
          </motion.h2>

          <div className="mt-10 sm:mt-12 md:mt-16 space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <MacWindow>
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start p-5 sm:p-6">
                    <div className="flex-shrink-0">
                      <img src={exp.image} alt={exp.title} className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <span className="text-xs sm:text-sm text-indigo-400 font-medium">{exp.period}</span>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mt-2 mb-3 sm:mb-4">{exp.title}</h3>
                      <p className="text-sm sm:text-base text-white/50 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </MacWindow>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16" aria-labelledby="how-heading">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            id="how-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How I Work
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {workValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <MacWindow>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-serif italic text-indigo-400 mb-3 sm:mb-4">
                      <span className="mr-2" aria-hidden="true">{value.emoji}</span>
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/50 leading-relaxed">{value.description}</p>
                  </div>
                </MacWindow>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outside of Design Work */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16" aria-labelledby="hobbies-heading">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            id="hobbies-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Outside of Design Work
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.caption}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <MacWindow>
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={hobby.image} alt={hobby.caption} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed p-3">{hobby.caption}</p>
                </MacWindow>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
