console.log("hola");

window.onload = function() {
   
    let wpp = document.querySelector("#wpp");
    console.log(wpp);
    $('#wpp').floatingWhatsApp({
        phone: '5491126717400',
        popupMessage: 'Hola, ¿cómo podemos ayudarte?',
        showPopup: true
    });
  };



