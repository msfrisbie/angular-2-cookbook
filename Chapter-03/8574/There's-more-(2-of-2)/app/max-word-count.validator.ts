import {Directive} from '@angular/core';
import {Validator, FormControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[max-word-count]',
  inputs: ['rawCount: max-word-count'],
  providers: [{
    provide:NG_VALIDATORS, 
    useExisting: MaxWordCountValidator, 
    multi: true
  }]
})
export class MaxWordCountValidator implements Validator {
  rawCount:string;
  
  validate(c:FormControl):{[key:string]:any} {
    let wordCt:number = 
      ((c.value || '').match(/\S+/g) || []).length;
    return wordCt <= this.maxCount ? 
      null :
      {maxwords: {limit:this.maxCount, actual:wordCt}};
  }
  get maxCount():number {
    return parseInt(this.rawCount);
  }
}
