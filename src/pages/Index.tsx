import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PuzzleAnimation } from "@/components/PuzzleAnimation";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col section-padding bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
        {/* Background Name Treatment - Between header and content */}
        <div 
          className="w-full text-center pt-8 pb-4 select-none"
          aria-hidden="true"
        >
          <span 
            className="font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] font-bold tracking-tight uppercase whitespace-nowrap text-zinc-200"
          >
            HYEBIN PARK
          </span>
          <p className="text-sm md:text-base text-muted-foreground tracking-widest uppercase mt-4">
            Strategic Product Designer
          </p>
        </div>

        <div className="container-wide w-full flex-1 flex items-center relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              className="space-y-8 order-2 lg:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              
              {/* Main Headline */}
              <motion.h1
                className="leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block text-xl md:text-2xl text-muted-foreground font-light mb-2">
                  Turning
                </span>
                <span className="block font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium italic text-amber-700">
                  complexity
                </span>
                <span className="block text-xl md:text-2xl text-muted-foreground/60 font-light my-2">
                  into
                </span>
                <span className="block font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium italic text-indigo-700">
                  clarity.
                </span>
              </motion.h1>
              
              {/* Supporting Description */}
              <motion.p
                className="text-base md:text-lg text-muted-foreground max-w-[480px] leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                From AI algorithms to crypto workflows, I turn ambiguity into structured, 
                usable products that drive real business impact.
              </motion.p>
            </motion.div>

            {/* Puzzle Animation */}
            <motion.div
              className="flex justify-center lg:justify-end order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
