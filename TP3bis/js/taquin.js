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
//let message = 'JavaScript is ok :)';
// alert( message);
//console.log(message);

const boxlist = document.querySelectorAll(".box");



boxlist.forEach( element => {
	element.addEventListener('click', function selection(event){
		if (event.target !== element)
		{
			return;
		}
		let emptyBox = document.querySelector('.empty');
		let clickedBox = event.target

		let emptyBoxId = emptyBox.getAttribute("id");
		let emptyBoxRow = emptyBoxId.charAt(1);
		let emptyBoxColumn = emptyBoxId.charAt(4);

		let clickedBoxId = clickedBox.getAttribute("id");
		let clickedBoxRow = clickedBoxId.charAt(1);
		let clickedBoxColumn = clickedBoxId.charAt(4);

		let distance = Math.abs(emptyBoxRow - clickedBoxRow) + Math.abs(emptyBoxColumn - clickedBoxColumn);

		if (distance !== 1)
		{
			return;
		}

		clickedBox.classList.add('empty');
		emptyBox.classList.remove('empty');


		emptyBox.innerHTML = clickedBox.innerHTML;
		clickedBox.innerHTML = '';




	})
});
