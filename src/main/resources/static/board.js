let boardArray = [];

//보드판, 이차원배열 좌표 생성 함수
function CreateBoard() {
	let tableElement = document.createElement('table');
	
	for (let i=0; i<15; i++) {
		let trElement = document.createElement('tr');
		tableElement.appendChild(trElement);
		boardArray.push([]);
		
		for (let j=0; j<15; j++) {
			let tdElement = document.createElement('td');
			trElement.appendChild(tdElement);
			
			tdElement.dataset.x = i;
			tdElement.dataset.y = j;
			
			tdElement.style.backgroundColor = "#996600"
			boardArray[i].push(0);
		}
	}
	document.body.appendChild(tableElement);
	
	return boardArray;
}

export {
	CreateBoard,
}