/**
 * Color Contrast Testing Utility
 * Tests WCAG AA compliance for text/background combinations
 */

// Color definitions from tailwind.config.js
const colors = {
  // Light theme backgrounds
  "light-bg": "#F3F4F6", // Tailwind gray-100
  "light-bg-alt": "#FFFFFF", // White

  // Dark theme backgrounds
  "dark-bg": "#0F172A", // Tailwind slate-900
  "dark-bg-alt": "#1E293B", // Tailwind slate-800

  // Text colors
  "light-text-primary": "#1F2937", // Tailwind gray-800
  "light-text-secondary": "#4B5563", // Tailwind gray-600
  "dark-text-primary": "#E2E8F0", // Tailwind slate-200
  "dark-text-secondary": "#94A3B8", // Tailwind slate-400

  // Accent colors - WCAG AA compliant
  "accent-primary": "#0369A1", // Tailwind sky-700 (WCAG AA compliant on light backgrounds)
  "accent-primary-darker": "#075985", // Tailwind sky-800 (for hover states)
  "accent-primary-light": "#38BDF8", // Tailwind sky-400 (for dark backgrounds)
  "accent-secondary": "#BE185D", // Tailwind pink-700 (WCAG AA compliant on light backgrounds)
  "accent-secondary-darker": "#9D174D", // Tailwind pink-800 (for hover states)
  "accent-secondary-light": "#F574AD", // Original pink (for dark backgrounds)
};

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Calculate relative luminance
 */
function getLuminance(rgb) {
  const { r, g, b } = rgb;
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 */
function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  if (!rgb1 || !rgb2) {
    return 0;
  }

  const lum1 = getLuminance(rgb1);
  const lum2 = getLuminance(rgb2);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Check WCAG compliance
 */
function checkWCAGCompliance(contrastRatio, level = "AA") {
  const requirements = {
    AA: { normal: 4.5, large: 3.0 },
    AAA: { normal: 7.0, large: 4.5 },
  };

  return {
    normal: contrastRatio >= requirements[level].normal,
    large: contrastRatio >= requirements[level].large,
    ratio: contrastRatio,
  };
}

/**
 * Test all color combinations
 */
export function testAllColorCombinations() {
  const combinations = [
    // Light theme combinations
    {
      text: colors["light-text-primary"],
      bg: colors["light-bg"],
      theme: "Light",
      context: "Primary text on main background",
    },
    {
      text: colors["light-text-primary"],
      bg: colors["light-bg-alt"],
      theme: "Light",
      context: "Primary text on alt background",
    },
    {
      text: colors["light-text-secondary"],
      bg: colors["light-bg"],
      theme: "Light",
      context: "Secondary text on main background",
    },
    {
      text: colors["light-text-secondary"],
      bg: colors["light-bg-alt"],
      theme: "Light",
      context: "Secondary text on alt background",
    },

    // Dark theme combinations
    {
      text: colors["dark-text-primary"],
      bg: colors["dark-bg"],
      theme: "Dark",
      context: "Primary text on main background",
    },
    {
      text: colors["dark-text-primary"],
      bg: colors["dark-bg-alt"],
      theme: "Dark",
      context: "Primary text on alt background",
    },
    {
      text: colors["dark-text-secondary"],
      bg: colors["dark-bg"],
      theme: "Dark",
      context: "Secondary text on main background",
    },
    {
      text: colors["dark-text-secondary"],
      bg: colors["dark-bg-alt"],
      theme: "Dark",
      context: "Secondary text on alt background",
    },

    // Accent color combinations
    {
      text: colors["accent-primary"],
      bg: colors["light-bg"],
      theme: "Light",
      context: "Accent primary on light background",
    },
    {
      text: colors["accent-primary-light"],
      bg: colors["dark-bg"],
      theme: "Dark",
      context: "Accent primary light on dark background",
    },
    {
      text: colors["accent-secondary"],
      bg: colors["light-bg"],
      theme: "Light",
      context: "Accent secondary on light background",
    },
    {
      text: colors["accent-secondary-light"],
      bg: colors["dark-bg"],
      theme: "Dark",
      context: "Accent secondary light on dark background",
    },
  ];

  return combinations.map((combo) => {
    const contrastRatio = getContrastRatio(combo.text, combo.bg);
    const compliance = checkWCAGCompliance(contrastRatio);

    return {
      ...combo,
      contrastRatio: Math.round(contrastRatio * 100) / 100,
      wcagAA: compliance.normal,
      wcagAALarge: compliance.large,
      status: compliance.normal ? "✅ PASS" : "❌ FAIL",
    };
  });
}

/**
 * Generate contrast report
 */
export function generateContrastReport() {
  const results = testAllColorCombinations();

  console.group("🎨 Color Contrast Report - WCAG AA Compliance");

  results.forEach((result) => {
    const status = result.wcagAA ? "✅" : "❌";
    console.log(`${status} ${result.theme} - ${result.context}`);
    console.log(`   Ratio: ${result.contrastRatio}:1 (Required: 4.5:1)`);
    console.log(`   Colors: ${result.text} on ${result.bg}`);
    console.log("");
  });

  const passed = results.filter((r) => r.wcagAA).length;
  const total = results.length;

  console.log(
    `📊 Summary: ${passed}/${total} combinations pass WCAG AA (${Math.round(
      (passed / total) * 100
    )}%)`
  );

  if (passed < total) {
    console.warn(
      "⚠️  Some combinations fail WCAG AA compliance. Consider adjusting colors."
    );
  } else {
    console.log("🎉 All combinations pass WCAG AA compliance!");
  }

  console.groupEnd();

  return results;
}

// Export individual functions for testing
export { getContrastRatio, checkWCAGCompliance, colors };
