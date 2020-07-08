document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('div.nav-left-menus a.hamburger-icon');
    hamburgerIcon.addEventListener('click', function(e){
        e.preventDefault()
        document.querySelector('div#sidenav-wrapper').classList.add('sidenav-wrapper-toggle')
        document.querySelector('nav.sidenav').classList.add('sidenav-toggle');
        document.querySelector('body').classList.add("overflow-hidden");
        document.querySelector('body').style.transition= "400ms ease-in-out";
        console.log(e.target)
    })
    
    document.querySelector('nav.sidenav div.header a.close').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('div#sidenav-wrapper').classList.remove('sidenav-wrapper-toggle')
        document.querySelector('nav.sidenav').classList.remove('sidenav-toggle');
        document.querySelector('body').classList.remove("overflow-hidden");
    }) 

    const caret = document.querySelector('ul.user-menus li a.caret')
    let trueOrFalse = false;
    caret.addEventListener('click', (e) => {        
        e.preventDefault();       
        trueOrFalse = !trueOrFalse
        console.log(trueOrFalse)
        
        if(trueOrFalse){
            document.querySelector('ul.user-menus li ul').classList.add('toggle-user-menus')
            document.querySelector('div#dropdown-wrapper').classList.add('toggle-dropdown')
        }else{
            document.querySelector('ul.user-menus li ul').classList.remove('toggle-user-menus')
            document.querySelector('div#dropdown-wrapper').classList.remove('toggle-dropdown')
        }
    })

    window.onclick = (e) => {
        if(e.target.id == "sidenav-wrapper"){
            document.querySelector('div#sidenav-wrapper').classList.remove('sidenav-wrapper-toggle');
            document.querySelector('nav.sidenav').classList.remove('sidenav-toggle');
            document.querySelector('body').classList.remove("overflow-hidden");
        }        
        if(e.target.id == 'dropdown-wrapper'){
            document.querySelector('ul.user-menus li ul').classList.remove('toggle-user-menus')
            document.querySelector('div#dropdown-wrapper').classList.remove('toggle-dropdown')
        }
    }

    document.querySelector('a.edit-icon').addEventListener('click', (e) => {
        e.preventDefault()
    })
    document.querySelector('a.delete-icon').addEventListener('click', (e) => {
        e.preventDefault()
    })
    document.querySelector('a.comment-icon').addEventListener('click', (e) => {
        e.preventDefault()
    })
    document.querySelector('a.like-icon').addEventListener('click', (e) => {
        e.preventDefault()
    })
    document.querySelector('a.share-icon').addEventListener('click', (e) => {
        e.preventDefault()
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