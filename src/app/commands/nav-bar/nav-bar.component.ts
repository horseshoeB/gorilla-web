import { Component, Input, OnInit } from '@angular/core';

import { Category } from '../../models/category';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() categories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
