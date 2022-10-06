import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miConvert'
})
export class MiConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
    if(!value){
      return '';
    }

    switch (targetUnits){
      case 'km':
        return +((value*1.60934).toFixed(2));
      case 'm':
        return +((value*1609.34).toFixed(2));
      case 'cm':
        return +((value*160934).toFixed(2));
      default:
        throw Error('Target unit not supported')
    }
  }
}


