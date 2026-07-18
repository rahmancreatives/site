document.addEventListener('DOMContentLoaded', () => {
    // Mobile Toggle
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    if(toggle) {
        toggle.addEventListener('click', () => { 
            nav.classList.toggle('active'); 
        });
    }

    // Form Submission Handling
    const form = document.getElementById('contactForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const action = form.getAttribute('action') || 'send-mail.php';
            const data = new FormData(form);
            
            fetch(action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    alert("Your message was sent successfully to rahmancreatives13@gmail.com! We'll reply ASAP.");
                    form.reset();
                } else {
                    alert("Submission error. Please try again or email us directly.");
                }
            })
            .catch(error => {
                alert("Network error. Please email us at rahmancreatives13@gmail.com");
            });
        });
    }
});