// Central data — waypoints, section nodes, collectibles, obstacles

// Road circuit: start → each section → back to start
export const WAYPOINTS = [
  [0, 0, 0],       // Spawn
  [18, 0, 18],     // Timeline
  [-22, 0, 15],    // Skills
  [-30, 0, -5],    // Awards
  [-18, 0, -15],   // About
  [0, 0, -28],     // Contact
  [20, 0, -18],    // Projects
  [0, 0, 0],       // Back to spawn
];

// Big section orbs — one per waypoint (excluding spawn duplication)
export const SECTION_NODES = [
  {
    id: "timeline",
    label: "Timeline",
    color: "#fbbf24",
    emissive: "#92400e",
    position: [18, 0, 18],
    content: "2018 → 2024: first code to Engineering + Master diplomas.",
    shape: "octahedron",
    emoji: "📅",
  },
  {
    id: "skills",
    label: "Skills",
    color: "#f472b6",
    emissive: "#9d174d",
    position: [-22, 0, 15],
    content: "Python · JS · Dart · React/Vue · Flutter · Odoo · PyTorch · YOLO · Unity · SQL",
    shape: "icosahedron",
    emoji: "⚡",
  },
  {
    id: "awards",
    label: "Awards",
    color: "#fb923c",
    emissive: "#9a3412",
    position: [-30, 0, -5],
    content: "2× Hackathon 2nd place · Soliya Global Circles · Mentor @ HNS-RE2SD 2024",
    shape: "icosahedron",
    emoji: "🏆",
  },
  {
    id: "about",
    label: "About Me",
    color: "#00e5ff",
    emissive: "#005f6b",
    position: [-18, 0, -15],
    content: "AI & Industrial CS Engineer from Algeria. Odoo Dev at ITComp. Age 25.",
    shape: "octahedron",
    emoji: "👤",
  },
  {
    id: "contact",
    label: "Contact",
    color: "#34d399",
    emissive: "#065f46",
    position: [0, 0, -28],
    content: "Batna | Algiers, Algeria · Part-time freelance available!",
    shape: "dodecahedron",
    emoji: "✉️",
  },
  {
    id: "projects",
    label: "Projects",
    color: "#a78bfa",
    emissive: "#4c1d95",
    position: [20, 0, -18],
    content: "12+ projects: AI collar sim, Chess clone, Guessord, AR monitoring & more.",
    shape: "dodecahedron",
    emoji: "🚀",
  },
];

// Helper: point at fraction t along segment from→to
const lerp2 = (from, to, t) => [
  from[0] + (to[0] - from[0]) * t,
  0,
  from[2] + (to[2] - from[2]) * t,
];

// Small collectibles — 2 per road segment (placed at t=0.35 and t=0.65)
const segs = WAYPOINTS.slice(0, -1).map((wp, i) => [wp, WAYPOINTS[i + 1]]);

