import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import Nav from './components/Nav/nav';

@Component({
	selector: 'app',
	directives: [Nav],
	template:`
		<nav></nav>
		<div>Hello worlds</div>
	`
})
class App {}

bootstrap(App);