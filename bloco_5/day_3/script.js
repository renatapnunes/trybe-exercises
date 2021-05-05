function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  /* Exercicio 1

   O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
     - Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
     - Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
     - Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */


  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDays(dezDaysList) {
    for (let i = 0; i < dezDaysList.length; i += 1) {
        let listElement = document.createElement('li');
        listElement.innerHTML = dezDaysList[i];
        if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
            listElement.className = 'day holiday';
        } else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
            listElement.className = 'day friday';
        } else if (dezDaysList[i] === 25) {
            listElement.className = 'day holiday friday';
        } else {
            listElement.className = 'day';
        }
        document.querySelector('#days').appendChild(listElement);
      }    
  }

  createDays(dezDaysList);

  /* Exercicio 2
  
  Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
    - Adicione a este botão a ID "btn-holiday" .
    - Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .*/

  function createButton(string, nameId) {
    let button = document.createElement('button');
    button.innerHTML = string;
    button.id = nameId;
    document.querySelector('.buttons-container').appendChild(button);
  }

  createButton('Feriados', 'btn-holiday');

  /* Exercicio 3
  
  Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
    - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
  */
  
    let buttonHoliday = document.querySelector('#btn-holiday')
    let selectedHolidays = false;
    buttonHoliday.addEventListener('click', function () {
        let arrayHolidays = document.querySelectorAll('.holiday');
        selectedHolidays = !selectedHolidays;

        if (selectedHolidays) {
            for (let i = 0; i < arrayHolidays.length; i += 1) {
                arrayHolidays[i].style.backgroundColor = 'rgb(218, 247, 166)';
            }
        } else {
            for (let i = 0; i < arrayHolidays.length; i += 1) {
                arrayHolidays[i].style.backgroundColor = 'rgb(238,238,238)';
            }
        }
    });

  /* Exercicio 4
  
  Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
    - Adicione a este botão o ID "btn-friday" .
    - Adicione este botão como filho/filha da tag <div> com classe "buttons-container". */

    createButton('Sexta-feira', 'btn-friday');

  /* Exercicio 5
  
  Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
    - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias. */

    let buttonFriday = document.querySelector('#btn-friday')
    let selectedFriday = false;
    buttonFriday.addEventListener('click', function () {
        let arrayFriday = document.querySelectorAll('.friday');
        let fridays = [4, 11, 18, 25];
        selectedFriday = !selectedFriday;

        if (selectedFriday) {
            for (let i = 0; i < arrayFriday.length; i += 1) {
                arrayFriday[i].innerHTML = 'SEXTOU';
            }
        } else {
            for (let i = 0; i < arrayFriday.length; i += 1) {
                arrayFriday[i].innerHTML = fridays[i];
            }
        }
    });

  /* Exercicio 6
  
  Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
    - Dica - Propriedade: event.target. */
    
    let arrayDays = document.querySelectorAll('.day');
    
    for (let i = 0; i < arrayDays.length; i += 1) {
        arrayDays[i].addEventListener('mouseover', function (eventOrigin) {
            eventOrigin.target.style.fontSize = '25px';
        });
        
        arrayDays[i].addEventListener('mouseleave', function (eventOrigin) {
            eventOrigin.target.style.fontSize = '20px';
        });
    }

  /* Exercicio 7

  Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
    - O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */

    function addTask(task) {
        let spanElement = document.createElement('span');
        spanElement.innerHTML = task;
        document.querySelector('.my-tasks').appendChild(spanElement);
    }

    addTask('estudar');




    
