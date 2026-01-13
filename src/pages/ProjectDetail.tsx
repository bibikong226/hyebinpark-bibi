import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];
  
  if (!project) {
    return <Navigate to="/" replace />;
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-24 md:pt-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to work
            </Link>

            <div className="space-y-4 mb-12">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                {project.description}
              </p>
              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm rounded-md font-medium"
                    style={{ backgroundColor: project.accentColor, color: 'white' }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pb-12 border-b border-border">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Role</p>
                <p className="font-medium">{project.role}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Duration</p>
                <p className="font-medium">{project.duration}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Team</p>
                <p className="font-medium">{project.team}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="section-padding py-0">
        <div className="container-wide">
          <motion.div
            className="aspect-[16/9] rounded-2xl overflow-hidden"
            style={{ backgroundColor: project.imageColor }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-background/50 text-lg">Project Hero Image</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">The Challenge</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-card/50">
        <div className="container-narrow">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">The Approach</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.approach}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">The Solution</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Images Placeholder */}
      <section className="section-padding py-0">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                className="aspect-[4/3] rounded-xl bg-muted flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-muted-foreground">Process Image {i}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl">The Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.impact.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-lg font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to={`/project/${prevProject.id}`}
              className="group flex items-center gap-4 p-6 rounded-xl border border-border hover:border-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-sm text-muted-foreground">Previous</p>
                <p className="font-serif text-lg group-hover:text-primary transition-colors">
                  {prevProject.title}
                </p>
              </div>
            </Link>

            <Link
              to={`/project/${nextProject.id}`}
              className="group flex items-center justify-end gap-4 p-6 rounded-xl border border-border hover:border-primary transition-colors text-right"
            >
              <div>
                <p className="text-sm text-muted-foreground">Next</p>
                <p className="font-serif text-lg group-hover:text-primary transition-colors">
                  {nextProject.title}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
