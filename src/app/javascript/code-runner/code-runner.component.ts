import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-code-runner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './code-runner.component.html',
  styleUrl: './code-runner.component.scss'
})
export class CodeRunnerComponent {
 @Input() initialCode: string = '';
  code: string = '';
  output: string = '';

  ngOnInit() {
    this.code = this.initialCode;
  }

  runCode() {
    const logs: string[] = [];
    const originalLog = console.log;
    console.log = (...args: any[]) => logs.push(args.join(' '));
    try {
      new Function(this.code)();
      this.output = logs.join('\n');
    } catch (e: any) {
      this.output = 'Error: ' + e.message;
    } finally {
      console.log = originalLog;
    }
  }
}
