import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private sevice : OrderDetailsService) {}

  foodData: any;

  ngOnInit(): void {
    this.foodData = this.sevice.foodDetails;
  }

  public items = [
    {
      Id: '1',
      command: 'select food',
    },

    {
      Id: '2',
      command: 'fill the details',
    },

    {
      Id: '3',
      command: 'your order deliver in minute',
    },
  ];
}
