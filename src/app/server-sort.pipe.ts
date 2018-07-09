import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'serverSort', pure: false})
export class ServerSortPipe implements PipeTransform {

  transform(arr : any[], args?: any) : any {
    return [...arr].sort((a, b) => a.name > b.name
      ? 1
      : -1);
  }

}
