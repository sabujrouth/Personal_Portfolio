/* This JavaScript code is selecting an element with the id 'MenuBtn' from the document and assigning
it to the variable MenuBtn. It then adds a click event listener to the MenuBtn element. When the
MenuBtn is clicked, it toggles the 'mobile-nav-active' class on the body element using
document.querySelector('body').classList.toggle('mobile-nav-active'). */
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

/* This code snippet is initializing a new Typed instance on an element with the class 'auto-input'.
The Typed library is typically used to create typing animations on web pages. */
let typed = new Typed('.auto-input', {
    strings: ['Web Developer!', 'Designer!', 'Freelancer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 2000,
    loop: true
})


