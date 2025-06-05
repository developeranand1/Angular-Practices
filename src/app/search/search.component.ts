import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms'
import { SearchService } from './search.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  searchInput=new FormControl('');

  results:any[]=[];

  constructor(private search:SearchService){

  }


  ngOnInit():void{

    this.searchInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((q:any)=>this.search.search(q))
    ).subscribe(
      (data)=>{
        this.results=data
        console.log(this.results)
      }
    )
  }



}
