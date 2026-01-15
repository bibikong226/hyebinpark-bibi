import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { SectionNav } from '@/components/SectionNav';
import nurturlyLogo from '../assets/nurturly/nurturly-logo.png';
import newMockupImage from '../assets/nurturly/new-mockup.png';
import surveyChartClean from '../assets/nurturly/survey-chart-clean.png';
import surveyStats from '../assets/nurturly/survey-stats.png';
import emotionalSupportGapComplete from '../assets/nurturly/emotional-support-gap-complete.png';
import informationOverloadComplete from '../assets/nurturly/information-overload-complete.png';
import umLogoImage from '../assets/nurturly/u-m_logo.png';
import techJamLogoImage from '../assets/nurturly/tech_innovation_jam.png';
import onlineCommunities1 from '../assets/nurturly/online-communities-1.png';
import onlineCommunities2 from '../assets/nurturly/online-communities-2.png';
import competitiveAnalysis from '../assets/nurturly/competitive-analysis.png';
import introducingNurturly from '../assets/nurturly/introducing-nurturly.png';
import lowFiWireframes from '../assets/nurturly/low-fi-wireframes.png';
import highFidelityMockups from '../assets/nurturly/high-fidelity-mockups.png';
import aiChatFirstDesign from '../assets/nurturly/ai-chat-first-design.png';
import aiChatFinalDesign from '../assets/nurturly/ai-chat-final-design.png';
import chatbotFirstDesign from '../assets/nurturly/chatbot-first-design.png';
import chatbotFinalDesign from '../assets/nurturly/chatbot-final-design.png';
import communityFirstDesign from '../assets/nurturly/community-first-design.png';
import communityFinalDesign from '../assets/nurturly/community-final-design.png';
import aiChatbotFeature from '../assets/nurturly/ai-chatbot-feature.png';
import communityConnectionFeature from '../assets/nurturly/community-connection-feature.png';
import trackingResourcesFeature from '../assets/nurturly/tracking-resources-feature.png';
import localResourcesGif from '../assets/nurturly/local-resources.gif';
import communityModerationFeature from '../assets/nurturly/community-moderation-feature.png';
import feature04Gif from '../assets/nurturly/feature-04.gif';
import communityFeatureGif from '../assets/nurturly/community-feature.gif';
import teamAwards from '../assets/nurturly/team-awards.png';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'summary', label: 'Summary' },
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'research', label: 'User Research' },
  { id: 'principles', label: 'Principles' },
  { id: 'ideation', label: 'Ideation' },
  { id: 'iterations', label: 'Iterations' },
  { id: 'highfi', label: 'High-Fi' },
  { id: 'result', label: 'Result' },
  { id: 'reflection', label: 'Reflection' },
];

