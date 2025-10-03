/**
 * Spacing Utility Functions
 * Provides consistent spacing classes and utilities
 */

/**
 * Spacing scale mapping
 */
export const spacing = {
  // Base spacing scale
  xs: "p-xs", // 4px
  sm: "p-sm", // 8px
  md: "p-md", // 12px
  lg: "p-lg", // 16px
  xl: "p-xl", // 24px
  "2xl": "p-2xl", // 32px
  "3xl": "p-3xl", // 48px
  "4xl": "p-4xl", // 64px
  "5xl": "p-5xl", // 96px
  "6xl": "p-6xl", // 128px

  // Component-specific spacing
  section: "p-section", // 80px
  card: "p-card", // 24px
  button: "p-button", // 12px
  input: "p-input", // 12px
  nav: "p-nav", // 16px
};

/**
 * Margin spacing scale
 */
export const margin = {
  xs: "m-xs", // 4px
  sm: "m-sm", // 8px
  md: "m-md", // 12px
  lg: "m-lg", // 16px
  xl: "m-xl", // 24px
  "2xl": "m-2xl", // 32px
  "3xl": "m-3xl", // 48px
  "4xl": "m-4xl", // 64px
  "5xl": "m-5xl", // 96px
  "6xl": "m-6xl", // 128px

  // Component-specific margins
  section: "m-section", // 80px
  card: "m-card", // 24px
  button: "m-button", // 12px
  input: "m-input", // 12px
  nav: "m-nav", // 16px
};

/**
 * Gap spacing scale
 */
export const gap = {
  xs: "gap-xs", // 4px
  sm: "gap-sm", // 8px
  md: "gap-md", // 12px
  lg: "gap-lg", // 16px
  xl: "gap-xl", // 24px
  "2xl": "gap-2xl", // 32px
  "3xl": "gap-3xl", // 48px
  "4xl": "gap-4xl", // 64px
  "5xl": "gap-5xl", // 96px
  "6xl": "gap-6xl", // 128px
};

/**
 * Get spacing class for a specific component type
 */
export function getSpacingClass(componentType, variant = "default") {
  const variants = {
    // Section variants
    section: {
      padding: "p-section",
      margin: "m-section",
      gap: "gap-xl",
    },

    // Card variants
    card: {
      padding: "p-card",
      margin: "m-lg",
      gap: "gap-md",
    },

    // Button variants
    button: {
      padding: "p-button",
      margin: "m-sm",
      gap: "gap-sm",
    },

    // Input variants
    input: {
      padding: "p-input",
      margin: "m-sm",
      gap: "gap-sm",
    },

    // Navigation variants
    nav: {
      padding: "p-nav",
      margin: "m-md",
      gap: "gap-md",
    },

    // Default variants
    default: {
      padding: "p-lg",
      margin: "m-lg",
      gap: "gap-md",
    },
  };

  return variants[variant]?.[componentType] || variants.default[componentType];
}

/**
 * Responsive spacing classes
 */
export const responsiveSpacing = {
  // Section spacing that scales on mobile
  section: "p-section sm:p-4xl md:p-section",

  // Card spacing that scales appropriately
  card: "p-card sm:p-xl md:p-card",

  // Button spacing that stays consistent
  button: "p-button",

  // Input spacing that stays consistent
  input: "p-input",

  // Navigation spacing that scales appropriately
  nav: "p-nav sm:p-lg md:p-nav",

  // Grid gap that scales appropriately
  gridGap: "gap-md sm:gap-lg md:gap-xl",

  // Flex gap that scales appropriately
  flexGap: "gap-sm sm:gap-md md:gap-lg",
};

/**
 * Spacing presets for common use cases
 */
export const spacingPresets = {
  // Section spacing
  section: {
    padding: "p-section sm:p-4xl md:p-section",
    margin: "m-section sm:m-4xl md:m-section",
    gap: "gap-xl sm:gap-2xl md:gap-xl",
  },

  // Card spacing
  card: {
    padding: "p-card sm:p-xl md:p-card",
    margin: "m-lg sm:m-xl md:m-lg",
    gap: "gap-md sm:gap-lg md:gap-md",
  },

  // Button spacing
  button: {
    padding: "p-button",
    margin: "m-sm",
    gap: "gap-sm",
  },

  // Input spacing
  input: {
    padding: "p-input",
    margin: "m-sm",
    gap: "gap-sm",
  },

  // Navigation spacing
  nav: {
    padding: "p-nav sm:p-lg md:p-nav",
    margin: "m-md sm:m-lg md:m-md",
    gap: "gap-md sm:gap-lg md:gap-md",
  },

  // Grid spacing
  grid: {
    padding: "p-lg sm:p-xl md:p-lg",
    margin: "m-lg sm:m-xl md:m-lg",
    gap: "gap-md sm:gap-lg md:gap-xl",
  },

  // Flex spacing
  flex: {
    padding: "p-md sm:p-lg md:p-md",
    margin: "m-md sm:m-lg md:m-md",
    gap: "gap-sm sm:gap-md md:gap-lg",
  },
};

/**
 * Complete spacing class builder
 */
export function buildSpacingClass(
  componentType,
  variant = "default",
  additionalClasses = ""
) {
  const spacingClass = getSpacingClass(componentType, variant);

  return `${spacingClass} ${additionalClasses}`.trim();
}

/**
 * Get responsive spacing class
 */
export function getResponsiveSpacingClass(componentType, variant = "default") {
  return (
    responsiveSpacing[componentType] ||
    spacingPresets[variant]?.[componentType] ||
    ""
  );
}

export default {
  spacing,
  margin,
  gap,
  getSpacingClass,
  responsiveSpacing,
  spacingPresets,
  buildSpacingClass,
  getResponsiveSpacingClass,
};
