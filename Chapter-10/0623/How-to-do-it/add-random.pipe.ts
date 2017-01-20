import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'addRandomPipe',
  pure: false
})
export class AddRandomPipe implements PipeTransform {
  transform(value:string):string {
    return value + Math.random();
  }
}