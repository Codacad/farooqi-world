document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('span.hamburger-icon');
    
    hamburgerIcon.addEventListener('click', function(e){
        e.preventDefault()
        document.querySelector('nav#sidenav').classList.add('sidenav-toggle');
    })

    document.querySelector('nav#sidenav a#close').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('nav#sidenav').classList.remove('sidenav-toggle');
    })
})