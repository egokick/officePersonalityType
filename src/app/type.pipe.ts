import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(people: any, searchType: any): any {
    if (searchType === undefined){
      return people;
    }
      console.log(searchType);
    return people.filter(function(people){
      return people.personType.toLowerCase().includes(searchType.toLowerCase());
    })
  }

}
