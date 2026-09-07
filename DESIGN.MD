---
version: 1.0
name: Portfolio-Minimalismo-Corporativo
description: A clean, corporate-minimalist portfolio designed for a full-stack developer targeting business clients, managers, and institutions. The design is anchored by a high-trust, light-themed color palette with corporate blue accents ({colors.primary}), utilizing Roboto as the universal typeface for maximum legibility and a neutral, professional tone. Components use a subtle 8px border radius ({rounded.md}) to maintain a modern but structured geometry. The homepage functions as a high-conversion landing page presenting robust custom systems, while internal pages act as detailed case studies for projects like the "Bolsa de empleo municipal (+1800 postulantes)", "Sistema de gestión Club de Pescadores", and "Sistema de turnos IFVC".

colors:
  primary: "#005bb5"
  primary-pressed: "#00438b"
  on-primary: "#ffffff"
  canvas: "#ffffff"
  surface: "#f8f9fa"
  surface-soft: "#f1f3f5"
  hairline: "#e2e8f0"
  hairline-strong: "#cbd5e1"
  ink-deep: "#0f172a"
  ink: "#334155"
  slate: "#64748b"
  link-blue: "#2563eb"
  semantic-success: "#16a34a"

typography:
  hero-display:
    fontFamily: Roboto, sans-serif
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -1px
  heading-1:
    fontFamily: Roboto, sans-serif
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.20
  heading-2:
    fontFamily: Roboto, sans-serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.25
  heading-3:
    fontFamily: Roboto, sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.30
  body-lg:
    fontFamily: Roboto, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.60
  body-md:
    fontFamily: Roboto, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: Roboto, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
  button-md:
    fontFamily: Roboto, sans-serif
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.30
  badge-text:
    fontFamily: Roboto, sans-serif
    fontSize: 12px
    fontWeight: 500
    letterSpacing: 0.5px

rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px

spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  xxl: 64px
  hero: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    transition: "background-color 0.2s ease"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    border: "1px solid {colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card-project:
    backgroundColor: "{colors.canvas}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
  badge-tech:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.badge-text}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    borderBottom: "1px solid {colors.hairline}"
    padding: "{spacing.sm} {spacing.xl}"
  hero-section:
    backgroundColor: "{colors.surface}"
    padding: "{spacing.hero} {spacing.xl}"
---

## Overview

The portfolio utilizes a "Corporate Minimalist" aesthetic. It eschews flashy animations and complex layouts in favor of a highly structured, scanner-friendly grid that communicates stability, technical competence, and business value. 

## Copywriting & Tone
**Hero Headline:** "Desarrollo de sistemas a medida y soluciones empresariales."
**Hero Subtitle:** "Soy desarrollador full-stack y futuro Ingeniero en Sistemas. Construyo plataformas web robustas, paneles administrativos y herramientas digitales que optimizan procesos y resuelven problemas operativos reales."

## Projects Inventory (For Grid & Case Studies)
The UI must accommodate data structures for the following key projects:
1.  **Bolsa de Empleo Municipal:** (Municipio Villa Constitución) - High impact system managing +1800 applicants.
2.  **Sistema de Gestión y Carnets:** (Club de Pescadores) - Digitization of member records and access control.
3.  **Sistema de Turnos IFVC:** Educational institution scheduling system.
4.  **Página Institucional IFVC:** Public-facing organizational platform.
5.  **Sistema de Gestión Vadhora:** Professional firm administration system.
6.  **Sistema Prode CoPA:** Interactive platform for the 2026 World Cup.

## Layout & Architecture

### Homepage (The "What")
- **Hero Section:** Light gray surface (`{colors.surface}`) with deep ink text for the headline. Primary CTA ("Ver proyectos" or "Contactar") uses `{colors.primary}` with 8px rounding (`{rounded.md}`).
- **Tech Stack Bar:** A subtle, grayscale logo strip of primary technologies (React, Node.js, Laravel, Python, Django, etc.) below the hero to establish instant technical authority.
- **Project Grid:** A structured 2-column or 3-column CSS grid. Each project is housed in a `card-project` component.
  - Cards include a clean mockup or screenshot, the project title, a 2-line business impact summary, and `badge-tech` elements indicating the stack.
- **Contact/Footer:** Minimalist footer with direct email and LinkedIn links.

### Project Details / Case Studies (The "Why")
- Internal pages drop the grid for a single-column, long-form storytelling format.
- **Structure:** 
  1. The Problem (e.g., manual scheduling at IFVC).
  2. The Solution (Custom dashboard).
  3. The Impact (Metrics, scale, e.g., handling 1800+ users seamlessly).
- Typography shifts focus to `{typography.body-lg}` for readability.

## Design Principles
- **No pure blacks:** Use `{colors.ink-deep}` (#0f172a) instead of #000000 for high-contrast text to reduce eye strain.
- **Functional geometry:** The 8px border radius (`{rounded.md}`) on cards and buttons strikes the exact balance between an approachable digital product and a serious corporate tool.
- **Whitespace is structural:** Use `{spacing.xxl}` between major page sections to give the content room to breathe and convey premium positioning.