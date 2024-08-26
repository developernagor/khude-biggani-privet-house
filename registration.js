document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    window.location.href = "login.html"; // Redirect to the desired URL
});
