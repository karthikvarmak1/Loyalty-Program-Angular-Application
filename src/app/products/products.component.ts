import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import * as lodash from 'lodash';
import { MenuItem } from '../models/menuItem';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categories: any;
  cart: any[] = [];
  cartValue: number;
  priceToShow: number;
  checkCart = '';
  quantity = 0;
  gst = 0;
  gstAmount = 0;
  amountPayable = 0;
  menuItem = {};
  isProceedToCheckoutClicked = false;

  userId: string;

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }

  addToCart() {
    if (this.cart.length === 0) {
      this.checkCart = '';
      this.menuItem['count'] = 1;
      this.menuItem['itemName'] = 'HP Laptop';
      this.menuItem['price'] = 85000;
      this.cart.push(this.menuItem);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      console.log(this.cart.length);
    } else {
      this.checkCart = 'myModal';
    }
    this.cartValue = 85000;
  }

  getAmountPayable() {
    this.isProceedToCheckoutClicked = true;
    this.gst = 5;
    this.gstAmount = this.cartValue * this.gst / 100;
    this.amountPayable = this.cartValue + this.gstAmount;
  }

  onNumberChanged($event, item_name) {
    this.quantity = $event;
    this.cartValue = this.quantity * 85000;
  }

}
