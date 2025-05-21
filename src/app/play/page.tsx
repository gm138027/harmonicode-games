import React from 'react';
import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Play Piano Games | HarmoniCode Games',
  description: 'Play our interactive online piano games right in your browser. Learn piano and develop musical skills through engaging gameplay with HarmoniCode Games.',
  keywords: 'play piano games, online piano, harmonicode piano game, interactive music game, piano learning game, Midiano',
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
            Play Piano with HarmoniCode Games
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
              <button style={{
                backgroundColor: "var(--apple-green)",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "0.5rem 1rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                cursor: "pointer"
              }}>
                Fullscreen
              </button>
            </div>
          </div>
          
          <iframe 
            src="https://app.midiano.com/" 
            allow="midi; microphone; camera" 
            style={{
              width: "100%",
              height: "600px",
              border: "none"
            }}
            title="Midiano - Learn piano in your browser"
          />
        </section>
        
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
              }}>Keyboard Controls</h3>
              
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "var(--apple-blue)", marginRight: "0.5rem", fontWeight: "bold" }}>Space</span> 
                  Play/Pause the current song
                </li>
                <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "var(--apple-blue)", marginRight: "0.5rem", fontWeight: "bold" }}>↑/↓</span> 
                  Adjust playback speed
                </li>
                <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "var(--apple-blue)", marginRight: "0.5rem", fontWeight: "bold" }}>←/→</span> 
                  Navigate through the song
                </li>
                <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "var(--apple-blue)", marginRight: "0.5rem", fontWeight: "bold" }}>A-Z keys</span> 
                  Play piano notes (when computer keyboard is selected)
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
          }}>Game Features</h2>
          
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
                Visual Note Guide
              </h3>
              <p style={{ color: "var(--apple-gray-700)" }}>
                See notes falling down the screen, making it easy to know which keys to press and when
              </p>
            </div>
            
            <div style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
              border: "1px solid var(--apple-gray-200)"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🎹</div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.75rem" }}>
                Customizable Experience
              </h3>
              <p style={{ color: "var(--apple-gray-700)" }}>
                Adjust playback speed, enable wait mode, and customize your learning experience
              </p>
            </div>
            
            <div style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
              border: "1px solid var(--apple-gray-200)"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📚</div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.75rem" }}>
                Song Library
              </h3>
              <p style={{ color: "var(--apple-gray-700)" }}>
                Access a wide selection of songs or upload your own MIDI files to practice
              </p>
            </div>
            
            <div style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
              border: "1px solid var(--apple-gray-200)"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🔄</div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.75rem" }}>
                Loop & Practice Mode
              </h3>
              <p style={{ color: "var(--apple-gray-700)" }}>
                Repeat difficult sections to perfect your skills with targeted practice
              </p>
            </div>
          </div>
        </section>
        
        <section style={{
          margin: "4rem 0",
          padding: "2rem",
          backgroundColor: "white",
          borderRadius: "18px",
          textAlign: "center",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.08)",
          border: "1px solid var(--apple-gray-200)"
        }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: "600",
            marginBottom: "1.25rem"
          }}>Explore More HarmoniCode Games</h2>
          <p style={{
            fontSize: "1.125rem",
            color: "var(--apple-gray-700)",
            maxWidth: "800px",
            margin: "0 auto 1.75rem"
          }}>
            Discover our full collection of interactive music games and learning experiences
          </p>
          <Link href="/" style={{
            background: "linear-gradient(135deg, var(--apple-blue), var(--apple-purple))",
            color: "white",
            padding: "0.75rem 2rem",
            borderRadius: "999px",
            fontWeight: "500",
            textDecoration: "none",
            display: "inline-block",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)"
          }}>
            View All Games
          </Link>
        </section>
      </div>
    </div>
  );
} 