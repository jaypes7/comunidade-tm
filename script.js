document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ Accordion functionality
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const plusSign = button.querySelector('span:last-child');
            
            // Toggle content visibility
            content.classList.toggle('hidden');
            
            // Rotate plus sign to make it a minus sign
            if (content.classList.contains('hidden')) {
                plusSign.style.transform = 'rotate(0deg)';
            } else {
                plusSign.style.transform = 'rotate(45deg)';
            }
            
            // Close other open accordions
            document.querySelectorAll('.accordion-content').forEach(otherContent => {
                if (otherContent !== content && !otherContent.classList.contains('hidden')) {
                    otherContent.classList.add('hidden');
                    otherContent.previousElementSibling.querySelector('span:last-child').style.transform = 'rotate(0deg)';
                }
            });
        });
    });
});
