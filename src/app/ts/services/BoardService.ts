import {Injectable, provide} from 'angular2/core';
import Board from '../models/Board';

@Injectable()
export default class BoardService {

	constructor(public board: Board) { }

	get() {
		return this.board.get();
	}

	setMove(token, coords) {
		this.board.setMove(token, coords);
	}

	rowsMatch(token) {
		return this.board.rowsMatch(token);
	}

	colsMatch(token) {
		return this.board.colsMatch(token);
	}

}

export var BOARD_PROVIDERS: Array<any> = [
	provide(Board, {useClass: Board}),
	provide(BoardService, {useClass: BoardService})
]