const Nurturly = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <SectionNav sections={sections} />

      {/* Hero Section */}
      <section id="hero" className="section-padding">
        <div className="container-narrow text-center">
          <motion.img 
            src={nurturlyLogo} 
            alt="Nurturly Logo" 
            className="max-w-[400px] mx-auto mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.p
            className="text-xl md:text-2xl text-nurturly font-semibold leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Designing an AI-driven platform that connects new moms<br/>
            to personalized resources and peer support
          </motion.p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-12 lg:px-24">
        <motion.div 
          className="bg-nurturly rounded-3xl p-8 md:p-12 max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img 
            src={newMockupImage} 
            alt="Nurturly App Mockup" 
            className="w-full h-auto hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* Project Details */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { title: 'SKILLS', content: 'User Research\nUX/UI Design\nInteractive Prototyping\nUsability Testing' },
              { title: 'MY ROLE', content: 'UX Design Lead' },
              { title: 'TIMELINE', content: '2 Months\nOct. 2024 - Nov. 2024' },
              { title: 'TEAM', content: '2 UX designers\nproduct manager\nbusiness analyst' },
            ].map((item, index) => (
              <div key={index} className="text-left">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{item.title}</h4>
                <p className="text-foreground whitespace-pre-line">{item.content}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="section-padding bg-card/50">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">SUMMARY</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Nurturly was created during the <span className="text-nurturly">Tech Innovation Jam</span>, a competitive 5-week <span className="text-nurturly">hackathon</span> at the University of Michigan.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Designed to address the <span className="font-semibold text-foreground">emotional isolation</span> and <span className="font-semibold text-foreground">overwhelming information</span> moms face during <span className="font-semibold text-foreground">pregnancy and postpartum,</span> Nurturly connects them to a safe, supportive community and tailored resources through <span className="font-semibold text-foreground">AI-driven personalization.</span>
            </p>
          </motion.div>

          <motion.div 
            className="flex gap-12 items-center justify-center my-12 flex-wrap"
            {...fadeInUp}
          >
            <img src={umLogoImage} alt="University of Michigan Logo" className="max-h-[120px]" />
            <img src={techJamLogoImage} alt="Tech Innovation Jam Logo" className="max-h-[120px]" />
          </motion.div>

          <div className="space-y-4">
            <motion.div 
              className="bg-background p-6 rounded-xl border border-nurturly/20"
              {...fadeInUp}
            >
              <p className="text-foreground">
                🌟 As the <strong>main UX designer</strong>, I drove the product from discovery to delivery, <strong>translating research into strategic design solutions.</strong> I focused on designing the <strong>AI-powered matching feature and contextual chatbot,</strong> grounded in insights from interviews, surveys, and competitive analysis.
              </p>
            </motion.div>
            <motion.div 
              className="bg-background p-6 rounded-xl border border-nurturly/20"
              {...fadeInUp}
            >
              <p className="text-foreground">
                🚀 Our team won <strong>Runner-Up & People's Choice Awards</strong>, securing <strong>$5,000 in funding</strong> to advance Nurturly as a scalable postpartum support platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="section-padding">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">PROBLEM</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Pregnancy & Postpartum Support is <span className="text-nurturly">Scattered, Confusing,</span> and Leaves <span className="text-nurturly">Moms Feeling Alone.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From pregnancy to postpartum, moms experience profound changes, but <strong className="text-foreground">support remains fragmented and baby-focused.</strong> With <strong className="text-foreground">unreliable, conflicting resources</strong> and no clear guidance, moms are <strong className="text-foreground">left to figure it out alone.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="section-padding bg-foreground text-background">
        <div className="container-narrow">
          <motion.div className="mb-16" {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-4">SOLUTION</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              <span className="text-nurturly">Reliable</span> answers. <span className="text-nurturly">Real connections.</span><br/>
              A smarter way to navigate motherhood.
            </h2>
            <p className="text-lg opacity-90 leading-relaxed max-w-3xl">
              Nurturly bridges the gap in postpartum care by combining AI-driven insights with human connection. Through personalized support and empathy-centered UX, it delivers a structured, reliable, and reassuring experience for every mom.
            </p>
          </motion.div>

          {/* Feature 1 */}
          <motion.div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24" {...fadeInUp}>
            <div className="flex-1 lg:flex-[1.2]">
              <span className="text-6xl font-semibold opacity-80">01</span>
              <h3 className="font-serif text-2xl md:text-3xl my-4">AI-powered Chatbot & Contextual Recommendations</h3>
              <p className="text-lg opacity-90">
                Provides verified, <span className="text-nurturly">reliable answers,</span> while surfacing <span className="text-nurturly">related posts</span> and peer insights to foster meaningful connection through <span className="text-nurturly">shared concerns.</span>
              </p>
            </div>
            <div className="flex-1 lg:flex-[0.8] flex justify-center">
              <video 
                src="/feature-01.mp4" 
                autoPlay
                loop
                muted
                playsInline
                className="max-w-[280px] rounded-[40px]"
              />
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24 mb-24" {...fadeInUp}>
            <div className="flex-1 lg:flex-[1.2]">
              <span className="text-6xl font-semibold opacity-80">02</span>
              <h3 className="font-serif text-2xl md:text-3xl my-4">Moderated Community & Meaningful Connections</h3>
              <p className="text-lg opacity-90">
                Creates a <span className="text-nurturly">safe space for moms to share</span> and support each other, with <span className="text-nurturly">AI-suggested connections</span> based on shared stages, interests, and nearby location.
              </p>
            </div>
            <div className="flex-1 lg:flex-[0.8] flex justify-center">
              <img src={communityFeatureGif} alt="Community Feature" className="max-w-[280px] rounded-[40px]" />
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24" {...fadeInUp}>
            <div className="flex-1 lg:flex-[1.2]">
              <span className="text-6xl font-semibold opacity-80">03</span>
              <h3 className="font-serif text-2xl md:text-3xl my-4">Curated Local Resources & Support Map</h3>
              <p className="text-lg opacity-90">
                Connects moms to nearby services, events, and care providers, offering <span className="text-nurturly">location-based resources tailored to their stage and needs.</span>
              </p>
            </div>
            <div className="flex-1 lg:flex-[0.8] flex justify-center">
              <img src={localResourcesGif} alt="Local Resources Map" className="max-w-[280px] rounded-[40px]" />
            </div>
          </motion.div>

          {/* Feature 4 */}
          <motion.div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24" {...fadeInUp}>
            <div className="flex-1 lg:flex-[1.2]">
              <span className="text-6xl font-semibold opacity-80">04</span>
              <h3 className="font-serif text-2xl md:text-3xl my-4">Personalized Symptom & Mood Tracking</h3>
              <p className="text-lg opacity-90">
                Helps moms track their <span className="text-nurturly">physical and emotional symptoms,</span> with <span className="text-nurturly">comparative data</span> from others at the same stage, offering <span className="text-nurturly">clarity and reassurance.</span>
              </p>
            </div>
            <div className="flex-1 lg:flex-[0.8] flex justify-center">
              <img src={feature04Gif} alt="Symptom Tracking" className="max-w-[280px] rounded-[40px]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Research Section */}
      <section id="research" className="section-padding">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">SURVEY INSIGHTS</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Survey as a Compass: Finding <span className="text-nurturly">Where to Focus</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I initially assumed that moms might need support throughout the entire motherhood journey. But <span className="font-semibold text-foreground">after conducting 22 surveys</span> with women during pregnancy and postpartum, I was able to <span className="font-semibold text-foreground">narrow the focus.</span>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The responses revealed that support gaps are most critical during <span className="font-semibold text-foreground">pregnancy and postpartum,</span> and that <span className="font-semibold text-foreground">moms need tools designed for their own recovery.</span>
            </p>
          </motion.div>

          <div className="mt-12 space-y-8">
            <motion.img src={surveyChartClean} alt="Survey results" className="w-full max-w-[800px] mx-auto" {...fadeInUp} />
            <motion.img src={surveyStats} alt="Survey statistics" className="w-full max-w-[800px] mx-auto" {...fadeInUp} />
            <motion.div className="bg-card p-6 rounded-xl border border-nurturly/20" {...fadeInUp}>
              <p className="text-foreground">
                💡 These findings helped me narrow the focus to <strong>mom-centered recovery support</strong> during pregnancy and postpartum, not just general parenting help.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interview Insights Section */}
      <section className="section-padding bg-card/50">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">INTERVIEW INSIGHTS</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Zooming In: What <span className="text-nurturly">Moms</span> Are Actually <span className="text-nurturly">Experiencing</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Interviewed 5 moms to understand the emotional, physical, and mental challenges they face during <span className="font-semibold text-foreground">pregnancy and postpartum.</span>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Their stories revealed a deep need for <span className="font-semibold text-foreground">reliable answers, emotional support, and personalized guidance</span> beyond medical facts.
            </p>
          </motion.div>

          <div className="mt-12 space-y-8">
            <motion.img src={emotionalSupportGapComplete} alt="Emotional Support Gap insights" className="w-full max-w-[800px] mx-auto" {...fadeInUp} />
            <motion.img src={informationOverloadComplete} alt="Information Overload insights" className="w-full max-w-[800px] mx-auto" {...fadeInUp} />
          </div>
        </div>
      </section>

      {/* Online Communities Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">DIGITAL ETHNOGRAPHY</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              These Gaps Often Push Moms Toward <span className="text-nurturly">Online Communities</span> In Search Of <span className="text-nurturly">Connection</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Analyzed conversations on <strong className="text-foreground">Reddit, Instagram, TikTok, and Facebook</strong> to see how they seek guidance and connection during pregnancy and postpartum.
            </p>
          </motion.div>

          <div className="mt-12 space-y-8">
            <motion.img src={onlineCommunities1} alt="Online communities analysis 1" className="w-full max-w-[800px] mx-auto" {...fadeInUp} />
            <motion.img src={onlineCommunities2} alt="Online communities analysis 2" className="w-full max-w-[800px] mx-auto" {...fadeInUp} />
          </div>
        </div>
      </section>

      {/* Competitive Analysis Section */}
      <section className="section-padding bg-card/50">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">COMPETITIVE ANALYSIS</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              These Gaps Present a <span className="text-nurturly">Clear Opportunity</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Despite strong communities and a wealth of content, existing platforms often fall short in delivering <strong className="text-foreground">verified, personalized guidance</strong> and fostering <strong className="text-foreground">deep, meaningful connections</strong> between moms.
            </p>
          </motion.div>

          <motion.img src={competitiveAnalysis} alt="Competitive Analysis" className="w-full mt-12" {...fadeInUp} />
        </div>
      </section>

      {/* Design Principles Section */}
      <section id="principles" className="section-padding">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">DESIGN PRINCIPLES</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-12">
              Grounded in Research. <span className="text-nurturly">Designed with Empathy.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '👀', title: 'See the Mom', desc: 'Support beyond the baby with validation and structured recovery tools.' },
              { emoji: '🎯', title: 'Deliver Clarity', desc: 'Cut through information overload with personalized, reliable guidance.' },
              { emoji: '🤝', title: 'Foster Safety', desc: 'Create a judgment-free space where moms feel heard and safe.' },
            ].map((principle, index) => (
              <motion.div 
                key={index}
                className="bg-nurturly text-nurturly-foreground p-8 rounded-xl text-center"
                {...fadeInUp}
              >
                <p className="text-xs font-semibold opacity-80 mb-2 uppercase tracking-wider">DESIGN PRINCIPLE {index + 1}</p>
                <div className="text-5xl mb-4">{principle.emoji}</div>
                <h3 className="font-serif text-xl mb-3">{principle.title}</h3>
                <p className="text-sm opacity-90">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introducing Nurturly Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-4">INTRODUCING NURTURLY</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Through <span className="text-nurturly">AI-powered features</span> and <span className="text-nurturly">empathy-driven design,</span> Nurturly ensures moms feel <span className="text-nurturly">supported, informed, and connected.</span>
            </h2>
          </motion.div>
          <motion.img src={introducingNurturly} alt="Introducing Nurturly features" className="w-full mt-12" {...fadeInUp} />
        </div>
      </section>

      {/* Ideation Section */}
      <section id="ideation" className="section-padding">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">IDEATION</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Visualized solutions through <span className="text-nurturly">low-fidelity designs</span> to explore effective layouts and gather feedback.
            </h2>
          </motion.div>
          <motion.img src={lowFiWireframes} alt="Low-fidelity wireframes" className="w-full max-w-[800px] mx-auto mt-12" {...fadeInUp} />
        </div>
      </section>

      {/* Mid-fi Section */}
      <section className="section-padding bg-card/50">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">MID-FI WIREFRAME</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Building on early concepts, I created <span className="text-nurturly">mid-fidelity</span> prototypes to validate <span className="text-nurturly">navigation logic and content prioritization.</span>
            </h2>
          </motion.div>
          <motion.img src={highFidelityMockups} alt="Mid-fidelity mockups" className="w-full max-w-[900px] mx-auto mt-12" {...fadeInUp} />
        </div>
      </section>

      {/* Design Iterations Section */}
      <section id="iterations" className="section-padding">
        <div className="container-wide">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">DESIGN ITERATIONS</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-12">
              Through user testing and feedback, I iterated on <span className="text-nurturly">key interaction points</span> to improve usability.
            </h2>
          </motion.div>

          {/* Iteration 1 */}
          <motion.div className="mb-24" {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">DESIGN ITERATION #1</p>
            <h3 className="font-serif text-2xl md:text-3xl mb-8">Clarifying the <span className="text-nurturly">AI Chat Entry Point</span></h3>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-destructive text-xl font-bold">✗</span>
                  <span className="font-semibold">First Design</span>
                </div>
                <img src={aiChatFirstDesign} alt="First design" className="max-w-[280px] mx-auto mb-4" />
                <div className="bg-card p-4 rounded-xl max-w-xs mx-auto">
                  <p className="text-sm italic text-muted-foreground">"It looks empty... What should I ask?"</p>
                </div>
              </div>
              <div className="flex items-center justify-center py-8 lg:py-0">
                <span className="text-2xl text-nurturly">→</span>
              </div>
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-green-600 text-xl font-bold">✓</span>
                  <span className="font-semibold">Final Design</span>
                </div>
                <img src={aiChatFinalDesign} alt="Final design" className="max-w-[280px] mx-auto mb-4" />
                <div className="bg-card p-4 rounded-xl max-w-xs mx-auto">
                  <p className="text-sm italic text-muted-foreground">"Now I know how to start the conversation."</p>
                </div>
              </div>
            </div>
            
            <motion.div className="bg-card p-6 rounded-xl border border-nurturly/20 mt-8" {...fadeInUp}>
              <p>⚡ By adding <span className="text-nurturly font-semibold">real-world example prompts</span> and adjusting <span className="text-nurturly font-semibold">visual hierarchy,</span> we helped users feel more confident starting the conversation.</p>
            </motion.div>
          </motion.div>

          {/* Iteration 2 */}
          <motion.div className="mb-24" {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">DESIGN ITERATION #2</p>
            <h3 className="font-serif text-2xl md:text-3xl mb-8">Building Trust in <span className="text-nurturly">AI-Powered Answers</span></h3>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-destructive text-xl font-bold">✗</span>
                  <span className="font-semibold">First Design</span>
                </div>
                <img src={chatbotFirstDesign} alt="First design" className="max-w-[280px] mx-auto mb-4" />
                <div className="bg-card p-4 rounded-xl max-w-xs mx-auto">
                  <p className="text-sm italic text-muted-foreground">"Why are there so many links? It's overwhelming."</p>
                </div>
              </div>
              <div className="flex items-center justify-center py-8 lg:py-0">
                <span className="text-2xl text-nurturly">→</span>
              </div>
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-green-600 text-xl font-bold">✓</span>
                  <span className="font-semibold">Final Design</span>
                </div>
                <img src={chatbotFinalDesign} alt="Final design" className="max-w-[280px] mx-auto mb-4" />
                <div className="bg-card p-4 rounded-xl max-w-xs mx-auto">
                  <p className="text-sm italic text-muted-foreground">"This feels much more reliable now."</p>
                </div>
              </div>
            </div>
            
            <motion.div className="bg-card p-6 rounded-xl border border-nurturly/20 mt-8" {...fadeInUp}>
              <p>⚡ By <span className="text-nurturly font-semibold">decluttering the response</span> and surfacing a <span className="text-nurturly font-semibold">trusted source,</span> we helped moms feel more confident in the AI's answers.</p>
            </motion.div>
          </motion.div>

          {/* Iteration 3 */}
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">DESIGN ITERATION #3</p>
            <h3 className="font-serif text-2xl md:text-3xl mb-8">Creating Meaningful Connections Between <span className="text-nurturly">Moms</span></h3>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-destructive text-xl font-bold">✗</span>
                  <span className="font-semibold">First Design</span>
                </div>
                <img src={communityFirstDesign} alt="First design" className="max-w-[280px] mx-auto mb-4" />
                <div className="bg-card p-4 rounded-xl max-w-xs mx-auto">
                  <p className="text-sm italic text-muted-foreground">"I don't love swiping through too many people."</p>
                </div>
              </div>
              <div className="flex items-center justify-center py-8 lg:py-0">
                <span className="text-2xl text-nurturly">→</span>
              </div>
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-green-600 text-xl font-bold">✓</span>
                  <span className="font-semibold">Final Design</span>
                </div>
                <img src={communityFinalDesign} alt="Final design" className="max-w-[280px] mx-auto mb-4" />
                <div className="bg-card p-4 rounded-xl max-w-xs mx-auto">
                  <p className="text-sm italic text-muted-foreground">"It's easier to find someone I relate to when they're grouped."</p>
                </div>
              </div>
            </div>
            
            <motion.div className="bg-card p-6 rounded-xl border border-nurturly/20 mt-8" {...fadeInUp}>
              <p>⚡ By <span className="text-nurturly font-semibold">surfacing shared traits</span> and <span className="text-nurturly font-semibold">grouping similar users,</span> we made connections feel easier, faster, and more genuine.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* High-Fi Design Section */}
      <section id="highfi" className="section-padding bg-card/50">
        <div className="container-wide">
          <motion.p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8" {...fadeInUp}>HIGH-FI DESIGN</motion.p>
          
          <div className="space-y-24">
            <motion.div {...fadeInUp}>
              <h3 className="font-serif text-2xl md:text-3xl mb-8">AI chatbot that provides trustworthy resources</h3>
              <img src={aiChatbotFeature} alt="AI chatbot interface" className="w-full max-w-5xl mx-auto" />
            </motion.div>

            <motion.div {...fadeInUp}>
              <h3 className="font-serif text-2xl md:text-3xl mb-8">Connecting Moms Through Shared Experiences</h3>
              <img src={communityConnectionFeature} alt="Community connection" className="w-full max-w-5xl mx-auto" />
            </motion.div>

            <motion.div {...fadeInUp}>
              <h3 className="font-serif text-2xl md:text-3xl mb-8">Helping moms track recovery and find trusted local resources</h3>
              <img src={trackingResourcesFeature} alt="Recovery tracking" className="w-full max-w-5xl mx-auto" />
            </motion.div>

            <motion.div {...fadeInUp}>
              <h3 className="font-serif text-2xl md:text-3xl mb-8">Safe, Moderated Community Spaces</h3>
              <img src={communityModerationFeature} alt="Community moderation" className="w-full max-w-5xl mx-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Result Section */}
      <section id="result" className="section-padding">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">RESULT</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Our team won <span className="text-nurturly">Runner-Up & People's Choice Awards</span>, securing <span className="text-nurturly">$5,000</span> in funding to advance Nurturly.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Creating Nurturly was a meaningful journey of growth, teamwork, and dedication to creating real impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Seeing moms resonate with Nurturly's mission was one of the most rewarding moments of this project. We won <strong className="text-foreground">Runner-Up & People's Choice</strong> award at <strong className="text-foreground">TECH+INNOVATION JAM</strong>, <strong className="text-foreground">securing $5,000</strong> in funding to continue building Nurturly.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              This experience deepened my belief in <strong className="text-foreground">empathy-driven UX</strong> and <strong className="text-foreground">research-backed design</strong>, and we're now continuing to develop our MVP.
            </p>
          </motion.div>
          <motion.img src={teamAwards} alt="Team holding award checks" className="w-full rounded-xl" {...fadeInUp} />
        </div>
      </section>

      {/* Reflection Section */}
      <section id="reflection" className="section-padding bg-foreground text-background">
        <div className="container-narrow">
          <motion.p className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-4" {...fadeInUp}>REFLECTION</motion.p>

          {/* What I Could've Done Better */}
          <motion.div className="mb-16" {...fadeInUp}>
            <h3 className="font-serif text-2xl md:text-3xl mb-8">What I Could've Done Better</h3>
            <div className="space-y-4">
              {[
                { emoji: '👩‍⚕️', title: 'Consult more health professionals', desc: 'To ensure solutions are balanced between clinical guidance and lived experiences.' },
                { emoji: '👨‍👩‍👧', title: 'Include partners and families', desc: 'Broaden support by designing tools for the mom\'s ecosystem.' },
                { emoji: '✅', title: 'Test more with moms during design iteration', desc: 'Ensure the experience feels truly supportive, not just usable.' },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-background/5 border border-background/10 rounded-xl p-6"
                  {...fadeInUp}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{item.emoji}</span>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="opacity-80">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What I Learned */}
          <motion.div {...fadeInUp}>
            <h3 className="font-serif text-2xl md:text-3xl mb-8">What I Learned</h3>
            <div className="space-y-4">
              {[
                { emoji: '💡', title: 'Empathy-led design starts with listening', desc: 'I listened deeply to users\' experiences to shape every design decision, ensuring the work was rooted in genuine needs, not assumptions.' },
                { emoji: '🔄', title: 'Iteration is where design gets real', desc: 'Each round of feedback helped refine trust signals, entry points, and personalization, making the product feel truly supportive.' },
                { emoji: '🤝', title: 'Cross-functional collaboration unlocks potential', desc: 'Working with product, business, and engineering helped me think beyond pixels, aligning design with sustainability and long-term impact.' },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-background/5 border border-background/10 rounded-xl p-6"
                  {...fadeInUp}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{item.emoji}</span>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="opacity-80">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-nurturly text-nurturly-foreground">
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
            <p className="opacity-90 max-w-lg mx-auto">
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

export default Nurturly;
