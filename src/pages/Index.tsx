import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PuzzleAnimation } from "@/components/PuzzleAnimation";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center section-padding bg-gradient-to-b from-background to-card/30">
        <div className="container-wide w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              className="space-y-6 order-2 lg:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p
                className="text-muted-foreground tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Strategic Product Designer
              </motion.p>
              
              <motion.h1
                className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                I design products that{" "}
                <span className="text-primary italic">connect</span> people
                and solve{" "}
                <span className="text-accent italic">meaningful</span> problems
              </motion.h1>
              
              <motion.p
                className="text-lg text-muted-foreground max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                With 6+ years of experience, I craft intuitive digital experiences 
                that balance user needs with business goals. Currently based in San Francisco.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="#work"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  View my work
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  Get in touch
                </a>
              </motion.div>
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
