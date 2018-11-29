import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, ParamMap, Router} from '@angular/router';
import {query} from '@angular/animations';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  name: string;


  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('name')) {
        this.name = params.get('name');
      }
    });

    // ?lastname=Doe&firstname=John

    this.route.queryParamMap.subscribe((queryParam: ParamMap) => {
      // ... TO DO
    });

    //#title2

    this.route.fragment.subscribe((value: string) => {
      // ....
    });

    // data
    this.route.data.subscribe((data: Data) => {
      console.log(data);
    });
  }

  goBack() {
    this.router.navigate(['/parameters']);
  }

}
