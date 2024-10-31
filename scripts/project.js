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
        name:"",
        age:0,
        formations:[]
    }
]

const create = ()=>{
    info.forEach((teacher, index)=>{
        container.innerHTML += `
        <div class="teacher-info teacher${index+1}">
            <div class="first-line">
                <img src="${teacher.image}">
            </div>
            <div class="second-line">
                <h6>${teacher.name}</h6>
            </div>
        </div>
        `;
    })
}
create()