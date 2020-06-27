document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('span.hamburger-icon');
    
    hamburgerIcon.addEventListener('click', function(e){
        e.preventDefault()
        document.querySelector('nav#sidenav').classList.add('sidenav-toggle');
        document.querySelector('body').style.overflow = "hidden";
        document.querySelector('body').style.transition= "400ms ease-in-out";
        console.log(e.target)
    })

    document.querySelector('nav#sidenav a#close').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('nav#sidenav').classList.remove('sidenav-toggle');
        document.querySelector('body').style.overflow = "auto";
  
    }) 
})