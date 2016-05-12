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
	}

	get() {
		return this._board;
	}

	findMatches(collection, token) {
		let found = collection.map((subcollection) => {
			return _.reduce(subcollection, (memo, cell) => {
				return memo && (cell === token);
			}, true);
		});
		return _.any(found, (isMatch) => !!isMatch);
	}

	colsMatch(token) {
		var cols = [];
		for (var i = 0; i <= 2; i++) {
			cols.push(this._board.map((row, j) => row[i]));
		}
		return this.findMatches(cols, token);
	}

	rowsMatch(token): boolean {
		return this.findMatches(this._board, token);
	}

	diagonalsMatch(token): boolean {
		var diag1 = true, diag2 = true;
		var c = 2;
		for (var i = 0; i <= 2; i++) {
			diag1 = diag1 && (this._board[i][i] === token);
			diag2 = diag2 && (this._board[i][c] === token);
			c--;
		}
		return diag1 || diag2;
	}

	setMove(token, coords) {
		this._board[coords.row][coords.col] = token;
	}
}
