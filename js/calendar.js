
// Adicionando a variavel date a data atual
const date = new Date();

//função principal.
const renderCalendar = () => {
  date.setDate(1);
 
  const monthDays = document.querySelector(".days");
  
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() +1,
    0
  ).getDay();  

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  document.querySelector(".data .mes").innerHTML = months[date.getMonth()];

  document.querySelector(".data .ano").innerHTML = date.getFullYear();

  let days = "";
  let y = new Date();
  
 const semana =[
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
 ]

  
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() 
    ) {
      for(let a = 0; a <= 6; a++){

    if(y.getDay() == a){

      days += `<div id="today" class="today"><div class="day"> <div>${semana[a]}</div><div>${i}</div></div> <div class="day comercial">
               </div><div class="day faturamento"></div> <div class="day cobranca">
               </div><div class="day qualidade"></div> <div class="day execucao">
               </div><div class="day suporte"></div> <div class="day suporteEspecializado">
               </div><div class="day estoque"></div> <div class="day backbone">
               </div><div class="day espansao"></div> <div class="day projetos">
               </div><div class="day tecnologia"></div> <div class="day treinamentos"></div><div class="day gestaoPessoas"></div></div>`;
    }
    }
    } else { 
        
      dataAtual = new Date(`${date.getMonth()+1} ${i}, ${date.getFullYear()}`)      
      for (let contador = 0; contador <=6; contador++){
        if(dataAtual.getDay() == contador){
          days += `<div><div class="day dia${i}"><div>${semana[contador]}</div><div>${i}</div></div> <div class="day comercial"></div> <div class="day faturamento">
                   </div><div class="day cobranca"></div> <div class="day qualidade"></div> <div class="day execucao">
                   </div><div class="day suporte"></div> <div class="day suporteEspecializado"></div> <div class="day estoque">
                   </div><div class="day backbone"></div> <div class="day espansao"></div> <div class="day projetos">
                   </div><div class="day tecnologia"></div> <div class="day treinamentos"></div> <div class="day gestaoPessoas"></div></div>`;    
          
        }
      }
    }
  }
 
  for (let j = 1; j <= nextDays; j++) {    
    monthDays.innerHTML = days;
  }

let painel = document.querySelector(".painel")
let el = document.getElementById('today')
let elCoordenadas = el.getBoundingClientRect().x
painel.scroll(elCoordenadas - 200, 0)

};


document.querySelector(".prev").addEventListener("click", () => {   
  date.setMonth(date.getMonth() - 1);    
  renderCalendar();
});  


document.querySelector(".next").addEventListener("click", () => {    
  date.setMonth(date.getMonth() + 1);   
    console.log (date)
  renderCalendar();
});

renderCalendar();
