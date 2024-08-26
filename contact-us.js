
// Contact Section
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Mock sending logic - Replace this with actual form submission logic
    alert(`ধন্যবাদ, ${name}! আপনার বার্তা পাঠানো হয়েছে।`);

    // Clear the form
    document.getElementById('contactForm').reset();
});

