'use strict';
let jour = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
let mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log('In onLoad() function…');

}

function defineHeading1() {
	document.getElementById("title").innerHTML = "On change de titre";
	document.title = "On change de titre";

}

function defineHeading2() {
	let a = document.getElementsByTagName("h2");
	//console.log(a.length);
	if (a.length != 0) {
		a[0].innerHTML = "oupi";
	}

}

function defineHeading3() {
	let a = document.getElementsByTagName("h2").length;
	//console.log(a);
	if (a == 0) {
		document.title = "Jonathan Vermot-Gauchy";
	}
	else {
		document.getElementsByTagName("h2")[a - 1].innerHTML = "The last h2";
	}

}

function defineHeading4() {
	let ListFirstOrLast = document.getElementsByClassName("firstOrLast");
	if (ListFirstOrLast.length != 0) {
		if (ListFirstOrLast % 2 == 0) {
			document.title = ListFirstOrLast[0].innerHTML;
		}
		else {
			document.title = ListFirstOrLast[ListFirstOrLast.length - 1].innerHTML;
		}
	}
}

function dateAlter() {
	let date = new Date(document.lastModified);
	const texte = "Dernière modification : " + jour[date.getDay() - 1] + " " + date.getDate() + " de " + mois[date.getMonth()] + " "
		+ date.getFullYear() + " par " + document.querySelector('meta[name]').getAttribute("content");


	document.getElementById("update-date").innerHTML = texte;
	console.log(jour[Date.prototype.getDay])
}

function getNbDays() {
	let date = new Date(document.lastModified)
	let dateAjd = Date.now();
	let annee = date.getFullYear();
	let cible = Date.parse("19 Jul " + annee + " 00:00:00 GMT");
	let jourRestant = cible - dateAjd
	jourRestant = jourRestant / 1000
	jourRestant = jourRestant / 3600
	jourRestant = jourRestant / 24
	jourRestant = Math.round(jourRestant);
	if (jourRestant > 1) {
		document.getElementById("texteJMoinsX").innerHTML = "il reste " + jourRestant + " jours avant le 19 juillet " + annee;
	}
	else {
		document.getElementById("texteJMoinsX").innerHTML = "il reste " + jourRestant + " jour avant le 19 juillet " + annee;
	}

}

function updateClock1() {
	window.setInterval(clock, 1000);
}

function updateClock2() {
	window.setTimeout(clock, 1000);
}

function clock() {
	let d = new Date(Date.now());
	let heure = d.getHours();
	if (heure < 10) {
		heure = "0" + heure;
	}
	let min = d.getMinutes();
	if (min < 10) {
		min = "0" + min;
	}
	let sec = d.getSeconds();
	if (sec < 10) {
		sec = "0" + sec;
	}
	document.getElementById("clock").innerHTML = heure + ":" + min + ":" + sec;
}


function GraphicClock() {
	//recuperation de la div
	let madiv = document.getElementById("graphic-clock");
	madiv.innerHTML = '';

	//creation d element html en js
	let heure1 = document.createElement('img');
	let heure2 = document.createElement('img');
	let min1 = document.createElement('img');
	let min2 = document.createElement('img');




	let madate = new Date(Date.now());
	let heure = madate.getHours();
	let min = madate.getMinutes();

	//recuperation des heures
	let a = Math.floor(heure / 10);
	let b = heure % 10;
	heure1.src = "assets/images/" + a + ".gif";
	heure2.src = "assets/images/" + b + ".gif";

	//recuperation des minutes
	let c = Math.floor(min / 10);
	let d = min % 10;

	min1.src = "assets/images/" + c + ".gif";
	min2.src = "assets/images/" + d + ".gif";


	//ajout des elements img dans la div
	madiv.appendChild(heure1);
	madiv.appendChild(heure2);
	madiv.appendChild(min1);
	madiv.appendChild(min2);


}

function updateGraphicClock() {
	window.setInterval(GraphicClock, 1000);
}

function updateInputText()
{
	let monInput = document.getElementById("input");
	if ((/^[0-9]+$/).test(monInput.value))
	{
		monInput.classList.remove("white","red");
		monInput.classList.add("green");
	}
	else if (monInput.value == "")
	{
		monInput.classList.remove("red","green");
		monInput.classList.add("white");
	}	
	else
	{
		monInput.classList.remove("white","green");
		monInput.classList.add("red");
	}
}


//menu deroulant

function menuImage() {
	const menu = document.getElementById("aside");
	let divs = menu.querySelectorAll("#aside > div");
	console.log(divs);
	for (let i = 0; i < divs.length; i++) {
		let img = document.createElement("img");
		img.src = "assets/images/plus.gif";
		divs[i].querySelector("div").insertBefore(img, divs[i].querySelector("div > p"));
	}
}


function menuSelect1(clic)
{
	const elementclic = clic.target;
	let tmp = elementclic.parentElement.parentElement;
	let l = tmp.querySelector("ul");
	let classe = l.className;
	console.log(classe);

	if (classe === "ss_menu_cache")
	{
		l.classList.remove("ss_menu_cache");
		l.classList.add("ss_menu_visible")
	}
	else
	{
		l.classList.remove("ss_menu_visible");
		l.classList.add("ss_menu_cache")
	}
}

let savedoc = null;
function search()
{
	if (savedoc == null)
	{
		savedoc = document.body.innerHTML;
	}
	else
	{
		document.body.innerHTML = savedoc;
	}
	let recherche = document.getElementById("Text").value;




}




defineHeading1();
defineHeading2();
defineHeading3();
defineHeading4();
dateAlter();
document.getElementById("texteJMoinsX").addEventListener('click', getNbDays);
updateClock1();
GraphicClock();
updateGraphicClock();
document.getElementById("input").addEventListener('keyup', updateInputText);

//menu deroulant
menuImage();
document.getElementById("aside").addEventListener('click',menuSelect1);