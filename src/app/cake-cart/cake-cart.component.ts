import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cake } from 'src/model/cake';
import { CakeRequest } from 'src/model/cake-request';

import { CakeRequestService } from '../services/cake-request.service';
import { RouteService } from '../services/route.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CakeService } from '../services/cake.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cake-cart',
  templateUrl: './cake-cart.component.html',
  styleUrls: ['./cake-cart.component.css'],
})
export class CakeCartComponent implements OnInit   {

  cake?: Cake;
  stars: Array<number> = [];
  cakeRequest: CakeRequest={} ;
   minDate:Date= new Date();
  submitStatus: boolean=false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private cakeService: CakeService,
    private cakeRequestService: CakeRequestService,
    private routeService: RouteService,
    private snackBar: MatSnackBar
  ) {}
  canDeactivate() {
    if (!this.submitStatus)
      this.submitStatus = confirm(
        'You have not submitted a request to this Order. Any details entered will be lost. Are you sure you want to leave?'
      );
    return this.submitStatus;
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      let id = param.get('id') ?? '';
      this.cakeService.getCake(id).subscribe((data) => {
        this.cake = data;
        // this.stars = new Array(this.cake.rating);
        this.submitStatus = false;
      });
    });
  }




  makeRequest( requestForm:NgForm) {
console.log(this.cakeRequest);

    if (
      this.cakeRequest.customerName &&
      this.cakeRequest.customerEmail &&
      this.cakeRequest.customerPhone &&
      this.cakeRequest.customerflatNo &&
      this.cakeRequest.customerpincode &&
      this.cakeRequest.customerstate &&
       this.cakeRequest.customerstreet &&
      this.cakeRequest.customercity &&
      this.cakeRequest.totalAmount &&
      this.cakeRequest.orderDate &&
      this.cakeRequest.quantity
      )
       {

        this.cakeRequest.cakePrice = this.cake?.price;
        console.log(this.cakeRequest.cakePrice);


      this.cakeRequest.cakeName = this.cake?.name;
      this.cakeRequestService.saveCakeRequest(this.cakeRequest).subscribe({
        next: (data) => {
          this.snackBar.open('Request Submitted', '', {
            duration: 3000,
          });
          this.submitStatus = true;
          this.routeService.navigateToHome();
        },
        error: (err) => {
          alert("Failed to Submit");
        },
      });
    }
  }

  calculateTotalAmmount() {
    if (this.cake && typeof this.cake.price === 'number' && this.cakeRequest.quantity) {
     if( this.cakeRequest?.quantity > 0){
        this.cakeRequest.totalAmount = this.cake.price * this.cakeRequest.quantity;
     }
    } else {
      this.cakeRequest.totalAmount = 0;
    }

      }
    }












