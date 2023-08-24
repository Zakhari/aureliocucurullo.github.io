// Navbar e links
let navBar = document.querySelector('#navBar')
let links = document.querySelectorAll('.nav-link')


window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY;

    if(scrolled > 0){
        navBar.style.backgroundColor = `rgb(23, 23, 23)`;
        navBar.style.minHeigth = '150px';
        links.forEach((link)=> {
            link.style.color = 'rgb(255, 255, 255)'
        })
    } else {
        navBar.style.backgroundColor = `transparent`;
        navBar.style.minHeigth = '107px';
        links.forEach((link)=> {
            link.style.color = 'rgb(0, 0, 0)';
        })
}
})






