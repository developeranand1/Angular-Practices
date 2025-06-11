import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from "./search/search.component";
import { SubjectComponent } from "./subject/subject.component";
import { DecoratorComponent } from "./decorators/decorator/decorator.component";
import { CommonModule } from '@angular/common';
import { PipeComponent } from "./pipe/pipe.component";
import { RouteCommonComponent } from "./routes/route-common/route-common.component";
import { RxjsComponent } from "./rxjs/rxjs/rxjs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SearchComponent, SubjectComponent,
    DecoratorComponent, CommonModule, PipeComponent, RouteCommonComponent, RxjsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  selected:string="rxjs"
  tabList:any=[
    {name:"Debounce",value:"debounce"},
    {name:"Subject",value:"subject"},
    {name:"Decorator",value:"decorator"},
     {name:"Pipe",value:"pipe"},
     {name:"Route", value:'route'},
     {name:"Rxjs", value:'rxjs'}
  ]

  selectedTab(item:string){
    this.selected=item
  }
}
