# ThankYouFrames Landing Page - Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Static Hosting (Recommended)

#### Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `thankyouframes_landing_page` folder onto the deploy area
3. Your site will be live instantly with a custom URL
4. Optional: Connect a custom domain

#### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Upload the project folder or connect to Git
4. Deploy with one click

#### GitHub Pages
1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source branch and deploy

### Option 2: Traditional Web Hosting

#### Via FTP/cPanel
1. Access your hosting control panel
2. Navigate to File Manager or use FTP client
3. Upload all files to your `public_html` or `www` directory
4. Ensure proper file permissions (644 for files, 755 for directories)

## 🔧 Pre-Deployment Checklist

### Required Updates
- [ ] Replace `https://etsy.com/shop/thankyouframes` with your actual Etsy shop URL
- [ ] Add your VSL video (replace placeholder in `/video/` folder)
- [ ] Update customer testimonials with real reviews
- [ ] Verify all pricing and product information
- [ ] Test all CTA buttons

### Optional Customizations
- [ ] Add Google Analytics tracking code
- [ ] Set up Facebook Pixel for conversion tracking
- [ ] Configure custom domain
- [ ] Add SSL certificate (HTTPS)
- [ ] Set up email capture (if needed)

## 📊 Analytics Setup

### Google Analytics 4
Add this code before the closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel
Add this code after the opening `<body>` tag:

```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## 🎥 Video Integration

### Option 1: Local Video File
1. Replace `video/placeholder_vsl.txt` with your video file
2. Name it `placeholder_vsl.mp4`
3. Optimize for web (H.264 codec, under 50MB)

### Option 2: YouTube Embed
Replace the `<video>` tag in `index.html` with:

```html
<iframe width="100%" height="100%" 
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&controls=1" 
        frameborder="0" allowfullscreen></iframe>
```

### Option 3: Vimeo Embed
Replace the `<video>` tag with:

```html
<iframe src="https://player.vimeo.com/video/YOUR_VIDEO_ID?autoplay=1&muted=1" 
        width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
```

## 🔒 Security & Performance

### SSL Certificate
- Most hosting providers offer free SSL certificates
- Ensure your site loads with `https://` for security and SEO

### Performance Optimization
- Enable gzip compression on your server
- Set up browser caching headers
- Consider using a CDN for faster global loading

### Security Headers
Add these to your `.htaccess` file (Apache) or server configuration:

```apache
# Security Headers
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Cache Control
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

## 📱 Mobile Testing

Before going live, test on:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Various screen sizes using browser dev tools

## 🔍 SEO Optimization

### Meta Tags
The landing page includes basic SEO meta tags. Consider adding:

```html
<meta name="description" content="Custom Thank You Frames - Handmade quality frames that capture gratitude and make memories last forever. Order now on Etsy.">
<meta name="keywords" content="thank you frames, custom frames, handmade frames, gratitude gifts, personalized frames">
<meta property="og:title" content="ThankYouFrames - Capture the Moment, Frame the Gratitude">
<meta property="og:description" content="Custom Thank You Frames that make memories last forever">
<meta property="og:image" content="https://yoursite.com/images/og-image.jpg">
<meta property="og:url" content="https://yoursite.com">
```

## 📈 Conversion Tracking

### Enhanced CTA Tracking
The JavaScript already includes basic CTA tracking. To send events to Google Analytics:

```javascript
// Add this to script.js
gtag('event', 'click', {
    'event_category': 'CTA',
    'event_label': buttonText,
    'value': 1
});
```

## 🛠️ Troubleshooting

### Common Issues

**Video not playing:**
- Check file format (MP4 recommended)
- Ensure file size is under 50MB
- Verify autoplay policies in different browsers

**CTA buttons not working:**
- Verify Etsy shop URL is correct
- Check for JavaScript errors in browser console
- Ensure target="_blank" is working

**Mobile layout issues:**
- Test on actual devices, not just browser dev tools
- Check viewport meta tag is present
- Verify touch targets are large enough (44px minimum)

**Slow loading:**
- Optimize images (use WebP format if possible)
- Minify CSS and JavaScript
- Enable compression on server

## 📞 Support

For technical issues:
1. Check browser console for JavaScript errors
2. Validate HTML and CSS using W3C validators
3. Test on multiple browsers and devices
4. Monitor page speed using Google PageSpeed Insights

## 🔄 Updates & Maintenance

### Regular Tasks
- Update customer testimonials monthly
- Refresh customer count numbers
- Test all links and forms
- Monitor page performance
- Update pricing if needed

### A/B Testing Ideas
- Different headlines
- Various CTA button colors/text
- Alternative pricing presentations
- Different testimonial combinations

---

**Ready to launch? Double-check your Etsy shop URL and deploy! 🚀**

