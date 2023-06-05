function carregar() {
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');
  var data = new Date();
   var hora = data.getHours();

  
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    // Bom dia
    img.src = './img/manha.png';
    document.body.style.background = '#87abc2';
  } else if (hora >= 12 && hora <= 18) {
    // Boa tarde
    img.src = './img/tarde.png';
     document.body.style.background = '#e7b28a';
  } else {
    //Boa noite
    img.src = './img/noite.png';
    document.body.style.background = '#1a2935' ;
  }
}
