
const d = document.querySelector('#d')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const Sunday = document.querySelector('#domingo')
const Monday = document.querySelector('#segunda')
const Tuesday = document.querySelector('#terca')
const Wednesday = document.querySelector('#quarta')
const Thursday = document.querySelector('#quinta')
const Friday = document.querySelector('#sexta')
const Saturday = document.querySelector('#sabado')
let data = new Date();

mes.append(data.getMonth());

// Friday.append(data.getDay());

// d.append(data.getDate());

let domingo = ''
let segunda = ''
let terca = ''
let quarta = ''
let quinta = ''
let sexta = ''
let sabado = ''

const semana =[
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
   ]
for (let i = 1; i<=LastDay; i++){
    var dateAtual = Date(`jan ${i}, 2021`);
   
}





