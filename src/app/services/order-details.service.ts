import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailsService {
  constructor() {}

  // foodDetails

  foodDetails = [
    {
      id: 1,
      foodCategory: 'Rice',
      fooddetails:
        'Under rice category we offer you Fried-Rice, Nasi-Goreng, Biriyani',
      foodImg: 'https://bit.ly/3OnTaln',
      food: [
        {
          name: 'Mixed Fried Rice',
          price: 650,
        },

        {
          name: 'Nasi Goreng Chicken',
          price: 600,
        },

        {
          name: 'Nasi Goreng Seafood',
          price: 680,
        },

        {
          name: 'Mongolian Chicken',
          price: 580,
        },

        {
          name: 'Mongolian Seafood',
          price: 660,
        },
      ],
    },

    {
      id: 2,
      foodCategory: 'Pizza',
      fooddetails: 'There is a collection of Pizza varient for your ',
      foodImg: 'https://bit.ly/3jSh6PR',
      foodLink: '',
      food: [
        {
          name: 'Cheese Lovers',
          price: 620,
        },

        {
          name: 'Tandoori Chicken',
          price: 620,
        },

        {
          name: 'Sausage Delight',
          price: 620,
        },

        {
          name: 'BBQ Chicken',
          price: 680,
        },

        {
          name: 'Hot Butter Cuttlefish',
          price: 750,
        },
      ],
    },

    {
      id: 3,
      foodCategory: 'Pasta',
      fooddetails:
        'Under pasta category we offer you Easy Meat Lasagna, Spaghetti Carbonara, Cheesy Tortellini and Sausage Bake',
      foodImg: 'https://bit.ly/38X1SXn',
      foodLink: '',
      food: [
        {
          name: 'Creamy Chicken Pasta',
          price: 1300,
        },

        {
          name: 'Carbonara Pasta',
          price: 1430,
        },

        {
          name: 'Prawn Aglio Pasta',
          price: 1100,
        },

        {
          name: 'Seafood Tom Yum Pasta',
          price: 1900,
        },

        {
          name: 'Kochi Cream & Chicken Pasta',
          price: 1370,
        },
      ],
    },

    {
      id: 4,
      foodCategory: 'Kottu',
      fooddetails:
        'Kottu is a Sri Lankan dish consisting of diced roti stir-fried with scrambled egg, onions, chillies, spices, and optional vegetables or meat, such as beef and chicken also occasionally mutton or chicken',
      foodImg: 'https://bit.ly/3MhJdEd',
      foodLink: '',
      food: [
        {
          name: 'Chicken Cheese Kottu',
          price: 950,
        },

        {
          name: 'Roast Chicken Kottu',
          price: 750,
        },

        {
          name: 'Chicken Kottu',
          price: 650,
        },

        {
          name: 'Seafood Rice',
          price: 750,
        },

        {
          name: 'Chicken Masala Cheese Kottu',
          price: 950,
        },
      ],
    },

    {
      id: 5,
      foodCategory: 'Grilled - Chicken',
      fooddetails: '',
      foodImg: 'https://bit.ly/3k0KXW5',
      foodLink: '',
      food: [
        {
          name: 'BBQ Chicken (Full)',
          price: 2100,
        },

        {
          name: 'Chilli & Honey Grilled Chicken',
          price: 1500,
        },

        {
          name: 'BBQ Chicken Whole Leg',
          price: 1190,
        },

        {
          name: 'Lemon Basil Chicken',
          price: 1250,
        },

        {
          name: 'Tandoori Chicken Thigh',
          price: 1600,
        },
      ],
    },
  ];
}
