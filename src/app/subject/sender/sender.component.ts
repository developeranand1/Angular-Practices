import { Component } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.scss',
})
export class SenderComponent {
  constructor(private subjectService: SubjectService) {}

  send(){
    this.subjectService.sendMessage("Helle Form Sender")
  }
}
