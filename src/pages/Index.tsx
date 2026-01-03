import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PuzzleAnimation } from "@/components/PuzzleAnimation";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col relative overflow-hidden">
        {/* Background Name Treatment - Very subtle, positioned as background layer */}
        <div 
          className="absolute inset-0 flex items-start justify-center pt-8 md:pt-12 select-none pointer-events-none"
          aria-hidden="true"
        >
          <span 
            className="font-sans text-[32vw] md:text-[28vw] lg:text-[26vw] font-bold tracking-[0.3em] uppercase whitespace-nowrap text-foreground/[0.06]"
          >
            HYEBIN PARK
          </span>
        </div>

        <div className="w-full flex-1 flex items-center justify-center px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-6xl mx-auto">
            {/* Text Content */}
            <motion.div
              className="space-y-6 order-2 lg:order-1"
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
                <span className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-lg md:text-xl text-muted-foreground font-normal">Turning</span>
                  <span className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal italic text-accent">complexity</span>
                </span>
                <span className="flex items-baseline gap-2 flex-wrap mt-1">
                  <span className="text-base md:text-lg text-muted-foreground/50 font-light">into</span>
                  <span className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal italic text-primary">clarity.</span>
                </span>
              </motion.h1>
              
              {/* Supporting Description */}
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-[1.6] pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                From AI algorithms to crypto workflows,<br />
                I turn ambiguity into structured, usable products<br />
                that drive real business impact.
              </motion.p>
            </motion.div>

            {/* Puzzle Animation */}
            <motion.div
              className="flex justify-center lg:justify-start order-1 lg:order-2 lg:-ml-8"
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
      <section id="work" className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            className="mb-12"
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

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-card/50">
        <div className="container-narrow">
          <motion.blockquote
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic leading-relaxed mb-8">
              "Hyebin has an exceptional ability to translate complex problems into 
              elegant, user-centered solutions. Her strategic thinking and attention 
              to detail made her invaluable to our team."
            </p>
            <footer className="space-y-1">
              <cite className="not-italic font-medium text-lg">Sarah Chen</cite>
              <p className="text-muted-foreground">VP of Product, TechCorp</p>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl">
              Let's create something great together
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-background text-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Start a conversation
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
