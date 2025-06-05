import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private  http:HttpClient) { }

  search(q:string):Observable<any[]>{
    if(!q.trim()){
      return of([])
    }
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users?name_like=${q}`).pipe(
      catchError(()=> of([]))
    )
  }
}
