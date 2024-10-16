const container = document.querySelector('.teacher-images');
const images = document.querySelectorAll('.image-btn');

const info = [
    {
        name:"Fernanda",
        age:0,
        formations:["a"],
        image:"../assets/Professores/fernanda.jpg"
    },
    {
        name:"",
        age:0,
        formations:[]
    },
    {
        name:"",
        age:0,
        formations:[]
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

console.log('Ainda faltam corrigir algumas coisas ');
