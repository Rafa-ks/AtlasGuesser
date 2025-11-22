# Atlas Daily - Design System Guidelines

## Brand Overview
Atlas Daily is a geography guessing game featuring two game modes: emoji-based clues and characteristic comparisons. The design emphasizes minimalism, clarity, and engaging interactions.

---

## Color System

### Primary Colors
- **Primary Blue**: `#007BFF`
  - Used for: CTAs, active states, primary actions
  - Hover state: `#0069d9`
  - Active/pressed state: `#0056b3`
  - Shadow: `rgba(0, 123, 255, 0.3)` for depth

### Background Colors
- **Dark Gradient**: `linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)`
  - Main application background
- **Light backgrounds**:
  - Pure white: `#FFFFFF` (cards, modals, dropdowns)
  - Off-white: `#f5f5f5` (subtle backgrounds)

### Neutral Colors
- **Text Primary**: `#333333` (main content on light backgrounds)
- **Text Secondary**: `#666666` (secondary content, close buttons)
- **Text Tertiary**: `rgba(255, 255, 255, 0.7)` (text on dark backgrounds)
- **Borders**:
  - Light: `#e0e0e0`
  - Subtle: `#f5f5f5`
  - Dark subtle: `rgba(255, 255, 255, 0.1)`

### State Colors
- **Success Green**:
  - Background: `rgba(34, 197, 94, 0.3)`
  - Text: `#a7f3d0`
  - Highlight: `rgba(34, 197, 94, 0.2)`

- **Warning Yellow**:
  - Background: `rgba(234, 179, 8, 0.3)`
  - Text: `#fde047`

- **Error Red**:
  - Background: `rgba(239, 68, 68, 0.3)`
  - Text: `#fca5a5`

### Interactive States
- **Hover backgrounds**:
  - Light surface: `#f8f9fa`
  - Medium surface: `#e9ecef`
  - Dark surface: `rgba(255, 255, 255, 0.08)`

---

## Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Type Scale
- **Title**: `4rem` / `font-weight: 300` / `letter-spacing: -2px`
- **Subtitle**: `1.2rem` / `font-weight: 300`
- **Heading Large**: `2rem` / `font-weight: 400`
- **Heading Medium**: `1.1rem` / `font-weight: 400`
- **Body Large**: `1rem` / `font-weight: 400`
- **Body**: `0.95rem` / `font-weight: 400`
- **Body Small**: `0.9rem` / `font-weight: 400`
- **Caption**: `0.8rem` / `font-weight: 500`
- **Tiny**: `0.75rem` / `font-weight: 500`

### Font Weights
- Light: `300` (titles, subtitles)
- Regular: `400` (body text)
- Medium: `500` (buttons, labels)
- Semibold: `600` (emphasis, active states)

---

## Spacing System

### Base Unit: 4px
```
4px   = 0.25rem
8px   = 0.5rem
12px  = 0.75rem
16px  = 1rem
20px  = 1.25rem
24px  = 1.5rem
30px  = 1.875rem
40px  = 2.5rem
```

### Common Spacing
- **Container padding**: `20px`
- **Section gaps**: `30px - 40px`
- **Card padding**: `30px - 40px`
- **Element gaps**: `8px - 12px`
- **Input padding**: `16px 20px`
- **Button padding**: `16px 24px`

---

## Border Radius

### Scale
- **Extra Small**: `6px` (language selector buttons)
- **Small**: `8px` (dropdowns, small cards)
- **Medium**: `12px` (cards, inputs)
- **Large**: `16px` (large containers)
- **Extra Large**: `20px` (modals)
- **Pill**: `50px` (buttons)
- **Circle**: `50%` (icon buttons, close buttons)

---

## Shadows

### Elevation System
```css
/* Level 1 - Subtle */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

/* Level 2 - Medium */
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

/* Level 3 - High */
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);

/* Primary CTAs */
box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);

/* Primary CTA Hover */
box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
```

---

## Components

### Buttons

#### Primary Button (CTA)
```css
background: #007BFF;
color: white;
padding: 16px 24px;
border-radius: 50px;
font-size: 1rem;
font-weight: 500;
box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);

/* Hover */
background: #0069d9;
transform: translateY(-2px);
box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);

/* Active */
background: #0056b3;
transform: translateY(0);
```

#### Secondary Button
```css
background: rgba(255, 255, 255, 0.1);
color: rgba(255, 255, 255, 0.7);
border: 2px solid rgba(255, 255, 255, 0.2);
padding: 12px 30px;
border-radius: 50px;

/* Hover */
background: rgba(255, 255, 255, 0.15);
color: rgba(255, 255, 255, 0.9);

/* Active */
background: #007BFF;
color: white;
border-color: #007BFF;
box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
```

#### Close Button
```css
background: rgba(0, 0, 0, 0.1);
width: 32px;
height: 32px;
border-radius: 50%;
color: #666;

/* Hover */
background: rgba(0, 0, 0, 0.15);
color: #333;
transform: rotate(90deg);
```

### Inputs

#### Text Input
```css
padding: 16px 20px;
font-size: 1rem;
border: 2px solid #444;
border-radius: 50px;
background: #2d2d2d;
color: white;

/* Focus */
background: #333;
border-color: #666;
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
```

