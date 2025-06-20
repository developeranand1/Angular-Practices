import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'TitleCasePipe',standalone: true })
export class TitleCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\w\S*/g, (txt) =>
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  }
}
