var arr = new Array();
var player1 = {
    Nom: "Samir Handanovic",
    Numero: 1,
    Poste: "Gardien",
    Nationalite: "Slovène",
    DateNaissance: "14-07-1984",
    LieuNaissance: "Ljubljana",
    Taille: "193 cm"
};
var player2 = {
    Nom: "Milan Skrìniar",
    Numero: 37,
    Poste: "Défenseur",
    Nationalite: "Slovaque",
    DateNaissance: "11-02-1995",
    LieuNaissance: "Žiar nad Hronom",
    Taille: "188 cm"
};
var player3 = {
    Nom: "Marcelo Brozovic",
    Numero: 77,
    Poste: "Milieu de terrain",
    Nationalite: "Croate",
    DateNaissance: "16-11-1992",
    LieuNaissance: "Zagreb",
    Taille: "181 cm"
};
var player4 = {
    Nom: "Radja Nainggolan",
    Numero: 14,
    Poste: "Milieu de terrain",
    Nationalite: "Belge",
    DateNaissance: "04-05-1988",
    LieuNaissance: "Antwerp",
    Taille: "176 cm"
};
var player5 = {
    Nom: "Mauro Icardi",
    Numero: 9,
    Poste: "Attaquant",
    Nationalite: "Argentin",
    DateNaissance: "19-02-1993",
    LieuNaissance: "Rosario",
    Taille: "181 cm"
};
arr.push(new Object(player1));
arr.push(new Object(player2));
arr.push(new Object(player3));
arr.push(new Object(player4));
arr.push(new Object(player5));
var testBtn = document.getElementById("array-btn");
testBtn.onclick = function(event) {
    console.log(arr);
};
document.getElementById("input-nom").innerHTML = arr[0].Nom;
document.getElementById("input-numero").innerHTML = arr[0].Numero;
document.getElementById("input-poste").innerHTML = arr[0].Poste;
document.getElementById("input-nationalite").innerHTML = arr[0].Nationalite;
document.getElementById("input-date").innerHTML = arr[0].DateNaissance;
document.getElementById("input-lieu").innerHTML = arr[0].LieuNaissance;
document.getElementById("input-taille").innerHTML = arr[0].Taille;
var actualPosition = 0;
var decBtn = document.getElementById("left-span");
var incBtn = document.getElementById("right-span");
incBtn.onclick = function(event) {


    if (actualPosition < 4) {
        actualPosition++;
    } else if (actualPosition === 4) {
        actualPosition = 0;
    }
    document.getElementById("input-nom").innerHTML = arr[actualPosition].Nom;
    document.getElementById("input-numero").innerHTML =
        arr[actualPosition].Numero;
    document.getElementById("input-poste").innerHTML = arr[actualPosition].Poste;
    document.getElementById("input-nationalite").innerHTML =
        arr[actualPosition].Nationalite;
    document.getElementById("input-date").innerHTML =
        arr[actualPosition].DateNaissance;
    document.getElementById("input-lieu").innerHTML =
        arr[actualPosition].LieuNaissance;
    document.getElementById("input-taille").innerHTML =
        arr[actualPosition].Taille;
};

decBtn.onclick = function(event) {

    if (actualPosition > 0) {
        actualPosition--;
    } else if (actualPosition === 0) {
        actualPosition = 4;
    }
    document.getElementById("input-nom").innerHTML = arr[actualPosition].Nom;
    document.getElementById("input-numero").innerHTML =
        arr[actualPosition].Numero;
    document.getElementById("input-poste").innerHTML = arr[actualPosition].Poste;
    document.getElementById("input-nationalite").innerHTML =
        arr[actualPosition].Nationalite;
    document.getElementById("input-date").innerHTML =
        arr[actualPosition].DateNaissance;
    document.getElementById("input-lieu").innerHTML =
        arr[actualPosition].LieuNaissance;
    document.getElementById("input-taille").innerHTML =
        arr[actualPosition].Taille;
};

/*decBtn.ondblclick = function(event) {
  if (actualPosition > 0) {
    actualPosition--;
  } else if (actualPosition === 0) {
    actualPosition = 4;
  }
  document.getElementById("input-nom").innerHTML = arr[actualPosition].Nom;
  document.getElementById("input-numero").innerHTML =
    arr[actualPosition].Numero;
  document.getElementById("input-poste").innerHTML = arr[actualPosition].Poste;
  document.getElementById("input-nationalite").innerHTML =
    arr[actualPosition].Nationalite;
  document.getElementById("input-date").innerHTML =
    arr[actualPosition].DateNaissance;
  document.getElementById("input-lieu").innerHTML =
    arr[actualPosition].LieuNaissance;
  document.getElementById("input-taille").innerHTML =
    arr[actualPosition].Taille;
};
incBtn.ondblclick = function(event) {
  if (actualPosition < 4) {
    actualPosition++;
  } else if (actualPosition === 4) {
    actualPosition = 0;
  }
  document.getElementById("input-nom").innerHTML = arr[actualPosition].Nom;
  document.getElementById("input-numero").innerHTML =
    arr[actualPosition].Numero;
  document.getElementById("input-poste").innerHTML = arr[actualPosition].Poste;
  document.getElementById("input-nationalite").innerHTML =
    arr[actualPosition].Nationalite;
  document.getElementById("input-date").innerHTML =
    arr[actualPosition].DateNaissance;
  document.getElementById("input-lieu").innerHTML =
    arr[actualPosition].LieuNaissance;
  document.getElementById("input-taille").innerHTML =
    arr[actualPosition].Taille;
};*/
