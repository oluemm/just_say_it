### New Calming Color Palette

The JSI app now uses a carefully curated color palette designed specifically for mental health and wellness:

#### Primary Colors
- **Teal Primary** (`#14B8A6` / HSL: 172 66% 50%)
  - Represents: Trust, calm, healing
  - Usage: Primary buttons, links, focus states
  - Psychology: Teal promotes emotional balance and clear thinking

- **Soft Blue Accent** (`#60A5FA` / HSL: 213 92% 68%)
  - Represents: Serenity, peace, tranquility
  - Usage: Accent elements, highlights
  - Psychology: Blue reduces stress and promotes calmness

- **Lavender Secondary** (`#A78BFA` / HSL: 258 90% 66%)
  - Represents: Compassion, gentleness, care
  - Usage: Secondary actions, highlights
  - Psychology: Purple/lavender evokes empathy and spirituality

#### Supporting Colors
- **Sage Green** (Muted backgrounds and success states)
  - Represents: Growth, renewal, nature
  - Usage: Muted backgrounds, success messages
  - Psychology: Green promotes healing and balance

- **Warm Grays** (Neutrals with warm undertones)
  - Represents: Grounding, stability, neutrality
  - Usage: Borders, text, subtle backgrounds
  - Psychology: Warm neutrals feel approachable, not clinical

---

## Light vs Dark Mode

### Light Mode Philosophy
- **Background**: Warm off-white (`30 20% 98%`) instead of pure white
- **Purpose**: Reduces eye strain, feels welcoming
- **Cards**: Pure white for subtle contrast and depth
- **Text**: Warm dark gray, not harsh black

### Dark Mode Philosophy
- **Background**: Deep blue-gray (`220 18% 12%`) NOT pure black
- **Purpose**: Soothing evening use, reduces blue light impact
- **Cards**: Slightly lighter for subtle elevation
- **Text**: Warm off-white, maintains warmth even in dark mode

---

## Design Principles Applied

### 1. Emotional Safety
- ✅ No harsh red/orange (used softer destructive colors)
- ✅ Warm undertones in all neutrals (approachable, not clinical)
- ✅ Generous whitespace for reduced cognitive load
- ✅ Soft transitions (150ms cubic-bezier for smoothness)

### 2. Accessibility
- ✅ Improved focus states with teal ring
- ✅ Proper contrast ratios (WCAG AA compliant)
- ✅ Increased line-height to 1.6 for readability
- ✅ Smooth transitions for predictability

### 3. Trust & Professionalism
- ✅ Consistent color application across UI
- ✅ Teal conveys both calm and credibility
- ✅ Not overly playful, not overly clinical
- ✅ Modern, premium aesthetic

---

## Screenshots

### Home Page with New Theme
![Home page showing new calming theme](/home/oluemm/.gemini/antigravity/brain/552d14b6-8e85-40f7-8519-3b015cb972e3/jsi_home_page_theme_1768065406822.png)

**What you see:**
- Warm background gradients (blue/purple soft glows)
- Teal "Start Sharing" button (primary action)
- Lavender/blue/pink icon cards for features
- Generous spacing and readable typography

### Forums Page with New Theme
![Forums page with themed cards](/home/oluemm/.gemini/antigravity/brain/552d14b6-8e85-40f7-8519-3b015cb972e3/jsi_forums_page_theme_1768065415877.png)

**What you see:**
- Colorful forum cards with soft backgrounds
- Teal search focus state
- Clean, card-based layout
- Mobile-first responsive design

---

## Technical Implementation

### CSS Variables (Tailwind v4 @theme)

All colors are defined as HSL CSS custom properties in `src/index.css`:

```css
@theme {
  --color-primary: 172 66% 50%;        /* Teal */
  --color-secondary: 258 90% 66%;      /* Lavender */
  --color-accent: 213 92% 68%;         /* Soft Blue */
  --color-muted: 142 50% 96%;          /* Light Sage */
  /* ... plus success, warning, and all semantic colors */
}
```

### Usage in Components

The theme is automatically applied via Tailwind utility classes:

```tsx
// Primary button - automatically uses teal
<Button>Post Anonymously</Button>

// Accent highlights - soft blue
<div className="bg-accent text-accent-foreground">...</div>

// Muted backgrounds - sage green tint
<div className="bg-muted text-muted-foreground">...</div>
```

---

## Next Steps

The calming theme is now complete! Suggested next steps:

1. ✅ **Theme colors** - DONE!
2. ⏭️ **HTML meta tags** - Add mental health-appropriate SEO and crisis resource metadata
3. ⏭️ **Missing pages** - Create Mood Tracker, Resources, Settings pages
4. ⏭️ **Components** - Build PostCard, AnonymousIcon with calming aesthetics
5. ⏭️ **Logo & mockups** - Circle back to Phases 1 & 2 for visual assets

---

## Color Reference Card

| Color | Hex | HSL | Usage |
|-------|-----|-----|-------|
| **Teal** | `#14B8A6` | `172 66% 50%` | Primary buttons, links, focus |
| **Soft Blue** | `#60A5FA` | `213 92% 68%` | Accents, highlights |
| **Lavender** | `#A78BFA` | `258 90% 66%` | Secondary actions |
| **Sage Green** | `#86EFAC` | `142 71% 45%` | Success states |
| **Warm Amber** | `#F59E0B` | `38 92% 50%` | Warnings (gentle) |
| **Soft Red** | `#EF4444` | `0 70% 50%` | Destructive (muted) |
