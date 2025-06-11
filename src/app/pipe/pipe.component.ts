import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleCasePipe } from './title-case.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {

  today:any=new Date()

}
