import { Component, OnInit, ViewChild  } from '@angular/core';
import { CakeRequest } from 'src/model/cake-request';
import { CakeRequestService } from '../services/cake-request.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cake-requests',
  templateUrl: './cake-requests.component.html',
  styleUrls: ['./cake-requests.component.css']
})
export class CakeRequestsComponent implements OnInit {
  displayedColumns: string[] = ['orderDate','id','quantity','totalAmount','customerName','customerPhone','customerEmail','customerflatNo','customerstreet','customercity','customerstate','customerpincode'];
  cakeRequest: CakeRequest[] = [];
  dataSource!: MatTableDataSource<CakeRequest>;
  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private cakeRequestService: CakeRequestService) { }


  ngOnInit(): void {
    this.cakeRequestService.getAllCakeReqeusts().subscribe({
      next: data => {
        this.cakeRequest = data;
        this.dataSource = new MatTableDataSource(this.cakeRequest);
        this.dataSource.paginator = this.paginator
      },
      error: err => {
        alert(err);
      }
    });
  }
}



