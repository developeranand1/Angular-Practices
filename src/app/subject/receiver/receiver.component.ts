import { Component } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.scss'
})
export class ReceiverComponent {

  constructor(private subjectService:SubjectService){}

  ngOnInit(){
    this.subjectService.message$.subscribe(
      (msg)=>{
        console.log("Revived",msg)
      }
    )
  }
}
