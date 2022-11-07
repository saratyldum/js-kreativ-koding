const dragElement = document.querySelector('.dragElement')
const dropTargets = document.querySelectorAll('.droptarget')

let dragged;

dragElement.addEventListener('dragstart', (event) => {
 dragged = event.target;
 event.target.classList.add('dragging')
});

dragElement.addEventListener('dragend', (event) => {
	event.target.classList.remove('dragging');
});

dropTargets.forEach(dropTarget => {
	dropTarget.addEventListener('dragover', (event) => {
		event.preventDefault();
	}, false);
	
	// dropTarget.addEventListener('drageneter', (event) => {
	// 	const target = event.target;
	// 	console.log(target);
	// 	if (event.target.className == 'droptarget') {
	// 			event.target.style.border = "3px dotted red";
	// 	}
	// });
	
	// dropTarget.addEventListener('dragleave', (event) => {
	// 	if (event.target.classList.contains('droptarget')) {
	// 		event.target.classList.remove('dragover');
	// 	}
	// });
	
	dropTarget.addEventListener('drop', (event) => {
		event.preventDefault();
	
		if (event.target.classList.contains('droptarget')) {
			dragged.parentNode.removeChild(dragged);
			event.target.appendChild(dragged)
		}

		event.target.style.border = "2px dotted red"
	});
});