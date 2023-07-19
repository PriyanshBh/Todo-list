import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string | undefined;
  desc: string | undefined;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const todo: Todo = {
      sno: 8, // You can modify this value as needed
      title: this.title,
      desc: this.desc,
      active: true
    };

    this.todoAdd.emit(todo);
  }
}
