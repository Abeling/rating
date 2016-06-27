var aantalKliks = Math.ceil(9*Math.random());
var totaalScore = aantalKliks*Math.random()*5;
var uitvoerAantal = document.getElementById('amount'); 
var uitvoerWaardering = document.getElementById('rating');
var deSterren = document.querySelectorAll('.none');

function kleurSter(sterNummer, procent) {
    var naam = 's' + sterNummer;
    procent = Math.min(procent, 100);
    document.getElementById(naam).style.width = procent+'%';
}
//kleurSter(2,140);

function kleurDeSterren(rating) {
    for(var i=1; i<6; i++) {
        kleurSter(i, rating*100);
        rating --;
    }
}

//random genereren en uitvoeren in DOM
function uitvoeren(){
    uitvoerAantal.innerHTML = aantalKliks;
    uitvoerWaardering.innerHTML = Math.ceil(10*totaalScore/aantalKliks)/10;
    kleurDeSterren(Math.ceil(10*totaalScore/aantalKliks)/10);
}
uitvoeren();

function verwerkKlik(){
    aantalKliks ++;
    var nummertje = this.getAttribute('data-role');
    totaalScore += parseInt(nummertje); //inhoud omzetten naar heel getal en ophogen
    uitvoeren();
}
for(var i=0; i<deSterren.length; i++){
    deSterren[i].addEventListener('click',verwerkKlik);
}