export const COLLECTIBLES = [
  // Seg 0: Spawn → Timeline
  { id: "s0a", label: "2018 · First Code", content: "First line written at age 17 — never looked back.", color: "#fbbf24", position: lerp2(segs[0][0], segs[0][1], 0.35) },
  { id: "s0b", label: "2024 · Graduated", content: "Engineering + Master Diplomas in INEAI & AI.", color: "#fbbf24", position: lerp2(segs[0][0], segs[0][1], 0.65) },

  // Seg 1: Timeline → Skills
  { id: "s1a", label: "React & Vue Expert", content: "Multiple production apps: portfolio, WiSetFi, Guessord.", color: "#f472b6", position: lerp2(segs[1][0], segs[1][1], 0.35) },
  { id: "s1b", label: "Python & AI Stack", content: "PyTorch · YOLO · computer vision · voice recognition.", color: "#f472b6", position: lerp2(segs[1][0], segs[1][1], 0.65) },

  // Seg 2: Skills → Awards
  { id: "s2a", label: "Hackathon x2", content: "2nd place at 3.6 Coding & Startup City hackathons.", color: "#fb923c", position: lerp2(segs[2][0], segs[2][1], 0.35) },
  { id: "s2b", label: "Mentor 2024", content: "Mentored at HNS-RE2SD university hackathon.", color: "#fb923c", position: lerp2(segs[2][0], segs[2][1], 0.65) },

  // Seg 3: Awards → About
  { id: "s3a", label: "Algeria 🇩🇿", content: "Based in Batna & Algiers. Speaks Arabic, French, English.", color: "#00e5ff", position: lerp2(segs[3][0], segs[3][1], 0.35) },
  { id: "s3b", label: "Odoo Developer", content: "Currently building ERP solutions at ITComp, Algiers.", color: "#00e5ff", position: lerp2(segs[3][0], segs[3][1], 0.65) },

  // Seg 4: About → Contact
  { id: "s4a", label: "Freelance ✓", content: "Available for part-time freelance projects.", color: "#34d399", position: lerp2(segs[4][0], segs[4][1], 0.35) },
  { id: "s4b", label: "Email Ready", content: "aymenaymed.houasnia@itcomp-dz.com", color: "#34d399", position: lerp2(segs[4][0], segs[4][1], 0.65) },

  // Seg 5: Contact → Projects
  { id: "s5a", label: "Chess.com Clone", content: "React + TypeScript · drag & drop · full chess logic.", color: "#a78bfa", position: lerp2(segs[5][0], segs[5][1], 0.35) },
  { id: "s5b", label: "AI Neck Collar", content: "YOLOv8 posture detection + Three.js 3D visualization.", color: "#a78bfa", position: lerp2(segs[5][0], segs[5][1], 0.65) },

  // Seg 6: Projects → Spawn
  { id: "s6a", label: "Guessord Game", content: "Contexto clone — Vue3 + AI word similarity engine.", color: "#818cf8", position: lerp2(segs[6][0], segs[6][1], 0.35) },
  { id: "s6b", label: "AR Data Monitor", content: "Unity + AR Core + Vuforia real-time 3D overlays.", color: "#818cf8", position: lerp2(segs[6][0], segs[6][1], 0.65) },
];

// Obstacles for circle collision [x, z, radius]
export const OBSTACLES = [
  // Trees (perimeter, radius 0.85)
  [-36, -36, 0.85], [-31, -40, 0.85], [-40, -30, 0.85],
  [36, -36, 0.85], [33, -40, 0.85], [40, -31, 0.85],
  [-36, 36, 0.85], [-33, 40, 0.85], [-40, 31, 0.85],
  [36, 36, 0.85], [31, 40, 0.85], [40, 30, 0.85],
  [-42, 0, 0.85], [-42, 12, 0.85], [-42, -12, 0.85],
  [42, 0, 0.85], [42, 12, 0.85], [42, -12, 0.85],
  [0, -44, 0.85], [12, -44, 0.85], [-12, -44, 0.85],
  [0, 44, 0.85], [12, 44, 0.85], [-12, 44, 0.85],

  // Neon pillars (moved to avoid road: were ±14 → now asymmetric off-road, radius 0.45)
  [-16, -12, 0.45], [16, -11, 0.45],
  [-15, 13, 0.45], [17, 12, 0.45],
  [0, -24, 0.45], [-24, 0, 0.45],
  [24, 0, 0.45], [0, 24, 0.45],

  // Street lamps (radius 0.3)
  [-18, -8, 0.3], [18, -8, 0.3],
  [-18, 8, 0.3], [18, 8, 0.3],
  [0, -20, 0.3], [0, 20, 0.3],
  [-25, 0, 0.3], [25, 0, 0.3],

  // Big section nodes — can approach but not enter (radius 2.0)
  [18, 18, 2.0],    // Timeline
  [-22, 15, 2.0],   // Skills
  [-30, -5, 2.0],   // Awards
  [-18, -15, 2.0],  // About
  [0, -28, 2.0],    // Contact
  [20, -18, 2.0],   // Projects
];
