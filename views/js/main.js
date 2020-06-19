document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('span.hamburger-icon').addEventListener('click', function(e){
        e.preventDefault()
        document.querySelector('ul.mobile-menus').classList.toggle('toggle-ul')
    })
})