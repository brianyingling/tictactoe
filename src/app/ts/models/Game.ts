import {Component} from 'angular2/core';

import Board from './Board';
import Player from './Player';

@Component({
	selector: 'game',
	template: `
		<div>This is the Game</div>
	`
})
export default class Game {
	isWinner: boolean = false;
	
	constructor(public board: Board, public players: Player[]) {}
}