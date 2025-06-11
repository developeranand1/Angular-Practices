import { Component } from '@angular/core';
import { SubjectContentComponent } from "../subject-content/subject-content.component";
import { SenderComponent } from "./sender/sender.component";
import { ReceiverComponent } from "./receiver/receiver.component";

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [SubjectContentComponent, SenderComponent, ReceiverComponent],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {

}
