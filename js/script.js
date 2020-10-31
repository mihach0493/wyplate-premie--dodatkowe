document.getElementById("oblicz").addEventListener('click', function () {

    // let pracownik1 = document.getElementById('pracownik1');
    // pracownik1.innerText = pracownik1.value;
    let pracownicy = document.querySelectorAll('#pracownicy > div');
    console.log(pracownicy);
    let tab = [];

    pracownicy.forEach(function (element) {


        if (element.querySelector("input.czas")) {
            // console.log(element);

            // let czas = parseInt(element.querySelector("input.czas").value);
            let czas = +element.querySelector("input.czas").value;

            let stawka = +element.querySelector("input.stawka").value;

            let wyplata = element.querySelector("span.wyplata");

            let nadgodzin = czas - 160;
            
            console.log(nadgodzin);


            // wyplata.innerText = czas * stawka;

            // console.log(czas);

            // sprawdzam  w if czy ma nad godziny.

            //dalej mam obliczyc ile jest nad godzin w szrodku ifa.
            //

            // dalej musze policzec wyplata. jego stawka raz 160 + ilosc nadgodzin * stawka * 2
            // console.log(czas)
            if(czas < 100 ) {
                element.style.background = 'red';
            }
            if(nadgodzin > 0 ) {
                wyplata.innerText = (czas - nadgodzin) * stawka + (nadgodzin * 2 * stawka);
            }else if (nadgodzin <= 0) {
                wyplata.innerText = czas * stawka;
            }
         
        }
        
});






});




// if(pracownik1 - 162) {
//     let overtime1 = ((pracownik1 - 162))
//     let overtime1 = totalPay1 + overtime1 + bonus
// }




























