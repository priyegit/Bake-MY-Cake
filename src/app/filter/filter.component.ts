import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CakeService  } from '../services/cake.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})


  export class FilterComponent implements OnInit  {

      cakeName: string = ' ';

      @Output()
      filterTextChanged: EventEmitter<string> = new EventEmitter<string>();

      constructor() {}

      ngOnInit(): void {}
      filterMethod() {
        this.filterTextChanged.emit(this.cakeName);
      }
    }




