import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-subject-nav',
  standalone: true,
  imports: [],
  templateUrl: './subject-nav.component.html',
  styleUrl: './subject-nav.component.scss'
})
export class SubjectNavComponent {
isLoggedIn=false;
constructor(private auth:AuthService){}
ngOnInit():void{
  this.auth.isLoggedIn$.subscribe(state=>{
    this.isLoggedIn=state
  })
}
}
