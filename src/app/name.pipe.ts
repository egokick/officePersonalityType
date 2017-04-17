import { Pipe, PipeTransform } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Pipe({
  name: 'name'
})
export class FilterPipe implements PipeTransform {

  transform(people: any, searchName: any): any {
    if (searchName === undefined){
      return people;
    }
  
    return people.filter(function(people){
      return people.name.toLowerCase().includes(searchName.toLowerCase());
    })
  }

}
