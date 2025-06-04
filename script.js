// animations.js - Vibrant interactive animations for portfolio

document.addEventListener('DOMContentLoaded', () => {

  // Typing effect for hero greeting and tagline with blinking cursor
  function typeEffect(element, text, speed = 80, callback) {
    let i = 0;
    element.textContent = '';
    element.style.borderRight = '2px solid var(--primary)';
    function typing() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      } else {
        setTimeout(() => {
          element.style.borderRight = 'none';
          if(callback) callback();
        }, 500);
      }
    }
    typing();
  }

  const greetingEl = document.querySelector('.greeting');
  const taglineEl = document.querySelector('.tagline');

  if (greetingEl && taglineEl) {
    const greetingText = greetingEl.textContent.trim();
    const taglineText = taglineEl.textContent.trim();
    greetingEl.textContent = '';
    taglineEl.textContent = '';

    typeEffect(greetingEl, greetingText, 80, () => {
      typeEffect(taglineEl, taglineText, 40);
      // After typing tagline, pulse the tagline text repeatedly
      setInterval(() => {
        taglineEl.animate([
          { transform: 'scale(1)', color: 'var(--primary)' },
          { transform: 'scale(1.05)', color: 'var(--accent)' },
          { transform: 'scale(1)', color: 'var(--primary)' }
        ], { duration: 2000, iterations: 1 });
      }, 5000);
    });
  }

  // Scroll reveal animation for elements with .anim-fade-slide class
  const animElements = document.querySelectorAll('.anim-fade-slide');
  const animObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  animElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    animObserver.observe(el);
  });

  // Animate project cards with pop up effect on scroll
  const projectCards = document.querySelectorAll('.project-card');
  const projectObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
        entry.target.style.transform = 'translateY(-10px) scale(1.03)';
        entry.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        setTimeout(() => {
          entry.target.style.transform = 'translateY(0) scale(1)';
          entry.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        }, 1500);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  projectCards.forEach(card => projectObserver.observe(card));

  // Animate certification cards with zoom and shadow on scroll
  const certCards = document.querySelectorAll('.certification-card');
  const certObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.transition = 'transform 0.6s ease, box-shadow 0.6s ease';
        entry.target.style.transform = 'scale(1.1)';
        entry.target.style.boxShadow = '0 25px 45px rgba(0,0,0,0.2)';
        setTimeout(() => {
          entry.target.style.transform = 'scale(1)';
          entry.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        }, 1800);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  certCards.forEach(card => certObserver.observe(card));

  // Skill bars fill animation on section visible
  const skillBars = document.querySelectorAll('.skill-progress');
  const skillSection = document.querySelector('.skills-section');
  if(skillSection){
    const skillObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          skillBars.forEach(bar => {
            const width = bar.getAttribute('style').match(/width:\s*(\d+%)/i);
            bar.style.width = '0%';
            setTimeout(() => {
              bar.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)';
              if(width) bar.style.width = width[1];
            }, 200);
          });
          obs.unobserve(skillSection);
        }
      });
    }, { threshold: 0.4 });
    skillObserver.observe(skillSection);
  }

  // Soft skill icon pulse animation on hover
  const softSkillItems = document.querySelectorAll('.soft-skill-item');
  softSkillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const icon = item.querySelector('.soft-skill-icon');
      if(icon){
        icon.animate([
          { transform: 'scale(1)' },
          { transform: 'scale(1.3)' },
          { transform: 'scale(1)' }
        ], { duration: 600, easing: 'ease-in-out' });
      }
      // Also slightly brighten background on hover
      item.style.transition = 'box-shadow 0.3s ease';
      item.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.boxShadow = '';
    });
  });

  // Button glow effect on hover using JS - enhances existing CSS transitions
  const buttons = document.querySelectorAll('.btn-primary, .btn-outline');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.boxShadow = '0 0 12px var(--accent), 0 0 20px var(--primary)';
      btn.style.transform = 'translateY(-5px) scale(1.05)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.boxShadow = '';
      btn.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Header shadow and background color smooth transition on scroll
  const header = document.querySelector('header');
  if(header){
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50){
        header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.15)';
        header.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease';
      } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '1px 2px 1px rgba(0,0,0,0.1)';
      }
    });
  }

});

