import { Component, OnInit } from '@angular/core';
import { Cake } from 'src/model/cake';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {


  cakes: Cake[] = [];


  constructor(private cakeService: CakeService) { }

  ngOnInit(): void {
    this.cakeService.getAllCakes().subscribe({
      next: data => {
        this.cakes = data;
      },
      error: err => {
        alert(err);
      }
    });
  }
  onSearchTextChanged(bakeGood: string) {
    this.cakeService.getAllCakes().subscribe({
      next: data => {
        if (bakeGood || bakeGood !== '') {
          this.cakes = data.filter(cakes =>cakes.name?.toLowerCase()?.includes(bakeGood?.toLowerCase()));
        }
        else
          this.cakes = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    });
  }


  onFilterTextChanged(category: string) {
    this.cakeService.getAllCakes().subscribe({
      next: data => {
        if (category || category !== '') {
          this.cakes = data.filter(cakes =>cakes.name?.toLowerCase()?.includes(category?.toLowerCase()));
        }
        else
          this.cakes = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    });
  }

}
