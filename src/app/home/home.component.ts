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
export class HomeComponent implements OnInit {

constructor(private FbService: FirebaseService) { }
ngOnInit(){}

getPeople(){
  this.FbService.fetchData()
}

addPerson(){
  this.FbService.log()
}

people = [];
  classes = {'blue': false, 'purple': false, 'green': true, 'yellow': false};
  test = false;





}
