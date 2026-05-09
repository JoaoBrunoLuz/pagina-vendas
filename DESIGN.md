---
name: Kinetic Noir
colors:
  surface: '#121317'
  surface-dim: '#121317'
  surface-bright: '#38393d'
  surface-container-lowest: '#0d0e12'
  surface-container-low: '#1a1b1f'
  surface-container: '#1e1f23'
  surface-container-high: '#292a2e'
  surface-container-highest: '#343539'
  on-surface: '#e3e2e7'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e3e2e7'
  inverse-on-surface: '#2f3034'
  outline: '#8b90a0'
  outline-variant: '#414755'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e69'
  primary-container: '#4b8eff'
  on-primary-container: '#00285c'
  inverse-primary: '#005bc1'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#c8c6c8'
  on-tertiary: '#303032'
  tertiary-container: '#919092'
  on-tertiary-container: '#29292b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e4e2e4'
  tertiary-fixed-dim: '#c8c6c8'
  on-tertiary-fixed: '#1b1b1d'
  on-tertiary-fixed-variant: '#474649'
  background: '#121317'
  on-background: '#e3e2e7'
  surface-variant: '#343539'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
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
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  stat-value:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is engineered for a high-performance smartwatch landing page, targeting tech-enthusiasts and health-conscious professionals. The brand personality is precise, authoritative, and sophisticated. It adopts a **Minimalist High-Contrast** style with a focus on depth through tonal layering rather than excessive ornamentation.

The visual direction prioritizes a "dark mode by default" aesthetic to mirror the premium hardware of a smartwatch. The UI should evoke a sense of advanced engineering and seamless connectivity. Motion should be utilized sparingly but with high intent—smooth, linear-to-ease transitions that mimic the fluidity of a high-refresh-rate wearable display.

## Colors

The color strategy for the design system utilizes a deep-black foundation to provide an infinite canvas for high-technology imagery. 

- **Primary (Electric Blue):** Reserved exclusively for interactive elements, call-to-actions, and critical health data highlights. It represents the "pulse" of the device.
- **Secondary (Deep Black):** The primary background surface (#121212) which creates a seamless blend with the smartwatch hardware photography.
- **Tertiary (Charcoal):** Used for container backgrounds, cards, and section dividers to create subtle structural hierarchy.
- **Neutrals:** A range of cool grays used for secondary text and decorative borders to maintain legibility without distracting from the primary content.

## Typography

The design system employs a dual-font strategy. **Space Grotesk** is utilized for headlines and data visualizations to inject a technical, futuristic edge. Its geometric construction complements the precision of hardware engineering. **Inter** is used for all body copy and UI labels, ensuring maximum readability and a professional, systematic appearance. 

Key data points—such as heart rate or battery life—should be treated with the `stat-value` style to ensure they are the focal point of health-related sections.

## Layout & Spacing

The design system uses a **Fixed Grid** approach for the desktop landing page, centered within a 1280px container. A 12-column grid provides the framework, with generous vertical spacing (80px sections) to allow the high-quality product photography to breathe.

The spacing rhythm is based on a 4px baseline, ensuring all components and containers align to a mathematical scale. Padding within cards and UI components should lean towards the `md` (24px) unit to maintain the minimalist, airy aesthetic characteristic of premium technology brands.

## Elevation & Depth

In the design system, depth is communicated through **Tonal Layers** and **Subtle Shadows**. Since the interface is primarily dark, standard black shadows are ineffective. 

- **Surface Levels:** The base background is #121212. Elevated cards use #1C1C1E. 
- **Shadows:** Use extremely soft, high-diffusion shadows (Blur: 30px, Opacity: 40%) with a slight blue tint (#000000) to create a lift effect on interactive cards.
- **Glassmorphism:** Apply a subtle backdrop blur (12px) to the navigation bar to maintain context of the content scrolling beneath it, using a semi-transparent charcoal fill.

## Shapes

The design system uses a **Rounded** shape language to echo the physical form of the smartwatch casing. A standard radius of 12px-16px is applied to all primary containers and cards. 

Interactive elements like buttons use the same radius to maintain consistency. This softness balances the "hard" tech feel of the color palette and typography, making the technology feel more ergonomic and human-centric.

## Components

### Buttons
Primary CTAs are solid Electric Blue with white or high-contrast black text. They feature a subtle inner glow to simulate a backlit screen. Secondary buttons use a "ghost" style with a 1px Charcoal border and no fill.

### Cards & Stats
Health metrics are displayed in cards with #1C1C1E backgrounds. These cards use thin-line (1px or 1.5px stroke) icons in Electric Blue. Icons must be simple and geometric, avoiding complex fills.

### Input Fields
Inputs for newsletters or pre-orders should be dark-themed with a subtle Charcoal border that glows Electric Blue upon focus. 

### Chips & Tags
Used for device features (e.g., "GPS," "50m Water Resistant"). These are small, low-contrast pills with `label-caps` typography and a 1px border.

### Connectivity Icons
Thin-line iconography is essential. Use a consistent stroke weight across all icons (health, connectivity, battery) to ensure a unified visual language that feels part of the same operating system.