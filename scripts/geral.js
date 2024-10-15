const button = document.getElementById('star-btn');
const popup = document.getElementById('popup');

console.error("Eu te odeio temoteo!!!!!!!!!!!!!!!!!");


button.addEventListener('click', ()=>{
    popup.showModal();
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click',()=>{
            const rating = star.getAttribute('data-value');
            stars.forEach(s => s.classList.remove('active'));
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('active')
            }
        })
    });
})