import { Pipe, PipeTransform } from '@angular/core';
 
// Le ponemos un nombre a la tuberia
@Pipe({name: 'title'})
 
export class pipeTitle implements PipeTransform {
 
  transform(value: String): String {
      return value[0].toUpperCase() + value.substr(1).toLowerCase();
  }
}
