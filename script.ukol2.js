const kniha = {
nazev: "Kniha",
autor:"pan autor",
pocetStran: 220,
naSklade: true,
zanr: "fantasy",
}


document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ", autor: " + kniha.autor + ", pocetStran: " + kniha.pocetStran + ", naSklade: " + kniha.zanr + "</p>"

const knihadve = {
  nazev: "Kniha",
  autor:"Lisak autor",
  pocetStran: 420,
  naSklade: true,
  zanr: "fantasy",
  } 

document.body.innerHTML += "<p>Knihadve: " + knihadve.nazev + ", autor: " + knihadve.autor + ", pocetStran: " + knihadve.pocetStran + ", naSklade: " + knihadve.zanr + "</p>";
