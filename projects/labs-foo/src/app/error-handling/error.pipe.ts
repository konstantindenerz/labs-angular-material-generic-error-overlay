import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'error'})
export class ErrorPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const messages: string[] = [];
    console.log(value);
    if (!value) {
      return;
    }
    Object.keys(value).forEach(key => {
      if (key === 'required') {
        messages.push('The field is required')
      } else if (key === 'minlength') {
        messages.push(`Should contain at least ${value[key].requiredLength} characters.`)
      } else {
        messages.push(key);
      }
    })

    return messages;
  }

}
