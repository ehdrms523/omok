//게임 규칙 모듈 함수 import
import {
	isBlockChecked,
	threeTothreeCheck,
	sixPointCheck,
	isWinner,
	timeCount,
	timeReset
} from './gamerule.js';

//판 생성 모듈 import
import {
	CreateBoard,
} from './board.js';

(function () {
	//전역
	let threeTothree = null;
	//이차원 배열 좌표 변수
	let boardArray = null;
	
	//게임 컨트롤러 (클릭)
	function GameController() {
		let plays = null;
		
		this.init = function (play) {
			plays = play;
			//판 생성 초기화
			boardArray = CreateBoard();
			//판 클릭시 이벤트 발생
			window.addEventListener('click', function (event) {
				let target = event.target;
				if (target.tagName != 'TD') {
					return;
				}
				
				plays.setPiece(target);
			});
			
		}
		
		this.elementCheck = function (event) {
			let target = event.target;
			if (target.tagName != 'TD') {
				return;
			}
			plays.setPiece(target);
		}
	}
	
	function Play() {
		//플레이어 타입
		let pieceType = {
			black : {player : "<img src='./black.png' width=25 height=25 />", arrayType : 1},
			white : {player : "<img src='./white.png' width=25 height=25 />", arrayType : 2}
		}
		//턴 (블랙 : 짝수, 화이트 : 홀수)
		let turn = 0;
		//현재 무슨 색깔의 턴인지
		let whoIsTurn = null;
		let timeCheck = null;
		
		this.setPiece = function (target) {
			this.timeCount();
			//timeReset();
			//현재 클릭한 x, y 좌표
			let arrayIndex = {pointX : target.dataset.x, pointY : target.dataset.y};			
			//바둑알 있는지 검사
			whoIsTurn = turn % 2 == 0 ? pieceType.black:pieceType.white;
			boardArray[arrayIndex.pointX][arrayIndex.pointY] = whoIsTurn.arrayType;
			
			//블록체크
			if (isBlockChecked(target)) {
				return;
			}
			//검은색 턴일 경우 3x3 체크
			if (whoIsTurn.arrayType === 1) {
				//console.log("!")
			}
			
			/*
			 * 짝수 턴 (블랙) : 1
			 * 홀수 턴 (흰색) : 2
			 */
			 
			target.innerHTML = whoIsTurn.player;
			turn++;
			/*
			 * 한 개의 돌을 놓을때마다 승리 체크
			 */
			let winner = isWinner(boardArray, whoIsTurn, arrayIndex);
			
			if (typeof winner != "undefined") {
				this.gameResult(winner);		 
			}
			
		}
		
		this.gameResult = function (winner) {
			let modalOpen = document.getElementById("modal");
			let textElement = document.querySelector(".modal-text");
			document.body.style.background = "grey";
			document.body.style.opacity = "0.5";
			textElement.innerText = winner.victoryPlayer;
		}
		/*
		 * 1. 돌을 놓으면 타이머 시작 (5분)
		 * 2. 번갈아 가며 돌을 놓으면 타이머 리셋 (Interval)
		 * 3. 타이머가 0:0이 되었을 때 게임끝
		 */
		this.timeCount = function () {
			let timer = document.getElementById("time");
			let time = 10;
			let min = "";
			let sec = "";
			timeCheck = setInterval(function() {
				min = parseInt(time/60); //10
				sec = time%60; 0
				
				timer.innerHTML = min + ":" + sec;
				time--;
				if (timer.innerHTML == "") {
					clearInterval(timeCheck);
				}
			}, 1000)
			
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