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
    document.querySelectorAll('a.edit-icon').forEach(editIcon => {
        editIcon.addEventListener('click', (e) => {
            e.preventDefault()
        })
    })     
    document.querySelectorAll('a.delete-icon').forEach(deleteIcon => {
        deleteIcon.addEventListener('click', (e) => {
            e.preventDefault()
        })
    })     
    document.querySelectorAll('a.comment-icon').forEach(commentIcon => {
        commentIcon.addEventListener('click', (e) => {
            e.preventDefault()
        })
    })     
    document.querySelectorAll('a.like-icon').forEach(likeIcon => {
        likeIcon.addEventListener('click', (e) => {
            e.preventDefault()
        })
    })     
    document.querySelectorAll('a.share-icon').forEach(shareIcon => {
        shareIcon.addEventListener('click', (e) => {
            e.preventDefault()
        })
    })     
    const ellipseIcon = document.querySelectorAll('a.ellipse-icon');
    ellipseIcon.forEach(ellipse => {
        ellipse.addEventListener('click', (e) => {
            e.preventDefault();
            trueOrFalse = !trueOrFalse;        
            if(trueOrFalse){
                ellipse.nextElementSibling.classList.add('edit-and-delete-dropdown-toggle')
            }else{
                ellipse.nextElementSibling.classList.remove('edit-and-delete-dropdown-toggle')
            }            
        })
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
    document.querySelector('nav#navbar a.mobile-login-btn').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('div#login-wrapper').classList.add('toggle-login-wrapper');  
    })
    document.querySelector('nav#navbar a.mobile-register-btn').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('div#login-wrapper').classList.add('toggle-login-wrapper');  
    })
    document.querySelector('div.login-close a').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('div#login-wrapper').classList.remove('toggle-login-wrapper');
    })

})