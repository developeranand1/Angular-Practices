import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private messageSource=new Subject<string>()
  message$=this.messageSource.asObservable()

 sendMessage(msg:string){
  this.messageSource.next(msg);
 }
}
