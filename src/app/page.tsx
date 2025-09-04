import type { Metadata } from "next"
import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'HarmoniCode Games | Free Online Piano Games & Music Learning',
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(', '),
  openGraph: {
    title: 'HarmoniCode Games | Free Online Piano Games',
    description: 'Experience our free online piano games and interactive music video games. Learn piano and develop musical skills through fun, engaging gameplay.',
    images: [
      {
        url: '/images/harmonicode-games-og.jpg',
        width: 1200,
        height: 630,
        alt: 'HarmoniCode Games - Interactive Online Piano Gaming Experience',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HarmoniCode Games | Online Piano Games',
    description: 'Play free online piano games and learn music while having fun!',
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
        "name": siteConfig.name,
        "url": siteConfig.url,
        "description": siteConfig.description,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${siteConfig.url}/search?q={search_term_string}`,
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
            "name": siteConfig.name,
            "url": siteConfig.url,
            "logo": `${siteConfig.url}/logo/android-chrome-512x512.png`
          })
        }}
      />
	  
     <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
{
  "@context": "https://schema.org/",
  "@type": "VideoGame",
  "name": "HarmoniCode Games Midiano",
  "applicationCategory": "Game, MusicGame",
  "gamePlatform": "Web Browser",
  "genre": "Music, Educational",
  "image": "https://harmonicodegames.com/images/midiano-preview.jpg",
  "description": "Interactive online piano game that helps users develop real piano skills through engaging gameplay.",
  "offers": {
    "@type": "Offer",
    "url": "https://harmonicodegames.com/",
    "priceCurrency": "USD",
    "price": "0",
    "availability": "https://schema.org/InStock"
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
                HarmoniCode Games: Interactive Online Piano Games & Music Learning
              </h1>
              <p className="subtitle" style={{
                fontSize: "1.25rem", 
                color: "#494949", 
                lineHeight: "1.5",
                fontWeight: "400",
                marginTop: "1.25rem",
                maxWidth: "90%"
              }}>
                Play our free online piano games and interactive music video games. Unlike sports-related gaming platforms, 
                we focus exclusively on helping you learn music through fun, engaging gameplay.
              </p>
              <div style={{display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap"}}>
                <a 
                  href="/play" 
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
                  Play Free Online Piano Game Now
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
          <h2 className="section-title" style={{textAlign: "center", fontSize: "2rem", marginBottom: "2rem"}}>Play Online Piano Game</h2>
		  <p style={{textAlign: "center", color: "#888", marginBottom: "1.5rem"}}>
           If the game does not load or run correctly, please try refreshing the page. For the best experience, we recommend using Google Chrome.
          </p>
          
          {/* 游戏嵌入 - 保持游戏嵌入在主页 */}
          <div style={{marginBottom: "3rem"}}>
            <iframe 
              src="https://app.midiano.com/" 
              allow="midi; microphone; camera" 
              className="game-embed"
              title="Midiano - Learn piano in your browser"
            />
          </div>
          
          <div style={{textAlign: "center", marginBottom: "3rem"}}>
            <Link href="/play" style={{
              display: "inline-block",
              background: "linear-gradient(to right, var(--apple-blue), var(--apple-purple))",
              color: "white",
              fontSize: "1.125rem",
              fontWeight: "500",
              padding: "0.875rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all 0.3s ease"
            }}
            className="hover-scale">
              View Full Game Experience
            </Link>
          </div>
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
          
          {/* FAQ部分 - 提高SEO和用户体验 */}
          <section style={{marginBottom: "4rem"}}>
            <h2 className="section-title">Frequently Asked Questions</h2>
            
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem"
            }}>
              <div className="faq-item" style={{
                backgroundColor: "var(--apple-gray-100)",
                borderRadius: "0.75rem",
                padding: "1.5rem"
              }}>
                <h3 style={{
                  fontSize: "1.1rem", 
                  fontWeight: "600", 
                  marginBottom: "0.75rem",
                  color: "var(--apple-gray-900)"
                }}>What is HarmoniCode Games?</h3>
                <p style={{color: "var(--apple-gray-700)"}}>
                  HarmoniCode Games is a platform dedicated to interactive music gaming experiences where music is the central element of gameplay, not just a background feature. We've created a unique intersection where musical skill development, rhythm training, and interactive entertainment converge, allowing players to develop real musical abilities while having fun.
                </p>
              </div>
              
              <div className="faq-item" style={{
                backgroundColor: "var(--apple-gray-100)",
                borderRadius: "0.75rem",
                padding: "1.5rem"
              }}>
                <h3 style={{
                  fontSize: "1.1rem", 
                  fontWeight: "600", 
                  marginBottom: "0.75rem",
                  color: "var(--apple-gray-900)"
                }}>How does HarmoniCode Games help users learn music?</h3>
                <p style={{color: "var(--apple-gray-700)"}}>
                  Our platform naturally builds genuine musical abilities through engaging gameplay. By visualizing musical elements, providing instant feedback, and creating an immersive multi-sensory experience, HarmoniCode Games teaches rhythm recognition, timing precision, note reading, and instrumental techniques. This approach makes learning more enjoyable and effective than traditional methods alone.
                </p>
              </div>
              
              <div className="faq-item" style={{
                backgroundColor: "var(--apple-gray-100)",
                borderRadius: "0.75rem",
                padding: "1.5rem"
              }}>
                <h3 style={{
                  fontSize: "1.1rem", 
                  fontWeight: "600", 
                  marginBottom: "0.75rem",
                  color: "var(--apple-gray-900)"
                }}>Do I need prior musical knowledge to use HarmoniCode Games?</h3>
                <p style={{color: "var(--apple-gray-700)"}}>
                  Absolutely not! HarmoniCode Games is designed for players of all skill levels, from complete beginners to experienced musicians. Our adaptive difficulty system and visual guidance make it especially friendly for those new to music. You'll learn at your own pace while having fun, and no prior musical knowledge is required to start your journey.
                </p>
              </div>
              
              <div className="faq-item" style={{
                backgroundColor: "var(--apple-gray-100)",
                borderRadius: "0.75rem",
                padding: "1.5rem"
              }}>
                <h3 style={{
                  fontSize: "1.1rem", 
                  fontWeight: "600", 
                  marginBottom: "0.75rem",
                  color: "var(--apple-gray-900)"
                }}>What types of music games does HarmoniCode offer?</h3>
                <p style={{color: "var(--apple-gray-700)"}}>
                  HarmoniCode Games offers a variety of music-based games, including piano learning experiences like Midiano, rhythm-based challenges, composition tools, and more. Each game is designed to develop different musical skills while maintaining an engaging, game-like experience. We're constantly expanding our library to cover more instruments and musical concepts.
                </p>
              </div>
              
              <div className="faq-item" style={{
                backgroundColor: "var(--apple-gray-100)",
                borderRadius: "0.75rem",
                padding: "1.5rem"
              }}>
                <h3 style={{
                  fontSize: "1.1rem", 
                  fontWeight: "600", 
                  marginBottom: "0.75rem",
                  color: "var(--apple-gray-900)"
                }}>Is HarmoniCode Games free to use?</h3>
                <p style={{color: "var(--apple-gray-700)"}}>
                  Yes! We believe in making music education accessible to everyone. HarmoniCode Games core experiences, including Midiano, are completely free to use in your browser with no hidden costs. All essential features are available without payment, allowing anyone to start their musical journey without financial barriers.
                </p>
              </div>
              
              <div className="faq-item" style={{
                backgroundColor: "var(--apple-gray-100)",
                borderRadius: "0.75rem",
                padding: "1.5rem"
              }}>
                <h3 style={{
                  fontSize: "1.1rem", 
                  fontWeight: "600", 
                  marginBottom: "0.75rem",
                  color: "var(--apple-gray-900)"
                }}>How can I get started with HarmoniCode Games?</h3>
                <p style={{color: "var(--apple-gray-700)"}}>
                  Getting started is simple! Just visit our website and you can immediately begin playing our browser-based games without any downloads or installations. For the best experience, we recommend using a modern browser like Chrome. While a MIDI keyboard can enhance your experience, it's completely optional - you can use your computer keyboard to play our games.
                </p>
              </div>
            </div>
          </section>
          
          {/* 添加FAQ结构化数据 */}
          <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is HarmoniCode Games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HarmoniCode Games is a platform dedicated to interactive music gaming experiences where music is the central element of gameplay, not just a background feature. We've created a unique intersection where musical skill development, rhythm training, and interactive entertainment converge, allowing players to develop real musical abilities while having fun."
      }
    },
    {
      "@type": "Question",
      "name": "How does HarmoniCode Games help users learn music?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our platform naturally builds genuine musical abilities through engaging gameplay. By visualizing musical elements, providing instant feedback, and creating an immersive multi-sensory experience, HarmoniCode Games teaches rhythm recognition, timing precision, note reading, and instrumental techniques. This approach makes learning more enjoyable and effective than traditional methods alone."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need prior musical knowledge to use HarmoniCode Games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely not! HarmoniCode Games is designed for players of all skill levels, from complete beginners to experienced musicians. Our adaptive difficulty system and visual guidance make it especially friendly for those new to music. You'll learn at your own pace while having fun, and no prior musical knowledge is required to start your journey."
      }
    },
    {
      "@type": "Question",
      "name": "What types of music games does HarmoniCode offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HarmoniCode Games offers a variety of music-based games, including piano learning experiences like Midiano, rhythm-based challenges, composition tools, and more. Each game is designed to develop different musical skills while maintaining an engaging, game-like experience. We're constantly expanding our library to cover more instruments and musical concepts."
      }
    },
    {
      "@type": "Question",
      "name": "Is HarmoniCode Games free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We believe in making music education accessible to everyone. HarmoniCode Games core experiences, including Midiano, are completely free to use in your browser with no hidden costs. All essential features are available without payment, allowing anyone to start their musical journey without financial barriers."
      }
    },
    {
      "@type": "Question",
      "name": "How can I get started with HarmoniCode Games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Getting started is simple! Just visit our website and you can immediately begin playing our browser-based games without any downloads or installations. For the best experience, we recommend using a modern browser like Chrome. While a MIDI keyboard can enhance your experience, it's completely optional - you can use your computer keyboard to play our games."
      }
    }
  ]
}
          ` }} />

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