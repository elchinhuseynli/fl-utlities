//https://preview.webflow.com/preview/flex-agency-2023?utm_medium=preview_link&utm_source=designer&utm_content=flex-agency-2023&preview=868e79bf535ca34d35886bff6d670bbd&workflow=preview

// Portfolio Scroll

const portfolioRevealAnimation = () => {
    const images = Array.from(
      document.querySelectorAll(".stickt-section_frame-wrapper")
    );
    const contents = Array.from(
      document.querySelectorAll(".sticky-section_content")
    );
  
    images.forEach((image, index) => {
      const scrollTriggerConfig = {
        trigger: image,
        start: "bottom bottom",
        end: "center center",
        scrub: true, // Add scrub option to synchronize animations
      };
  
      gsap
        .timeline({ scrollTrigger: scrollTriggerConfig })
        // Animate image
        .fromTo(
          image,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: "power1.out", duration: 1 }
        );
  
      if (contents[index]) {
        gsap
          .timeline({ scrollTrigger: scrollTriggerConfig })
          // Animate content
          .fromTo(
            contents[index],
            { autoAlpha: 0 },
            { autoAlpha: 1, ease: "power1.out", duration: 1 }
          );
      }
    });
  };
  
  const PortfolioFadeAnimation = () => {
    const panels = Array.from(document.querySelectorAll(".sticky-section_panel"));
  
    panels.forEach((panel, index) => {
      const isLast = index === panels.length - 1;
  
      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            scrub: 1,
          },
        })
        // Animate panel
        .to(
          panel,
          {
            ease: "none",
            startAt: { filter: "brightness(100%) blur(0px)" },
            filter: isLast ? "none" : "brightness(10%) blur(5px)",
            scale: 0.8,
            borderRadius: 40,
            autoAlpha: isLast ? 1 : 0,
          },
          "<"
        );
    });
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    portfolioRevealAnimation();
    PortfolioFadeAnimation();
  });