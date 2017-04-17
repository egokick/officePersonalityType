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
  ip = "";

getIP(url, success) {
     var ud = '_' + +new Date,
         script = document.createElement('script'),
         head = document.getElementsByTagName('head')[0]
                || document.documentElement;

     window[ud] = function(data) {
         head.removeChild(script);
         success && success(data);
     };

     script.src = url.replace('callback=?', 'callback=' + ud);
     head.appendChild(script);
 }

  ngOnInit(){
    /*this.FbService.fetchData().subscribe(
      (data) => this.people = data
    );*/
    this.fbGetData();

  }

  getPeople(){this.FbService.fetchData()}
  addPerson(){this.FbService.log()}

  fbGetData(){
    firebase.database().ref('/').on('child_added',
      (snapshot) => {
        this.people.push(snapshot.val())
      }
    )
  }

  fbPostData(name, type){
    var sip = this.getIP('//freegeoip.net/json/?callback=?', function(data){
      data["ip"]
    })
  //  console.log(this.ip);
    firebase.database().ref('/').push({name: name, personType: type})
  }





  classes = {'blue': false, 'purple': false, 'green': true, 'yellow': false};
  test = false;

}
