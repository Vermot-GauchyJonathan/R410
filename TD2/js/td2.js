/**
* 
* M413 - TD2
* * 
* 	@author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/
"use strict";

// M413 - TD2
var message = 'JavaScript is ok :)';
// alert( message);
console.log( message);

function onLoad() {
	console.log( 'Processus de chargement du document terminé…');

}
// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;

var selected2 = null;



function initSelect(clic)
{
	const elementClick = clic.target;
	var classes = elementClick.classList;
	classes.add("select");

}
/*
function select(clic)
{
	const elementClick = clic.currentTarget;
	var classes = elementClick.classList;
	if (classes.contains("select"))
	{
		classes.remove("select");
	}
	else
	{
		classes.add("select");
	}
}
 */

function select(clic)
{
	const elementClick = clic.target;
	var classes = elementClick.classList;
	if (classes.contains("select"))
	{
		classes.remove("select");
	}
	else
	{
		classes.add("select");
	}
}


function insert()
{
	var monbody = document.getElementsByTagName("body");
	var madiv = document.createElement("div");
	madiv.id = "insert-div";

	var monselect = document.createElement("select");
	monselect.id = "insert-type";
	monselect.name = "type";
	monselect.options[0] = new Option("div","div");
	monselect.options[1] = new Option("p","p");
	monselect.options[2] = new Option("span","span");


	var moninput = document.createElement("input");
	moninput.id = "insert-text";
	moninput.type = "text";
	moninput.value = "My New Text Element";

	madiv.appendChild(monselect);
	madiv.appendChild(moninput);
	document.body.insertBefore(madiv,document.body.firstChild);
}

function select2(clic)
{

	if (clic.target.parentElement.id != "insert-div")
	{
		var clicked = clic.target;
		if (selected2 != null)
		{
			if (clicked.classList.contains("select2"))
			{
				clicked.classList.remove("select2");
			}
			else
			{
				selected2.classList.remove("select2");
				clicked.classList.add("select2");
				selected2 = clicked;
			}
		}
		else
		{
			clicked.classList.add("select2");
			selected2 = clicked;
		}
	}
}

function insertElement(target)
{
	if(selected2 != null)
	{
		var type = document.getElementById("insert-type");
		var text = document.getElementById("insert-text");
		var monelement = document.createElement(type.value);
		monelement.textContent = text.value;


		target.parentNode.insertBefore(monelement,target);
	}
}

insert();
//document.getElementsByTagName("body")[0].addEventListener('click',initSelect);
//document.getElementsByTagName("body")[0].addEventListener('click',select);
document.getElementsByTagName("body")[0].addEventListener('click',select2);
document.getElementsByTagName("body")[0].addEventListener('click', function (e) {
	if (selected2 != null) {
		e.stopPropagation();
		insertElement(selected2);
	}
});