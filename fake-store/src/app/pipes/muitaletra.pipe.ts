import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'muitaletra'
})
export class MuitaletraPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length > 25){
      return 'Texto muito longo'
    }else{
      return value
    }
  }

}
