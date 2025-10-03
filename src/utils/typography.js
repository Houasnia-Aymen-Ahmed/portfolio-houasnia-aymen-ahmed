/**
 * Typography Utility Functions
 * Provides consistent typography classes and utilities
 */

/**
 * Typography scale mapping
 */
export const typography = {
  // Display sizes - for hero sections and large headings
  display: "text-display font-poppins",
  displaySm: "text-display-sm font-poppins",

  // Heading sizes - for section and subsection headings
  h1: "text-h1 font-poppins",
  h2: "text-h2 font-poppins",
  h3: "text-h3 font-poppins",
  h4: "text-h4 font-poppins",
  h5: "text-h5 font-poppins",
  h6: "text-h6 font-poppins",

  // Body text sizes - for content
  bodyLg: "text-body-lg font-inter",
  body: "text-body font-inter",
  bodySm: "text-body-sm font-inter",

  // Utility sizes - for labels, captions, etc.
  caption: "text-caption font-inter",
  overline: "text-overline font-inter",
};

/**
 * Get typography class for a specific element type
 */
export function getTypographyClass(elementType, variant = "default") {
  const variants = {
    // Hero section variants
    hero: {
      title: typography.display,
      subtitle: typography.h2,
      description: typography.bodyLg,
    },

    // Section variants
    section: {
      title: typography.h2,
      subtitle: typography.h3,
      description: typography.body,
    },

    // Card variants
    card: {
      title: typography.h4,
      subtitle: typography.h5,
      description: typography.bodySm,
      caption: typography.caption,
    },

    // Navigation variants
    nav: {
      title: typography.h6,
      link: typography.bodySm,
    },

    // Form variants
    form: {
      label: typography.bodySm,
      input: typography.body,
      help: typography.caption,
    },

    // Default variants
    default: {
      title: typography.h3,
      subtitle: typography.h4,
      description: typography.body,
      caption: typography.caption,
    },
  };

  return variants[variant]?.[elementType] || typography.body;
}

/**
 * Responsive typography classes
 */
export const responsiveTypography = {
  // Hero title that scales down on smaller screens
  heroTitle:
    "text-display sm:text-display-sm md:text-display lg:text-display font-poppins",

  // Section title that scales appropriately
  sectionTitle: "text-h3 sm:text-h2 md:text-h2 font-poppins",

  // Card title that scales down on mobile
  cardTitle: "text-h5 sm:text-h4 md:text-h4 font-poppins",

  // Body text that scales appropriately
  bodyText: "text-body-sm sm:text-body md:text-body font-inter",

  // Caption that stays consistent
  caption: "text-caption sm:text-caption md:text-body-sm font-inter",

  // Project title that scales appropriately
  projectTitle: "text-h5 sm:text-h4 md:text-h4 font-poppins",

  // Skill tags that scale appropriately
  skillTag: "text-caption sm:text-body-sm md:text-body-sm font-inter",

  // Timeline content that scales appropriately
  timelineTitle: "text-h5 sm:text-h5 md:text-h4 font-poppins",
  timelineContent: "text-body-sm sm:text-body md:text-body font-inter",

  // Navigation text that scales appropriately
  navText: "text-body-sm sm:text-body md:text-body font-inter",
};

/**
 * Typography color combinations
 */
export const typographyColors = {
  // Primary text colors
  primary: "text-light-text-primary dark:text-dark-text-primary",
  secondary: "text-light-text-secondary dark:text-dark-text-secondary",

  // Accent colors
  accent: "text-accent-primary dark:text-accent-primary-light",
  accentSecondary: "text-accent-secondary dark:text-accent-secondary-light",

  // Status colors
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  error: "text-red-600 dark:text-red-400",
  info: "text-blue-600 dark:text-blue-400",

  // Neutral colors
  muted: "text-gray-500 dark:text-gray-400",
  white: "text-white",
  black: "text-black dark:text-white",
};

/**
 * Complete typography class builder
 */
export function buildTypographyClass(
  elementType,
  variant = "default",
  color = "primary",
  additionalClasses = ""
) {
  const typographyClass = getTypographyClass(elementType, variant);
  const colorClass = typographyColors[color] || typographyColors.primary;

  return `${typographyClass} ${colorClass} ${additionalClasses}`.trim();
}

/**
 * Typography presets for common use cases
 */
export const typographyPresets = {
  // Hero section
  hero: {
    title: buildTypographyClass("title", "hero", "primary"),
    subtitle: buildTypographyClass("subtitle", "hero", "secondary"),
    description: buildTypographyClass("description", "hero", "secondary"),
  },

  // Section headers
  section: {
    title: buildTypographyClass("title", "section", "primary"),
    subtitle: buildTypographyClass("subtitle", "section", "secondary"),
    description: buildTypographyClass("description", "section", "secondary"),
  },

  // Card content
  card: {
    title: buildTypographyClass("title", "card", "primary"),
    subtitle: buildTypographyClass("subtitle", "card", "secondary"),
    description: buildTypographyClass("description", "card", "secondary"),
    caption: buildTypographyClass("caption", "card", "muted"),
  },

  // Navigation
  nav: {
    title: buildTypographyClass("title", "nav", "primary"),
    link: buildTypographyClass("link", "nav", "secondary"),
  },

  // Forms
  form: {
    label: buildTypographyClass("label", "form", "primary"),
    input: buildTypographyClass("input", "form", "primary"),
    help: buildTypographyClass("help", "form", "muted"),
  },
};

export default {
  typography,
  getTypographyClass,
  responsiveTypography,
  typographyColors,
  buildTypographyClass,
  typographyPresets,
};
