let boardArray = [];

//보드판, 이차원배열 좌표 생성 함수

/*
 * 실제 클릭하는 element는 img보다 앞쪽에 있고
 */

let pieceImage = {
	black : {
		pawn : "<img src='./black_pawn.png'>",
		rook : "<img src='./black_rook.png'>",
		knight : "<img src='./black_knight.png'>",
		bishop : "<img src='./black_bishop.png'>",
		queen : "<img src='./black_queen.png'>",
		king : "<img src='./black_king.png'>"
	},
	white : {
		pawn : "<img src='./white_pawn.png'>",
		rook : "<img src='./white_rook.png'>",
		knight : "<img src='./white_knight.png'>",
		bishop : "<img src='./white_bishop.png'>"
		//queen : "<img src='./white_queen.png'>",
		//king : "<img src='./white_king.png'>"
	}
}

//실제 클릭 element
function CreateBoard() {
    let tableElement = document.createElement('table');
	
	for (let i=0; i<8; i++) {
		let trElement = document.createElement('tr');
		tableElement.appendChild(trElement);
		
		for (let j=0; j<8; j++) {
			let tdElement = document.createElement('td');
			trElement.appendChild(tdElement);
			
			tdElement.dataset.x = i;
			tdElement.dataset.y = j;
			
			if ((i%2==0&&j%2==1)||(i%2==1&&j%2==0)) {
				tdElement.style.backgroundColor = "grey";
			}
			
			if (i==0) {
				tdElement.dataset.playerType = "white";
				if (j==0 || j==7) {
					tdElement.innerHTML = pieceImage.white.rook;
				} else if (j==1 || j==6) {
					tdElement.innerHTML = pieceImage.white.knight;
				} else if (j==2 || j==5) {
					tdElement.innerHTML = pieceImage.white.bishop
				} else if (j==3) {
//					tdElement.innerHTML = pieceImage.black.pawn;
				} else {
//					tdElement.innerHTML = pieceImage.black.pawn;
				}
			} else if (i==1) {
				tdElement.dataset.playerType = "white";
				tdElement.innerHTML = pieceImage.white.pawn;
			} else if (i==6) {
				tdElement.dataset.playerType = "black";
				tdElement.innerHTML = pieceImage.black.pawn;
			} else if (i==7) {
				tdElement.dataset.playerType = "black";
				if (j==0 || j==7) {
					tdElement.innerHTML = pieceImage.black.rook;
				} else if (j==1 || j==6) {
					tdElement.innerHTML = pieceImage.black.knight;
				} else if (j==2 || j==5) {
					tdElement.innerHTML = pieceImage.black.bishop;
				} else if (j==3) {
					tdElement.innerHTML = pieceImage.black.king;
				} else {
					tdElement.innerHTML = pieceImage.black.queen;
				}
			}
		}
	}
	console.log(tableElement)
	document.body.appendChild(tableElement);
	
	return tableElement;
}

function setBoardArray() {
	for (let i=0; i<8; i++) {
		boardArray.push([]);
		for (let j=0; j<8; j++) {
			if (i==0 || i==1) {
				boardArray[i].push(2);
			} else if (i==6 || i ==7) {
				boardArray[i].push(1);
			} else {
				boardArray[i].push(0);
			}
		}
	}
	return boardArray;
}

export {
	CreateBoard,
	setBoardArray
}