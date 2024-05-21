export default function Timer() {
  // Se crea el contenedor principal
  const selectMainContainer = document.querySelector("#root");
  if (!selectMainContainer) {
    console.error('No se encontró el contenedor principal con el id "root"');
    return;
  }

  // Limpiar el contenedor principal antes de agregar el nuevo temporizador
  selectMainContainer.innerHTML = "";

  // main container
  const mainContainerTimer = document.createElement("div");
  mainContainerTimer.classList.add("main-container-timer");
  // container descripton
  const containerDescription = document.createElement("div");
  containerDescription.classList.add("container-description");
  // container timer
  const containerTimer = document.createElement("div");
  containerTimer.classList.add("container-timer");

  // Creación de texto
  const titleTimer = document.createElement("p");
  titleTimer.classList.add("title-timer");
  titleTimer.textContent = "!NO TE LO PIERDAS!🔥";
  const descriptionTimer = document.createElement("p");
  descriptionTimer.classList.add("description-timer");
  descriptionTimer.textContent =
    "Este producto es uno de los favoritos y se agota rápido";

  containerDescription.appendChild(titleTimer);
  containerDescription.appendChild(descriptionTimer);

  // Creación del temporizador
  const containerMinutes = document.createElement("div");
  containerMinutes.classList.add("container-minutes");

  const containerSeconds = document.createElement("div");
  containerSeconds.classList.add("container-seconds");

  const minute1 = document.createElement("span");
  const minute2 = document.createElement("span");
  const titleMinutes = document.createElement("p");
  titleMinutes.textContent = "MINUTOS";
  const colon = document.createElement("span");
  colon.textContent = ":";
  const second1 = document.createElement("span");
  const second2 = document.createElement("span");
  const titleSeconds = document.createElement("p");
  titleSeconds.textContent = "SEGUNDOS";

  minute1.classList.add("digit", "minute-1");
  minute2.classList.add("digit", "minute-2");
  titleMinutes.classList.add("title-minutes");
  colon.classList.add("colon");
  second1.classList.add("digit", "second-1");
  second2.classList.add("digit", "second-2");
  titleSeconds.classList.add("title-seconds");

  containerMinutes.appendChild(minute1);
  containerMinutes.appendChild(minute2);
  containerMinutes.appendChild(titleMinutes);
  containerSeconds.appendChild(second1);
  containerSeconds.appendChild(second2);
  containerSeconds.appendChild(titleSeconds);

  containerTimer.appendChild(containerMinutes);
  containerTimer.appendChild(colon);
  containerTimer.appendChild(containerSeconds);

  mainContainerTimer.appendChild(containerDescription);
  mainContainerTimer.appendChild(containerTimer);

  // Agregando componente completo a checkout
  selectMainContainer.appendChild(mainContainerTimer);

  function startTimer(
    duration,
    minute1A,
    minute2A,
    second1A,
    second2A,
    container
  ) {
    let timer = duration;
    const intervalId = setInterval(function () {
      let minutes = Math.floor(timer / 60);
      let seconds = timer % 60;

      const minutesString = minutes < 10 ? "0" + minutes : minutes.toString();
      const secondsString = seconds < 10 ? "0" + seconds : seconds.toString();

      minute1A.textContent = minutesString.charAt(0);
      minute2A.textContent = minutesString.charAt(1);
      second1A.textContent = secondsString.charAt(0);
      second2A.textContent = secondsString.charAt(1);

      if (--timer < 0) {
        clearInterval(intervalId);
        minute1A.textContent = "0";
        minute2A.textContent = "0";
        second1A.textContent = "0";
        second2A.textContent = "0";
        container.remove();
      }
    }, 1000);
  }

  const duration = 10 * 60; // 10 minutos
  startTimer(duration, minute1, minute2, second1, second2, mainContainerTimer);
}
