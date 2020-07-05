let smallMedia = window.matchMedia("(max-width: 900px)");
let navBarExample = document.querySelector("#navbarsExample08");

$(window).on('scroll', function () {
    let navBarExample = document.querySelector("#navbarsExample08");
    if (($(window).scrollTop() > 10)) {
        //console.log("si");
        $('.navbar').addClass('active');
        if (smallMedia.matches) {
            //$('.navbar-collapse').addClass('modal');
            //console.log("small media click");


        }
    }else {
        $('.navbar').removeClass('active');
    }
    if (navBarExample.classList.toString().includes("show")) {
        //console.log("joya");
        // When the modal is shown, we want a fixed body
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;

    } if (navBarExample.classList.toString().includes("collapsing")) {
        // When the modal is hidden...
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        $('.navbar').removeClass('active');
    }
});
//console.log("it works!");

let modal = document.querySelector(".navbar-collapse");








