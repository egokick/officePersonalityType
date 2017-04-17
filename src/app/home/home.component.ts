import { Component, OnInit, Input , EventEmitter} from '@angular/core';
import { FilterPipe } from '../name.pipe';
import { TypePipe } from '../type.pipe';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FirebaseService]
})
export class HomeComponent {

constructor(private FirebaseService: LoggingService) { }

logIt(){
  this.logger.log()
}

  classes = {'blue': false, 'purple': false, 'green': true, 'yellow': false};
  test = false;

  people = [
    {name: 'Thomas', personType: 'INTJ-A', color: 'purple'},
    {name: 'Louis', personType: 'ESFJ', color: 'blue'},
    {name: 'James', personType: 'INFJ', color: 'yellow'},
    {name: 'Ian', personType: 'ENFP', color: 'green'}
  ];
addPerson($event){
  return;
}


}
