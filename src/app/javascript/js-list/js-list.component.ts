import { Component } from '@angular/core';
import { BasicJsComponent } from "../basic-js/basic-js.component";
import { AdvancedJsComponent } from "../advanced-js/advanced-js.component";

@Component({
  selector: 'app-js-list',
  standalone: true,
  imports: [BasicJsComponent, AdvancedJsComponent],
  templateUrl: './js-list.component.html',
  styleUrl: './js-list.component.scss'
})
export class JsListComponent {

}
