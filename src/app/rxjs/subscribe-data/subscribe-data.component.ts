import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-subscribe-data',
  standalone: true,
  imports: [],
  templateUrl: './subscribe-data.component.html',
  styleUrl: './subscribe-data.component.scss'
})
export class SubscribeDataComponent {

  dataSubscription!:Subscription;
   url:string="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient){}
  ngOnInit(){
    // this.http.get("").subscribe(data=>{
    //   console.log("Received",data)
    // })

    this.dataSubscription=this.http.get(this.url).subscribe((data)=>{
      console.log("Subscribe data ",data);
      
    })
  }

  ngOnDestroy(){
    if(this.dataSubscription){
      this.dataSubscription.unsubscribe();
      console.log("Unsubscribe");
      
    }
  }
}
