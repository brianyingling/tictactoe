import {Injectable} from 'angular2/core';
import * as _ from 'underscore';

@Injectable()
export default class Board {
	_board: string[][];

	constructor() {
		for (let i = 0; i <= 2; i++) {
			this._board = this._board || [];
			this._board[i] = this._board[i] || [];
			for (let j = 0; j <= 2; j++) {
				this._board[i][j] = null;
			}
		}
		console.log('board:', this._board);
	}

	get() {
		return this._board;
	}

	colsMatch(token): boolean {
		return false;
	}

	rowsMatch(token): boolean {
		let foundMatches = this._board.map((row) => {
			return _.reduce(row, (memo, cell) => {
				return memo && (cell === token);
			}, true);
		});
		return _.every(foundMatches, (isMatch) => !!isMatch);
	}

	setMove(token, coords) {
		this._board[coords.row][coords.col] = token;
	}
}
