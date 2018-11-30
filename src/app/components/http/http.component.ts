import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {User} from '../../class/user';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  private static URL = 'https://jsonplaceholder.typicode.com';

  //users: User[];

  users: Observable<User[]>;


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
   // this.users = [];
  }

  getBaseURL(): string {
    return HttpComponent.URL;
  }

  public loadUsers() {
    // c'est très bien mais pour éviter de se retaper ça à chaque requête, on utilise les intercepteurs (angular intercepteur)é
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Token': '0987DFGHJ4564',
        'X-nimp': 'On peut transmettre n\'importe quel header tant qu\'il est précédé de X-(sans espace)'
      })
    };


    /*this.http.get<User[]>(`${HttpComponent.URL}/users/`, httpOptions)
      .pipe(
        // Récupère la réponse du get
        map((users: User[]) => {

          // Récupère chacun des user
          return users.map((user: Object) => {
            return new User(user);
          });
        })
      )
      .subscribe((users: User[]) => {
          console.log(users);
          this.users = users;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        });*/
    this.users = this.http.get<User[]>(`${HttpComponent.URL}/users/`, httpOptions)
      .pipe(
        // Récupère la réponse du get
        map((users: User[]) => {

          // Récupère chacun des user
          return users.map((user: Object) => {
            return new User(user);
          });
        })
      );

  }


}
