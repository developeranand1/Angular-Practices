import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() name: string = '';

  @Output() message = new EventEmitter<string>();

  sendMessage() {
    this.message.emit('Hello From Child');
  }
}
