function setActive(event) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
 
    event.currentTarget.classList.add('active');
}