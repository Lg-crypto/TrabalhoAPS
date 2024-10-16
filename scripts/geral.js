const button = document.getElementById('star-btn');
const popup = document.getElementById('popup');

console.error("Eu te odeio temoteo!!!!!!!!!!!!!!!!!");


button.addEventListener('click', ()=>{
    popup.showModal();
    const stars = document.querySelectorAll('.star');
    const send = document.getElementById('send-btn');
    const close = document.getElementById('close')
    let isEvaluated = false;

    close.addEventListener('click',()=>popup.close())
    send.addEventListener('click',()=>{
        if(isEvaluated){
            alert('Obrigado pela avaliação!');
            popup.close();
            return;
        }
        alert('Avalie antes de enviar')
    })
    stars.forEach(star => {
        star.addEventListener('click',()=>{
            const rating = star.getAttribute('data-value');
            stars.forEach(s => s.classList.remove('active'));
            isEvaluated = true;
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('active')
            }
        })
    });
})