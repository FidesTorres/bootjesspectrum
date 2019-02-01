"use strict";
let prijsPerUurLet = 10;
let bootjesArray = [];
let vertrek = new Date();

function boatOut(nr) {
  let currentTime = new Date();
  let current = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  let divName = document.getElementById(`uitgevarenTijd${nr}`);
  document.getElementById(`terugTijd${nr}`).innerHTML = "";
  divName.innerHTML = ` Uitgevaren om: ${current}`;
  document.getElementById(`button${nr}`).innerHTML = `<button onclick="boatBack(${nr})">Is Terug</button>`;
}

function boatBack(nr) {
  let backTime = new Date();
  let current = `${backTime.getHours()}:${backTime.getMinutes()}:${backTime.getSeconds()}`;
  let divName = document.getElementById(`terugTijd${nr}`);
  document.getElementById(`button${nr}`).innerHTML = `<button onclick="boatOut(${nr})">Uitgevaren</button>`;
  divName.innerHTML = ` Terug Gekomen om: ${current}`;
  saveTrip(nr);
}

function saveTrip(nr) {
  let currentDate = dateF(vertrek);
  let current = `${currentDate} [${vertrek.getHours()}:${vertrek.getMinutes()}:${vertrek.getSeconds()}]`;
  let backTime = new Date();
  let backDate = dateF(backTime);
  let backT = `${backDate} [${backTime.getHours()}:${backTime.getMinutes()}:${backTime.getSeconds()}]`;
  let total = backTime.getHours() - vertrek.getHours();
  let bootje = new classBootjes(nr, current, backT, (prijsPerUurLet + (total * prijsPerUurLet)));
  bootjesArray.push(bootje);
  console.log(bootjesArray);
  document.getElementById("gevarenRitten").innerHTML = "";
  for (let i = 0; bootjesArray.length > i; i++) {
    document.getElementById("gevarenRitten").innerHTML += `Bootje ${bootjesArray[i]._id} heeft gevaren op ${bootjesArray[i].vertrekDatum} tot ${bootjesArray[i].aankomstDatum} voor € ${bootjesArray[i]._prijs},-<br />`;
  }
}

function dateF(date) {
  let d = date;
  function day_of_the_month(d) {
    return (d.getDate() < 10 ? '0' : '') + d.getDate();
  }
  function month_of_the_year(d) {
    return ((d.getMonth() + 1) < 10 ? '0' : '') + (d.getMonth() + 1);
  }
    return `${day_of_the_month(d)}-${month_of_the_year(d)}-${d.getFullYear()}`;
}
