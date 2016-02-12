import {Component} from 'angular2/core';
import BoardService from '../../services/BoardService';
import BoardComponent from '../../components/Board/BoardComponent';

@Component({
	selector: 'game',
	directives: [
		BoardComponent
	],
	template: `
		<div>
			<board [board]="boardService.get()" (choice)="move($event)"></board>
		</div>
	`
})
export default class GameComponent {
	moves: number = 0;
	currentPlayer: string;
	
	constructor(public boardService: BoardService) {
		console.log('board service get:', boardService.get());
	}

	move(coords): void {
		console.log('choice:', coords);
		this.moves++;
		this.setPlayerToken();
		this.boardService.setMove(this.currentPlayer, coords);
		this.isWinner();
	}

	setPlayerToken() {
		this.currentPlayer = (this.moves % 2 === 0) ? 'O' : 'X';
	}

	isWinner(): boolean {
		var rowsMatch = this.boardService.rowsMatch(this.currentPlayer);
		var colsMatch = this.boardService.colsMatch(this.currentPlayer);
		return rowsMatch || colsMatch;
	}
}