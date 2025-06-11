import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  url: string = 'https://jsonplaceholder.typicode.com/users';
  source$ = from([1, 2, 3, 4, 5, 6, 7, 8]);
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.source$.pipe(filter((val) => val % 2 === 0)).subscribe((res) => {
      console.log(res);
    });
    this.mapFilterFunc();
  }

  mapFilterFunc() {
    this.http.get(this.url).pipe(
      map((users: any) =>
        users.map((user: any) => ({
          name: user.name,
          email:user.email,
          companyName:user.company.name
        }))
      ),
      map((users:any)=>users.filter((user:any)=>user.email.includes("Sincere@april.biz")))
    ).subscribe((res)=>{
      console.log("Map with filter used here",res);
      
    })
  }
}
