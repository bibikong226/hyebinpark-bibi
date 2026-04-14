import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { MacWindow } from "@/components/MacWindow";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  if (!project) return <Navigate to="/" replace />;

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <Layout>
      {/* Hero */}
      <section className="px-4 sm:px-8 md:px-10 pt-12 md:pt-16 pb-8" aria-labelledby="project-title">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to work
            </Link>

            <MacWindow title={`${project.title}.project`}>
              <div className="p-6 md:p-10 space-y-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 text-xs font-medium bg-white/5 text-white/60 rounded-full border border-white/10">{tag}</span>
                  ))}
                </div>
                <h1 id="project-title" className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-white">{project.title}</h1>
                <p className="text-xl text-white/50 max-w-2xl">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.highlights.map((highlight, index) => (
                    <span key={index} className="px-4 py-2 text-sm rounded-md font-medium text-white" style={{ backgroundColor: project.accentColor }}>{highlight}</span>
                  ))}
                </div>

                {/* Project Meta */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                  <div><p className="text-sm text-white/40 mb-1">Role</p><p className="font-medium text-white">{project.role}</p></div>
                  <div><p className="text-sm text-white/40 mb-1">Duration</p><p className="font-medium text-white">{project.duration}</p></div>
                  <div><p className="text-sm text-white/40 mb-1">Team</p><p className="font-medium text-white">{project.team}</p></div>
                </div>
              </div>
            </MacWindow>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 sm:px-8 md:px-10 py-4">
        <div className="max-w-5xl mx-auto">
          <MacWindow title={`${project.title}-preview`}>
            <div className="p-8 md:p-12" style={{ backgroundColor: project.imageColor }}>
              <div className="flex flex-col items-center gap-8">
                <img src={project.logo} alt={`${project.title} logo`} className="h-12 md:h-16 w-auto object-contain" />
                <img src={project.mockup} alt={`${project.title} mockup`} className="w-full max-w-4xl object-contain rounded-lg" />
              </div>
            </div>
          </MacWindow>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-4 sm:px-8 md:px-10 py-8 md:py-12" aria-labelledby="challenge-heading">
        <div className="max-w-3xl mx-auto">
          <MacWindow title="the-challenge.md">
            <motion.div className="grid md:grid-cols-3 gap-8 p-6 md:p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div><h2 id="challenge-heading" className="font-serif text-2xl md:text-3xl text-white">The Challenge</h2></div>
              <div className="md:col-span-2"><p className="text-lg text-white/50 leading-relaxed">{project.challenge}</p></div>
            </motion.div>
          </MacWindow>
        </div>
      </section>

      {/* Approach */}
      <section className="px-4 sm:px-8 md:px-10 py-8 md:py-12" aria-labelledby="approach-heading">
        <div className="max-w-3xl mx-auto">
          <MacWindow title="the-approach.md">
            <motion.div className="grid md:grid-cols-3 gap-8 p-6 md:p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div><h2 id="approach-heading" className="font-serif text-2xl md:text-3xl text-white">The Approach</h2></div>
              <div className="md:col-span-2"><p className="text-lg text-white/50 leading-relaxed">{project.approach}</p></div>
            </motion.div>
          </MacWindow>
        </div>
      </section>

      {/* Solution */}
      <section className="px-4 sm:px-8 md:px-10 py-8 md:py-12" aria-labelledby="solution-heading">
        <div className="max-w-3xl mx-auto">
          <MacWindow title="the-solution.md">
            <motion.div className="grid md:grid-cols-3 gap-8 p-6 md:p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div><h2 id="solution-heading" className="font-serif text-2xl md:text-3xl text-white">The Solution</h2></div>
              <div className="md:col-span-2"><p className="text-lg text-white/50 leading-relaxed">{project.solution}</p></div>
            </motion.div>
          </MacWindow>
        </div>
      </section>

      {/* Process Images */}
      <section className="px-4 sm:px-8 md:px-10 py-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <MacWindow key={i} title={`process-${i}.png`}>
                <motion.div className="aspect-[4/3] bg-white/5 flex items-center justify-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <p className="text-white/30">Process Image {i}</p>
                </motion.div>
              </MacWindow>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-4 sm:px-8 md:px-10 py-8 md:py-12" aria-labelledby="impact-heading">
        <div className="max-w-3xl mx-auto">
          <motion.div className="space-y-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 id="impact-heading" className="font-serif text-2xl md:text-3xl text-white">The Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.impact.map((item, index) => (
                <MacWindow key={index}>
                  <motion.div className="p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                    <p className="text-lg font-medium text-white">{item}</p>
                  </motion.div>
                </MacWindow>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="px-4 sm:px-8 md:px-10 py-12 md:py-16" style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Link to={`/project/${prevProject.id}`} className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-xl">
              <MacWindow>
                <div className="flex items-center gap-4 p-6">
                  <ArrowLeft className="w-5 h-5 text-white/50 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-white/40">Previous</p>
                    <p className="font-serif text-lg text-white group-hover:text-indigo-400 transition-colors">{prevProject.title}</p>
                  </div>
                </div>
              </MacWindow>
            </Link>
            <Link to={`/project/${nextProject.id}`} className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-xl">
              <MacWindow>
                <div className="flex items-center justify-end gap-4 p-6 text-right">
                  <div>
                    <p className="text-sm text-white/40">Next</p>
                    <p className="font-serif text-lg text-white group-hover:text-indigo-400 transition-colors">{nextProject.title}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/50 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </MacWindow>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
