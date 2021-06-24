"use strict";
// 1. Susikurkite objektą "Klase", 
// konstruktoriaus kurti šiam objektui nereikia.
let klase ={};
const studentasMasyvas = [];
let suma =0;
const date = new Date();

// sukuriau masyva lankomumui.
const lankomumasMasyvas = []
for (let i =0; i < 20; i ++) {
    if (i % 2 ==0) {
        lankomumasMasyvas[i] = "n"
    }
    else {
        lankomumasMasyvas[i] = "x"
    }
}

// 2. Sukurkite 20 objektų masyvą, kuriame yra objektai "Studentai". 
// Objektą sukurkite pasinaudodami konstruktoriumi.
// "Studentas" konstruktorius turi sukurti tokį objektą:
// *id - skaičius
// *vardas - tekstas
// *pavarde - tekstas
// *pazymys - skaičius
// *lankomumamas - masyvas, 20 elementų, užpildytas "x" ir "n" reikšmėmis.
// *data - šios dienos data.

function Studentas(
     id, 
     vardas, 
     pavarde,
     pazymys, 
     lankomumas, 
     data) 
     {
this.id = id + 1;
this.vardas = vardas;
this.pavarde = pavarde ;
this.pazymys = pazymys +1 ;
this.lankomumas = lankomumas;
this.data = data;
}
for (let i =0; i<20; i++) {

const zetas = new Studentas(i, "lyolik" + (i+1), "alkogolik" + (i+1),i ,lankomumasMasyvas, date)

studentasMasyvas[i] = zetas;
if (studentasMasyvas[i].pazymys > 10) {
    studentasMasyvas[i].pazymys = studentasMasyvas[i].pazymys % 10;
    
}
}
klase = {studentasMasyvas}

for (let i in studentasMasyvas) {
    suma += studentasMasyvas[i].pazymys
}
 

// 4. Objekte "Klase", sukurkite metodą,
//  kuris išvestų bendrą studentų pažymių vidurkį.
klase = {
    vidurkis: function (){
    let viduriukas
    viduriukas = suma / (studentasMasyvas.length)
    return viduriukas
},
    rezultas: function() {
        console.log("Pazymiu vidurkis = " + this.vidurkis());
    }
}
klase.rezultas()
console.log(studentasMasyvas);
// document.getElementById("lankomumas").innerText = 

for ( let i =0; i < studentasMasyvas.length; i++){
    let divas = document.createElement("div");
    divas.classList.add("lentele")
    divas.innerText = studentasMasyvas[i].vardas + "   " +  studentasMasyvas[i].pavarde;
    document.querySelector(".lankomumas").append(divas);
}
for ( let i =0; i < studentasMasyvas.length; i++){
    let divas = document.createElement("div");
    divas.classList.add("lentele2")
    divas.innerText = lankomumasMasyvas[1]
    document.querySelector(".lankomumas2").append(divas);
}

// for (let j=0; j < 20 ; j++){
//     let divas2 = document.createElement("div");
//     divas2.classList.add("lentele2")
//     divas2.innerText = lankomumasMasyvas[i]
//     document.querySelector(".lankomumas2").append(divas2);
// }

// }



