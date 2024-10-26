function setActive(event) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
 
    event.currentTarget.classList.add('active');
}

function validateSubscribe() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        const modal = new bootstrap.Modal(document.getElementById('modalpress'));
        modal.show();
    } else {
        alert('Please fill in all fields before sending your message.');
    }
}

function validateContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const modal = new bootstrap.Modal(document.getElementById('modalpress'));
        modal.show();
    } else {
        alert('Please fill in all fields before sending your message.');
    }
}