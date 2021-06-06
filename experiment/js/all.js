//about us javascript

function toggl(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var popup = document.getElementById('popup');
    popup.classList.toggle('active')
}

//end of about us


openNav = () => {
    let nav=document.querySelector('.nav-overlay')

    nav.classList.toggle('active')

    let hamb = document.querySelector('.hamburger')

    hamb.classList.toggle('active')
}
