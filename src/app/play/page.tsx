"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 定义一个接口扩展标准HTMLIFrameElement，包含特定浏览器的全屏方法
interface FullScreenHTMLIFrameElement extends HTMLIFrameElement {
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

export default function PlayPage() {
  return (
    <div className="game-page">
      <div className="container">
        <section className="game-header" style={{
          padding: "2rem 0",
          textAlign: "center"
        }}>
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            background: "linear-gradient(to right, var(--apple-blue), var(--apple-purple))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Play Midiano with HarmoniCode Games
          </h1>
          <p style={{
            fontSize: "1.25rem",
            color: "#494949",
            maxWidth: "800px",
            margin: "0 auto 2rem",
            lineHeight: "1.5"
          }}>
            Start your musical journey right now with our interactive piano games. No downloads required.
          </p>
          
          <div style={{ marginBottom: "1rem" }}>
            <Link href="/" style={{
              display: "inline-flex",
              alignItems: "center",
              color: "var(--apple-blue)",
              fontWeight: "500",
              textDecoration: "none",
              marginBottom: "1.5rem"
            }}>
              <span style={{ marginRight: "0.5rem" }}>←</span> Back to Home
            </Link>
          </div>
        </section>
        
        <section className="game-container" style={{
          marginBottom: "3rem",
          border: "1px solid var(--apple-gray-200)",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
        }}>
          <div className="game-toolbar" style={{
            padding: "1rem",
            backgroundColor: "var(--apple-gray-100)",
            borderBottom: "1px solid var(--apple-gray-200)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div className="game-title" style={{ fontWeight: "600", color: "var(--apple-blue)" }}>
              Midiano Piano Game
            </div>
            <div className="game-controls">
              <button 
                onClick={() => {
                  const iframe = document.querySelector('iframe') as FullScreenHTMLIFrameElement;
                  if (iframe) {
                    if (iframe.requestFullscreen) {
                      iframe.requestFullscreen();
                    } else if (iframe.webkitRequestFullscreen) { /* Safari */
                      iframe.webkitRequestFullscreen();
                    } else if (iframe.msRequestFullscreen) { /* IE11 */
                      iframe.msRequestFullscreen();
                    }
                  }
                }}
                style={{
                  backgroundColor: "var(--apple-green)",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "0.5rem 1rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  cursor: "pointer"
                }}
              >
                Fullscreen
              </button>
            </div>
          </div>
          
          <iframe 
            src="https://app.midiano.com/" 
            allow="midi; microphone; camera; fullscreen" 
            style={{
              width: "100%",
              height: "600px",
              border: "none"
            }}
            title="Midiano - Learn piano in your browser"
            id="midiano-iframe"
          />
        </section>
        
        {/* Midiano Introduction - Moved from home page */}
        <div className="card" style={{marginBottom: "3rem", padding: "2rem", border: "1px solid var(--apple-gray-200)", borderRadius: "12px"}}>
          <h3 className="section-title" style={{fontSize: "1.75rem", color: "var(--apple-blue)", marginBottom: "1.5rem", fontWeight: "600"}}>Midiano: The Flagship Experience of HarmoniCode Games</h3>
          
          <div className="force-flex-row" style={{gap: "2.5rem", display: "flex", flexWrap: "wrap"}}>
            <div className="force-w-half" style={{flex: "1", minWidth: "300px", paddingRight: "1rem"}}>
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
            
            <div className="force-w-half" style={{flex: "1", minWidth: "300px"}}>
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
        
        <section className="game-instructions" style={{
          marginBottom: "3rem",
          backgroundColor: "var(--apple-gray-100)",
          borderRadius: "12px",
          padding: "2rem"
        }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: "600",
            marginBottom: "1.5rem",
            color: "var(--apple-gray-900)"
          }}>How to Play</h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem"
          }}>
            <div>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "var(--apple-blue)"
              }}>Getting Started</h3>
              
              <ol style={{ paddingLeft: "1.5rem" }}>
                <li style={{ marginBottom: "0.75rem" }}>Allow browser permissions for MIDI devices when prompted</li>
                <li style={{ marginBottom: "0.75rem" }}>Connect your MIDI keyboard via USB (optional)</li>
                <li style={{ marginBottom: "0.75rem" }}>If you don't have a MIDI keyboard, you can use your computer keyboard</li>
                <li style={{ marginBottom: "0.75rem" }}>Select a song from the library or upload your own MIDI file</li>
              </ol>
            </div>
            
            <div>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "var(--apple-blue)"
              }}>Gameplay Tips</h3>
              
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "var(--apple-green)", marginRight: "0.5rem" }}>✓</span> 
                  Adjust the playback speed to match your skill level
                </li>
                <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "var(--apple-green)", marginRight: "0.5rem" }}>✓</span> 
                  Enable "Wait Mode" for a more forgiving learning experience
                </li>
                <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "var(--apple-green)", marginRight: "0.5rem" }}>✓</span> 
                  Use the visualization to see which keys to press
                </li>
                <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "var(--apple-green)", marginRight: "0.5rem" }}>✓</span> 
                  Practice difficult sections by looping specific parts of the song
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="game-features" style={{
          marginBottom: "3rem"
        }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: "600",
            marginBottom: "1.5rem",
            color: "var(--apple-gray-900)",
            textAlign: "center"
          }}>Benefits of Playing Midiano</h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem"
          }}>
            <div style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
              border: "1px solid var(--apple-gray-200)"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🎵</div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.75rem" }}>
                Improve Musical Skills
              </h3>
              <p style={{ color: "var(--apple-gray-700)" }}>
                Develop rhythm, timing, and finger dexterity through interactive practice
              </p>
            </div>
            
            <div style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
              border: "1px solid var(--apple-gray-200)"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🧠</div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.75rem" }}>
                Cognitive Benefits
              </h3>
              <p style={{ color: "var(--apple-gray-700)" }}>
                Enhance concentration, memory, and hand-eye coordination
              </p>
            </div>
            
            <div style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
              border: "1px solid var(--apple-gray-200)"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🎮</div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.75rem" }}>
                Fun Learning Experience
              </h3>
              <p style={{ color: "var(--apple-gray-700)" }}>
                Learn piano through an engaging, game-like environment
              </p>
            </div>
          </div>
        </section>
        
        <section className="technical-requirements" style={{
          marginBottom: "3rem",
          backgroundColor: "var(--apple-gray-100)",
          borderRadius: "12px",
          padding: "2rem"
        }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: "600",
            marginBottom: "1.5rem",
            color: "var(--apple-gray-900)"
          }}>Technical Requirements</h2>
          
          <div>
            <ul style={{ paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem" }}><strong>Browser:</strong> Chrome, Firefox, Edge, or Safari (latest versions)</li>
              <li style={{ marginBottom: "0.75rem" }}><strong>Optional:</strong> MIDI keyboard with USB connection</li>
              <li style={{ marginBottom: "0.75rem" }}><strong>Permissions:</strong> Browser permissions for MIDI devices and microphone (for acoustic piano detection)</li>
            </ul>
          </div>
        </section>
        
        <section className="explore-more" style={{
          textAlign: "center",
          marginBottom: "3rem",
          padding: "2rem",
          borderRadius: "12px",
          backgroundColor: "var(--apple-gray-50)",
          border: "1px solid var(--apple-gray-200)"
        }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: "600",
            marginBottom: "1.5rem",
            color: "var(--apple-gray-900)"
          }}>Explore More HarmoniCode Games</h2>
          
          <p style={{
            fontSize: "1.125rem",
            color: "var(--apple-gray-700)",
            maxWidth: "600px",
            margin: "0 auto 2rem"
          }}>
            Discover our full collection of music games designed to make learning fun and effective
          </p>
          
          <Link href="/" style={{
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
            Return to Homepage
          </Link>
        </section>
      </div>
    </div>
  );
} 