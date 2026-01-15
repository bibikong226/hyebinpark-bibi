import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// Import all Nurturly assets
import nurturlyLogo from "@/assets/nurturly/nurturly-logo.png";
import heroMockup from "@/assets/nurturly/hero-mockup.png";
import umLogo from "@/assets/nurturly/um-logo.png";
import techJamLogo from "@/assets/nurturly/tech-jam-logo.png";
import communityFeature from "@/assets/nurturly/community-feature.gif";
import surveyChart from "@/assets/nurturly/survey-chart.png";
import surveyStats from "@/assets/nurturly/survey-stats.png";
import emotionalSupportGap from "@/assets/nurturly/emotional-support-gap.png";
import informationOverload from "@/assets/nurturly/information-overload.png";
import onlineCommunities1 from "@/assets/nurturly/online-communities-1.png";
import onlineCommunities2 from "@/assets/nurturly/online-communities-2.png";
import competitiveAnalysis from "@/assets/nurturly/competitive-analysis.png";
import introducingNurturly from "@/assets/nurturly/introducing-nurturly.png";
import lowFiWireframes from "@/assets/nurturly/low-fi-wireframes.png";
import highFiMockups from "@/assets/nurturly/high-fi-mockups.png";
import aiChatFirst from "@/assets/nurturly/ai-chat-first.png";
import aiChatFinal from "@/assets/nurturly/ai-chat-final.png";
import chatbotFirst from "@/assets/nurturly/chatbot-first.png";
import chatbotFinal from "@/assets/nurturly/chatbot-final.png";
import communityFirst from "@/assets/nurturly/community-first.png";
import communityFinal from "@/assets/nurturly/community-final.png";
import aiChatbotFeature from "@/assets/nurturly/ai-chatbot-feature.png";
import communityConnectionFeature from "@/assets/nurturly/community-connection-feature.png";
import trackingResourcesFeature from "@/assets/nurturly/tracking-resources-feature.png";
import communityModerationFeature from "@/assets/nurturly/community-moderation-feature.png";
import teamAwards from "@/assets/nurturly/team-awards.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Nurturly = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Back Button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all text-sm font-medium text-zinc-700 hover:text-zinc-900"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-16 lg:px-24">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={nurturlyLogo}
            alt="Nurturly Logo"
            className="h-20 md:h-28 mx-auto mb-8"
          />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-pink-500 leading-relaxed mb-12">
            Designing an AI-driven platform that connects new moms<br />
            to personalized resources and peer support
          </h1>
        </motion.div>

        {/* Hero Mockup */}
        <motion.div
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-pink-400"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={heroMockup}
            alt="Nurturly App Mockup"
            className="w-full"
          />
        </motion.div>
      </section>

      {/* Project Info Cards */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Skills</h4>
            <ul className="space-y-1 text-sm text-zinc-700">
              <li>User Research</li>
              <li>UX/UI Design</li>
              <li>Interactive Prototyping</li>
              <li>Usability Testing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3">My Role</h4>
            <p className="text-sm text-zinc-700">UX Design Lead</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Timeline</h4>
            <p className="text-sm text-zinc-700">2 Months</p>
            <p className="text-sm text-zinc-500">Oct. 2024 - Nov. 2024</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Team</h4>
            <ul className="space-y-1 text-sm text-zinc-700">
              <li>2 UX designers</li>
              <li>Product manager</li>
              <li>Business analyst</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">SUMMARY</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
            Nurturly was created during the Tech Innovation Jam, a competitive 5-week hackathon at the University of Michigan.
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-8">
            Designed to address the emotional isolation and overwhelming information moms face during pregnancy and postpartum, Nurturly connects them to a safe, supportive community and tailored resources through AI-driven personalization.
          </p>
          
          <div className="flex items-center gap-6 mb-12">
            <img src={umLogo} alt="University of Michigan" className="h-12 object-contain" />
            <img src={techJamLogo} alt="Tech Innovation Jam" className="h-12 object-contain" />
          </div>

          <div className="bg-pink-50 rounded-2xl p-6 md:p-8">
            <p className="text-zinc-700 leading-relaxed mb-4">
              🌟 As the <strong>main UX designer</strong>, I drove the product from discovery to delivery, <strong>translating research into strategic design solutions.</strong> I focused on designing the <strong>AI-powered matching feature and contextual chatbot,</strong> grounded in insights from interviews, surveys, and competitive analysis. I also contributed to the high-fidelity prototype and supported iterative design improvements.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              🚀 Our team won <strong>Runner-Up & People's Choice Awards</strong>, securing <strong>$5,000 in funding</strong> to advance Nurturly as a scalable postpartum support platform.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">PROBLEM</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed">
            Pregnancy & Postpartum Support is Scattered, Confusing, and Leaves Moms Feeling Alone.
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed mt-6">
            From pregnancy to postpartum, moms experience profound changes, but <strong>support remains fragmented and baby-focused.</strong> With <strong>unreliable, conflicting resources</strong> and no clear guidance, moms are <strong>left to figure it out alone.</strong>
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">SOLUTION</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-12">
            Reliable answers. Real connections. A smarter way to navigate motherhood.
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-16">
            Nurturly bridges the gap in postpartum care by combining AI-driven insights with human connection. Through personalized support and empathy-centered UX, it delivers a structured, reliable, and reassuring experience for every mom.
          </p>

          {/* Solution Features */}
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-pink-500 font-bold text-lg">01</span>
                <h3 className="text-xl font-medium mt-2 mb-4">AI-powered Chatbot & Contextual Recommendations</h3>
                <p className="text-zinc-600">
                  Provides verified, reliable answers, while surfacing related posts and peer insights to foster meaningful connection through shared concerns.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-pink-500 font-bold text-lg">02</span>
                <h3 className="text-xl font-medium mt-2 mb-4">Moderated Community & Meaningful Connections</h3>
                <p className="text-zinc-600">
                  Creates a safe space for moms to share and support each other, with AI-suggested connections based on shared stages, interests, and nearby location.
                </p>
              </div>
              <img src={communityFeature} alt="Community Feature" className="rounded-2xl shadow-lg" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-pink-500 font-bold text-lg">03</span>
                <h3 className="text-xl font-medium mt-2 mb-4">Curated Local Resources & Support Map</h3>
                <p className="text-zinc-600">
                  Connects moms to nearby services, events, and care providers, offering location-based resources tailored to their stage and needs.
                </p>
              </div>
            </div>

            <div>
              <span className="text-pink-500 font-bold text-lg">04</span>
              <h3 className="text-xl font-medium mt-2 mb-4">Personalized Symptom & Mood Tracking</h3>
              <p className="text-zinc-600">
                Helps moms track their physical and emotional symptoms, with comparative data from others at the same stage, offering clarity and reassurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Survey Insights */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">SURVEY INSIGHTS</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
            Survey as a Compass: Finding Where to Focus
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-8">
            I initially assumed that moms might need support throughout the entire motherhood journey. But after conducting 22 surveys with women during pregnancy and postpartum, I was able to narrow the focus.
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed mb-12">
            The responses revealed that support gaps are most critical during pregnancy and postpartum, and that moms need tools designed for their own recovery.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img src={surveyChart} alt="Survey Chart" className="rounded-xl shadow-md" />
            <img src={surveyStats} alt="Survey Stats" className="rounded-xl shadow-md" />
          </div>

          <div className="bg-yellow-50 rounded-xl p-6">
            <p className="text-zinc-700">
              💡 These findings helped me narrow the focus to <strong>mom-centered recovery support</strong> during pregnancy and postpartum, not just general parenting help.
            </p>
          </div>
        </div>
      </section>

      {/* Interview Insights */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">INTERVIEW INSIGHTS</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
            Zooming In: What Moms Are Actually Experiencing
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-8">
            Interviewed 5 moms to understand the emotional, physical, and mental challenges they face during pregnancy and postpartum.
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed mb-12">
            Their stories revealed a deep need for reliable answers, emotional support, and personalized guidance beyond medical facts. While existing resources provide information, moms crave human connection and reassurance to feel truly understood.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <img src={emotionalSupportGap} alt="Emotional Support Gap" className="rounded-xl shadow-md" />
            <img src={informationOverload} alt="Information Overload" className="rounded-xl shadow-md" />
          </div>
        </div>
      </section>

      {/* Digital Ethnography */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">DIGITAL ETHNOGRAPHY</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
            These Gaps Often Push Moms Toward Online Communities In Search Of Connection
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-8">
            Analyzed conversations on <strong>Reddit, Instagram, TikTok, and Facebook</strong> to see how they seek guidance and connection during pregnancy and postpartum.
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed mb-12">
            Moms turn to online communities for support and reassurance, but they encounter misinformation, unanswered questions, and mom-shaming. These issues often leave them feeling even more isolated, frustrated, and unheard.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <img src={onlineCommunities1} alt="Why moms go to online communities" className="rounded-xl shadow-md" />
            <img src={onlineCommunities2} alt="Online community challenges" className="rounded-xl shadow-md" />
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">COMPETITIVE ANALYSIS</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
            Current Solutions Fall Short of What Moms Actually Need
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-8">
            Analyzed existing solutions to see <strong>how they support moms throughout pregnancy and postpartum.</strong> Nearly all existing features are effective and whole they show limitations.
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed mb-12">
            This helped uncover key gaps in support, highlighting <strong>missed opportunities to create a more comprehensive and connected experience</strong> for moms.
          </p>
          
          <img src={competitiveAnalysis} alt="Competitive Analysis" className="w-full rounded-xl shadow-md" />
        </div>
      </section>

      {/* Design Strategy */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">DESIGN STRATEGY</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
            So How Can Our Design Truly Support Moms?
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-12">
            Based on what I heard and observed, I realized that moms weren't just asking for information. They were asking to be <strong>seen, supported, and protected.</strong>
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed mb-16">
            I translated those pain points <strong>into design goals</strong> that shaped the heart of Nurturly. The result: a solution grounded in <strong>empathy, trust, and real human connection.</strong>
          </p>

          {/* Pain Points & Design Principles Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Pain Points */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">PAIN POINT 1</p>
                <p className="text-2xl mb-2">💔</p>
                <h3 className="font-medium mb-2">Emotional Needs Unmet</h3>
                <p className="text-zinc-600 text-sm">Focus always on baby, not mom's recovery</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">PAIN POINT 2</p>
                <p className="text-2xl mb-2">⚠️</p>
                <h3 className="font-medium mb-2">Information Overload</h3>
                <p className="text-zinc-600 text-sm">Flooded with advice, lacking clarity</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">PAIN POINT 3</p>
                <p className="text-2xl mb-2">🌊</p>
                <h3 className="font-medium mb-2">Missing Connection</h3>
                <p className="text-zinc-600 text-sm">Need empathetic 1:1 support</p>
              </div>
            </div>

            {/* Design Principles */}
            <div className="space-y-6">
              <div className="bg-pink-50 rounded-xl p-6">
                <p className="text-xs uppercase tracking-widest text-pink-400 mb-2">DESIGN PRINCIPLE 1</p>
                <p className="text-2xl mb-2">👀</p>
                <h3 className="font-medium mb-2">See the Mom</h3>
                <p className="text-zinc-600 text-sm">Support beyond the baby with validation and structured recovery tools.</p>
              </div>
              <div className="bg-pink-50 rounded-xl p-6">
                <p className="text-xs uppercase tracking-widest text-pink-400 mb-2">DESIGN PRINCIPLE 2</p>
                <p className="text-2xl mb-2">🎯</p>
                <h3 className="font-medium mb-2">Deliver Clarity</h3>
                <p className="text-zinc-600 text-sm">Cut through information overload with personalized, reliable guidance.</p>
              </div>
              <div className="bg-pink-50 rounded-xl p-6">
                <p className="text-xs uppercase tracking-widest text-pink-400 mb-2">DESIGN PRINCIPLE 3</p>
                <p className="text-2xl mb-2">🤝</p>
                <h3 className="font-medium mb-2">Foster Safety</h3>
                <p className="text-zinc-600 text-sm">Create a judgment-free space where moms feel heard and safe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introducing Nurturly */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">INTRODUCING NURTURLY</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-12">
            Through AI-powered features and empathy-driven design, Nurturly ensures moms feel supported, informed, and connected.
          </h2>
          <img src={introducingNurturly} alt="Introducing Nurturly" className="w-full rounded-xl shadow-md" />
        </div>
      </section>

      {/* Ideation */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">IDEATION</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-12">
            Visualized solutions through low-fidelity designs to explore effective layouts and gather feedback for improvement.
          </h2>
          <img src={lowFiWireframes} alt="Low-fidelity wireframes" className="w-full rounded-xl shadow-md mb-16" />

          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">MID-FI WIREFRAME</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-12">
            Building on early concepts, I created mid-fidelity prototypes. This helped validate navigation logic, content prioritization, and the overall experience structure before moving into high-fidelity design.
          </h2>
          <img src={highFiMockups} alt="High-fidelity mockups" className="w-full rounded-xl shadow-md" />
        </div>
      </section>

      {/* Design Iterations */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">DESIGN ITERATIONS</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-16">
            Through user testing and feedback, I iterated on key interaction points to improve usability and user confidence.
          </h2>

          {/* Iteration 1 */}
          <div className="mb-20">
            <p className="text-xs uppercase tracking-widest text-pink-400 mb-4">DESIGN ITERATION #1</p>
            <h3 className="text-xl md:text-2xl font-medium mb-8">Clarifying the AI Chat Entry Point</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-red-500 font-medium mb-4">✗ First Design</p>
                <img src={aiChatFirst} alt="AI Chat First Design" className="rounded-xl shadow-md mb-4" />
                <p className="text-zinc-600">😟 Users felt lost with no direction</p>
                <p className="text-zinc-500 italic text-sm">"It looks empty... What should I ask?"</p>
              </div>
              <div>
                <p className="text-green-500 font-medium mb-4">✓ Final Design</p>
                <img src={aiChatFinal} alt="AI Chat Final Design" className="rounded-xl shadow-md mb-4" />
                <p className="text-zinc-600">😊 Contextual prompts made asking easier</p>
                <p className="text-zinc-500 italic text-sm">"Now I know how to start the conversation."</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 mt-6">
              <p className="text-zinc-700">⚡ By adding real-world example prompts and adjusting visual hierarchy, we helped users feel more confident starting the conversation.</p>
            </div>
          </div>

          {/* Iteration 2 */}
          <div className="mb-20">
            <p className="text-xs uppercase tracking-widest text-pink-400 mb-4">DESIGN ITERATION #2</p>
            <h3 className="text-xl md:text-2xl font-medium mb-8">Building Trust in AI-Powered Answers</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-red-500 font-medium mb-4">✗ First Design</p>
                <img src={chatbotFirst} alt="Chatbot First Design" className="rounded-xl shadow-md mb-4" />
                <p className="text-zinc-600">😟 Too many links made responses feel cluttered and overwhelming</p>
                <p className="text-zinc-500 italic text-sm">"Why are there so many links? It's kind of overwhelming."</p>
              </div>
              <div>
                <p className="text-green-500 font-medium mb-4">✓ Final Design</p>
                <img src={chatbotFinal} alt="Chatbot Final Design" className="rounded-xl shadow-md mb-4" />
                <p className="text-zinc-600">😊 Simplified the response by removing extra links and clearly citing a trusted source</p>
                <p className="text-zinc-500 italic text-sm">"This feels much more reliable now that I can clearly see where the info came from."</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 mt-6">
              <p className="text-zinc-700">⚡ By decluttering the response and surfacing a trusted source, we helped moms feel more confident in the AI's answers.</p>
            </div>
          </div>

          {/* Iteration 3 */}
          <div>
            <p className="text-xs uppercase tracking-widest text-pink-400 mb-4">DESIGN ITERATION #3</p>
            <h3 className="text-xl md:text-2xl font-medium mb-8">Creating Meaningful Connections Between Moms</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-red-500 font-medium mb-4">✗ First Design</p>
                <img src={communityFirst} alt="Community First Design" className="rounded-xl shadow-md mb-4" />
                <p className="text-zinc-600">😟 Suggested profiles appeared one at a time without context</p>
                <p className="text-zinc-500 italic text-sm">"I don't love to swipe through too many people just to find someone I relate to."</p>
              </div>
              <div>
                <p className="text-green-500 font-medium mb-4">✓ Final Design</p>
                <img src={communityFinal} alt="Community Final Design" className="rounded-xl shadow-md mb-4" />
                <p className="text-zinc-600">😊 Grouped similar moms and highlighted shared traits</p>
                <p className="text-zinc-500 italic text-sm">"It's easier to find someone I relate to when they're grouped."</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 mt-6">
              <p className="text-zinc-700">⚡ By surfacing shared traits and grouping similar users, we made connections feel easier, faster, and more genuine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Fi Design */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-12">HIGH-FI DESIGN</h2>
          
          <div className="space-y-16">
            <div>
              <h3 className="text-xl font-medium mb-6">AI chatbot that provides trustworthy resources</h3>
              <img src={aiChatbotFeature} alt="AI Chatbot Feature" className="w-full rounded-xl shadow-md" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6">Connecting Moms Through Shared Experiences</h3>
              <img src={communityConnectionFeature} alt="Community Connection Feature" className="w-full rounded-xl shadow-md" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6">Helping moms track recovery and find trusted local resources</h3>
              <img src={trackingResourcesFeature} alt="Tracking Resources Feature" className="w-full rounded-xl shadow-md" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6">Moderated Community for Safe Support</h3>
              <img src={communityModerationFeature} alt="Community Moderation Feature" className="w-full rounded-xl shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-8">RESULT</h2>
          <h3 className="text-xl md:text-2xl font-medium mb-8">
            Our team won Runner-Up & People's Choice Awards, securing $5,000 in funding to advance Nurturly.
          </h3>
          <p className="text-lg text-zinc-600 leading-relaxed mb-8">
            Creating Nurturly was a meaningful journey of growth, teamwork, and dedication to creating real impact.
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed mb-12">
            Seeing moms resonate with Nurturly's mission was one of the most rewarding moments of this project. We won Runner-Up & People's Choice award at TECH+INNOVATION JAM, securing $5,000 in funding to continue building Nurturly.
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed mb-12">
            This experience deepened my belief in empathy-driven UX and research-backed design, and we're now continuing to develop our MVP to launch a solution that truly supports moms.
          </p>
          <img src={teamAwards} alt="Team Awards" className="w-full rounded-xl shadow-md" />
        </div>
      </section>

      {/* Reflection */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-12">REFLECTION</h2>
          
          <div className="mb-16">
            <h3 className="text-xl font-medium mb-8">What I Could've Done Better</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-2xl mb-4">👩‍⚕️</p>
                <h4 className="font-medium mb-2">Consult more health professionals</h4>
                <p className="text-zinc-600 text-sm">To ensure solutions are balanced between clinical guidance and lived experiences.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-2xl mb-4">👨‍👩‍👧</p>
                <h4 className="font-medium mb-2">Include partners and families</h4>
                <p className="text-zinc-600 text-sm">Broaden support by designing tools for the mom's ecosystem</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-2xl mb-4">✅</p>
                <h4 className="font-medium mb-2">Test more with moms during design iteration</h4>
                <p className="text-zinc-600 text-sm">Ensure the experience feels truly supportive, not just usable.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-8">What I Learned</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-pink-50 rounded-xl p-6">
                <p className="text-2xl mb-4">💡</p>
                <h4 className="font-medium mb-2">Empathy-led design starts with listening</h4>
                <p className="text-zinc-600 text-sm">I listened deeply to users' experiences to shape every design decision, ensuring the work was rooted in genuine needs, not assumptions.</p>
              </div>
              <div className="bg-pink-50 rounded-xl p-6">
                <p className="text-2xl mb-4">🔍</p>
                <h4 className="font-medium mb-2">Translate complexity into clarity</h4>
                <p className="text-zinc-600 text-sm">I broke down broad challenges into clear opportunities, connecting research findings directly to design solutions that matter.</p>
              </div>
              <div className="bg-pink-50 rounded-xl p-6">
                <p className="text-2xl mb-4">✅</p>
                <h4 className="font-medium mb-2">Design with impact in mind</h4>
                <p className="text-zinc-600 text-sm">Every decision was guided by the potential to create meaningful, positive change for moms navigating motherhood.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-16 lg:px-24 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </footer>
    </div>
  );
};

export default Nurturly;