#### Placeholder
```css
color: rgba(255, 255, 255, 0.4);
```

### Dropdowns

#### Container
```css
background: white;
border: 1px solid #e0e0e0;
border-radius: 12px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
max-height: 280px;
overflow-y: auto;
```

#### Item
```css
padding: 12px 16px;
color: #333;
font-size: 0.95rem;
border-bottom: 1px solid #f5f5f5;

/* Hover */
background: #f8f9fa;

/* Active */
background: #e9ecef;
```

#### Scrollbar
```css
width: 6px;
background: transparent; /* track */
thumb-background: #e0e0e0;
thumb-hover: #bdbdbd;
```

### Cards & Modals

#### Success Card
```css
background: white;
border-radius: 20px;
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
animation: cardSlideIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

#### Card Header
```css
background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
padding: 30px;
border-bottom: 1px solid #ddd;
```

### Tables

#### Comparison Table
```css
/* Header */
background: rgba(255, 255, 255, 0.1);
padding: 12px 10px;
font-size: 0.95rem;
border-bottom: 2px solid rgba(255, 255, 255, 0.2);

/* Cell */
padding: 14px 10px;
font-size: 0.95rem;
border-bottom: 1px solid rgba(255, 255, 255, 0.1);
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

---

## Animations

### Durations
- **Fast**: `0.15s` (hover states, quick interactions)
- **Medium**: `0.2s - 0.3s` (dropdowns, transitions)
- **Slow**: `0.4s - 0.6s` (page transitions, reveals)

### Easing Functions
- **Standard**: `ease` (general transitions)
- **Ease In**: `ease-in` (exits)
- **Ease Out**: `ease-out` (entrances)
- **Bounce**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` (modals, cards)

### Key Animations
```css
/* Fade In */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Card Slide In */
@keyframes cardSlideIn {
    0% {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
    }
    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* Reveal Cell (staggered) */
@keyframes revealCell {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Flag Wave */
@keyframes flagWave {
    0%, 100% {
        transform: rotate(-5deg);
    }
    50% {
        transform: rotate(5deg);
    }
}

/* Shake */
@keyframes shake {
    0%, 100% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-10px);
    }
    75% {
        transform: translateX(10px);
    }
}
```

---

## Responsive Breakpoints

### Mobile
```css
@media (max-width: 600px) {
    /* Title: 3rem */
    /* Emoji grid: 2 columns */
    /* Smaller table fonts */
    /* Stack mode buttons vertically */
}
```

---

## Design Principles

### 1. Minimalism
- Clean, uncluttered interfaces
- Only essential elements visible
- Generous white space
- Subtle, non-intrusive UI elements (e.g., language selector)

### 2. Clarity
- Clear visual hierarchy
- Easy-to-read typography
- High contrast for important elements
- Consistent spacing and alignment

### 3. Consistency
- Reusable component patterns
- Consistent border radius across similar elements
- Unified color application
- Standardized spacing scale

### 4. Delight
- Smooth animations and transitions
- Playful micro-interactions (rotate on hover, flag wave)
- Satisfying feedback (shake on error, reveal animations)
- Celebratory success states

### 5. Accessibility
- Sufficient color contrast
- Clear focus states
- Keyboard navigation support
- Semantic HTML structure

---

## Pattern Library

### Dropdown Pattern
1. Clean white background
2. Subtle 1px border (#e0e0e0)
3. 12px border radius
4. Soft shadow for depth
5. Items with divider lines
6. Hover state: light gray background (#f8f9fa)
7. Minimal scrollbar (6px width, light gray)

### Input Pattern
1. Pill-shaped (50px border radius)
2. Dark background on dark theme
3. Clear placeholder text
4. Focus state: slightly lighter background + shadow
5. Autocomplete dropdown appears below

### CTA Pattern
1. Primary color (#007BFF)
2. White text, medium font weight
3. Pill-shaped button
4. Blue shadow for depth
5. Hover: darker blue + lift effect
6. Active: even darker + press effect
7. Include icon + text where appropriate

---

## File Structure

```
/styles.css           - Main stylesheet with all component styles
/translations.js      - Language system and UI text
/game.js             - Emoji game logic
/comparisonGame.js   - Comparison game logic
/countries.js        - Country data for emoji game
/countryData.js      - Detailed country data for comparison game
/index.html          - Main HTML structure
```

---

## Usage Guidelines

### When to use Primary Color (#007BFF)
- ✅ Primary action buttons (Guess, Play Again)
- ✅ Active navigation states (mode selector)
- ✅ Important CTAs
- ❌ Text content
- ❌ Borders (except for active states)
- ❌ Backgrounds (except for CTAs)

### When to use White
- ✅ Card/modal backgrounds
- ✅ Dropdown backgrounds
- ✅ CTA text on primary color
- ✅ Main content areas

### When to use Dark Grays
- ✅ Application background (gradient)
- ✅ Text on light backgrounds (#333)
- ✅ Secondary text (#666)
- ✅ Input fields on dark backgrounds

---

## Brand Voice
- **Friendly**: Approachable and welcoming
- **Educational**: Helping users learn geography
- **Clear**: Simple, direct communication
- **International**: Supporting multiple languages (EN, PT, ES)

---

*Last updated: 2025*
*Version: 1.0*
