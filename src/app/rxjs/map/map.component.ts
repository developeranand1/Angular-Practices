import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  url:string="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.http.get(this.url).pipe(map((resp:any)=>resp[0])).subscribe(
      (res)=>{
        console.log(res);
        
      }
    )
  }
}
