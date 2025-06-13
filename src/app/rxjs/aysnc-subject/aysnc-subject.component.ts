import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aysnc-subject',
  standalone: true,
  imports: [],
  templateUrl: './aysnc-subject.component.html',
  styleUrl: './aysnc-subject.component.scss'
})
export class AysncSubjectComponent {
url: string = 'https://jsonplaceholder.typicode.com/users';
data$!:Observable<any>

constructor(private http:HttpClient){
  this.data$=this.http.get(this.url)
}
}
