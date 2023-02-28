//게임 규칙 모듈 함수 import
import {
	
} from './gamerule.js';

//판 생성 모듈 import
import {
	CreateBoard,
	setBoardArray
} from './board.js';

(function () {
	//전역
	//이차원 배열 좌표 변수
	let tableElement = null;
	let boardArray = null;
	
	//게임 컨트롤러 (클릭)
	function GameController() {
		let plays = null;
		let beforeTarget = null;
		
		this.init = function (play) {
			plays = play;
			//판 생성 초기화
			tableElement = CreateBoard();
			boardArray = setBoardArray();
			console.log(tableElement);
			console.log(boardArray);
			//판 클릭시 이벤트 발생
			window.addEventListener('click', this.choicePiece);
			
		}
		
		this.choicePiece = function (event) {
			let target = event.target;
			console.log(target.contentText);
			if (target.tagName != 'TD') {
				return;
			}
			
			if (target.style.border == "") {
				if (beforeTarget != null) {
					if (beforeTarget.style.border == "3px solid red") {
						beforeTarget.style.border = "";
						plays.setPiece(target, beforeTarget);
					}
				}
				target.style.border = "3px solid red";
				beforeTarget = target;
			} else {
				target.style.border = "";
				beforeTarget = null;
			}
		}
		
		this.moveToPiece = function (event) {
			console.log(event)
		}
		
	}
	
	function Play() {
		this.setPiece = function (target, beforeTarget) {
			console.log(target);
			beforeTarget.innerHTML = target.innerHTML;
			target.innerHTML = "";
		}
	}

	return {
		//컨트롤러 인스턴스 초기화
		init() {
			let gameController = new GameController();
			let play = new Play();
			gameController.init(play);
		}
	}

})().init();