import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // foodDetails

  foodDetails =[
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      fooddetails: "pan-fried masala paneer.",
      foodPrice: 200,
      foodImg:""
    }
  ];
}
