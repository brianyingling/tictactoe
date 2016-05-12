import {Input, Output, Component, EventEmitter} from 'angular2/core';

import Board from '../../models/Board';

@Component({
	selector: 'board',
	styles: [`
		.clearfix {
			clear: both;
			overflow: auto;
			zoom: 1;
		}
		.clearfix:after {
			content: '';
			display: table;
			clear: both;
		}
		.cell {
			width: 100px;
			height: 100px;
			border: 1px solid black;
			float: left;
		}
	`],
	template: `
		<div *ngFor="#row of board; #i=index" class="row clearfix">
			<div *ngFor="#cell of row; #j=index" (click)="selected(i, j)" class="cell">
				{{cell}}
			</div>
		</div>
	`
})
export default class BoardComponent {
	@Input() board: Board;
	@Output() choice = new EventEmitter();

	selected(row, col) {
		this.choice.emit({
			row: row,
			col: col
		});
	}

}