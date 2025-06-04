document.addEventListener('DOMContentLoaded', function() {

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('header');
  function updateHeader() {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
      header.style.padding = '15px 0';
      header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.padding = '20px 0';
      header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
    }
  }
  window.addEventListener('scroll', updateHeader);
  updateHeader(); // Initialize header state

  // Typing animation for hero section
  const heroTextElements = document.querySelectorAll('.greeting, .tagline, .intro');
  heroTextElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100 + (index * 200));
  });

  // Animate the name logo
  const nameLogo = document.querySelector('.name-logo img');
  if (nameLogo) {
    nameLogo.style.opacity = '0';
    nameLogo.style.transform = 'scale(0.8)';
    nameLogo.style.transition = 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s';
    setTimeout(() => {
      nameLogo.style.opacity = '1';
      nameLogo.style.transform = 'scale(1)';
    }, 400);
  }

  // Animate buttons in hero section
  const heroButtons = document.querySelectorAll('.hero .btn');
  heroButtons.forEach((btn, index) => {
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(20px)';
    btn.style.transition = `opacity 0.6s ease ${0.8 + (index * 0.1)}s, transform 0.6s ease ${0.8 + (index * 0.1)}s`;
    setTimeout(() => {
      btn.style.opacity = '1';
      btn.style.transform = 'translateY(0)';
    }, 800 + (index * 100));
  });

  // Intersection Observer for scroll animations
  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  };

  const observerOptions = {
    threshold: 0.1
  };

  const sectionObserver = new IntersectionObserver(animateOnScroll, observerOptions);
  const skillObserver = new IntersectionObserver(animateOnScroll, observerOptions);
  const projectObserver = new IntersectionObserver(animateOnScroll, observerOptions);

  // Observe sections
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionObserver.observe(section);
  });

  // Observe skill bars
  document.querySelectorAll('.skill-progress').forEach(progress => {
    skillObserver.observe(progress.parentElement);
  });

  // Observe project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    projectObserver.observe(card);
  });

  // Animate skill bars when they come into view
  document.querySelectorAll('.skill-bar').forEach(bar => {
    bar.addEventListener('appear', function() {
      const progress = this.querySelector('.skill-progress');
      const width = progress.style.width;
      progress.style.width = '0';
      setTimeout(() => {
        progress.style.width = width;
      }, 100);
    });
  });

  // Add hover effect to soft skills
  document.querySelectorAll('.soft-skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
    });
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.05)';
    });
  });

  // Animation for certification cards
  document.querySelectorAll('.certification-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 300 + (index * 100));
  });

  // Add ripple effect to buttons
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
  });

  // Add CSS for ripple effect
  const style = document.createElement('style');
  style.textContent = `
    .btn {
      position: relative;
      overflow: hidden;
    }
    .ripple {
      position: absolute;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Parallax effect for hero section
  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
  });

  // Animate timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
          timelineObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    timelineObserver.observe(item);
  });

  // Add animation for contact items
  const contactItems = document.querySelectorAll('.contact-info-item');
  contactItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 300 + (index * 100));
  });

  // Add animation for social links in footer
  const socialLinks = document.querySelectorAll('.social-links a');
  socialLinks.forEach((link, index) => {
    link.style.opacity = '0';
    link.style.transform = 'translateY(20px)';
    link.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    setTimeout(() => {
      link.style.opacity = '1';
      link.style.transform = 'translateY(0)';
    }, 500 + (index * 100));
  });

  // Add scroll to top button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopBtn.className = 'scroll-to-top';
  document.body.appendChild(scrollToTopBtn);

  // Style for scroll to top button
  const scrollToTopStyle = document.createElement('style');
  scrollToTopStyle.textContent = `
    .scroll-to-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--primary);
      color: white;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      z-index: 999;
    }
    .scroll-to-top.visible {
      opacity: 1;
      visibility: visible;
    }
    .scroll-to-top:hover {
      background: var(--primary-dark);
      transform: translateY(-3px);
    }
  `;
  document.head.appendChild(scrollToTopStyle);

  // Show/hide scroll to top button
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  // Scroll to top functionality
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
