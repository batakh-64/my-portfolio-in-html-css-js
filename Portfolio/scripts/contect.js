
(function() {
    emailjs.init("cSmWuTpQtNnAiacFx"); 
})();

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const buttonText = submitButton.querySelector('.button-text');
            const loadingSpinner = submitButton.querySelector('.loading-spinner');
            const formMessage = document.getElementById('form-message');
            
            // Validate form
            if (!validateForm(contactForm)) {
                return;
            }
            
            // Show loading state
            buttonText.style.display = 'none';
            loadingSpinner.style.display = 'inline-block';
            submitButton.disabled = true;
            
            // Prepare form data
            const formData = new FormData(contactForm);
            const templateParams = {
                from_name: formData.get('from_name'),
                from_email: formData.get('from_email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Send email using EmailJS
            emailjs.send('service_hb9fk2a', 'template_k1hb2kc', templateParams)
                .then(function(response) {
                    showFormMessage(formMessage, 'success', 'Message sent successfully!');
                    contactForm.reset();
                }, function(error) {
                    showFormMessage(formMessage, 'error', 'Failed to send message. Please try again later.');
                    console.error('EmailJS Error:', error);
                })
                .finally(function() {
                    // Reset button state
                    buttonText.style.display = 'inline-block';
                    loadingSpinner.style.display = 'none';
                    submitButton.disabled = false;
                });
        });
    }
    
    // Form validation
    function validateForm(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        // Clear previous error messages
        const previousErrors = form.querySelectorAll('.error-message');
        previousErrors.forEach(error => error.remove());
        
        // Validate required fields
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                showFieldError(field, 'This field is required');
                isValid = false;
            } else if (field.type === 'email' && !isValidEmail(field.value)) {
                showFieldError(field, 'Please enter a valid email');
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    // Show field error message
    function showFieldError(field, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.color = 'var(--accent-light)';
        errorElement.style.fontSize = '1.4rem';
        errorElement.style.marginTop = '0.5rem';
        
        field.style.borderColor = 'var(--accent-light)';
        field.parentNode.insertBefore(errorElement, field.nextSibling);
        
        // Remove error on input
        field.addEventListener('input', function() {
            if (field.value.trim()) {
                errorElement.remove();
                field.style.borderColor = '';
            }
        });
    }
    
    // Email validation
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Show form message
    function showFormMessage(element, type, message) {
        element.textContent = message;
        element.style.display = 'block';
        
        if (type === 'success') {
            element.style.backgroundColor = 'rgba(40, 167, 69, 0.2)';
            element.style.color = '#28a745';
        } else {
            element.style.backgroundColor = 'rgba(220, 53, 69, 0.2)';
            element.style.color = '#dc3545';
        }
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            element.style.opacity = '0';
            element.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                element.style.display = 'none';
                element.style.opacity = '1';
            }, 500);
        }, 5000);
    }
});