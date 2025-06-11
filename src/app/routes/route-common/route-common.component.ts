import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-route-common',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './route-common.component.html',
  styleUrl: './route-common.component.scss'
})
export class RouteCommonComponent {

}
