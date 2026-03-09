import { Component, signal } from '@angular/core';
import {AddItem} from './add-item/add-item';
import {ToDo} from './to-do/to-do';

@Component({
  selector: 'app-root',
  imports: [ AddItem, ToDo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hello-world');
  Todos: string[] = [];
  AddTodo( newTodo: string){
    this.Todos.push(newTodo);
}
}
