import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-takeuntil-subject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './takeuntil-subject.component.html',
  styleUrl: './takeuntil-subject.component.scss',
})
export class TakeuntilSubjectComponent {
  private destroy$ = new Subject<void>();
  url: string = 'https://jsonplaceholder.typicode.com/users';
  data: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
   this.http
      .get(this.url)
      .pipe(takeUntil(this.destroy$))
      .subscribe((resp) => {
        this.data=resp
        console.log(resp);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
