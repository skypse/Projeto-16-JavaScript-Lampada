const turnOnOff = document.getElementById("turnOnOff");
const lamp = document.getElementById("lamp");

// Checando se a lâmpada está quebrada
function isLampBroken() {
  return lamp.src.indexOf("quebrada.jpg") > -1;
}

// Ligando a lâmpada
function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./imgs/ligada.jpg";
  }
}


// Desligando a lâmpada
function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "./imgs/desligada.jpg";
  }
}

// Quebrando a lâmpada
function lampBroken() {
  lamp.src = "./imgs/quebrada.jpg";
}

// muda o texto quando estiver ligada, e vice-versa
function lampOnOff(){
  if (turnOnOff.textContent == 'Ligar'){
    lampOn();
    turnOnOff.textContent = 'Desligar';
  } else{
    lampOff();
    turnOnOff.textContent = 'Ligar'
  }
}

// Eventos de click
turnOnOff.addEventListener("click", lampOnOff);
lamp.addEventListener("dblclick", lampBroken);

// Eventos de 'MouseOver' e 'MouseLeave'
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);