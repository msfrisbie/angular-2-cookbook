import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'addRandomPipe',
  pure: false
})
export class AddRandomPipe implements PipeTransform {
  cache:Object = {};
  transform(input:string):string {
    let value = this.cache[input];
    if (!value || value.expire < Date.now()) {
      value = {
        text: input + Math.random(),
        // Expires in one second
        expire: Date.now() + 1000
      }
      this.cache[input] = value;
    }
    return value.text;
  }
}