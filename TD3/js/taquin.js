/**
* 
* M413 - TD3 - Taquin Game
* * 
* @author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* @version	1.0
* @date			2021-01-31
*
*/
"use strict";

// M413 - Taquin
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log('Processus de chargement du document terminé…');
	//
	// All your JavaScript code goes here !
	//
 
}
// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;


var divgame = document.getElementById("game");
var cases = divgame.getElementsByTagName("div");
var a = 0;
console.log(cases);
var tabCases = new Array(3);
for (var ligne = 0; ligne<3;ligne++)
{
	tabCases[ligne] = new Array(3);
	for (var colone = 0; colone<3; colone++)
	{
		tabCases[ligne][colone] = cases[a];
		a++;
	}
}

//console.log(tabCases);


function selection(event)
{
	//recuperation de l ement clique
	var cible = event.target
	if(cible.tagName == "SPAN")
	{
		console.log("ok");
		cible = cible.parentElement;
	}
	//console.log(cible);

	//recherche de la place de la cellule clique
	for (var i =0;i<3; i++)
	{
		for (var j = 0;j<3;j++)
		{
			if (tabCases[i][j].id == cible.id)
			{
				console.log("identique ["+i+"]"+"["+j+"]");
			}
		}

	}

}







for (var i =0;i<cases.length; i++)
{
	cases[i].addEventListener('click',selection);
}


