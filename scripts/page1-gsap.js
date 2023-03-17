    const sections = gsap.utils.toArray(".work-title");
    const container = document.querySelector('#work');
   
    const tl = gsap.timeline({
     
       scrollTrigger: {
            trigger: ".work-title",
            start: "top 10%",
            end: "top 1%",
            ease: "expo.inOut",
            delay: -1,
            scrub: true,
            //markers: true,
            end: () => `+=${container.offsetWidth}`
        }
    })
   
     tl
    .to(sections, { duration: 1, xPercent: -100 * (sections.length - 1), ease: "none" })
    .to(container, { duration: 1, backgroundColor: '#0E0B0B', ease: "none" }, 0)
