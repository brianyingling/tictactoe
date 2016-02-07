import {Component} from 'angular2/core';

@Component({
	selector:'nav',
	template:`
		<nav>
			<ul>
				<li *ngFor="#link of links">
					{{link}}
				</li>
			</ul>
		</nav>
	`
})
export default class Nav {
	links: string[];

	constructor() {
		this.links = [];
		this.links.push('hello');
		this.links.push('can you hear me');
	}
}