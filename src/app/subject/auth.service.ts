import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn=new BehaviorSubject<boolean>(false);
  isLoggedIn$=this.loggedIn.asObservable();

  login(){
    this.loggedIn.next(true);
  }

  logout(){
    this.loggedIn.next(false)
  }
  constructor() { }
}
