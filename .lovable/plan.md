

## Plan: Fix Header, Dock Labels, Testimonials & Overall Polish

### Problems Identified

1. **Header not sticky/consistent**: On the homepage, `Navigation` is rendered *inside* the hero section (line 214 of App.tsx), so it scrolls away. Other pages use `Layout` which wraps Navigation properly. The homepage doesn't use `Layout` at all.
2. **Dock missing text labels**: The dock icons have no text labels underneath (e.g., "Work", "Explore", "About", "CV", "Contact").
3. **Testimonial section looks off**: The frosted glass cards on a plain white background don't pop. The section needs a contrasting background to make the glass effect work.
4. **Overall homepage feel**: Needs refinement — better background treatment to feel unique and polished.

### Plan

**1. Make Navigation sticky & consistent across all pages**
- Pull `<Navigation />` out of the hero section in `App.tsx`
- Place it at the top of the App component, outside the hero, so it remains sticky with `sticky top-0 z-50`
- This makes the header behavior identical to other pages that use `Layout`

**2. Add text labels under dock icons**
- Add a small label (`text-[9px]`) under each dock icon: "Work", "Explore", "About", "CV", "Contact"
- Position below the dot indicator

**3. Redesign testimonial section background**
- Give the testimonial section a dark/deep background (dark navy or charcoal gradient) so the frosted glass cards actually look like glass against a rich backdrop
- Adjust text colors for contrast on dark background
- Add subtle radial gradient blobs behind the section for depth

**4. Polish the overall homepage**
- Refine the hero background gradient for more visual richness — add subtle animated grain or mesh texture
- Ensure consistent spacing between sections
- Add a subtle gradient transition between the hero and the work section

### Files to Edit
- `src/App.tsx` — Navigation placement, dock labels, testimonial section background, overall spacing
- `src/components/Navigation.tsx` — Ensure the background works on both light and dark section backgrounds (transparent on hero, frosted on scroll)

