import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent {


  obs$=new Observable(observer=>{
    observer.next("Hello");
    observer.next("World"),
    observer.complete();
  })


  ngOnInit(){
    this.obs$.subscribe(val=>console.log(val))
  }

}
