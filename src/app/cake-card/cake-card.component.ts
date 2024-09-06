import { Component, Input, OnInit } from '@angular/core';
import { Cake } from 'src/model/cake';


@Component({
  selector: 'app-cake-card',
  templateUrl: './cake-card.component.html',
  styleUrls: ['./cake-card.component.css']
})
export class CakeCardComponent implements OnInit {


    @Input()
    cake!: Cake
    constructor() { }

    ngOnInit(): void {
    }

  }



