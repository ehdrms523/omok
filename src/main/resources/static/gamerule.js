/*
 * 놓은 자리에 돌 있는지 체크
 * 있으면 false
 * 없으면 true
 */
function isBlockChecked(target) {
	let blockCheck = true;
	if (target.innerHTML == "") {
		blockCheck = false;
	}
	return blockCheck;
}
/*
 * 승리 체크
 */
function isWinner(boardArray, whoIsTurn, arrayIndex) {
	let whoIsWinner = null;
	
	//총 4가지 케이스
	for (let i=0;i<4; i++) {
		let winBlack = 0;
		let winWhite = 0;
		//양쪽 방향 탐색
		for (let j=0; j<2; j++) {
			let x = arrayIndex.pointX;
			let y = arrayIndex.pointY;
			//같은 색깔 돌 5개인지 탐색
			for (let k=0; k<5; k++) {
				if (i == 0) {
					let x = arrayIndex.pointX;
					y = j==0 ? arrayIndex.pointY - k : parseInt(arrayIndex.pointY) + j + k;
				} else if (i == 1) {
					x = j==0 ? arrayIndex.pointX - k : parseInt(arrayIndex.pointX) + j + k;
					let y = arrayIndex.pointY;
				} else if (i == 2) {
					x = j==0 ? parseInt(arrayIndex.pointX) - j - k : parseInt(arrayIndex.pointX) + j + k;
					y = j==0 ? parseInt(arrayIndex.pointY) - j - k : parseInt(arrayIndex.pointY) + j + k;
				} else {
					x = j==0 ? parseInt(arrayIndex.pointX) - j - k : parseInt(arrayIndex.pointX) + j + k;
					y = j==0 ? parseInt(arrayIndex.pointY) + j + k : parseInt(arrayIndex.pointY) - j - k;
				}
				if (x >= 0 && x < 15) {
					if (boardArray[x][y] === whoIsTurn.arrayType) {
						switch (whoIsTurn.arrayType) {
						case 1:
							winBlack++;
							break;
						case 2:
							winWhite++;
							break;
						}
					} else {
						break;
					}
				}
				
				if (winBlack === 5) {
					whoIsWinner ="블랙";
					return {victoryPlayer : whoIsWinner, winnerCheck : true};
				} else if (winWhite === 5) {
					whoIsWinner = "흰색";
					return {victoryPlayer : whoIsWinner, winnerCheck : true};
				}
			}
		}
	}
}

function threeTothreeCheck(whoIsTurn) {
	/*
	 * 검은색 일떄 3x3 체크
	 * 8가지 방향 체크
	 * [4,5]
	 * 1. [4,4] > [4,6] || [3,4] > [5,6] || [3,5] > [5,5] || [3,6] > [5,4]
	 * 2. 
	 */
	
	//3x3이 되는 경우 2가지 케이스
	for (let i=0; i<2; i++) {
		if (i == 0) {
			for (let j=0; j<5; j++) {
				
			}
		} else if (i == 1) {
			
		}
	}
}

function sixPointCheck() {
	
}

//시간 체크
function timeCount() {
	
}

function timeReset() {
	
}

export {
	isBlockChecked,
	threeTothreeCheck,
	sixPointCheck,
	isWinner,
	timeCount,
	timeReset
}