import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";

const skills = [
  { category: "Design", items: ["Product Design", "UX Research", "Design Systems", "Prototyping", "Visual Design"] },
  { category: "Tools", items: ["Figma", "Framer", "Principle", "Miro", "Notion"] },
  { category: "Methods", items: ["User Interviews", "Usability Testing", "A/B Testing", "Journey Mapping", "Design Sprints"] },
];

const timeline = [
  { year: "2024", role: "Lead Product Designer", company: "TechCorp", description: "Leading design system initiatives and mentoring junior designers" },
  { year: "2022", role: "Senior Product Designer", company: "StartupX", description: "Shipped mobile banking app redesign with 2M+ users" },
  { year: "2020", role: "Product Designer", company: "DesignCo", description: "Focused on SaaS products and enterprise UX" },
  { year: "2018", role: "UX Designer", company: "Agency Plus", description: "Client work across healthcare, finance, and e-commerce" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-24 md:pt-32 bg-gradient-to-b from-background to-card/30">
        <div className="container-narrow">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <p className="text-muted-foreground tracking-wide">About me</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                I'm Hyebin, a product designer who believes great design is{" "}
                <span className="text-primary italic">invisible</span>
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Photo placeholder */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-puzzle-1 to-puzzle-2 shadow-warm-lg" />
            </motion.div>

            {/* Bio */}
            <motion.div
              className="md:col-span-3 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl">My Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I fell in love with design when I realized it's the bridge between 
                  human needs and technological possibilities. After studying interaction 
                  design, I've spent the last 6 years crafting digital experiences that 
                  make complex things feel simple.
                </p>
                <p>
                  My approach is deeply rooted in empathy and systems thinking. I believe 
                  the best designs are the ones users don't notice—because everything just 
                  works. I'm passionate about accessibility, believing that good design 
                  should work for everyone.
                </p>
                <p>
                  When I'm not designing, you'll find me exploring San Francisco's coffee 
                  shops, experimenting with film photography, or hiking the coastal trails. 
                  I'm also a mentor at ADPList, helping aspiring designers navigate their 
                  career paths.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-card/50">
        <div className="container-narrow">
          <motion.h2
            className="font-serif text-2xl md:text-3xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills & Tools
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-medium text-lg">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.h2
            className="font-serif text-2xl md:text-3xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="grid md:grid-cols-4 gap-4 pb-8 border-b border-border last:border-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-muted-foreground">{item.year}</div>
                <div className="md:col-span-3">
                  <h3 className="font-medium text-lg">{item.role}</h3>
                  <p className="text-primary">{item.company}</p>
                  <p className="text-muted-foreground mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl">
              Want to work together?
            </h2>
            <p className="text-primary-foreground/80">
              I'd love to hear about your project.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-background text-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
