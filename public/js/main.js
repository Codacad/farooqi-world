document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('span.hamburger-icon');
    
    hamburgerIcon.addEventListener('click', function(e){
        e.preventDefault()
        document.querySelector('nav#sidenav').classList.add('sidenav-toggle');
        document.querySelector('body').classList.add("overflow-hidden");
        document.querySelector('body').style.transition= "400ms ease-in-out";
        console.log(e.target)
    })
    document.querySelector('nav#sidenav a.close').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('nav#sidenav').classList.remove('sidenav-toggle');
        document.querySelector('body').classList.remove("overflow-hidden");
    }) 

    const articleText =  document.querySelectorAll('#article-body-text');

    articleText.forEach(txt => {       
        if (/^[a-zA-Z]+$/.test(txt.innerHTML)) {                                    
            console.log("English")
          } else {
            // txt.style.fontFamily = "Urdu Nastaliq Unicodef"
            console.log("urdu")
          }
    })

})