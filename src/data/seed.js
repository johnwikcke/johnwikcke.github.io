export const profile = {
  name: "Kuldipsinh B. Jadeja",
  title: "Creative Developer & Engineer",
  age: 20,
  education: "B.Tech - Computer Science and Engineering",
  bio: "I craft digital experiences that blend retro aesthetics with modern performance. Currently exploring the frontiers of web development.",
  social: {
    github: "https://github.com/kuldip-jadeja",
    linkedin: "https://linkedin.com/in/kuldip-jadeja",
    email: "mailto:hello@example.com"
  }
};

export const projects = [
  {
    id: 1,
    title: "ReelMind",
    description: "AI-Powered Instagram Reel Knowledge System. Automatically transcribes audio using Whisper AI and analyzes visual content with Llama Vision for deep insights.",
    tech: ["Whisper AI", "Llama Vision", "Python", "React", "Entity Extraction"],
    image: "https://placehold.co/600x400/1a1a24/ff2a6d?text=ReelMind+AI",
    link: "https://github.com/johnwikcke/REELMIND-instagram-reel-knowledge-system.git",
    details: "One-Click Save functionality where you simply paste a link. The AI then performs transcription (audio-to-text), visual recognition (identifying apps/code/websites), and extracts key entities automatically.",
    features: [
      "🤖 One-Click Save: Paste an Instagram Reel link, and we handle the rest.",
      "📝 AI Transcription: Converts audio to text using Whisper.",
      "👁️ Visual Recognition: 'Sees' the video content (apps, websites, code) using Llama Vision.",
      "🔍 Entity Extraction: Automatically identifies tools and keywords.",
      "⚡ Instant Analysis: fast processing pipeline."
    ],
    stackDetails: [
      { category: "AI Models", items: ["Whisper AI", "Llama Vision"] },
      { category: "Backend", items: ["Python", "FastAPI/Flask"] },
      { category: "Frontend", items: ["React", "TailwindCSS"] },
      { category: "Tools", items: ["FFmpeg", "OpenAI API"] }
    ],
    installation: [
      "git clone https://github.com/johnwikcke/REELMIND-instagram-reel-knowledge-system.git",
      "cd REELMIND-instagram-reel-knowledge-system",
      "pip install -r requirements.txt",
      "python app.py"
    ],
    usage: "Paste an Instagram Reel URL to get a comprehensive summary including transcription and visual analysis."
  },
  {
    id: 2,
    title: "File Cleaner Pro",
    description: "A Gen-Z style web application for analyzing and cleaning up large files on your PC. Built with Flask and modern glassmorphism UI.",
    tech: ["Python Flask", "HTML5/CSS3", "Glassmorphism", "Multi-threading"],
    image: "https://placehold.co/600x400/1a1a24/05d9e8?text=File+Cleaner+Pro",
    link: "https://github.com/johnwikcke/Scripts.git",
    details: "Fast scanning with multi-threaded analysis to find space-hogging files (>5GB, 1-5GB). Features real-time progress tracking, smart filtering for system files, and JSON export.",
    features: [
      "✨ Beautiful UI: Modern, Gen-Z inspired design with glassmorphism effects",
      "⚡ Fast Scanning: Multi-threaded file analysis for quick results",
      "🛡️ Smart Filtering: Avoids system files while finding space-hogging files",
      "📊 Real-time Updates: Live progress tracking during scans",
      "📱 Mobile Responsive: Works great on all devices",
      "📥 Download Results: Export scan results as JSON"
    ],
    stackDetails: [
      { category: "Backend", items: ["Python Flask"] },
      { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript"] },
      { category: "Styling", items: ["Custom CSS", "Glassmorphism", "Font Awesome"] },
      { category: "Core", items: ["Multi-threading", "File I/O"] }
    ],
    installation: [
      "git clone https://github.com/johnwikcke/Scripts.git",
      "cd Scripts",
      "pip install -r requirements.txt",
      "python app.py"
    ],
    usage: "Navigate to http://localhost:5000. Click 'Start Scan' to begin analyzing your drives. Share your IP with friends to let them use the app!"
  }
];


export const skills = [
  { name: "React / Next.js", level: 90, category: "Frontend" },
  { name: "JavaScript / TypeScript", level: 85, category: "Languages" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "CSS / Tailwind", level: 95, category: "Styling" },
  { name: "Git / GitHub", level: 80, category: "Tools" },
  { name: "Figma", level: 70, category: "Design" }
];

export const experiments = [
  {
    id: 101,
    title: "Glitch Text Effect",
    description: "Failed attempt at a matrix-style rain effect. Turned into a cool glitch text generator.",
    status: "Buggy",
    codeSnippet: "const glitch = () => { ... }"
  },
  {
    id: 102,
    title: "Infinite Scroll 3D",
    description: "Tried to make a 3D tunnel scroll. Performance was terrible on mobile.",
    status: "Abandoned",
    codeSnippet: "<Canvas>...</Canvas>"
  }
];
