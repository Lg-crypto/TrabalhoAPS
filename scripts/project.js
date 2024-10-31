const container = document.querySelector('.teacher-images');
const buttons = document.querySelectorAll('.image-btn');

const professores = [
    {   
        img: '../assets/Professores/fernanda.jpg',
        name:'Fernanda Hellen de Souza',
        formations: 'Analista de Sistemas',
        discipline: 'Analise e Projetos de Sistemas'
    },
    {
        img:'../assets/Professores/celia.jpg',
        name:'Celia Aparecida Barufaldi',
        formations:'Tecnologia em Processamento de Dados',
        discipline:'Programação WEB I'
    },
    {
        img:'../assets/Professores/samuel.jpg',
        name:'Samuel dos Santos',
        formations:'Tecnologia em Processamento de Dados',
        discipline:'Programação WEB I'
    },
    {
        img: '../assets/Professores/priscila.jpg',
        name: 'Priscila Batista Martins',
        formations: 'Análise de sistema;<br>Pedagogia: Especialista em informática e Educação',
        discipline: 'Banco de dados'
    }
];

<<<<<<< HEAD
buttons.forEach((btn, i) => {
    function criarPopup() {
        const dialog = document.createElement('dialog');
        dialog.classList.add('teacher-popup');
        dialog.innerHTML = `
            <button id="x">x</button>
            <img src="${professores[i].img}" alt="${professores[i].name}"/>
            <h3>${professores[i].name}</h3>
            <div class="card">
                <label class="label">Matéria</label>
                <p>${professores[i].discipline}</p>
            </div>
            <div class="card">
                <label class="label">Formação</label>
                <p>${professores[i].formations}</p>
            </div>
        `;
        
        container.appendChild(dialog);
        dialog.showModal();

        const x = dialog.querySelector('#x');
        x.addEventListener('click', () => {
            dialog.close();
            dialog.remove(); // Remove o popup do DOM após fechar
        });
    }

    btn.addEventListener('click', () => {
        criarPopup();
    });
});
=======
buttons.forEach((btn,i)=>{
    btn.addEventListener('click',e =>{
        container.innerHTML += `
        <dialog class="teacher-popup" style="display:flex">
            <button id="x">x</button>
            <img src="${professores[i].img}" alt="${professores[i].name}"/>
            <h3>
                ${professores[i].name}
            </h3>
            <div class="card">
                <label class="label">
                    Matéria
                </label>
                <p>
                    ${professores[i].discipline}
                </p>
            </div>
            <div class="card">
                <label class="label">
                    Formação
                </label>
                <p>
                    ${professores[i].formations}
                </p>
            </div>
        <dialog>
        `;
        const popup = document.querySelector('.teacher-popup');
        const x = document.getElementById('x');
        x.addEventListener('click',()=>{
            popup.style.display ='none'
            popup.close();
        })
        popup.style.display = 'flex'
        popup.showModal()
    })
})

>>>>>>> 5273b1a1b3cd8e8cfb1f58dc696ef44aad3aa9b7
