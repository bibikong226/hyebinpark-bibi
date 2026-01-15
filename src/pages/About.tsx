import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
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
  {
    image: hobbyTravel,
    caption: "✈️ Loves to travel and experience new culture"
  },
  {
    image: hobbyPeople,
    caption: "🤝 Enjoys meeting different people and stories"
  },
  {
    image: hobbyChallenges,
    caption: "🤿 Eager to take on new challenges"
  },
  {
    image: hobbyTheater,
    caption: "🎭 Steps on stage and steals the spotlight"
  }
];

const experiences = [
  {
    period: "2024 – Present",
    title: "MS-HCI @ University of Michigan",
    description: "Blending UX research, design strategy, and emerging tech to create more human-centered products. From automotive UX to Generative AI and accessibility, I explore how technology can serve people better.",
    image: expMichigan
  },
  {
    period: "2023 – Present",
    title: "UX Designer @ Concord AI",
    description: "Led the 0-to-1 design of Concord's first client-facing product, fostering close collaboration with C-level, product, and engineering stakeholders. My final design for the institutional OTC trading and asset management MVP increased user trust and trading speed.",
    image: expConcord
  },
  {
    period: "2023",
    title: "Product Strategy Research Assistant @ LINE",
    description: "Explored how Generative AI, blockchain, and Web3 could evolve into user-centered products. Translated market trends, usability gaps, and interaction patterns into strategic insights.",
    image: expLine
  },
  {
    period: "2022",
    title: "Global Communications Intern @ TikTok",
    description: "Created digital content that helped creators navigate TikTok's tools. Worked across global cross-functional teams on campaigns like Internet Safety Month and TikTok Shop.",
    image: expTiktok
  },
  {
    period: "2020 – 2021",
    title: "UX Research & Strategy Intern @ NAVER Corp",
    description: "Connected user insights with service and marketing strategies. Led qualitative research including interviews, FGIs, and social listening to uncover user needs and shape content.",
    image: expNaver
  }
];

const workValues = [
  {
    title: "Empathy",
    emoji: "💛",
    description: "Understanding users deeply through research and genuine human connection to create meaningful solutions"
  },
  {
    title: "Strategy",
    emoji: "🎯",
    description: "Bridging user needs with business goals through data-driven insights and strategic thinking"
  },
  {
    title: "Creativity",
    emoji: "✨",
    description: "Exploring innovative approaches and emerging technologies to solve complex design challenges"
  }
];

const About = () => {
  return (
    <div className="bg-white text-zinc-900 min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-10 bg-white/80 backdrop-blur-sm">
        <Link to="/" className="font-semibold tracking-tight text-xl uppercase text-zinc-900">Hyebin Park</Link>
        <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-900">
          <Link to="/#work" className="hover:opacity-60 transition-all">Work</Link>
          <Link to="/#explore" className="hover:opacity-60 transition-all">Explore</Link>
          <Link to="/about" className="hover:opacity-60 transition-all text-indigo-600">About</Link>
          <a href="/cv" className="hover:opacity-60 transition-all">CV</a>
          <a href="https://www.linkedin.com/in/hyebinp/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all normal-case text-sm tracking-normal font-medium">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-serif italic text-indigo-600 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Hyebin!
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={profilePhoto} 
                alt="Hyebin Park" 
                className="w-full max-w-md rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* Bio */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-xl text-zinc-700 leading-relaxed">
                Hi, I'm Hyebin Park, but you can call me Bibi 👋
              </p>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                I'm a <span className="font-semibold text-zinc-800">strategic product designer</span> who turns complex problems in <span className="font-semibold text-zinc-800">emerging tech</span> into tangible <span className="font-semibold text-zinc-800">business impact</span>. I use research-backed insight to bring a human touch to powerful new systems, from AI algorithms to crypto workflows.
              </p>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                As a Master's student in <span className="font-semibold text-zinc-800">Human-Computer Interaction</span> at the University of Michigan, I specialize in bridging the gap between <span className="font-semibold text-zinc-800">user needs, technical possibilities, and business goals</span>.
              </p>

              <a 
                href="https://drive.google.com/file/d/1nQT7zvAsbfZ61Sf4ybIM1jmfbsVLSDjN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-all font-medium mt-4"
              >
                View Resume
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-8 md:px-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-medium text-zinc-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What I have been exploring and learning 🚀
          </motion.h2>
          
          <div className="mt-16 space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="grid md:grid-cols-3 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Image */}
                <div className="md:col-span-1 flex justify-center">
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
                  />
                </div>
                
                {/* Content */}
                <div className="md:col-span-2">
                  <span className="text-sm text-indigo-600 font-medium">{exp.period}</span>
                  <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 mt-2 mb-4">{exp.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-medium text-zinc-900 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How I Work
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {workValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="p-8 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-serif italic text-indigo-600 mb-4">
                  <span className="mr-2">{value.emoji}</span>
                  {value.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outside of Design Work Section */}
      <section className="py-20 px-8 md:px-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-medium text-zinc-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Outside of Design Work
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.caption}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img 
                    src={hobby.image} 
                    alt={hobby.caption} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">{hobby.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20 px-8 md:px-16 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-medium">
              Let's Connect
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              I'm always excited to connect with fellow designers, researchers, and innovators. Whether you have a project in mind or just want to talk about design and technology, I'd love to hear from you. Let's talk! 👩‍💻
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a 
                href="mailto:hyebinp@umich.edu"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-full hover:bg-zinc-100 transition-all font-medium"
              >
                hyebinp@umich.edu
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/hyebinp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-full hover:bg-white/20 transition-all font-medium"
              >
                LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-16 bg-zinc-900 text-zinc-400 text-center text-sm">
        <p>© 2024 Hyebin Park. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
