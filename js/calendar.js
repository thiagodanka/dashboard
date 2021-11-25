
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
    date.getMonth() + 1,
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

  const semana = [
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
      for (let a = 0; a <= 6; a++) {

        if (y.getDay() == a) {

          days += `<div id="today" class="today dia${i}">
                      <div class="day"> 
                        <div>${semana[a]}</div>
                        <div>${i}</div>
                      </div> 
                      <div class="day comercial${i}"></div>   
                      <div class="day faturamento${i}"></div>
                      <div class="day cobranca${i}"></div> 
                      <div class="day qualidade${i}"></div> 
                      <div class="day execucao${i}"></div>
                      <div class="day suporte${i}"></div> 
                      <div class="day suporteEspecializado${i}"></div> 
                      <div class="day estoque${i}"></div>
                      <div class="day backbone${i}"></div> 
                      <div class="day espansao${i}"></div> 
                      <div class="day projetos${i}"></div>
                      <div class="day tecnologia${i}"></div> 
                      <div class="day treinamentos${i}"></div> 
                      <div class="day gestaoPessoas${i}"> </div>
                    </div>`;
        }
      }
    } else {

      dataAtual = new Date(`${date.getMonth() + 1} ${i}, ${date.getFullYear()}`)
      for (let contador = 0; contador <= 6; contador++) {
        if (dataAtual.getDay() == contador) {
          days += `<div class="dia${i}">
                      <div class="day dia">
                       <div>${semana[contador]}</div>
                       <div>${i}</div>
                      </div>
                      <div class="day comercial${i}"></div>
                      <div class="day faturamento${i}"></div>
                      <div class="day cobranca${i}"></div>
                      <div class="day qualidade${i}"></div>
                      <div class="day execucao${i}"></div>
                      <div class="day suporte${i}"></div>
                      <div class="day suporteEspecializado${i}"></div>
                      <div class="day estoque${i}"></div>
                      <div class="day backbone${i}"></div>
                      <div class="day espansao${i}"></div>
                      <div class="day projetos${i}"></div>
                      <div class="day tecnologia${i}"></div>
                      <div class="day treinamentos${i}"></div>
                      <div class="day gestaoPessoas${i}"> </div>
      </div>`;
        }
      }
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    monthDays.innerHTML = days;

  }

  // rolar para today ao renderizar a pagina
  let painel = document.querySelector(".painel")
  let today = document.getElementById('today')
  let todayCoordinates = today.getBoundingClientRect().x
  painel.scroll(todayCoordinates - 200, 0)



  //==================================================teste add items
  const iclassItem = `<img class="iclass"
    src="https://www.iclass.com.br/wp-content/uploads/2018/05/logo-IClass-Software-de-Ordem-de-Servi%C3%A7o-Online.png"
    alt="">`
  const eliteItem = `<img class="elite" src="img/elite-logo.png" alt="">`
  const simplesItem = `<img class="simples" src="img/LOGO_SIMPLES_IP.png" alt="">`
  const forticsItem = `<img class="fortics" src = "img/WhatsApp.svg.png" alt = "" >`

  const iclass = document.querySelector('.iclass')
  const elite = document.querySelector('.elite')
  const simples = document.querySelector('.simples')
  const fortics = document.querySelector('.fortics')
  const clicado = document.querySelectorAll(`.day`)
  const modaloff = document.querySelector(".modaloff")

  for (let x = 0; x <= 450; x++) {    
    if (clicado[x].addEventListener("click", () => {
      modaloff.classList.add('modalon')
      for(let contador = x; contador == x; contador++){
        console.log(contador)
      if (iclass.addEventListener("click", () => {
        clicado[contador].innerHTML += iclassItem
        modaloff.classList.remove('modalon')
      }));}
      if (elite.addEventListener("click", () => {
        clicado[x].innerHTML += eliteItem
        modaloff.classList.remove('modalon')
      }));
      if (simples.addEventListener("click", () => {
        clicado[x].innerHTML += simplesItem
        modaloff.classList.remove('modalon')
      }));
      if (fortics.addEventListener("click", () => {
        clicado[x].innerHTML += forticsItem
        modaloff.classList.remove('modalon')
      }));
    
    }));

    const closeModal = document.querySelector('.closeModal')
    if (closeModal.addEventListener("click", () => {
      modaloff.classList.remove('modalon')
    }));
  }

  //==================================================teste add items

};

let painel = document.querySelector(".painel")

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  if (date.getMonth() == Date.getMonth) {
    painel.scroll(todayCoordinates - 200, 0)
  } else {
    painel.scroll(0, 0)
  }
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  if (date.getMonth() == Date.getMonth) {
    painel.scroll(todayCoordinates - 200, 0)
  } else {
    painel.scroll(0, 0)
  }
  renderCalendar();
});

renderCalendar();
