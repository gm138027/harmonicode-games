import { Metadata } from 'next';
import React from 'react';
import Script from 'next/script';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'HarmoniCode Games | Revolutionary Music-Based Gaming Experience',
  description: 'Immerse yourself in HarmoniCode Games, where music and gaming converge. Play interactive rhythm-based games, learn musical instruments online, and develop real musical skills through engaging gameplay.',
  keywords: 'HarmoniCode Games, music gaming, rhythm games, interactive music games, learn piano online, musical skill development, music education games, Midiano',
  openGraph: {
    title: 'HarmoniCode Games | Where Music and Gaming Converge',
    description: 'Experience the revolutionary blend of music and interactive gaming with HarmoniCode Games. Learn instruments, develop musical skills, and have fun in our immersive rhythm-based gaming platform.',
    images: [
      {
        url: '/images/harmonicode-games-og.jpg',
        width: 1200,
        height: 630,
        alt: 'HarmoniCode Games - Interactive Music Gaming Experience',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HarmoniCode Games | Interactive Music Gaming',
    description: 'Where music becomes the central element of gameplay. Learn instruments while having fun!',
    images: ['/images/harmonicode-games-twitter.jpg'],
  },
}

export default function Home() {
  return (
    <div>
      {/* Schema.org 结构化数据 */}
      <Script id="schema-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "HarmoniCode Games",
        "url": "https://harmonicode-games.com/",
        "description": "Interactive music-based gaming platform for learning musical instruments and developing musical skills through immersive gameplay.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://harmonicode-games.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }) }} />
      
	   {/* 下面是你要添加的 Organization 结构化数据 */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "HarmoniCode Games",
            "url": "https://harmonicode-games.com/",
            "logo": "https://harmonicode-games.com/LOGO.png"
          })
        }}
      />
	  
     <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "HarmoniCode Games Midiano",
  "image": "https://harmonicode-games.com/images/midiano-preview.jpg",
  "description": "Interactive piano learning game that helps users develop real piano skills through engaging gameplay.",
  "brand": {
    "@type": "Brand",
    "name": "HarmoniCode Games"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://harmonicode-games.com/midiano",
    "priceCurrency": "USD",
    "price": "0",
    "priceValidUntil": "2026-05-10",
    "availability": "https://schema.org/InStock",
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "USD"
      }
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 30
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "249"
  }
}
` }} />
      
      {/* 英雄区域 - 优化SEO，白色背景 + 蓝紫色渐变 */}
      <section id="home" className="hero-section">
        <div className="container">
          <div style={{
            display: "flex", 
            flexDirection: "row", 
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem"
          }}>
            <div style={{
              flex: "1",
              minWidth: "300px",
            }}>
              <h1 className="title-large" style={{
                fontWeight: "600", 
                letterSpacing: "-0.025em", 
                fontSize: "3rem", 
                lineHeight: "1.1", 
                background: "linear-gradient(to right, #1d1d1f, #494949)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                HarmoniCode Games: Where Music Becomes Interactive Gaming
              </h1>
              <p className="subtitle" style={{
                fontSize: "1.25rem", 
                color: "#494949", 
                lineHeight: "1.5",
                fontWeight: "400",
                marginTop: "1.25rem",
                maxWidth: "90%"
              }}>
                Experience our revolutionary rhythm-based games that transform musical learning into an 
                immersive gaming adventure. Develop real musical skills while having fun.
              </p>
              <div style={{display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap"}}>
                <a 
                  href="#play" 
                  className="button-primary"
                  style={{
                    borderRadius: "999px", 
                    padding: "0.875rem 1.75rem",
                    background: "linear-gradient(135deg, var(--apple-blue), var(--apple-purple))",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    fontWeight: "500",
                    fontSize: "1rem",
                    letterSpacing: "0.01em"
                  }}
                >
                  Play Midiano Now
                </a>
                <a 
                  href="#about" 
                  className="button-secondary"
                  style={{
                    borderRadius: "999px", 
                    padding: "0.875rem 1.75rem",
                    fontWeight: "500",
                    fontSize: "1rem",
                    letterSpacing: "0.01em",
                    backgroundColor: "rgba(175, 82, 222, 0.1)",
                    color: "var(--apple-purple)"
                  }}
                >
                  Discover HarmoniCode
                </a>
              </div>
            </div>
            <div style={{
              flex: "1",
              minWidth: "300px",
            }}>
              <div style={{
                height: "380px",
                borderRadius: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
                border: "1px solid rgba(0, 0, 0, 0.03)",
                position: "relative",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }} className="image-container">
                <Image 
                  src="/piano-player-hero.png"
                  alt="Person playing piano with musical notes"
                  width={500}
                  height={380}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    transition: "transform 0.5s ease"
                  }}
                  priority
                  className="zoom-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 游戏区域 */}
      <section id="play" className="featured-section">
        <div className="container">
          <h2 className="section-title" style={{textAlign: "center", fontSize: "2rem", marginBottom: "2rem"}}>Play Midiano</h2>
		  <p style={{textAlign: "center", color: "#888", marginBottom: "1.5rem"}}>
           If the game does not load or run correctly, please try refreshing the page. For the best experience, we recommend using Google Chrome.
          </p>
          
          {/* 游戏嵌入 - 恢复为原样，保持单独的上方嵌入 */}
          <div style={{marginBottom: "3rem"}}>
            <iframe 
              src="https://app.midiano.com/" 
              allow="midi; microphone; camera" 
              className="game-embed"
              title="Midiano - Learn piano in your browser"
            />
          </div>
          
          {/* 
            游戏介绍 - Midiano介绍，精简版，保持SEO效果，苹果风格
          */}
          <div className="card" style={{marginBottom: "3rem", padding: "2rem", border: "none"}}>
            <h3 className="section-title" style={{fontSize: "1.75rem", color: "var(--apple-blue)", marginBottom: "1.5rem", fontWeight: "600"}}>Midiano: The Flagship Experience of HarmoniCode Games</h3>
            
            <div className="force-flex-row" style={{gap: "2.5rem"}}>
              <div className="force-w-half" style={{paddingRight: "1rem"}}>
                <p style={{fontSize: "1.125rem", marginBottom: "1.25rem", lineHeight: "1.6", color: "#494949"}}>
                  <strong>Midiano</strong> is the premier piano learning game from <strong>HarmoniCode Games</strong>, 
                  showcasing our innovative approach to music education through interactive gaming. This browser-based 
                  experience represents the core philosophy of HarmoniCode: making music learning engaging, accessible, 
                  and effective for everyone.
                </p>
                
                <p style={{fontSize: "1.125rem", lineHeight: "1.6", color: "#494949"}}>
                  Connect your MIDI keyboard or use your computer keyboard to play along with your favorite songs, 
                  while our advanced visualization technology guides your learning process. Midiano exemplifies 
                  HarmoniCode Games' commitment to blending musical skill development with immersive gameplay.
                </p>
              </div>
              
              <div className="force-w-half">
                <h4 style={{fontWeight: "500", color: "#1d1d1f", fontSize: "1.25rem", marginBottom: "1rem"}}>
                  Perfect For:
                </h4>
                <ul style={{listStyleType: "none", padding: 0}}>
                  <li style={{marginBottom: "1rem", display: "flex", alignItems: "flex-start", gap: "0.75rem"}}>
                    <span style={{color: "var(--apple-green)", marginRight: "0.5rem", fontSize: "1.1rem", marginTop: "0.2rem"}}>✓</span> 
                    <span><strong style={{color: "#1d1d1f", fontWeight: "500"}}>Music Enthusiasts</strong>: Whether you're a beginner or experienced player, Midiano adapts to your skill level, making it the ideal HarmoniCode game for continuous musical growth</span>
                  </li>
                  <li style={{marginBottom: "1rem", display: "flex", alignItems: "flex-start", gap: "0.75rem"}}>
                    <span style={{color: "var(--apple-green)", marginRight: "0.5rem", fontSize: "1.1rem", marginTop: "0.2rem"}}>✓</span> 
                    <span><strong style={{color: "#1d1d1f", fontWeight: "500"}}>Piano Learners</strong>: HarmoniCode's Midiano offers a structured yet flexible approach to piano practice, complementing traditional lessons or standing alone as a learning tool</span>
                  </li>
                  <li style={{marginBottom: "1rem", display: "flex", alignItems: "flex-start", gap: "0.75rem"}}>
                    <span style={{color: "var(--apple-green)", marginRight: "0.5rem", fontSize: "1.1rem", marginTop: "0.2rem"}}>✓</span> 
                    <span><strong style={{color: "#1d1d1f", fontWeight: "500"}}>Rhythm Game Fans</strong>: Experience HarmoniCode Games' unique approach to rhythm-based gaming with Midiano, where entertainment and skill development merge seamlessly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* 
            如何玩 - 左右结构布局
            左侧是入门指南，右侧是游戏技巧
          */}
          <section style={{marginBottom: "3rem"}}>
            <h2 className="section-title">How to Play</h2>
            
            <div className="force-flex-row" style={{gap: "1rem"}}>
              <div className="force-w-half" style={{paddingRight: "1rem"}}>
                <h3 style={{fontSize: "1.25rem", fontWeight: "600", color: "var(--apple-blue)", marginBottom: "1rem"}}>Getting Started</h3>
                <ol style={{paddingLeft: "1.5rem"}}>
                  <li style={{marginBottom: "0.75rem"}}>Allow browser permissions for MIDI devices when prompted</li>
                  <li style={{marginBottom: "0.75rem"}}>Connect your MIDI keyboard via USB (optional)</li>
                  <li style={{marginBottom: "0.75rem"}}>If you don't have a MIDI keyboard, you can use your computer keyboard</li>
                  <li style={{marginBottom: "0.75rem"}}>Select a song from the library or upload your own MIDI file</li>
                </ol>
              </div>
              
              <div className="force-w-half">
                <h3 style={{fontSize: "1.25rem", fontWeight: "600", color: "var(--apple-blue)", marginBottom: "1rem"}}>Gameplay Tips</h3>
                <ul style={{listStyleType: "none", padding: 0}}>
                  <li style={{marginBottom: "0.75rem", display: "flex", alignItems: "center"}}>
                    <span style={{color: "var(--apple-green)", marginRight: "0.5rem"}}>✓</span> 
                    Adjust the playback speed to match your skill level
                  </li>
                  <li style={{marginBottom: "0.75rem", display: "flex", alignItems: "center"}}>
                    <span style={{color: "var(--apple-green)", marginRight: "0.5rem"}}>✓</span> 
                    Enable "Wait Mode" for a more forgiving learning experience
                  </li>
                  <li style={{marginBottom: "0.75rem", display: "flex", alignItems: "center"}}>
                    <span style={{color: "var(--apple-green)", marginRight: "0.5rem"}}>✓</span> 
                    Use the visualization to see which keys to press
                  </li>
                  <li style={{marginBottom: "0.75rem", display: "flex", alignItems: "center"}}>
                    <span style={{color: "var(--apple-green)", marginRight: "0.5rem"}}>✓</span> 
                    Practice difficult sections by looping specific parts of the song
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* 好处部分保持原样的网格布局 */}
          <section style={{marginBottom: "3rem"}}>
            <h2 className="section-title">Benefits of Playing Midiano</h2>
            
            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem"}}>
              <div className="card">
                <div className="icon-container">
                  🎵
                </div>
                <h3 style={{fontWeight: "600", marginBottom: "0.5rem", color: "var(--apple-gray-900)"}}>Improve Musical Skills</h3>
                <p style={{color: "var(--apple-gray-700)"}}>Develop rhythm, timing, and finger dexterity through interactive practice</p>
              </div>
              
              <div className="card">
                <div className="icon-container green">
                  🧠
                </div>
                <h3 style={{fontWeight: "600", marginBottom: "0.5rem", color: "var(--apple-gray-900)"}}>Cognitive Benefits</h3>
                <p style={{color: "var(--apple-gray-700)"}}>Enhance concentration, memory, and hand-eye coordination</p>
              </div>
              
              <div className="card">
                <div className="icon-container purple">
                  🎮
                </div>
                <h3 style={{fontWeight: "600", marginBottom: "0.5rem", color: "var(--apple-gray-900)"}}>Fun Learning Experience</h3>
                <p style={{color: "var(--apple-gray-700)"}}>Learn piano through an engaging, game-like environment</p>
              </div>
            </div>
          </section>
          
          {/* 技术要求 */}
          <section>
            <h2 className="section-title">Technical Requirements</h2>
            
            <div style={{backgroundColor: "var(--apple-gray-100)", padding: "1.5rem", borderRadius: "0.75rem"}}>
              <ul style={{paddingLeft: "1.5rem"}}>
                <li style={{marginBottom: "0.75rem"}}><strong>Browser:</strong> Chrome, Firefox, Edge, or Safari (latest versions)</li>
                <li style={{marginBottom: "0.75rem"}}><strong>Optional:</strong> MIDI keyboard with USB connection</li>
                <li style={{marginBottom: "0.75rem"}}><strong>Permissions:</strong> Browser permissions for MIDI devices and microphone (for acoustic piano detection)</li>
              </ul>
            </div>
          </section>
        </div>
      </section>

      {/* About Section - SEO优化 */}
      <section id="about" className="about-section" style={{padding: "4rem 0"}}>
        <div className="container">
          <h2 className="section-title" style={{fontSize: "2rem", textAlign: "center", marginBottom: "2rem"}}>About HarmoniCode Games</h2>
          
          {/* About HarmoniCode Games - 左右结构布局，增强SEO内容 */}
          <section style={{marginBottom: "4rem"}}>
            <div style={{
              display: "flex", 
              flexDirection: "row", 
              alignItems: "center",
              flexWrap: "wrap",
              gap: "2rem"
            }}>
              <div style={{
                flex: "1",
                minWidth: "300px",
              }}>
                <p style={{fontSize: "1.125rem", marginBottom: "1rem"}}>
                  <strong>HarmoniCode Games</strong> represents a groundbreaking genre in the music gaming industry 
                  where music becomes the central element of gameplay, rather than just a background feature. 
                  Our innovative platform creates a unique intersection where musical skill development, 
                  rhythm training, and interactive entertainment converge.
                </p>
                <p style={{fontSize: "1.125rem", marginBottom: "1rem"}}>
                  Unlike traditional video games that use soundtracks as mere accompaniments, 
                  HarmoniCode games require players to interact with music as a core mechanic, 
                  creating a more immersive and engaging experience that builds real musical abilities.
                </p>
                <p style={{fontSize: "1.125rem"}}>
                  Founded on the principle that learning music should be fun and accessible to everyone, 
                  HarmoniCode Games combines cutting-edge technology with music education principles to 
                  create an engaging platform for music enthusiasts of all ages and skill levels.
                </p>
              </div>
              <div style={{
                flex: "1",
                minWidth: "300px",
              }}>
                <div style={{
                  height: "380px", 
                  borderRadius: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }} className="image-container">
                  <Image 
                    src="/guitar-player-about.png"
                    alt="Stylish young man playing guitar"
                    width={500}
                    height={380}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.5s ease"
                    }}
                    className="zoom-image"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* 关键特性 - SEO优化 */}
          <section style={{marginBottom: "4rem"}}>
            <h2 className="section-title">Key Characteristics of HarmoniCode Games</h2>
            
            {/* 将四个特性分为两行，每行两个特性，保持左右布局 */}
            <div className="force-flex-row" style={{gap: "1rem", marginBottom: "1rem"}}>
              <div className="force-w-half" style={{backgroundColor: "var(--apple-gray-100)", padding: "1.5rem", borderRadius: "0.75rem"}}>
                <h3 style={{fontSize: "1.25rem", fontWeight: "600", color: "var(--apple-blue)", marginBottom: "0.75rem"}}>Music as Core Gameplay</h3>
                <p>
                  In HarmoniCode Games, music isn't just background—it's the central mechanism 
                  that drives gameplay forward. Players interact directly with musical elements, 
                  whether by playing instruments, matching rhythm patterns, or solving music-based puzzles, 
                  creating an authentic musical experience that enhances both enjoyment and learning.
                </p>
              </div>
              
              <div className="force-w-half" style={{backgroundColor: "var(--apple-gray-100)", padding: "1.5rem", borderRadius: "0.75rem"}}>
                <h3 style={{fontSize: "1.25rem", fontWeight: "600", color: "var(--apple-blue)", marginBottom: "0.75rem"}}>Skill Development & Musical Learning</h3>
                <p>
                  HarmoniCode Games naturally builds genuine musical abilities, teaching rhythm, timing, note recognition, 
                  and instrument techniques through engaging gameplay. The learning happens organically as players 
                  progress through levels and challenges, making music education fun and accessible to everyone.
                </p>
              </div>
            </div>
            
            {/* 第二行特性 */}
            <div className="force-flex-row" style={{gap: "1rem"}}>
              <div className="force-w-half" style={{backgroundColor: "var(--apple-gray-100)", padding: "1.5rem", borderRadius: "0.75rem"}}>
                <h3 style={{fontSize: "1.25rem", fontWeight: "600", color: "var(--apple-blue)", marginBottom: "0.75rem"}}>Immersive Multi-Sensory Experience</h3>
                <p>
                  By engaging multiple senses simultaneously, HarmoniCode Games creates deeper immersion 
                  than traditional games or music learning methods. The synchronized visual feedback with audio input creates 
                  a flow state that enhances player engagement, making practice sessions longer and more productive while feeling effortless.
                </p>
              </div>
              
              <div className="force-w-half" style={{backgroundColor: "var(--apple-gray-100)", padding: "1.5rem", borderRadius: "0.75rem"}}>
                <h3 style={{fontSize: "1.25rem", fontWeight: "600", color: "var(--apple-blue)", marginBottom: "0.75rem"}}>Accessibility & Adaptive Learning</h3>
                <p>
                  HarmoniCode Games are designed to be accessible to players of all skill levels, 
                  from complete beginners to experienced musicians. Our adaptive difficulty system ensures 
                  everyone can enjoy the experience while being appropriately challenged, making musical learning 
                  accessible regardless of prior experience.
                </p>
              </div>
            </div>
          </section>
          
          {/* 教育价值 - SEO优化 */}
          <section style={{marginBottom: "4rem"}}>
            <h2 className="section-title">Educational & Therapeutic Benefits of HarmoniCode Games</h2>
            
            <div className="card" style={{borderColor: "var(--apple-gray-200)"}}>
              <p style={{fontSize: "1.125rem", marginBottom: "1.5rem"}}>
                Beyond entertainment, HarmoniCode Games delivers substantial educational and therapeutic value backed by research:
              </p>
              
              <div className="force-flex-row" style={{gap: "1rem"}}>
                <div className="force-w-half" style={{paddingRight: "1rem"}}>
                  <ul style={{listStyleType: "none", padding: 0}}>
                    <li style={{marginBottom: "1rem", display: "flex", gap: "0.75rem"}}>
                      <span style={{color: "var(--apple-blue)", fontWeight: "bold", fontSize: "1.25rem"}}>•</span>
                      <div>
                        <strong>Comprehensive Musical Skill Development</strong>
                        <p>Our games teach rhythm recognition, timing precision, note reading, scale familiarity, and instrumental techniques through engaging interactive gameplay - skills that transfer directly to real instrument playing</p>
                      </div>
                    </li>
                    
                    <li style={{marginBottom: "1rem", display: "flex", gap: "0.75rem"}}>
                      <span style={{color: "var(--apple-blue)", fontWeight: "bold", fontSize: "1.25rem"}}>•</span>
                      <div>
                        <strong>Cognitive Enhancement & Brain Development</strong>
                        <p>Playing HarmoniCode Games improves concentration, memory formation, pattern recognition, hand-eye coordination, and multitasking abilities - cognitive benefits supported by neuroscience research on music education</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="force-w-half">
                  <ul style={{listStyleType: "none", padding: 0}}>
                    <li style={{marginBottom: "1rem", display: "flex", gap: "0.75rem"}}>
                      <span style={{color: "var(--apple-blue)", fontWeight: "bold", fontSize: "1.25rem"}}>•</span>
                      <div>
                        <strong>Inclusive Music Education Access</strong>
                        <p>HarmoniCode Games provides equitable access to quality music education in an approachable, low-pressure environment, breaking down barriers of cost and accessibility that traditional music lessons often present</p>
                      </div>
                    </li>
                    
                    <li style={{display: "flex", gap: "0.75rem"}}>
                      <span style={{color: "var(--apple-blue)", fontWeight: "bold", fontSize: "1.25rem"}}>•</span>
                      <div>
                        <strong>Therapeutic Applications & Wellbeing</strong>
                        <p>Increasingly used in music therapy settings to enhance fine motor coordination, cognitive functioning, emotional regulation, and stress management - creating not just educational but holistic health benefits</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* 行动号召 - SEO优化，白色背景 + 蓝紫色渐变按钮 */}
          <section style={{
            backgroundColor: "white", 
            color: "var(--apple-gray-900)", 
            borderRadius: "18px", 
            padding: "3rem 2rem", 
            textAlign: "center",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.08)",
            border: "1px solid var(--apple-gray-200)"
          }}>
            <h2 style={{fontSize: "1.75rem", fontWeight: "600", marginBottom: "1.25rem", letterSpacing: "-0.02em"}}>Start Your Musical Journey with HarmoniCode Games Today</h2>
            <p style={{fontSize: "1.125rem", marginBottom: "1.75rem", maxWidth: "800px", margin: "0 auto 1.75rem", color: "var(--apple-gray-700)", lineHeight: "1.6"}}>
              Join thousands of music enthusiasts who are developing real musical skills while having fun. 
              Our innovative platform makes learning music intuitive, engaging, and effective for all skill levels.
            </p>
            <div style={{display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap"}}>
              <a 
                href="#play" 
                style={{
                  background: "linear-gradient(135deg, var(--apple-blue), var(--apple-purple))", 
                  color: "white", 
                  padding: "0.75rem 2rem", 
                  borderRadius: "999px", 
                  display: "inline-block", 
                  fontWeight: "500",
                  textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.2s ease"
                }}
              >
                Play Midiano Free Now
              </a>
              <a 
                href="#subscribe" 
                style={{
                  backgroundColor: "rgba(175, 82, 222, 0.1)", 
                  color: "var(--apple-purple)", 
                  padding: "0.75rem 2rem", 
                  borderRadius: "999px", 
                  display: "inline-block", 
                  fontWeight: "500",
                  textDecoration: "none",
                  transition: "all 0.2s ease"
                }}
              >
                Subscribe for Updates
              </a>
            </div>
            <p style={{fontSize: "0.875rem", marginTop: "1.5rem", color: "var(--apple-gray-500)", fontWeight: "400"}}>
              No registration required. Start playing instantly in your browser.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}