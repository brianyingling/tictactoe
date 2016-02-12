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

	colsMatch(token) {
		var cols = [];
		for (var i = 0; i <= 2; i++) {
			cols.push(this._board.map((row) => row[i]));
		}
		
		let foundMatches = cols.map((col) => {
			return _.reduce(col, (memo, cell) => {
				return memo && (cell === token);
			}, true);
		});
		return _.any(foundMatches, (isMatch) => !!isMatch);
	}

	rowsMatch(token): boolean {
		let foundMatches = this._board.map((row) => {
			return _.reduce(row, (memo, cell) => {
				return memo && (cell === token);
			}, true);
		});
		return _.any(foundMatches, (isMatch) => !!isMatch);
	}

	setMove(token, coords) {
		this._board[coords.row][coords.col] = token;
	}
}
