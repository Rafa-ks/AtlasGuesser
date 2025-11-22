# Atlas Daily - Design System Questionnaire

Please answer the following questions to help complete and refine the design system guidelines.

---

## 1. Color & Branding

### Primary Colors
- ✅ **Primary CTA Color**: #007BFF (confirmed)
- ✅ **Secondary Color**: #19386B
- ✅ **Accent Color**: No accent color needed
- ✅ **Dark Mode**: Yes, support light theme in addition to dark theme

### Feedback Colors
- ✅ **Success Color**: Use primary color (#007BFF)
- ✅ **Warning Color**: Yes, keep current yellow (#eab308)
- ✅ **Error Color**: Yes, keep current red (#ef4444)

---

## 2. Typography

### Font Selection
- ✅ **Custom Font**: Yes, use custom web fonts
- ✅ **Title Font**: Jaro (Google Fonts)
- ✅ **Body Font**: SF Compact Light (system font)
- ✅ **Font Pairing**: Yes, Jaro for headings and SF Compact Light for body text

### Type Scale
- ✅ **Title Size**: Current 4rem (64px) is fine
- ✅ **Body Text**: Current 0.95rem (15.2px) is fine
- ✅ **Mobile Scaling**: Yes, follow best practices for mobile font sizes (research web standards)

---

## 3. Spacing & Layout

### Container Width
- ✅ **Max Width**: Increase slightly from 1000px (suggest 1200px)
- ✅ **Padding**: Yes, mobile devices should have less padding than desktop

### Grid System
- ✅ **Grid System**: Yes, use a defined 12-column grid for consistent layouts
- ✅ **Emoji Game Grid**: Current 4 columns desktop / 2 mobile is fine

---

## 4. Components

### Buttons
- ✅ **Primary Button**: Pill-shaped with #007BFF (confirmed)
- ✅ **Button Sizes**: Two variants - Large (main CTAs) and Medium (settings/language)
- ✅ **Icon-Only Buttons**: Only the close button for now
- ✅ **Disabled State**: Set opacity to 50%

### Inputs
- ✅ **Input Variants**: Standard style is fine
- ✅ **Error State**: To be defined based on usage
- ✅ **Success State**: To be defined based on usage

### Dropdowns
- ✅ **Style**: Clean white with subtle border (confirmed)
- ✅ **Icons**: Text only, no icons needed
- ✅ **Multi-select**: No, not needed

---

## 5. Animations & Interactions

### Motion Preferences
- ✅ **Reduce Motion**: No, not implementing this feature for now
- ✅ **Loading States**: Yes, need loading animations/spinners for async actions
- ✅ **Transitions**: Current speeds feel smooth but can be improved

### Hover Effects
- ✅ **Lift Effect**: Remove lift effect (part of removing shades/effects)
- ✅ **Hover State**: Add growing white stroke on hover instead of color/lift changes

---

## 6. Feedback & States

### Success States
- ✅ **Confetti/Celebration**: No confetti or particle effects
- ✅ **Sound Effects**: No audio feedback
- ✅ **Haptic Feedback**: No haptic feedback on mobile

### Error States
- ✅ **Error Messages**: Use toast notifications
- ✅ **Shake Animation**: Keep the shake animation for invalid input

---

## 7. Responsive Design

### Mobile Experience
- ✅ **Mobile-First**: Yes, design mobile-first
- ✅ **Tablet Layout**: No specific tablet designs needed
- ✅ **Touch Targets**: Yes, buttons should be minimum 44px on mobile

### Breakpoints
- ✅ **Additional Breakpoints**: Yes, add all suggested breakpoints
  - 480px (small mobile), 768px (tablet), 1024px (small desktop), 1440px (large desktop)

---

## 8. Accessibility

### Contrast & Readability
- ✅ **WCAG Compliance**: Yes, aim for WCAG AA or AAA compliance
- ✅ **Font Size**: Yes, users should be able to increase font size
- ✅ **Dyslexia Mode**: No, not offering dyslexia-friendly font option

### Keyboard Navigation
- ✅ **Focus Indicators**: To be defined during implementation
- ✅ **Skip Links**: To be defined during implementation
- ✅ **Keyboard Shortcuts**: To be defined during implementation

---

## 9. Internationalization (i18n)

### Language Support
- ✅ **Current Languages**: English, Portuguese, Spanish (confirmed)
- ✅ **Additional Languages**: To be added later as needed
- ✅ **RTL Support**: To be considered when adding RTL languages

### Regional Formats
- ✅ **Number Formatting**: To be defined when needed
- ✅ **Date Formatting**: To be defined when dates are displayed

---

## 10. Content Strategy

### Country Data
- ✅ **Data Expansion**: Yes, expand to all 195 countries
- ✅ **Difficulty Levels**: No difficulty categorization
- ✅ **Daily Challenge**: Yes, implement a "daily country" feature

### Educational Content
- ✅ **Country Facts**: Yes, show fun facts about countries after guessing
- ✅ **Learn More**: Yes, include links to Wikipedia or other resources
- ✅ **Statistics**: Yes, show personal stats (countries guessed, win rate, etc.)

---

## 11. Gamification

### Progress & Achievements
- ✅ **Streak Tracking**: Yes, track daily play streaks
- ✅ **Achievements**: Yes, implement badges/achievements system
- ✅ **Leaderboards**: No leaderboards

### Difficulty & Modes
- ✅ **Timed Mode**: No timed challenge mode
- ✅ **Hint System**: Yes, implement hint system with penalty
- ✅ **Hard Mode**: No hard mode

---

## 12. Social Features

### Sharing
- ✅ **Share Results**: Yes, users should be able to share results
- ✅ **Share Format**: Text-based for now
- ✅ **Social Media**: Platform optimization to be determined

### Multiplayer
- ✅ **Multiplayer Mode**: No head-to-head challenges
- ✅ **Friend Challenges**: No friend challenges

---

## 13. Performance & Technical

### Loading
- ✅ **Image Loading**: No lazy-loading for now
- ✅ **Code Splitting**: To be determined
- ✅ **Offline Support**: No PWA/offline support for now

### Analytics
- ✅ **User Analytics**: Track all suggested metrics plus session duration
  - Games played, completion rate, average guesses, popular countries, time spent per session
- ✅ **A/B Testing**: Not for now, maybe in the future

---

## 14. Monetization (Future)

### Business Model
- ✅ **Ads**: Not at first, but yes if it goes viral
- ✅ **Premium Features**: Nothing for now, to be decided later
- ✅ **Donations**: Not now, maybe in the future

---

## 15. Branding Assets

### Logo & Icon
- ✅ **Logo**: No logo needed for now
- ✅ **Favicon**: Yes, favicon is already designed
- ✅ **App Icons**: No PWA icons needed

### Visual Identity
- ✅ **Illustrations**: Yes, custom illustrations in the future
- ✅ **Patterns**: To be decided
- ✅ **Photography**: Yes, will use real country photos

---

## 16. Domain & Deployment

### atlas-daily.com Setup
- ✅ **Hosting Provider**: Vercel
- ✅ **Email**: No email addresses needed
- ✅ **SSL**: Not handled automatically (needs configuration)

### Subdomains
- ✅ **API Subdomain**: Yes, need api.atlas-daily.com for future backend
- ✅ **Blog**: To be determined
- ✅ **Docs**: To be determined

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
