import { Component } from '@angular/core';
import { MapComponent } from "../map/map.component";
import { FilterComponent } from "../filter/filter.component";
import { ObservableComponent } from "../observable/observable.component";
import { SubscribeDataComponent } from "../subscribe-data/subscribe-data.component";
import { TakeuntilSubjectComponent } from "../takeuntil-subject/takeuntil-subject.component";
import { AysncSubjectComponent } from "../aysnc-subject/aysnc-subject.component";

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [MapComponent, FilterComponent,
     ObservableComponent, SubscribeDataComponent,
      TakeuntilSubjectComponent, AysncSubjectComponent],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {

}
