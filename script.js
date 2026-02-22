/**
 * V27 The Ultimate Masterpiece JS
 * Absolute flawless execution of:
 * 1. Hardware-accelerated custom cursor
 * 2. Magnetic buttons
 * 3. 3D Card Hover Tilts
 * 4. The Data Nexus Canvas Background
 * 5. Intersection Observer Reveals
 */

document.addEventListener("DOMContentLoaded", () => {

    // Initialize Feather Icons
    if (typeof feather !== 'undefined') feather.replace();

    // --------------------------------------------------------------------------
    // 1. HARDWARE ACCELERATED CUSTOM CURSOR
    // --------------------------------------------------------------------------
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');
    let mouse = { x: -100, y: -100 };
    let ring = { x: -100, y: -100 };

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        // Dot moves instantly
        cursorDot.style.transform = `translate3d(${mouse.x - 3}px, ${mouse.y - 3}px, 0)`;
    }, { passive: true });

    // Smooth ring tracking via requestAnimationFrame
    function renderCursor() {
        ring.x += (mouse.x - ring.x) * 0.15;
        ring.y += (mouse.y - ring.y) * 0.15;
        cursorRing.style.transform = `translate3d(${ring.x - 18}px, ${ring.y - 18}px, 0)`;
        requestAnimationFrame(renderCursor);
    }
    renderCursor();


    // --------------------------------------------------------------------------
    // 2. MAGNETIC HOVER EFFECTS
    // --------------------------------------------------------------------------
    const magnets = document.querySelectorAll(".hover-magnet");
    magnets.forEach(magnet => {
        magnet.addEventListener("mouseenter", () => cursorRing.classList.add("active"));
        magnet.addEventListener("mouseleave", () => {
            cursorRing.classList.remove("active");
            magnet.style.transform = '';
        });

        // Gentle magnetic pull
        magnet.addEventListener("mousemove", (e) => {
            const rect = magnet.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;

            magnet.style.transform = `translate(${distanceX * 0.2}px, ${distanceY * 0.2}px)`;
        });
    });


    // --------------------------------------------------------------------------
    // 3. FLUID 3D GLASS CARDS
    // --------------------------------------------------------------------------
    const tiltCards = document.querySelectorAll('.tilt-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Set variables for inner glow tracker
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            // Calculate strictly subtle tilt (Stripe-tier subtle, not extreme)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -1.5; // Max 1.5deg
            const rotateY = ((x - centerX) / centerX) * 1.5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
        }, { passive: true });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) translateY(0)`;
            setTimeout(() => card.style.transition = '', 500);
        });
    });


    // --------------------------------------------------------------------------
    // 4. THE DATA NEXUS (Elegant, Subtle HTML5 Canvas Particle Network)
    // --------------------------------------------------------------------------
    const canvas = document.getElementById("nexus-canvas");
    const ctx = canvas.getContext("2d", { alpha: false }); // Optimize performance

    let particles = [];
    const particleCount = Math.min(window.innerWidth / 15, 100); // Responsive count
    const connectionDistance = 150;
    const mouseConnectionDistance = 200;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            // Extremely slow, elegant floating
            this.vx = (Math.random() - 0.5) * 0.15;
            this.vy = (Math.random() - 0.5) * 0.15;
            this.radius = Math.random() * 1.5 + 0.5;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(161, 161, 170, 0.4)"; // Muted zinc
            ctx.fill();
        }
    }

    // Init Particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animateCanvas() {
        // Clear background with deep blue-black
        ctx.fillStyle = "#030407";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw connections
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Connect to other particles
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    const opacity = 1 - (distance / connectionDistance);
                    ctx.beginPath();
                    // Subtle blue connecting lines
                    ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.15})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }

            // Connect to Mouse (if mouse is on screen)
            if (mouse.x > 0 && mouse.y > 0) {
                const mDx = particles[i].x - mouse.x;
                const mDy = particles[i].y - mouse.y;
                const mDistance = Math.sqrt(mDx * mDx + mDy * mDy);

                if (mDistance < mouseConnectionDistance) {
                    const mOpacity = 1 - (mDistance / mouseConnectionDistance);
                    ctx.beginPath();
                    // Vibrant glowing blue to mouse
                    ctx.strokeStyle = `rgba(6, 182, 212, ${mOpacity * 0.3})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();

                    // Tiny magnetic pull toward mouse
                    particles[i].x -= mDx * 0.005;
                    particles[i].y -= mDy * 0.005;
                }
            }
        }
        requestAnimationFrame(animateCanvas);
    }
    animateCanvas();

    // --------------------------------------------------------------------------
    // 5. INTERSECTION REVEALS & MOBILE MENU
    // --------------------------------------------------------------------------
    const fadeElements = document.querySelectorAll('.reveal-up');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    // Force hero visible immediately
    setTimeout(() => {
        document.querySelectorAll('#home .reveal-up').forEach(el => el.classList.add('visible'));
    }, 100);

    // Mobile menu toggle
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', () => menu.classList.toggle('active'));
        menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('active')));
    }

    // Set Footer Date
    const yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();

});
