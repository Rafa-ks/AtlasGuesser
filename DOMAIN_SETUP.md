# Connecting atlas-daily.com to Your Website

## Overview
You've registered **atlas-daily.com**. Here's how to connect it to your Atlas Daily game.

---

## Step 1: Choose a Hosting Provider

### Recommended Options (Free Tier Available):

#### Option A: Vercel (Recommended - Easiest)
- ✅ Free tier with custom domain
- ✅ Automatic SSL/HTTPS
- ✅ Global CDN
- ✅ Automatic deployments from Git
- ✅ Perfect for static sites and Next.js

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub/GitLab
3. Click "Add New Project"
4. Import your code (or drag & drop the CountryGuesser folder)
5. Click "Deploy"

#### Option B: Netlify
- ✅ Free tier with custom domain
- ✅ Automatic SSL/HTTPS
- ✅ Form handling
- ✅ Continuous deployment

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up
3. Drag & drop your CountryGuesser folder
4. Site deploys automatically

#### Option C: GitHub Pages
- ✅ Completely free
- ✅ Good for simple static sites
- ⚠️ Requires GitHub repository

**Steps:**
1. Create GitHub repository
2. Push your code
3. Enable GitHub Pages in repository settings
4. Select main branch

#### Option D: Cloudflare Pages
- ✅ Free tier
- ✅ Very fast global CDN
- ✅ Automatic SSL

---

## Step 2: Deploy Your Files

### Files to Upload/Deploy:
```
CountryGuesser/
├── index.html
├── styles.css
├── translations.js
├── game.js
├── comparisonGame.js
├── countries.js
├── countryData.js
├── DESIGN_SYSTEM.md (optional - for reference)
└── DESIGN_QUESTIONS.md (optional - for reference)
```

### Using Vercel (Recommended):

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy from command line**:
   ```bash
   cd /Users/empresa/Desktop/Products/CountryGuesser
   vercel
   ```

3. **Or use the web interface**:
   - Go to vercel.com/new
   - Drag & drop the folder
   - Click Deploy

### Using Netlify:

1. **Drag & Drop**:
   - Go to app.netlify.com/drop
   - Drag the CountryGuesser folder
   - Wait for deployment

2. **Or use Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   cd /Users/empresa/Desktop/Products/CountryGuesser
   netlify deploy
   ```

---

## Step 3: Connect Your Domain

### Where did you register atlas-daily.com?
Common registrars: GoDaddy, Namecheap, Google Domains, Cloudflare

### For Vercel:

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add "atlas-daily.com"
4. Vercel will show you DNS records to add

5. **Go to your domain registrar** and add these DNS records:

   **Option A - Using Nameservers (Recommended)**:
   - Point nameservers to Vercel's nameservers

   **Option B - Using A Record**:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: Auto
   ```

   **For www subdomain**:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: Auto
   ```

### For Netlify:

1. In Netlify Dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter "atlas-daily.com"
4. Netlify will provide DNS records

5. **Add these to your registrar**:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   TTL: Auto
   ```

   ```
   Type: CNAME
   Name: www
   Value: [your-site].netlify.app
   TTL: Auto
   ```

### For Cloudflare Pages:

1. Transfer domain to Cloudflare (recommended) or add DNS records
2. In Cloudflare Pages, add custom domain
3. Cloudflare handles SSL automatically

---

## Step 4: Configure DNS Records

### Common DNS Record Types:

#### A Record
Points your domain to an IP address
```
atlas-daily.com → 76.76.21.21
```

#### CNAME Record
Points your domain to another domain
```
www.atlas-daily.com → atlas-daily.vercel.app
```

#### TXT Record (for verification)
Proves you own the domain
```
atlas-daily.com → "vercel-verification=xxxxx"
```

### DNS Propagation
- Takes 24-48 hours (usually faster)
- Check status at: [whatsmydns.net](https://www.whatsmydns.net)

---

## Step 5: Enable HTTPS/SSL

### Automatic SSL (Recommended)
- Vercel: Automatic with Let's Encrypt
- Netlify: Automatic with Let's Encrypt
- Cloudflare: Automatic

### Force HTTPS
Add this to your hosting settings or in HTML:
```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

---

## Step 6: Test Your Domain

### Checklist:
- [ ] http://atlas-daily.com loads
- [ ] https://atlas-daily.com loads (SSL working)
- [ ] www.atlas-daily.com redirects to atlas-daily.com
- [ ] All game features work (emoji game, comparison game)
- [ ] Language switcher works
- [ ] Mobile responsive

### Testing Tools:
- **SSL**: [ssllabs.com/ssltest](https://www.ssllabs.com/ssltest/)
- **Speed**: [pagespeed.web.dev](https://pagespeed.web.dev/)
- **DNS**: [whatsmydns.net](https://www.whatsmydns.net/)

---

## Step 7: Post-Launch Optimization

### SEO Setup
1. **Add sitemap.xml**:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
           <loc>https://atlas-daily.com/</loc>
           <changefreq>daily</changefreq>
           <priority>1.0</priority>
       </url>
   </urlset>
   ```

2. **Add robots.txt**:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://atlas-daily.com/sitemap.xml
   ```

3. **Submit to Search Engines**:
   - [Google Search Console](https://search.google.com/search-console)
   - [Bing Webmaster Tools](https://www.bing.com/webmasters)

### Analytics
Add Google Analytics or Plausible:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### Performance
- Enable Gzip/Brotli compression (automatic on Vercel/Netlify)
- Add caching headers
- Optimize images (if you add any)

---

## Troubleshooting

### Domain not loading?
1. Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net/)
2. Verify DNS records in registrar
3. Clear browser cache (Cmd+Shift+R on Mac)
4. Wait 24-48 hours for propagation

### SSL errors?
1. Wait for SSL certificate to provision (can take up to 24 hours)
2. Force HTTPS in hosting settings
3. Check that both apex and www have SSL

### Redirects not working?
1. Add redirect rules in hosting provider
2. Ensure www → non-www redirect is configured

---

## Quick Start Guide

### Fastest Way (5 minutes):

1. **Go to Vercel.com** → Sign up
2. **Drag & drop** CountryGuesser folder
3. **Add domain** in settings → "atlas-daily.com"
4. **Go to your registrar** → Add DNS records Vercel provides
5. **Wait 1-24 hours** → Done!

---

## Need Help?

### Vercel Support:
- Docs: [vercel.com/docs](https://vercel.com/docs)
- Discord: [vercel.com/discord](https://vercel.com/discord)

### Netlify Support:
- Docs: [docs.netlify.com](https://docs.netlify.com)
- Community: [answers.netlify.com](https://answers.netlify.com)

### Domain Registrar Support:
- Contact your registrar's support team for DNS help
- Most have live chat or ticket systems

---

## Next Steps After Domain Setup

1. ✅ Domain connected and live
2. Set up email forwarding (optional): hello@atlas-daily.com
3. Set up analytics (Google Analytics, Plausible)
4. Submit to search engines
5. Share on social media!
6. Monitor performance and user feedback
7. Iterate on design based on DESIGN_QUESTIONS.md responses

---

*Good luck with your launch! 🚀*
