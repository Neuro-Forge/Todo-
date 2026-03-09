import { Component, EventEmitter, Output} from '@angular/core';
import { ReactiveFormsModule,FormControl }  from '@angular/forms';

@Component({
  selector: 'app-add-item',
  imports: [ReactiveFormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
})
export class AddItem {
  newTask = new FormControl('');
  @Output() NewTodo = new EventEmitter<string>();

  submitTodo(){
    const task = this.newTask.value?.trim();
    if (task){
      this.NewTodo.emit(task); 
      console.log('new task added:', task);
      this.newTask.setValue('');
      
    }
  }
}
