import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true,
})
export class CustomPipe implements PipeTransform {
  // pipe'ın kullanıldığı değeri manipüle/transform etmemizi sağlayan fonksiyondur.
  transform(value: string, a: number, b: number): string {
    return value.slice(a, b);
  }
}
