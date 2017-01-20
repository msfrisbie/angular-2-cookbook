import {Directive} from '@angular/core';
import {Validator, FormControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[max-word-count]',
  providers: [{
    provide:NG_VALIDATORS, 
    useExisting: MaxWordCountValidator, 
    multi: true
  }]
})
export class MaxWordCountValidator implements Validator {
  validate(c:FormControl):{[key:string]:any} {
    let wordCt:number = ((c.value || '').match(/\S+/g) || []).length;
    return wordCt <= 10 ? 
      null :
      {maxwords: {limit:10, actual:wordCt}};
  }
}