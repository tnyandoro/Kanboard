import _ from 'lodash';
import printMe from './print';
import './trello.css'


function Board(title){
let nextId = 0;

this.title = title;
this.list = [];
this.cards = {};

this.node = document.createElement('div');
this.titleNode = document.createElement('div');
this.listsNode = document.createElement('div');

this.node.id = 'board';
this.titleNode.id = 'kanboard-title-board';
this.listsNode.id = 'kanboard-canvas-board';

// new list title form 

this.titleFormNode = buildListTitleForm()
}