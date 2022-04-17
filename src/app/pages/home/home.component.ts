import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
