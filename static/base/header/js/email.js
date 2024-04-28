var emailLink = document.getElementById('emailLink');
var emailAddress = emailLink.getAttribute('href').replace('mailto:', '');

emailLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'mailto:' + emailAddress;
});