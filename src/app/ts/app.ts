import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import Nav from './components/Nav/nav';
import Game from './components/Game/GameComponent';
import {BOARD_PROVIDERS} from './services/BoardService';

@Component({
	selector: 'app',
	directives: [Nav, Game],
	template:`
		<nav></nav>
		<game></game>
	`
})
class App {}

bootstrap(App, [
	BOARD_PROVIDERS
]);