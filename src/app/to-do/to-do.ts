import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do',
  imports: [],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css',
})
export class ToDo {
 @Input() Todos: string[] = [];
 @Output() DeleteTodo: EventEmitter<number> = new EventEmitter<number>();

  Delete(index: number){
    this.DeleteTodo.emit(index);
  }


}
