import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PuzzleAnimation } from "@/components/PuzzleAnimation";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20 lg:pb-24">
        {/* Background Name Treatment - Decorative backdrop behind hero */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-sans text-[clamp(80px,18vw,240px)] font-bold tracking-[0.15em] uppercase text-foreground/[0.03] leading-none whitespace-nowrap">
            HYEBIN PARK
          </span>
        </div>

        {/* Hero Container - Centered, cohesive unit */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left: Text Content */}
            <motion.div
              className="flex-1 space-y-5 text-center lg:text-left order-2 lg:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Intro Line */}
              <motion.p
                className="text-sm md:text-base tracking-wide text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I am Hyebin Park. <span className="text-foreground/70">Strategic product designer.</span>
              </motion.p>
              
              {/* Main Headline */}
              <motion.h1
                className="leading-[1.05]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="flex items-baseline gap-2 flex-wrap justify-center lg:justify-start">
                  <span className="text-lg md:text-xl text-muted-foreground font-normal">Turning</span>
                  <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal italic text-accent">complexity</span>
                </span>
                <span className="flex items-baseline gap-2 flex-wrap mt-1 justify-center lg:justify-start">
                  <span className="text-base md:text-lg text-muted-foreground/50 font-light">into</span>
                  <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal italic text-primary">clarity.</span>
                </span>
              </motion.h1>
              
              {/* Supporting Description */}
              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 leading-[1.6]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                From AI algorithms to crypto workflows,<br className="hidden md:inline" />
                I turn ambiguity into structured, usable products<br className="hidden md:inline" />
                that drive real business impact.
              </motion.p>
            </motion.div>

            {/* Right: Portrait/Puzzle Animation */}
            <motion.div
              className="flex-shrink-0 order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <PuzzleAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="section-padding pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-24">
        <div className="container-wide">
          <motion.div
            className="mb-12 md:mb-14 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Selected Work</h2>
            <p className="text-muted-foreground max-w-2xl">
              A collection of projects where I've led design efforts to create 
              impactful solutions across various industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-24 lg:gap-y-28">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-24 bg-card/50">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                id: "t1",
                author: "David Rashid",
                role: "CEO",
                company: "Concord Systems",
                text: "Hyebin quickly grasped the business model and technical constraints behind our platform.",
                subtext: "She didn't just design screens. She transformed backend complexity into seamless, user-first flows that contributed to our business growth."
              },
              {
                id: "t2",
                author: "Elisa Vargas",
                role: "Product Designer",
                company: "JSTOR",
                text: "Hyebin has a rare ability to connect deep research insights with thoughtful design decisions that drive real user impact.",
                subtext: "Her user-centered thinking and clarity of intent made a lasting impression on our team."
              },
              {
                id: "t3",
                author: "Jae Hoon Shim",
                role: "Product Strategy Manager",
                company: "LINE+",
                text: "Hyebin is one of the most dedicated and driven collaborators I've worked with.",
                subtext: "She approaches every project with curiosity, a sharp eye for detail, and a user-first mindset. Her passion made our time together impactful."
              },
              {
                id: "t4",
                author: "Jong Hee Hong",
                role: "Head of Global Communications",
                company: "TikTok Korea",
                text: "What always stands out with Hyebin is how she connects her creativity with real curiosity. She's always asking the right questions.",
                subtext: "Her energy makes collaboration feel easy, and she's excellent at communicating her ideas."
              },
            ].map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.id}
                className="bg-background p-6 md:p-7 rounded-lg space-y-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="space-y-4">
                  <p className="font-serif text-lg italic leading-relaxed text-foreground">
                    "{testimonial.text}
                  </p>
                  <p className="font-serif text-lg italic leading-relaxed text-foreground">
                    {testimonial.subtext}"
                  </p>
                </div>
                <footer className="space-y-1 pt-4 border-t border-border/50">
                  <cite className="not-italic font-medium text-base block">{testimonial.author}</cite>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
