import { Component } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { OutputComponent } from "../output/output.component";

@Component({
  selector: 'app-decorator',
  standalone: true,
  imports: [InputComponent, OutputComponent],
  templateUrl: './decorator.component.html',
  styleUrl: './decorator.component.scss'
})
export class DecoratorComponent {

}
