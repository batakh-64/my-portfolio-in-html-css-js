// menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});












document.querySelectorAll('.project-image-wrapper').forEach(wrapper => {
    let isAnimating = false;

    // 3D Tilt Effect
    wrapper.addEventListener('mousemove', (e) => {
        if (isAnimating) return;

        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = (x - centerX) / 20;
        const rotateX = (centerY - y) / 20;

        wrapper.querySelector('.project-image-animator').style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    wrapper.addEventListener('mouseleave', () => {
        if (isAnimating) return;
        wrapper.querySelector('.project-image-animator').style.transform =
            'rotateX(0) rotateY(0) translateZ(0)';
    });

    // Click Animation with Ripple
    wrapper.addEventListener('click', function (e) {
        if (isAnimating) return;
        isAnimating = true;

        const animator = this.querySelector('.project-image-animator');
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Create ripple
        const ripple = document.createElement('div');
        ripple.classList.add('ripple-circle');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);

        // Click animation
        animator.classList.add('active-click');

        // Reset after animation
        setTimeout(() => {
            ripple.remove();
            animator.classList.remove('active-click');
            animator.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
            isAnimating = false;
        }, 800);
    });
});






let downloadbtn1 = document.getElementById("downloadbtn1");


downloadbtn1.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "/my-portfolio-in-html-css-js/Portfolio/images/Aqsa_Rajpoot_Resume.docx";
    link.download = "Aqsa_Rajpoot_Resume.docx";
    link.click();
});

































