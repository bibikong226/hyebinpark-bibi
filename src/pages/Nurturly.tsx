import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
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
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
};

const highlightBox = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-30px" },
  transition: { duration: 0.6 }
};

const imageReveal = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 }
};

/* ── Mac window wrapper — ONLY used for Project Details ── */
const MacWin = ({ children, title, className = "" }: { children: React.ReactNode; title?: string; className?: string }) => (
  <motion.div
    className={`overflow-hidden rounded-2xl bg-white ${className}`}
    style={{ border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-2 border-b border-black/[0.06] px-4 py-2.5" aria-hidden="true">
      <div className="flex items-center gap-[7px]">
        <span className="h-3 w-3 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#FFBD2E" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
      </div>
      {title && (
        <>
          <span className="flex-1 text-center text-[13px] font-medium tracking-wide text-black/35">{title}</span>
          <div className="w-[52px]" />
        </>
      )}
    </div>
    <div>{children}</div>
  </motion.div>
);

/* ── White card for content sections ── */
const WhiteCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    className={`rounded-2xl bg-white p-5 sm:p-7 md:p-8 lg:p-10 ${className}`}
    style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const SectionHeader = ({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) => (
  <div className="mb-8 md:mb-10">
    <p className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-black/30">{eyebrow}</p>
    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl leading-[1.15] text-black/85">{title}</h2>
  </div>
);

const PINK = "#DB2777";

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'summary', label: 'Summary' },
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Solution', isDark: true },
  { id: 'research', label: 'Research' },
  { id: 'principles', label: 'Principles' },
  { id: 'ideation', label: 'Ideation' },
  { id: 'iterations', label: 'Iterations' },
  { id: 'highfi', label: 'High-Fi' },
  { id: 'result', label: 'Result' },
  { id: 'reflection', label: 'Reflection', isDark: true },
];

const Nurturly = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div
      className="overflow-x-hidden font-sans"
      style={{
        background: "linear-gradient(180deg, #F5E6F0 0%, #F0E4EE 15%, #EDE4F0 30%, #E8E4F0 50%, #F0EDE6 75%, #F5F0EB 100%)",
      }}
    >
      <Navigation />
      <SectionNav sections={sections} />

      <main id="main-content" role="main">

        {/* ═══════ HERO ═══════ */}
        <section id="hero" className="px-4 pt-8 pb-10 sm:px-8 sm:pt-12 sm:pb-16 md:px-10">
          <div className="mx-auto max-w-[900px] text-center">
            <motion.img
              src={nurturlyLogo}
              alt="Nurturly Logo"
              className="max-w-[180px] sm:max-w-[260px] md:max-w-[340px] mx-auto mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
            <motion.p
              className="text-sm sm:text-base md:text-lg text-black/70 font-semibold leading-relaxed"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Designing an AI-driven platform that connects new moms<br className="hidden sm:inline"/>
              to personalized resources and peer support
            </motion.p>
          </div>
        </section>

        {/* Hero Mockup */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 pb-10 sm:pb-16">
          <motion.div
            className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 max-w-5xl mx-auto"
            style={{ background: PINK }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src={newMockupImage} alt="Nurturly App Mockup" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
          </motion.div>
        </section>

        {/* Project Details — MacWin kept here */}
        <section className="px-4 pb-10 sm:px-8 sm:pb-16 md:px-10">
          <div className="mx-auto max-w-[900px]">
            <MacWin title="Finder — Project Details">
              <div className="p-5 sm:p-7 md:p-8">
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
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
                      <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-black/35 mb-2">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-black/75 whitespace-pre-line leading-relaxed">{item.content}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </MacWin>
          </div>
        </section>

        {/* ═══════ SUMMARY ═══════ */}
        <section id="summary" className="px-4 py-10 sm:px-8 sm:py-14 md:px-10">
          <div className="mx-auto max-w-[900px]">
            <WhiteCard>
              <SectionHeader eyebrow="SUMMARY" title={<>Nurturly was created during the <span style={{ color: PINK }}>Tech Innovation Jam</span>, a competitive 5-week <span style={{ color: PINK }}>hackathon</span> at the University of Michigan.</>} />
              <p className="text-xs sm:text-sm md:text-base text-black/55 leading-relaxed mb-6">
                Designed to address the <span className="font-semibold text-black/80">emotional isolation</span> and <span className="font-semibold text-black/80">overwhelming information</span> moms face during <span className="font-semibold text-black/80">pregnancy and postpartum,</span> Nurturly connects them to a safe, supportive community and tailored resources through <span className="font-semibold text-black/80">AI-driven personalization.</span>
              </p>

              <div className="flex gap-6 sm:gap-8 md:gap-12 items-center justify-center my-6 flex-wrap">
                <img src={umLogoImage} alt="University of Michigan Logo" className="max-h-[60px] sm:max-h-[80px]" />
                <img src={techJamLogoImage} alt="Tech Innovation Jam Logo" className="max-h-[60px] sm:max-h-[80px]" />
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl" style={{ background: "rgba(219,39,119,0.06)", border: "1px solid rgba(219,39,119,0.15)" }}>
                  <p className="text-xs sm:text-sm text-black/75">
                    🌟 As the <strong>main UX designer</strong>, I drove the product from discovery to delivery, <strong>translating research into strategic design solutions.</strong> I focused on designing the <strong>AI-powered matching feature and contextual chatbot,</strong> grounded in insights from interviews, surveys, and competitive analysis.
                  </p>
                </div>
                <div className="p-4 rounded-xl" style={{ background: "rgba(219,39,119,0.06)", border: "1px solid rgba(219,39,119,0.15)" }}>
                  <p className="text-xs sm:text-sm text-black/75">
                    🚀 Our team won <strong>Runner-Up & People's Choice Awards</strong>, securing <strong>$5,000 in funding</strong> to advance Nurturly as a scalable postpartum support platform.
                  </p>
                </div>
              </div>
            </WhiteCard>
          </div>
        </section>

        {/* ═══════ PROBLEM ═══════ */}
        <section id="problem" className="px-4 py-10 sm:px-8 sm:py-14 md:px-10">
          <div className="mx-auto max-w-[900px]">
            <WhiteCard>
              <SectionHeader eyebrow="PROBLEM" title={<>Pregnancy & Postpartum Support is <span style={{ color: PINK }}>Scattered, Confusing,</span> and Leaves <span style={{ color: PINK }}>Moms Feeling Alone.</span></>} />
              <p className="text-xs sm:text-sm md:text-base text-black/55 leading-relaxed">
                From pregnancy to postpartum, moms experience profound changes, but <strong className="text-black/80">support remains fragmented and baby-focused.</strong> With <strong className="text-black/80">unreliable, conflicting resources</strong> and no clear guidance, moms are <strong className="text-black/80">left to figure it out alone.</strong>
              </p>
            </WhiteCard>
          </div>
        </section>

        {/* ═══════ SOLUTION (dark) ═══════ */}
        <section id="solution" className="px-4 py-14 sm:px-8 sm:py-20 md:px-10" style={{ background: "#111" }}>
          <div className="mx-auto max-w-[900px]">
            <div className="text-white mb-10">
              <p className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-white/40">SOLUTION</p>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl leading-[1.15] text-white/90">
                <span style={{ color: PINK }}>Reliable</span> answers. <span style={{ color: PINK }}>Real connections.</span><br className="hidden sm:inline"/>
                A smarter way to navigate motherhood.
              </h2>
              <p className="mt-4 text-xs sm:text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                Nurturly bridges the gap in postpartum care by combining AI-driven insights with human connection. Through personalized support and empathy-centered UX, it delivers a structured, reliable, and reassuring experience for every mom.
              </p>
            </div>

            {[
              { num: "01", title: "AI-powered Chatbot & Contextual Recommendations", desc: <>Provides verified, <span style={{ color: PINK }}>reliable answers,</span> while surfacing <span style={{ color: PINK }}>related posts</span> and peer insights to foster meaningful connection through <span style={{ color: PINK }}>shared concerns.</span></>, media: <video src="/feature-01.mp4" autoPlay loop muted playsInline className="max-w-[180px] sm:max-w-[220px] md:max-w-[260px] rounded-[28px] sm:rounded-[36px]" />, reverse: false },
              { num: "02", title: "Moderated Community & Meaningful Connections", desc: <>Creates a <span style={{ color: PINK }}>safe space for moms to share</span> and support each other, with <span style={{ color: PINK }}>AI-suggested connections</span> based on shared stages, interests, and nearby location.</>, media: <img src={communityFeatureGif} alt="Community Feature" className="max-w-[180px] sm:max-w-[220px] md:max-w-[260px] rounded-[28px] sm:rounded-[36px]" />, reverse: true },
              { num: "03", title: "Curated Local Resources & Support Map", desc: <>Connects moms to nearby services, events, and care providers, offering <span style={{ color: PINK }}>location-based resources tailored to their stage and needs.</span></>, media: <img src={localResourcesGif} alt="Local Resources Map" className="max-w-[180px] sm:max-w-[220px] md:max-w-[260px] rounded-[28px] sm:rounded-[36px]" />, reverse: false },
              { num: "04", title: "Personalized Symptom & Mood Tracking", desc: <>Helps moms track their <span style={{ color: PINK }}>physical and emotional symptoms,</span> with <span style={{ color: PINK }}>comparative data</span> from others at the same stage, offering <span style={{ color: PINK }}>clarity and reassurance.</span></>, media: <img src={feature04Gif} alt="Symptom Tracking" className="max-w-[180px] sm:max-w-[220px] md:max-w-[260px] rounded-[28px] sm:rounded-[36px]" />, reverse: true },
            ].map((f) => (
              <motion.div key={f.num} className={`flex flex-col ${f.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 sm:gap-8 md:gap-12 mt-10 sm:mt-14`} {...fadeInUp}>
                <div className="flex-1 text-center md:text-left text-white">
                  <span className="text-3xl sm:text-4xl font-semibold text-white/30">{f.num}</span>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl my-2">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-white/70">{f.desc}</p>
                </div>
                <div className="flex-shrink-0 flex justify-center">{f.media}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════ USER RESEARCH ═══════ */}
        <section id="research" className="px-4 py-10 sm:px-8 sm:py-14 md:px-10">
          <div className="mx-auto max-w-[900px]">
            <WhiteCard>
              <SectionHeader eyebrow="SURVEY INSIGHTS" title={<>Survey as a Compass: Finding <span style={{ color: PINK }}>Where to Focus</span></>} />
              <p className="text-xs sm:text-sm md:text-base text-black/55 leading-relaxed mb-6">
                We conducted a <strong className="text-black/80">survey with 93 participants</strong> to explore the challenges moms face and understand what kind of support they need most.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <motion.img src={surveyChartClean} alt="Survey results chart" className="w-full rounded-xl" {...imageReveal} />
                <motion.img src={surveyStats} alt="Survey statistics" className="w-full rounded-xl" {...imageReveal} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <motion.div {...highlightBox}>
                  <img src={emotionalSupportGapComplete} alt="Emotional Support Gap" className="w-full rounded-xl" />
                </motion.div>
                <motion.div {...highlightBox}>
                  <img src={informationOverloadComplete} alt="Information Overload" className="w-full rounded-xl" />
                </motion.div>
              </div>

              <SectionHeader eyebrow="COMMUNITY RESEARCH" title={<>Online Communities Reveal <span style={{ color: PINK }}>Moms' Real Needs</span></>} />
              <p className="text-xs sm:text-sm md:text-base text-black/55 leading-relaxed mb-6">
                Analyzing online parenting communities such as <strong className="text-black/80">What to Expect, Reddit, and BabyCenter</strong> uncovered critical gaps in emotional support and peer connection.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <motion.img src={onlineCommunities1} alt="Online community research" className="w-full rounded-xl" {...imageReveal} />
                <motion.img src={onlineCommunities2} alt="Online community insights" className="w-full rounded-xl" {...imageReveal} />
              </div>

              <SectionHeader eyebrow="COMPETITIVE ANALYSIS" title={<>Understanding <span style={{ color: PINK }}>What's Missing</span> in Existing Solutions</>} />
              <p className="text-xs sm:text-sm md:text-base text-black/55 leading-relaxed mb-6">
                We analyzed existing platforms like <strong className="text-black/80">What to Expect, Peanut, and BabyCenter</strong> to identify opportunities for differentiation and improvement.
              </p>
              <motion.img src={competitiveAnalysis} alt="Competitive analysis chart" className="w-full rounded-xl" {...imageReveal} />
            </WhiteCard>
          </div>
        </section>

        {/* ═══════ PRINCIPLES ═══════ */}
        <section id="principles" className="px-4 py-10 sm:px-8 sm:py-14 md:px-10">
          <div className="mx-auto max-w-[900px]">
            <WhiteCard>
              <SectionHeader eyebrow="DESIGN PRINCIPLES" title={<>Guiding our design with <span style={{ color: PINK }}>empathy-centered values</span></>} />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Principle 1', emoji: '🤝', title: 'Empathy First', desc: 'Every design decision centers on the real emotional needs of moms.' },
                  { label: 'Principle 2', emoji: '🔒', title: 'Trust & Safety', desc: 'Building a safe space where moms feel comfortable sharing and seeking help.' },
                  { label: 'Principle 3', emoji: '✨', title: 'Simplicity', desc: 'Reducing complexity so moms can find what they need without feeling overwhelmed.' },
                ].map((principle, index) => (
                  <motion.div key={index} className="rounded-xl p-4" style={{ background: "rgba(219,39,119,0.06)", border: "1px solid rgba(219,39,119,0.12)" }} {...fadeInUp}>
                    <p className="text-[10px] font-semibold opacity-80 mb-2 uppercase tracking-wider">{principle.label}</p>
                    <div className="text-2xl mb-2">{principle.emoji}</div>
                    <h3 className="font-semibold text-sm mb-1">{principle.title}</h3>
                    <p className="text-xs opacity-90">{principle.desc}</p>
                  </motion.div>
                ))}
              </div>
            </WhiteCard>
          </div>
        </section>

        {/* Introducing Nurturly (dark) */}
        <section className="px-4 py-14 sm:px-8 sm:py-20 md:px-10" style={{ background: "#1a1a1a" }}>
          <div className="mx-auto max-w-[900px] text-white">
            <div className="mb-8">
              <p className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-white/40">INTRODUCING NURTURLY</p>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl leading-[1.15] text-white/90">
                Through <span style={{ color: PINK }}>AI-powered features</span> and <span style={{ color: PINK }}>empathy-driven design,</span> Nurturly ensures moms feel <span style={{ color: PINK }}>supported, informed, and connected.</span>
              </h2>
            </div>
            <motion.img src={introducingNurturly} alt="Introducing Nurturly features" className="w-full" {...fadeInUp} />
          </div>
        </section>

        {/* ═══════ IDEATION ═══════ */}
        <section id="ideation" className="px-4 py-10 sm:px-8 sm:py-14 md:px-10">
          <div className="mx-auto max-w-[900px]">
            <WhiteCard>
              <SectionHeader eyebrow="IDEATION" title={<>Visualized solutions through <span style={{ color: PINK }}>low-fidelity designs</span> to explore effective layouts and gather feedback.</>} />
              <motion.img src={lowFiWireframes} alt="Low-fidelity wireframes" className="w-full max-w-[800px] mx-auto" {...fadeInUp} />
            </WhiteCard>
          </div>
        </section>

        {/* Mid-fi */}
        <section className="px-4 py-10 sm:px-8 sm:py-14 md:px-10">
          <div className="mx-auto max-w-[900px]">
            <WhiteCard>
              <SectionHeader eyebrow="MID-FI WIREFRAME" title={<>Building on early concepts, I created <span style={{ color: PINK }}>mid-fidelity</span> prototypes to validate <span style={{ color: PINK }}>navigation logic and content prioritization.</span></>} />
              <motion.img src={highFidelityMockups} alt="Mid-fidelity mockups" className="w-full max-w-[900px] mx-auto" {...fadeInUp} />
            </WhiteCard>
          </div>
        </section>

        {/* ═══════ ITERATIONS ═══════ */}
        <section id="iterations" className="px-4 py-10 sm:px-8 sm:py-14 md:px-10">
          <div className="mx-auto max-w-[1100px]">
            <WhiteCard>
              <SectionHeader eyebrow="DESIGN ITERATIONS" title={<>Through user testing and feedback, I iterated on <span style={{ color: PINK }}>key interaction points</span> to improve usability.</>} />

              {/* Iteration 1 */}
              <motion.div className="mb-14" {...fadeInUp}>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-black/35 mb-1">DESIGN ITERATION #1</p>
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl mb-5 text-black/85">Clarifying the <span style={{ color: PINK }}>AI Chat Entry Point</span></h3>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="flex-1 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2"><span className="text-red-500 text-lg font-bold">✗</span><span className="font-semibold text-sm text-black/70">First Design</span></div>
                    <img src={aiChatFirstDesign} alt="First design" className="max-w-[220px] mx-auto mb-2" />
                    <div className="bg-[#f7f8fa] p-2.5 rounded-lg max-w-[220px] mx-auto"><p className="text-xs italic text-black/50">"It looks empty... What should I ask?"</p></div>
                  </div>
                  <div className="flex items-center justify-center py-2 sm:py-0"><span className="text-xl sm:rotate-0 rotate-90" style={{ color: PINK }}>→</span></div>
                  <div className="flex-1 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2"><span className="text-green-600 text-lg font-bold">✓</span><span className="font-semibold text-sm text-black/70">Final Design</span></div>
                    <img src={aiChatFinalDesign} alt="Final design" className="max-w-[220px] mx-auto mb-2" />
                    <div className="bg-[#f7f8fa] p-2.5 rounded-lg max-w-[220px] mx-auto"><p className="text-xs italic text-black/50">"Now I know how to start the conversation."</p></div>
                  </div>
                </div>
                <div className="p-3 rounded-xl mt-4" style={{ background: "rgba(219,39,119,0.06)", border: "1px solid rgba(219,39,119,0.15)" }}>
                  <p className="text-xs sm:text-sm text-black/75">⚡ By adding <span style={{ color: PINK }} className="font-semibold">real-world example prompts</span> and adjusting <span style={{ color: PINK }} className="font-semibold">visual hierarchy,</span> we helped users feel more confident starting the conversation.</p>
                </div>
              </motion.div>

              {/* Iteration 2 */}
              <motion.div className="mb-14" {...fadeInUp}>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-black/35 mb-1">DESIGN ITERATION #2</p>
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl mb-5 text-black/85">Building Trust in <span style={{ color: PINK }}>AI-Powered Answers</span></h3>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="flex-1 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2"><span className="text-red-500 text-lg font-bold">✗</span><span className="font-semibold text-sm text-black/70">First Design</span></div>
                    <img src={chatbotFirstDesign} alt="First design" className="max-w-[220px] mx-auto mb-2" />
                    <div className="bg-[#f7f8fa] p-2.5 rounded-lg max-w-[220px] mx-auto"><p className="text-xs italic text-black/50">"Why are there so many links? It's overwhelming."</p></div>
                  </div>
                  <div className="flex items-center justify-center py-2 sm:py-0"><span className="text-xl sm:rotate-0 rotate-90" style={{ color: PINK }}>→</span></div>
                  <div className="flex-1 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2"><span className="text-green-600 text-lg font-bold">✓</span><span className="font-semibold text-sm text-black/70">Final Design</span></div>
                    <img src={chatbotFinalDesign} alt="Final design" className="max-w-[220px] mx-auto mb-2" />
                    <div className="bg-[#f7f8fa] p-2.5 rounded-lg max-w-[220px] mx-auto"><p className="text-xs italic text-black/50">"This feels much more reliable now."</p></div>
                  </div>
                </div>
                <div className="p-3 rounded-xl mt-4" style={{ background: "rgba(219,39,119,0.06)", border: "1px solid rgba(219,39,119,0.15)" }}>
                  <p className="text-xs sm:text-sm text-black/75">⚡ By <span style={{ color: PINK }} className="font-semibold">decluttering the response</span> and surfacing a <span style={{ color: PINK }} className="font-semibold">trusted source,</span> we helped moms feel more confident in the AI's answers.</p>
                </div>
              </motion.div>

              {/* Iteration 3 */}
              <motion.div {...fadeInUp}>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-black/35 mb-1">DESIGN ITERATION #3</p>
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl mb-5 text-black/85">Creating Meaningful Connections Between <span style={{ color: PINK }}>Moms</span></h3>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="flex-1 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2"><span className="text-red-500 text-lg font-bold">✗</span><span className="font-semibold text-sm text-black/70">First Design</span></div>
                    <img src={communityFirstDesign} alt="First design" className="max-w-[220px] mx-auto mb-2" />
                    <div className="bg-[#f7f8fa] p-2.5 rounded-lg max-w-[220px] mx-auto"><p className="text-xs italic text-black/50">"I don't love swiping through too many people."</p></div>
                  </div>
                  <div className="flex items-center justify-center py-2 sm:py-0"><span className="text-xl sm:rotate-0 rotate-90" style={{ color: PINK }}>→</span></div>
                  <div className="flex-1 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2"><span className="text-green-600 text-lg font-bold">✓</span><span className="font-semibold text-sm text-black/70">Final Design</span></div>
                    <img src={communityFinalDesign} alt="Final design" className="max-w-[220px] mx-auto mb-2" />
                    <div className="bg-[#f7f8fa] p-2.5 rounded-lg max-w-[220px] mx-auto"><p className="text-xs italic text-black/50">"It's easier to find someone I relate to when they're grouped."</p></div>
                  </div>
                </div>
                <div className="p-3 rounded-xl mt-4" style={{ background: "rgba(219,39,119,0.06)", border: "1px solid rgba(219,39,119,0.15)" }}>
                  <p className="text-xs sm:text-sm text-black/75">⚡ By <span style={{ color: PINK }} className="font-semibold">surfacing shared traits</span> and <span style={{ color: PINK }} className="font-semibold">grouping similar users,</span> we made connections feel easier, faster, and more genuine.</p>
                </div>
              </motion.div>
            </WhiteCard>
          </div>
        </section>

        {/* ═══════ HIGH-FI ═══════ */}
        <section id="highfi" className="px-4 py-10 sm:px-8 sm:py-14 md:px-10">
          <div className="mx-auto max-w-[1100px]">
            <WhiteCard>
              <p className="mb-6 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-black/30">HIGH-FI DESIGN</p>
              <div className="space-y-14">
                {[
                  { title: "AI chatbot that provides trustworthy resources", img: aiChatbotFeature },
                  { title: "Connecting Moms Through Shared Experiences", img: communityConnectionFeature },
                  { title: "Helping moms track recovery and find trusted local resources", img: trackingResourcesFeature },
                  { title: "Safe, Moderated Community Spaces", img: communityModerationFeature },
                ].map((item, i) => (
                  <motion.div key={i} {...fadeInUp}>
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl mb-4 text-black/85">{item.title}</h3>
                    <img src={item.img} alt={item.title} className="w-full max-w-5xl mx-auto" />
                  </motion.div>
                ))}
              </div>
            </WhiteCard>
          </div>
        </section>

        {/* ═══════ RESULT ═══════ */}
        <section id="result" className="px-4 py-10 sm:px-8 sm:py-14 md:px-10">
          <div className="mx-auto max-w-[900px]">
            <WhiteCard>
              <SectionHeader eyebrow="RESULT" title={<>Our team won <span style={{ color: PINK }}>Runner-Up & People's Choice Awards</span>, securing <span style={{ color: PINK }}>$5,000</span> in funding to advance Nurturly.</>} />
              <p className="text-xs sm:text-sm md:text-base text-black/55 leading-relaxed mb-3">
                Creating Nurturly was a meaningful journey of growth, teamwork, and dedication to creating real impact.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-black/55 leading-relaxed mb-3">
                Seeing moms resonate with Nurturly's mission was one of the most rewarding moments of this project. We won <strong className="text-black/80">Runner-Up & People's Choice</strong> award at <strong className="text-black/80">TECH+INNOVATION JAM</strong>, <strong className="text-black/80">securing $5,000</strong> in funding to continue building Nurturly.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-black/55 leading-relaxed mb-6">
                This experience deepened my belief in <strong className="text-black/80">empathy-driven UX</strong> and <strong className="text-black/80">research-backed design</strong>, and we're now continuing to develop our MVP.
              </p>
              <motion.img src={teamAwards} alt="Team holding award checks" className="w-full rounded-xl" {...fadeInUp} />
            </WhiteCard>
          </div>
        </section>

        {/* ═══════ REFLECTION (dark) ═══════ */}
        <section id="reflection" className="px-4 py-14 sm:px-8 sm:py-20 md:px-10" style={{ background: "#111" }}>
          <div className="mx-auto max-w-[900px] text-white">
            <p className="mb-6 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-white/40">REFLECTION</p>

            <div className="mb-12">
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl mb-5 text-white/90">What I Could've Done Better</h3>
              <div className="space-y-3">
                {[
                  { emoji: '👩‍⚕️', title: 'Consult to more health professionals', desc: 'To ensure solutions are balanced between clinical guidance and lived experiences.' },
                  { emoji: '👨‍👩‍👧', title: 'Include partners and families', desc: "Broaden support by designing tools for the mom's ecosystem" },
                  { emoji: '✅', title: 'Test more with moms during design iteration', desc: 'Ensure the experience feels truly supportive, not just usable.' },
                ].map((item, index) => (
                  <motion.div key={index} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }} {...fadeInUp}>
                    <div className="flex items-start gap-3">
                      <span className="text-lg">{item.emoji}</span>
                      <div>
                        <h4 className="font-semibold text-sm mb-1 text-white/90">{item.title}</h4>
                        <p className="text-xs text-white/50">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl mb-5 text-white/90">What I Learned</h3>
              <div className="space-y-3">
                {[
                  { emoji: '💡', title: 'Empathy-led design starts with listening', desc: "I listened deeply to users' experiences to shape every design decision, ensuring the work was rooted in genuine needs, not assumptions." },
                  { emoji: '🔍', title: 'Translate complexity into clarity', desc: 'I broke down broad challenges into clear opportunities, connecting research findings to actionable design goals that addressed real user pain.' },
                  { emoji: '🤝', title: 'Cross-functional collaboration unlocks potential', desc: 'Working with product, business, and engineering helped me think beyond pixels, aligning design with sustainability and long-term impact.' },
                ].map((item, index) => (
                  <motion.div key={index} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }} {...fadeInUp}>
                    <div className="flex items-start gap-3">
                      <span className="text-lg">{item.emoji}</span>
                      <div>
                        <h4 className="font-semibold text-sm mb-1 text-white/90">{item.title}</h4>
                        <p className="text-xs text-white/50">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Nurturly;
