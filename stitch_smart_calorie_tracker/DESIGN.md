---
name: Vitality & Clarity
colors:
  surface: '#fbf8ff'
  surface-dim: '#dad9e3'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2fd'
  surface-container: '#eeedf7'
  surface-container-high: '#e8e7f1'
  surface-container-highest: '#e3e1ec'
  on-surface: '#1a1b22'
  on-surface-variant: '#3c4a42'
  inverse-surface: '#2f3038'
  inverse-on-surface: '#f1effa'
  outline: '#6c7a71'
  outline-variant: '#bbcabf'
  surface-tint: '#006c49'
  primary: '#006c49'
  on-primary: '#ffffff'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#4edea3'
  secondary: '#006c4b'
  on-secondary: '#ffffff'
  secondary-container: '#64f9bc'
  on-secondary-container: '#00714e'
  tertiary: '#5d5e60'
  on-tertiary: '#ffffff'
  tertiary-container: '#a2a3a4'
  on-tertiary-container: '#38393b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#68fcbf'
  secondary-fixed-dim: '#45dfa4'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#e2e2e3'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#fbf8ff'
  on-background: '#1a1b22'
  surface-variant: '#e3e1ec'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin-mobile: 16px
  container-margin-desktop: 40px
  gutter: 16px
---

## Brand & Style

This design system is built upon the pillars of **precision, vitality, and serenity**. The target audience comprises health-conscious individuals who require a friction-less tool to manage their nutritional data without the anxiety often associated with calorie tracking. 

The aesthetic follows a **Modern Minimalist** movement with a focus on high-quality whitespace and a "Quiet UI" philosophy. By reducing visual noise, the design system ensures that the user's data remains the focal point. The emotional response should be one of professional reliability—evoking the feeling of a clean, modern clinical environment that has been softened by approachable, lifestyle-oriented design.

## Colors

The palette is anchored by **Active Green**, a vibrant and fresh hue that symbolizes health, growth, and "success" (reaching goals). This is balanced by a secondary **Mint** for softer accents and progress indicators. 

The background utilizes high-luminance whites to maintain a "clinical-clean" feel, while the neutral scale leans toward cool slates to provide contrast without the harshness of pure black. Functional colors (success/warning/error) should be integrated sparingly, ensuring the primary green remains the dominant signal for positive health habits.

## Typography

The typography system relies exclusively on **Inter** to leverage its exceptional legibility and systematic, utilitarian feel. The hierarchy is strictly enforced through weight variations rather than excessive size changes to maintain a compact, data-rich environment. 

For calorie counts and macronutrient data, use `headline-md` with semi-bold weights to ensure immediate scanning. Sub-labels and metadata should utilize `label-sm` with slight tracking increases to maintain readability at small scales on mobile devices.

## Layout & Spacing

This design system employs an **8px linear scale** to ensure mathematical harmony across all components. The layout is based on a **12-column fluid grid** for desktop and a **4-column fluid grid** for mobile devices.

Content should be contained within "Surface Cards" that utilize `md` (16px) or `lg` (24px) internal padding. Negative space is used aggressively to separate meal categories and nutritional summaries, avoiding the use of heavy dividers. On mobile, vertical rhythm is maintained by a consistent `lg` (24px) stack spacing between major dashboard modules.

## Elevation & Depth

To maintain a lightweight feel, this design system avoids heavy shadows. Instead, it utilizes **Ambient Depth**—a combination of subtle 1px borders in a soft gray (`#E4E4E7`) and extremely diffused, low-opacity shadows.

Hierarchy is created through "Tonal Stepping":
1. **Level 0 (Background):** Pure white or a very light gray (#F8FAFC).
2. **Level 1 (Cards):** Pure white with a 4px blur, 2% opacity shadow.
3. **Level 2 (Modals/Overlays):** White with a 12px blur, 6% opacity shadow to imply a distinct lift from the workspace.

Interactive elements like buttons should feel "set upon" the surface rather than "carved into" it.

## Shapes

The shape language is defined by **Soft Geometricism**. A standard corner radius of `0.5rem` (8px) is applied to most containers to strike a balance between professional structure and approachable softness.

Interactive components like primary buttons and input fields should follow this 8px rule, while smaller elements like "Nutrient Tags" or "Status Chips" should use the `rounded-xl` (1.5rem) setting to create a pill-shaped appearance, distinguishing them from structural containers.

## Components

### Buttons
Primary buttons use the Active Green background with white text. They should have a minimum height of 48px on mobile for accessibility. Secondary buttons use a ghost style with a subtle border and the neutral text color.

### Progress Indicators
Progress bars (for daily calorie targets) should be thick (8px-12px height) with fully rounded ends. Use a background of 10% opacity primary color to show the "track" and 100% opacity for the "fill."

### Cards
Dashboard cards are the primary container. They should have no visible border but a soft Level 1 shadow. Internal content should be grouped using logical spacing rather than internal lines.

### Inputs
Search bars (for food logging) and numeric inputs should use a light gray background (#F1F5F9) rather than a white background to clearly define the hit area against the white page. On focus, the border should transition to the Primary Green.

### Chips & Tags
Macronutrient tags (Carbs, Protein, Fat) should use subtle, desaturated versions of their own unique colors (e.g., pale blue, pale red, pale yellow) to allow for quick identification without overwhelming the primary green brand color.