# Atlas Daily - Design System Questionnaire

Please answer the following questions to help complete and refine the design system guidelines.

---

## 1. Color & Branding

### Primary Colors
- ✅ **Primary CTA Color**: #007BFF (confirmed)
- ❓ **Secondary Color**: Do you want a secondary brand color for accents or less important actions?
- ❓ **Accent Color**: Do you want an accent color for highlights or special states?
- ❓ **Dark Mode**: Should we support a light theme in addition to the current dark theme?

### Feedback Colors
- ❓ **Success Color**: Are you happy with the current green (#22c55e) or would you prefer a different shade?
- ❓ **Warning Color**: Are you happy with the current yellow (#eab308)?
- ❓ **Error Color**: Are you happy with the current red (#ef4444)?

---

## 2. Typography

### Font Selection
- ❓ **Custom Font**: Do you want to use a custom web font (like Google Fonts) or stick with system fonts?
- ❓ **Suggested fonts**: Inter, Poppins, Space Grotesk, DM Sans, Manrope
- ❓ **Font Pairing**: Do you want different fonts for headings vs body text?

### Type Scale
- ❓ **Title Size**: Current is 4rem (64px) - should this be larger/smaller?
- ❓ **Body Text**: Current is 0.95rem (15.2px) - is this comfortable to read?
- ❓ **Mobile Scaling**: Should fonts be smaller on mobile devices?

---

## 3. Spacing & Layout

### Container Width
- ❓ **Max Width**: Current max-width is 1000px - should this be wider/narrower?
- ❓ **Padding**: Should mobile devices have less padding than desktop?

### Grid System
- ❓ **Do you want a defined grid system** for consistent layouts (e.g., 12-column grid)?
- ❓ **Emoji Game Grid**: Current is 4 columns on desktop, 2 on mobile - is this optimal?

---

## 4. Components

### Buttons
- ✅ **Primary Button**: Pill-shaped with #007BFF (confirmed)
- ❓ **Button Sizes**: Do you need small, medium, and large button variants?
- ❓ **Icon-Only Buttons**: Besides close button, do you need other icon-only buttons?
- ❓ **Disabled State**: What should disabled buttons look like?

### Inputs
- ❓ **Input Variants**: Do you need different input styles (outlined, filled, underlined)?
- ❓ **Error State**: How should inputs look when they have an error?
- ❓ **Success State**: Should inputs show a success state after validation?

### Dropdowns
- ✅ **Style**: Clean white with subtle border (confirmed)
- ❓ **Icons**: Should dropdown items have icons or just text?
- ❓ **Multi-select**: Will you need multi-select dropdowns in the future?

---

## 5. Animations & Interactions

### Motion Preferences
- ❓ **Reduce Motion**: Should we respect the user's "prefers-reduced-motion" setting?
- ❓ **Loading States**: Do you need loading animations/spinners for async actions?
- ❓ **Transitions**: Are the current animation speeds too fast/slow?

### Hover Effects
- ❓ **Lift Effect**: Current buttons lift 2px on hover - is this too subtle/pronounced?
- ❓ **Color Change**: Should hover states change color or just background?

---

## 6. Feedback & States

### Success States
- ❓ **Confetti/Celebration**: Do you want confetti or particle effects on win?
- ❓ **Sound Effects**: Should there be audio feedback for actions?
- ❓ **Haptic Feedback**: On mobile, should buttons vibrate on tap?

### Error States
- ❓ **Error Messages**: How should error messages be displayed (toast, inline, modal)?
- ❓ **Shake Animation**: Current invalid input shakes - keep this or change?

---

## 7. Responsive Design

### Mobile Experience
- ❓ **Mobile-First**: Should we design mobile-first or desktop-first?
- ❓ **Tablet Layout**: Do you need specific designs for tablet (768px - 1024px)?
- ❓ **Touch Targets**: Should buttons be larger on mobile (minimum 44px)?

### Breakpoints
- ❓ **Additional Breakpoints**: Current only has 600px - do you need more?
  - Suggested: 480px (small mobile), 768px (tablet), 1024px (small desktop), 1440px (large desktop)

---

## 8. Accessibility

### Contrast & Readability
- ❓ **WCAG Compliance**: Should we aim for WCAG AA or AAA compliance?
- ❓ **Font Size**: Should users be able to increase font size?
- ❓ **Dyslexia Mode**: Should we offer a dyslexia-friendly font option?

### Keyboard Navigation
- ❓ **Focus Indicators**: Do you want custom focus styles or browser defaults?
- ❓ **Skip Links**: Should we add "skip to content" links?
- ❓ **Keyboard Shortcuts**: Do you want keyboard shortcuts (e.g., "/" to focus search)?

---

## 9. Internationalization (i18n)

### Language Support
- ✅ **Current Languages**: English, Portuguese, Spanish (confirmed)
- ❓ **Additional Languages**: Which other languages should we support?
  - Suggested: French, German, Italian, Japanese, Chinese, Arabic
- ❓ **RTL Support**: Should we support right-to-left languages (Arabic, Hebrew)?

### Regional Formats
- ❓ **Number Formatting**: Should numbers format based on locale (e.g., 1,000 vs 1.000)?
- ❓ **Date Formatting**: Will you display dates? If so, which format?

---

## 10. Content Strategy

### Country Data
- ❓ **Data Expansion**: Current has ~91 countries for emoji game - expand to all 195?
- ❓ **Difficulty Levels**: Should countries be categorized by difficulty?
- ❓ **Daily Challenge**: Do you want a "daily country" that's the same for all users?

### Educational Content
- ❓ **Country Facts**: Should we show fun facts about countries after guessing?
- ❓ **Learn More**: Should there be links to Wikipedia or other resources?
- ❓ **Statistics**: Do you want to show personal stats (countries guessed, win rate, etc.)?

---

## 11. Gamification

### Progress & Achievements
- ❓ **Streak Tracking**: Should we track daily play streaks?
- ❓ **Achievements**: Do you want badges/achievements (e.g., "Guessed 50 countries")?
- ❓ **Leaderboards**: Should there be global or friend leaderboards?

### Difficulty & Modes
- ❓ **Timed Mode**: Should there be a timed challenge mode?
- ❓ **Hint System**: Should users be able to get hints (with a penalty)?
- ❓ **Hard Mode**: Fewer emojis or characteristics revealed?

---

## 12. Social Features

### Sharing
- ❓ **Share Results**: Should users be able to share their results (like Wordle)?
- ❓ **Share Format**: Text-based (emoji squares) or image-based?
- ❓ **Social Media**: Which platforms should we optimize for (Twitter, Instagram, Facebook)?

### Multiplayer
- ❓ **Multiplayer Mode**: Do you want head-to-head challenges?
- ❓ **Friend Challenges**: Should users be able to challenge friends?

---

## 13. Performance & Technical

### Loading
- ❓ **Image Loading**: Should country maps/images be lazy-loaded?
- ❓ **Code Splitting**: Should we split code by game mode?
- ❓ **Offline Support**: Should the game work offline (PWA)?

### Analytics
- ❓ **User Analytics**: What metrics do you want to track?
  - Suggested: Games played, completion rate, average guesses, popular countries
- ❓ **A/B Testing**: Do you want to A/B test features?

---

## 14. Monetization (Future)

### Business Model
- ❓ **Ads**: Will you show ads? If so, where and how often?
- ❓ **Premium Features**: What features might be premium?
  - Suggested: Ad-free, unlimited hints, custom themes, advanced stats
- ❓ **Donations**: Will you accept donations/tips?

---

## 15. Branding Assets

### Logo & Icon
- ❓ **Logo**: Do you need a logo designed (currently just text)?
- ❓ **Favicon**: Do you have a favicon designed?
- ❓ **App Icons**: If making a PWA, do you need app icons?

### Visual Identity
- ❓ **Illustrations**: Do you want custom illustrations or stick with emojis?
- ❓ **Patterns**: Should there be decorative background patterns?
- ❓ **Photography**: Will you use real country photos anywhere?

---

## 16. Domain & Deployment

### atlas-daily.com Setup
- ❓ **Hosting Provider**: Where will you host? (Vercel, Netlify, AWS, etc.)
- ❓ **Email**: Do you need email addresses (@atlas-daily.com)?
- ❓ **SSL**: Will be handled by hosting provider automatically?

### Subdomains
- ❓ **API Subdomain**: Do you need api.atlas-daily.com for future backend?
- ❓ **Blog**: Do you want blog.atlas-daily.com for content?
- ❓ **Docs**: Do you need docs.atlas-daily.com for guides?

---

## Priority Ranking

Please rank these categories by importance (1 = most important, 5 = least important):

- [ ] User Experience & Accessibility
- [ ] Visual Design & Branding
- [ ] Performance & Technical
- [ ] Content & Gamification
- [ ] Social & Monetization

---

## Next Steps

After completing this questionnaire:
1. Review and approve the design system document
2. Create component library/style guide
3. Plan feature roadmap
4. Set up hosting and domain
5. Launch MVP
6. Iterate based on user feedback

---

*Please mark your answers with ✅ for yes, ❌ for no, or write custom responses.*
