// Catálogo

var equipos = {
    0: {
        nombre: "PSG",
        logo: "assets/img/psg.png",
        descripcion: "El Paris Saint-Germain Football Club, conocido popularmente por sus siglas PSG, es un club de fútbol con sede en París, Francia. Fue fundado el 12 de agosto de 1970 tras la fusión del Paris Football Club y el Stade Saint-Germanois.",
        rival: "Manchester City"
    },
    1: {
        nombre: "Manchester City",
        logo: "assets/img/city.png",
        descripcion: "El Manchester City Football Club es un equipo club de fútbol de Manchester, Inglaterra que juega en la Premier League. Fue fundado en 23 de noviembre de 1880 bajo el nombre de St. Mark's (West Gorton), luego pasó a llamarse Ardwick Association Football Club en 1887 y finalmente, el 16 de abril de 1894, se convirtió en el Manchester City.",
        rival: "PSG"
    },
    2: {
        nombre: "Real Madrid",
        logo: "assets/img/madrid.png",
        descripcion: "El Real Madrid Club de Fútbol, más conocido simplemente como Real Madrid, es una entidad polideportiva con sede en Madrid, España. Fue declarada oficialmente registrada como club de fútbol por sus socios el 6 de marzo de 1902 con el objeto de la práctica y desarrollo de este deporte —si bien sus orígenes datan al año 1900,​ y su denominación de (Sociedad) Madrid Football Club a noviembre de 1901— siendo el quinto club fundado en la capital.",
        rival: "Chelsea"
    },
    3: {
        nombre: "Chelsea",
        logo: "assets/img/chelsea.png",
        descripcion: "El Chelsea Football Club, conocido simplemente como Chelsea, es un club de fútbol profesional de Inglaterra con sede en el distrito de Fulham (Londres), que disputa actualmente la Premier League, máxima competición futbolística de ese país. Fundado el 10 de marzo de 1905, el club se mantuvo la mayor parte de su historia en la máxima categoría del fútbol británico.",
        rival: "Real Madrid"
    }
}

// Programando el slider
var sliderActual = 0; // Lo inicializamos en 0
$("#btnPlay").hide();

cargarInfoEquipo(sliderActual);

function cargarInfoEquipo(sliderActual) {


    $("#nombreEquipo").text(equipos[sliderActual].nombre);
    $("#logoEquipo").attr("src", equipos[sliderActual].logo);
    $("#descripcionEquipo").text(equipos[sliderActual].descripcion);
    $("#rival").text("Se enfrentará a: " + equipos[sliderActual].rival);

    $("#nombreEquipo").css({ opacity: 0 }).animate({ opacity: 1 });
    $("#logoEquipo").css({ opacity: 0 }).animate({ opacity: 1 });
    $("#descripcionEquipo").css({ opacity: 0 }).animate({ opacity: 1 });
    $("#rival").css({ opacity: 0 }).animate({ opacity: 1 });

    switch (sliderActual) {
        case 0:
            {
                $("#circle0").fadeIn();
                $("#circle1").fadeOut();
                $("#circle2").fadeOut();
                $("#circle3").fadeOut();
                break;
            }
        case 1:
            {
                $("#circle1").fadeIn();
                $("#circle0").fadeOut();
                $("#circle2").fadeOut();
                $("#circle3").fadeOut();
                break;
            }
        case 2:
            {
                $("#circle2").fadeIn();
                $("#circle0").fadeOut();
                $("#circle1").fadeOut();
                $("#circle3").fadeOut();
                break;
            }
        case 3:
            {
                $("#circle3").fadeIn();
                $("#circle0").fadeOut();
                $("#circle1").fadeOut();
                $("#circle2").fadeOut();
                break;
            }
    }

}

// Programando los bullets
var size = Object.keys(equipos).length;
for (var i = 0; i < size; i++) {
    var div = document.createElement("div");
    var circle = document.createElement("div");
    var img = document.createElement("img");
    div.classList.add("d-flex-column");
    circle.classList.add("circle");
    img.classList.add("imgBullets");
    circle.setAttribute(`id`, "circle" + i);
    img.setAttribute(`id`, "btnBullet" + i);
    img.setAttribute(`src`, equipos[i].logo);
    div.appendChild(img);
    div.appendChild(circle);
    var bullets = document.getElementById("bullets");
    bullets.appendChild(div);
}

$("#circle0").fadeIn();
$("#circle1").hide();
$("#circle2").hide();
$("#circle3").hide();

$("#btnBullet0").hover(() => {
    $("#btnBullet0").css({ 'cursor': 'pointer' });
});
$("#btnBullet1").hover(() => {
    $("#btnBullet1").css({ 'cursor': 'pointer' });
});
$("#btnBullet2").hover(() => {
    $("#btnBullet2").css({ 'cursor': 'pointer' });
});
$("#btnBullet3").hover(() => {
    $("#btnBullet3").css({ 'cursor': 'pointer' });
});




$("#btnBullet0").click(() => {
    cargarInfoEquipo(0);
    $("#circle0").fadeIn();
    $("#circle1").fadeOut();
    $("#circle2").fadeOut();
    $("#circle3").fadeOut();
    sliderActual = 0;
});

$("#btnBullet1").click(() => {
    cargarInfoEquipo(1);
    $("#circle1").fadeIn();
    $("#circle0").fadeOut();
    $("#circle2").fadeOut();
    $("#circle3").fadeOut();
    sliderActual = 1;
});

$("#btnBullet2").click(() => {
    cargarInfoEquipo(2);
    $("#circle2").fadeIn();
    $("#circle0").fadeOut();
    $("#circle1").fadeOut();
    $("#circle3").fadeOut();
    sliderActual = 2;
});

$("#btnBullet3").click(() => {
    cargarInfoEquipo(3);
    $("#circle3").fadeIn();
    $("#circle0").fadeOut();
    $("#circle1").fadeOut();
    $("#circle2").fadeOut();
    sliderActual = 3;
});




// Funcion de los botones
$("#btnIzq").hover(() => {
    $("#btnIzq").css({ 'cursor': 'pointer' });
});
$("#btnDer").hover(() => {
    $("#btnDer").css({ 'cursor': 'pointer' });
});

$("#btnIzq").click(() => {
    if (sliderActual == 0) {
        sliderActual = 3;
    } else {
        sliderActual--;
    }
    console.log(sliderActual);
    cargarInfoEquipo(sliderActual);
});

$("#btnDer").click(() => {
    if (sliderActual == 3) {
        sliderActual = 0;
    } else {
        sliderActual++;
    }
    console.log(sliderActual);
    cargarInfoEquipo(sliderActual);

});

var audio = document.getElementById("audio");
var clicked = false;
audio.play();

$("#btnPause").hover(() => {
    $("#btnPause").css({ 'cursor': 'pointer' });
});
$("#btnPause").click(() => {

    clicked = !clicked;
    if (clicked == true) {
        $("#icon").removeClass("fa-pause");
        $("#icon").addClass("fa-play");
        audio.pause();
    } else {
        $("#icon").removeClass("fa-play");
        $("#icon").addClass("fa-pause");
        audio.play();
    }
});