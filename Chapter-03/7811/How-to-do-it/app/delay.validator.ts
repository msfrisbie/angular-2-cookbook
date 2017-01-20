import {FormControl, Validator} from '@angular/forms';

export class DelayValidator implements Validator {
  static validate(c:FormControl):Promise<{[key:string]:any}> {
    if (c.pristine && !c.value) {
      return new Promise;
    }
    if (!c.delayPromise) {
      c.delayPromise = new Promise((resolve) => {
        setTimeout(() => {
          console.log('resolve');
          resolve();
        }, 5000);
      });
    }
    return c.delayPromise;
  }
}
