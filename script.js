// Enhanced cursor effects
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

// Smooth cursor movement with lerp (linear interpolation)
let currentX = 0, currentY = 0;
let targetX = 0, targetY = 0;

document.addEventListener("mousemove", function (dets) {
  targetX = dets.x;
  targetY = dets.y;
});

// Smooth cursor animation
function animate() {
  let dx = targetX - currentX;
  let dy = targetY - currentY;
  
  currentX += dx * 0.1;
  currentY += dy * 0.1;
  
  crsr.style.left = currentX + "px";
  crsr.style.top = currentY + "px";
  blur.style.left = currentX - 250 + "px";
  blur.style.top = currentY - 250 + "px";
  
  requestAnimationFrame(animate);
}
animate();

// Enhanced hover effects
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gsap.to(crsr, {
      scale: 1.5,
      border: "1px solid #fff",
      backgroundColor: "transparent",
      duration: 0.3
    });
  });
  elem.addEventListener("mouseleave", function () {
    gsap.to(crsr, {
      scale: 1,
      border: "0px solid #95C11E",
      backgroundColor: "#95C11E",
      duration: 0.3
    });
  });
});

// Parallax effect for cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    gsap.to(card, {
      rotationY: ((x - rect.width / 2) / 10),
      rotationX: -((y - rect.height / 2) / 10),
      duration: 0.5,
      ease: "power2.out"
    });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  });
});

// Keep your existing GSAP animations but add some improvements
gsap.to("#nav", {
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  backdropFilter: "blur(10px)",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -20%",
    scrub: 1
  }
});

// Smooth scroll implementation
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
