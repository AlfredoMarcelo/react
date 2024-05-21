export default function Timer() {
    // Se crea el contenedor principal
    const selectMainContainer = document.querySelector('#root');
    if (!selectMainContainer) {
        console.error('No se encontró el contenedor principal con el id "root"');
        return;
    }

    // Limpiar el contenedor principal antes de agregar el nuevo temporizador
    selectMainContainer.innerHTML = '';

    // main container
    const mainContainerTimer = document.createElement('div');
    mainContainerTimer.classList.add('main-container-timer');
    // container descripton
    const containerDescription = document.createElement('div');
    containerDescription.classList.add('container-description');
    // container timer
    const containerTimer = document.createElement('div');
    containerTimer.classList.add('container-timer');
    
    // Creación de texto
    const titleTimer = document.createElement('p');
    titleTimer.classList.add('title-timer');
    titleTimer.textContent = '!NO TE LO PIERDAS!🔥';
    const descriptionTimer = document.createElement('p');
    descriptionTimer.classList.add('description-timer');
    descriptionTimer.textContent = 'Este producto es uno de los favoritos y se agota rápido';

    containerDescription.appendChild(titleTimer)
    containerDescription.appendChild(descriptionTimer)

    // Creación del temporizador
    const timer = document.createElement('span');
    timer.classList.add('time');
    containerTimer.appendChild(timer)
    

    const containerMinutes = document.createElement('div');
    const containerSeconds = document.createElement('div');

    const minute1 = document.createElement('span');
    const minute2 = document.createElement('span');
    const colon = document.createElement('span'); 
    colon.textContent = ':';
    const second1 = document.createElement('span');
    const second2 = document.createElement('span');

    minute1.classList.add('digit', 'minute');
    minute2.classList.add('digit', 'minute');
    colon.classList.add('colon');
    second1.classList.add('digit', 'second');
    second2.classList.add('digit', 'second');


    containerTimer.appendChild(minute1);
    containerTimer.appendChild(minute2);
    containerTimer.appendChild(colon);
    containerTimer.appendChild(second1);
    containerTimer.appendChild(second2);






    mainContainerTimer.appendChild(containerDescription);
    mainContainerTimer.appendChild(containerTimer);
    
    // Agregando componente completo a checkout
    selectMainContainer.appendChild(mainContainerTimer);
    
    function startTimer(duration, display) {
        let timer = duration;
        const intervalId = setInterval(function () {
            let minutes = Math.floor(timer / 60);
            let seconds = timer % 60;
    
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
    
            display.textContent = minutes + ':' + seconds;
    
            if (--timer < 0) {
                clearInterval(intervalId);
                display.textContent = '00:00';
            }
        }, 1000);
    }
    
    const duration = 10 * 60; // 10 minutos
    startTimer(duration, timer);
}



// contenedor principal
const containerTimer = document.createElement('div');
containerTimer.className = "container-timer";
const containerTextTimer = document.createElement('p');
const containerTextContent = document.createTextNode('Aqui va el contenedor con el timer');
containerTextTimer.appendChild(containerTextContent);
containerTimer.appendChild(containerTextTimer);

// agregar timer a contenedor y luego al 
const checkoutContainer = document.querySelector(".cart-template");
const  checkoutContainerMain = checkoutContainer.parentNode;
checkoutContainerMain.insertBefore(containerTimer, checkoutContainer);


// Creacion de timer 
setTimeout(() => {
    console.log("this is the first message");
  }, 5000);
  setTimeout(() => {
    console.log("this is the second message");
  }, 3000);
  setTimeout(() => {
    console.log("this is the third message");
  }, 1000);
