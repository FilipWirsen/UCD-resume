window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_9qwstdr', 'template_pw803a8', this)
            .then(function(response) {
                console.log('SUCCESS!', response);
            }, function(error) {
                console.log('FAILED...', error);
            });
        });
    }
// emailjs.send("service_9qwstdr", "template_pw803a8");