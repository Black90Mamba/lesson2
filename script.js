
const apartment = {
  type: 'rent',
  disposition: '3+1',
  area: {
    floorage: 100,
    balcony: 2,
    units: 'sqm',
  },
  city: 'Prague',
  district: 'Old Town',
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: 'czk',
  },
  ownership: 'personal',
  condition: 'renovated',
  status: 'taken',
  floor: 3,
};

document.body.innerHTML += "<p>Apartment: " + apartment.disposition + ", area: " + apartment.area + "</p>"
document.body.innerHTML += "<p>Apartment: " + apartment.disposition + ", area: " + apartment.area + "</p>"
document.body.innerHTML += "<p>Apartment: " + apartment.disposition + 
                           ", area: " + apartment.area.floorage + " " + apartment.area.units + 
                           ", balcony: " + apartment.area.balcony + " " + apartment.area.units + 
                           "</p>"
 document.body.innerHTML += "<p>rent: " + apartment.price.rent + " </p>";                         
document.body.innerHTML += "<p>Apartment: " + apartment.city + ", district: " + apartment.district + "</p>";
document.body.innerHTML += "<p>Apartment: " + apartment.status + " </p>"

const nazev = "Kniha"
const autor = "pan autor"
const pocetStran = 220
const naSklade = true
const zanr = fantasy

document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ", autor: " + kniha.autor + ", pocetStran: " + kniha.pocetStran + ", naSklade: " + kniha.zanr + "</p>";
