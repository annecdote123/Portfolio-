document.addEventListener('DOMContentLoaded', function() {
  if (typeof particlesJS !== 'undefined') {
    console.log("Initializing particles...");
    
    // Initialize particles with higher visibility settings
    particlesJS("bio-bg", {
      particles: {
        number: { 
          value: 100,  // Increased number of particles
          density: { 
            enable: true, 
            value_area: 900 
          } 
        },
        color: { 
          value: "#4ECDC4" // Your primary green color
        },
        shape: { 
          type: "circle" 
        },
        opacity: {
          value: 1,  // Increased from 0.7 to 0.9
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.5,  // Minimum opacity when animating
            sync: false
          }
        },
        size: {
          value: 8,  // Increased from 3 to 4
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 1
          }
        },
        line_linked: {
          enable: true,
          distance: 120,  // Reduced distance to create more connections
          color: "#0a5c36",  // Using your darker green
          opacity: 0.6,  // Increased from 0.4 to 0.6
          width: 1.5  // Increased from 1 to 1.5
        },
        move: {
          enable: true,
          speed: 1.5,  // Increased from 2 to 3
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
            parallax: {
              enable: true,
              force: 60,
              smooth: 10
            }
          },
          onclick: {
            enable: true,
            mode: "push"
          }
        },
        modes: {
          grab: {
            distance: 120,  // Reduced from 140 to make interaction more noticeable
            line_linked: {
              opacity: 0.8 
            }
          },
          push: {
            particles_nb: 6  // Increased from 4 to 6
          }
        }
      },
      retina_detect: true
    });
  } else {
    console.error("particlesJS library not loaded!");
  }
});