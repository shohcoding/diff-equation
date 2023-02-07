const navAnim = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.new__nav')
    
    burger.addEventListener("click",() => {
        nav.classList.toggle('nav__activ')

        burger.classList.toggle('toggle')
    })  
}
navAnim()