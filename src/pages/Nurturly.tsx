import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';
import nurturlyLogo from '../assets/nurturly/nurturly-logo.png';
import mainHeaderImage from '../assets/nurturly/main_header.png';
import communityFeatureGif from '../assets/nurturly/community-feature.gif';
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
import wireframes from '../assets/nurturly/wireframes.png';
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
import communityModerationFeature from '../assets/nurturly/community-moderation-feature.png';
import teamAwards from '../assets/nurturly/team-awards.png';

const Nurturly = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el: Element, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element: Element) => {
      element.classList.add("is-visible");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation();

    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div style={{ transform: 'scale(0.8)', transformOrigin: 'top center', width: '125%', marginLeft: '-12.5%' }}>
        <style>{`
          :root {
            --nurturly-pink: #FF4B98;
            --baby-pink: #FF4B98;
            --dark-bg: #211d21;
            --text-dark: #111827;
            --text-light: #f9f9f9;
            --border-light: #e5e7eb;
          }

          body {
            font-family: 'Inter', sans-serif;
            background-color: #fff;
            color: var(--text-dark);
            margin: 0;
            padding: 0;
            line-height: 1.6;
            overflow-x: hidden;
          }

          .main-container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 40px;
          }

          section {
            padding: 100px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: left;
          }

          .full-width-section {
            width: 100vw;
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            padding-left: 0;
            padding-right: 0;
            box-sizing: border-box;
          }

          .full-width-section .section-content {
            width: 100%;
            max-width: 1100px;
            padding: 0 40px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .section-header {
            max-width: 1100px;
            margin: 0 auto 40px auto;
            text-align: left;
            width: 100%;
          }

          .section-title {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 16px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

           h2 {
             font-size: 2.2rem;
             font-weight: 500;
             margin-bottom: 24px;
             line-height: 1.3;
           }

          p {
            font-size: 1.1rem;
          }

          .pink-text {
            color: var(--nurturly-pink);
          }

          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes slideInFromTop {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Animations */
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }

          .animate-on-scroll.is-visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* Hero Intro */
          .hero-intro {
            padding-top: 80px;
            padding-bottom: 40px;
          }

          .hero-intro .nurturly-logo {
            max-width: 400px;
            margin-bottom: 24px;
            opacity: 0;
            animation: slideInFromTop 1s ease-out 0.3s forwards;
          }

          .hero-intro .subtitle {
            font-size: 1.5rem;
            color: var(--nurturly-pink);
            font-weight: 600;
            line-height: 1.4;
            text-align: center;
            opacity: 0;
            animation: slideInFromTop 1s ease-out 0.6s forwards;
          }

          /* Hero Image Section */
          .hero-image-container {
            background-color: var(--baby-pink);
            border-radius: 24px;
            padding: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .hero-image-container .hero-image {
            width: 100%;
            height: auto;
            object-fit: cover;
            animation: dramaticEntrance 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards;
            opacity: 0;
            transition: all 0.5s ease;
            cursor: pointer;
            filter: brightness(1) saturate(1) contrast(1);
          }

          .hero-image-container .hero-image:hover {
            transform: scale(1.05);
            filter: brightness(1.15) saturate(1.2) contrast(1.1) drop-shadow(0 30px 80px rgba(255, 75, 152, 0.9));
          }

          @keyframes dramaticEntrance {
            0% {
              opacity: 0;
              transform: translateY(80px) scale(0.9);
              filter: brightness(0.7) saturate(0.5) blur(8px) drop-shadow(0 0 0 rgba(255, 75, 152, 0));
            }
            40% {
              opacity: 0.8;
              transform: translateY(-15px) scale(1.02);
              filter: brightness(1.1) saturate(1.1) blur(2px) drop-shadow(0 25px 50px rgba(255, 75, 152, 0.7));
            }
            70% {
              opacity: 0.95;
              transform: translateY(5px) scale(0.98);
              filter: brightness(1.05) saturate(1.05) blur(0px) drop-shadow(0 20px 40px rgba(255, 75, 152, 0.5));
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: brightness(1) saturate(1) blur(0px) drop-shadow(0 25px 60px rgba(255, 75, 152, 0.6));
            }
          }

          @keyframes activeFloat {
            0%, 100% {
              transform: translateY(0) scale(1);
              filter: brightness(1) saturate(1) drop-shadow(0 25px 60px rgba(255, 75, 152, 0.6));
            }
            25% {
              transform: translateY(-12px) scale(1.01);
              filter: brightness(1.08) saturate(1.15) drop-shadow(0 35px 70px rgba(255, 75, 152, 0.8));
            }
            50% {
              transform: translateY(8px) scale(0.99);
              filter: brightness(0.95) saturate(0.9) drop-shadow(0 20px 50px rgba(255, 75, 152, 0.4));
            }
            75% {
              transform: translateY(-6px) scale(1.005);
              filter: brightness(1.05) saturate(1.1) drop-shadow(0 30px 65px rgba(255, 75, 152, 0.7));
            }
          }

          /* Project Details */
          .project-details-section {
            padding-top: 80px;
          }

          .project-details {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
            width: 100%;
            text-align: left;
            opacity: 0;
            animation: slideInFromTop 1s ease-out 1.2s forwards;
          }

          .detail-item h4 {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 16px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .detail-item p {
            font-size: 18px;
            line-height: 1.4;
          }

          /* Summary & Problem Sections */
          .summary-section .highlight-paragraph, .problem-section p {
            font-size: 1.2rem;
          }

          .logos {
            display: flex;
            gap: 60px;
            align-items: center;
            justify-content: center;
            margin: 40px 0;
            flex-wrap: wrap;
          }

          .logos img {
            max-height: 150px;
          }

          .achievements {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            margin-top: 40px;
          }

          .achievement-box {
            background-color: transparent;
            border: 1px solid var(--border-light);
            padding: 20px;
            border-radius: 12px;
            text-align: left;
            position: relative;
            overflow: hidden;
          }

          .achievement-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 75, 152, 0.1), transparent);
            transition: left 0.8s ease 0.3s;
          }

          .achievement-box.is-visible::before {
            left: 100%;
          }

          .achievement-box.is-visible {
            border-color: var(--nurturly-pink);
            background-color: rgba(255, 75, 152, 0.05);
            animation: highlightPulse 0.6s ease 0.5s;
          }

          @keyframes highlightPulse {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }

          .achievement-box p {
            font-size: 1rem;
            font-weight: 400;
            position: relative;
            z-index: 1;
          }

          .achievement-box strong {
            font-weight: 700;
            color: #000;
            transition: all 0.3s ease;
          }

          /* Survey Chart Styling */
          .survey-chart-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 40px;
            margin-top: 40px;
          }

          .survey-chart {
            max-width: 800px;
            width: 100%;
            height: auto;
            border-radius: 12px;
          }

          .survey-insights {
            width: 100%;
            max-width: 800px;
          }

          .insight-item {
            background-color: transparent;
            border: 1px solid var(--border-light);
            padding: 20px;
            border-radius: 12px;
            text-align: left;
            position: relative;
            overflow: hidden;
          }

          .insight-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 75, 152, 0.1), transparent);
            transition: left 0.8s ease 0.3s;
          }

          .insight-item.is-visible::before {
            left: 100%;
          }

          .insight-item.is-visible {
            border-color: var(--nurturly-pink);
            background-color: rgba(255, 75, 152, 0.05);
            animation: highlightPulse 0.6s ease 0.5s;
          }

          /* Interview Insights Styling */
          .interview-insights {
            width: 100%;
            margin-top: 40px;
            display: flex;
            flex-direction: column;
            gap: 60px;
          }

          .insight-category {
            width: 100%;
          }

          .insight-category-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #666;
            text-align: center;
            margin-bottom: 30px;
            position: relative;
          }

          .insight-category-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 3px;
            background-color: var(--nurturly-pink);
            border-radius: 2px;
          }

          .quote-container {
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
          }

          .quote-bubble {
            background-color: #f8f9fa;
            border-radius: 16px;
            padding: 24px;
            max-width: 700px;
            position: relative;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            border: 1px solid #e9ecef;
          }

          .quote-bubble p {
            font-style: italic;
            font-size: 1.1rem;
            line-height: 1.6;
            margin: 0;
          }

          .quote-bubble::before {
            content: '"';
            font-size: 3rem;
            color: var(--nurturly-pink);
            position: absolute;
            top: -10px;
            left: 20px;
            font-family: serif;
          }

          /* Responsive Design for New Sections */
          @media (max-width: 768px) {
            .survey-chart {
              max-width: 100%;
            }
            
            .quote-bubble {
              max-width: 100%;
              padding: 20px;
            }
            
            .insight-category-title {
              font-size: 1.3rem;
            }
          }

          /* Solution Section */
          .solution-section {
            background-color: var(--dark-bg);
            color: var(--text-light);
            padding: 120px 0;
            display: block;
          }

          .solution-content-wrapper {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 40px;
            box-sizing: border-box;
          }

          .solution-section .section-title,
          .summary-section .section-title,
          .problem-section .section-title {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 16px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .solution-section .section-title {
            color: rgba(255, 255, 255, 0.8);
          }

          .solution-section .section-header {
            text-align: left;
            margin: 0 0 80px 0;
            max-width: 100%;
          }

          .feature-row {
            display: flex;
            align-items: center;
            gap: 100px;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
          }

          .feature-row + .feature-row {
            margin-top: 120px;
          }

          .feature-row.reverse {
            flex-direction: row-reverse;
            gap: 80px;
          }

          .feature-row.reverse .feature-text {
            flex: 1.2;
            min-width: 0;
          }

          .feature-row.reverse .feature-image {
            flex: 0.8;
            min-width: 0;
            display: flex;
            justify-content: flex-start;
          }

          .feature-text {
            flex: 1.2;
            min-width: 0;
          }

          .feature-image {
            flex: 0.8;
            min-width: 0;
            display: flex;
            justify-content: flex-end;
          }

          .feature-text {
            text-align: left;
          }

          .feature-text .feature-number {
            font-size: 4rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.8);
            margin-left: 0;
          }

          .feature-text h3 {
            font-size: 1.8rem;
            margin: 16px 0;
          }

          .feature-text p {
            font-size: 1.1rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.9);
          }

           .feature-image img, .feature-image video {
             width: 100%;
             max-width: 300px;
             height: auto;
             object-fit: contain;
             border-radius: 40px;
           }

          /* Back Button */
          .back-button {
            position: fixed;
            top: 80px;
            left: 20px;
            z-index: 50;
            display: flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            padding: 8px 16px;
            border-radius: 8px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            color: #374151;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .back-button:hover {
            background: rgba(255, 255, 255, 1);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }

          /* Responsive Design */
          @media (max-width: 992px) {
            .feature-row, .feature-row.reverse {
              flex-direction: column;
              gap: 40px;
              text-align: center;
            }
            .feature-text {
              text-align: center;
            }
            .feature-image {
              flex-basis: auto;
              max-width: 450px;
              width: 100%;
            }
          }

          @media (max-width: 768px) {
            .main-container {
              padding: 0 20px;
            }
            h2 {
              font-size: 1.8rem;
            }
            .hero-intro .subtitle {
              font-size: 1.2rem;
            }
            .project-details {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .logos {
              flex-direction: column;
              gap: 30px;
            }
            .logos img {
              max-height: 100px;
            }
            .solution-section {
              padding: 40px 20px;
            }
          }
        `}</style>

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="back-button"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Hero Intro Section */}
        <main className="main-container">
          <section className="hero-intro">
            <img 
              src={nurturlyLogo} 
              alt="Nurturly Logo" 
              className="nurturly-logo"
            />
            <p className="subtitle">
              Designing an AI-driven platform that connects new moms<br/>
              to personalized resources and peer support
            </p>
          </section>
        </main>

        {/* Hero Image Section */}
        <section className="hero-image-container full-width-section">
          <div className="section-content">
            <img 
              src={newMockupImage} 
              alt="Nurturly App Mockup" 
              className="hero-image"
            />
          </div>
        </section>

        {/* Project Details Section */}
        <main className="main-container">
          <section className="project-details-section">
            <div className="project-details">
              <div className="detail-item">
                <h4>SKILLS</h4>
                <p className="text-left">User Research<br/>UX/UI Design<br/>Interactive Prototyping<br/>Usability Testing</p>
              </div>
              <div className="detail-item">
                <h4>MY ROLE</h4>
                <p className="text-left">UX Design Lead</p>
              </div>
              <div className="detail-item">
                <h4>TIMELINE</h4>
                <p className="text-left">2 Months<br/>Oct. 2024 - Nov. 2024</p>
              </div>
              <div className="detail-item">
                <h4>TEAM</h4>
                <p className="text-left">2 UX designers<br/>product manager<br/>business analyst</p>
              </div>
            </div>
          </section>

          {/* Summary Section */}
          <section className="summary-section animate-on-scroll">
            <div className="section-header">
              <p className="section-title">SUMMARY</p>
              <h2>Nurturly was created during the <span className="pink-text">Tech Innovation Jam</span>, a competitive 5-week <span className="pink-text">hackathon</span> at the University of Michigan.</h2>
              <p className="highlight-paragraph">
                Designed to address the <span className="font-bold">emotional isolation</span> and <span className="font-bold">overwhelming information</span> moms face during<span className="font-bold"> pregnancy and postpartum,</span> Nurturly connects them to a safe, supportive community and tailored resources through <span className="font-bold">AI-driven personalization.</span>
              </p>
            </div>
            <div className="logos">
              <img src={umLogoImage} alt="University of Michigan Logo" />
              <img src={techJamLogoImage} alt="Tech Innovation Jam Logo" />
            </div>
            <div className="achievements">
              <div className="achievement-box animate-on-scroll">
                <p>🌟As the <strong>main UX designer</strong>, I drove the product from discovery to delivery, <strong>translating research into strategic design solutions.</strong> I focused on designing the <strong>AI-powered matching feature and contextual chatbot,</strong> grounded in insights from interviews, surveys, and competitive analysis. I also contributed to the high-fidelity prototype and supported iterative design improvements.</p>
              </div>
              <div className="achievement-box animate-on-scroll">
                <p>🚀 Our team won <strong>Runner-Up & People's Choice Awards</strong>, securing <strong>$5,000 in funding</strong> to advance Nurturly as a scalable postpartum support platform.</p>
              </div>
            </div>
          </section>

          {/* Problem Section */}
          <section className="problem-section animate-on-scroll">
            <div className="section-header">
              <p className="section-title">PROBLEM</p>
              <h2>Pregnancy & Postpartum Support is <span className="pink-text">Scattered, Confusing,</span> and Leaves <span className="pink-text">Moms Feeling Alone.</span></h2>
              <p>From pregnancy to postpartum, moms experience profound changes, but <strong>support remains fragmented and baby-focused.</strong> With <strong>unreliable, conflicting resources</strong> and no clear guidance, moms are <strong>left to figure it out alone.</strong></p>
            </div>
          </section>
        </main>

        {/* Solution Section */}
        <section className="solution-section full-width-section">
          <div className="solution-content-wrapper">
            <div className="section-header animate-on-scroll">
              <p className="section-title">SOLUTION</p>
              <h2><span className="pink-text">Reliable</span> answers. <span className="pink-text">Real connections.</span><br/>A smarter way to navigate motherhood.</h2>
              <p>Nurturly bridges the gap in postpartum care by combining AI-driven insights with human connection. Through personalized support and empathy-centered UX, it delivers a structured, reliable, and reassuring experience for every mom.</p>
            </div>

            <div className="feature-row animate-on-scroll">
              <div className="feature-text">
                <span className="feature-number">01</span>
                <h3>AI-powered Chatbot & Contextual Recommendations</h3>
                <p>Provides verified, <span className="pink-text">reliable answers,</span> while surfacing <span className="pink-text">related posts</span> and peer insights to foster meaningful connection through <span className="pink-text">shared concerns.</span></p>
              </div>
              <div className="feature-image">
                <video 
                  src="/feature-01.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            <div className="feature-row reverse animate-on-scroll">
              <div className="feature-text">
                <span className="feature-number">02</span>
                <h3>Moderated Community & Meaningful Connections</h3>
                <p>Creates a <span className="pink-text">safe space for moms to share</span> and support each other, with <span className="pink-text">AI-suggested connections</span> based on shared stages, interests, and nearby location.</p>
              </div>
              <div className="feature-image">
                <img src={communityFeatureGif} alt="Community Feature Mockup" />
              </div>
            </div>

            <div className="feature-row animate-on-scroll">
              <div className="feature-text">
                <span className="feature-number">03</span>
                <h3>Curated Local Resources & Support Map</h3>
                <p>Connects moms to nearby services, events, and care providers, offering<span className="pink-text"> location-based resources tailored to their stage and needs.</span></p>
              </div>
              <div className="feature-image">
                <img src={trackingResourcesFeature} alt="Local Resources Map Mockup" />
              </div>
            </div>

            <div className="feature-row reverse animate-on-scroll">
              <div className="feature-text">
                <span className="feature-number">04</span>
                <h3>Personalized Symptom & Mood Tracking</h3>
                <p>Helps moms track their <span className="pink-text">physical and emotional symptoms,</span> with <span className="pink-text">comparative data</span> from others at the same stage, offering <span className="pink-text">clarity and reassurance.</span></p>
              </div>
              <div className="feature-image">
                <img src={communityModerationFeature} alt="Symptom Tracking Mockup" />
              </div>
            </div>
          </div>
        </section>

        {/* Research Sections */}
        <main className="main-container">
          {/* Survey Insights Section */}
          <section className="summary-section animate-on-scroll">
            <div className="section-header">
              <p className="section-title">SURVEY INSIGHTS</p>
              <h2>Survey as a Compass: Finding <span className="pink-text">Where to Focus</span></h2>
              <p className="highlight-paragraph">
                I initially assumed that moms might need support throughout the entire motherhood journey. But <span className="font-bold">after conducting 22 surveys</span> with women during pregnancy and postpartum, I was able to <span className="font-bold">narrow the focus.</span>
              </p>

              <p className="highlight-paragraph">
                <br />
                The responses revealed that support gaps are most critical during <span className="font-bold">pregnancy and postpartum,</span> and that <span className="font-bold">moms need tools designed for their own recovery.</span>
              </p>
            </div>
            
            <div className="w-full max-w-[1100px] mx-auto mt-12 space-y-8">
              <img src={surveyChartClean} alt="Survey results showing percentage of moms who struggled most at each stage" className="w-full h-auto max-w-[800px] mx-auto animate-on-scroll" />
              <img src={surveyStats} alt="Survey statistics showing 72% of moms wished for better postpartum recovery tools and 60% felt guilty prioritizing their own well-being" className="w-full h-auto max-w-[800px] mx-auto animate-on-scroll" />
              
              <div className="achievement-box animate-on-scroll mt-8">
                <p>💡 These findings helped me narrow the focus to <strong>mom-centered recovery support</strong> during pregnancy and postpartum, not just general parenting help.</p>
              </div>
            </div>
          </section>

          {/* Interview Insights Section */}
          <section className="summary-section animate-on-scroll">
            <div className="section-header">
              <p className="section-title">INTERVIEW INSIGHTS</p>
              <h2>Zooming In: What <span className="pink-text">Moms</span> Are Actually <span className="pink-text">Experiencing</span></h2>
              <p className="highlight-paragraph">
                Interviewed 5 moms to understand the emotional, physical, and mental challenges they face during <span className="font-bold">pregnancy and postpartum.</span>
              </p>

              <p className="highlight-paragraph">
                <br />
                Their stories revealed a deep need for <span className="font-bold">reliable answers, emotional support, and personalized guidance</span> beyond medical facts. While existing resources provide information, <span className="font-bold">moms crave human connection and reassurance</span> to feel truly understood.
              </p>
            </div>
            
            <div className="w-full max-w-[1100px] mx-auto mt-12 space-y-12">
              <img src={emotionalSupportGapComplete} alt="Emotional Support Gap - quotes from moms about feeling invisible and wanting connection without negativity" className="w-full h-auto max-w-[800px] mx-auto animate-on-scroll" />
              <img src={informationOverloadComplete} alt="Information Overload But No Guidance - quotes about needing someone to talk to and wanting reliable information" className="w-full h-auto max-w-[800px] mx-auto animate-on-scroll" />
            </div>
          </section>

          {/* Online Communities Problems Section */}
          <section className="summary-section animate-on-scroll">
            <div className="section-header">
              <p className="section-title">DIGITAL ETHNOGRAPHY</p>
              <h2>These Gaps Often Push Moms Toward <span className="pink-text">Online Communities</span><br/>In Search Of <span className="pink-text">Connection</span></h2>
              <p className="highlight-paragraph">
                Analyzed conversations on <strong>Reddit, Instagram, TikTok, and Facebook</strong> to see how they seek guidance and connection during pregnancy and postpartum.
              </p>

              <p className="highlight-paragraph">
                <br />
                Moms turn to online communities for support and reassurance, but they encounter <span className="font-bold">misinformation, unanswered questions, and mom-shaming.</span> These issues often leave them feeling even more isolated, frustrated, and unheard.
              </p>
            </div>
            
            <div className="w-full max-w-[1100px] mx-auto mt-12 space-y-12">
              <img src={onlineCommunities1} alt="Why do moms go to online communities - to get emotional support and hear real experiences" className="w-full h-auto max-w-[800px] mx-auto animate-on-scroll" />
              <img src={onlineCommunities2} alt="However moms also experience no comments, difficulty finding right audience, mom-shaming and misinformation" className="w-full h-auto max-w-[800px] mx-auto animate-on-scroll" />
              
            </div>
          </section>

          {/* Competitive Analysis Section */}
          <section className="summary-section animate-on-scroll">
            <div className="section-header">
              <p className="section-title">COMPETITIVE ANALYSIS</p>
              <h2>Current Solutions Fall Short of <span className="pink-text">What Moms Actually Need</span></h2>
              <p className="highlight-paragraph">
                Analyzed existing solutions to see <strong>how they support moms throughout pregnancy and postpartum.</strong> Nearly all existing features are effective and whole they show limitations.
              </p>

              <p className="highlight-paragraph">
                This helped uncover key gaps in support, highlighting <strong>missed opportunities to create a more comprehensive and connected experience</strong> for moms.
              </p>
            </div>
            
            <div className="w-full max-w-[1100px] mx-auto mt-12">
              <img src={competitiveAnalysis} alt="Competitive analysis showing gaps in AI chatbots, social media, and pregnancy apps" className="w-full h-auto max-w-[800px] mx-auto animate-on-scroll" />
            </div>
          </section>

          {/* Design Strategy Section */}
          <section className="summary-section animate-on-scroll">
            <div className="section-header">
              <p className="section-title">DESIGN STRATEGY</p>
              <h2>So How Can Our <span className="pink-text">Design</span> Truly <span className="pink-text">Support Moms?</span></h2>
              <p className="highlight-paragraph">
                Based on what I heard and observed, I realized that moms weren't just asking for information. They were asking to be <strong>seen, supported, and protected.</strong>
              </p>

              <p className="highlight-paragraph">
                <br />
                I translated those pain points <strong>into design goals</strong> that shaped the heart of Nurturly. The result: a solution grounded in <strong>empathy, trust, and real human connection.</strong>
              </p>
            </div>
            
            <div className="mt-16 max-w-[1200px] mx-auto">
              {/* Pain Points Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Pain Point 1 */}
                <div className="text-center animate-on-scroll">
                  <div className="text-sm font-bold text-pink-500 mb-2">PAIN POINT 1</div>
                  <div className="text-6xl mb-4">💔</div>
                  <h3 className="text-xl font-bold mb-4">Emotional Needs Unmet</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Focus always on baby, not mom's recovery
                  </p>
                </div>

                {/* Pain Point 2 */}
                <div className="text-center animate-on-scroll">
                  <div className="text-sm font-bold text-pink-500 mb-2">PAIN POINT 2</div>
                  <div className="text-6xl mb-4">⚠️</div>
                  <h3 className="text-xl font-bold mb-4">Information Overload</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Flooded with advice, lacking clarity
                  </p>
                </div>

                {/* Pain Point 3 */}
                <div className="text-center animate-on-scroll">
                  <div className="text-sm font-bold text-pink-500 mb-2">PAIN POINT 3</div>
                  <div className="text-6xl mb-4">🌊</div>
                  <h3 className="text-xl font-bold mb-4">Missing Connection</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Need empathetic 1:1 support
                  </p>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex justify-center">
                  <div className="w-px h-12 bg-pink-300"></div>
                </div>
                <div className="flex justify-center">
                  <div className="w-px h-12 bg-pink-300"></div>
                </div>
                <div className="flex justify-center">
                  <div className="w-px h-12 bg-pink-300"></div>
                </div>
              </div>

              {/* Design Principles Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Design Principle 1 */}
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-8 rounded-lg animate-on-scroll text-center">
                  <div className="text-xs font-bold text-pink-100 mb-2 uppercase tracking-wide">DESIGN PRINCIPLE 1</div>
                  <div className="text-6xl mb-4">👀</div>
                  <h3 className="text-lg font-bold mb-4">See the Mom</h3>
                  <p className="text-pink-100 text-sm leading-relaxed">
                    Support beyond the baby with validation and structured recovery tools.
                  </p>
                </div>

                {/* Design Principle 2 */}
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-8 rounded-lg animate-on-scroll text-center">
                  <div className="text-xs font-bold text-pink-100 mb-2 uppercase tracking-wide">DESIGN PRINCIPLE 2</div>
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-lg font-bold mb-4">Deliver Clarity</h3>
                  <p className="text-pink-100 text-sm leading-relaxed">
                    Cut through information overload with personalized, reliable guidance.
                  </p>
                </div>

                {/* Design Principle 3 */}
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-8 rounded-lg animate-on-scroll text-center">
                  <div className="text-xs font-bold text-pink-100 mb-2 uppercase tracking-wide">DESIGN PRINCIPLE 3</div>
                  <div className="text-6xl mb-4">🤝</div>
                  <h3 className="text-lg font-bold mb-4">Foster Safety</h3>
                  <p className="text-pink-100 text-sm leading-relaxed">
                    Create a judgment-free space where moms feel heard and safe.
                  </p>
                </div>
              </div>
            </div>
          </section>

        {/* Introducing Nurturly Section */}
        <section className="full-width-section" style={{ backgroundColor: 'var(--dark-bg)', color: 'var(--text-light)' }}>
          <div className="section-content">
            <div className="section-header" style={{ color: 'var(--text-light)' }}>
              <p className="section-title" style={{ color: 'var(--text-light)' }}>INTRODUCING NURTURLY</p>
              <h2 style={{ color: 'var(--text-light)' }}>Through <span className="pink-text">AI-powered features</span> and <span className="pink-text">empathy-driven design,</span> Nurturly ensures moms feel <span className="pink-text">supported, informed, and connected.</span></h2>
            </div>
            
            <div className="w-full max-w-[1100px] mx-auto mt-12 animate-on-scroll">
              <img src={introducingNurturly} alt="Introducing Nurturly - AI-powered features showing trustworthy companion, moderated community, and personalized connections" className="w-full h-auto" />
            </div>
          </div>
        </section>

          {/* IDEATION Section */}
          <section className="summary-section animate-on-scroll">
            <div className="section-header">
              <p className="section-title">IDEATION</p>
              <h2>Visualized solutions through <span className="pink-text">low-fidelity designs</span> to explore effective layouts and gather feedback for improvement.</h2>
            </div>
            
            <div className="w-full max-w-[1100px] mx-auto mt-12">
              <div className="animate-on-scroll">
                <img src={lowFiWireframes} alt="Low-fidelity wireframes showing initial layout concepts" className="w-full h-auto max-w-[800px] mx-auto" />
              </div>
            </div>
          </section>

          {/* Mid-fi Wireframe Section */}
          <section className="summary-section animate-on-scroll">
            <div className="section-header">
              <p className="section-title">Mid-fi Wireframe</p>
              <h2>Building on early concepts, I created <span className="pink-text">mid-fidelity</span> prototypes. This helped validate <span className="pink-text">navigation logic, content prioritization, and the overall experience structure</span> before moving into high-fidelity design.</h2>
            </div>
            
            <div className="w-full max-w-[1100px] mx-auto mt-12">
              <div className="animate-on-scroll">
                <img src={highFidelityMockups} alt="High-fidelity mobile app mockups showing final design with pink theme" className="w-full h-auto max-w-[900px] mx-auto" />
              </div>
            </div>
          </section>

          {/* Design Iterations Section */}
          <section className="summary-section animate-on-scroll">
            <div className="section-header">
              <p className="section-title">DESIGN ITERATIONS</p>
              <h2>Through user testing and feedback, I iterated on <span className="pink-text">key interaction points</span> to improve usability and user confidence.</h2>
            </div>
            
            <div className="w-full max-w-[1200px] mx-auto mt-12">
              <div className="mb-8 animate-on-scroll">
                <p className="text-sm font-bold text-gray-800 mb-4 tracking-wider">DESIGN ITERATION #1</p>
                <h3 className="text-3xl font-medium text-gray-900 mb-8">Clarifying the <span className="pink-text">AI Chat Entry Point</span></h3>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-12 mb-12 animate-on-scroll">
                {/* First Design */}
                <div className="flex-1">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="text-red-500 text-2xl font-bold">✗</span>
                    <span className="font-bold text-gray-900 text-lg">First Design</span>
                  </div>
                  <div className="mb-6 flex justify-center">
                    <img src={aiChatFirstDesign} alt="First design of AI chat interface showing empty state" className="w-full max-w-[280px]" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-lg">😟</span>
                      <span className="font-medium text-gray-900 text-sm">Users felt lost with no direction</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-3 max-w-xs mx-auto">
                      <p className="text-gray-700 italic text-sm">"It looks empty... What should I ask?"</p>
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex items-center justify-center py-8">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Final Design */}
                <div className="flex-1">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="text-green-500 text-2xl font-bold">✓</span>
                    <span className="font-bold text-gray-900 text-lg">Final Design</span>
                  </div>
                  <div className="mb-6 flex justify-center">
                    <img src={aiChatFinalDesign} alt="Final design of AI chat interface showing contextual prompts" className="w-full max-w-[280px]" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-lg">😊</span>
                      <span className="font-medium text-gray-900 text-sm">Contextual prompts made asking easier</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-3 max-w-xs mx-auto">
                      <p className="text-gray-700 italic text-sm">"Now I know how to start the conversation."</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="achievement-box animate-on-scroll">
                <p>⚡ By adding <span className="pink-text">real-world example prompts</span> and adjusting <span className="pink-text">visual hierarchy,</span> we helped users feel more confident starting the conversation.</p>
              </div>
              
              {/* Design Iteration #2 */}
              <div className="mb-8 animate-on-scroll mt-24">
                <p className="text-sm font-bold text-gray-800 mb-4 tracking-wider">DESIGN ITERATION #2</p>
                <h3 className="text-3xl font-medium text-gray-900 mb-8">Building Trust in <span className="pink-text">AI-Powered Answers</span></h3>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-12 mb-12 animate-on-scroll">
                {/* First Design */}
                <div className="flex-1">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="text-red-500 text-2xl font-bold">✗</span>
                    <span className="font-bold text-gray-900 text-lg">First Design</span>
                  </div>
                  <div className="mb-6 flex justify-center">
                    <img src={chatbotFirstDesign} alt="First design of chatbot showing cluttered response with many links" className="w-full max-w-[280px]" />
                  </div>
                  <div className="text-center">
                    <div className="text-center mb-3">
                      <span className="font-medium text-gray-900 text-sm"><span className="text-lg">😟</span> Too many links made responses feel cluttered and overwhelming</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-3 max-w-xs mx-auto">
                      <p className="text-gray-700 italic text-sm">"Why are there so many links?<br />It's kind of overwhelming."</p>
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex items-center justify-center py-8">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Final Design */}
                <div className="flex-1">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="text-green-500 text-2xl font-bold">✓</span>
                    <span className="font-bold text-gray-900 text-lg">Final Design</span>
                  </div>
                  <div className="mb-6 flex justify-center">
                    <img src={chatbotFinalDesign} alt="Final design of chatbot showing clean response with trusted source" className="w-full max-w-[280px]" />
                  </div>
                  <div className="text-center">
                    <div className="text-center mb-3">
                      <span className="font-medium text-gray-900 text-sm"><span className="text-lg">😊</span> Simplified the response by removing extra links and clearly citing a trusted source to increase credibility</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-3 max-w-xs mx-auto">
                      <p className="text-gray-700 italic text-sm">"This feels much more reliable now that I can clearly see where the info came from."</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="achievement-box animate-on-scroll">
                <p>⚡ By <span className="pink-text">decluttering the response</span> and surfacing a <span className="pink-text">trusted source,</span> we helped moms feel more confident in the AI's answers.</p>
              </div>
            </div>
          </section>

          {/* Design Iteration #3 */}
          <section className="summary-section animate-on-scroll -mt-12">
            <div className="w-full max-w-[1200px] mx-auto">
              <div className="mb-8 animate-on-scroll">
                <p className="text-sm font-bold text-gray-800 mb-4 tracking-wider">DESIGN ITERATION #3</p>
                <h3 className="text-3xl font-medium text-gray-900 mb-8">Creating Meaningful Connections Between <span className="pink-text">Moms</span></h3>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-12 mb-12 animate-on-scroll items-start">
                {/* First Design */}
                <div className="flex-1">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="text-red-500 text-2xl font-bold">✗</span>
                    <span className="font-bold text-gray-900 text-lg">First Design</span>
                  </div>
                  <div className="mb-6 flex justify-center items-center min-h-[500px]">
                    <img src={communityFirstDesign} alt="First design showing individual profile view" className="w-full max-w-[280px]" />
                  </div>
                  <div className="text-center">
                    <div className="text-center mb-3 min-h-[48px] flex items-start justify-center">
                      <span className="font-medium text-gray-900 text-sm"><span className="text-lg">😟</span> Suggested profiles appeared one at a time without context, making it difficult to browse or form meaningful connections</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-3 max-w-xs mx-auto">
                      <p className="text-gray-700 italic text-sm">"I don't love to swipe through too many people just to find someone I relate to."</p>
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex items-center justify-center py-8">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Final Design */}
                <div className="flex-1">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="text-green-500 text-2xl font-bold">✓</span>
                    <span className="font-bold text-gray-900 text-lg">Final Design</span>
                  </div>
                  <div className="mb-6 flex justify-center items-center min-h-[500px]">
                    <img src={communityFinalDesign} alt="Final design showing grouped profiles with shared traits" className="w-full max-w-[280px]" />
                  </div>
                  <div className="text-center pt-8">
                    <div className="text-center mb-3 min-h-[48px] flex items-start justify-center">
                      <span className="font-medium text-gray-900 text-sm"><span className="text-lg">😊</span> Grouped similar moms and highlighted shared traits to spark meaningful connections</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-3 max-w-xs mx-auto">
                      <p className="text-gray-700 italic text-sm">"It's easier to find someone I relate to when they're grouped, and I can see what we have in common."</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="achievement-box animate-on-scroll">
                <p>⚡ By <span className="pink-text">surfacing shared traits</span> and <span className="pink-text">grouping similar users,</span> we made connections feel easier, faster, and more genuine.</p>
              </div>
            </div>
          </section>

          {/* HIGH-FI DESIGN Section */}
          <section className="w-full py-20 mt-20">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-sm font-bold text-gray-800 mb-4 tracking-wider">HIGH-FI DESIGN</h2>
              
              {/* AI Chatbot Section */}
              <div className="mb-32">
                <h3 className="text-3xl font-semibold text-black mb-12 animate-on-scroll">AI chatbot that provides trustworthy resources</h3>
                <img src={aiChatbotFeature} alt="AI chatbot interface" className="w-full max-w-5xl mx-auto animate-on-scroll" />
              </div>

              {/* Community Connection Section */}
              <div className="mb-32">
                <h3 className="text-3xl font-semibold text-black mb-12 animate-on-scroll">Connecting Moms Through Shared Experiences</h3>
                <img src={communityConnectionFeature} alt="Community connection interface" className="w-full max-w-5xl mx-auto animate-on-scroll" />
              </div>

              {/* Recovery Tracking Section */}
              <div className="mb-32">
                <h3 className="text-3xl font-semibold text-black mb-12 animate-on-scroll">Helping moms track recovery and find trusted local resources</h3>
                <img src={trackingResourcesFeature} alt="Recovery tracking interface" className="w-full max-w-5xl mx-auto animate-on-scroll" />
              </div>

              {/* Community Moderation Section */}
              <div>
                <h3 className="text-3xl font-semibold text-black mb-12 animate-on-scroll">Connecting Moms Through Shared Experiences</h3>
                <img src={communityModerationFeature} alt="Community moderation interface" className="w-full max-w-5xl mx-auto animate-on-scroll" />
              </div>
            </div>
          </section>

          {/* RESULT Section */}
          <section className="w-full py-20">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-sm font-bold text-gray-800 mb-4 tracking-wider">RESULT</h2>
              
              <h3 className="text-3xl font-semibold text-black mb-8 leading-relaxed">
                Our team won <span className="pink-text">Runner-Up & People's Choice Awards</span>, securing <span className="pink-text">$5,000</span> in funding to advance Nurturly.
              </h3>
              
              <p className="text-lg text-gray-900 mb-6">
                Creating Nurturly was a meaningful journey of growth, teamwork, and dedication to creating real impact.
              </p>
              
              <p className="text-lg text-gray-900 mb-6">
                Seeing moms resonate with Nurturly's mission was one of the most rewarding moments of this project. We won <span className="font-bold">Runner-Up & People's Choice</span> award at <span className="font-bold">TECH+INNOVATION JAM</span>, <span className="font-bold">securing $5,000</span> in funding to continue building Nurturly.
              </p>
              
              <p className="text-lg text-gray-900 mb-12">
                This experience deepened my belief in <span className="font-bold">empathy-driven UX</span> and <span className="font-bold">research-backed design</span>, and we're now continuing to develop our MVP to launch a solution that truly supports moms.
              </p>
              
              <img src={teamAwards} alt="Nurturly team holding award checks" className="w-full rounded-lg animate-on-scroll" />
            </div>
          </section>

          {/* REFLECTION Section */}
          <section className="full-width-section" style={{ backgroundColor: 'var(--dark-bg)', color: 'var(--text-light)' }}>
            <div className="section-content">
              <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-sm font-bold mb-4 tracking-wider" style={{ color: 'var(--text-light)' }}>REFLECTION</h2>
              
              {/* What I Could've Done Better */}
              <div className="mb-16">
                <h3 className="text-3xl font-semibold mb-12" style={{ color: 'var(--text-light)' }}>
                  What I Could've Done Better
                </h3>
                
                <div className="space-y-6">
                  {/* Card 1 */}
                  <div className="bg-white/5 rounded-2xl p-8 border border-white/10 animate-on-scroll">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">👩‍⚕️</div>
                      <div>
                        <h4 className="text-xl font-bold mb-3" style={{ color: 'var(--text-light)' }}>Consult to more health professionals</h4>
                        <p className="text-gray-300">
                          To ensure solutions are balanced between clinical guidance and lived experiences.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white/5 rounded-2xl p-8 border border-white/10 animate-on-scroll">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">👨‍👩‍👧</div>
                      <div>
                        <h4 className="text-xl font-bold mb-3" style={{ color: 'var(--text-light)' }}>Include partners and families</h4>
                        <p className="text-gray-300">
                          Broaden support by designing tools for the mom's ecosystem
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white/5 rounded-2xl p-8 border border-white/10 animate-on-scroll">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">✅</div>
                      <div>
                        <h4 className="text-xl font-bold mb-3" style={{ color: 'var(--text-light)' }}>Test more with moms during design iteration</h4>
                        <p className="text-gray-300">
                          Ensure the experience feels truly supportive, not just usable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* What I Learned */}
              <div>
                <h3 className="text-3xl font-semibold mb-12" style={{ color: 'var(--text-light)' }}>
                  What I Learned
                </h3>
                
                <div className="space-y-6">
                  {/* Card 1 */}
                  <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl p-8 animate-on-scroll">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">💡</div>
                      <div>
                        <h4 className="text-xl font-bold mb-3">Empathy-led design starts with listening</h4>
                        <p className="text-pink-50">
                          I listened deeply to users' experiences to shape every design decision, ensuring the work was rooted in genuine needs, not assumptions.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl p-8 animate-on-scroll">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">🔍</div>
                      <div>
                        <h4 className="text-xl font-bold mb-3">Translate complexity into clarity</h4>
                        <p className="text-pink-50">
                          I broke down broad challenges into clear opportunities, connecting research findings directly to design solutions that matter.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl p-8 animate-on-scroll">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">✅</div>
                      <div>
                        <h4 className="text-xl font-bold mb-3">Design with impact in mind</h4>
                        <p className="text-pink-50">
                          I grounded every recommendation in user research, making sure each decision addressed real needs and created meaningful change.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Nurturly;
