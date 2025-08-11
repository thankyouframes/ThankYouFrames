// Enhanced JavaScript for ThankYouFrames Landing Page

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced VSL video handling
document.addEventListener('DOMContentLoaded', function() {
    const vslVideo = document.querySelector('.vsl-container video');
    
    if (vslVideo) {
        // Ensure video is muted and can autoplay
        vslVideo.muted = true;
        vslVideo.playsInline = true;
        
        // Try to play the video when it's loaded
        vslVideo.addEventListener('loadeddata', function() {
            // Only attempt autoplay if the video is muted
            if (vslVideo.muted) {
                const playPromise = vslVideo.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log('Autoplay was prevented:', error);
                        // Autoplay was prevented, show play button or handle gracefully
                    });
                }
            }
        });

        // Handle video errors gracefully
        vslVideo.addEventListener('error', function() {
            console.log('Video failed to load');
            // Hide video container or show placeholder
            const container = vslVideo.closest('.vsl-container');
            if (container) {
                container.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f0f0f0; color: #666; font-size: 1.2rem;">Video placeholder - VSL content will be displayed here</div>';
            }
        });
    }
});

// Intersection Observer for animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.price-card, .testimonial-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Enhanced CTA button tracking (for analytics)
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Track CTA clicks for analytics
        const buttonText = this.textContent.trim();
        const section = this.closest('section')?.className || 'unknown';
        
        // Log for analytics (replace with actual analytics code)
        console.log('CTA clicked:', {
            text: buttonText,
            section: section,
            timestamp: new Date().toISOString()
        });
        
        // Add visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Dynamic customer count animation
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// Animate customer count when it comes into view
const customerCountElement = document.getElementById('customer-count');
if (customerCountElement) {
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetCount = parseInt(entry.target.textContent.replace(/,/g, ''));
                animateCounter(entry.target, targetCount);
                countObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    countObserver.observe(customerCountElement);
}

// Accessibility enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
    `;
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID
    const mainContent = document.querySelector('.offer-section');
    if (mainContent) {
        mainContent.id = 'main-content';
    }
    
    // Enhance keyboard navigation for CTA buttons
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Handle reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--transition-duration', '0.01ms');
}


