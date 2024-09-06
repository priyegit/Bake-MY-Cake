import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  searchCake() {
    this.searchTextChanged.emit(this.searchText);
  }

  clearSearch() {
    this.searchText = '';
    this.searchTextChanged.emit(this.searchText);
  }

  constructor() {}

  ngOnInit(): void {}
}
