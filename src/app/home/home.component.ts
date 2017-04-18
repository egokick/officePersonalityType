import { Component, OnInit, Input , EventEmitter, Pipe} from '@angular/core';
import { FilterPipe } from '../name.pipe';
import { TypePipe } from '../type.pipe';
import { FirebaseService } from '../service/firebase.service';
declare var firebase: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FirebaseService]
})
export class HomeComponent implements OnInit {

  constructor(private FbService: FirebaseService) { }
  people = [];
  ngOnInit(){
    /*this.FbService.fetchData().subscribe(
      (data) => this.people = data
    );*/
    this.fbGetData();
  }

  fbGetData(){
    firebase.database().ref('/').on('child_added',
      (snapshot) => {
        this.people.push(snapshot.val())
      }
    )
  }

  fbPostData(name, type){
    firebase.database().ref('/').push({name: name, personType: type})
  }

  classes = {'blue': false, 'purple': false, 'green': true, 'yellow': false};

}
